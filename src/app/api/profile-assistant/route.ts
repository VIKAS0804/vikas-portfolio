import { randomUUID } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import {
  answerProfileQuestion,
  type AssistantHistoryMessage,
} from "@/data/profile-assistant";
import {
  appendChatMessage,
  countRecentUserMessages,
  createOrTouchConversation,
  deleteConversation,
  getRecentChatMessages,
  isChatStorageConfigured,
  rateChatMessage,
  removeExpiredConversations,
} from "@/lib/clip-store";

export const runtime = "nodejs";

const COOKIE_NAME = "clip_conversation";
const MAX_MESSAGE_LENGTH = 800;
const COOKIE_MAX_AGE = 60 * 60 * 24 * 90;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function conversationId(request: NextRequest) {
  const value = request.cookies.get(COOKIE_NAME)?.value;
  return value && UUID_PATTERN.test(value) ? value : null;
}

function requestIsSameOrigin(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin) return true;

  try {
    const forwardedHost = request.headers.get("x-forwarded-host");
    const host = forwardedHost ?? request.headers.get("host");
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function normalizeHistory(value: unknown): AssistantHistoryMessage[] {
  if (!Array.isArray(value)) return [];

  return value
    .filter(
      (item): item is AssistantHistoryMessage =>
        typeof item === "object" &&
        item !== null &&
        (item as AssistantHistoryMessage).role !== undefined &&
        ["user", "assistant"].includes(
          (item as AssistantHistoryMessage).role
        ) &&
        typeof (item as AssistantHistoryMessage).content === "string"
    )
    .slice(-8)
    .map((item) => ({
      role: item.role,
      content: item.content.slice(0, 1600),
    }));
}

function setConversationCookie(response: NextResponse, id: string) {
  response.cookies.set(COOKIE_NAME, id, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function GET(request: NextRequest) {
  const id = conversationId(request);
  if (!id || !isChatStorageConfigured()) {
    return NextResponse.json({
      messages: [],
      stored: false,
      storageConfigured: isChatStorageConfigured(),
    });
  }

  try {
    const messages = await getRecentChatMessages(id, 30);
    return NextResponse.json({
      messages,
      stored: true,
      storageConfigured: true,
    });
  } catch (error) {
    console.error("Could not load Clip conversation", error);
    return NextResponse.json({
      messages: [],
      stored: false,
      storageConfigured: false,
    });
  }
}

export async function POST(request: NextRequest) {
  if (!requestIsSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 20_000) {
    return NextResponse.json({ error: "Request is too large." }, { status: 413 });
  }

  let body: { message?: unknown; consentToSave?: unknown; history?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  if (!message || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      { error: `Please enter between 1 and ${MAX_MESSAGE_LENGTH} characters.` },
      { status: 400 }
    );
  }

  const clientHistory = normalizeHistory(body.history);
  const shouldStore = body.consentToSave === true && isChatStorageConfigured();

  if (!shouldStore) {
    return NextResponse.json({
      answer: answerProfileQuestion(message, clientHistory),
      messageId: null,
      stored: false,
      storageConfigured: isChatStorageConfigured(),
    });
  }

  try {
    const id = conversationId(request) ?? randomUUID();
    await createOrTouchConversation(id);

    if ((await countRecentUserMessages(id)) >= 40) {
      return NextResponse.json(
        { error: "Clip needs a short break. Please try again in a little while." },
        { status: 429 }
      );
    }

    const storedHistory = await getRecentChatMessages(id, 10);
    await appendChatMessage(id, "user", message);
    const answer = answerProfileQuestion(message, storedHistory);
    const messageId = await appendChatMessage(id, "assistant", answer);

    const response = NextResponse.json({
      answer,
      messageId,
      stored: true,
      storageConfigured: true,
    });
    setConversationCookie(response, id);
    void removeExpiredConversations().catch((error) =>
      console.error("Could not remove expired Clip conversations", error)
    );
    return response;
  } catch (error) {
    console.error("Could not save Clip conversation", error);
    return NextResponse.json({
      answer: answerProfileQuestion(message, clientHistory),
      messageId: null,
      stored: false,
      storageConfigured: false,
    });
  }
}

export async function PATCH(request: NextRequest) {
  if (!requestIsSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const id = conversationId(request);
  if (!id || !isChatStorageConfigured()) {
    return NextResponse.json({ error: "No saved conversation." }, { status: 404 });
  }

  const body = (await request.json().catch(() => null)) as {
    messageId?: unknown;
    helpful?: unknown;
  } | null;
  const messageId = Number(body?.messageId);
  if (!Number.isInteger(messageId) || typeof body?.helpful !== "boolean") {
    return NextResponse.json({ error: "Invalid feedback." }, { status: 400 });
  }

  await rateChatMessage(id, messageId, body.helpful);
  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  if (!requestIsSameOrigin(request)) {
    return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
  }

  const id = conversationId(request);
  if (id) await deleteConversation(id);

  const response = NextResponse.json({ ok: true });
  response.cookies.set(COOKIE_NAME, "", { path: "/", maxAge: 0 });
  return response;
}

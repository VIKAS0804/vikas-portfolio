import { neon } from "@neondatabase/serverless";

export type StoredChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  helpful: boolean | null;
  created_at: string;
};

let schemaReady: Promise<void> | null = null;

function database() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) return null;
  return neon(databaseUrl);
}

export function isChatStorageConfigured() {
  return Boolean(process.env.DATABASE_URL);
}

export async function ensureClipSchema() {
  const sql = database();
  if (!sql) throw new Error("DATABASE_URL is not configured");

  if (!schemaReady) {
    schemaReady = (async () => {
      await sql`
        CREATE TABLE IF NOT EXISTS clip_conversations (
          id UUID PRIMARY KEY,
          consented_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`
        CREATE TABLE IF NOT EXISTS clip_messages (
          id BIGSERIAL PRIMARY KEY,
          conversation_id UUID NOT NULL REFERENCES clip_conversations(id) ON DELETE CASCADE,
          role TEXT NOT NULL CHECK (role IN ('user', 'assistant')),
          content TEXT NOT NULL CHECK (char_length(content) <= 4000),
          helpful BOOLEAN,
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`
        CREATE INDEX IF NOT EXISTS clip_messages_conversation_created_idx
        ON clip_messages (conversation_id, created_at DESC)
      `;
    })().catch((error) => {
      schemaReady = null;
      throw error;
    });
  }

  await schemaReady;
}

export async function createOrTouchConversation(conversationId: string) {
  const sql = database();
  if (!sql) throw new Error("DATABASE_URL is not configured");
  await ensureClipSchema();

  await sql`
    INSERT INTO clip_conversations (id)
    VALUES (${conversationId})
    ON CONFLICT (id) DO UPDATE SET updated_at = NOW()
  `;
}

export async function appendChatMessage(
  conversationId: string,
  role: "user" | "assistant",
  content: string
) {
  const sql = database();
  if (!sql) throw new Error("DATABASE_URL is not configured");

  const rows = (await sql`
    INSERT INTO clip_messages (conversation_id, role, content)
    VALUES (${conversationId}, ${role}, ${content})
    RETURNING id
  `) as Array<{ id: number }>;

  await sql`
    UPDATE clip_conversations
    SET updated_at = NOW()
    WHERE id = ${conversationId}
  `;

  return rows[0]?.id ?? null;
}

export async function getRecentChatMessages(
  conversationId: string,
  limit = 12
) {
  const sql = database();
  if (!sql) throw new Error("DATABASE_URL is not configured");
  await ensureClipSchema();

  const rows = (await sql`
    SELECT id, role, content, helpful, created_at
    FROM clip_messages
    WHERE conversation_id = ${conversationId}
    ORDER BY created_at DESC, id DESC
    LIMIT ${limit}
  `) as StoredChatMessage[];

  return rows.reverse();
}

export async function countRecentUserMessages(conversationId: string) {
  const sql = database();
  if (!sql) throw new Error("DATABASE_URL is not configured");

  const rows = (await sql`
    SELECT COUNT(*)::int AS count
    FROM clip_messages
    WHERE conversation_id = ${conversationId}
      AND role = 'user'
      AND created_at > NOW() - INTERVAL '1 hour'
  `) as Array<{ count: number }>;

  return rows[0]?.count ?? 0;
}

export async function rateChatMessage(
  conversationId: string,
  messageId: number,
  helpful: boolean
) {
  const sql = database();
  if (!sql) throw new Error("DATABASE_URL is not configured");
  await ensureClipSchema();

  await sql`
    UPDATE clip_messages
    SET helpful = ${helpful}
    WHERE id = ${messageId}
      AND conversation_id = ${conversationId}
      AND role = 'assistant'
  `;
}

export async function deleteConversation(conversationId: string) {
  const sql = database();
  if (!sql) return;
  await ensureClipSchema();
  await sql`DELETE FROM clip_conversations WHERE id = ${conversationId}`;
}

export async function removeExpiredConversations() {
  const sql = database();
  if (!sql) return;
  await ensureClipSchema();
  await sql`
    DELETE FROM clip_conversations
    WHERE updated_at < NOW() - INTERVAL '90 days'
  `;
}

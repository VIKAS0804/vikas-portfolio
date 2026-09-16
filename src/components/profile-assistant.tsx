"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type ChatMessage = {
  id?: number | null;
  role: "user" | "assistant";
  content: string;
  helpful?: boolean | null;
};

type ConsentChoice = "undecided" | "save" | "temporary";

const welcomeMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I’m Clip. I know my way around Vikas’s work. Ask me about a project, his experience, or the tools he likes building with.",
};

const suggestions = [
  "What is Vikas building now?",
  "Tell me about TicketForge",
  "What did he work on at Jio?",
  "Which project uses machine learning?",
];

export default function ProfileAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [consent, setConsent] = useState<ConsentChoice>("undecided");
  const [storageConfigured, setStorageConfigured] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let active = true;

    fetch("/api/profile-assistant", { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        if (!active) return;
        setStorageConfigured(Boolean(data.storageConfigured));
        if (data.stored && Array.isArray(data.messages) && data.messages.length) {
          setMessages(data.messages);
          setConsent("save");
        }
      })
      .catch(() => undefined)
      .finally(() => active && setLoaded(true));

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(value: string) {
    const question = value.trim();
    if (!question || loading || consent === "undecided") return;

    const history = messages.map(({ role, content }) => ({ role, content }));
    const userMessage: ChatMessage = { role: "user", content: question };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/profile-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          consentToSave: consent === "save",
          history,
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Clip could not answer.");

      setStorageConfigured(Boolean(data.storageConfigured));
      if (consent === "save" && !data.stored) setConsent("temporary");
      setMessages((current) => [
        ...current,
        {
          id: data.messageId,
          role: "assistant",
          content: data.answer,
          helpful: null,
        },
      ]);
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Clip could not answer.");
    } finally {
      setLoading(false);
    }
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  async function rateMessage(messageId: number, helpful: boolean) {
    setMessages((current) =>
      current.map((message) =>
        message.id === messageId ? { ...message, helpful } : message
      )
    );

    await fetch("/api/profile-assistant", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageId, helpful }),
    }).catch(() => undefined);
  }

  async function clearConversation() {
    if (consent === "save") {
      await fetch("/api/profile-assistant", { method: "DELETE" }).catch(
        () => undefined
      );
    }
    setMessages([welcomeMessage]);
    setConsent("undecided");
    setError("");
  }

  const statusText =
    consent === "save"
      ? "Saved privately for 90 days"
      : consent === "temporary"
        ? storageConfigured
          ? "This chat is not saved"
          : "Memory is not connected yet"
        : "Choose how this chat is handled";

  return (
    <aside className={`clip-assistant ${open ? "clip-assistant-open" : ""}`}>
      {!open && (
        <button
          className="clip-launcher"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open Clip profile assistant"
        >
          <span className="clip-launcher-face" aria-hidden="true">
            📎
          </span>
          <span>
            <strong>Ask Clip</strong>
            <small>Questions about Vikas</small>
          </span>
        </button>
      )}

      {open && (
        <section className="clip-panel" aria-label="Clip profile assistant">
          <header className="clip-titlebar">
            <span>
              <span aria-hidden="true">📎</span> Clip Assistant
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close Clip assistant"
            >
              ×
            </button>
          </header>

          <div className="clip-intro">
            <span className="clip-mascot" aria-hidden="true">
              📎
            </span>
            <div>
              <strong>Looking for something?</strong>
              <p>I can guide you through Vikas’s projects and experience.</p>
            </div>
          </div>

          <div className="clip-messages" ref={scrollRef} aria-live="polite">
            {messages.map((message, index) => (
              <article
                className={`clip-message clip-message-${message.role}`}
                key={`${message.role}-${message.id ?? index}`}
              >
                <span>{message.content}</span>
                {message.role === "assistant" && message.id && consent === "save" && (
                  <div className="clip-feedback" aria-label="Rate this answer">
                    <span>Helpful?</span>
                    <button
                      type="button"
                      className={message.helpful === true ? "selected" : ""}
                      onClick={() => void rateMessage(message.id!, true)}
                      aria-label="Helpful answer"
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      className={message.helpful === false ? "selected" : ""}
                      onClick={() => void rateMessage(message.id!, false)}
                      aria-label="Not helpful answer"
                    >
                      No
                    </button>
                  </div>
                )}
              </article>
            ))}
            {loading && <div className="clip-typing">Clip is looking that up…</div>}
          </div>

          {consent === "undecided" ? (
            <div className="clip-consent">
              <strong>Conversation memory</strong>
              <p>
                Save this chat in Vikas’s private database for up to 90 days?
                Please do not include sensitive information.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => setConsent("save")}
                  disabled={!loaded || !storageConfigured}
                >
                  Save my chat
                </button>
                <button type="button" onClick={() => setConsent("temporary")}>
                  Use without saving
                </button>
              </div>
              {loaded && !storageConfigured && (
                <small>Private memory is being connected. Chat still works without saving.</small>
              )}
            </div>
          ) : (
            <>
              {messages.length <= 2 && (
                <div className="clip-suggestions" aria-label="Suggested questions">
                  {suggestions.map((suggestion) => (
                    <button
                      type="button"
                      key={suggestion}
                      onClick={() => void sendMessage(suggestion)}
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              <form className="clip-form" onSubmit={submit}>
                <label htmlFor="clip-question">Ask about Vikas</label>
                <div>
                  <input
                    id="clip-question"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    maxLength={800}
                    placeholder="Ask about a project or skill..."
                    disabled={loading}
                  />
                  <button type="submit" disabled={loading || !input.trim()}>
                    Send
                  </button>
                </div>
                {error && <p className="clip-error">{error}</p>}
              </form>
            </>
          )}

          <div className="clip-statusbar">
            <span>{statusText}</span>
            {consent !== "undecided" && (
              <button type="button" onClick={() => void clearConversation()}>
                Clear chat
              </button>
            )}
          </div>
        </section>
      )}
    </aside>
  );
}

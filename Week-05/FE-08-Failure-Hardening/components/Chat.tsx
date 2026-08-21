"use client";

import { useChat } from "ai/react";
import { useState } from "react";
import EmptyState from "./EmptyState";
import ErrorMessage from "./ErrorMessage";
import LoadingSkeleton from "./LoadingSkeleton";

export default function Chat() {
  const [input, setInput] = useState("");

  const { messages, append, isLoading, error, reload } = useChat({
    api: "/api/chat"
  });

  const send = async (value: string) => {
    const text = value.trim();

    if (!text || isLoading) return;

    setInput("");
    await append({
      role: "user",
      content: text
    });
  };

  const retry = async () => {
    if (isLoading) return;
    await reload();
  };

  return (
    <section className="chat">
      {messages.length === 0 ? (
        <EmptyState onSelect={send} />
      ) : (
        <div className="messages">
          {messages.map((message) => (
            <article
              key={message.id}
              className={`message ${message.role}`}
            >
              <span className="message-label">
                {message.role === "user" ? "You" : "Aditya AI"}
              </span>
              <div className="bubble">
                {message.content || "Waiting for response…"}
              </div>
            </article>
          ))}

          {isLoading && <LoadingSkeleton />}

          {error && (
            <ErrorMessage
              message={
                error.message.includes("429")
                  ? "The AI service is temporarily rate-limited. Please wait a moment and retry."
                  : error.message || "The connection was interrupted."
              }
              onRetry={retry}
              retrying={isLoading}
            />
          )}
        </div>
      )}

      <form
        className="composer"
        onSubmit={(event) => {
          event.preventDefault();
          void send(input);
        }}
      >
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Ask something about Aditya…"
          aria-label="Ask something about Aditya"
          disabled={isLoading}
        />

        <button
          className="primary"
          type="submit"
          disabled={isLoading || !input.trim()}
        >
          {isLoading ? "Thinking…" : "Send"}
        </button>
      </form>

      <p className="note">
        Designed for Week 05 failure and edge-case testing.
      </p>
    </section>
  );
}
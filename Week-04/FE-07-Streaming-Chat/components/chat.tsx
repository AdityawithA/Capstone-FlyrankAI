"use client";

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";

const suggestedPrompts = [
  "Tell me about Aditya's strongest projects.",
  "What technologies does Aditya work with?",
  "Tell me about InterviewAce AI.",
  "Why should a company hire Aditya?",
];

export default function Chat() {
  const [input, setInput] = useState("");
  const [isAtBottom, setIsAtBottom] = useState(true);

  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isGenerating =
    status === "submitted" || status === "streaming";

  const scrollToBottom = (smooth = true) => {
    const container = scrollRef.current;

    if (!container) return;

    container.scrollTo({
      top: container.scrollHeight,
      behavior: smooth ? "smooth" : "auto",
    });
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const handleScroll = () => {
      const distanceFromBottom =
        container.scrollHeight -
        container.scrollTop -
        container.clientHeight;

      setIsAtBottom(distanceFromBottom < 100);
    };

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isAtBottom) {
      scrollToBottom(false);
    }
  }, [messages, isAtBottom]);

  const submitMessage = async (event: FormEvent) => {
    event.preventDefault();

    const text = input.trim();

    if (!text || isGenerating) return;

    setInput("");

    await sendMessage({
      text,
    });
  };

  const handleSuggestion = async (prompt: string) => {
    if (isGenerating) return;

    setInput("");

    await sendMessage({
      text: prompt,
    });
  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      if (!isGenerating && input.trim()) {
        event.currentTarget.form?.requestSubmit();
      }
    }
  };

  const getMessageText = (
    message: (typeof messages)[number]
  ) => {
    return message.parts
      .filter((part) => part.type === "text")
      .map((part) => part.text)
      .join("");
  };

  return (
    <main className="chat-shell">
      <section className="chat-card">
        <header className="chat-header">
          <div className="brand">
            <div className="avatar">AK</div>

            <div>
              <span className="eyebrow">
                PERSONAL AI ASSISTANT
              </span>

              <h1>Ask Aditya</h1>
            </div>
          </div>

          <div className="online">
            <span className="online-dot" />
            Online
          </div>
        </header>

        <div
          ref={scrollRef}
          className="messages"
          aria-live="polite"
          aria-label="Conversation"
        >
          {messages.length === 0 && (
            <div className="welcome">
              <div className="welcome-icon">✦</div>

              <h2>Hi! I'm Aditya's AI assistant.</h2>

              <p>
                Ask me about his projects, skills, education,
                experience, or technical background.
              </p>
            </div>
          )}

          {messages.map((message) => {
            const text = getMessageText(message);

            if (!text) return null;

            return (
              <div
                key={message.id}
                className={`message ${
                  message.role === "user"
                    ? "message-user"
                    : "message-assistant"
                }`}
              >
                <div className="message-label">
                  {message.role === "user"
                    ? "You"
                    : "Aditya AI"}
                </div>

                <div className="bubble">
                  {text}
                </div>
              </div>
            );
          })}

          {isGenerating &&
            messages[messages.length - 1]?.role !==
              "assistant" && (
              <div className="message message-assistant">
                <div className="message-label">
                  Aditya AI
                </div>

                <div className="bubble thinking">
                  <span />
                  <span />
                  <span />
                  <strong>Thinking</strong>
                </div>
              </div>
            )}

          {isGenerating &&
            messages[messages.length - 1]?.role ===
              "assistant" && (
              <div className="streaming-indicator">
                <span className="stream-dot" />
                Streaming response...
              </div>
            )}
        </div>

        {!isAtBottom && (
          <button
            type="button"
            className="jump-button"
            onClick={() => {
              setIsAtBottom(true);
              scrollToBottom();
            }}
          >
            ↓ Jump to latest
          </button>
        )}

        <div className="suggestions" aria-label="Suggested questions">
          {suggestedPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              disabled={isGenerating}
              onClick={() => handleSuggestion(prompt)}
            >
              {prompt}
            </button>
          ))}
        </div>

        <form
          className="composer"
          onSubmit={submitMessage}
        >
          <textarea
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask something about Aditya..."
            aria-label="Message"
            rows={1}
            disabled={isGenerating}
          />

          {isGenerating ? (
            <button
              type="button"
              className="stop-button"
              onClick={() => stop()}
              aria-label="Stop generating response"
            >
              Stop
            </button>
          ) : (
            <button
              type="submit"
              className="send-button"
              disabled={!input.trim()}
            >
              Send
            </button>
          )}
        </form>

        <p className="note">
          Responses are generated from Aditya's portfolio
          information. Verify important hiring details
          against his resume and project links.
        </p>
      </section>
    </main>
  );
}
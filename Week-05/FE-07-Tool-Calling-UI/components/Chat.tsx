 "use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { FormEvent, useMemo, useState } from "react";
import ProjectAnalysis from "@/components/ProjectAnalysis";
import ToolState from "@/components/ToolState";

type ProjectAnalysisData = {
  name: string;
  score: number;
  summary: string;
  technologies: string[];
  strengths: string[];
  highlights: string[];
  analyzedAt?: string;
};

export default function Chat() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, stop, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  const quickPrompts = useMemo(
    () => [
      "Analyze InterviewAce AI",
      "Analyze CampusSync",
      "Analyze TypeRush",
      "Show me a tool error",
    ],
    []
  );

  async function submitMessage(text: string) {
    const value = text.trim();
    if (!value || isBusy) return;

    setInput("");
    await sendMessage({ text: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void submitMessage(input);
  }

  return (
    <main className="page-shell">
      <section className="chat-app">
        <header className="hero">
          <div>
            <span className="eyebrow">WEEK 05 · GENERATIVE UI</span>
            <h1>Aditya AI</h1>
            <p>
              A streaming AI assistant with typed server-side tool calling and
              real UI tool results.
            </p>
          </div>

          <div className="status-pill">
            <span />
            {isBusy ? "Working" : "Online"}
          </div>
        </header>

        <div className="assignment-strip">
          <span>SERVER TOOL</span>
          <strong>analyzeProject</strong>
          <span>·</span>
          <span>Zod schema</span>
          <span>·</span>
          <span>Generative UI</span>
        </div>

        <section className="messages" aria-live="polite">
          {messages.length === 0 && (
            <div className="welcome">
              <div className="welcome-icon">✦</div>
              <h2>Ask me to analyze a project.</h2>
              <p>
                The AI can call a server-side tool and turn the structured
                result into a Project Analysis Card.
              </p>

              <div className="demo-flow">
                <span>Prompt</span>
                <b>→</b>
                <span>Tool call</span>
                <b>→</b>
                <span>Structured data</span>
                <b>→</b>
                <span>UI card</span>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <article
              key={message.id}
              className={`message ${message.role === "user" ? "user" : "assistant"}`}
            >
              <div className="message-label">
                {message.role === "user" ? "YOU" : "ADITYA AI"}
              </div>

              <div className="message-content">
                {message.parts.map((part, index) => {
                  if (part.type === "text") {
                    return (
                      <p className="text-part" key={`${message.id}-text-${index}`}>
                        {part.text}
                      </p>
                    );
                  }

                  if (part.type === "tool-analyzeProject") {
                    if (part.state === "input-streaming") {
                      return (
                        <ToolState
                          key={`${message.id}-tool-${index}`}
                          state="input-streaming"
                          input={part.input}
                        />
                      );
                    }

                    if (part.state === "input-available") {
                      return (
                        <ToolState
                          key={`${message.id}-tool-${index}`}
                          state="input-available"
                          input={part.input}
                        />
                      );
                    }

                    if (part.state === "output-error") {
                      return (
                        <ToolState
                          key={`${message.id}-tool-${index}`}
                          state="output-error"
                          errorText={part.errorText}
                        />
                      );
                    }

                    if (part.state === "output-available") {
                      return (
                        <div key={`${message.id}-tool-${index}`}>
                          <ToolState state="output-available" />
                          <ProjectAnalysis
                            data={part.output as ProjectAnalysisData}
                          />
                        </div>
                      );
                    }
                  }

                  return null;
                })}

                {message.role === "assistant" &&
                  message.parts.length === 0 &&
                  status === "streaming" && (
                    <ToolState state="input-streaming" />
                  )}
              </div>
            </article>
          ))}

          {error && (
            <div className="request-error" role="alert">
              <strong>Request error</strong>
              <span>{error.message}</span>
            </div>
          )}
        </section>

        <div className="quick-prompts">
          {quickPrompts.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => void submitMessage(prompt)}
              disabled={isBusy}
            >
              {prompt}
            </button>
          ))}
        </div>

        <form className="composer" onSubmit={handleSubmit}>
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void submitMessage(input);
              }
            }}
            placeholder="Ask Aditya AI to analyze a project..."
            aria-label="Chat message"
            rows={1}
            disabled={isBusy}
          />

          {isBusy ? (
            <button
              className="stop-button"
              type="button"
              onClick={stop}
              aria-label="Stop generation"
            >
              Stop
            </button>
          ) : (
            <button
              className="send-button"
              type="submit"
              disabled={!input.trim()}
            >
              Send
            </button>
          )}
        </form>

        <footer className="footer-note">
          Tool lifecycle: input streaming → input available → output available
          / output error
        </footer>
      </section>
    </main>
  );
}

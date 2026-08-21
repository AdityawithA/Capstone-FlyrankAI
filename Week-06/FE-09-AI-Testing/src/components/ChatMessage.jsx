import React from "react";

export default function ChatMessage({ message }) {
  if (message.state === "pending") {
    return (
      <div className="message assistant pending" role="status" aria-label="AI response pending">
        <span className="skeleton line" />
        <span className="skeleton short" />
      </div>
    );
  }

  if (message.state === "error") {
    return (
      <div className="message error" role="alert">
        <strong>AI error</strong>
        <p>{message.content}</p>
        <button type="button">Retry</button>
      </div>
    );
  }

  return (
    <div className={`message assistant ${message.state}`} aria-label="AI response">
      {message.state === "streaming" && <span className="stream-dot" aria-hidden="true" />}
      <p>{message.content}</p>
    </div>
  );
}
import React, { useState } from "react";
import ChatMessage from "./components/ChatMessage";
import ProfileForm from "./components/ProfileForm";
import ToolResult from "./components/ToolResult";

const starter = {
  role: "assistant",
  content: "Ask me about Aditya's projects, skills, or experience.",
  state: "idle"
};

export default function App() {
  const [messages, setMessages] = useState([starter]);
  const [status, setStatus] = useState("idle");

  function runDemo() {
    setStatus("pending");
    setMessages([{ role: "assistant", content: "", state: "pending" }]);

    setTimeout(() => {
      setStatus("streaming");
      setMessages([{ role: "assistant", content: "Aditya builds full-stack and AI projects with Python, JavaScript, React, Flask, and ML tooling.", state: "streaming" }]);

      setTimeout(() => {
        setStatus("done");
        setMessages([{ role: "assistant", content: "Aditya builds full-stack and AI projects with Python, JavaScript, React, Flask, and ML tooling.", state: "idle" }]);
      }, 350);
    }, 350);
  }

  function showError() {
    setStatus("error");
    setMessages([{ role: "assistant", content: "The AI route is temporarily unavailable. Please retry.", state: "error" }]);
  }

  return (
    <main className="shell">
      <header>
        <p className="eyebrow">WEEK 06 · FL-09</p>
        <h1>AI Testing Lab</h1>
        <p className="lead">A testable chat UI with mocked AI responses, a validated profile form, and a structured tool result.</p>
      </header>

      <section className="panel" aria-labelledby="chat-title">
        <div className="panel-head">
          <h2 id="chat-title">Chat renderer</h2>
          <span className="badge" data-testid="status">{status}</span>
        </div>
        <div className="messages" aria-label="Chat messages">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}
        </div>
        <div className="controls">
          <button type="button" onClick={runDemo}>Run mocked AI</button>
          <button type="button" className="ghost" onClick={showError}>Simulate error</button>
        </div>
      </section>

      <section className="grid">
        <ProfileForm />
        <ToolResult />
      </section>
    </main>
  );
}
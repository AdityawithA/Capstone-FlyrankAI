 "use client";

import { FormEvent, useState } from "react";

const examples = [
  "Review Aditya for a Full Stack Developer Intern role.",
  "Here is a job description: We need a React developer with Node.js, PostgreSQL, Docker and REST API experience. Assess Aditya's fit.",
  "Which of Aditya's projects should be improved first for an AI Engineer internship?"
];

export default function Agent() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Agent request failed.");
      }

      setResult(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">WEEK 05 · FL-07 · BUILD THE AGENT</p>
        <h1>Aditya AI Agent</h1>
        <p className="subtitle">
          A tool-using career agent that reads Aditya&apos;s portfolio and
          turns a target role into a practical improvement plan.
        </p>
      </section>

      <section className="panel">
        <div className="tool-status">
          <span className="dot" />
          <div>
            <strong>Live tool connected</strong>
            <small>get_portfolio → local portfolio data</small>
          </div>
        </div>

        <div className="examples">
          <span>Try an example:</span>
          {examples.map((example) => (
            <button key={example} onClick={() => setInput(example)}>
              {example}
            </button>
          ))}
        </div>

        <form onSubmit={submit} className="composer">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a target role or paste a job description..."
            rows={5}
            disabled={loading}
          />
          <button className="send" disabled={loading || !input.trim()}>
            {loading ? "Agent working..." : "Run agent"}
          </button>
        </form>

        {loading && (
          <div className="working">
            <div className="spinner" />
            <div>
              <strong>Agent is working</strong>
              <span>Reading portfolio evidence → analyzing role → preparing plan</span>
            </div>
          </div>
        )}

        {error && (
          <div className="error">
            <strong>Agent error</strong>
            <p>{error}</p>
          </div>
        )}

        {result && (
          <article className="result">
            <div className="result-header">
              <span>AGENT RESULT</span>
              <span className="verified">Tool-backed review</span>
            </div>
            <div className="markdown">{result}</div>
          </article>
        )}
      </section>

      <footer>
        FL-07 MVP · Server-side Groq key · Tool execution stays on the server
      </footer>
    </main>
  );
}
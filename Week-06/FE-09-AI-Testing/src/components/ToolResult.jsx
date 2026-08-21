import React from "react";

export default function ToolResult() {
  const result = {
    score: 92,
    finding: "Strong full-stack foundation",
    nextAction: "Deepen production AI engineering"
  };

  return (
    <section className="panel" aria-labelledby="tool-title">
      <h2 id="tool-title">Tool result</h2>
      <div className="score" aria-label={`Score ${result.score}`}>{result.score}</div>
      <p><strong>Finding:</strong> {result.finding}</p>
      <p><strong>Next action:</strong> {result.nextAction}</p>
    </section>
  );
}
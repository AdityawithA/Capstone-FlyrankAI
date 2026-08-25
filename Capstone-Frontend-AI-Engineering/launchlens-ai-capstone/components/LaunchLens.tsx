"use client";

import React, { FormEvent, useState } from "react";

type Brief = {
  title: string;
  summary: string;
  targetUsers: string[];
  problem: string;
  mvp: string[];
  acceptanceCriteria: string[];
  risks: string[];
  nextStep: string;
};

const examples = [
  {
    label: "Study planner",
    text: "A study planner that turns a student's syllabus and exam dates into a realistic weekly plan."
  },
  {
    label: "Café forecasting",
    text: "A lightweight tool for small cafés to predict tomorrow's ingredient needs from recent sales."
  },
  {
    label: "Portfolio review",
    text: "A portfolio reviewer that helps junior developers turn project descriptions into stronger case studies."
  }
];

export default function LaunchLens() {
  const [idea, setIdea] = useState("");
  const [brief, setBrief] = useState<Brief | null>(null);
  const [demoMode, setDemoMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function analyze(event: FormEvent) {
    event.preventDefault();
    setError("");
    setBrief(null);
    setLoading(true);

    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Something went wrong.");
      setBrief(data.brief);
      setDemoMode(Boolean(data.demoMode));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to analyze the idea.");
    } finally {
      setLoading(false);
    }
  }

  function loadExample(example: string) {
    setIdea(example);
    setBrief(null);
    setError("");
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="/" aria-label="LaunchLens home">
          <span className="brand-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">LaunchLens</span>
          <span className="brand-tag">AI</span>
        </a>

        <div className="topbar-right">
          <span className="availability">
            <span className="pulse-dot" aria-hidden="true" />
            AI workspace
          </span>
          <span className="version">v1.0</span>
        </div>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy-wrap">
          <div className="hero-kicker">
            <span className="kicker-line" aria-hidden="true" />
            PRODUCT INTELLIGENCE WORKSPACE
          </div>

          <h1 id="page-title" aria-label="Turn a rough idea into a buildable product">
            From <em>idea</em> to
            <br />
            <span>buildable.</span>
          </h1>

          <p className="hero-description">
            Turn early product thinking into a focused brief with the help of
            AI. Clarify the problem, define the MVP, surface risks, and know
            what to validate next.
          </p>

          <div className="hero-proof">
            <span>Structured AI output</span>
            <span>•</span>
            <span>Private server-side API</span>
            <span>•</span>
            <span>Built for makers</span>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit-ring ring-one" />
          <div className="orbit-ring ring-two" />
          <div className="orbit-core">
            <span>✦</span>
          </div>
          <div className="orbit-label label-top">CLARIFY</div>
          <div className="orbit-label label-right">FOCUS</div>
          <div className="orbit-label label-bottom">VALIDATE</div>
        </div>
      </section>

      <section className="workspace" aria-label="LaunchLens product brief workspace">
        <form className="idea-panel panel" onSubmit={analyze}>
          <div className="panel-topline">
            <div className="step-number">01</div>
            <div>
              <p className="panel-eyebrow">INPUT</p>
              <h2>Shape the idea</h2>
            </div>
            <span className="char-count" aria-live="polite">
              {idea.length.toLocaleString()}/4,000
            </span>
          </div>

          <div className="input-frame">
            <label htmlFor="idea">Your product idea</label>
            <textarea
              id="idea"
              aria-label="Describe your product idea"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Tell us what you're thinking about. Who is it for? What problem does it solve?"
              maxLength={4000}
              rows={9}
              required
              aria-describedby="idea-help"
            />
            <div className="textarea-meta">
              <span id="idea-help">2–6 sentences works best</span>
              <span>AI will structure the thinking</span>
            </div>
          </div>

          <div className="example-area">
            <div className="example-heading">
              <span>Need a starting point?</span>
              <span className="example-caption">Try one</span>
            </div>
            <div className="example-grid">
              {examples.map((example) => (
                <button
                  type="button"
                  key={example.label}
                  className="example-card"
                  onClick={() => loadExample(example.text)}
                >
                  <span className="example-icon" aria-hidden="true">
                    {example.label === "Study planner" ? "◒" : example.label === "Café forecasting" ? "◌" : "◇"}
                  </span>
                  <span>
                    <strong>{example.label}</strong>
                    <small>Use sample idea</small>
                  </span>
                  <span className="example-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div className="alert" role="alert">
              <span className="alert-icon" aria-hidden="true">!</span>
              <div>
                <strong>We couldn't complete that.</strong>
                <span>{error}</span>
              </div>
            </div>
          )}

          <button
            className="generate-button"
            type="submit"
            aria-label="Build my brief"
            disabled={loading || idea.trim().length < 20}
          >
            <span className="button-text">
              {loading ? "Building your brief…" : "Build product brief"}
            </span>
            <span className="button-icon" aria-hidden="true">
              {loading ? <span className="spinner" /> : "→"}
            </span>
          </button>

          <p className="privacy-note">
            <span aria-hidden="true">◇</span>
            Your idea is sent securely to the AI service and is not stored by LaunchLens.
          </p>
        </form>

        <section className="output-panel panel" aria-live="polite" aria-busy={loading}>
          <div className="output-topline">
            <div className="step-number">02</div>
            <div>
              <p className="panel-eyebrow">AI SYNTHESIS</p>
              <h2>Product brief</h2>
            </div>
            <span className="ai-badge">
              <span className="ai-badge-dot" aria-hidden="true" />
              GEMINI
            </span>
          </div>

          {!brief && !loading && (
            <div className="output-empty">
              <div className="empty-visual" aria-hidden="true">
                <div className="empty-grid">
                  {Array.from({ length: 9 }).map((_, i) => <span key={i} />)}
                </div>
                <div className="empty-star">✦</div>
              </div>
              <p className="empty-label">WAITING FOR INPUT</p>
              <h3>Your thinking, made tangible.</h3>
              <p>
                Submit an idea and LaunchLens will turn the rough edges into
                product decisions you can act on.
              </p>
            </div>
          )}

          {loading && (
            <div className="output-empty loading-output" role="status">
              <div className="thinking-visual" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p className="empty-label">ANALYZING</p>
              <h3>Making sense of the idea…</h3>
              <p>
                Gemini is separating the user problem from the feature noise.
              </p>
            </div>
          )}

          {brief && !loading && (
            <article className="brief">
              <div className="brief-header">
                <div>
                  <span className="brief-status">
                    <span aria-hidden="true">✓</span> Brief generated
                  </span>
                  <h3>{brief.title}</h3>
                </div>
                {demoMode && <span className="demo-badge">DEMO FALLBACK</span>}
              </div>

              <p className="brief-summary">{brief.summary}</p>

              <div className="brief-grid">
                <BriefBlock title="The problem" number="01">
                  <p>{brief.problem}</p>
                </BriefBlock>

                <BriefBlock title="Who it is for" number="02">
                  <ul className="compact-list">
                    {brief.targetUsers.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </BriefBlock>

                <BriefBlock title="MVP scope" number="03" wide>
                  <ol className="mvp-list">
                    {brief.mvp.map((item, index) => (
                      <li key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </BriefBlock>

                <BriefBlock title="Acceptance criteria" number="04">
                  <ul className="criteria-list">
                    {brief.acceptanceCriteria.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </BriefBlock>

                <BriefBlock title="Risks to validate" number="05">
                  <ul className="compact-list risk-list">
                    {brief.risks.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </BriefBlock>
              </div>

              <div className="next-step">
                <div className="next-step-mark" aria-hidden="true">→</div>
                <div>
                  <p className="next-label">RECOMMENDED NEXT STEP</p>
                  <p>{brief.nextStep}</p>
                </div>
              </div>
            </article>
          )}
        </section>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-symbol small" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <strong>LaunchLens</strong>
        </div>
        <span>Frontend AI Engineering Capstone</span>
        <span>Next.js · Gemini · TypeScript</span>
      </footer>
    </main>
  );
}

function BriefBlock({
  title,
  number,
  children,
  wide = false,
}: {
  title: string;
  number: string;
  children: React.ReactNode;
  wide?: boolean;
}) {
  return (
    <section className={`brief-block ${wide ? "wide" : ""}`}>
      <div className="block-heading">
        <span>{number}</span>
        <h4>{title}</h4>
      </div>
      {children}
    </section>
  );
}

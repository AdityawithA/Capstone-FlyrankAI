# Final Demo Script — 3 to 5 Minutes

## Goal

Show the real deployed product, not slides.

## 0:00–0:30 — Introduction

Say:

> "This is my FlyRank AI capstone. I built an AI-powered portfolio and career review agent. Its purpose is to compare a target software role or job description against verified portfolio evidence and turn the comparison into an actionable improvement plan."

Open the live production URL.

**Production URL:** ADD FINAL VERCEL URL

---

## 0:30–1:15 — Show the interface

Explain:

- What the user enters.
- The input limit.
- The Run Agent action.
- Where the result appears.
- That the model request is handled by the server rather than exposing the API key in the browser.

---

## 1:15–2:30 — Live end-to-end run

Use a realistic prompt such as:

```text
We need a React developer with Node.js, PostgreSQL,
Docker and REST API experience. Assess Aditya's fit.
```

Click **Run agent**.

Explain that the agent should use the portfolio tool before making claims about the candidate's evidence.

Point out the final response sections:

- Fit summary
- Strong evidence
- Gaps
- Top 3 actions
- Recommended project improvement
- This week's action

---

## 2:30–3:15 — Explain one design decision

Example:

> "One design decision I made was to keep portfolio grounding as an explicit tool step. The agent should not simply rely on the model's assumptions about the candidate. It first retrieves the portfolio evidence and then uses that evidence when producing the comparison."

Show the relevant behavior in the running application or code.

---

## 3:15–4:00 — Explain one limitation

Use a real limitation from the final project.

**Limitation to explain:** ADD VERIFIED LIMITATION

Suggested structure:

> "One limitation is ____. I found it because ____. The current mitigation is ____. If I had more time, I would improve it by ____."

Do not invent a limitation for the recording. Use one that is genuinely present in the final build.

---

## 4:00–4:30 — Close

Say:

> "The main lesson from this project was that building with AI is only part of the job. I still had to verify the implementation, debug failures, secure the model key, test the production flow, and document the decisions. The repository and README contain the setup, architecture, evaluation information, and limitations."

End on the live application.

---

## Recording checklist

- [ ] 3–5 minutes
- [ ] Live production URL
- [ ] Real end-to-end run
- [ ] Clear narration
- [ ] No slides
- [ ] One design decision explained
- [ ] One real limitation explained
- [ ] Final video link added to README

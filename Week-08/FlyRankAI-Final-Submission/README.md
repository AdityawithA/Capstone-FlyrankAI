# FlyRank AI Capstone — Final Submission

**Candidate:** Aditya Kumar  
**Program:** FlyRank AI Fluency Track  
**Final checkpoint:** Assignment 8.1 — Documentation & Demo + Assignment 8.2 — Final Package, Retrospective & Capstone

---

## 1. What this submission contains

This repository is the final handoff package for my FlyRank AI track work. It is designed so that a reviewer can quickly understand:

- what I built,
- where the live work can be found,
- how the main project works,
- what I learned during the track,
- where AI assistance was used,
- what I verified myself,
- what remains imperfect,
- and how the individual weekly deliverables connect to the final capstone.

The package intentionally separates **verified links** from placeholders that still need to be replaced before final submission.

---

## 2. Important links

| Resource | Link |
|---|---|
| Personal portfolio | https://aditya-kumar-flyrankai.netlify.app/ |
| GitHub repository | https://github.com/AdityawithA/Capstone-FlyrankAI |
| Production AI Agent | **ADD FINAL VERCEL URL** |
| Demo video | **ADD DEMO VIDEO URL** |
| FlyRank verification page | **ADD VERIFICATION URL WHEN PROVIDED** |
| Showcase post | **ADD SHOWCASE THREAD/POST URL** |

> Before submitting, replace every `ADD ...` placeholder with the real URL.

---

## 3. Final capstone

The main capstone artifact is an AI-powered portfolio/career review agent.

The agent is intended to help compare a target software role or job description against verified portfolio evidence and turn the result into a practical improvement plan.

The agent follows a tool-first approach: it uses portfolio data before making claims about projects, skills, education, or experience. It is designed not to invent evidence or guarantee hiring outcomes.

### Expected response structure

1. Fit summary
2. Strong evidence
3. Gaps
4. Top 3 actions
5. Recommended project improvement
6. This week's action

---

## 4. High-level architecture

```text
User
  |
  v
Next.js UI
  |
  | POST /api/agent
  v
Server-side API route
  |
  +--> Input validation / limits
  |
  +--> Agent orchestration
          |
          +--> get_portfolio tool
          |
          +--> Groq chat completion
  |
  v
Structured career/portfolio analysis
  |
  v
User interface
```

The model API key is kept server-side. It is supplied through an environment variable rather than exposed to browser code.

---

## 5. Setup

### Requirements

- Node.js
- npm
- Git
- A Groq API key
- The project repository

### Install

```bash
npm install
```

### Environment

Create `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Do not commit `.env.local`.

### Run locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### Production build

```bash
npm run build
```

The build must pass before production deployment.

---

## 6. Production deployment

The production deployment is intended for Vercel.

Recommended configuration:

```text
Framework:       Next.js
Root directory:  Week-08/FL-07-Aditya-AI-Agent-FIXED
Build command:   next build
Install command: npm install
Output:          .next
Environment:     GROQ_API_KEY
```

The real production URL should be added to the Important Links table above.

---

## 7. Security and production hygiene

The application treats the model API key as a server-side secret.

Important rules:

- Never use `NEXT_PUBLIC_GROQ_API_KEY`.
- Never place the real API key in source code.
- Never place a real key in `.env.example`.
- Keep `.env.local` ignored by Git.
- Validate and cap user input.
- Protect the public AI route against trivial abuse.
- Keep streaming/request duration bounded where applicable.
- Rotate a key immediately if it is accidentally exposed.

The repository was also checked against GitHub secret scanning before the final push.

---

## 8. AI assistance transparency

AI tools were used as a development partner during the track for tasks such as implementation support, debugging, refactoring, documentation, and reasoning through errors.

The important distinction is that AI assistance did not replace verification. Code was run locally, errors were inspected, deployment configuration was checked, and the final behavior was tested before treating a change as complete.

For the final review, I should be able to explain the deployed files, the request/data flow, the tool execution path, the environment-variable setup, and the main design decisions without relying on the AI tool to explain them.

---

## 9. Known limitations

The final submission should name limitations instead of hiding them.

Current items to verify before submission:

- [ ] Final production URL is inserted.
- [ ] Final demo video is recorded and linked.
- [ ] Final FlyRank verification URL is inserted when available.
- [ ] Final showcase post URL is inserted.
- [ ] Actual v2 evaluation results are recorded in `V2-EVAL-RESULTS.md`.
- [ ] Any remaining production/API limitations are documented honestly.
- [ ] Final mobile and cross-browser checks are completed.

---

## 10. Final submission checklist

- [ ] README explains what the project does and who it is for.
- [ ] A stranger can reproduce the setup from the README.
- [ ] Usage examples are included.
- [ ] Architecture is documented.
- [ ] V2 evaluation results are documented.
- [ ] Limitations are documented.
- [ ] Live production URL works.
- [ ] 3–5 minute real-product demo is recorded.
- [ ] Demo includes one design decision.
- [ ] Demo includes one limitation.
- [ ] Retrospective is 500–800 words.
- [ ] Hours log is completed in the FlyRank portal.
- [ ] Final package index links every deliverable.
- [ ] Portfolio is live.
- [ ] Final showcase post is published.
- [ ] Final review checkpoint is submitted.

---

## 11. Deliverable map

| File | Purpose |
|---|---|
| `README.md` | Main project documentation and setup guide |
| `RETROSPECTIVE.md` | 500–800 word reflection for the final checkpoint |
| `DEMO-SCRIPT.md` | Practical script for the 3–5 minute live demo |
| `V2-EVAL-RESULTS.md` | Space for verified evaluation results |
| `LIMITATIONS.md` | Honest limitations and mitigations |
| `FINAL-CHECKLIST.md` | Final submission verification |
| `HOURS-LOG-TEMPLATE.md` | Reference structure for completing the portal hours log |
| `SHOWCASE-POST.md` | Draft for the final build-in-public post |

---

## 12. Final note

This package is meant to be a handoff, not just a collection of screenshots. A reviewer should be able to start with this README, open the live project, understand the architecture, reproduce the local setup, watch the real demo, and then read the retrospective for the reasoning behind the work.

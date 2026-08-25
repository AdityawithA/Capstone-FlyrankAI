# FL-07 — Aditya AI Agent · Production Checkpoint 2

A production-hardened version of the FlyRankAI FL-07 portfolio/career review agent, prepared for Vercel deployment.

The app takes a target software role or job description, retrieves Aditya Kumar's portfolio through a real server-side `get_portfolio` tool, and asks Groq to produce an evidence-based fit review and practical action plan.

## What changed for the production checkpoint

- Promoted the Next.js app for Vercel deployment.
- Kept `GROQ_API_KEY` strictly server-side.
- Added a 6,000-character request cap to prevent oversized prompts.
- Added lightweight IP-based rate limiting: 8 requests per 10-minute window per runtime instance.
- Added `maxDuration = 30` to the AI route so long-running requests do not hang indefinitely.
- Added safer JSON/body validation and a proper `429 Too Many Requests` response.
- Added accessible form labeling, keyboard focus states, and reduced-motion support.
- Added production metadata: title, description, Open Graph/Twitter card metadata, robots, and viewport settings.
- Added a complete `.gitignore` so local secrets and build artifacts stay out of Git.
- Updated this README with setup, deployment, architecture, security decisions, and AI-development notes.

## Live production URL

Set the final Vercel URL here after deployment:

**Production:** `https://capstone-flyrank-ai-e23c.vercel.app/`

## Features

- Target role / job-description input
- Example prompts
- Real server-side `get_portfolio` tool call
- Groq-powered evidence-based career review
- Fit summary, evidence, gaps, top actions, project recommendation, and weekly action
- Loading and error states
- Mobile-friendly UI
- Input-size protection
- Lightweight public-route rate limiting
- Server-side API key protection
- Vercel-compatible `maxDuration`

## Architecture

```text
┌──────────────────────────────┐
│ Browser                      │
│ Role / job description input │
└──────────────┬───────────────┘
               │ POST /api/agent
               ▼
┌──────────────────────────────┐
│ Next.js Route Handler        │
│ app/api/agent/route.ts       │
│                              │
│ • JSON validation             │
│ • 6,000-char input cap        │
│ • IP-based rate limit         │
│ • 30s maxDuration             │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Agent loop                   │
│ lib/agent.ts                 │
│                              │
│ Groq + tool calling          │
└───────┬──────────────┬───────┘
        │              │
        │ tool call    │ final review
        ▼              ▼
┌───────────────┐   ┌───────────────┐
│ get_portfolio │   │ Browser UI    │
│ lib/tools.ts  │   │ Agent result  │
└───────┬───────┘   └───────────────┘
        │
        ▼
 data/portfolio.json
```

## Agent flow

1. The user enters a role or job description.
2. The browser sends it to `POST /api/agent`.
3. The route validates the request and checks the rate limit.
4. `runAgent()` sends the request to Groq together with the `get_portfolio` tool definition.
5. Groq can request `get_portfolio` before making portfolio-specific claims.
6. The server executes the tool against `data/portfolio.json`.
7. The tool result is returned to Groq.
8. Groq generates the structured career review.
9. The server returns the result to the browser.

The portfolio is therefore retrieved by an actual server-side tool instead of being pasted into every user prompt.

## Tech stack

- Next.js 15
- React 19
- TypeScript
- Groq SDK
- Llama 3.3 70B Versatile
- Vercel

The existing package configuration uses Next.js `15.5.23`, React `19.1.0`, and `groq-sdk` `0.37.0`.

## Project structure

```text
FL-07-Aditya-AI-Agent/
├── app/
│   ├── api/agent/route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── Agent.tsx
├── data/
│   └── portfolio.json
├── lib/
│   ├── agent.ts
│   └── tools.ts
├── .env.example
├── .gitignore
├── BUILD-LOG.md
├── next.config.ts
├── package.json
├── package-lock.json
├── README.md
├── next-env.d.ts
└── tsconfig.json
```

## Local setup

### 1. Requirements

- Node.js 18+
- npm
- A Groq API key

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Never commit `.env.local` or any real API key.

### 4. Run locally

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 5. Production build check

```bash
npm run build
npm run start
```

## Environment variables

| Variable | Required | Where used | Purpose |
|---|---|---|---|
| `GROQ_API_KEY` | Yes | Server only | Authenticates requests to Groq |

Do **not** prefix the key with `NEXT_PUBLIC_`. Client-exposed environment variables can be bundled into browser code.

## Vercel deployment

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Keep the framework preset as **Next.js**.
4. Add this environment variable in Vercel Project Settings → Environment Variables:

```text
GROQ_API_KEY = your_real_groq_key
```

5. Deploy.
6. Open the production URL and run:

> Review Aditya for a Full Stack Developer Intern role.

7. Confirm that the agent returns a portfolio-backed review.

## Production security / abuse controls

### Server-side secret

`GROQ_API_KEY` is read only inside the server-side agent route. The browser never receives the key.

### Input cap

Requests above **6,000 characters** are rejected with HTTP `413`. This prevents unnecessarily large prompts from consuming model tokens.

### Rate limiting

The public `/api/agent` endpoint allows **8 requests per 10 minutes per client key**. The route uses the forwarded client IP when available and returns HTTP `429` with `Retry-After` when the limit is reached.

This is intentionally lightweight and dependency-free. Because Vercel serverless instances are ephemeral, this should be treated as protection against trivial/accidental abuse, not as a globally synchronized enterprise rate limiter. A future high-traffic version should move the counter to a shared store such as Redis/Vercel KV.

### Request timeout

The route declares:

```ts
export const maxDuration = 30;
```

This gives the production function a sensible execution ceiling.

### Agent loop guard

The agent itself already limits the tool/model loop to four steps. This prevents runaway tool-calling behavior.

## AI-specific guardrails

The system prompt instructs the agent to:

- Call `get_portfolio` before making claims about Aditya.
- Never invent projects, technologies, employers, metrics, or achievements.
- Separate evidence from missing evidence.
- Extract required/preferred skills from a job description.
- Prioritize high-impact gaps.
- Avoid job guarantees.
- Avoid job applications, messaging, repository modification, and other external side effects.

## Accessibility / UX polish

The production pass also includes:

- A real accessible label for the primary textarea.
- Keyboard-visible focus states.
- Mobile-responsive layout.
- Reduced-motion fallback for users who request less motion.
- Disabled submit state while the agent is working.
- Clear loading and error states.
- Input length feedback before submission.

## Cross-browser verification checklist

Run the production URL in:

- [ ] Chrome desktop
- [ ] Firefox desktop
- [ ] Safari desktop
- [ ] Chrome Android / mobile browser
- [ ] Safari iPhone / mobile Safari

For each browser, verify:

- [ ] Page loads without console-blocking errors
- [ ] Example buttons populate the input
- [ ] Textarea is usable by keyboard/touch
- [ ] Agent request completes
- [ ] Error state is readable
- [ ] Result is readable on a narrow viewport
- [ ] No API key is exposed in browser source/network responses

## What I would measure in production

For a real deployment I would track:

- Request success/error rate
- HTTP 429 frequency
- Average agent response time
- Model/token usage
- Most common target roles
- User drop-off before submission

No user prompt or API secret needs to be stored for the MVP to remain useful.

## AI tools used during development

AI assistance was used as a coding and review partner, not as a substitute for understanding the system.

Examples of AI-assisted work:

- Drafting and refining the Next.js route structure.
- Reviewing the Groq tool-calling loop.
- Suggesting request validation and rate-limit logic.
- Reviewing accessibility details such as labels, focus states, and reduced motion.
- Improving documentation and explaining implementation decisions.

The final implementation was reviewed against the actual project structure. Run the production build command below before deployment.

## Screenshots

Add the final production screenshots here after deployment. Recommended captures:

1. Desktop landing screen.
2. Agent result after a successful role review.
3. Mobile layout.
4. Vercel production deployment.
5. Rate-limit/error state if you want to document the hardening work.

## Honest production notes

The lightweight in-memory rate limiter is intentionally suitable for the assignment's "trivial abuse" requirement. It is **not** a globally shared security boundary across all serverless instances. For a public application with meaningful traffic or billing exposure, use a shared rate-limit store and stronger authentication/abuse controls.

The project is also intentionally narrow: it reviews portfolio fit and produces actions. It does not apply for jobs, send emails, modify repositories, or access private external accounts.

## Build verification

The project should pass:

```bash
npm run build
```

The deployment target is Vercel with the Next.js framework preset.

## License

This project was created as part of the FlyRankAI frontend/AI-agent learning track.

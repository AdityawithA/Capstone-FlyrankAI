# FL-07 — Aditya AI Agent

A working MVP agent for the FlyrankAI Week 5 FL-07 assignment.

## What it does

The agent takes a target software role or job description, uses a real server-side `get_portfolio` tool to retrieve Aditya's portfolio data, and asks Groq to produce an evidence-based fit review and weekly action plan.

## Architecture

```text
Browser
   |
   | POST /api/agent
   v
Next.js route
   |
   +--> get_portfolio tool
   |       |
   |       +--> data/portfolio.json
   |
   +--> Groq
           |
           v
      structured career review
```

The Groq API key stays server-side.

## Setup

1. Install Node.js 18+.
2. Open this project folder in VS Code.
3. Run:

```bash
npm install
```

4. Create `.env.local`:

```env
GROQ_API_KEY=your_key_here
```

5. Start the app:

```bash
npm run dev
```

6. Open `http://localhost:3000`.

## Test

Try:

> Review Aditya for a Full Stack Developer Intern role.

Or paste a real job description.

The UI shows that the live `get_portfolio` tool is connected. The server executes the tool before the model produces portfolio-specific claims.

## Tool contract

### Name
`get_portfolio`

### Input
No arguments.

### Return
JSON containing:
- name
- education
- summary
- skills
- projects
- experience

### Why this counts as a real connection
The agent performs an actual server-side tool call to retrieve data from `data/portfolio.json` instead of placing the entire portfolio directly into the user prompt.

## Guardrails

- Never invent portfolio facts.
- No job applications or external side effects.
- API key is server-only.
- Missing evidence is called out.
- Maximum of four model/tool steps prevents runaway loops.

## Build log

See `BUILD-LOG.md`.

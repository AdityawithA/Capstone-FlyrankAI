# FL-07 Build Log

## Goal

Build the narrowest working version of the FL-06 agent: a portfolio and career review agent with one live tool connection.

## Iteration 1 — Core route
- Created a Next.js app.
- Added a server-side `/api/agent` route.
- Added Groq SDK integration.
- Kept the API key in `GROQ_API_KEY`.

**Result:** Core request/response path established.

## Iteration 2 — Live tool
- Added `get_portfolio`.
- Tool reads `data/portfolio.json`.
- Added tool schema and server-side execution.
- The model is instructed to call the tool before making claims about Aditya.

**Result:** The agent has a genuine tool/data connection.

## Iteration 3 — UI
- Added role/job-description input.
- Added example prompts.
- Added loading state and designed error state.
- Added a visible live-tool status indicator.
- Added mobile-friendly layout.

**Result:** A reviewer can run the agent without editing code mid-run.

## Iteration 4 — Scope control
Cut from the initial concept:
- Automatic job applications
- Email/recruiter actions
- Repository modification
- Private-data connectors
- Multiple external tools

Reason: these are unnecessary for the FL-07 MVP and add risk beyond the approximately 10-hour scope.

## Known deviation from FL-06

The FL-06 design proposed a portfolio review agent with optional GitHub evidence and role analysis. FL-07 intentionally starts with the narrowest end-to-end version: one portfolio data tool plus the role/job-description input.

GitHub integration is deferred until the core loop is stable.

## Final end-to-end loop

1. User enters a role or job description.
2. Browser POSTs to `/api/agent`.
3. Server sends the request and tool definition to Groq.
4. Groq requests `get_portfolio`.
5. Server executes the tool and returns portfolio JSON to the model.
6. Groq generates the review.
7. Server returns the final result to the browser.
8. UI renders the result.

## Reviewer run capture

For the required raw screen recording, start the app, enter:

> Review Aditya for a Full Stack Developer Intern role.

Show the complete interaction from the request to the final result without editing the page during the run.

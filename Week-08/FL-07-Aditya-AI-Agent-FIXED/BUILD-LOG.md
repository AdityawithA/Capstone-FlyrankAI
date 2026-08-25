# FL-07 Build Log

## Goal

Build and promote the narrowest working version of the FL-06 portfolio/career review agent into a production-ready FL-07 submission.

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
- Added accessible textarea labeling and keyboard-visible focus states.
- Added input-length feedback.

**Result:** A reviewer can run the agent without editing code mid-run.

## Iteration 4 — Scope control

Cut from the initial concept:

- Automatic job applications
- Email/recruiter actions
- Repository modification
- Private-data connectors
- Multiple external tools

Reason: these are unnecessary for the FL-07 MVP and add risk beyond the approximately 10-hour scope.

## Iteration 5 — Production hardening

Added for Checkpoint 2:

- 6,000-character input cap.
- Lightweight IP-based rate limiting: 8 requests / 10 minutes per runtime instance.
- HTTP `429` response with `Retry-After`.
- Invalid JSON/body validation.
- `maxDuration = 30` on the AI route.
- Generic production error responses so internal exception details are not returned to users.
- Expanded `.gitignore` for local secrets, build output and editor files.
- Production metadata and viewport configuration.
- Reduced-motion support.
- Production-focused README and deployment instructions.

**Result:** The public AI endpoint has basic protection against oversized requests and trivial request spam while keeping the implementation dependency-free.

## Known limitation

The in-memory rate limiter is per serverless runtime instance. It is suitable for the assignment's trivial-abuse requirement but is not a globally synchronized rate limiter. A higher-scale version should use a shared rate-limit store.

## Final end-to-end loop

1. User enters a role or job description.
2. Browser POSTs to `/api/agent`.
3. Route validates the request and checks the rate limit.
4. Server sends the request and tool definition to Groq.
5. Groq requests `get_portfolio`.
6. Server executes the tool and returns portfolio JSON to the model.
7. Groq generates the review.
8. Server returns the final result to the browser.
9. UI renders the result.

## Reviewer run capture

Start the app and enter:

> Review Aditya for a Full Stack Developer Intern role.

Show the complete interaction from the request to the final result without editing the page during the run.

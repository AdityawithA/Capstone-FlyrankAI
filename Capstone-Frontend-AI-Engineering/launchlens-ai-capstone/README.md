# LaunchLens AI

> **Frontend Engineering Capstone — Production-ready AI-enhanced frontend application**

LaunchLens is a small, polished product-thinking workspace that turns a rough product idea into a structured, buildable brief. Instead of being a general-purpose chatbot, the AI is constrained to produce decisions that are useful during product discovery: the problem, target users, MVP scope, acceptance criteria, risks, and one concrete next step.


## Gemini free-tier note

This capstone uses the official Google GenAI JavaScript SDK (`@google/genai`) and keeps the API key server-side. Google currently provides a Free Tier for selected Gemini API models and free input/output tokens within the applicable limits; quotas and model availability can change. Check Google AI Studio before deployment.

The app defaults to `gemini-3.7-flash` and can be changed with `GEMINI_MODEL`.

## Live deployment

**Production URL:** _Add your Vercel URL after deployment._

The repository is deployment-ready for Vercel or another Node-compatible platform.

## Why this project?

Early product ideas often fail because teams jump from an idea straight into implementation. LaunchLens creates a short decision artifact before code is written.

**For:** student builders, junior product engineers, indie hackers, and small product teams.

**Core workflow:** describe idea → validate input → AI structured analysis → inspect actionable brief → validate highest-risk assumption.

## Features

- Gemini API integration through a server-side Next.js route.
- Structured JSON output instead of free-form chat.
- Demo fallback when `GEMINI_API_KEY` is absent.
- Explicit loading, validation, network, and upstream-AI error states.
- Responsive, premium SaaS-style interface with mobile-first behavior.
- Keyboard-accessible form controls and visible focus states.
- Reduced-motion support.
- Character limit and input validation.
- Example ideas for fast onboarding.
- Unit/component tests with Vitest and Testing Library.
- Production deployment notes and rollback procedure.

## Tech stack

- Next.js App Router
- React + TypeScript
- Gemini API via `@google/genai`
- CSS with semantic HTML
- Vitest + Testing Library

## Architecture

```text
Browser
  │
  │ POST /api/analyze
  ▼
Next.js Route Handler
  │
  ├── Validate length/type
  │
  ├── GEMINI_API_KEY present?
  │      ├── yes → Gemini → normalize structured JSON
  │      └── no  → deterministic demo fallback
  │
  ▼
Browser renders Product Brief
```

The API key never reaches the browser. The browser only calls the same-origin `/api/analyze` endpoint.

## AI integration

### Model
The default model is configured as:

`gemini-3.7-flash`

Override it with `GEMINI_MODEL` if needed.

### Prompt strategy

The server sends a focused system instruction asking Gemini to act as a pragmatic product engineer and return **only JSON** with these keys:

- `title`
- `summary`
- `targetUsers`
- `problem`
- `mvp`
- `acceptanceCriteria`
- `risks`
- `nextStep`

This makes the model output predictable enough for a UI and prevents the feature from becoming an open-ended chatbot.

### Why the fallback exists

A missing API key should not turn the entire frontend into a broken page. The fallback is deliberately labeled **Demo fallback** and produces a deterministic sample brief. This keeps the UI reviewable locally while making the real Gemini integration explicit.

## Local setup

Requirements: Node.js 20+ and npm.

```bash
npm install
cp .env.example .env.local
```

Add your key to `.env.local`:

```env
GEMINI_API_KEY=your_key_here
```

Then:

```bash
npm run dev
```

Open `http://localhost:3000`.

For a no-key demo, leave `GEMINI_API_KEY` empty. The app will use the labeled fallback.

## Quality commands

```bash
npm run typecheck
npm test
npm run build
```

`npm test` runs the component test suite. `npm run build` verifies a production build.

## Deployment — Vercel

1. Push this repository to GitHub.
2. Import the repository into Vercel.
3. Framework preset: **Next.js**.
4. Add `GEMINI_API_KEY` as a production environment variable.
5. Optionally add `GEMINI_MODEL`.
6. Deploy.
7. Open the production URL and complete the smoke-test checklist in `docs/DEPLOYMENT_CHECKLIST.md`.
8. Run Lighthouse on mobile and desktop.
9. Run an accessibility audit with axe DevTools or WAVE.
10. Record the final scores and URL in the submission entry.

## Security notes

- The Google API key is server-side only.
- `.env` and `.env.local` are ignored by Git.
- Input is length-limited before the API call.
- The API response is normalized before it reaches the UI.
- Errors intentionally avoid exposing API keys or internal stack traces.
- Do not place the API key in `NEXT_PUBLIC_*`.

## Testing evidence

See `docs/TESTING_EVIDENCE.md` for the test strategy and the exact commands to run before submission.

## Accessibility & performance

See `docs/ACCESSIBILITY_AUDIT.md`.

The UI intentionally includes:

- semantic landmarks and headings
- associated labels
- keyboard-visible focus
- `aria-live` status/error output
- reduced-motion handling
- responsive layout
- no icon-only essential controls
- readable contrast and generous hit areas

A final Lighthouse + axe/WAVE run is required after deployment because real hosting conditions and browser extensions can affect scores.

## Known limitations

1. The app does not persist briefs or user accounts.
2. Gemini output depends on the configured model/API availability.
3. The demo fallback is not an AI response.
4. The current MVP does not include rate limiting or authentication.
5. Accessibility scores must be measured on the deployed instance rather than claimed from source code alone.

## Future improvements

- Save/share a brief with a short-lived link.
- Add rate limiting and request IDs.
- Add analytics that exclude sensitive prompt content.
- Add model/provider selection behind a server-side abstraction.
- Add Playwright end-to-end coverage and automated Lighthouse CI.
- Let users export the brief as Markdown.
- Add an explicit “revise this brief” flow based on acceptance criteria.

## Capstone submission checklist

- [ ] Production URL added above.
- [ ] GitHub repository linked in submission.
- [ ] `npm install && npm run dev` works.
- [ ] Tests pass.
- [ ] Production build passes.
- [ ] Lighthouse mobile score ≥ 85.
- [ ] No WCAG AA violations in axe/WAVE.
- [ ] One audit-driven accessibility/performance improvement documented.
- [ ] Deployment checklist completed.
- [ ] Reflection submitted.

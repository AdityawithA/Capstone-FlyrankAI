# LaunchLens AI — Capstone Submission Entry

## 1. Project Brief

LaunchLens AI helps early-stage builders turn a rough product idea into a focused, buildable brief. It is designed for students, junior product engineers, indie hackers, and small teams who need to clarify the real user problem before committing to implementation. I chose the idea because AI is most useful here when it reduces product ambiguity rather than acting as a generic chatbot: the output is constrained to target users, the problem, MVP scope, acceptance criteria, risks, and a concrete next step.

## 2. Live, deployed application

**URL:** _Add after Vercel deployment_

The application is functional, responsive, and designed around WCAG 2.1 AA principles. Final Lighthouse and axe/WAVE results should be recorded in `docs/ACCESSIBILITY_AUDIT.md`.

## 3. Repository

**GitHub:** _Add repository URL_

Local setup:

```bash
npm install && npm run dev
```

## 4. AI integration

Gemini is called from a Next.js server route, so the API key never reaches the browser. The prompt asks for structured JSON rather than conversational output. The server validates the input, parses/normalizes the response, and returns a safe UI shape. If no key is configured, the application enters a clearly labeled deterministic demo fallback.

## 5. Testing evidence

Run:

```bash
npm test
npm run typecheck
npm run build
```

See `docs/TESTING_EVIDENCE.md`.

## 6. Performance & accessibility

See `docs/ACCESSIBILITY_AUDIT.md`. Add actual Lighthouse and axe/WAVE evidence before final submission.

## 7. Deployment & operation

See `docs/DEPLOYMENT_CHECKLIST.md`.

The app is stateless, so rollback can be performed by promoting the last known-good deployment.

## 8. Reflection

See `docs/REFLECTION.md`.

# Capstone Reflection

## What was hardest? Why?

The hardest part was designing the AI boundary rather than simply adding an AI call. A useful product feature needs predictable output, validation, failure states, and a clear reason for using an LLM. I therefore constrained the model to a small JSON schema and made the interface display decisions instead of conversational text.

## What would I do differently next time?

I would start with automated end-to-end testing and performance measurement earlier. That would make accessibility and deployment quality part of the implementation loop instead of a final checklist. I would also add rate limiting and persistence if the product were going beyond the capstone MVP.

## One thing I learned that surprised me

The AI model is only one part of an AI feature. The surrounding engineering — prompt constraints, structured output handling, validation, fallback behavior, secret management, loading states, and testing — determines whether the feature feels dependable. A good AI integration is as much a frontend/product design problem as it is an API integration problem.

## Trade-offs

- **No authentication:** keeps the capstone small and reduces attack surface, but prevents saved work.
- **No database:** avoids unnecessary infrastructure for a one-flow MVP, but means briefs disappear on refresh.
- **Server-side Gemini call:** protects the API key and keeps the browser architecture simple.
- **Demo fallback:** makes local review possible without credentials, while clearly labeling that it is not AI-generated.
- **No streaming:** simpler and more predictable structured JSON; streaming could improve perceived latency later.

## Production mindset

The application is intentionally small. Production readiness here means the small surface area has explicit validation, failure states, tests, secret handling, responsive behavior, accessibility considerations, deployment documentation, and a rollback plan — not that every possible production feature has been added.

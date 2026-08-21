# FL-09 — AI Testing Lab

A React testing assignment covering component tests, mocked AI behavior, Playwright end-to-end testing, and CI.

## Requirements covered

- Vitest configured with React Testing Library
- Meaningful component tests
- Chat renderer coverage for pending, streaming, idle, and error states
- Validated profile form tests
- Structured tool-result component test
- AI behavior simulated locally; no real AI API is called by tests
- Playwright primary-flow test
- GitHub Actions CI on push and pull request

## Run

```bash
npm install
npm test
npm run dev
```

For end-to-end tests:

```bash
npx playwright install
npm run test:e2e
```

Run everything:

```bash
npm run test:all
```

## Test philosophy

Tests query the interface the way a user would: by role, accessible label, visible text, and semantic state. CSS implementation details and test IDs are intentionally avoided for the main assertions.

The mocked AI flow is deterministic for tests where timing matters. The UI itself exposes a mocked request lifecycle rather than calling a production AI provider.

## CI

`.github/workflows/test.yml` installs dependencies, runs the Vitest suite, installs Chromium for Playwright, and executes the primary end-to-end flow.

A failing test causes the workflow to fail, which prevents a green CI result when the suite is broken.

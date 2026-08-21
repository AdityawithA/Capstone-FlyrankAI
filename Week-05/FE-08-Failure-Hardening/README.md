# Week 05 — Failure & Edge-Case Hardening

This is the new Week 05 assignment built on the streaming AI chat.

## Assignment coverage

- Network/API failure handling
- Mid-stream failure recovery with retry
- Rate-limit state
- Empty input prevention
- First-run empty state with useful actions
- Slow-response skeleton
- Designed error UI
- Route-level `error.tsx`
- Responsive mobile layout
- Server-side API key
- Local sabotage switches for testing

## Setup

```bash
npm install
```

Create `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key
```

Optional local sabotage testing:

```env
SABOTAGE_ERROR=true
SABOTAGE_RATE_LIMIT=true
SABOTAGE_DELAY=true
```

Only enable one sabotage switch at a time, capture the real UI state, then turn it off.

## Run

```bash
npm run dev
```

Production check:

```bash
npm run build
npm start
```

## Checkpoint evidence

The assignment asks for:
1. A working happy path.
2. At least two handled failure states.
3. Preview URL.
4. Recording or screenshots showing the states.

Use actual screenshots/recordings from the running app. Do not fabricate evidence.

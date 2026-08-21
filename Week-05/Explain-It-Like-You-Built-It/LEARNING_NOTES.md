# Learning Notes

## What I understood

The client and server have different responsibilities.

- The client collects the user's message and renders conversation states.
- The server route receives the request and handles the AI-provider interaction.
- The client should react to success, loading, and failure instead of assuming every request succeeds.

## What I originally found confusing

I originally understood the chat mostly from the visible result: type a message and get an answer.

The less obvious part was what should happen between those two points and when the answer cannot be produced.

The Week 05 sabotage tests made this easier to understand because I could intentionally create a 503 and a 429 and see how the UI responded.

## What I would check when maintaining this feature

1. Keep provider secrets server-side.
2. Keep error states usable and understandable.
3. Make Retry operate on the failed request.
4. Do not lose existing conversation state because of one failed request.
5. Test both successful and unsuccessful requests.
6. Make sure loading and error states work at narrow screen sizes too.

## Evidence from Week 05

I tested:
- Normal AI response
- Simulated 503 API failure
- Simulated 429 rate-limit failure
- Slow-response behavior

The 503 and 429 tests both produced designed error cards with working Retry actions.

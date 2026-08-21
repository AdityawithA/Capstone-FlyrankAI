# Week 05 Failure Testing Checklist

## 1. Happy path
- Send a normal question.
- Confirm the response streams.
- Confirm there are no console errors.

## 2. Empty state
- Load the page before sending a message.
- Confirm useful example prompts are visible.
- Click an example and confirm it fills/starts the flow.

## 3. Slow response
Set:

`SABOTAGE_DELAY=true`

Then send a message.

Expected:
- Loading skeleton appears.
- Input is disabled while loading.
- Layout remains stable.

## 4. API failure
Set:

`SABOTAGE_ERROR=true`

Then send a message.

Expected:
- Designed error appears.
- User can click Retry.
- No application crash.

## 5. Rate limit
Set:

`SABOTAGE_RATE_LIMIT=true`

Then send a message.

Expected:
- Rate-limit message appears.
- Retry action remains available.

## 6. Network / mid-stream failure
Use Chrome DevTools:
Network → throttle or offline while a response is streaming.

Expected:
- Error state is understandable.
- Retry is available.
- Existing conversation remains visible.

## 7. Mobile
Test at phone width and on a real phone if possible.

Check:
- No horizontal overflow.
- Input stays usable.
- Messages remain readable.
- Keyboard does not make the composer unusable.

## Evidence

Capture at least:
- Happy path.
- One API/rate-limit failure.
- One interrupted/network failure.

Submit only real evidence from your application.

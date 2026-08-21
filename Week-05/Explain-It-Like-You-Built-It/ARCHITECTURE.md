# Aditya AI — Failure Handling Flow

## Normal request

```text
User types a message
        |
        v
Chat UI / client
        |
        | POST request
        v
/api/chat
        |
        v
AI provider
        |
        | response / stream
        v
Chat UI
        |
        v
Assistant message
```

## Failure request

```text
User sends message
        |
        v
/api/chat
        |
        v
Request fails
        |
        v
Error state
        |
        +------> Show useful error
        |
        +------> Show Retry button
                         |
                         v
                    Send request again
```

## States demonstrated in Week 05

### 1. Happy path
The AI request succeeds and the assistant response appears.

### 2. 503 API failure
The server intentionally returns a simulated service-unavailable response. The UI shows a designed error state and Retry action.

### 3. 429 rate limit
The server intentionally returns a simulated too-many-requests response. The UI again shows a designed error state and Retry action.

### 4. Slow response
The application has a loading state so the interface does not appear frozen while waiting.

## Key design idea

The failure is treated as a **state of the interface**, not as a reason to crash the interface.

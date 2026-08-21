# How Aditya AI Handles API Failures and Retry

## What I chose

For this assignment, I chose the **API failure and Retry system** from my Aditya AI project.

I chose this part because during Week 05 I deliberately tested what happens when the AI request fails. Before working on it, I mostly thought of an API request as something that either works or does not work. I learned that a real application has to expect failures and give the user a useful way forward.

## What happens when I send a message

When I type a question into Aditya AI and press **Send**, the chat interface takes the text I entered and sends it to the application's chat API route.

The frontend is responsible for the user interface and the conversation state. The server-side route is responsible for handling the request and communicating with the AI provider.

In simple terms, the flow is:

**My message → chat interface → `/api/chat` → AI service → response → chat interface**

The important part is that the API key and provider-side work stay on the server. The browser should not need to know the secret key.

When the request succeeds, the returned AI content is added to the conversation and displayed as an assistant message.

## What happens when the API fails

A real network request cannot be treated as guaranteed to succeed. The server can return an error because the provider is unavailable, the service is overloaded, the request is rejected, or another problem occurs.

For Week 05 I added test conditions so I could deliberately create these situations instead of only testing the happy path.

I tested a simulated **503 Service Unavailable** response. I also tested a simulated **429 Too Many Requests** response.

A 503 means the service is temporarily unavailable. A 429 means that too many requests were made and the client should wait before trying again.

The important behavior is that these failures do not make the whole chat page crash.

## How the error is shown

When the request fails, the UI changes to a designed error state instead of leaving the user staring at a broken page.

The error state tells the user that the request could not be completed and shows the returned error information. It also provides a **Retry** button.

This is important because an error message by itself is not very helpful. The user needs to know what happened and what they can do next.

During my Week 05 testing, the 503 case produced the designed error card with a Retry button. The 429 case did the same thing but displayed a rate-limit message.

So the application treats an error as another UI state rather than as an unexpected event that should destroy the interface.

## How Retry works

The Retry button gives the user another attempt without making them reload the whole application.

The failed request is the thing that needs to be retried, not the entire conversation.

This distinction matters. If I have already sent several messages and one request fails, I should not lose the conversation just because one request had a problem.

The Retry action therefore connects the error state back to the normal request flow:

**Error → Retry → request again → loading/streaming → success or another handled error**

If the second attempt also fails, the application should remain in a usable error state rather than crashing.

## What I learned

The biggest thing I learned is that error handling is part of the product, not just a technical cleanup step.

Before this, I would have focused mostly on getting the AI response to appear. Now I understand that the interface also has to answer questions like:

- What does the user see while a request is waiting?
- What happens if the server returns an error?
- Can the user recover without refreshing?
- Does the conversation remain intact?
- Is the error message understandable?
- What happens if the same action is attempted again?

I also learned why testing with intentionally broken requests is useful. If I only test successful requests, I can easily believe the application is finished when it has not actually been tested against realistic problems.

## Why this matters in my project

Aditya AI is meant to behave like a real streaming chat interface. A real AI service depends on a network, a server route, and an external model provider. Any of those pieces can fail.

The API failure and Retry system makes the application more resilient because it gives the user a controlled path through failure.

For me, the important lesson is simple: **building the successful path is only part of building the feature. I also have to design what happens when the successful path breaks.**

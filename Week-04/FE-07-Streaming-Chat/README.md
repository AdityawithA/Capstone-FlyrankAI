# FE-07 — Streaming AI Chat

A production-style streaming AI chat interface built with Next.js,
React, TypeScript, and the Vercel AI SDK.

The project uses Anthropic Claude for server-side AI generation.

## Features

- Real-time streamed AI responses
- Multi-turn conversations
- Stop generation mid-stream
- Preserves partial assistant responses
- Thinking indicator
- Smart auto-scroll
- Jump-to-latest control
- Responsive mobile layout
- Server-side API key protection
- Suggested conversation prompts
- Keyboard-friendly input
- Clean user/assistant message distinction

## Tech Stack

- Next.js
- React
- TypeScript
- Vercel AI SDK
- Anthropic Claude
- CSS
- App Router

## Architecture

```text
Browser
   │
   │ POST /api/chat
   ▼
Next.js Route Handler
   │
   │ streamText()
   ▼
Anthropic Claude
   │
   │ streamed response
   ▼
AI SDK UI stream
   │
   ▼
React Chat Interface
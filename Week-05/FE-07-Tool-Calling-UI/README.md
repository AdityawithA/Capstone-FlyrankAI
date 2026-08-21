# Week 05 — AI Tool Calling & Generative UI

A portfolio AI assistant built with Next.js, React, TypeScript, Vercel AI SDK, Groq, and Zod.

## Assignment goals

- Define at least one server-side AI tool with a Zod input schema.
- Implement an `execute` function.
- Stream and render the tool lifecycle:
  - input streaming
  - input available
  - output available
  - output error
- Render a structured tool result as a real React component.
- Keep the API key server-side.
- Document the tool contract.

## Tool contract

### Name

`analyzeProject`

### Purpose

Analyze one of Aditya's portfolio projects and return structured information for a visual Project Analysis Card.

### Input schema

```ts
{
  project: string;
  simulateFailure?: boolean;
}
```

### Return shape

```ts
{
  name: string;
  score: number;
  summary: string;
  technologies: string[];
  strengths: string[];
  highlights: string[];
  analyzedAt: string;
}
```

### Server execution

The tool is defined in:

`lib/tools.ts`

The API route is:

`app/api/chat/route.ts`

The UI is rendered by:

`components/ToolState.tsx`
`components/ProjectAnalysis.tsx`

## Architecture

```text
User
  ↓
Chat UI
  ↓
POST /api/chat
  ↓
Groq model
  ↓
analyzeProject tool
  ↓
Zod validation
  ↓
execute()
  ↓
structured result
  ↓
AI SDK UI stream
  ↓
typed tool part
  ↓
ProjectAnalysis component
```

## Four tool states

| State | UI treatment |
|---|---|
| `input-streaming` | Amber preparation state |
| `input-available` | Cyan input-ready state |
| `output-available` | Green success state + project card |
| `output-error` | Red designed error state |

The client renders typed tool parts from the message `parts` array rather than dumping raw JSON.

## Run locally

Use Node.js 22+.

```bash
npm install
```

Create `.env.local`:

```env
GROQ_API_KEY=your_groq_api_key_here
```

Then:

```bash
npm run dev
```

Open:

`http://localhost:3000`

## Demo prompts

Try:

```text
Analyze InterviewAce AI
```

```text
Analyze CampusSync
```

```text
Analyze TypeRush
```

To demonstrate the designed tool error state:

```text
Please demonstrate the tool error state for InterviewAce AI.
```

The system prompt tells the model to call the tool with `simulateFailure=true` for that explicit request.

## Important security note

`GROQ_API_KEY` is only read by the server route through the Groq provider. Never put it in a `NEXT_PUBLIC_` variable and never expose it in client-side code.

## Current model

The project uses:

`openai/gpt-oss-120b`

through the Groq provider. Groq currently documents GPT-OSS models as supporting tool use.

## Evaluation checklist

- [x] Typed Zod tool schema
- [x] Server-side `execute` function
- [x] Tool input streaming state
- [x] Tool input available state
- [x] Tool output available state
- [x] Tool output error state
- [x] Structured result rendered as a real component
- [x] Designed error state
- [x] API key remains server-side
- [x] Tool contract documented

## Evidence to capture

For submission, capture screenshots showing:

1. A normal project analysis where the tool is called.
2. The tool lifecycle states while the request is running.
3. The resulting Project Analysis Card.
4. The designed error state.

Do not fabricate evidence. The screenshots should come from your actual running application.

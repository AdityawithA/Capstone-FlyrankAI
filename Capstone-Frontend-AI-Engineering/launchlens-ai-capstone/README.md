LaunchLens AI

Frontend AI Engineering Capstone — Production-ready AI-enhanced frontend application

LaunchLens is a focused product-intelligence workspace that turns a rough product idea into a structured, actionable product brief. Instead of behaving like a generic chatbot, it uses Gemini to transform an idea into concrete product decisions: the problem, target users, MVP scope, acceptance criteria, risks, and a recommended next step.

🚀 Live Application

Production: https://launchlens-ai-alpha.vercel.app/

The application is deployed on Vercel and uses a server-side Next.js API route to communicate with Gemini. The Gemini API key is never exposed to the browser.

🎯 Problem

Early product ideas are often too broad to build confidently. Teams can jump from an idea directly into implementation without clearly defining the user problem, MVP boundaries, success criteria, or highest-risk assumptions.

LaunchLens creates a concise product brief before implementation begins.

Designed for:

Student developers

Junior product engineers

Indie hackers

Early-stage founders

Small product teams

Core workflow:

Describe idea
     ↓
Validate input
     ↓
Gemini structured analysis
     ↓
Product brief
     ↓
Review MVP + risks
     ↓
Validate the next assumption

✨ Features

AI-powered product-idea analysis using Google Gemini.

Structured JSON output instead of open-ended chatbot responses.

Product title and concise summary.

Problem definition.

Target-user identification.

MVP scope with prioritized items.

Acceptance criteria.

Risks to validate.

Recommended next step.

Clear loading, validation, and API error states.

Deterministic labeled demo fallback when no API key is available locally.

Responsive premium SaaS-style interface.

Semantic HTML and accessible form controls.

Visible keyboard focus states.

aria-live feedback for dynamic states.

Reduced-motion support.

Character counter and input validation.

Example ideas for faster onboarding.

Component tests with Vitest and Testing Library.

Production deployment through Vercel.

🧠 AI Integration

LaunchLens uses the official Google GenAI JavaScript SDK:

@google/genai

Model

The production configuration uses:

GEMINI_MODEL=gemini-3.6-flash

Model availability and quotas can change, so the model is configurable through an environment variable rather than hard-coded into the UI.

Prompt design

The server sends Gemini a focused product-engineering instruction and requests structured JSON with these fields:

title
summary
targetUsers
problem
mvp
acceptanceCriteria
risks
nextStep

This approach makes the AI output predictable enough for a production UI and keeps the feature focused on product discovery rather than generic conversation.

Why structured output?

The UI needs reliable sections that can be rendered consistently. Returning a defined structure allows the frontend to present the AI response as a product brief instead of displaying an unpredictable block of generated text.

Failure handling

The application handles upstream AI failures without exposing internal errors or secrets to users.

The flow is:

User
  ↓
POST /api/analyze
  ↓
Validate request
  ↓
Gemini API
  ↓
Normalize structured response
  ↓
Render product brief

If the AI request fails, the interface displays a useful error state. When the API key is intentionally absent during local development, the application can use a deterministic and clearly labeled demo fallback.

🏗️ Architecture

┌──────────────────────────────┐
│        Browser / React       │
│                              │
│  Idea input → Product brief  │
└──────────────┬───────────────┘
               │
               │ POST /api/analyze
               ▼
┌──────────────────────────────┐
│     Next.js Route Handler    │
│        /api/analyze          │
│                              │
│  • validates input           │
│  • reads server env vars     │
│  • calls Gemini              │
│  • normalizes JSON           │
│  • handles failures          │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│        Gemini API            │
│     gemini-3.6-flash         │
└──────────────────────────────┘

The browser never receives GEMINI_API_KEY.

🛠️ Tech Stack

Area

Technology

Framework

Next.js 15

UI

React 19

Language

TypeScript

AI

Google Gemini API

AI SDK

@google/genai

Styling

CSS

Testing

Vitest

Component Testing

Testing Library

Runtime

Node.js

Deployment

Vercel

📁 Project Structure

launchlens-ai-capstone/
├── app/
│   ├── api/
│   │   └── analyze/
│   │       └── route.ts
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── LaunchLens.tsx
│   └── LaunchLens.test.tsx
│
├── docs/
│   ├── ACCESSIBILITY_AUDIT.md
│   ├── DEPLOYMENT_CHECKLIST.md
│   ├── PROJECT_NOTES.md
│   ├── REFLECTION.md
│   ├── SUBMISSION_ENTRY.md
│   └── TESTING_EVIDENCE.md
│
├── public/
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

⚙️ Local Setup

Requirements

Node.js 20+

npm

A Gemini API key for real AI requests

1. Clone the repository

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd launchlens-ai-capstone

2. Install dependencies

npm install

3. Configure environment variables

Create .env.local:

GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.6-flash

Never commit .env.local.

The API key must not be exposed through a NEXT_PUBLIC_* variable.

4. Start development

npm run dev

Open:

http://localhost:3000

🧪 Testing & Quality

Run the component test suite:

npm test

Run TypeScript validation:

npm run typecheck

Run the production build:

npm run build

Recommended pre-deployment sequence:

npm install
npm test
npm run typecheck
npm run build

Test coverage

The current component tests cover critical user flows including:

Accessible initial form rendering.

Loading an example idea.

Successful AI response rendering.

User-facing error handling.

♿ Accessibility

Accessibility was treated as a product requirement rather than a final polish step.

The application includes:

Semantic landmarks and headings.

Proper form labels.

Keyboard-accessible controls.

Visible focus states.

Dynamic status/error announcements.

Reduced-motion support.

Responsive layouts.

Readable contrast.

Generous interactive hit areas.

Lighthouse result

The production application was audited using Chrome Lighthouse on mobile.

Category

Score

Performance

98

Accessibility

100

Best Practices

100

SEO

60

The most important capstone requirements are comfortably exceeded: performance is above the required threshold, accessibility scored 100, and best practices scored 100.

Detailed audit documentation is available in:

docs/ACCESSIBILITY_AUDIT.md

⚡ Performance

The Lighthouse mobile audit reported:

Performance: 98

First Contentful Paint: 0.9s

Largest Contentful Paint: 1.4s

The interface uses lightweight CSS, responsive layouts, semantic markup, and minimal client-side dependencies.

🚀 Deployment

LaunchLens is deployed using Vercel.

Vercel configuration

Push the project to GitHub.

Import the repository into Vercel.

Select Next.js as the framework.

Add the following production environment variables:

GEMINI_API_KEY=your_gemini_api_key
GEMINI_MODEL=gemini-3.6-flash

Deploy.

Open the production URL.

Test an example idea.

Test a custom idea.

Confirm the real AI brief is generated.

Verify that API failures produce a useful error state.

Production smoke test

[ ] Homepage loads.
[ ] Example idea loads.
[ ] Custom idea can be submitted.
[ ] Gemini generates structured output.
[ ] No demo fallback appears when Gemini is available.
[ ] Invalid/short input is handled.
[ ] API failure produces a useful user-facing error.
[ ] Mobile layout remains usable.
[ ] Lighthouse audit completed.

See docs/DEPLOYMENT_CHECKLIST.md for the full deployment checklist and rollback notes.

🔐 Security

Gemini credentials remain server-side.

.env and .env.local are excluded from Git.

The browser communicates only with /api/analyze.

API keys are never placed in NEXT_PUBLIC_* variables.

Input is validated before the model request.

AI responses are normalized before being rendered.

User-facing errors avoid exposing internal stack traces or secrets.

🧯 Failure Handling & Rollback

The API route handles upstream failures and returns a controlled error response instead of allowing an unhandled exception to break the UI.

For production rollback:

Open the Vercel project.

Open Deployments.

Identify the last known-good deployment.

Promote/redeploy that deployment.

Re-test /api/analyze.

Verify the production URL and smoke-test flow.

For model/API incidents, the GEMINI_MODEL environment variable can be changed to an available supported model, followed by a redeployment.

⚠️ Known Limitations

Briefs are not persisted between sessions.

There are no user accounts or authentication.

Gemini availability and quotas depend on the configured API/model.

The demo fallback is deterministic and is not an AI response.

Rate limiting is not currently implemented.

The application does not yet provide collaborative sharing/export.

🔮 Future Improvements

Persist and share generated briefs.

Add authentication.

Add server-side rate limiting.

Add request IDs and lightweight operational monitoring.

Add Markdown/PDF export.

Add a “Revise brief” workflow.

Add Playwright end-to-end tests.

Add automated Lighthouse CI.

Add provider/model abstraction for easier AI failover.

Add analytics that never store sensitive idea content.

📚 Supporting Documentation

Document

Purpose

docs/TESTING_EVIDENCE.md

Test strategy and verification evidence

docs/ACCESSIBILITY_AUDIT.md

Accessibility/performance audit notes

docs/DEPLOYMENT_CHECKLIST.md

Production deployment and rollback checklist

docs/REFLECTION.md

Capstone reflection

docs/PROJECT_NOTES.md

Implementation notes

docs/SUBMISSION_ENTRY.md

Structured capstone submission entry

🏁 Capstone Completion Checklist

Live production application.

Meaningful AI integration.

Structured AI output.

Accessible frontend.

Responsive interface.

Unit/component tests.

TypeScript validation.

Production build validation.

Vercel deployment.

Production Gemini configuration.

Lighthouse evidence.

Performance score ≥ 85.

Accessibility score ≥ 90.

Best Practices score ≥ 90.

Error handling and failure states.

Deployment/rollback documentation.

GitHub repository URL added to this README.

Final submission/reflection reviewed.

👤 Author

Aditya Kumar

Frontend AI Engineering Capstone
Built with Next.js, TypeScript, React, and Gemini.

LaunchLens is a portfolio-focused capstone demonstrating that an AI-enhanced frontend can be designed, tested, documented, and shipped to production.
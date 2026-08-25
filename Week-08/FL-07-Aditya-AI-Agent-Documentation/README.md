# Aditya AI — Portfolio & Career Review Agent

Aditya AI is a server-side AI agent that reviews a target software role or job description against verified portfolio evidence. Its goal is to turn a vague career question into a practical, evidence-based improvement plan.

## What it does

The agent accepts a target role or job description and:

1. Extracts the important requirements from the role.
2. Uses the `get_portfolio` tool before making claims about Aditya's projects, skills, education, or experience.
3. Compares verified portfolio evidence with the role requirements.
4. Separates strong evidence from missing evidence.
5. Prioritizes the highest-impact gaps.
6. Produces a concise action plan.

The final response follows:

- Fit summary
- Strong evidence
- Gaps
- Top 3 actions
- Recommended project improvement
- This week's action

## Who it is for

This is primarily a portfolio/career-review tool for a developer who wants to compare their existing evidence against a target software role.

It is also useful as a demonstration of:

- LLM API integration
- Tool/function calling
- Server-side AI execution
- Structured prompting
- Input limits and rate limiting
- Portfolio-grounded answers
- Production-oriented AI engineering

---

## Tech stack

- Next.js 15
- React
- TypeScript
- Groq SDK
- Groq-hosted LLM
- Server-side API route
- Tool/function calling
- Environment variables for the API key

The AI API key is kept server-side. The browser does not receive the secret key.

---

## Architecture

```text
User
  |
  v
Next.js React UI
  |
  | POST /api/agent
  v
Server API Route
  |
  v
runAgent()
  |
  +--> System prompt
  |
  +--> Groq chat completion
  |        |
  |        +--> get_portfolio tool call
  |                  |
  |                  v
  |             Verified portfolio data
  |                  |
  |                  v
  +<--- tool result
  |
  v
Final structured AI response
  |
  v
User
```

### Important design decision

The agent is instructed to use `get_portfolio` before making claims about Aditya's background. This reduces the risk of the model inventing projects, technologies, education, employers, metrics, or achievements.

The API key is also accessed only on the server through:

```text
GROQ_API_KEY
```

---

## Setup

### Requirements

- Node.js 18+ recommended
- npm
- A Groq API key

### 1. Clone the repository

```bash
git clone <YOUR-GITHUB-REPOSITORY-URL>
cd FL-07-Aditya-AI-Agent-FIXED
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env.local`

```env
GROQ_API_KEY=your_groq_api_key_here
```

Never commit `.env.local` or a real API key.

### 4. Start development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 5. Production build

```bash
npm run build
```

### 6. Production start

```bash
npm start
```

---

## Usage examples

### Example 1 — target role

```text
Which of Aditya's projects should be improved first for an AI Engineer internship?
```

### Example 2 — job description

```text
We need a React developer with Node.js, PostgreSQL, Docker and REST API experience. Assess Aditya's fit.
```

### Example 3 — improvement review

```text
Review Aditya for a Full Stack Developer Intern role.
```

For the strongest results, provide a specific target role or complete job description.

---

## Guardrails and limitations

The agent is intentionally constrained.

### Input protection

The application uses input limits and rate limiting so a public endpoint cannot be used without basic abuse protection.

### AI limitations

The model can still misunderstand a job description or produce an imperfect prioritization. Its answer is a decision-support output, not a hiring prediction.

### Portfolio limitation

The agent can only make reliable claims from the portfolio evidence available to its tool. Missing evidence should be treated as missing evidence rather than assumed experience.

### External API dependency

The agent depends on the configured Groq API and an available model. If the API is unavailable, misconfigured, rate-limited, or the selected model is unavailable, the request can fail.

### No irreversible actions

The agent does not apply for jobs, send messages, modify repositories, or perform other irreversible actions.

---

## Evaluation / verification

Run the agent with at least these two live scenarios:

1. A specific AI Engineer internship question.
2. A job description containing several explicit technical requirements.

Verify that:

- The request completes successfully.
- Portfolio claims are grounded in the available portfolio tool.
- Missing skills are identified as gaps instead of invented.
- The response contains the expected sections.
- The UI displays the result and error state correctly.

### V2 evaluation results

This README deliberately does **not** invent evaluation scores. Add the measured V2 results here after running the project's actual evaluation suite.

```text
V2 evaluation:
- Test count:
- Passed:
- Failed:
- Key finding:
```

---

## Demo flow

A 3–5 minute live demo should show the real application rather than slides.

Recommended sequence:

1. Start on the home screen.
2. Briefly explain the agent's purpose.
3. Enter an AI Engineer internship question.
4. Run the agent and show the complete answer.
5. Explain that portfolio claims are grounded through the portfolio tool.
6. Enter a job description with multiple requirements.
7. Run the agent again and show the fit/gap analysis.
8. Briefly show the server-side API route/tool execution in the code.
9. Demonstrate one guardrail or limitation.
10. Finish by explaining one design decision and one limitation.

---

## Design decision to explain on camera

**Portfolio-grounded tool calling.**

Instead of asking the model to remember Aditya's portfolio directly, the agent is instructed to call `get_portfolio` before making portfolio claims. This makes the source of those claims explicit and gives the application a clearer boundary between model reasoning and verified project data.

---

## Limitation to explain on camera

**The agent is not a hiring oracle.**

A strong fit score or recommendation does not guarantee an interview or job. The agent compares the supplied role requirements against available portfolio evidence and recommends practical improvements. It cannot know what a recruiter will ultimately decide.

---

## AI transparency

AI assistance was used during development for implementation help, debugging, documentation, and code review. The application was manually run and verified during development, and the final behavior should be demonstrated from the live application rather than represented through screenshots alone.

---

## Security notes

- Keep `GROQ_API_KEY` server-side.
- Never commit `.env.local`.
- Do not paste API keys into source files.
- Keep input limits enabled.
- Keep rate limiting enabled for public deployment.
- Use a sensible streaming/request timeout if streaming handlers are introduced.

---

## License

This project is a personal portfolio/capstone project.

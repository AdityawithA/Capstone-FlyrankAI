# Aditya AI — 3–5 Minute Live Demo Script

## 0:00–0:30 — Introduction

“Hi, this is Aditya AI, my portfolio and career review agent.

The problem I wanted to solve is simple: instead of giving a generic AI answer about a career goal, I wanted the agent to compare a real software role against verified evidence from my portfolio and tell me what I should improve next.”

## 0:30–1:20 — First live run

Show the real application.

Enter:

> Which of Aditya's projects should be improved first for an AI Engineer internship?

Click **Run agent**.

While it runs:

“The input is sent to my server-side API route. The Groq API key stays on the server, so it is not exposed to the browser.”

Show the response.

“The response is structured into a fit summary, strong evidence, gaps, top actions, a recommended project improvement, and this week's action.”

## 1:20–2:20 — Job-description run

Replace the input with:

> We need a React developer with Node.js, PostgreSQL, Docker and REST API experience. Assess Aditya's fit.

Run the agent.

Explain:

“This is where the agent becomes more useful than a static portfolio search. It extracts the requirements from the job description and compares them against my portfolio evidence.”

Point out one strong match and one gap from the actual result.

“An important rule is that the agent should not invent technologies or experience that are not in my portfolio.”

## 2:20–3:10 — Architecture/design decision

Show the relevant server-side code.

“My main design decision was to ground portfolio claims with a tool call. The model is instructed to use `get_portfolio` before making claims about my projects, skills, education, or experience.”

Show the tool-call path if available.

“The browser talks to my Next.js API route. The server runs the agent, calls the model, executes the portfolio tool when requested, returns the tool result to the model, and then sends the final response back to the browser.”

## 3:10–3:50 — Guardrail / limitation

Show the input limit or rate-limiting behavior.

“I also added basic protection around the public route, including input limits and rate limiting, because an unrestricted public AI endpoint could consume API credits very quickly.”

Then explain the limitation:

“The agent is not a hiring oracle. It can compare requirements against evidence and recommend improvements, but it cannot guarantee an interview or hiring outcome. It can also misunderstand an ambiguous job description.”

## 3:50–4:20 — Close

“The main thing I wanted to demonstrate is not just that an LLM can generate text, but that the model is part of a controlled application flow: server-side secrets, structured prompts, tool execution, portfolio grounding, input protection, and a usable interface.”

End on the working application.

## Recording checklist

- [ ] Record the real application, not slides.
- [ ] Show at least one successful live run.
- [ ] Show a second role/job-description run.
- [ ] Explain one design decision.
- [ ] Explain one limitation or guardrail.
- [ ] Keep the final recording between 3 and 5 minutes.
- [ ] Upload the video as an unlisted YouTube video.
- [ ] Submit the README and video link in the portal.

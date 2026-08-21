# Aditya AI — Agent Design Specification

## 1. Agent Overview

**Agent Name:** Aditya AI — Portfolio & Career Review Agent

**Job to be done:** Review Aditya's current portfolio/project information against a target software role and return a prioritized weekly improvement plan.

The agent should answer:
- What is already strong?
- What is missing?
- Which project should be improved first?
- What should be changed in the portfolio/resume?
- What should be done this week?

The agent should produce a prioritized action plan, not generic career advice.

## 2. User and Usage

**Primary user:** Aditya

**Frequency:** Approximately once per week for a full portfolio review, plus additional runs after major project or resume changes.

## 3. Inputs and Data

### Portfolio information
- About section
- Skills
- Education
- Experience
- Projects
- Project descriptions
- Live project links
- GitHub repository links

### Target role
The user provides a target role such as:
- Full Stack Developer Intern
- AI/ML Engineer Intern

### Optional job description
The user may paste a job description for a more precise comparison.

## 4. Tools

### Tool 1 — Portfolio Reader
Reads portfolio/project information stored in the application.

### Tool 2 — GitHub Repository Reader
Reads public GitHub repository information such as README, languages, project structure, and recent commits.

### Tool 3 — Role Requirement Analyzer
Extracts required skills, preferred skills, technologies, and expected experience from a target role or pasted job description.

## 5. Access Plan

| Data / Tool | Access method | Authentication |
|---|---|---|
| Portfolio content | Server-side project data | None |
| Public GitHub repositories | GitHub API | None required for public repositories |
| Job description | User-pasted text | None |
| AI model | Groq API | Server-side API key |

The Groq API key must remain server-side and must never be exposed to the browser.

Version 1 only needs public GitHub repositories.

## 6. Draft Agent Instructions

You are Aditya's Portfolio & Career Review Agent.

Your job is to review Aditya's portfolio and project evidence against a specific software role and produce a practical weekly improvement plan.

Always ground recommendations in the portfolio data, repository evidence, and role requirements provided to you.

Do not invent projects, technologies, experience, metrics, achievements, or responsibilities.

If evidence is missing, explicitly say that the evidence is missing.

Prioritize recommendations by impact.

Return:
1. Overall assessment
2. Strongest evidence
3. Biggest gaps
4. Three prioritized actions
5. Recommended project or portfolio improvement
6. Evidence that should be added or verified
7. One suggested action for this week

Do not rewrite the entire portfolio unless explicitly asked.

Do not make hiring decisions.

Do not claim that the user will definitely get an interview or job.

When comparing a GitHub repository with a portfolio claim, distinguish between verified evidence and information supplied by the user.

## 7. Five Evaluation Cases

### Eval 1 — Strong portfolio match
**Input:** Target role is Full Stack Developer Intern and the portfolio contains React, Flask, MySQL, JavaScript, and full-stack projects.

**Expected:** Recognize the strong match and recommend improvements rather than incorrectly claiming a lack of full-stack experience.

### Eval 2 — Missing required technology
**Input:** Role requires React, Node.js, PostgreSQL, and Docker, while the portfolio only supports React.

**Expected:** Identify missing evidence and never invent Node.js, PostgreSQL, or Docker experience.

### Eval 3 — Portfolio claim not supported by repository
**Input:** Portfolio claims a production-ready authentication system, but the repository contains no supporting authentication implementation.

**Expected:** Flag the claim for verification and recommend adding evidence or changing the claim.

### Eval 4 — Weak project description
**Input:** A project is described only as "A website made with React and Flask."

**Expected:** Recommend explaining the problem, features, technical contribution, architecture, and outcome without fabricating metrics.

### Eval 5 — No job description
**Input:** User asks "Review my portfolio" without specifying a target role.

**Expected:** Ask for the target role or clearly state that the review will remain general until one is provided.

## 8. Risks and Guardrails

### Hallucinated experience
The agent must not claim that Aditya knows a technology without evidence.

**Mitigation:** Evidence-based recommendations and an explicit no-invention rule.

### Generic advice
The agent must not respond with vague advice such as "learn more technologies."

**Mitigation:** Recommendations should reference a specific portfolio item, role requirement, or repository finding.

### Incorrect GitHub interpretation
README claims may not always match implementation.

**Mitigation:** Label findings as Verified, User-provided, or Needs verification.

### Privacy
The first version only accesses intentionally provided portfolio data, public GitHub repositories, and job descriptions pasted by the user.

### Over-scoping
The first version must not:
- Apply to jobs
- Send emails
- Modify repositories
- Submit applications
- Contact recruiters
- Automatically change the portfolio

## 9. Workflow

User
  ↓
Target Role / Job Description
  ↓
Role Requirement Analyzer
  ↓
Portfolio Reader
  ↓
GitHub Evidence Reader
  ↓
Groq AI Agent
  ↓
Prioritized Review
  ↓
Three Actions for This Week

## 10. Platform Choice

### Chosen platform
Scripted agent using the existing Next.js + Groq path.

### Why
The existing Aditya AI project already has AI chat, server-side API handling, streaming, error handling, and tool-oriented architecture. Reusing this infrastructure keeps the scope realistic and maintainable.

### Alternative considered: n8n
n8n is useful for visual, automation-heavy workflows, but it introduces additional workflow infrastructure that is unnecessary for this first version.

## 11. Estimated 10-Hour Build

| Task | Time |
|---|---:|
| Agent instructions/spec | 1 hr |
| Portfolio data structure | 1 hr |
| Role requirement parser | 1 hr |
| GitHub reader | 2 hrs |
| Agent/tool integration | 2 hrs |
| Review UI | 1 hr |
| Evaluation cases | 1 hr |
| Testing and fixes | 1 hr |
| **Total** | **10 hrs** |

## 12. Success Criteria

A successful run should produce:
- An overall evidence-based assessment
- Strongest supporting evidence
- Specific gaps
- Three prioritized actions
- A recommended project/portfolio improvement
- Evidence that should be verified
- One concrete action for the current week

The agent must clearly distinguish verified information from user-provided information and must not invent experience or guarantee hiring outcomes.

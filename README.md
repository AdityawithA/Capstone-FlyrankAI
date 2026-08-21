# FlyRank AI Fluency Capstone

<div align="center">

# Aditya Kumar

### AI Fluency Capstone · Full-Stack Development · AI Engineering

A complete record of my journey through the FlyRank AI Fluency program, covering AI-assisted development, workflows, tool calling, generative UI, failure handling, AI agents, deployment, DNS, and a public developer portfolio.

[![Live Portfolio](https://img.shields.io/badge/🌐%20Live%20Portfolio-Visit%20Website-0b3532?style=for-the-badge)](https://aditya-portfoli0.netlify.app/)
[![GitHub](https://img.shields.io/badge/💻%20GitHub-AdityawithA-181717?style=for-the-badge&logo=github)](https://github.com/AdityawithA)
[![LinkedIn](https://img.shields.io/badge/💼%20LinkedIn-Aditya%20Kumar-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/aditya-kumar-892099293/)

</div>

---

## 📌 About This Repository

This repository contains my complete work for the **FlyRank AI Fluency Capstone**.

The repository is not intended to be just a collection of isolated coding assignments. It documents a progressive learning journey in which I moved from using AI as a development assistant toward understanding how to design, build, evaluate, debug, deploy, and explain AI-powered software systems.

Throughout the capstone, the focus gradually expanded into:

- AI-assisted software development
- Prompt engineering
- Product thinking
- AI workflows
- Tool calling
- Generative UI
- Structured tool outputs
- MCP and external tool connections
- Failure and edge-case handling
- AI agents
- Agent specifications
- Agent evaluation
- Guardrails
- Server-side AI execution
- Deployment
- Hosting
- DNS
- HTTPS
- Public portfolio development
- Technical documentation
- Human ownership of AI-generated work

The central idea behind the capstone is:

> **AI should accelerate development, but the developer should still understand, evaluate, improve, and take ownership of what is shipped.**

---

## 🎯 Purpose of the Capstone

Modern software development increasingly involves AI-assisted workflows.

However, simply being able to generate code with an AI model is not enough.

A developer working with AI needs to understand:

1. What problem is being solved.
2. Why a particular implementation was chosen.
3. What the AI-generated code actually does.
4. How the different parts of the system communicate.
5. What happens when something fails.
6. How external tools and services are connected.
7. How AI outputs are evaluated.
8. How applications are deployed.
9. How security and secrets are handled.
10. How to explain the resulting system to another person.

The FlyRank AI Fluency journey helped me explore these areas through practical assignments rather than purely theoretical exercises.

This repository therefore represents both **implementation and learning**.

---

## 🧭 Learning Journey

The capstone follows a progression similar to:

```text
AI-Assisted Development
        ↓
Understanding AI Workflows
        ↓
Building Real Interfaces
        ↓
Tool Calling
        ↓
Generative UI
        ↓
Failure & Edge-Case Handling
        ↓
Agent Design
        ↓
Agent Implementation
        ↓
Evaluation & Guardrails
        ↓
Deployment
        ↓
DNS & Web Infrastructure
        ↓
Public Portfolio
        ↓
Explaining and Owning the Work
```

Each stage builds on concepts introduced earlier.

---

# 📂 Repository Structure

The repository is organized chronologically so that the development process can be followed from the earliest exercises to the final public-facing work.

```text
Capstone-FlyrankAI/
│
├── Capstone-AIFluency/
│   └── Supporting capstone material
│
├── Week 01/
│   └── Week 01 assignments and work
│
├── Week 02/
│   └── Week 02 assignments and work
│
├── Week-03/
│   └── Week 03 assignments and work
│
├── Week-04/
│   └── AI workflow and MCP-related work
│
├── Week-05/
│   └── AI tools, generative UI, failure handling,
│       and agent-related work
│
├── Week-06/
│   └── Explain-it-like-you-built-it work,
│       deployment, portfolio and web infrastructure
│
├── .gitignore
├── CLAUDE.md
├── LICENSE
└── README.md
```

Each weekly directory is intentionally kept separate so that individual assignments can be inspected without losing the larger context of the capstone.

---

# 📚 Weekly Breakdown

## Week 01 — Getting Started with AI Fluency

The first stage established the foundation for working effectively with AI during software development.

The emphasis was on understanding AI not simply as a chatbot, but as a development partner that can assist with:

- Research
- Planning
- Writing
- Coding
- Debugging
- Brainstorming
- Iteration
- Documentation

An important lesson from this stage was that the quality of the final result depends heavily on how clearly the problem is defined and how effectively AI output is reviewed.

The workflow began to emphasize:

```text
Understand
   ↓
Prompt
   ↓
Generate
   ↓
Review
   ↓
Test
   ↓
Improve
```

---

## Week 02 — Building with AI Assistance

The second stage moved from experimentation toward practical implementation.

The work focused on:

- Translating requirements into implementation
- Structuring projects
- Generating and reviewing code
- Debugging with AI assistance
- Iterating on UI
- Improving implementation quality
- Understanding generated code
- Testing the resulting application

This stage demonstrated an important distinction:

> AI can generate an implementation, but the developer is still responsible for deciding whether that implementation is correct.

---

## Week 03 — Product Thinking and AI Fluency

The third stage focused more heavily on the relationship between AI, software products, and users.

Important themes included:

- Understanding user needs
- Defining useful AI functionality
- Designing user interactions
- Thinking about product outcomes
- Evaluating AI output
- Improving prompts
- Understanding limitations
- Connecting AI capabilities to real use cases

The main lesson was that a technically impressive AI feature is not automatically a useful product.

A good AI feature should solve a real problem and provide a clear benefit to the user.

---

## Week 04 — AI Workflows, Tools and MCP

Week 04 introduced more advanced AI workflow concepts.

The focus moved beyond individual prompts toward systems where multiple steps, tools, and external resources can work together.

### AI Workflows

A workflow can be thought of as a predefined sequence of steps.

```text
User Input
    ↓
Research
    ↓
Process Information
    ↓
Generate Result
    ↓
Review
    ↓
Final Output
```

The important characteristic of a workflow is that the sequence is generally designed ahead of time.

This differs from an agent, where the system can make decisions about which actions or tools are necessary to accomplish the task.

### MCP — Model Context Protocol

The capstone also introduced the concept of **Model Context Protocol (MCP)**.

MCP provides a standardized way for AI applications to interact with external capabilities and information.

The three important MCP primitives explored were:

#### Tools

Tools allow an AI system to perform actions, such as querying a service, reading information, calling an API, or interacting with an external system.

#### Resources

Resources provide information that an AI system can access, such as files, documents, databases, knowledge sources, or other structured information.

#### Prompts

Prompts provide reusable instructions or interaction patterns for AI applications.

Understanding these concepts helped establish the foundation for later agent development.

---

# Week 05 — AI Tools and Generative UI

Week 05 moved into practical AI application engineering.

One central goal was to build an AI interface where the model could interact with server-side tools rather than simply returning text.

This is an important distinction between a simple chat interface and an application that actually uses AI as part of a software system.

## 🛠️ Server-Side Tool Calling

The application demonstrates how an AI route can expose a tool with a defined contract.

The tool includes:

- A name
- A typed schema
- Input parameters
- An execution function
- A structured return value

Conceptually:

```text
User
  ↓
AI Model
  ↓
Tool Decision
  ↓
Server-Side Tool
  ↓
Structured Result
  ↓
UI
```

Tool execution remains on the server so that sensitive operations and API credentials are not unnecessarily exposed to the browser.

## 🎨 Generative UI

Instead of treating tool output as raw JSON or plain text, the interface can render the result as an actual UI component.

```text
Tool Result
     ↓
Structured Data
     ↓
React Component
     ↓
Visual Result
```

Possible representations include:

- Score cards
- Tables
- Charts
- Findings
- Status indicators
- Structured result panels

## 🔄 Tool Lifecycle

The tool lifecycle can be treated as a state machine:

```text
Input Streaming
      ↓
Input Available
      ↓
Tool Executing
      ↓
Output Available
```

And, when something fails:

```text
Tool Execution
      ↓
Output Error
```

Each state should communicate a different piece of information to the user.

---

# 🧯 Failure and Edge-Case Handling

The capstone also focused heavily on the reality that AI applications do not always succeed.

The application was tested against scenarios such as:

- API failure
- Network failure
- Rate limiting
- `429 Too Many Requests`
- `503 Service Unavailable`
- Slow responses
- Interrupted streams
- Empty input
- Empty results
- First-run empty state
- Mid-stream failure

Instead of allowing these conditions to crash the interface, the application provides designed states.

## 🔁 Retry Handling

When a request fails, the user receives a clear error state rather than being left with a broken interface.

The retry interaction provides a way to attempt the failed operation again.

```text
Request
   ↓
Failure
   ↓
Error UI
   ↓
Retry
   ↓
Request Again
   ↓
Result
```

## 🦴 Loading and Skeleton States

Slow AI responses create another important UX problem.

Loading states communicate that work is still happening, while skeleton states help maintain visual stability while content is generated.

## 🧪 Sabotage Testing

The application was intentionally tested under failure conditions rather than only testing the happy path.

```text
Normal request
     ↓
Network interruption
     ↓
API failure
     ↓
Rate limit
     ↓
Slow response
     ↓
Recovery / Retry
```

This process helps identify problems that may never appear during normal development.

---

# 🤖 Building an AI Agent

The capstone then moved from workflows and tools toward the design and implementation of an AI agent.

## Workflow vs Agent

### Workflow

A workflow generally follows a predefined sequence:

```text
Step 1
  ↓
Step 2
  ↓
Step 3
  ↓
Result
```

### Agent

An agent can determine what actions are needed to complete a task:

```text
             ┌── Tool A
             │
User → Agent ├── Tool B
             │
             └── Tool C
                  ↓
                Result
```

The agent therefore has more decision-making responsibility than a fixed workflow.

---

# 🧠 Agent Design

Before building the agent, the work involved defining:

- The job the agent should perform
- The intended user
- Required data
- Required tools
- Access requirements
- Agent instructions
- Evaluation cases
- Risks
- Guardrails

A narrowly scoped agent is easier to:

- Build
- Test
- Evaluate
- Debug
- Explain
- Trust

---

# 🎯 FL-07 AI Agent

One of the major artifacts in the repository is the FL-07 AI agent.

The agent is designed around reviewing Aditya's professional profile and portfolio information.

It can process portfolio information and provide career-oriented analysis based on that data.

The implementation uses a server-side AI route and keeps the AI interaction behind the application backend.

## 🏗️ FL-07 Architecture

```text
User
  ↓
Next.js Interface
  ↓
Agent API Route
  ↓
Agent Logic
  ↓
Groq API
  ↓
Portfolio Data
  ↓
Structured AI Response
  ↓
User Interface
```

## 📁 FL-07 Project Structure

```text
FL-07-Aditya-AI-Agent/
│
├── app/
│   ├── api/
│   │   └── agent/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   └── Agent.tsx
│
├── data/
│   └── portfolio.json
│
├── lib/
│   ├── agent.ts
│   └── tools.ts
│
├── BUILD-LOG.md
├── README.md
├── .env.example
├── .gitignore
├── next.config.ts
├── package.json
├── package-lock.json
└── tsconfig.json
```

---

# 🔐 Server-Side API Keys

The AI agent uses an API key for the model provider.

The key is intentionally kept server-side.

Environment variables are used instead of hardcoding secrets into source code.

Example:

```env
GROQ_API_KEY=your_api_key_here
```

The actual API key should never be committed to GitHub.

---

# 📄 Portfolio Data

The agent uses structured portfolio information rather than relying entirely on free-form knowledge.

This makes AI responses more grounded in actual project information.

The portfolio data can include:

- Education
- Skills
- Projects
- Technologies
- Experience
- Professional information

The data is stored separately from the UI and agent logic, making it easier to update the portfolio without rewriting the application.

---

# 🧪 Agent Evaluation

The agent is evaluated using questions and scenarios that test whether it:

- Answers intended questions
- Stays grounded in available information
- Avoids inventing unsupported claims
- Produces useful recommendations
- Handles failures
- Communicates errors clearly
- Completes its intended task end-to-end

Evaluation is treated as part of development rather than something performed only at the end.

---

# 🛡️ Agent Guardrails

Agents need boundaries.

Guardrails help define:

- What the agent may do
- What information it can use
- What actions require confirmation
- What it should refuse
- What it should never fabricate

The objective is to keep the agent useful while preventing unnecessary or unsafe behavior.

---

# Week 06 — Understanding, Explaining and Shipping

A major principle of this stage is:

> **If I built it, I should be able to explain it.**

AI-assisted development can produce a working application very quickly, but being able to run the application is different from understanding it.

The work therefore focuses on explaining real pieces of the implementation in plain language.

Possible areas include:

- How the page is structured
- How components communicate
- How styling works
- How navigation works
- How deployment works
- How a server route works
- How API calls are made
- How data moves through the application

The explanation should demonstrate actual understanding rather than simply reproducing a generic tutorial.

---

# 🌐 Personal Portfolio

A major public-facing part of the capstone is the personal developer portfolio.

The portfolio acts as a central place where recruiters, employers, collaborators, and other developers can learn about my work.

It includes areas such as:

- Personal introduction
- Developer positioning
- Skills
- Featured projects
- AI/ML projects
- Full-stack projects
- Professional links
- Contact information
- Capstone work

## 🚀 Live Portfolio

**https://aditya-portfoli0.netlify.app/**

The portfolio is publicly deployed and accessible over HTTPS.

---

# ☁️ Deployment

The portfolio uses a free hosting path through Netlify.

The deployment process demonstrates:

```text
Local Project
     ↓
Git Repository
     ↓
Hosting Platform
     ↓
Build
     ↓
Deployment
     ↓
HTTPS
     ↓
Public URL
```

Building an application is only part of shipping it. The application also needs to be deployed and accessible to real users.

---

# 🌍 DNS

DNS stands for **Domain Name System**.

It translates human-readable domain names into information that allows browsers to locate the appropriate infrastructure.

A simplified flow is:

```text
User enters website address
          ↓
DNS Resolver
          ↓
Nameserver
          ↓
DNS Record
          ↓
Hosting Destination
          ↓
Server / CDN
          ↓
Website Response
```

The capstone also covers:

- DNS
- Resolver
- Nameserver
- DNS records
- CNAME
- Hosting
- Domain resolution
- HTTPS
- Browser request flow

A custom domain is optional; the free Netlify URL is sufficient for the assignment.

---

# 💻 Technology Stack

Technologies explored across the capstone and related projects include:

## Languages

- Python
- JavaScript
- TypeScript
- Java
- HTML5
- CSS3

## Frontend

- React
- Next.js
- JavaScript
- TypeScript
- Responsive CSS

## Backend

- Flask
- Python
- Next.js API Routes
- REST-style APIs
- Server-side AI integrations

## Databases

- MySQL
- SQLite

## AI / ML

- Machine Learning
- LLM integration
- Prompt engineering
- AI workflows
- Tool calling
- Generative UI
- AI agents
- Agent evaluation
- Guardrails

## Developer Tools

- Visual Studio Code
- Git
- GitHub
- Git Bash
- Chrome DevTools
- Node.js
- npm
- Jupyter Notebook

---

# 🐛 Debugging and Testing

Debugging included more than fixing syntax errors.

Examples of issues investigated during the development journey include:

- Module resolution problems
- API failures
- Model availability errors
- Rate limits
- HTTP errors
- Hydration warnings
- Browser console errors
- Network failures
- Loading states
- Deployment issues
- Environment variable issues
- GitHub secret scanning

A general debugging workflow became:

```text
Observe
   ↓
Identify the failing layer
   ↓
Read the error
   ↓
Reproduce
   ↓
Find the cause
   ↓
Apply a targeted fix
   ↓
Test again
   ↓
Document if important
```

---

# 🔐 Security Practices

Sensitive credentials are kept outside source code.

Common local files such as:

```text
.env
.env.local
.env.*.local
```

should not be committed.

Instead, projects can include:

```text
.env.example
```

Example:

```env
GROQ_API_KEY=
```

The real key remains local or is stored in the hosting provider's environment configuration.

## GitHub Secret Protection

GitHub can detect API credentials accidentally included in commits.

If a secret is accidentally committed:

1. Revoke or rotate the exposed key.
2. Remove the secret from repository history if necessary.
3. Add the appropriate files to `.gitignore`.
4. Replace the secret with an environment variable.
5. Verify the repository no longer exposes the credential.

---

# 📝 Build Logs

Some assignments include build logs documenting the actual development process.

The purpose is to record:

- What was attempted
- What failed
- What was changed
- Why a change was made
- What was removed
- What was simplified
- What was learned

Real development is iterative, so the build logs are intended to reflect that process.

---

# 🧪 Evaluation Philosophy

Evaluation throughout the capstone considers more than whether an application technically runs.

Important questions include:

- Does it solve the intended problem?
- Is the implementation understandable?
- Does it handle failure?
- Is the AI grounded?
- Can the system be tested?
- Can the application be shipped?
- Can the developer explain the important parts?

---

# 🔄 Development Philosophy

The capstone follows an iterative approach:

```text
Plan
 ↓
Build
 ↓
Run
 ↓
Observe
 ↓
Debug
 ↓
Improve
 ↓
Test
 ↓
Document
 ↓
Ship
```

AI can accelerate many of these stages, but human review remains essential.

---

# 🤝 AI as a Development Partner

AI can help with:

- Brainstorming
- Architecture suggestions
- Code generation
- Debugging
- Documentation
- Refactoring
- Research
- Explanations
- Testing ideas

However, AI output still needs to be:

- Reviewed
- Tested
- Adapted
- Verified
- Integrated into the actual project

The final responsibility remains with the developer.

---

# 🧠 AI-Assisted Development Workflow

My general workflow became:

```text
1. Understand the requirement
        ↓
2. Break it into smaller problems
        ↓
3. Ask AI for implementation assistance
        ↓
4. Inspect the generated code
        ↓
5. Run the application
        ↓
6. Test the feature
        ↓
7. Investigate errors
        ↓
8. Ask AI for targeted debugging help
        ↓
9. Apply and verify the fix
        ↓
10. Document important decisions
```

This prevents the common problem of generating large amounts of code without understanding what is actually being built.

---

# 🌟 Featured Projects

The capstone repository is part of a broader development portfolio containing multiple projects.

## InterviewAce AI

An AI-powered interview preparation platform featuring:

- AI-generated interview questions
- Role-specific preparation
- Mock interviews
- AI response evaluation
- Performance tracking
- Authentication
- Database storage

Repository:  
https://github.com/AdityawithA/InterviewAce-AI

---

## CampusSync

A full-stack college platform designed around student activities and campus events.

Features include:

- Authentication
- Role-based access
- Events
- Event registration
- Announcements
- Dashboards
- Database integration

Repository:  
https://github.com/AdityawithA/campussync

---

## TypeRush

An interactive typing application focused on speed, responsiveness, and user interaction.

Repository:  
https://github.com/AdityawithA/Type-Rush

---

## SMS Spam Detection

A machine-learning project that classifies SMS messages to identify potential spam.

Repository:  
https://github.com/AdityawithA/SMS-SPAM-DETECTION

---

## Breast Cancer Detection

A machine-learning classification project focused on detecting breast cancer using trained machine-learning models.

Repository:  
https://github.com/AdityawithA/Breast-Cancer-Detection-Model-Using-Machine-Learning

---

## Dezinova

A departmental club website created to provide a modern online presence for the student community.

Live Website:  
https://dezinova2025.netlify.app/

Repository:  
https://github.com/AdityawithA/Dezinova

---

# 🌐 Important Links

| Resource | Link |
|---|---|
| 🌐 Portfolio | [aditya-portfoli0.netlify.app/](https://aditya-portfoli0.netlify.app/) |
| 💻 GitHub | [github.com/AdityawithA](https://github.com/AdityawithA) |
| 💼 LinkedIn | [linkedin.com/in/aditya-kumar-892099293](https://www.linkedin.com/in/aditya-kumar-892099293/) |
| 🤖 InterviewAce AI | [GitHub Repository](https://github.com/AdityawithA/InterviewAce-AI) |
| 🎓 CampusSync | [GitHub Repository](https://github.com/AdityawithA/campussync) |
| ⌨️ TypeRush | [GitHub Repository](https://github.com/AdityawithA/Type-Rush) |
| 🛡️ SMS Spam Detection | [GitHub Repository](https://github.com/AdityawithA/SMS-SPAM-DETECTION) |
| 🧠 Breast Cancer Detection | [GitHub Repository](https://github.com/AdityawithA/Breast-Cancer-Detection-Model-Using-Machine-Learning) |
| 🎨 Dezinova | [Live Website](https://dezinova2025.netlify.app/) |

---

# ⚙️ Running Individual Projects

Because this repository contains multiple projects, each project may have its own setup requirements.

For a typical Next.js application:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

For projects requiring environment variables, check the project's `.env.example` file.

Never copy real API keys into source code.

---

# 🔧 Git Workflow

The repository is maintained using Git and GitHub.

A typical development cycle is:

```bash
git status
```

Review changes.

```bash
git add .
```

Stage the required files.

```bash
git commit -m "describe the change"
```

Create a meaningful commit.

```bash
git push origin main
```

Push changes to GitHub.

Before pushing:

```text
✓ No API keys
✓ No .env files
✓ No node_modules
✓ No unnecessary build artifacts
✓ No private credentials
✓ README updated when necessary
```

---

# 📦 Files That Should Not Be Committed

Common generated and sensitive files include:

```text
node_modules/
.next/
dist/
build/
.env
.env.local
.env.*.local
*.log
.vscode/
```

The exact ignore rules may vary by project.

---

# 📜 License

This repository includes a license file at the root:

```text
LICENSE
```

Individual third-party dependencies remain subject to their respective licenses.

---

# 👨‍💻 About Me

## Aditya Kumar

I am a Computer Science and Design student interested in building software at the intersection of:

- Full-stack development
- Artificial intelligence
- Machine learning
- Developer tools
- AI-powered products

My development journey has included both traditional software engineering and AI-assisted application development.

I am particularly interested in building practical systems where AI is not simply a chatbot, but an actual component of a useful software product.

---

# 🎯 Career Direction

My current technical direction is moving toward **AI Engineering**, while maintaining a strong foundation in full-stack development.

The combination is intentional.

Building useful AI products requires more than knowing how to call an LLM API.

It also requires understanding:

- Frontend development
- Backend architecture
- APIs
- Databases
- Authentication
- Deployment
- Testing
- Security
- User experience
- AI evaluation
- Agents
- Tool integrations

This capstone provides practical exposure to many of these areas.

---

# 📈 From Full-Stack Development to AI Engineering

The progression represented by this repository can be summarized as:

```text
Frontend Development
        ↓
Backend Development
        ↓
Full-Stack Applications
        ↓
Machine Learning
        ↓
AI-Powered Applications
        ↓
LLM Integration
        ↓
AI Workflows
        ↓
Tool Calling
        ↓
Generative UI
        ↓
AI Agents
        ↓
AI Product Engineering
```

The objective is not to abandon software engineering for AI.

The objective is to combine both.

---

# 💡 Key Principles

### 1. Understand Before Shipping

A working application is not enough. The developer should understand the important decisions behind it.

### 2. Build the Smallest Useful Version

Complexity should be added only when it provides real value.

### 3. Test the Failure Path

The happy path is only one part of an application. Failures should be intentionally tested.

### 4. Keep AI Grounded

AI systems should use reliable information and clearly defined sources whenever accuracy matters.

### 5. Protect Secrets

API keys and credentials should never be committed to source control.

### 6. Document Real Decisions

Documentation should reflect actual development rather than pretending everything worked perfectly from the beginning.

### 7. Human-in-the-Loop

AI can assist with implementation, but human judgment remains necessary for architecture, security, testing, evaluation, product decisions, deployment, and final approval.

---

# 🧠 What This Repository Represents

This repository represents more than completed assignments.

It represents a shift in how I approach software development.

The progression is from:

> "Can AI generate this?"

to:

> "Can I use AI effectively to design, build, test, explain, and ship this?"

That distinction is the core idea behind the AI Fluency journey.

---

# 🚀 Final Outcome

At the end of the capstone journey, the goal is to have more than a collection of code samples.

The goal is to have a complete development process:

```text
Problem
  ↓
Research
  ↓
Specification
  ↓
Design
  ↓
AI-Assisted Implementation
  ↓
Testing
  ↓
Failure Handling
  ↓
Evaluation
  ↓
Iteration
  ↓
Documentation
  ↓
Deployment
  ↓
Public Portfolio
```

The resulting repository provides a record of that process.

It shows how individual assignments connect to a broader goal of becoming a developer capable of building modern AI-powered software from idea to deployment.

---

# 🌐 Visit the Portfolio

The latest public representation of this work is available here:

## [Aditya's Portfolio](https://aditya-portfoli0.netlify.app/)

The portfolio contains my projects, technical skills, professional information, and selected work from the development journey.

---

# 🔗 Connect With Me

**GitHub:**  
https://github.com/AdityawithA

**LinkedIn:**  
https://www.linkedin.com/in/aditya-kumar-892099293/

**Portfolio:**  
https://aditya-portfoli0.netlify.app/

---

<div align="center">

# Built. Tested. Explained. Shipped.

### FlyRank AI Fluency Capstone

**Aditya Kumar · 2026**

</div>

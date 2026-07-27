# FE-01: AI Workflow Comparison

This folder contains the deliverables for the **Week 2 - FE-01** assignment of the FlyRank AI Internship.

## Objective

The purpose of this assignment is to compare two AI-assisted development workflows by implementing the same feature using different prompting strategies.

The exercise demonstrates how prompt quality affects code quality, review effort, correctness, and maintainability.

---

## Feature Implemented

**Contact Form with Validation**

The feature includes:

- Full Name field
- Email field
- Subject field
- Message field
- Client-side validation
- Success message
- Responsive layout
- Accessibility improvements

---

## Branches

### `round-1-vague`

The feature was generated using a single vague prompt with minimal instructions.

Example prompt:

> Build a contact form.

---

### `round-2-precise`

The same feature was generated using a structured prompt containing:

- Functional requirements
- File references
- Validation rules
- Accessibility requirements
- Responsive design expectations
- Verification instructions

---

## Deliverables

- `WORKFLOW.md` — Comparison between both AI workflows
- `prompts.md` — Prompts used in both rounds
- Updated `CLAUDE.md` with project-specific rules
- Two Git branches:
  - `round-1-vague`
  - `round-2-precise`

---

## Key Learning Outcomes

- Well-defined prompts produce higher-quality code.
- Explicit constraints reduce review and debugging time.
- Verification steps help identify AI-generated mistakes before integration.
- Accessibility and validation should be included as requirements rather than assumed.

---

## Technologies Used

- React
- JavaScript (ES6+)
- CSS3
- Git & GitHub
- Claude / ChatGPT

---

## Author

**Aditya Kumar**

B.Tech Computer Science and Design  
Aspiring Full Stack Developer

- GitHub: https://github.com/AdityawithA
- LinkedIn: https://www.linkedin.com/in/aditya-kumar-892099293/
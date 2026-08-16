# FE-03: Prompt Ladder

## Objective

This exercise compares six AI-assisted development runs for the same feature. The goal is to improve the prompt one layer at a time and observe how each change affects the actual output.

The feature used throughout the exercise is a **React contact form for a developer portfolio**.

---

## Baseline — Weak Prompt

### Prompt

> Build a contact form.

### Representative Output

The AI generated a basic contact form with common fields such as name, email, and message. The implementation was generic and did not clearly address validation, accessibility, responsiveness, or the portfolio's purpose.

### Notes

**What changed in the prompt:**
This was the baseline, intentionally using a vague one-sentence request.

**What improved in the output:**
The AI produced a starting point for a contact form.

**What still failed:**
There was no clear purpose, audience, validation strategy, accessibility guidance, or responsive-design requirement.

**What I would try next:**
Add a clear goal for the feature.

---

# Version 1 — Clear Goal

### Layer Added

**Clearer goal**

### Prompt

> Build a contact form for my developer portfolio so recruiters can contact me.

### Representative Output

The output became more relevant to a portfolio. The form included professional contact-oriented text instead of generic website copy.

### Notes

**What changed in the prompt:**
I added a specific goal: allowing recruiters to contact me through my portfolio.

**What improved in the output:**
The generated copy and structure became more appropriate for a professional portfolio.

**What still failed:**
The implementation still lacked explicit validation and accessibility requirements.

**What I would try next:**
Define the intended audience more explicitly.

---

# Version 2 — Defined Audience

### Layer Added

**Defined audience**

### Prompt

> Build a contact form for my developer portfolio so software engineering recruiters can contact me.

### Representative Output

The generated interface used more professional language and focused the call-to-action toward recruiters rather than general website visitors.

### Notes

**What changed in the prompt:**
I explicitly identified software engineering recruiters as the audience.

**What improved in the output:**
The language became more targeted and professional.

**What still failed:**
The audience clarification did not significantly improve the technical implementation. Validation and accessibility were still missing.

**What I would try next:**
Add concrete functional requirements and constraints.

### Honest Reflection

This change **did not help the technical implementation very much**. It improved the wording, but the generated code was still missing important engineering requirements.

---

# Version 3 — Constraints

### Layer Added

**Constraints**

### Prompt

> Build a contact form for my developer portfolio so software engineering recruiters can contact me.
>
> Include:
>
> * Full name
> * Email
> * Subject
> * Message
> * Submit button
> * Responsive layout
>
> Use a React functional component.

### Representative Output

The output now contained the required fields and a clearer component structure. The layout was more closely aligned with the requested portfolio feature.

### Notes

**What changed in the prompt:**
I added explicit functional and implementation constraints.

**What improved in the output:**
The generated form contained the required fields and followed a clearer React structure.

**What still failed:**
Validation and accessibility were still incomplete.

**What I would try next:**
Add measurable quality criteria for validation and accessibility.

---

# Version 4 — Quality Criteria

### Layer Added

**Quality criteria**

### Prompt

> Build a contact form for my developer portfolio so software engineering recruiters can contact me.
>
> Include:
>
> * Full name
> * Email
> * Subject
> * Message
> * Submit button
> * Responsive layout
>
> Use a React functional component.
>
> Quality requirements:
>
> * All fields must be validated.
> * Email must use valid email-format validation.
> * Every input must have an accessible label.
> * Invalid fields must expose an appropriate `aria-invalid` state.
> * Validation messages must clearly explain the problem.

### Representative Output

The generated implementation now included client-side validation, email-format checking, accessible labels, and clearer validation messages.

### Notes

**What changed in the prompt:**
I added explicit quality criteria for validation and accessibility.

**What improved in the output:**
The form became substantially more usable and accessible, and fewer manual corrections were needed.

**What still failed:**
The AI did not consistently verify all edge cases, and some implementation details still required manual review.

**What I would try next:**
Add an explicit verification and review step.

---

# Version 5 — Verification Requirements

### Layer Added

**Verification requirements**

### Prompt

> Build a contact form for my developer portfolio so software engineering recruiters can contact me.
>
> Include:
>
> * Full name
> * Email
> * Subject
> * Message
> * Submit button
> * Responsive layout
>
> Use a React functional component.
>
> Quality requirements:
>
> * All fields must be validated.
> * Email must use valid email-format validation.
> * Every input must have an accessible label.
> * Invalid fields must expose an appropriate `aria-invalid` state.
> * Validation messages must clearly explain the problem.
>
> Verification:
>
> 1. Review the implementation for functional bugs.
> 2. Check empty-field and invalid-email cases.
> 3. Check keyboard accessibility.
> 4. Check responsive behaviour.
> 5. Identify any assumptions or limitations.
> 6. List any issues that still require manual verification.

### Representative Output

The final output included the requested fields, validation, accessibility attributes, and responsive structure. The AI also reviewed the implementation and identified areas requiring manual verification instead of assuming that the generated code was automatically correct.

### Notes

**What changed in the prompt:**
I added an explicit verification and review stage.

**What improved in the output:**
The implementation became easier to review because the AI considered validation edge cases, accessibility, responsiveness, and potential limitations.

**What still failed:**
AI verification did not replace real testing. I still needed to inspect and test the implementation myself.

**What I would try next:**
Use the final prompt as a reusable starting point and continue manual verification after generation.

---

# Comparison Summary

| Run       | Layer Added      | Main Output Improvement                     |
| --------- | ---------------- | ------------------------------------------- |
| Baseline  | None             | Generic contact form                        |
| Version 1 | Clear goal       | More portfolio-relevant output              |
| Version 2 | Defined audience | More targeted recruiter-facing language     |
| Version 3 | Constraints      | Required fields and clearer React structure |
| Version 4 | Quality criteria | Better validation and accessibility         |
| Version 5 | Verification     | More reviewable and reliable implementation |

## Key Lesson

The biggest improvement came from moving from general instructions to **specific, testable requirements**. The audience layer improved the language but did not meaningfully improve the implementation. Constraints established the expected structure, quality criteria improved correctness and accessibility, and verification made the AI consider its own output more critically.

The final prompt is therefore not simply longer. Each layer earned its place by addressing a weakness observed in the previous output.

## Final Reusable Prompt

See `final-prompt.md` for the cleaned-up version that can be given to another developer or AI assistant without requiring additional context.

# Reusable Prompt Template

## Purpose

A reusable prompt for learning a technical topic with structured, progressive, and practical AI guidance.

---

## Prompt

```text
Act as an experienced [SUBJECT/TOPIC] instructor.

## Learner Context

My current skill level is: [BEGINNER / INTERMEDIATE / ADVANCED]

I already understand:
- [EXISTING KNOWLEDGE 1]
- [EXISTING KNOWLEDGE 2]
- [EXISTING KNOWLEDGE 3]

My goal is:
[WHAT I WANT TO ACHIEVE]

I will use this knowledge for:
[PRACTICAL CONTEXT OR PROJECT]

## Topic

Teach me:
[TOPIC]

## Examples

Use the following examples as a reference for the level and style of explanation:

Example 1:
Concept: [CONCEPT]
Simple explanation: [SHORT EXPLANATION]
Practical example: [PRACTICAL EXAMPLE]

Example 2:
Concept: [CONCEPT]
Simple explanation: [SHORT EXPLANATION]
Practical example: [PRACTICAL EXAMPLE]

## Teaching Sequence

Teach the topic progressively:

1. Explain the foundation and why the concept exists.
2. Introduce the most important concepts in order of importance.
3. Show a small practical example for each concept.
4. Explain one common mistake or misconception for each.
5. Provide a short practice exercise.
6. Provide a small practical project that combines the concepts.
7. Ask three questions to check my understanding.

## Output Structure

For each major concept, use:

1. Concept name
2. What it does
3. When to use it
4. Simple explanation
5. Practical code/example
6. Common mistake
7. Practice exercise

## Constraints

- Do not assume knowledge beyond the learner context.
- Keep explanations practical rather than purely theoretical.
- Prefer simple examples before advanced ones.
- Avoid unnecessary concepts that are not relevant to the stated goal.
- Clearly distinguish facts from recommendations.
- Do not claim that generated code has been tested unless it has actually been tested.

## Verification

Before finishing:

1. Review the explanation for factual or technical errors.
2. Check that examples match the concepts being taught.
3. Check that the difficulty matches the stated skill level.
4. Identify assumptions or limitations.
5. State anything the learner should manually verify.

Do not claim that the learner has mastered the topic. Instead, provide exercises that allow the learner to verify their own understanding.
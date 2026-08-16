# FE-04: Prompt Iteration Log

## Objective

This exercise applies prompt-engineering techniques to a real task from my FL-01 workflow audit.

The selected task is:

> Learn React Hooks effectively.

The goal is to improve the prompt one technique at a time and observe how each change affects the actual AI output.

---

# Version 0 — Naive Prompt

## Technique

Baseline — no deliberate prompt-engineering technique.

## Prompt

> Teach me React Hooks.

## Output

<!-- Paste the complete Claude output here. -->

## Observation

### What changed

This is the intentionally weak baseline prompt. It provides almost no context or constraints.

### What improved in the output

The AI provided a general introduction to React Hooks and explained common Hooks at a high level.

### What still failed

The response was broad and did not account for my existing JavaScript knowledge, learning goals, or practical development context. It also did not provide a clear learning sequence.

### What I would try next

Add a role assignment so the AI approaches the task from the perspective of an experienced React instructor.

---

# Version 1 — Role Assignment

## Technique

Role assignment.

## Prompt

> Act as an experienced React instructor. Teach me React Hooks.

## Output

<!-- Paste the complete Claude output here. -->

## Observation

### What changed

I assigned the AI the role of an experienced React instructor.

### What improved in the output

The explanation became more instructional and focused more clearly on teaching rather than simply defining React Hooks.

### What still failed

The response was still generic because the AI did not know my current skill level, why I was learning React Hooks, or where I intended to use them.

### What I would try next

Add personal context and motivation.

---

# Version 2 — Context and Motivation

## Technique

Context and motivation.

## Prompt

> Act as an experienced React instructor.
>
> I am a Computer Science student learning React for full-stack development. I already understand HTML, CSS, and JavaScript fundamentals. I want to learn React Hooks so I can use them confidently in real projects.
>
> Teach me React Hooks.

## Output

<!-- Paste the complete Claude output here. -->

## Observation

### What changed

I added information about the learner's existing knowledge, current learning context, and motivation.

### What improved in the output

The explanation became more relevant to someone who already understands JavaScript rather than treating the learner as completely new to programming.

### What still failed

The response still varied in how it explained individual Hooks and did not provide a consistent format for learning each concept.

### What I would try next

Provide examples that demonstrate the desired level and style of explanation.

---

# Version 3 — Few-Shot Examples

## Technique

Few-shot examples.

## Prompt

> Act as an experienced React instructor.
>
> I am a Computer Science student learning React for full-stack development. I already understand HTML, CSS, and JavaScript fundamentals. I want to learn React Hooks so I can use them confidently in real projects.
>
> Teach me React Hooks.
>
> Use explanations similar to these:
>
> Example 1:
> Concept: useState
> Simple explanation: useState lets a component remember and update a value.
> Practical example: A counter where clicking a button increases the count.
>
> Example 2:
> Concept: useEffect
> Simple explanation: useEffect lets a component perform side effects.
> Practical example: Fetching data when a component loads.
>
> Now teach me the most important React Hooks.

## Output

<!-- Paste the complete Claude output here. -->

## Observation

### What changed

I provided two examples showing the desired explanation style.

### What improved in the output

The AI followed a more consistent teaching style and connected concepts to simple practical examples instead of relying only on definitions.

### What still failed

The response became more consistent, but the amount and organization of information still varied between Hooks.

### What I would try next

Specify a fixed output structure for every Hook.

---

# Version 4 — Output Structure

## Technique

Output structure.

## Prompt

> Act as an experienced React instructor.
>
> I am a Computer Science student learning React for full-stack development. I already understand HTML, CSS, and JavaScript fundamentals. I want to learn React Hooks so I can use them confidently in real projects.
>
> Teach me React Hooks.
>
> Use explanations similar to these:
>
> Example 1:
> Concept: useState
> Simple explanation: useState lets a component remember and update a value.
> Practical example: A counter where clicking a button increases the count.
>
> Example 2:
> Concept: useEffect
> Simple explanation: useEffect lets a component perform side effects.
> Practical example: Fetching data when a component loads.
>
> For each Hook, use this structure:
>
> 1. Hook name
> 2. What it does
> 3. When to use it
> 4. Simple code example
> 5. Common mistake
> 6. One practice exercise
>
> Focus on the Hooks most useful for building real React applications.

## Output

<!-- Paste the complete Claude output here. -->

## Observation

### What changed

I added a fixed structure that the AI should follow for every Hook.

### What improved in the output

The response became easier to scan and compare because each Hook followed the same structure. Code examples, use cases, mistakes, and exercises were presented more consistently.

### What still failed

The AI could explain the concepts well, but the learning process was still mostly passive. It did not necessarily guide me from fundamentals toward independent practice.

### What I would try next

Add step decomposition so the topic is taught progressively.

---

# Version 5 — Step Decomposition

## Technique

Step decomposition.

## Prompt

> Act as an experienced React instructor.
>
> I am a Computer Science student learning React for full-stack development. I already understand HTML, CSS, and JavaScript fundamentals. I want to learn React Hooks so I can use them confidently in real projects.
>
> Teach me React Hooks.
>
> Use explanations similar to these:
>
> Example 1:
> Concept: useState
> Simple explanation: useState lets a component remember and update a value.
> Practical example: A counter where clicking a button increases the count.
>
> Example 2:
> Concept: useEffect
> Simple explanation: useEffect lets a component perform side effects.
> Practical example: Fetching data when a component loads.
>
> Teach the topic in this sequence:
>
> Step 1: Explain what Hooks are and why they exist.
> Step 2: Teach the most important Hooks for beginners.
> Step 3: Show a small practical example for each.
> Step 4: Explain one common mistake for each.
> Step 5: Give me a short exercise after the explanations.
> Step 6: End with a mini-project that combines the Hooks.
> Step 7: Ask me three questions to check whether I understood the concepts.
>
> For each Hook, use this structure:
>
> 1. Hook name
> 2. What it does
> 3. When to use it
> 4. Simple code example
> 5. Common mistake
> 6. Practice exercise
>
> Do not assume knowledge of advanced React concepts.
> Keep the examples practical and suitable for someone building full-stack applications.

## Output

<!-- Paste the complete Claude output here. -->

## Observation

### What changed

I added a progressive sequence that decomposes the learning task into individual steps.

### What improved in the output

The response became more like a guided learning session. Instead of only explaining Hooks, it introduced the concepts progressively, provided practice, and ended with an assessment and mini-project.

### What still failed

The AI's final verification questions were useful, but they could not confirm whether I had actually completed the exercises correctly. The generated teaching plan still requires active work and verification by the learner.

### What I would try next

Use the final prompt as a reusable template and manually verify the exercises and code rather than treating the AI's explanation as automatically correct.

---

# Overall Comparison

| Version | Technique | Main Observed Improvement |
|---|---|---|
| V0 | Naive baseline | Generic overview |
| V1 | Role assignment | More instructional tone |
| V2 | Context + motivation | More relevant to learner's background |
| V3 | Few-shot examples | More consistent explanation style |
| V4 | Output structure | Easier to scan and compare |
| V5 | Step decomposition | More progressive and actionable learning flow |

---

# Key Learning

The biggest improvement did not come from simply making the prompt longer. Each useful layer addressed a specific weakness in the previous output.

Role assignment improved the teaching perspective. Context made the explanation more relevant. Examples demonstrated the desired style. Output structure improved consistency. Step decomposition turned the response into a more actionable learning process.

The exercise also showed that not every prompt improvement solves the most important problem. For example, defining the audience or adding context can improve relevance without necessarily improving technical depth. Observing the actual output after each change is therefore more useful than assuming a technique will work.

---

# Final Prompt

The cleaned-up reusable prompt is available in:

`final-prompt-template.md`
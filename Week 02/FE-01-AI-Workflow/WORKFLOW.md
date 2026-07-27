# AI Development Workflow Comparison

## Overview

This exercise compared two approaches to AI-assisted development by implementing the same Settings Form feature using different prompting strategies.

## Round One

The first round used a single vague prompt:

> "Build a settings page."

The generated implementation produced a basic interface but lacked several important aspects. Input validation was incomplete, accessibility features such as labels and ARIA attributes were missing, and edge cases were not handled. I also had to spend additional time reviewing the generated code, identifying missing requirements, and manually correcting issues.

## Round Two

The second round used a structured prompt containing clear requirements, file references, validation rules, accessibility expectations, coding constraints, and an explicit verification step.

The resulting implementation was significantly more complete. Required field validation, email format checking, disabled submission until valid input, accessibility improvements, and clearer component structure were included from the beginning. The verification step also encouraged the AI to review its own output before presenting it.

## Comparison

The structured prompt required more planning time, but substantially reduced review and debugging effort. The generated code aligned more closely with the intended behaviour and required fewer manual corrections.

One AI mistake I identified was the omission of proper accessibility attributes during the first round. Specifically, form inputs lacked `aria-invalid` and associated validation messaging, reducing accessibility for assistive technologies.

## Lessons Learned

Well-defined prompts produce more reliable implementations than vague requests. Adding constraints, expected behaviours, file references, and verification instructions significantly improves output quality while reducing overall development time.
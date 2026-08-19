# Aditya Portfolio — AI Agent

## Overview

The portfolio includes a personal AI agent that allows visitors to interact with an AI assistant about Aditya Kumar's background, skills, projects, education, and professional experience.

The AI agent is powered by the Groq API and is securely connected through a Netlify serverless function.

## Features

- Personal AI assistant
- Groq-powered responses
- Portfolio-aware system prompt
- Floating "Ask Aditya AI" button
- Responsive chat interface
- Suggested questions
- Secure API key handling
- Serverless backend using Netlify Functions

## Architecture

Visitor
   ↓
Portfolio
   ↓
Ask Aditya AI
   ↓
AI Agent Interface
   ↓
Netlify Function
   ↓
Groq API
   ↓
AI Response
   ↓
Visitor

## Technologies

- HTML5
- CSS3
- JavaScript
- Netlify Functions
- Groq API
- LLM
- Git & GitHub

## API Security

The Groq API key is never stored in frontend code.

The application accesses it through:

```js
process.env.GROQ_API_KEY
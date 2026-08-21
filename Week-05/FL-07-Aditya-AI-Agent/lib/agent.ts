import Groq from "groq-sdk";
import { executeTool, portfolioTool } from "./tools";

const SYSTEM_PROMPT = `
You are Aditya AI, a practical portfolio and career review agent.

CORE JOB:
Given a target software role or job description, compare the role requirements against Aditya's portfolio evidence and produce a concrete improvement plan.

RULES:
- You MUST use the get_portfolio tool before making claims about Aditya's skills, projects, education or experience.
- Never invent technologies, projects, metrics, employers, responsibilities or achievements.
- Separate verified portfolio evidence from missing evidence.
- If the user gives a job description, extract its required and preferred skills.
- Prioritize the highest-impact gaps.
- Do not guarantee interviews, jobs or hiring outcomes.
- Do not apply for jobs, send messages, modify repositories or perform irreversible actions.
- If no target role is provided, ask the user to provide one.
- Keep the final response practical and concise.

FINAL FORMAT:
## Fit summary
## Strong evidence
## Gaps
## Top 3 actions
## Recommended project improvement
## This week's action

Each recommendation should be specific enough to execute.
`;

type GroqMessage = {
  role: "system" | "user" | "assistant" | "tool";
  content: string | null;
  tool_calls?: Array<{
    id: string;
    type: "function";
    function: { name: string; arguments: string };
  }>;
  tool_call_id?: string;
};

export async function runAgent(userMessage: string) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing. Add it to .env.local and restart the server.");
  }

  const groq = new Groq({ apiKey });
  const messages: GroqMessage[] = [
    { role: "system", content: SYSTEM_PROMPT },
    { role: "user", content: userMessage }
  ];

  for (let step = 0; step < 4; step++) {
    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages,
      tools: [portfolioTool],
      tool_choice: "auto",
      temperature: 0.2,
      max_tokens: 1400
    });

    const message = completion.choices[0]?.message;
    if (!message) throw new Error("The model returned an empty response.");

    if (message.tool_calls?.length) {
      messages.push({
        role: "assistant",
        content: message.content ?? null,
        tool_calls: message.tool_calls.map((call) => ({
          id: call.id,
          type: "function",
          function: {
            name: call.function.name,
            arguments: call.function.arguments
          }
        }))
      });

      for (const call of message.tool_calls) {
        let result: string;
        try {
          result = executeTool(call.function.name);
        } catch (error) {
          result = JSON.stringify({
            error: error instanceof Error ? error.message : "Tool execution failed"
          });
        }

        messages.push({
          role: "tool",
          content: result,
          tool_call_id: call.id
        });
      }
      continue;
    }

    return message.content ?? "No response was generated.";
  }

  throw new Error("The agent exceeded its maximum tool-call steps.");
}
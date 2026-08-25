import Groq from "groq-sdk";
import type { ChatCompletionMessageParam } from "groq-sdk/resources/chat/completions";
import portfolio from "@/data/portfolio.json";

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

const portfolioTool = {
  type: "function" as const,
  function: {
    name: "get_portfolio",
    description:
      "Retrieve Aditya's verified portfolio information including education, summary, skills, projects and experience. Use this before making any claims about Aditya.",
    parameters: {
      type: "object",
      properties: {},
      required: [],
      additionalProperties: false
    }
  }
};

function executeTool(toolName: string): string {
  switch (toolName) {
    case "get_portfolio":
      return JSON.stringify(portfolio);

    default:
      throw new Error(`Unknown tool: ${toolName}`);
  }
}

export async function runAgent(userMessage: string) {
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    throw new Error(
      "GROQ_API_KEY is missing. Add it to .env.local and restart the server."
    );
  }

  const groq = new Groq({
    apiKey
  });

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: SYSTEM_PROMPT
    },
    {
      role: "user",
      content: userMessage
    }
  ];

  for (let step = 0; step < 4; step++) {
    const hasToolResult = messages.some(
      (message) => message.role === "tool"
    );

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      messages,
      tools: [portfolioTool],
      tool_choice: hasToolResult ? "none" : "auto",
      temperature: 0.2,
      max_tokens: 1400
    });

    const message = completion.choices[0]?.message;

    if (!message) {
      throw new Error("The model returned an empty response.");
    }

    /*
     * The model requested one or more tools.
     */
    if (message.tool_calls?.length) {
      messages.push({
        role: "assistant",
        content: message.content ?? null,
        tool_calls: message.tool_calls
      });

      for (const call of message.tool_calls) {
        let result: string;

        try {
          result = executeTool(call.function.name);
        } catch (error) {
          result = JSON.stringify({
            error:
              error instanceof Error
                ? error.message
                : "Tool execution failed"
          });
        }

        messages.push({
          role: "tool",
          tool_call_id: call.id,
          content: result
        });
      }

      continue;
    }

    /*
     * No more tool calls — return the final AI response.
     */
    return message.content ?? "No response was generated.";
  }

  throw new Error("The agent exceeded its maximum tool-call steps.");
}
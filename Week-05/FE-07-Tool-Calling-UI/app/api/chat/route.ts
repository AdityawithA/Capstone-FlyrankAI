import { convertToModelMessages, stepCountIs, streamText, UIMessage } from "ai";
import { groq } from "@ai-sdk/groq";
import { tools } from "@/lib/tools";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `
You are Aditya's portfolio AI assistant.

Your job is to answer questions about Aditya, his skills, education, experience, and projects.

You have one server-side tool called analyzeProject.

IMPORTANT TOOL RULES:
- When the user asks to analyze, score, evaluate, review, or deeply inspect a specific portfolio project, call analyzeProject.
- Do not invent project analysis data when the tool can provide it.
- After the tool returns, summarize the result naturally and let the UI display the structured card.
- If the user asks about a project by name, prefer the exact project name from the portfolio catalog.
- If the user explicitly asks to demonstrate the tool error state, call analyzeProject with simulateFailure=true.
- Keep normal answers concise and professional.

Portfolio projects include:
InterviewAce AI, CampusSync, TypeRush, SMS Spam Detection, and Breast Cancer Detection.
`;

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { messages: UIMessage[] };

    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      system: SYSTEM_PROMPT,
      messages: await convertToModelMessages(body.messages),
      tools,
      stopWhen: stepCountIs(4),
    });

    return result.toUIMessageStreamResponse({
      onError: (error) => {
        console.error("AI stream error:", error);
        return "The AI request could not be completed. Please try again.";
      },
    });
  } catch (error) {
    console.error("Chat route error:", error);
    return new Response(
      JSON.stringify({ error: "Unable to process the chat request." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

import {
  convertToModelMessages,
  streamText,
  type UIMessage,
} from "ai";

import { chatModel, systemPrompt } from "@/lib/ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const messages = body.messages as UIMessage[];

    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({
          error: "Invalid messages payload.",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const result = streamText({
      model: chatModel,
      system: systemPrompt,
      messages: await convertToModelMessages(messages),
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("AI chat error:", error);

    return new Response(
      JSON.stringify({
        error: "Unable to generate an AI response.",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
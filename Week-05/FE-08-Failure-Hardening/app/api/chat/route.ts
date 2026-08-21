import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";

const groq = createGroq({
  apiKey: process.env.GROQ_API_KEY
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json(
        { error: "Please enter a message." },
        { status: 400 }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return Response.json(
        { error: "AI service is not configured yet." },
        { status: 500 }
      );
    }

    if (process.env.SABOTAGE_RATE_LIMIT === "true") {
      return Response.json(
        { error: "Too many requests. Please wait a moment and try again." },
        { status: 429 }
      );
    }

    if (process.env.SABOTAGE_ERROR === "true") {
      return Response.json(
        { error: "Simulated API failure for checkpoint testing." },
        { status: 503 }
      );
    }

    if (process.env.SABOTAGE_DELAY === "true") {
      await new Promise((resolve) => setTimeout(resolve, 5000));
    }

    const result = streamText({
      model: groq("openai/gpt-oss-120b"),
      system: `You are Aditya's portfolio AI assistant.
Answer questions about Aditya's projects, skills, education and experience.
Use only the portfolio context below.

Aditya Kumar is a B.Tech Computer Science and Design student.
Projects: InterviewAce AI, CampusSync, TypeRush, SMS Spam Detection,
Breast Cancer Detection, Dezinova.
Skills: Python, Java, JavaScript, React, Flask, MySQL, SQLite, AI/ML.

If you do not know something, say so rather than inventing details.`,
      messages
    });

    return result.toDataStreamResponse({
      getErrorMessage: (error) =>
        error instanceof Error ? error.message : "The AI stream failed."
    });
  } catch (error) {
    console.error("Chat route failure:", error);

    return Response.json(
      { error: "The AI service could not process this request." },
      { status: 500 }
    );
  }
}
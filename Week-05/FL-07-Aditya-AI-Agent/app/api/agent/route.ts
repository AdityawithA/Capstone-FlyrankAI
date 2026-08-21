import { NextResponse } from "next/server";
import { runAgent } from "@/lib/agent";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
      return NextResponse.json(
        { error: "Please provide a target role or job description." },
        { status: 400 }
      );
    }

    const result = await runAgent(message);
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Agent route error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Agent request failed." },
      { status: 500 }
    );
  }
}
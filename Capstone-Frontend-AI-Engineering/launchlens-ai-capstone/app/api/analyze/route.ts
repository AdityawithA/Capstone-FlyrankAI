import { GoogleGenAI } from "@google/genai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Brief = {
  title: string;
  summary: string;
  targetUsers: string[];
  problem: string;
  mvp: string[];
  acceptanceCriteria: string[];
  risks: string[];
  nextStep: string;
};

const fallback = (idea: string): Brief => ({
  title: "LaunchLens Demo Brief",
  summary:
    "A structured first-pass brief generated locally because no Gemini API key is configured.",
  targetUsers: ["Early-stage builders", "Product teams", "Student founders"],
  problem:
    "Teams often start building before they have converted a rough idea into a clear problem, audience, and measurable first release.",
  mvp: [
    "Capture the core user problem",
    "Define one primary audience",
    "Ship the smallest useful workflow",
    "Measure one outcome after launch"
  ],
  acceptanceCriteria: [
    "A new user can complete the core workflow without assistance",
    "The primary outcome is measurable",
    "Empty, invalid, and failed states are handled clearly"
  ],
  risks: [
    "Scope may expand before the core workflow is validated",
    "Assumptions about users may be wrong",
    "Success metrics may be too vague"
  ],
  nextStep:
    `Validate the highest-risk assumption with 3–5 target users before expanding the scope of: ${idea.slice(0, 100)}`
});

function normalize(value: unknown): Brief {
  const object =
    value && typeof value === "object"
      ? (value as Record<string, unknown>)
      : {};
  const list = (v: unknown) =>
    Array.isArray(v)
      ? v.filter((x): x is string => typeof x === "string").slice(0, 8)
      : [];

  return {
    title: typeof object.title === "string" ? object.title : "Product Brief",
    summary:
      typeof object.summary === "string"
        ? object.summary
        : "No summary returned.",
    targetUsers: list(object.targetUsers),
    problem:
      typeof object.problem === "string"
        ? object.problem
        : "No problem statement returned.",
    mvp: list(object.mvp),
    acceptanceCriteria: list(object.acceptanceCriteria),
    risks: list(object.risks),
    nextStep:
      typeof object.nextStep === "string"
        ? object.nextStep
        : "Validate the riskiest assumption first."
  };
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const idea = typeof body?.idea === "string" ? body.idea.trim() : "";

    if (idea.length < 20) {
      return NextResponse.json(
        { error: "Please describe the product idea in at least 20 characters." },
        { status: 400 }
      );
    }

    if (idea.length > 4000) {
      return NextResponse.json(
        { error: "Please keep the idea under 4,000 characters." },
        { status: 400 }
      );
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ brief: fallback(idea), demoMode: true });
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = process.env.GEMINI_MODEL || "gemini-3.7-flash";

    const prompt = `You are a pragmatic product engineer. Turn the following rough product idea into a concise, testable product brief.

Return ONLY valid JSON. Do not use Markdown fences.

Required JSON shape:
{
  "title": "short product name",
  "summary": "one concise paragraph",
  "targetUsers": ["specific user group", "specific user group"],
  "problem": "clear user problem",
  "mvp": ["smallest useful capability", "smallest useful capability"],
  "acceptanceCriteria": ["testable criterion", "testable criterion"],
  "risks": ["risk or assumption", "risk or assumption"],
  "nextStep": "one concrete validation step"
}

Rules:
- Avoid buzzwords.
- Prefer specific, measurable statements.
- Do not invent statistics.
- Keep arrays concise.
- Focus on the smallest useful product.
- Make acceptance criteria observable and testable.

Product idea:
${idea}`;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        temperature: 0.2,
      },
    });

    const text = response.text?.trim();

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    let parsed: unknown;
    try {
      parsed = JSON.parse(text);
    } catch {
      const fenced = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i)?.[1];
      if (!fenced) throw new Error("Gemini returned invalid structured output.");
      parsed = JSON.parse(fenced);
    }

    return NextResponse.json({ brief: normalize(parsed), demoMode: false });
  } catch (error) {
    console.error("Analyze route failed:", error);
    return NextResponse.json(
      {
        error:
          "The AI service could not complete the analysis. Please try again. Your input was not saved.",
      },
      { status: 502 }
    );
  }
}

import { NextResponse } from "next/server";
import { runAgent } from "@/lib/agent";

export const runtime = "nodejs";
export const maxDuration = 30;

const MAX_MESSAGE_LENGTH = 6000;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 8;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

// Lightweight protection for a public serverless route. It is intentionally
// simple: enough to stop accidental/trivial abuse without adding a database.
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "anonymous";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + WINDOW_MS
    });
    return { allowed: true, retryAfter: 0 };
  }

  if (current.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((current.resetAt - now) / 1000))
    };
  }

  current.count += 1;
  return { allowed: true, retryAfter: 0 };
}

function cleanupRateLimitStore() {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore) {
    if (entry.resetAt <= now) rateLimitStore.delete(key);
  }
}

export async function POST(request: Request) {
  try {
    cleanupRateLimitStore();

    const rateLimit = checkRateLimit(getClientKey(request));
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes and try again." },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateLimit.retryAfter)
          }
        }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON request body." },
        { status: 400 }
      );
    }

    const message =
      typeof body === "object" && body !== null && "message" in body &&
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {
      return NextResponse.json(
        { error: "Please provide a target role or job description." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        {
          error: `Your request is too long. Please keep it under ${MAX_MESSAGE_LENGTH.toLocaleString()} characters.`
        },
        { status: 413 }
      );
    }

    const result = await runAgent(message);
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Agent route error:", error);
    return NextResponse.json(
      { error: "The agent could not complete this request. Please try again." },
      { status: 500 }
    );
  }
}

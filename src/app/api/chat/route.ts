import { NextRequest, NextResponse } from "next/server";

// Prevent Next.js from caching this route — responses must never be stale.
export const dynamic = "force-dynamic";

const FASTAPI_URL = process.env.FASTAPI_URL ?? "http://localhost:8000";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const upstream = await fetch(`${FASTAPI_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json(
      { detail: "The chatbot service is temporarily unavailable. Please try again shortly." },
      { status: 503 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, { status: 204 });
}

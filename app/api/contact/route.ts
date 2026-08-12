import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";
import { contactSchema } from "@/lib/schemas/contact";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { error } = await supabaseServer.from("contact_messages").insert({
    name: parsed.data.name,
    email: parsed.data.email,
    mobile: parsed.data.mobile,
    message: parsed.data.message,
  });

  if (error) {
    console.error("Failed to save contact message:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase";

// Called on a schedule by Vercel Cron (see vercel.json) so the Supabase
// free-tier project never crosses the 7-day inactivity pause threshold.
// A cheap read is enough — Supabase only cares that a real query hit the DB.
export async function GET() {
  const { error } = await supabaseServer
    .from("contact_messages")
    .select("id")
    .limit(1);

  if (error) {
    console.error("Keep-alive ping failed:", error);
    return NextResponse.json(
      { ok: false, error: error.message },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
}

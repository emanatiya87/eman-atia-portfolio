import { createClient } from "@supabase/supabase-js";

const url = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceRoleKey) {
  console.warn(
    "SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY not set. /api/contact will fail until you add them to .env.local",
  );
}

// Server-only client — uses the service role key, which bypasses Row Level
// Security. Never import this file in a "use client" component.
export const supabaseServer = createClient(url ?? "", serviceRoleKey ?? "");

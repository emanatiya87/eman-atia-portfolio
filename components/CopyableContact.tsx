"use client";

import { useState } from "react";
import { Mail, Phone, Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

export function CopyableContact({
  type,
  value,
  display,
}: {
  type: "email" | "phone";
  value: string;
  display: string;
}) {
  const [copied, setCopied] = useState(false);
  const Icon = type === "email" ? Mail : Phone;

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard API unavailable — no-op, the value is still visible/selectable
      console.log("Error copying to clipboard");
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-accent/30 px-4 py-2 text-sm font-medium text-foreground",
        "transition-colors hover:border-accent hover:bg-accent/10",
      )}
    >
      <Icon size={14} className="text-accent" />
      {display}
      {copied ? (
        <Check size={13} className="text-emerald-400" />
      ) : (
        <Copy size={13} className="text-muted" />
      )}
    </button>
  );
}

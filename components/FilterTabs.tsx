"use client";

import { cn } from "@/lib/utils";

interface FilterTabsProps<T extends string> {
  options: { value: T; label: string }[];
  active: T;
  onChange: (value: T) => void;
}

export function FilterTabs<T extends string>({
  options,
  active,
  onChange,
}: FilterTabsProps<T>) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          onClick={() => onChange(opt.value)}
          className={cn(
            "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
            active === opt.value
              ? "border-accent bg-accent/10 text-accent"
              : "border-white/10 text-muted hover:border-white/20 hover:text-foreground"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}

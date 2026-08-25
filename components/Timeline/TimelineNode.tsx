import type { TimelineEntry } from "@/data/timeline";
import { cn } from "@/lib/utils";
import { LogoAvatar } from "@/components/LogoAvatar";

const statusStyles: Record<NonNullable<TimelineEntry["status"]>, string> = {
  ongoing: "bg-accent/15 text-accent border-accent/40",
  active: "bg-emerald-400/15 text-emerald-300 border-emerald-400/40",
  completed: "bg-white/5 text-muted border-white/10",
};

export function TimelineNode({
  entry,
  align = "left",
}: {
  entry: TimelineEntry;
  align?: "left" | "right";
}) {
  // Plain div, not motion.div: content is visible in the server-rendered
  // HTML immediately, with no dependency on JS hydrating or an
  // IntersectionObserver firing before it's shown. `animate-fade-in` is a
  // one-shot CSS animation (see globals.css) — pure decoration layered on
  // top of already-visible content, never a gate that hides it.
  return (
    <div
      className={cn(
        "animate-fade-in rounded-xl border border-white/10 bg-panel/60 p-5 backdrop-blur-sm",
        align === "right" && "lg:text-right",
      )}
    >
      <div
        className={cn(
          "mb-3 flex items-center gap-3",
          align === "right" && "lg:flex-row-reverse",
        )}
      >
        <LogoAvatar src={entry.logo} name={entry.org} size={36} />
        <div className={cn(align === "right" && "lg:text-right")}>
          <h3 className="text-lg font-semibold text-foreground">
            {entry.title}
          </h3>
          <p className="text-sm text-accent">{entry.org}</p>
        </div>
      </div>

      <div
        className={cn(
          "mb-2 flex flex-wrap items-center gap-2",
          align === "right" && "lg:justify-end",
        )}
      >
        <span className="font-mono text-xs text-muted">{entry.date}</span>
        {entry.status && (
          <span
            className={cn(
              "rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
              statusStyles[entry.status],
            )}
          >
            {entry.status}
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-muted">{entry.description}</p>

      {entry.tech && entry.tech.length > 0 && (
        <div
          className={cn(
            "mt-3 flex flex-wrap gap-1.5",
            align === "right" && "lg:justify-end",
          )}
        >
          {entry.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

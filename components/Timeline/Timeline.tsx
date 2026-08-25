"use client";

import { useEffect, useMemo, useState } from "react";
import {
  timeline,
  categoryLabels,
  type TimelineCategory,
} from "@/data/timeline";
import { FilterTabs } from "@/components/FilterTabs";
import { TimelineNode } from "@/components/Timeline/TimelineNode";
import { SpotlightLayer } from "@/components/SpotlightLayer";

type FilterValue = TimelineCategory | "all";

const PAGE_SIZE = 4;

const filterOptions: { value: FilterValue; label: string }[] = (
  Object.keys(categoryLabels) as FilterValue[]
).map((value) => ({ value, label: categoryLabels[value] }));

export function Timeline() {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filter]);

  const filteredEntries = useMemo(() => {
    const filtered =
      filter === "all"
        ? timeline
        : timeline.filter((e) => e.category === filter);
    return [...filtered].sort((a, b) => (a.sortDate < b.sortDate ? 1 : -1));
  }, [filter]);

  const entries = filteredEntries.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEntries.length;

  // Same pattern as Hero: write mouse position straight to CSS variables on
  // the section itself (no React state), so SpotlightLayer can read them
  // without triggering a re-render on every mouse move.
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="timeline"
      onMouseMove={handleMouseMove}
      className="group relative scroll-mt-20 overflow-hidden bg-ink px-6 py-24"
    >
      <SpotlightLayer />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            The Journey
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            From Electrical Power to Digital Power
          </h2>
        </div>

        <div className="mb-12 mt-6">
          <FilterTabs
            options={filterOptions}
            active={filter}
            onChange={setFilter}
          />
        </div>

        {/* Mobile: single left-aligned line */}
        <div className="relative space-y-6 lg:hidden">
          <div className="absolute bottom-0 left-[7px] top-0 w-px bg-white/10" />
          {entries.map((entry) => (
            <div key={entry.id} className="relative pl-8">
              <span className="absolute left-0 top-6 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
              <TimelineNode entry={entry} />
            </div>
          ))}
        </div>

        {/* Desktop: alternating center line */}
        <div className="relative hidden lg:block">
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-white/10" />
          <div className="space-y-10">
            {entries.map((entry, i) => {
              const align = i % 2 === 0 ? "right" : "left";
              return (
                <div
                  key={entry.id}
                  className="grid grid-cols-[1fr_auto_1fr] items-start gap-6"
                >
                  {align === "right" ? (
                    <>
                      <TimelineNode entry={entry} align="right" />
                      <span className="relative top-6 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <span className="relative top-6 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
                      <TimelineNode entry={entry} align="left" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {entries.length === 0 && (
          <p className="text-center text-sm text-muted">
            No entries in this category yet.
          </p>
        )}

        {hasMore && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="rounded-full border border-accent/30 px-6 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:bg-accent/10"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

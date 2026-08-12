"use client";

import { useEffect, useState } from "react";

export function TypewriterText({
  text,
  speedMs = 18,
  className,
}: {
  text: string;
  speedMs?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    const interval = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(interval);
          return c;
        }
        return c + 1;
      });
    }, speedMs);
    return () => clearInterval(interval);
  }, [text, speedMs]);

  return (
    <p className={className}>
      {text.slice(0, count)}
      <span
        aria-hidden
        className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[2px] animate-pulse bg-accent"
        style={{ opacity: count >= text.length ? 0 : 1 }}
      />
    </p>
  );
}

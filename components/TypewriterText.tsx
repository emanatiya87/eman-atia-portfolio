"use client";

import { useEffect, useRef, useState } from "react";

export function TypewriterText({
  text,
  durationMs = 2400,
  className,
}: {
  text: string;
  durationMs?: number;
  className?: string;
}) {
  const [count, setCount] = useState(0);
  const frameRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    setCount(0);
    startRef.current = null;

    const step = (timestamp: number) => {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      setCount(Math.floor(progress * text.length));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      }
    };

    frameRef.current = requestAnimationFrame(step);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, durationMs]);

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

"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function LogoAvatar({
  src,
  name,
  size = 40,
  className,
}: {
  src?: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  return (
    <div
      style={{ width: size, height: size }}
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/5",
        className
      )}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={`${name} logo`}
          className="h-full w-full object-contain p-1.5"
          onError={() => setErrored(true)}
        />
      ) : (
        <span className="font-mono text-xs font-medium text-accent">
          {getInitials(name)}
        </span>
      )}
    </div>
  );
}

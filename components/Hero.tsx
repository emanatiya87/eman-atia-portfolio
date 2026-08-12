"use client";

import Image from "next/image";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypewriterText } from "@/components/TypewriterText";
import { SpotlightLayer } from "@/components/SpotlightLayer";

const bio =
  "A motivated front-end developer with hands-on experience in React, Next.js and TypeScript — gained through internships, freelance projects and an intensive ITI training program. Skilled in building responsive, production-ready web applications and integrating CMS solutions.";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eman-atiya-6245b0294/",
  },
  { label: "GitHub", href: "https://github.com/emanatiya87" },
];

export function Hero() {
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="about"
      onMouseMove={handleMouseMove}
      className="group relative scroll-mt-20 overflow-hidden bg-ink px-6 py-24 sm:py-32"
    >
      {/* ambient circuit backdrop */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]"
        viewBox="0 0 800 600"
        fill="none"
      >
        <path
          d="M0 120 H180 V60 H400 M400 60 V300 H620 V500 H800"
          stroke="#4CD9E8"
          strokeWidth="1.5"
        />
        <path
          d="M0 420 H240 V500 H500 V180 H800"
          stroke="#4CD9E8"
          strokeWidth="1.5"
        />
        <circle cx="180" cy="120" r="4" fill="#4CD9E8" />
        <circle cx="400" cy="300" r="4" fill="#4CD9E8" />
        <circle cx="620" cy="500" r="4" fill="#4CD9E8" />
      </svg>

      {/* cursor-reactive spotlight */}
      <SpotlightLayer />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full ring-2 ring-accent/40 sm:h-40 sm:w-40">
          {/* Swap /avatar.jpg for a real photo, or drop this block for an initials/icon avatar */}
          <Image
            src="/avatar.jpg"
            alt="Eman Atia"
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>

        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
          Electrical Engineer by Degree · Front-End Developer by Craft
        </p>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          Eman Atia
        </h1>

        <TypewriterText
          text={bio}
          className="max-w-2xl text-balance text-base text-muted sm:text-lg"
        />

        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
          >
            <Download size={15} /> Download Resume
          </a>

          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className={cn(
                "rounded-full border border-accent/30 px-5 py-2 text-sm font-medium text-foreground",
                "transition-colors hover:border-accent hover:bg-accent/10",
              )}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { projectCategoryLabels } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const [imgError, setImgError] = useState(false);
  const showImage = project.image && !imgError;

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-panel/60">
      <div className="relative aspect-video w-full bg-white/5">
        {showImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/10 to-panel">
            <span className="font-mono text-xs text-muted">
              {project.title}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="mb-2 w-fit rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
          {projectCategoryLabels[project.category]}
        </span>

        {/* Fixed 2-line clamp for the title keeps every card's header the
            same height even when titles vary a lot in length. */}
        <h3 className="line-clamp-2 min-h-[2.75rem] text-base font-semibold text-foreground">
          {project.title}
        </h3>

        {/* min-h + line-clamp-3 together guarantee every card reserves the
            exact same vertical space for the description, whether the text
            is one sentence or a full paragraph — short text doesn't shrink
            the card, long text doesn't stretch it. */}
        <p className="mt-1 line-clamp-3 min-h-[4.25rem] text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {project.tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-md bg-white/5 px-2 py-0.5 text-[11px] text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/projects/${project.id}`}
          className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-accent hover:underline"
        >
          Project Story <ArrowUpRight size={13} />
        </Link>

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-3 flex gap-3 border-t border-white/10 pt-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground"
              >
                <Github size={14} /> GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

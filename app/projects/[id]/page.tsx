import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projects, projectCategoryLabels } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: `${project.title} — Eman Atia`,
    description: project.description,
  };
}

const placeholder = "TODO — add this section for this project.";

export default async function ProjectStoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-ink px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted hover:text-foreground"
        >
          <ArrowLeft size={15} /> Back to projects
        </Link>

        <span className="mb-3 inline-block rounded-md bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
          {projectCategoryLabels[project.category]}
        </span>

        <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-3 text-base text-muted">{project.description}</p>

        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span key={t} className="rounded-md bg-white/5 px-2 py-0.5 text-xs text-muted">
                {t}
              </span>
            ))}
          </div>
        )}

        {(project.githubUrl || project.liveUrl) && (
          <div className="mt-5 flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
              >
                <Github size={16} /> View Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-accent"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        )}

        <div className="mt-12 space-y-8 border-t border-white/10 pt-10">
          <section>
            <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              The Problem
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {project.problem || placeholder}
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              The Approach
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {project.approach || placeholder}
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              The Result
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {project.result || placeholder}
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

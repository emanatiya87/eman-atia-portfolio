"use client";

import { useMemo, useState } from "react";
import { projects, projectCategoryLabels, type ProjectCategory } from "@/data/projects";
import { FilterTabs } from "@/components/FilterTabs";
import { ProjectCard } from "@/components/Projects/ProjectCard";

type FilterValue = ProjectCategory | "all";

const filterOptions: { value: FilterValue; label: string }[] = (
  Object.keys(projectCategoryLabels) as FilterValue[]
).map((value) => ({ value, label: projectCategoryLabels[value] }));

export function ProjectsSection() {
  const [filter, setFilter] = useState<FilterValue>("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="scroll-mt-20 bg-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Featured Projects
          </h2>
        </div>

        <div className="mb-10 mt-6">
          <FilterTabs options={filterOptions} active={filter} onChange={setFilter} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

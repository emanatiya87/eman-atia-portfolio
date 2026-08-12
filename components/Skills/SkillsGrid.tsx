import { skillGroups } from "@/data/skills";
import { SkillsMarquee } from "@/components/Skills/SkillsMarquee";

export function SkillsGrid() {
  return (
    <section id="skills" className="scroll-mt-20 bg-ink px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">
            Multidisciplinary Skills
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Engineering Logic Meets Front-End Craft
          </h2>
        </div>

        <div className="mb-14">
          <SkillsMarquee />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-xl border border-white/10 bg-panel/60 p-5"
            >
              <h3 className="mb-3 font-mono text-xs uppercase tracking-wide text-accent">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/5 px-2 py-1 text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

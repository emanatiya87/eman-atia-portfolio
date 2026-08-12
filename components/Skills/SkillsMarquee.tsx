import { techIcons } from "@/data/techIcons";

export function SkillsMarquee() {
  // duplicate the list so the loop is seamless
  const loop = [...techIcons, ...techIcons];

  return (
    <div className="group relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <div
            key={`${item.name}-${i}`}
            className="flex flex-col items-center gap-2 text-muted"
            title={item.name}
          >
            <item.Icon size={36} className="text-foreground/80" />
            <span className="font-mono text-[10px] uppercase tracking-wide">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

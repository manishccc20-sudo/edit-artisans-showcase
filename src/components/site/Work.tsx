import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { VideoModal } from "./VideoModal";
import { categories, projects, type Project } from "@/data/site";
import { cn } from "@/lib/utils";

export function Work() {
  const [filter, setFilter] = useState<string>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="eyebrow">02 — Portfolio</p>
          <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">
            Selected Work
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <li key={c}>
                <button
                  type="button"
                  onClick={() => setFilter(c)}
                  aria-pressed={filter === c}
                  className={cn(
                    "rounded-full border px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.18em] transition-colors",
                    filter === c
                      ? "border-transparent bg-primary text-primary-foreground"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-10">
        {visible.map((p, i) => (
          <Reveal
            key={p.id}
            delay={(i % 2) * 0.08}
            className={cn(i % 3 === 0 ? "md:col-span-2" : "")}
          >
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group block w-full text-left"
              aria-label={`Play ${p.title}`}
            >
              <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
                <img
                  src={p.thumbnail}
                  alt={`${p.title} — ${p.category} project still`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className={cn(
                    "w-full object-cover opacity-75 transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:opacity-100",
                    i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]",
                  )}
                />
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-md">
                    <Play className="ml-0.5 h-5 w-5" aria-hidden="true" />
                  </span>
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-border pt-4">
                <h3 className="text-xl uppercase tracking-tight md:text-2xl">{p.title}</h3>
                <p className="eyebrow shrink-0">
                  {p.category} · {p.year}
                </p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <VideoModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

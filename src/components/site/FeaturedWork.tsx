import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { PortfolioCard } from "./PortfolioCard";
import { ProjectModal } from "./ProjectModal";
import { categories, projects, type Category, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

/** All tiles are vertical (9:16), three per row on desktop. */
const pattern = [{ span: "md:col-span-4", aspect: "aspect-[9/16]", size: "md" as const }];

export function FeaturedWork() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="eyebrow">01 — Portfolio</p>
          <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">Selected Work</h2>
          <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
            A selection of edits, stories and visual experiments.
          </p>
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
                    "rounded-full border px-4 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] transition-colors",
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

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => {
            const cell = pattern[i % pattern.length]!;
            return (
              <motion.div layout key={p.id} className={cell.span}>
                <PortfolioCard
                  project={p}
                  onOpen={setActive}
                  aspect={cell.aspect}
                  size={cell.size}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "./Reveal";
import { PortfolioCard } from "./PortfolioCard";
import { ProjectModal } from "./ProjectModal";
import { projects, type Project } from "@/data/projects";

/** All tiles are vertical (9:16), three per row on desktop. */
const pattern = [{ span: "md:col-span-4", aspect: "aspect-[9/16]", size: "md" as const }];

export function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="eyebrow">01 — Portfolio</p>
          <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">THIS ARE MY WORKS</h2>
          <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
            A selection of edits, stories and visual experiments.
          </p>
        </Reveal>
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
        <AnimatePresence mode="popLayout">
          {projects.map((p, i) => {
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

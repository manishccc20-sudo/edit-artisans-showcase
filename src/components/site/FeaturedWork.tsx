import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { PortfolioCard } from "./PortfolioCard";
import { ProjectModal } from "./ProjectModal";
import { projects, type Project } from "@/data/projects";

/** All tiles are vertical (9:16), three per row on desktop. */
const pattern = [{ span: "md:col-span-4", aspect: "aspect-[9/16]", size: "md" as const }];
const INITIAL_VISIBLE_COUNT = 9;
const LOAD_MORE_COUNT = 6;

export function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const visibleProjects = projects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < projects.length;

  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="eyebrow">01 — Portfolio</p>
          <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">MY WORKS</h2>
          <p className="mt-6 max-w-md text-sm text-muted-foreground md:text-base">
            A selection of edits, stories and visual experiments.
          </p>
        </Reveal>
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-12 md:gap-8">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((p, i) => {
            const cell = pattern[i % pattern.length]!;
            return (
              <motion.div
                layout
                key={p.id}
                className={cell.span}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              >
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

      <AnimatePresence>
        {hasMoreProjects ? (
          <motion.div
            className="mt-14 flex justify-center md:mt-20"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() =>
                setVisibleCount((count) => Math.min(count + LOAD_MORE_COUNT, projects.length))
              }
              className="glass-panel h-12 rounded-full px-7 text-xs uppercase hover:border-primary/40 hover:bg-accent"
            >
              Load More Works
              <ArrowDown aria-hidden="true" />
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}

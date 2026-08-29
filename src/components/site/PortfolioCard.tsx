import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { embedUrl, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function PortfolioCard({
  project,
  onOpen,
  aspect = "aspect-[9/16]",
  size = "md",
}: {
  project: Project;
  onOpen: (p: Project) => void;
  aspect?: string;
  size?: "sm" | "md" | "lg";
}) {
  const [preview, setPreview] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setPreview(true)}
      onHoverEnd={() => setPreview(false)}
    >
      <button
        type="button"
        data-cursor="View project ↗"
        onClick={() => onOpen(project)}
        aria-label={`Open ${project.title}`}
        className="group block w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
      >
        <div className={cn("relative overflow-hidden rounded-xl border border-border bg-surface", aspect)}>
          <img
            src={project.poster}
            alt={`${project.title} — ${project.category} edit still`}
            loading="lazy"
            className="h-full w-full object-cover opacity-70 transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:opacity-100"
          />
          {preview ? (
            <iframe
              title={`${project.title} preview`}
              src={embedUrl(project.reelUrl)}
              className="pointer-events-none absolute inset-0 h-full w-full border-0 bg-surface"
              loading="lazy"
              allow="autoplay; encrypted-media; picture-in-picture"
            />
          ) : null}
          <div className="grain pointer-events-none absolute inset-0" />
          <span className="absolute left-5 top-5 text-[0.65rem] font-bold uppercase tracking-[0.24em] text-foreground/80">
            {project.no}
          </span>
          <span className="absolute right-5 top-5 translate-y-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground/0 transition-all duration-500 group-hover:translate-y-0 group-hover:text-foreground/85">
            {project.category}
          </span>
          <span className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="text-xs text-muted-foreground">{project.description.slice(0, 52)}…</span>
            <ArrowUpRight className="h-5 w-5 shrink-0" aria-hidden="true" />
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4 border-t border-border pt-4">
          <h3
            className={cn(
              "uppercase tracking-tight transition-transform duration-500 group-hover:-translate-y-0.5",
              size === "lg" ? "text-2xl md:text-4xl" : size === "sm" ? "text-base md:text-lg" : "text-lg md:text-2xl",
            )}
          >
            {project.title}
          </h3>
          <p className="eyebrow shrink-0">{project.category}</p>
        </div>
      </button>
    </motion.div>
  );
}

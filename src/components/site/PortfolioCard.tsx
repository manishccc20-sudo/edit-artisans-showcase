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
        <div className={cn("relative overflow-hidden", aspect)}>
          <img
            src={project.poster}
            alt={`${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover opacity-70 transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:opacity-100"
          />
          {preview ? (
            project.videoUrl ? (
              <video
                src={project.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <iframe
                title={`${project.title} preview`}
                src={embedUrl(project.reelUrl)}
                className="pointer-events-none absolute inset-0 h-full w-full border-0"
                loading="lazy"
                allow="autoplay; encrypted-media; picture-in-picture"
              />
            )
          ) : null}
        </div>
      </button>
    </motion.div>
  );
}

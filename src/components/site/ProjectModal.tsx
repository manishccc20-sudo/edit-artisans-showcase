import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ArrowUpRight, Play } from "lucide-react";
import { embedUrl, type Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [embedFailed, setEmbedFailed] = useState(false);

  useEffect(() => {
    setEmbedFailed(false);
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 p-4 backdrop-blur-xl md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            key={project.id}
            className="mx-auto w-full max-w-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-6">
              <p className="eyebrow">
                {project.no} — {project.category}
              </p>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close project"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-10 md:grid-cols-[minmax(0,420px)_1fr] md:gap-14">
              <div className="overflow-hidden rounded-xl border border-border bg-surface">
                {embedFailed ? (
                  <a
                    href={project.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block"
                  >
                    <img
                      src={project.poster}
                      alt={`${project.title} still frame`}
                      loading="lazy"
                      className="aspect-[9/16] w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
                    />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-md">
                        <Play className="ml-1 h-6 w-6" aria-hidden="true" />
                      </span>
                    </span>
                  </a>
                ) : (
                  <iframe
                    key={project.id}
                    title={`${project.title} — Instagram reel`}
                    src={embedUrl(project.reelUrl)}
                    className="aspect-[9/16] w-full border-0 bg-surface"
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                    allowFullScreen
                    onError={() => setEmbedFailed(true)}
                  />
                )}
              </div>

              <div>
                <h3 className="font-display text-4xl uppercase leading-[0.9] md:text-6xl">
                  {project.title}
                </h3>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                  {project.description}
                </p>

                <dl className="mt-10 space-y-5 border-t border-border pt-8">
                  <div>
                    <dt className="eyebrow">Category</dt>
                    <dd className="mt-1 text-sm">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Editing role</dt>
                    <dd className="mt-1 text-sm">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Software</dt>
                    <dd className="mt-1 text-sm">{project.software}</dd>
                  </div>
                </dl>

                <a
                  href={project.reelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
                >
                  Watch on Instagram
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

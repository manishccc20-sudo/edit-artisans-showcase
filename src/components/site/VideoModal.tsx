import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import type { Project } from "@/data/site";

export function VideoModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 p-4 backdrop-blur-md md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} video`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-6xl"
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-end justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl uppercase md:text-4xl">{project.title}</h3>
                <p className="eyebrow mt-2">
                  {project.category} — {project.year}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Close video"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-surface">
              <video
                className="aspect-video w-full"
                src={project.video}
                poster={project.thumbnail}
                controls
                autoPlay
                playsInline
                preload="metadata"
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

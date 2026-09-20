import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { embedUrl, type Project } from "@/data/projects";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  
  const [embedFailed, setEmbedFailed] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setEmbedFailed(false);
    setIsMuted(true);
  }, [project?.id]);

  const toggleAudio = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      void videoRef.current.play();
    }
  };

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/75 p-4 backdrop-blur-2xl md:p-10"
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
            </div>

            <div className="mx-auto max-w-md">
              <div className="glass-panel relative overflow-hidden rounded-2xl p-1">
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
                ) : project.videoUrl ? (
                  <video
                    ref={videoRef}
                    key={project.id}
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    controls
                    className="aspect-[9/16] w-full object-cover bg-surface"
                  />
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
                {project.videoUrl && !embedFailed ? (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleAudio();
                    }}
                    aria-label={isMuted ? `Unmute ${project.title}` : `Mute ${project.title}`}
                    aria-pressed={!isMuted}
                    className="glass-panel absolute right-3 top-3 z-20 rounded-full text-foreground hover:bg-accent"
                  >
                    {isMuted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
                  </Button>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

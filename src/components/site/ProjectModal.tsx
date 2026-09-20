import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Play, Volume2, VolumeX } from "lucide-react";
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
    const previousOverflow = document.body.style.overflow;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[100] flex min-h-dvh items-center justify-center overflow-hidden bg-background/90 p-4 backdrop-blur-2xl md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Back to portfolio"
            className="glass-panel absolute left-4 top-4 z-30 rounded-full text-foreground hover:bg-accent md:left-8 md:top-8"
          >
            <ArrowLeft aria-hidden="true" />
          </Button>

          <motion.div
            key={project.id}
            className="flex h-full w-full items-center justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex h-full w-full items-center justify-center pt-14 md:pt-0">
              <div className="glass-panel relative max-h-[calc(100dvh-6rem)] w-auto max-w-full overflow-hidden rounded-2xl p-1">
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
                      className="max-h-[calc(100dvh-6.5rem)] w-auto max-w-full object-contain opacity-80 transition-opacity group-hover:opacity-100"
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
                    className="max-h-[calc(100dvh-6.5rem)] w-auto max-w-full object-contain bg-surface"
                  />
                ) : (
                  <iframe
                    key={project.id}
                    title={`${project.title} — Instagram reel`}
                    src={embedUrl(project.reelUrl)}
                    className="aspect-[9/16] max-h-[calc(100dvh-6.5rem)] w-auto max-w-full border-0 bg-surface"
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

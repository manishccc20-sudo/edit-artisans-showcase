import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleAudio = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
      void videoRef.current.play();
    }
  };

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
      <div className={cn("group relative overflow-hidden rounded-lg", aspect)}>
        <Button
          type="button"
          variant="ghost"
          data-cursor="View project ↗"
          onClick={() => onOpen(project)}
          aria-label={`Open ${project.title}`}
          className="absolute inset-0 z-10 h-full w-full rounded-lg p-0 focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="sr-only">Open {project.title}</span>
        </Button>
          <img
            src={project.poster}
            alt={`${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover opacity-70 transition-all duration-[900ms] ease-out group-hover:scale-[1.05] group-hover:opacity-100"
          />
          {preview ? (
            project.videoUrl ? (
              <video
                ref={videoRef}
                src={project.videoUrl}
                autoPlay
                loop
                muted={isMuted}
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
        {preview && project.videoUrl ? (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleAudio}
            aria-label={isMuted ? `Unmute ${project.title}` : `Mute ${project.title}`}
            aria-pressed={!isMuted}
            className="absolute right-3 top-3 z-20 rounded-full border border-border bg-background/60 text-foreground backdrop-blur-md hover:bg-background/80"
          >
            {isMuted ? <VolumeX aria-hidden="true" /> : <Volume2 aria-hidden="true" />}
          </Button>
        ) : null}
      </div>
    </motion.div>
  );
}

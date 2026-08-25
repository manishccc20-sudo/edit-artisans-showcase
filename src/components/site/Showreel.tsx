import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "./Reveal";
import { media } from "@/data/site";

const isGoogleDriveEmbed = (url: string) =>
  /drive\.google\.com\/file\/d\/[^/]+\/preview/i.test(url);

export function Showreel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    setPlaying(true);
    if (!isGoogleDriveEmbed(media.showreel.src)) {
      requestAnimationFrame(() => void videoRef.current?.play());
    }
  };

  return (
    <section id="showreel" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="eyebrow">01 — Reel</p>
          <h2 className="mt-4 text-[15vw] leading-[0.85] uppercase md:text-[8vw]">Showreel</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-12 md:mt-16">
        <div className="cine-vignette relative overflow-hidden rounded-xl border border-border bg-surface">
          {playing ? (
            isGoogleDriveEmbed(media.showreel.src) ? (
              <iframe
                title="Showreel"
                src={media.showreel.src}
                className="aspect-video w-full rounded-xl"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                ref={videoRef}
                className="aspect-video w-full"
                src={media.showreel.src}
                poster={media.showreel.poster}
                controls
                playsInline
                preload="metadata"
              />
            )
          ) : (
            <button
              type="button"
              onClick={play}
              aria-label="Play showreel"
              className="group relative block w-full"
            >
              <img
                src={media.showreel.poster}
                alt="Showreel cover frame"
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-video w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
              />
              <span className="absolute inset-0 z-10 flex items-center justify-center">
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur-md transition-transform duration-500 group-hover:scale-110 md:h-28 md:w-28">
                  <Play className="ml-1 h-6 w-6 md:h-8 md:w-8" aria-hidden="true" />
                </span>
              </span>
            </button>
          )}
        </div>
      </Reveal>
    </section>
  );
}

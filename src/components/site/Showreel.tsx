import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { media } from "@/data/projects";

export function Showreel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="showreel" className="border-y border-border bg-surface/30">
      <div className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <p className="eyebrow">02 — Reel</p>
            <h2 className="mt-4 text-[13vw] leading-[0.84] uppercase md:text-[7vw]">
              MY SHOWREEL
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="mt-12 md:mt-16">
          <div className="cine-vignette relative overflow-hidden rounded-xl border border-border bg-surface">
            {playing ? (
              <iframe
                title="Showreel"
                src={media.showreelUrl}
                className="aspect-video w-full rounded-xl border-0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play showreel"
                className="group relative block w-full"
              >
                <img
                  src={media.showreelPoster}
                  alt="Showreel cover frame"
                  loading="lazy"
                  className="aspect-video w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-[1.02] group-hover:opacity-100"
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

        <Reveal delay={0.2}>
          <a
            href={media.showreelUrl.replace("/preview", "/view")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-secondary"
          >
            Watch showreel <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

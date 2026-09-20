import { Reveal } from "./Reveal";
import { media } from "@/data/projects";

export function Showreel() {
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
            <video
              src={media.showreelUrl}
              poster={media.showreelPoster}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-xl object-cover"
              aria-label="Manish Dasari showreel"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

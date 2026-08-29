import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { media } from "@/data/projects";

const lines = ["VIDEO EDITOR", "MANISH DASARI", ""];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="cine-vignette relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={media.heroImage}
          alt="Cinematic ridge at blue hour used as hero backdrop"
          width={1920}
          height={1088}
          className="h-full w-full scale-105 object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-[radial-gradient(60rem_40rem_at_20%_20%,color-mix(in_oklab,var(--glow)_35%,transparent),transparent_65%)]" />
        <div className="grain absolute inset-0" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-12 pt-32 md:px-10 md:pb-14"
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Editing • Motion • Storytelling
        </motion.p>

        <h1 className="mt-6 leading-[0.84]">
          {lines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="chrome-text block text-[13vw] font-extrabold uppercase tracking-[-0.045em] md:text-[8.4vw]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.11, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="mt-10 flex flex-col gap-8 border-t border-border pt-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            I&apos;m Manish, a video editor focused on cinematic storytelling, social content,
            commercials and visually driven edits.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              View my work <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
            >
              Let&apos;s work together <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 flex items-center justify-between gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p className="eyebrow">Video Editor / Motion / Storytelling</p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <span className="eyebrow hidden sm:inline">Scroll to explore</span>
            <motion.span
              animate={{ y: [0, 7, 0] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
            >
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </motion.span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

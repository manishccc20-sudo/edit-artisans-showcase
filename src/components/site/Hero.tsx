import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import { media } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="cine-vignette relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={media.heroImage}
          alt="Cinematic mountain ridge at blue hour"
          width={1920}
          height={1088}
          className="h-full w-full scale-105 object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-background/35" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-32 md:px-10 md:pb-20"
      >
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          Freelance Editor — Available 2026
        </motion.p>

        <h1 className="mt-6 leading-[0.82]">
          {["MANISH", "VIDEO EDITOR"].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block text-[16vw] font-extrabold uppercase tracking-[-0.04em] md:text-[11vw] lg:text-[9.5vw]"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
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
          <p className="max-w-sm text-base text-muted-foreground md:text-lg">
            Turning footage into stories that feel.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center rounded-md bg-primary px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-border px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-secondary"
            >
              Let&apos;s work together
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-14 flex items-center gap-3 text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </motion.span>
          <span className="eyebrow">Scroll</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

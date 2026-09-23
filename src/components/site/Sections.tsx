import { ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { contact, media, process, services, software } from "@/data/projects";
import afterEffectsIcon from "@/assets/software/after-effects-icon.png.asset.json";
import davinciResolveLogo from "@/assets/software/davinci-resolve.svg";
import photoshopLogo from "@/assets/software/photoshop.svg";
import premiereProIcon from "@/assets/software/premiere-pro-icon.png.asset.json";

const softwareLogos: Record<(typeof software)[number], string> = {
  "Premiere Pro": premiereProIcon.url,
  "After Effects": afterEffectsIcon.url,
  "DaVinci Resolve": davinciResolveLogo,
  Photoshop: photoshopLogo,
};

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow">03 — Services</p>
        <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">What I Do</h2>
      </Reveal>

      <ul className="mt-12 border-t border-border md:mt-20">
        {services.map((s, i) => (
          <li key={s.title}>
            <Reveal delay={i * 0.04}>
              <div className="group grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:py-10">
                <span className="eyebrow md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-3xl uppercase tracking-tight transition-transform duration-500 group-hover:translate-x-2 md:col-span-6 md:text-5xl">
                  {s.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:col-span-5">
                  {s.copy}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="border-y border-border bg-surface/30">
      <div className="mx-auto grid max-w-[1600px] gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:px-10 md:py-36">
        <Reveal className="md:col-span-5">
          <div className="cine-vignette relative overflow-hidden rounded-xl border border-border">
            <img
              src={media.portrait}
              alt="Portrait of Manish, video editor"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="grain pointer-events-none absolute inset-0" />
          </div>
        </Reveal>

        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow">04 — About</p>
            <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[6vw]">About Me</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-xl space-y-5 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                I&apos;m Manish, a video editor passionate about turning raw footage into visually
                engaging stories.
              </p>
              <p>
                My approach combines rhythm, pacing, music, sound design, color and motion to create
                edits that feel intentional and memorable.
              </p>
              <p>
                From short-form social content to cinematic brand visuals, I focus on making every
                frame serve the story.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="eyebrow mt-12">Software</p>
            <ul className="mt-5 flex flex-wrap gap-4">
              {software.map((s) => (
                <li key={s}>
                  <a
                    href="#work"
                    aria-label={`${s} — view portfolio projects`}
                    title={s}
                    className="glass-panel flex size-16 items-center justify-center rounded-xl transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:size-20"
                  >
                    <img
                      src={softwareLogos[s]}
                      alt=""
                      aria-hidden="true"
                      className="size-9 object-contain md:size-11"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow">05 — Process</p>
        <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">How I Work</h2>
      </Reveal>

      <div className="mt-12 grid gap-px border border-border bg-border md:mt-20 md:grid-cols-4">
        {process.map((p, i) => (
          <Reveal key={p.no} delay={i * 0.06} className="bg-background">
            <div className="h-full p-8 md:p-10">
              <p className="font-display text-5xl font-extrabold text-muted-foreground/40 md:text-6xl">
                {p.no}
              </p>
              <h3 className="mt-8 text-xl uppercase tracking-tight md:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <Reveal>
          <p className="eyebrow">06 — Contact</p>
          <h2 className="mt-6 text-[14vw] leading-[0.84] uppercase md:text-[9vw]">
            Have a story
            <br />
            to tell?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-lg text-base text-muted-foreground md:text-lg">
            Let&apos;s turn your footage into something people remember.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-85"
            >
              Start a project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-secondary"
            >
              Instagram <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-secondary"
            >
              LinkedIn <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="tel:+918074141885"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] transition-colors hover:bg-secondary"
            >
              Contact <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="mt-12 inline-block font-display text-2xl font-extrabold uppercase tracking-tight underline-offset-8 hover:underline md:text-4xl"
          >
            {contact.email}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-lg font-extrabold tracking-[0.3em]">MANISH</p>
          <p className="eyebrow mt-3">Video Editor / Creative</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {["Work", "About", "Services", "Contact"].map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-wrap gap-x-8 gap-y-2 md:justify-end">
          <li>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={`mailto:${contact.email}`}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="tel:+918074141885"
              className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto max-w-[1600px] border-t border-border px-6 py-6 md:px-10">
        <p className="eyebrow">© 2026 Manish. All rights reserved.</p>
      </div>
    </footer>
  );
}

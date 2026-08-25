import { Mail, MessageCircle, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { contact, media, process, services, skills } from "@/data/site";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="cine-vignette relative overflow-hidden rounded-xl border border-border">
            <img
              src={media.portrait}
              alt="Portrait of Manish, video editor"
              loading="lazy"
              width={1008}
              height={1264}
              className="aspect-[4/5] w-full object-cover opacity-90"
            />
          </div>
        </Reveal>

        <div className="md:col-span-7 md:pt-6">
          <Reveal>
            <p className="eyebrow">03 — About</p>
            <h2 className="mt-6 text-[9vw] leading-[0.9] uppercase md:text-[4.4vw]">
              Editing is more than cutting.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              I&apos;m Manish, a video editor focused on cinematic storytelling, engaging social
              content, commercial videos and polished visual experiences.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-14">
              <p className="eyebrow">Toolkit</p>
              <ul className="mt-6 grid grid-cols-1 border-t border-border sm:grid-cols-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="border-b border-border py-4 text-sm uppercase tracking-[0.14em] text-foreground/90 sm:odd:pr-6"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow">04 — Services</p>
        <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">What I Do</h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:mt-20 md:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={(i % 3) * 0.06}>
            <article className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface md:p-10">
              <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-8 text-2xl uppercase leading-tight md:text-3xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">
      <Reveal>
        <p className="eyebrow">05 — Process</p>
        <h2 className="mt-4 text-[13vw] leading-[0.85] uppercase md:text-[7vw]">How It Works</h2>
      </Reveal>

      <ol className="mt-14 border-t border-border md:mt-20">
        {process.map((step, i) => (
          <Reveal key={step.no} delay={i * 0.05}>
            <li className="group grid grid-cols-1 gap-4 border-b border-border py-8 transition-colors duration-500 hover:bg-surface md:grid-cols-12 md:items-baseline md:gap-8 md:py-12 md:pl-6">
              <span className="eyebrow md:col-span-2">{step.no}</span>
              <h3 className="text-3xl uppercase leading-none md:col-span-4 md:text-5xl">
                {step.title}
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:col-span-6">
                {step.copy}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  const items = [
    { label: "Email me", href: `mailto:${contact.email}`, Icon: Mail, external: false },
    { label: "WhatsApp", href: contact.whatsapp, Icon: MessageCircle, external: true },
    { label: "Instagram", href: contact.instagram, Icon: Instagram, external: true },
  ];

  return (
    <section id="contact" className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-44">
      <Reveal>
        <p className="eyebrow">06 — Contact</p>
        <h2 className="mt-6 max-w-5xl text-[12vw] leading-[0.85] uppercase md:text-[7vw]">
          Have a story to tell?
        </h2>
      </Reveal>
      <Reveal delay={0.12}>
        <p className="mt-8 max-w-xl text-base text-muted-foreground md:text-lg">
          Let&apos;s turn your footage into something people remember.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <div className="mt-12 flex flex-wrap gap-3">
          {items.map(({ label, href, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
              className="inline-flex items-center gap-3 rounded-md border border-border px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-colors first:border-transparent first:bg-primary first:text-primary-foreground hover:bg-secondary first:hover:bg-primary/85"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-display text-sm font-extrabold uppercase tracking-[0.3em]">
          Manish — Video Editor
        </p>
        <p className="text-xs text-muted-foreground">© 2026 Manish. All rights reserved.</p>
      </div>
    </footer>
  );
}

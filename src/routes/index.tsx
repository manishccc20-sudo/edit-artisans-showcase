import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { FeaturedWork } from "@/components/site/FeaturedWork";
import { Showreel } from "@/components/site/Showreel";
import { Cursor } from "@/components/site/Cursor";
import { About, Contact, Footer, Process, Services } from "@/components/site/Sections";

const title = "Manish — Video Editor | Cinematic Edits & Short-Form Content";
const description =
  "Manish is a video editor crafting cinematic stories, commercials, product films and high-retention short-form content. Watch selected reels and the showreel.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Manish",
          jobTitle: "Video Editor",
          email: "dasarimanish983@gmail.com",
          description,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Showreel />
        <Services />
        <About />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

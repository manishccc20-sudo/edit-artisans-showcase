import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Showreel } from "@/components/site/Showreel";
import { Work } from "@/components/site/Work";
import { About, Contact, Footer, Process, Services } from "@/components/site/Sections";

const title = "Manish — Video Editor | Cinematic Editing & Color Grading";
const description =
  "Manish is a freelance video editor crafting cinematic commercials, wedding films, product spots and social content. Watch the showreel and selected work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
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
      <Nav />
      <main>
        <Hero />
        <Showreel />
        <Work />
        <About />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

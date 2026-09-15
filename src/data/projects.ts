/**
 * ─────────────────────────────────────────────────────────────
 * PORTFOLIO DATA — EDIT EVERYTHING HERE.
 * Add / remove projects, swap reel URLs, change posters.
 * ─────────────────────────────────────────────────────────────
 */
import posterA from "@/assets/work-cinematic.jpg";
import posterB from "@/assets/work-commercial.jpg";
import posterC from "@/assets/work-social.jpg";
import posterD from "@/assets/work-product.jpg";
import posterE from "@/assets/work-wedding.jpg";
import heroImageAsset from "@/assets/video-editing.jpg.asset.json";
import showreelPoster from "@/assets/showreel-poster.jpg";
import portrait from "@/assets/portrait.jpg.asset.json";
import portfolio01Video from "@/assets/portfolio-01.mp4.asset.json";

export const contact = {
  email: "dasarimanish983@gmail.com",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

export const media = {
  heroImage: heroImageAsset.url,
  portrait: portrait.url,
  showreelPoster,
  showreelUrl:
    "https://drive.google.com/file/d/1HaZ0Hh01bdxE7b_NQlYVvHhRq_Ouo0qZ/preview",
};

export const allCategories = [
  "All",
  "Cinematic",
  "Product",
  "Motion",
  "Editorial",
  "Creative Edit",
] as const;

export type Category = (typeof allCategories)[number];

export const categories: Category[] = ["All"];

export type Project = {
  id: string;
  no: string;
  title: string;
  category: Exclude<Category, "All">;
  reelUrl: string;
  poster: string;
  videoUrl?: string;
  description: string;
  role: string;
  software: string;
};

const posters = [posterA, posterB, posterC, posterD, posterE];

const DESCRIPTION =
  "";

type Seed = [title: string, category: Project["category"], url: string];

const seeds: Seed[] = [
  ["Visual Story", "Cinematic", "https://www.instagram.com/reel/DTNqYoPk0AC/"],
  ["Motion Study", "Motion", "https://www.instagram.com/reel/DR64iZOE8cI/"],
  ["Cinematic Edit", "Cinematic", "https://www.instagram.com/reel/DQtsUlVk7SG/"],
  ["Brand Film", "Product", "https://www.instagram.com/reel/DPoPdJtk1Oa/"],
  ["Visual Campaign", "Editorial", "https://www.instagram.com/reel/DSopGivkzTb/"],
  ["Social Story", "Editorial", "https://www.instagram.com/reel/DQHERMujFr6/"],
  ["Motion & Rhythm", "Motion", "https://www.instagram.com/reel/DP21pj1irWf/"],
  ["Cinematic Moments", "Cinematic", "https://www.instagram.com/reel/DUIFjErigh_/"],
  ["Product Story", "Product", "https://www.instagram.com/reel/DRbSqx-DElG/"],
  ["Editorial Cut", "Editorial", "https://www.instagram.com/reel/DSRedS-Dwew/"],
  ["Visual Expression", "Creative Edit", "https://www.instagram.com/reel/DQRLs2RCOUl/"],
  ["Brand Story", "Product", "https://www.instagram.com/reel/DODETEbk5f_/"],
  ["Creative Edit", "Creative Edit", "https://www.instagram.com/reel/DQbABTRk0lf/"],
  ["Social Campaign", "Editorial", "https://www.instagram.com/reel/DQBWNNWgUl1/"],
  ["Motion Story", "Motion", "https://www.instagram.com/reel/DPDzOFGApEI/"],
  ["Visual Journey", "Cinematic", "https://www.instagram.com/reel/DUzp07wDEbU/"],
  ["Cinematic Cut", "Cinematic", "https://www.instagram.com/reel/DUS7mUkjMNc/"],
  ["Creative Film", "Creative Edit", "https://www.instagram.com/reel/DVQuxckkRII/"],
  ["Editorial Motion", "Editorial", "https://www.instagram.com/reel/DUiWAc7k5eH/"],
  ["Brand Visual", "Product", "https://www.instagram.com/reel/DTZ4-3aicWL/"],
  ["Social Film", "Editorial", "https://www.instagram.com/reel/DS7hpgiE5sn/"],
  ["", "Creative Edit", "https://www.instagram.com/reels/DUYG0NsjIYE/"],
  ["Story In Motion", "Motion", "https://www.instagram.com/reel/DS2OBAtDIGm/"],
  ["Selected Cut", "Editorial", "https://www.instagram.com/reel/DP8UL6ZAQuE/"],
];

export const projects: Project[] = seeds.map(([title, category, reelUrl], i) => ({
  id: reelUrl.split("/").filter(Boolean).pop() ?? String(i),
  no: String(i + 1).padStart(2, "0"),
  title,
  category,
  reelUrl,
  videoUrl: i === 0 ? portfolio01Video.url : undefined,
  poster: posters[i % posters.length]!,
  description: DESCRIPTION,
  role: "",
  software: "",
}));

/** Instagram embed URL derived from a reel link. */
export const embedUrl = (reelUrl: string) => {
  const id = reelUrl.replace(/\/+$/, "").split("/").pop();
  return `https://www.instagram.com/reel/${id}/embed/`;
};

export const services = [
  { title: "Video Editing", copy: "Cinematic edits, social videos, commercials and branded content." },
  { title: "Short-Form Content", copy: "Reels, Shorts, and high-retention social content." },
  { title: "Color & Look Development", copy: "Cinematic color correction and creative grading." },
  { title: "Motion Graphics", copy: "Titles, transitions, kinetic typography and visual effects." },
  { title: "Sound Design", copy: "Music selection, sound effects, audio transitions and overall audio polish." },
  { title: "Storytelling", copy: "Turning raw footage into structured, engaging visual stories." },
];

export const software = ["Premiere Pro", "After Effects", "DaVinci Resolve", "Photoshop"];

export const process = [
  { no: "01", title: "Understand", copy: "Understand the story, audience and objective." },
  { no: "02", title: "Build", copy: "Create the structure, pacing and visual rhythm." },
  { no: "03", title: "Polish", copy: "Color, sound design, motion graphics and finishing." },
  { no: "04", title: "Deliver", copy: "Export optimized content ready for its platform." },
];

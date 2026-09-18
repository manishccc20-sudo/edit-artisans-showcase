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
import showreelPosterAsset from "@/assets/showreel-poster.png.asset.json";
import portrait from "@/assets/portrait.jpg.asset.json";
import portfolio01Video from "@/assets/portfolio-01.mp4.asset.json";
import portfolio02Video from "@/assets/portfolio-02.mp4.asset.json";
import portfolio03Video from "@/assets/portfolio-03.mp4.asset.json";
import portfolio04Video from "@/assets/portfolio-04.mp4.asset.json";
import portfolio05Video from "@/assets/portfolio-05.mp4.asset.json";
import portfolio06Video from "@/assets/portfolio-06.mp4.asset.json";
import portfolio07Video from "@/assets/portfolio-07.mp4.asset.json";
import portfolio08Video from "@/assets/portfolio-08.mp4.asset.json";
import portfolio09Video from "@/assets/portfolio-09.mp4.asset.json";
import portfolio10Video from "@/assets/portfolio-10.mp4.asset.json";
import portfolio11Video from "@/assets/portfolio-11.mp4.asset.json";
import portfolio12Video from "@/assets/portfolio-12.mp4.asset.json";
import portfolio13Video from "@/assets/portfolio-13.mp4.asset.json";
import portfolio14Video from "@/assets/portfolio-14.mp4.asset.json";
import portfolio15Video from "@/assets/portfolio-15.mp4.asset.json";
import portfolio16Video from "@/assets/portfolio-16.mp4.asset.json";
import portfolio17Video from "@/assets/portfolio-17.mp4.asset.json";
import portfolio18Video from "@/assets/portfolio-18.mp4.asset.json";
import portfolio19Video from "@/assets/portfolio-19.mp4.asset.json";

import portfolio01Thumb from "@/assets/portfolio-01-thumb.jpg.asset.json";
import portfolio02Thumb from "@/assets/portfolio-02-thumb.jpg.asset.json";
import portfolio03Thumb from "@/assets/portfolio-03-thumb.jpg.asset.json";
import portfolio04Thumb from "@/assets/portfolio-04-thumb.jpg.asset.json";
import portfolio05Thumb from "@/assets/portfolio-05-thumb.jpg.asset.json";
import portfolio06Thumb from "@/assets/portfolio-06-thumb.jpg.asset.json";
import portfolio07Thumb from "@/assets/portfolio-07-thumb.jpg.asset.json";
import portfolio08Thumb from "@/assets/portfolio-08-thumb.jpg.asset.json";
import portfolio09Thumb from "@/assets/portfolio-09-thumb.jpg.asset.json";
import portfolio10Thumb from "@/assets/portfolio-10-thumb.jpg.asset.json";
import portfolio11Thumb from "@/assets/portfolio-11-thumb.jpg.asset.json";
import portfolio12Thumb from "@/assets/portfolio-12-thumb.jpg.asset.json";
import portfolio13Thumb from "@/assets/portfolio-13-thumb.jpg.asset.json";
import portfolio14Thumb from "@/assets/portfolio-14-thumb.jpg.asset.json";
import portfolio15Thumb from "@/assets/portfolio-15-thumb.jpg.asset.json";
import portfolio16Thumb from "@/assets/portfolio-16-thumb.jpg.asset.json";
import portfolio17Thumb from "@/assets/portfolio-17-thumb.jpg.asset.json";
import portfolio18Thumb from "@/assets/portfolio-18-thumb.jpg.asset.json";
import portfolio19Thumb from "@/assets/portfolio-19-thumb.jpg.asset.json";






























export const contact = {
  email: "dasarimanish983@gmail.com",
  instagram: "https://www.instagram.com/",
  linkedin: "https://www.linkedin.com/",
};

export const media = {
  heroImage: heroImageAsset.url,
  portrait: portrait.url,
  showreelPoster: showreelPosterAsset.url,
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
  category: Exclude<Category, "All"> | "";
  reelUrl: string;
  poster: string;
  videoUrl?: string | undefined;
  description: string;
  role: string;
  software: string;
};

const posters = [posterA, posterB, posterC, posterD, posterE];

const DESCRIPTION =
  "";

type Seed = [title: string, category: Project["category"], url: string];

const seeds: Seed[] = [
  ["Visual Story", "", "https://www.instagram.com/reel/DTNqYoPk0AC/"],
  ["Motion Study", "", "https://www.instagram.com/reel/DR64iZOE8cI/"],
  ["Cinematic Edit", "", "https://www.instagram.com/reel/DQtsUlVk7SG/"],
  ["Brand Film", "", "https://www.instagram.com/reel/DPoPdJtk1Oa/"],
  ["Visual Campaign", "", "https://www.instagram.com/reel/DSopGivkzTb/"],
  ["Social Story", "", "https://www.instagram.com/reel/DQHERMujFr6/"],
  ["Motion & Rhythm", "", "https://www.instagram.com/reel/DP21pj1irWf/"],
  ["Cinematic Moments", "", "https://www.instagram.com/reel/DUIFjErigh_/"],
  ["Product Story", "", "https://www.instagram.com/reel/DRbSqx-DElG/"],
  ["Editorial Cut", "", "https://www.instagram.com/reel/DSRedS-Dwew/"],
  ["Visual Expression", "", "https://www.instagram.com/reel/DQRLs2RCOUl/"],
  ["Brand Story", "", "https://www.instagram.com/reel/DODETEbk5f_/"],
  ["Creative Edit", "", "https://www.instagram.com/reel/DQbABTRk0lf/"],
  ["Social Campaign", "", "https://www.instagram.com/reel/DQBWNNWgUl1/"],
  ["Motion Story", "", "https://www.instagram.com/reel/DPDzOFGApEI/"],
  ["Visual Journey", "", "https://www.instagram.com/reel/DUzp07wDEbU/"],
  ["Cinematic Cut", "", "https://www.instagram.com/reel/DUS7mUkjMNc/"],
  ["Creative Film", "", "https://www.instagram.com/reel/DVQuxckkRII/"],
  ["Editorial Motion", "", "https://www.instagram.com/reel/DUiWAc7k5eH/"],
  ["Brand Visual", "", "https://www.instagram.com/reel/DTZ4-3aicWL/"],
  ["Social Film", "", "https://www.instagram.com/reel/DS7hpgiE5sn/"],
  ["", "", "https://www.instagram.com/reels/DUYG0NsjIYE/"],
  ["Story In Motion", "", "https://www.instagram.com/reel/DS2OBAtDIGm/"],
  ["Selected Cut", "", "https://www.instagram.com/reel/DP8UL6ZAQuE/"],
];

export const projects: Project[] = seeds.map(([title, category, reelUrl], i) => ({
  id: reelUrl.split("/").filter(Boolean).pop() ?? String(i),
  no: String(i + 1).padStart(2, "0"),
  title,
  category,
  reelUrl,
  videoUrl: i === 0 ? portfolio01Video.url : i === 1 ? portfolio02Video.url : i === 2 ? portfolio03Video.url : i === 3 ? portfolio04Video.url : i === 4 ? portfolio05Video.url : i === 5 ? portfolio06Video.url : i === 6 ? portfolio07Video.url : i === 7 ? portfolio08Video.url : i === 8 ? portfolio09Video.url : i === 9 ? portfolio10Video.url : i === 10 ? portfolio11Video.url : i === 11 ? portfolio12Video.url : i === 12 ? portfolio13Video.url : i === 13 ? portfolio14Video.url : i === 14 ? portfolio15Video.url : i === 15 ? portfolio16Video.url : i === 16 ? portfolio17Video.url : i === 17 ? portfolio18Video.url : i === 18 ? portfolio19Video.url : undefined,
  poster: i === 0 ? portfolio01Thumb.url : i === 1 ? portfolio02Thumb.url : i === 2 ? portfolio03Thumb.url : i === 3 ? portfolio04Thumb.url : i === 4 ? portfolio05Thumb.url : i === 5 ? portfolio06Thumb.url : i === 6 ? portfolio07Thumb.url : i === 7 ? portfolio08Thumb.url : i === 8 ? portfolio09Thumb.url : i === 9 ? portfolio10Thumb.url : i === 10 ? portfolio11Thumb.url : i === 11 ? portfolio12Thumb.url : i === 12 ? portfolio13Thumb.url : i === 13 ? portfolio14Thumb.url : i === 14 ? portfolio15Thumb.url : i === 15 ? portfolio16Thumb.url : i === 16 ? portfolio17Thumb.url : i === 17 ? portfolio18Thumb.url : i === 18 ? portfolio19Thumb.url : posters[i % posters.length]!,
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

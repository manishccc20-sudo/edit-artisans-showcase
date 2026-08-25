/**
 * ─────────────────────────────────────────────────────────────
 * EDIT EVERYTHING HERE.
 * Replace video URLs, thumbnails, portrait and social links.
 * Thumbnails live in src/assets/ — drop your own file in and
 * update the import below.
 * ─────────────────────────────────────────────────────────────
 */
import heroImage from "@/assets/hero.jpg";
import showreelPoster from "@/assets/work-cinematic.jpg";
import portrait from "@/assets/portrait.jpg.asset.json";
import workCommercial from "@/assets/work-commercial.jpg";
import workSocial from "@/assets/work-social.jpg";
import workWedding from "@/assets/work-wedding.jpg";
import workProduct from "@/assets/work-product.jpg";
import workCinematic from "@/assets/work-cinematic.jpg";

/** Placeholder for project videos — swap for your own files or mp4 URLs. */
const PLACEHOLDER_VIDEO =
  "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";

/** Google Drive showreel — swap the file ID for your own share link. */
const SHOWREEL_VIDEO =
  "https://drive.google.com/file/d/1HaZ0Hh01bdxE7b_NQlYVvHhRq_Ouo0qZ/preview";

export const contact = {
  email: "hello@manish.video",
  whatsapp: "https://wa.me/910000000000",
  instagram: "https://instagram.com/",
};

export const media = {
  heroImage,
  portrait: portrait.url,
  showreel: {
    poster: showreelPoster,
    src: SHOWREEL_VIDEO,
  },
};

export type Project = {
  id: string;
  title: string;
  category: "Commercial" | "Social Media" | "Wedding" | "Product" | "Cinematic";
  year: string;
  thumbnail: string;
  video: string;
};

export const projects: Project[] = [
  {
    id: "aurora",
    title: "Aurora Motors",
    category: "Commercial",
    year: "2026",
    thumbnail: workCommercial,
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: "nightshift",
    title: "Night Shift",
    category: "Social Media",
    year: "2025",
    thumbnail: workSocial,
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: "vows",
    title: "Vows at Dusk",
    category: "Wedding",
    year: "2025",
    thumbnail: workWedding,
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: "obsidian",
    title: "Obsidian",
    category: "Product",
    year: "2026",
    thumbnail: workProduct,
    video: PLACEHOLDER_VIDEO,
  },
  {
    id: "fogroad",
    title: "Fog Road",
    category: "Cinematic",
    year: "2024",
    thumbnail: workCinematic,
    video: PLACEHOLDER_VIDEO,
  },
];

export const categories = [
  "All",
  "Commercial",
  "Social Media",
  "Wedding",
  "Product",
  "Cinematic",
] as const;

export const skills = [
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Photoshop",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Storytelling",
];

export const services = [
  {
    title: "Video Editing",
    copy: "Narrative-first edits with rhythm, pacing and intent behind every cut.",
  },
  {
    title: "Reels & Shorts",
    copy: "Vertical content built to hold attention in the first two seconds.",
  },
  {
    title: "Commercial Videos",
    copy: "Brand films and ads polished to broadcast standard.",
  },
  {
    title: "Wedding Films",
    copy: "Documentary-style films that keep the day feeling like the day.",
  },
  {
    title: "Motion Graphics",
    copy: "Titles, lower thirds and animated typography that stay out of the way.",
  },
  {
    title: "Color Grading",
    copy: "Filmic looks, clean skin tones and consistency across the timeline.",
  },
];

export const process = [
  { no: "01", title: "DISCOVER", copy: "We talk story, audience, references and deadlines before a single clip is imported." },
  { no: "02", title: "EDIT", copy: "Selects, structure and a first cut that locks the narrative spine." },
  { no: "03", title: "REFINE", copy: "Grade, sound design, motion graphics and your notes, round by round." },
  { no: "04", title: "DELIVER", copy: "Master files in every format you need, ready to publish." },
];

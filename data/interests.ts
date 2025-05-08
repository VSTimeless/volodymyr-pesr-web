import { BookOpen, Headphones, Camera } from "lucide-react";

export const interests = {
  reading: {
    slug: "reading",
    icon: BookOpen,
    title: "Reading",
    description: "Science fiction, technical books, and biographies",
  },
  podcasts: {
    slug: "podcasts",
    icon: Headphones,
    title: "Podcasts",
    description: "Tech news, engineering discussions, and science podcasts",
  },
  photography: {
    slug: "photography",
    icon: Camera,
    title: "Photography",
    description: "Landscape and architectural photography",
  },
};

export type InterestKey = keyof typeof interests;
export type Interest = typeof interests[InterestKey];
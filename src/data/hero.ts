import type { HeroMedia } from "@/types";

export const heroMedia: HeroMedia = {
  slides: [
    { src: "/images/hero/hero-01.jpg", alt: "Cable-stayed sea bridge at sunrise" },
    { src: "/images/hero/hero-02.jpg", alt: "Industrial storage tanks, pipework and valves" },
    { src: "/images/hero/hero-03.jpg", alt: "High-voltage transmission towers and power lines" },
    { src: "/images/hero/hero-04.jpg", alt: "Railway viaduct spanning a wooded valley" },
    { src: "/images/hero/hero-05.jpg", alt: "Clarifier basin at a water treatment plant" },
  ],
  video: "/videos/hero.mp4",
  poster: "/images/hero/hero-poster.jpg",
  intervalMs: 2500,
  fadeMs: 700,
};

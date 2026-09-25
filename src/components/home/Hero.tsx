"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { heroMedia } from "@/data/hero";
import { site } from "@/data/site";

export function Hero({ hasVideo }: { hasVideo: boolean }) {
  const { hero } = site;
  const { slides, video, poster, intervalMs, fadeMs } = heroMedia;
  const [index, setIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);
  const showVideo = hasVideo && !videoFailed;

  useEffect(() => {
    if (showVideo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs);
    return () => window.clearInterval(id);
  }, [showVideo, slides.length, intervalMs]);

  return (
    <section
      className="relative isolate flex min-h-[520px] items-end overflow-hidden bg-navy-dark md:min-h-[600px] lg:h-[calc(100svh-76px)] lg:max-h-[780px]"
      aria-labelledby="hero-title"
      data-testid="hero-section"
    >
      <div className="absolute inset-0 -z-10">
        {showVideo ? (
          <video
            className="h-full w-full object-cover"
            src={video}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
            data-testid="hero-video"
          />
        ) : (
          slides.map((slide, i) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={i === index ? slide.alt : ""}
              aria-hidden={i !== index}
              fill
              priority={i === 0}
              sizes="100vw"
              style={{ transitionDuration: `${fadeMs}ms` }}
              className={`hero-slide object-cover ${i === index ? "opacity-100" : "opacity-0"}`}
              data-testid={`hero-slide-${i + 1}`}
            />
          ))
        )}
        <div className="absolute inset-0 bg-navy-dark/55" aria-hidden="true" />
      </div>
      <div className="container-site pb-14 pt-24 md:pb-20">
        <div className="max-w-3xl text-white">
          <h1 id="hero-title" className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl" data-testid="hero-title">
            {hero.title}
          </h1>
          <p className="mt-4 text-xl font-medium leading-snug sm:text-2xl lg:text-[28px]" data-testid="hero-subtitle">
            {hero.subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{hero.text}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={hero.primary.href} className="btn btn-light" data-testid="hero-services-button">
              {hero.primary.label}
            </Link>
            <Link href={hero.secondary.href} className="btn btn-outline-light" data-testid="hero-enquire-button">
              {hero.secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

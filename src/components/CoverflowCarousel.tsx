"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { CarouselSlide } from "@/data/content";

interface CoverflowCarouselProps {
  slides: CarouselSlide[];
  title: string;
  subtitle: string;
  id?: string;
}

function getCardStyle(offset: number): React.CSSProperties {
  const absOffset = Math.abs(offset);

  if (absOffset > 3) {
    return {
      opacity: 0,
      pointerEvents: "none",
      transform: "translateX(0) rotateY(0deg) scale(0.5) translateZ(-200px)",
    };
  }

  const translateX = offset * 140;
  const rotateY = offset * -38;
  const scale = Math.max(0.72, 1 - absOffset * 0.12);
  const translateZ = -absOffset * 90;
  const opacity = Math.max(0.35, 1 - absOffset * 0.22);
  const zIndex = 10 - absOffset;

  return {
    transform: `translateX(${translateX}px) rotateY(${rotateY}deg) scale(${scale}) translateZ(${translateZ}px)`,
    opacity,
    zIndex,
  };
}

export default function CoverflowCarousel({
  slides,
  title,
  subtitle,
  id,
}: CoverflowCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(slides.length / 2),
  );

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + slides.length) % slides.length);
    },
    [slides.length],
  );

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goPrev, goNext]);

  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle mx-auto mt-3">{subtitle}</p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <div
            className="relative flex h-[520px] items-center justify-center sm:h-[580px]"
            style={{ perspective: "1200px" }}
          >
            <div
              className="relative h-full w-full"
              style={{ transformStyle: "preserve-3d" }}
            >
              {slides.map((slide, index) => {
                const offset = index - activeIndex;
                const isActive = offset === 0;

                return (
                  <div
                    key={slide.id}
                    className="absolute left-1/2 top-1/2 -ml-[110px] -mt-[220px] h-[440px] w-[220px] cursor-pointer transition-all duration-500 ease-out sm:-ml-[125px] sm:-mt-[250px] sm:h-[500px] sm:w-[250px]"
                    style={{
                      ...getCardStyle(offset),
                      transformStyle: "preserve-3d",
                    }}
                    onClick={() => !isActive && goTo(index)}
                  >
                    <div
                      className={`relative h-full w-full overflow-hidden rounded-2xl shadow-2xl transition-shadow duration-300 ${
                        isActive ? "ring-2 ring-of-blue/40" : ""
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={`Contenido de ${slide.username}`}
                        fill
                        className="object-cover"
                        sizes="250px"
                        priority={isActive}
                      />

                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/30" />

                      <div className="absolute left-3 right-3 top-3 flex items-start justify-between">
                        <div className="flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
                          <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-full">
                            <Image
                              src={slide.avatar}
                              alt={slide.username}
                              fill
                              className="object-cover"
                              sizes="28px"
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-of-text">
                              {slide.username}
                            </p>
                            <p className="text-[10px] text-of-text-muted">
                              {slide.timestamp}
                            </p>
                          </div>
                        </div>

                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur-sm">
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <defs>
                              <linearGradient
                                id={`ig-grad-${slide.id}`}
                                x1="0%"
                                y1="100%"
                                x2="100%"
                                y2="0%"
                              >
                                <stop offset="0%" stopColor="#FD5949" />
                                <stop offset="50%" stopColor="#D6249F" />
                                <stop offset="100%" stopColor="#285AEB" />
                              </linearGradient>
                            </defs>
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              fill={`url(#ig-grad-${slide.id})`}
                            />
                            <circle
                              cx="12"
                              cy="12"
                              r="4.5"
                              stroke="white"
                              strokeWidth="1.5"
                              fill="none"
                            />
                            <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 hover:shadow-xl sm:left-2"
            aria-label="Anterior"
          >
            <svg
              className="h-5 w-5 text-of-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition hover:scale-105 hover:shadow-xl sm:right-2"
            aria-label="Siguiente"
          >
            <svg
              className="h-5 w-5 text-of-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 bg-of-blue"
                    : "w-2 bg-of-border hover:bg-of-blue/50"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

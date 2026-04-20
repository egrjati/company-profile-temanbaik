"use client";

import { useState, useEffect } from "react";

const slides = [
  { id: 1, seed: "charity1",    alt: "Slide 1" },
  { id: 2, seed: "volunteer2",  alt: "Slide 2" },
  { id: 3, seed: "community3",  alt: "Slide 3" },
  { id: 4, seed: "humanity4",   alt: "Slide 4" },
  { id: 5, seed: "kindness5",   alt: "Slide 5" },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (animating || index === current) return;
    setPrev(current);
    setCurrent(index);
    setAnimating(true);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [current, animating]);

  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => {
        setPrev(null);
        setAnimating(false);
      }, 700);
      return () => clearTimeout(t);
    }
  }, [animating]);

  return (
    <div className="relative w-full h-full overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isPrev   = i === prev;

        return (
          <img
            key={slide.id}
            src={`https://picsum.photos/seed/${slide.seed}/1600/600`}
            alt={slide.alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              opacity:    isActive ? 1 : isPrev ? 0 : 0,
              transition: isActive || isPrev ? "opacity 700ms ease-in-out" : "none",
              zIndex:     isActive ? 2 : isPrev ? 1 : 0,
            }}
          />
        );
      })}

      {/* Overlay gelap tipis */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width:           i === current ? "28px" : "8px",
              height:          "8px",
              borderRadius:    "9999px",
              backgroundColor: i === current ? "white" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>

      {/* Navigasi kiri & kanan */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        onClick={() => goTo((current + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-5 h-5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

    </div>
  );
}

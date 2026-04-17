"use client";

import { useEffect, useState } from "react";
import ScrollIndicator from "@/components/ui/scroll-indicator";

const COLORS = [
  "#0f172a", // slate-900
  "#1e3a5f", // deep blue
  "#0f3460", // royal blue
  "#164e63", // cyan-900
  "#14532d", // green-900
  "#3b0764", // purple-950
  "#7c2d12", // orange-950
  "#1c1917", // stone-900
];

export default function HeroHeader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % COLORS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header
      className="w-full h-150 relative"
      style={{
        backgroundColor: COLORS[index],
        transition: "background-color 1.2s ease-in-out",
      }}
    >
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <ScrollIndicator />
      </div>
    </header>
  );
}

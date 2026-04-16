export default function ScrollIndicator() {
  return (
    <div className="flex items-center gap-4">
      {/* Pill / capsule shape */}
      <div className="w-10 h-16 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
        <div className="scroll-arrow-anim">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="4" x2="12" y2="20" />
            <polyline points="18 14 12 20 6 14" />
          </svg>
        </div>
      </div>

      {/* Teks */}
      <p className="text-white font-semibold text-sm leading-snug tracking-wide">
        Scroll <br /> Untuk <br /> Eksplorasi
      </p>
    </div>
  );
}

export default function TalkToUs() {
  return (
    <a
      href="#"
      aria-label="Talk to Us - Layanan Bantuan CS"
      className="fixed bottom-12 right-6 z-50 flex items-center gap-2.5 bg-[#278dcd] hover:bg-[#1e7ab8] text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
    >
      {/* Chat bubble icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 flex-shrink-0"
        fill="white"
      >
        {/* Bubble belakang */}
        <circle cx="19" cy="13" r="9" opacity="0.45" />
        {/* Bubble depan */}
        <circle cx="13" cy="17" r="9" />
        {/* Titik-titik */}
        <circle cx="9.5" cy="17" r="1.4" fill="#278dcd" />
        <circle cx="13"  cy="17" r="1.4" fill="#278dcd" />
        <circle cx="16.5" cy="17" r="1.4" fill="#278dcd" />
      </svg>

      Talk to Us
    </a>
  );
}

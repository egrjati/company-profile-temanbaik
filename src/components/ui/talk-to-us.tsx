"use client";

import { useState } from "react";

const options = [
  {
    label: "WhatsApp",
    sub: "Chat langsung CS kami",
    href: "https://wa.me/6281234567890",
    bg: "#25D366",
    delay: "delay-[80ms]",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-white shrink-0">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.666 4.8 1.83 6.8L2 30l7.4-1.8A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Zm0 25.6a11.55 11.55 0 0 1-5.88-1.6l-.42-.25-4.39 1.07 1.1-4.27-.28-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6Zm6.34-8.66c-.35-.175-2.06-1.016-2.38-1.132-.32-.116-.553-.174-.786.175-.232.348-.9 1.132-1.103 1.365-.203.232-.406.26-.755.087-.35-.175-1.476-.544-2.812-1.735-1.04-.927-1.742-2.072-1.946-2.42-.203-.35-.022-.538.153-.712.157-.156.35-.406.524-.61.175-.203.232-.348.349-.58.116-.232.058-.435-.029-.61-.087-.174-.786-1.893-1.077-2.594-.283-.681-.571-.589-.786-.6l-.669-.011c-.232 0-.61.087-.928.435-.319.348-1.22 1.19-1.22 2.903s1.249 3.368 1.423 3.6c.175.232 2.458 3.752 5.956 5.262.833.36 1.483.574 1.99.734.836.266 1.597.228 2.199.138.67-.1 2.063-.843 2.354-1.658.29-.814.29-1.512.203-1.658-.087-.145-.32-.232-.669-.406Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    sub: "cs@temanbaik.id",
    href: "mailto:cs@temanbaik.id",
    bg: "#1a1a1a",
    delay: "delay-0",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
      </svg>
    ),
  },
];

export default function TalkToUs() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-12 right-6 z-50 flex flex-col items-end gap-3">

      {/* Opsi — muncul ke atas saat open */}
      <div className="flex flex-col items-end gap-2">
        {options.map((opt, i) => (
          <a
            key={i}
            href={opt.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              flex items-center gap-3 bg-white rounded-2xl shadow-md px-4 py-3 w-56
              hover:shadow-lg hover:scale-[1.02] active:scale-95
              transition-all duration-300 ${opt.delay}
              ${open
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-4 pointer-events-none"}
            `}
          >
            {/* Icon bulat */}
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: opt.bg }}
            >
              {opt.icon}
            </div>
            {/* Teks */}
            <div>
              <p className="text-gray-800 font-bold text-sm leading-tight">{opt.label}</p>
              <p className="text-gray-400 text-xs mt-0.5">{opt.sub}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Tombol utama */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Talk to Us"
        style={{ background: "linear-gradient(135deg, #213f9a, #01a6e0)" }}
        className={`flex items-center justify-center text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
          open ? "w-12 h-12 rounded-full" : "gap-2.5 px-5 py-3 rounded-full"
        }`}
      >
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-white shrink-0">
              <circle cx="19" cy="13" r="9" opacity="0.45" />
              <circle cx="13" cy="17" r="9" />
              <circle cx="9.5"  cy="17" r="1.4" fill="#213f9a" />
              <circle cx="13"   cy="17" r="1.4" fill="#213f9a" />
              <circle cx="16.5" cy="17" r="1.4" fill="#213f9a" />
            </svg>
            Talk to Us
          </>
        )}
      </button>

    </div>
  );
}

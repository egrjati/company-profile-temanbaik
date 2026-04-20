export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="w-full relative py-36 px-4 overflow-hidden">
        {/* Gambar dummy background */}
        <img
          src="https://picsum.photos/seed/temanbaik/1600/700"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay gelap */}
        <div className="absolute inset-0 bg-[#0f172a]/75" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[#278dcd] text-sm font-semibold uppercase tracking-widest mb-3">
            Siapa Kami
          </p>
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-4">
            Tentang Teman Baik
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Kami hadir untuk menjadi jembatan kebaikan antara mereka yang ingin
            memberi dan mereka yang membutuhkan — di seluruh penjuru negeri.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-gray-800 font-bold text-3xl md:text-4xl inline-block relative">
              Kisah Kami
              <span className="block mx-auto mt-2 w-16 h-1 bg-[#278dcd] rounded-full" />
            </h2>
          </div>

          {/* 2 kolom: teks kiri, 3 foto kanan */}
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Teks */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed italic mb-8">
                "Teman Baik lahir dari kepedulian mendalam terhadap sesama. Kami
                menghubungkan para donatur yang ingin berbagi dengan masyarakat
                yang membutuhkan — memastikan setiap bantuan sampai tepat
                sasaran, tepat waktu, dan penuh amanah."
              </p>
              <a
                href="#"
                className="inline-block py-2.5 px-6 bg-[#278dcd] hover:bg-[#1e7ab8] text-white text-sm font-semibold rounded-full shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200"
              >
                Kenali Program Kami
              </a>
            </div>

            {/* 3 foto berderet */}
            <div className="flex-1 flex items-end justify-center gap-3">
              {/* Foto 1 — naik ke atas */}
              <div className="w-32 h-56 md:w-36 md:h-64 rounded-3xl bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden flex-shrink-0 shadow-md flex items-end justify-center pb-3 -translate-y-8">
                <span className="text-gray-500 text-xs">Foto 1</span>
              </div>
              {/* Foto 2 — tengah, paling tinggi, di posisi bawah */}
              <div className="w-32 h-72 md:w-36 md:h-80 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-400 overflow-hidden flex-shrink-0 shadow-md flex items-end justify-center pb-3">
                <span className="text-gray-500 text-xs">Foto 2</span>
              </div>
              {/* Foto 3 — naik ke atas */}
              <div className="w-32 h-56 md:w-36 md:h-64 rounded-3xl bg-gradient-to-br from-gray-300 to-gray-400 overflow-hidden flex-shrink-0 shadow-md flex items-end justify-center pb-3 -translate-y-8">
                <span className="text-gray-500 text-xs">Foto 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Identitas, Visi & Misi */}
      <div className="w-full bg-[#f5f0e4] py-16 px-4 relative overflow-hidden">
        {/* Dekorasi background — lingkaran & outline menonjol di sisi kartu */}
        <svg
          className="absolute left-0 top-1/2 -translate-y-1/2 opacity-10 w-64 h-64 text-[#7a9a4a]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="55" />
          <circle cx="100" cy="100" r="30" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
        </svg>
        <svg
          className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 w-64 h-64 text-[#7a9a4a]"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="55" />
          <circle cx="100" cy="100" r="30" />
          <path d="M60 60 L100 40 L140 60 L160 100 L140 140 L100 160 L60 140 L40 100 Z" />
        </svg>
        <svg
          className="absolute left-1/4 bottom-4 opacity-[0.07] w-32 h-32 text-[#7a9a4a]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="20" />
          <circle cx="50" cy="50" r="5" fill="currentColor" />
        </svg>
        <svg
          className="absolute right-1/4 top-6 opacity-[0.07] w-24 h-24 text-[#7a9a4a]"
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <rect x="15" y="15" width="70" height="70" rx="12" />
          <rect x="30" y="30" width="40" height="40" rx="6" />
        </svg>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Label + Heading */}
          <div className="text-center mb-10">
            <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">
              Tentang Kami
            </p>
            <h2 className="text-gray-800 font-bold text-3xl md:text-4xl leading-tight">
              Identitas, Visi
              <br />
              dan Nilai Kami
            </h2>
          </div>

          {/* Bar nilai + kartu putih overlap */}
          <div className="relative">
            {/* Bar nilai — 4 label */}
            <div className="relative z-10 bg-[#213f9a] rounded-2xl px-8 py-10 flex items-center justify-around gap-4 mx-10">
              {[
                "Visi & Misi",
                "Sejarah",
                "Budaya Kerja",
                "Arti Logo",
              ].map((label, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-white text-center min-w-0"
                >
                  <span className="text-base font-semibold leading-tight">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Kartu putih — overlap naik ke bar */}
            <div className="relative z-0 bg-white rounded-2xl shadow-sm -mt-6 pt-20 pb-20 px-12">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">
                {/* Visi */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-800 shrink-0"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <h3 className="text-gray-800 font-bold text-xl">Visi</h3>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Menjadi Lembaga Kebaikan Berbasis Digital yang Terdepan
                    Dalam Memberdayakan Umat dan Menebarkan Maslahat Secara
                    Berkelanjutan.
                  </p>
                </div>

                {/* Divider vertikal*/}
                <div className="hidden md:flex justify-center self-stretch">
                  <div className="w-px bg-gray-400 h-full rounded-l-full rounded-r-full" />
                </div>

                {/* Misi */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-800 shrink-0"
                    >
                      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                      <rect x="9" y="9" width="6" height="6" rx="1" />
                    </svg>
                    <h3 className="text-gray-800 font-bold text-xl">Misi</h3>
                  </div>
                  <ul className="text-gray-500 text-sm leading-relaxed space-y-2">
                    {[
                      "Memudahkan Donasi Digital.",
                      "Menyalurkan Bantuan yang Berdampak.",
                      "Bergerak Bersama Mitra & Relawan.",
                      "Menghadirkan Transparansi Real-Time.",
                      "Melayani dengan Ruh Spiritual & Profesionalisme.",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#023656] shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
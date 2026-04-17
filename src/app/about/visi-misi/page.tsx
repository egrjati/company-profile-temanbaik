const misi = [
  {
    title: "Memudahkan Donasi Digital",
    desc: "Menghadirkan platform donasi yang sederhana, aman, dan bisa diakses kapan saja sehingga setiap orang dapat berdonasi tanpa hambatan.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-6m0 0V6m0 6H6m6 0h6M3 21h18" />
      </svg>
    ),
  },
  {
    title: "Menyalurkan Bantuan yang Berdampak",
    desc: "Memastikan setiap rupiah yang diamanahkan tersalurkan tepat sasaran kepada mereka yang paling membutuhkan dengan dampak nyata dan terukur.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Bergerak Bersama Mitra & Relawan",
    desc: "Membangun ekosistem kebaikan yang kuat bersama lembaga mitra, komunitas, dan jaringan relawan yang bergerak satu visi di seluruh nusantara.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 0 0-4-4h-1M9 20H4v-2a4 4 0 0 1 4-4h1m4 6v-2m0 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      </svg>
    ),
  },
  {
    title: "Menghadirkan Transparansi Real-Time",
    desc: "Memberikan laporan program dan keuangan secara terbuka, akurat, dan dapat dipantau secara langsung oleh para donatur dan pemangku kepentingan.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z" />
      </svg>
    ),
  },
  {
    title: "Melayani dengan Ruh Spiritual & Profesionalisme",
    desc: "Menjalankan setiap amanah dengan landasan nilai spiritual yang kuat, dipadukan dengan standar profesionalisme tinggi demi layanan terbaik bagi umat.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 0 0 .95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 0 0-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 0 0-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 0 0-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 0 0 .951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function VisiMisiPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Banner ─────────────────────────────────────────────────────── */}
      <div className="w-full bg-[#0f172a] py-16 px-4 relative overflow-hidden">
        {/* Dekorasi lingkaran blur */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#278dcd]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#278dcd]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#278dcd] text-sm font-semibold uppercase tracking-widest mb-3">
            Tentang Kami
          </p>
          <h1 className="text-white font-bold text-3xl md:text-4xl mb-4">
            Visi &amp; Misi
          </h1>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Fondasi nilai dan arah gerak kami dalam mewujudkan kebaikan yang nyata, berkelanjutan, dan berdampak luas.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14">

        {/* ── Visi ──────────────────────────────────────────────────────── */}
        <section className="mb-16">
          {/* Label */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-6 bg-[#278dcd] rounded-full" />
            <h2 className="text-gray-800 font-bold text-xl">Visi</h2>
          </div>

          <div className="relative bg-white rounded-2xl border border-gray-200 shadow-sm p-8 md:p-12 overflow-hidden">
            {/* Aksen besar di sudut */}
            <span className="absolute -top-4 -left-2 text-[120px] leading-none font-serif text-[#278dcd]/8 select-none pointer-events-none">
              "
            </span>

            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Ikon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#278dcd]/10 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-[#278dcd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              {/* Teks */}
              <div>
                <p className="text-gray-800 font-semibold text-lg md:text-xl leading-relaxed">
                  Menjadi Lembaga Kebaikan Berbasis Digital yang Terdepan Dalam{" "}
                  <span className="text-[#278dcd]">Memberdayakan Umat</span> dan Menebarkan{" "}
                  <span className="text-[#278dcd]">Maslahat Secara Berkelanjutan</span>.
                </p>
              </div>
            </div>

            {/* Garis bawah aksen */}
            <div className="mt-8 w-16 h-1 bg-gradient-to-r from-[#278dcd] to-[#278dcd]/20 rounded-full" />
          </div>
        </section>

        {/* ── Misi ──────────────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-6 bg-[#278dcd] rounded-full" />
            <h2 className="text-gray-800 font-bold text-xl">Misi</h2>
          </div>

          <div className="flex flex-col gap-4">
            {misi.map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md hover:border-[#278dcd]/30 transition-all duration-300 p-6 flex items-start gap-5"
              >
                {/* Nomor */}
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#278dcd]/10 text-[#278dcd] font-bold text-sm flex items-center justify-center group-hover:bg-[#278dcd] group-hover:text-white transition-colors duration-300">
                  {i + 1}
                </span>

                {/* Ikon */}
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#278dcd]/8 text-[#278dcd] flex items-center justify-center group-hover:bg-[#278dcd]/15 transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Teks */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-gray-800 font-bold text-base mb-1 group-hover:text-[#278dcd] transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

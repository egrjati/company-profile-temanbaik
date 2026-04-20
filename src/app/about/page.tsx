export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Header ────────────────────────────────────────────── */}
      <div className="w-full bg-[#0f172a] py-36 px-4">
        <div className="max-w-3xl mx-auto text-center">
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
      <div className="w-full bg-[#f5f0e4] py-16 px-4">
        <div className="max-w-4xl mx-auto">

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
            <div className="relative z-10 bg-[#7a9a4a] rounded-2xl px-8 py-10 flex items-center justify-around gap-4 mx-10">
              {["Kepedulian", "Amanah & Transparan", "Keberlanjutan", "Inovasi"].map((label, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-white text-center min-w-0">
                  <span className="text-xs font-semibold leading-tight">{label}</span>
                </div>
              ))}
            </div>

            {/* Kartu putih — overlap naik ke bar */}
            <div className="relative z-0 bg-white rounded-2xl shadow-sm -mt-6 pt-20 pb-20 px-12">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 items-start">

                {/* Visi */}
                <div>
                  <h3 className="text-gray-800 font-bold text-xl mb-3">Visi</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Menjadi lembaga kemanusiaan terpercaya yang menginspirasi jutaan
                    orang untuk berbagi dan menciptakan perubahan nyata bagi
                    masyarakat Indonesia.
                  </p>
                </div>

                {/* Divider vertikal — item sendiri, center */}
                <div className="hidden md:flex justify-center self-stretch">
                  <div className="w-px bg-gray-400 h-full rounded-l-full rounded-r-full" />
                </div>

                {/* Misi */}
                <div>
                  <h3 className="text-gray-800 font-bold text-xl mb-3">Misi</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Menyalurkan bantuan dengan tepat sasaran, membangun program
                    pemberdayaan berkelanjutan, dan menjaga kepercayaan donatur
                    melalui transparansi penuh.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
import BerbagiMengubahKehidupan from "@/components/ui/hightlight-program";
import ScrollIndicator from "@/components/ui/scroll-indicator";
import HeroSlider from "@/components/ui/hero-slider";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full h-150 bg-black relative">
        <HeroSlider />
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <ScrollIndicator />
        </div>
      </header>

      {/* Main Content */}
      <main>
        <h1 className=" mt-16 text-center text-[#213F9A] font-bold text-3xl">
          Program Kami
        </h1>

        {/* hightlight Program */}
        <BerbagiMengubahKehidupan />

        {/* Transparansi */}
        <div className="w-full flex flex-col items-center justify-center py-16 px-6 mt-10 relative overflow-hidden bg-white">
          {/* Swirl kiri */}
          <svg
            className="absolute left-0 top-0 h-full w-auto opacity-80"
            viewBox="0 0 300 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMid meet"
          >
            <path
              d="M-20 80 C 40 100, 120 60, 140 160 C 160 260, 60 300, 80 400 C 100 480, 180 460, 160 560"
              stroke="#02A6E0"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M-40 120 C 30 140, 100 90, 130 200 C 155 290, 50 330, 70 430 C 90 510, 170 490, 150 580"
              stroke="#213F9A"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M-10 200 C 60 210, 150 170, 160 270 C 170 360, 80 380, 100 460 C 120 530, 190 520, 175 610"
              stroke="#02A6E0"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>

          {/* Swirl kanan */}
          <svg
            className="absolute right-0 top-0 h-full w-auto opacity-80"
            viewBox="0 0 300 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMaxYMid meet"
          >
            <path
              d="M320 40 C 250 70, 180 40, 160 140 C 140 230, 230 270, 210 370 C 190 450, 110 440, 130 540"
              stroke="#213F9A"
              strokeWidth="1.8"
              fill="none"
              strokeLinecap="round"
            />
            <path
              d="M340 90 C 265 115, 190 80, 175 175 C 158 270, 245 305, 225 400 C 205 475, 125 465, 148 558"
              stroke="#02A6E0"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M310 180 C 245 195, 170 160, 158 255 C 145 345, 235 365, 215 445 C 197 515, 120 510, 140 598"
              stroke="#213F9A"
              strokeWidth="1.2"
              fill="none"
              strokeLinecap="round"
              opacity="0.4"
            />
          </svg>

          {/* Header */}
          <div className="text-center mb-12 z-10">
            <p className="text-[#02A6E0] text-[10px] uppercase tracking-[0.5em] font-semibold mb-3">
              Laporan Kami
            </p>
            <h2 className="text-[#213F9A] font-bold text-2xl md:text-3xl tracking-wide">
              Transparansi
            </h2>
            <div className="mt-4 mx-auto w-8 h-[2px] rounded-full bg-[#02A6E0]/40" />
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl z-10">
            {/* Card 1 - Penerima Manfaat */}
            <div
              className="group relative rounded-2xl px-8 py-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(2, 166, 224, 0.2)",
                boxShadow:
                  "0 4px 24px rgba(2,166,224,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(2,166,224,0.08)",
                  border: "1px solid rgba(2,166,224,0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  style={{ color: "#02A6E0" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a4 4 0 00-5-3.87M9 20H4v-2a4 4 0 015-3.87m6 5.87H9m3-10a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              </div>
              <p
                className="font-extrabold text-4xl tracking-tight leading-none"
                style={{ color: "#213F9A" }}
              >
                1,2 Jt+
              </p>
              <div
                className="my-3 w-5 h-px"
                style={{ background: "rgba(2,166,224,0.3)" }}
              />
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#02A6E0" }}
              >
                Penerima Manfaat
              </p>
            </div>

            {/* Card 2 - Total Donatur */}
            <div
              className="group relative rounded-2xl px-8 py-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(33, 63, 154, 0.2)",
                boxShadow:
                  "0 8px 32px rgba(33,63,154,0.10), inset 0 1px 0 rgba(255,255,255,1)",
              }}
            >
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(2,166,224,0.5), transparent)",
                }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(33,63,154,0.08)",
                  border: "1px solid rgba(33,63,154,0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  style={{ color: "#213F9A" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                  />
                </svg>
              </div>
              <p
                className="font-extrabold text-4xl tracking-tight leading-none"
                style={{ color: "#213F9A" }}
              >
                500 Rb+
              </p>
              <div
                className="my-3 w-5 h-px"
                style={{ background: "rgba(33,63,154,0.3)" }}
              />
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#213F9A" }}
              >
                Total Donatur
              </p>
            </div>

            {/* Card 3 - Donasi Disalurkan */}
            <div
              className="group relative rounded-2xl px-8 py-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                border: "1px solid rgba(2, 166, 224, 0.2)",
                boxShadow:
                  "0 4px 24px rgba(2,166,224,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "rgba(2,166,224,0.08)",
                  border: "1px solid rgba(2,166,224,0.2)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  style={{ color: "#02A6E0" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <p
                className="font-extrabold text-4xl tracking-tight leading-none"
                style={{ color: "#213F9A" }}
              >
                Rp 98 M+
              </p>
              <div
                className="my-3 w-5 h-px"
                style={{ background: "rgba(2,166,224,0.3)" }}
              />
              <p
                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#02A6E0" }}
              >
                Donasi Disalurkan
              </p>
            </div>
          </div>

          {/* Footer note */}
          <p
            className="text-[10px] mt-10 z-10 text-slate-600 tracking-widest uppercase"
          >
            * Data diperbarui secara berkala
          </p>
        </div>

        {/* Mitra */}
        <section className="py-16 px-4 sm:px-8 lg:px-16 bg-[#EEF3FF]">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-12">
              <p className="text-[#02A6E0] font-semibold text-sm uppercase tracking-widest mb-2">
                Jaringan Kami
              </p>
              <h2 className="text-[#213F9A] font-bold text-3xl mb-3">
                Mitra Kami
              </h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Bersama mitra terpercaya, kami terus bergerak mewujudkan
                kebaikan yang nyata.
              </p>
              <div className="w-12 h-1 bg-[#02A6E0] mx-auto mt-4 rounded-full" />
            </div>

            {/* Grid logo mitra */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm h-20 flex items-center justify-center hover:shadow-md hover:border-[#02A6E0]/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  {/* Placeholder logo — ganti dengan <Image> saat aset siap */}
                  <div className="w-16 h-8 bg-gray-200 rounded group-hover:bg-[#02A6E0]/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Berita */}
        <section className="mb-10">
          <div className="w-full py-8 px-4 sm:px-8 lg:px-16">
            <h2 className="text-[#213F9A] text-center font-bold text-3xl mb-6">
              BERITA TERBARU
            </h2>

            {/* Featured card — 1 kartu lebar */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              {/* Gambar kiri */}
              <div className="w-full md:w-2/5 h-56 md:h-auto bg-gray-400 flex-shrink-0" />
              {/* Konten kanan */}
              <div className="flex-1 p-6 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[#02A6E0] font-semibold text-sm">
                      Berita
                    </span>
                    <span className="text-gray-400 text-sm">16 Apr 2026</span>
                  </div>
                  <h3 className="text-gray-800 font-bold text-xl mb-3 leading-snug">
                    Perkuat Pengelolaan Huntara di Aceh Tamiang, Langkah Bersama
                    Jaga Kehidupan Penyintas
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Banjir melanda sejumlah wilayah di Aceh Tamiang dan mengubah
                    kesehatan banyak keluarga. Akibatnya, sebagian warga tinggal
                    di hunian sementara (huntara) sambil menata kembali
                    kehidupan secara bertahap.
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="w-8 h-8 rounded-full bg-[#213F9A] text-white flex items-center justify-center text-lg leading-none">
                    ›
                  </button>
                </div>
              </div>
            </div>

            {/* 4 kartu kecil */}
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {/* Kartu 1 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
                <div className="h-36 bg-gray-400 flex-shrink-0" />
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#02A6E0] font-semibold text-xs">
                      Aksi
                    </span>
                    <span className="text-gray-400 text-xs">15 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Qurban di Era Digital: Manfaat Lebih Luas hingga Pelosok
                    Negeri
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Sahabat Inisiator, berqurban bukan sekadar ibadah tahunan,
                    melainkan juga cara nyata berbagi langsung ke lokasi
                    pelosok.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#213F9A] text-white flex items-center justify-center text-sm leading-none">
                      ›
                    </button>
                  </div>
                </div>
              </div>

              {/* Kartu 2 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
                <div className="h-36 bg-gray-400 flex-shrink-0" />
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#02A6E0] font-semibold text-xs">
                      Aksi
                    </span>
                    <span className="text-gray-400 text-xs">15 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Hunian Sementara dan Air Bersih Dukung Warga Aceh Utara
                    Menata Kembali
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Banjir yang melanda wilayah Sumatera pada akhir November
                    2025 membawa dampak serius bagi ribuan warga.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#213F9A] text-white flex items-center justify-center text-sm leading-none">
                      ›
                    </button>
                  </div>
                </div>
              </div>

              {/* Kartu 3 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
                <div className="h-36 bg-gray-400 flex-shrink-0" />
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#02A6E0] font-semibold text-xs">
                      Aksi
                    </span>
                    <span className="text-gray-400 text-xs">14 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Akses Protein Belum Merata, Berikut 5 Wilayah dengan
                    Konsumsi Daging Terendah di Indonesia
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Pemerataan gizi masih menjadi pekerjaan rumah besar bagi
                    Indonesia, khususnya soal akses protein hewani.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#213F9A] text-white flex items-center justify-center text-sm leading-none">
                      ›
                    </button>
                  </div>
                </div>
              </div>

              {/* Kartu 4 */}
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col">
                <div className="h-36 bg-gray-400 flex-shrink-0" />
                <div className="p-3 flex flex-col flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#02A6E0] font-semibold text-xs">
                      Berita
                    </span>
                    <span className="text-gray-400 text-xs">14 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Makna Qurban dan Rumah Singgah: Tanggapan Sosial Saat Ini
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Menjelang Iduladha, kita bisa memperkuat partisipasi di
                    berbagai program qurban yang menjangkau daerah terpencil.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#213F9A] text-white flex items-center justify-center text-sm leading-none">
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* bottom */}
        <section>
          {/* kotak pertama */}
          <div className="w-full bg-slate-200 px-4 sm:px-10 lg:px-36 py-6 md:h-32 md:py-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <a
              href="#"
              className="py-2 px-3 bg-[#278dcd] text-white rounded-xl self-center text-lg font-bold"
            >
              DONASI SEKARANG
            </a>

            <h2 className="text-xl font-bold text-[#278dcd] text-center">
              Sahabat Inisiator <br /> Butuh Bantuan?
            </h2>

            <div className="flex flex-col items-center gap-1">
              <h2 className="text-xl font-bold text-[#278dcd] text-center">
                Telp/Whatsapp
              </h2>
              <a
                href="https://wa.me/6285745992420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-[#25D366] transition-colors duration-200"
              >
                {/* WhatsApp icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-[#25D366]"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-base font-medium">+62-857-4599-2420</span>
              </a>
            </div>

            <div className="flex flex-col items-center gap-1">
              <h2 className="text-xl font-bold text-[#278dcd] text-center">
                Email
              </h2>
              <a
                href="mailto:mail@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-[#278dcd] transition-colors duration-200"
              >
                {/* Email icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#278dcd]"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-base font-medium">mail@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

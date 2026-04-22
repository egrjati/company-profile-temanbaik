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

        {/* Benner */}
        <div className="w-full h-125 bg-[#213F9A] flex items-center justify-center p-4 mt-10">
          <p className="text-white font-bold text-lg">Benner</p>
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

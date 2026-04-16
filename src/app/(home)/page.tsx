import BerbagiMengubahKehidupan from "@/components/ui/hightlight-program";
import ScrollIndicator from "@/components/ui/scroll-indicator";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="w-full h-150 bg-black relative">
        {/* Scroll indicator — center-x, sedikit dari bawah */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </header>

      {/* Main Content */}
      <main>
        <h1 className=" mt-16 text-center text-black font-bold text-3xl">
          Program Kami
        </h1>

        {/* hightlight Program */}
        <BerbagiMengubahKehidupan />

        {/* Benner */}
        <div className="w-full h-125 bg-gray-300 flex items-center justify-center p-4 mt-10">
          <p className="text-black font-bold text-lg">Benner</p>
        </div>

        {/* Mitra */}
        <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">

            {/* Heading */}
            <div className="text-center mb-12">
              <p className="text-[#278dcd] font-semibold text-sm uppercase tracking-widest mb-2">
                Jaringan Kami
              </p>
              <h2 className="text-gray-800 font-bold text-3xl mb-3">Mitra Kami</h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Bersama mitra terpercaya, kami terus bergerak mewujudkan kebaikan yang nyata.
              </p>
              <div className="w-12 h-1 bg-[#278dcd] mx-auto mt-4 rounded-full" />
            </div>

            {/* Grid logo mitra */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
              {Array.from({ length: 24 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm h-20 flex items-center justify-center hover:shadow-md hover:border-[#278dcd]/40 hover:scale-105 transition-all duration-300 cursor-pointer group"
                >
                  {/* Placeholder logo — ganti dengan <Image> saat aset siap */}
                  <div className="w-16 h-8 bg-gray-200 rounded group-hover:bg-[#278dcd]/10 transition-colors duration-300" />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Berita */}
        <section className="mb-10">
          <div className="w-full py-8 px-4 sm:px-8 lg:px-16">
            <h2 className="text-[#278dcd] text-center font-bold text-3xl mb-6">
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
                    <span className="text-[#278dcd] font-semibold text-sm">Berita</span>
                    <span className="text-gray-400 text-sm">16 Apr 2026</span>
                  </div>
                  <h3 className="text-gray-800 font-bold text-xl mb-3 leading-snug">
                    Perkuat Pengelolaan Huntara di Aceh Tamiang, Langkah Bersama Jaga Kehidupan Penyintas
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Banjir melanda sejumlah wilayah di Aceh Tamiang dan mengubah kesehatan banyak keluarga.
                    Akibatnya, sebagian warga tinggal di hunian sementara (huntara) sambil menata kembali
                    kehidupan secara bertahap.
                  </p>
                </div>
                <div className="flex justify-end mt-4">
                  <button className="w-8 h-8 rounded-full bg-[#278dcd] text-white flex items-center justify-center text-lg leading-none">
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
                    <span className="text-[#278dcd] font-semibold text-xs">Aksi</span>
                    <span className="text-gray-400 text-xs">15 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Qurban di Era Digital: Manfaat Lebih Luas hingga Pelosok Negeri
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Sahabat Inisiator, berqurban bukan sekadar ibadah tahunan, melainkan juga cara nyata berbagi langsung ke lokasi pelosok.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#278dcd] text-white flex items-center justify-center text-sm leading-none">
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
                    <span className="text-[#278dcd] font-semibold text-xs">Aksi</span>
                    <span className="text-gray-400 text-xs">15 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Hunian Sementara dan Air Bersih Dukung Warga Aceh Utara Menata Kembali
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Banjir yang melanda wilayah Sumatera pada akhir November 2025 membawa dampak serius bagi ribuan warga.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#278dcd] text-white flex items-center justify-center text-sm leading-none">
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
                    <span className="text-[#278dcd] font-semibold text-xs">Aksi</span>
                    <span className="text-gray-400 text-xs">14 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Akses Protein Belum Merata, Berikut 5 Wilayah dengan Konsumsi Daging Terendah di Indonesia
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Pemerataan gizi masih menjadi pekerjaan rumah besar bagi Indonesia, khususnya soal akses protein hewani.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#278dcd] text-white flex items-center justify-center text-sm leading-none">
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
                    <span className="text-[#278dcd] font-semibold text-xs">Berita</span>
                    <span className="text-gray-400 text-xs">14 April 2026</span>
                  </div>
                  <h4 className="text-gray-800 font-bold text-sm leading-snug mb-2">
                    Makna Qurban dan Rumah Singgah: Tanggapan Sosial Saat Ini
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed flex-1">
                    Menjelang Iduladha, kita bisa memperkuat partisipasi di berbagai program qurban yang menjangkau daerah terpencil.
                  </p>
                  <div className="flex justify-end mt-2">
                    <button className="w-6 h-6 rounded-full bg-[#278dcd] text-white flex items-center justify-center text-sm leading-none">
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

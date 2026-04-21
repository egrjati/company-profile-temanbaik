const programs = [
  {
    seed: "program-bencana",
    title: "Bantuan Darurat Bencana Alam",
    description:
      "Respons cepat ke lokasi bencana dengan distribusi logistik, hunian sementara, dan pendampingan pemulihan jangka panjang bagi para penyintas.",
  },
  {
    seed: "program-pendidikan",
    title: "Beasiswa & Perlengkapan Belajar",
    description:
      "Memastikan anak-anak dari keluarga kurang mampu tetap bersekolah dengan dukungan beasiswa dan perlengkapan pendidikan.",
  },
  {
    seed: "program-kesehatan",
    title: "Layanan Kesehatan Gratis",
    description:
      "Klinik keliling dan bakti sosial menjangkau masyarakat di wilayah terpencil yang selama ini minim akses layanan medis.",
  },
  {
    seed: "program-ekonomi",
    title: "Pemberdayaan Usaha Mikro",
    description:
      "Modal usaha, pelatihan keterampilan, dan pendampingan untuk memandirikan keluarga prasejahtera secara ekonomi.",
  },
  {
    seed: "program-air",
    title: "Air Bersih & Sanitasi",
    description:
      "Pembangunan sumur bor dan instalasi penyaring air untuk desa-desa yang belum mendapat akses air bersih yang layak.",
  },
];

type Program = (typeof programs)[number];

function ProgramRow({
  program,
  reverse,
}: {
  program: Program;
  reverse: boolean;
}) {
  return (
    <div>
      <div
        className={`max-w-5xl mx-auto px-4 flex flex-col items-end ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        {/* Teks card — putih, lebih pendek, rata bawah */}
        <div className="w-full md:w-[44%] flex-shrink-0 bg-white px-10 py-14 text-center mb-0 md:mb-10">
          <h2 className="font-serif text-2xl md:text-3xl text-gray-800 mb-5 leading-snug">
            {program.title}
          </h2>
          <p className="font-serif text-sm text-gray-500 leading-relaxed mb-8">
            {program.description}
          </p>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.2em] text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Pelajari Lebih &rsaquo;
          </a>
        </div>

        {/* Gambar — lebih tinggi, dimulai dari atas section (via -mt) */}
        <div className="w-full md:flex-1 h-72 md:h-[420px] md:-mt-10 overflow-hidden">
          <img
            src={`https://picsum.photos/seed/${program.seed}/900/600`}
            alt={program.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProgramPage() {
  return (
    <section className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full relative py-36 px-4 overflow-hidden">
        <img
          src="https://picsum.photos/seed/temanbaik/1600/700"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0f172a]/75" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <p className="text-[#278dcd] text-sm font-semibold uppercase tracking-widest mb-3">
            Apa yang Kami Lakukan
          </p>
          <h1 className="text-white font-bold text-4xl md:text-5xl leading-tight mb-4">
            Program Teman Baik
          </h1>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
            Setiap program dirancang untuk menyentuh langsung kehidupan mereka
            yang membutuhkan — nyata, terukur, dan berkelanjutan.
          </p>
        </div>
      </div>

      {/* Who We Are style section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl text-gray-800 mb-6 tracking-wide">
            Program Kami
          </h2>
          <p className="font-serif text-base text-gray-500 leading-relaxed mb-10">
            Teman Baik hadir dengan berbagai program nyata yang menyentuh
            langsung kehidupan masyarakat yang membutuhkan — mulai dari bantuan
            bencana, pendidikan anak, pemberdayaan ekonomi, hingga layanan
            kesehatan gratis di pelosok negeri.
          </p>
        </div>
      </section>

      {/* Alternating Program Rows */}
      <div id="program-list" className="bg-[#f0ebe2] py-10 space-y-20">
        {programs.map((program, index) => (
          <ProgramRow
            key={program.title}
            program={program}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

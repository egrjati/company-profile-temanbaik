export default function Footer() {
  return (
    <footer className="w-full">
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

      {/* kotak kedua */}
      <div className="w-full bg-[#213f9a] px-4 sm:px-10 lg:px-14 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-white">
          {/* Kolom 1: Lokasi Kami */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
              LOKASI KAMI
            </h3>

            <p className="font-semibold text-sm mb-1">Kantor Pusat</p>
            <p className="text-xs text-blue-100 leading-relaxed mb-4">
              Jl. Raya Condet No.27-G
              <br />
              Kelurahan Batu Ampar
              <br />
              Kecamatan Kramat Jati Kota Jakarta Timur
              <br />
              Daerah Khusus Jakarta 13520
            </p>

            <p className="font-semibold text-sm mb-1">Kantor Operasional</p>
            <p className="text-xs text-blue-100 leading-relaxed mb-4">
              Jl. Anggrek No. 97
              <br />
              Kelurahan Cisalak Pasar
              <br />
              Kecamatan Cimanggis Kota Depok
              <br />
              Jawa Barat. 16452
            </p>

            <p className="text-xs text-blue-100 leading-relaxed">
              Phone: (021) 21287213
              <br />
              Fax: (021) 87780013
              <br />
              WhatsApp: +62 812 8080 4561
              <br />
              <span className="underline cursor-pointer">
                Email Human Initiative
              </span>
            </p>
            <p className="text-xs text-blue-100 mt-2">
              NPWP : 01.945.505.4-005.000
            </p>
          </div>

          {/* Kolom 2: Bergabung */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
              BERGABUNG
            </h3>
            <ul className="space-y-2 text-xs text-blue-100">
              <li className="hover:text-white cursor-pointer">Lowongan</li>
              <li className="hover:text-white cursor-pointer">Jadi Relawan</li>
              <li className="hover:text-white cursor-pointer">Mitra Kami</li>
              <li className="hover:text-white cursor-pointer">
                Ajukan Program
              </li>
            </ul>
          </div>

          {/* Kolom 3: Donasi */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
              DONASI
            </h3>
            <ul className="space-y-2 text-xs text-blue-100">
              <li className="hover:text-white cursor-pointer">
                Konfirmasi Donasi
              </li>
              <li className="hover:text-white cursor-pointer">
                Nomor Rekening
              </li>
            </ul>
          </div>

          {/* Kolom 4: Informasi */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
              INFORMASI
            </h3>
            <ul className="space-y-2 text-xs text-blue-100">
              <li className="hover:text-white cursor-pointer">
                Prakiraan Cuaca
              </li>
              <li className="hover:text-white cursor-pointer">
                Nomor Telepon Darurat
              </li>
            </ul>
          </div>

          {/* Kolom 5: Informasi Lain */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wide mb-3">
              INFORMASI LAIN
            </h3>
            <ul className="space-y-2 text-xs text-blue-100">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">
                Syarat dan Ketentuan
              </li>
              <li className="hover:text-white cursor-pointer">
                Kebijakan Privasi
              </li>
              <li className="hover:text-white cursor-pointer">
                Whistleblowing HI
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 border-t border-blue-400 pt-6">
          <p className="text-xs text-blue-100 italic leading-relaxed max-w-4xl">
            "Human Initiative berkomitmen menerapkan Sistem Manajemen Anti
            Penyuapan sehingga tidak membolehkan segala bentuk penyuapan dan
            gratifikasi. Human Initiative tidak akan mendukung atau menyediakan
            dana/material untuk individu maupun organisasi yang dikenal
            menganjurkan, mendukung, atau terlibat dalam kegiatan yang melanggar
            hukum, kekerasan, pencucian uang ataupun terorisme."
          </p>
        </div>
      </div>
      {/* kotak ketiga */}
      <div className="w-full bg-[#01a6e0] px-4 sm:px-10 lg:px-32 py-4 md:h-14 md:py-0 text-white flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">
        <p>© 2017 - 2020 Teman Baik. All rights reserved</p>

        {/* sosmed facebook youtube instagram */}
        <div className="flex gap-4">
          <a
            href="#"
            aria-label="Telegram"
            className="w-9 h-9 rounded-lg bg-white shadow-sm border-2 border-[#278dcd] flex items-center justify-center text-zinc-400 hover:text-[#2AABEE] hover:border-[#2AABEE] hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-lg bg-white shadow-sm border-2 border-[#278dcd] flex items-center justify-center text-zinc-400 hover:text-[#0077b5] hover:border-[#0077b5] hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="w-9 h-9 rounded-lg bg-white shadow-sm border-2 border-[#278dcd] flex items-center justify-center text-zinc-400 hover:text-[#FF0000] hover:border-[#FF0000] hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="w-9 h-9 rounded-lg bg-white shadow-sm border-2 border-[#278dcd] flex items-center justify-center text-zinc-400 hover:text-[#1877F2] hover:border-[#1877F2] hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="w-9 h-9 rounded-lg bg-white shadow-sm border-2 border-[#278dcd] flex items-center justify-center text-zinc-400 hover:text-[#E1306C] hover:border-[#E1306C] hover:shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

type Album = {
  id: number;
  title: string;
  date: string;
  description: string;
  coverSeed: string;
  photoSeeds: string[];
};

const albums: Album[] = [
  {
    id: 1,
    title: "Penyaluran di Aceh",
    date: "12 Januari 2025",
    description: "Bantuan darurat untuk 500 keluarga terdampak banjir di Aceh Tamiang",
    coverSeed: "aceh-cover",
    photoSeeds: ["aceh-1", "aceh-2", "aceh-3", "aceh-4", "aceh-5", "aceh-6"],
  },
  {
    id: 2,
    title: "Bantuan Banjir Jakarta",
    date: "3 Maret 2025",
    description: "Distribusi logistik dan sembako untuk warga terdampak banjir Jakarta",
    coverSeed: "jakarta-cover",
    photoSeeds: ["jakarta-1", "jakarta-2", "jakarta-3", "jakarta-4", "jakarta-5", "jakarta-6"],
  },
  {
    id: 3,
    title: "Donasi Pendidikan Bandung",
    date: "15 April 2025",
    description: "Beasiswa dan perlengkapan sekolah untuk 200 siswa kurang mampu di Bandung",
    coverSeed: "bandung-cover",
    photoSeeds: ["bandung-1", "bandung-2", "bandung-3", "bandung-4", "bandung-5", "bandung-6"],
  },
  {
    id: 4,
    title: "Santunan Anak Yatim Surabaya",
    date: "20 Mei 2025",
    description: "Santunan bulanan dan paket kebutuhan untuk 150 anak yatim di Surabaya",
    coverSeed: "surabaya-cover",
    photoSeeds: ["surabaya-1", "surabaya-2", "surabaya-3", "surabaya-4", "surabaya-5", "surabaya-6"],
  },
  {
    id: 5,
    title: "Bantuan Gempa Lombok",
    date: "5 Juni 2025",
    description: "Pendirian tenda darurat dan distribusi logistik pasca gempa Lombok",
    coverSeed: "lombok-cover",
    photoSeeds: ["lombok-1", "lombok-2", "lombok-3", "lombok-4", "lombok-5", "lombok-6"],
  },
  {
    id: 6,
    title: "Program Air Bersih NTT",
    date: "22 Juli 2025",
    description: "Pembangunan sumur bor dan instalasi penyaring air untuk desa terpencil NTT",
    coverSeed: "ntt-cover",
    photoSeeds: ["ntt-1", "ntt-2", "ntt-3", "ntt-4", "ntt-5", "ntt-6"],
  },
  {
    id: 7,
    title: "Berbagi Ramadhan Yogyakarta",
    date: "10 Maret 2025",
    description: "Buka puasa bersama dan pembagian paket sembako Ramadhan di Yogyakarta",
    coverSeed: "yogya-cover",
    photoSeeds: ["yogya-1", "yogya-2", "yogya-3", "yogya-4", "yogya-5", "yogya-6"],
  },
  {
    id: 8,
    title: "Bantuan Pangan Papua",
    date: "8 Agustus 2025",
    description: "Program ketahanan pangan dan distribusi bahan makanan pokok di pedalaman Papua",
    coverSeed: "papua-cover",
    photoSeeds: ["papua-1", "papua-2", "papua-3", "papua-4", "papua-5", "papua-6"],
  },
  {
    id: 9,
    title: "Renovasi Masjid Makassar",
    date: "14 September 2025",
    description: "Renovasi dan perbaikan fasilitas masjid di wilayah pesisir Makassar",
    coverSeed: "makassar-cover",
    photoSeeds: ["makassar-1", "makassar-2", "makassar-3", "makassar-4", "makassar-5", "makassar-6"],
  },
  {
    id: 10,
    title: "Peduli Lansia Semarang",
    date: "2 Oktober 2025",
    description: "Layanan kesehatan gratis dan pemberian paket nutrisi untuk lansia Semarang",
    coverSeed: "semarang-cover",
    photoSeeds: ["semarang-1", "semarang-2", "semarang-3", "semarang-4", "semarang-5", "semarang-6"],
  },
];

function picsumUrl(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

// ─── Lightbox ──────────────────────────────────────────────────────────────

type LightboxProps = {
  photos: string[];
  initialIndex: number;
  onClose: () => void;
};

function Lightbox({ photos, initialIndex, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(initialIndex);

  const goPrev = useCallback(() => setCurrent((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
  const goNext = useCallback(() => setCurrent((i) => (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goPrev, goNext, onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Tutup
        </button>

        {/* Image */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
          <Image
            src={photos[current]}
            alt={`Foto ${current + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-6">
          <button
            onClick={goPrev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-white/60 text-sm tabular-nums">
            {current + 1} / {photos.length}
          </span>

          <button
            onClick={goNext}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-2 mt-4 overflow-x-auto py-1 max-w-full">
          {photos.map((src, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`relative shrink-0 w-14 h-14 rounded-lg overflow-hidden transition-all ${
                i === current ? "ring-2 ring-white scale-105" : "opacity-50 hover:opacity-80"
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="56px" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Album Modal ───────────────────────────────────────────────────────────

type AlbumModalProps = {
  album: Album;
  onClose: () => void;
};

function AlbumModal({ album, onClose }: AlbumModalProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const lightboxPhotos = album.photoSeeds.map((s) => picsumUrl(s, 1200, 800));

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl w-full sm:max-w-2xl max-h-[92dvh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag handle (mobile) */}
          <div className="sm:hidden flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 bg-gray-200 rounded-full" />
          </div>

          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-start justify-between gap-4">
            <div>
              <h2 className="font-bold text-gray-800 text-lg leading-tight">{album.title}</h2>
              <p className="text-[#278dcd] text-xs font-medium mt-0.5">{album.date}</p>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">{album.description}</p>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Photo count badge */}
          <div className="px-6 py-3 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#278dcd]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="text-gray-500 text-sm">{album.photoSeeds.length} foto dokumentasi</span>
          </div>

          {/* Photo grid */}
          <div className="overflow-y-auto flex-1 px-6 pb-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {album.photoSeeds.map((seed, i) => (
                <button
                  key={seed}
                  onClick={() => setLightboxIndex(i)}
                  className="group relative aspect-square rounded-xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#278dcd]"
                >
                  <Image
                    src={picsumUrl(seed, 400, 400)}
                    alt={`${album.title} foto ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, 200px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          photos={lightboxPhotos}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

// ─── Album Card ────────────────────────────────────────────────────────────

function AlbumCard({ album, onClick }: { album: Album; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#278dcd]"
    >
      <div className="relative aspect-3/4 overflow-hidden">
        <Image
          src={picsumUrl(album.coverSeed, 400, 533)}
          alt={album.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />

        {/* Photo count badge */}
        <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs font-semibold text-gray-700 flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          {album.photoSeeds.length}
        </div>

        {/* Title + date */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="text-white font-bold text-xs sm:text-sm leading-snug line-clamp-2">
            {album.title}
          </h3>
          <p className="text-white/65 text-xs mt-0.5">{album.date}</p>
        </div>
      </div>
    </button>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function GalleryPage() {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-100 py-14 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#278dcd] font-semibold text-xs uppercase tracking-widest mb-3">
            Transparansi &amp; Dampak
          </p>
          <h1 className="text-gray-800 font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Galeri Penyaluran Bantuan
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Dokumentasi kegiatan nyata dari setiap donasi yang telah disalurkan
          </p>
          <div className="w-12 h-1 bg-[#278dcd] mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center gap-8 text-center">
          <div>
            <p className="text-gray-800 font-bold text-xl">{albums.length}</p>
            <p className="text-gray-400 text-xs">Album Kegiatan</p>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div>
            <p className="text-gray-800 font-bold text-xl">
              {albums.reduce((sum, a) => sum + a.photoSeeds.length, 0)}
            </p>
            <p className="text-gray-400 text-xs">Total Foto</p>
          </div>
          <div className="w-px h-8 bg-gray-100" />
          <div>
            <p className="text-gray-800 font-bold text-xl">10</p>
            <p className="text-gray-400 text-xs">Wilayah</p>
          </div>
        </div>
      </div>

      {/* Album grid */}
      <section className="max-w-6xl mx-auto px-4 py-10 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {albums.map((album) => (
            <AlbumCard key={album.id} album={album} onClick={() => setSelectedAlbum(album)} />
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedAlbum && (
        <AlbumModal album={selectedAlbum} onClose={() => setSelectedAlbum(null)} />
      )}
    </div>
  );
}

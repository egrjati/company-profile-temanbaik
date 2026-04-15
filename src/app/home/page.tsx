import Navbar from "@/components/layouts/navbar";
import BerbagiMengubahKehidupan from "@/components/ui/hightlight-program";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-white flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* Header */}
      <header className="w-full h-[500px] bg-black"></header>

      {/* Main Content */}
      <main>
        <h1 className=" mt-16 text-center text-black font-bold text-3xl">
          Program Kami
        </h1>

        {/* hightlight Program */}
        <BerbagiMengubahKehidupan />

        {/* Benner */}
        <div className="w-full h-[500px] bg-gray-300 flex items-center justify-center p-4 mt-10">
          <p className="text-black font-bold text-lg">Benner</p>
        </div>

        {/* Mitra */}
        <h1 className=" mt-10 text-center text-black font-bold text-2xl">
          Mitra Kami
        </h1>
        {/* Grid of Partner Logos */}
        <div className="grid grid-cols-10 gap-x-4 gap-y-12 mt-6 px-16 mb-20">
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
          <div className="h-20 w-24 bg-amber-300"></div>
        </div>
      </main>
    </section>
  );
}

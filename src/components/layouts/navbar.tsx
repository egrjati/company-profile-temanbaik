export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-white text-black flex items-center justify-between px-14">
      <div className="text-xl font-bold">TEMAN BAIK</div>
      <div className="flex space-x-4 justify-center items-center">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
        <a href="#" className="hover:text-gray-300 py-1 px-4 bg-blue-400 text-white rounded-lg">Donasi</a>
      </div>
    </nav>
  );
}

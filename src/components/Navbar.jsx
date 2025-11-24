import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi2"; // <- updated

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 flex justify-between items-center rounded-b-2xl transition-all duration-300
        ${scrolled ? "bg-gray-800 shadow-xl" : "bg-gray-900 shadow-lg"}`}
    >
      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Ochami.Dev
      </h1>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 text-gray-300 font-medium">
        <Link to="/" className="transition-colors duration-200 hover:text-blue-400">Home</Link>
        <Link to="/about" className="transition-colors duration-200 hover:text-blue-400">About</Link>
        <Link to="/projects" className="transition-colors duration-200 hover:text-blue-400">Projects</Link>
        <Link to="/contact" className="transition-colors duration-200 hover:text-blue-400">Contact</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <HiX className="w-6 h-6 text-gray-300 transition-transform duration-200" />
          ) : (
            <HiMenu className="w-6 h-6 text-gray-300 transition-transform duration-200" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-gray-900 shadow-lg flex flex-col items-center py-4 space-y-4 md:hidden transition-all duration-300 ease-out
        ${menuOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}
      >
        <Link onClick={() => setMenuOpen(false)} to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Home</Link>
        <Link onClick={() => setMenuOpen(false)} to="/about" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">About</Link>
        <Link onClick={() => setMenuOpen(false)} to="/projects" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Projects</Link>
        <Link onClick={() => setMenuOpen(false)} to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors duration-200">Contact</Link>
      </div>
    </nav>
  );
}
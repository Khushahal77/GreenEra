import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-8 py-4 bg-green-800 text-white"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000 }}
    >
      <h1 className="text-2xl font-bold">GreenEra</h1>

      <ul className="hidden md:flex gap-6">
        <li><a href="#home" className="hover:text-green-300">Home</a></li>
        <li><a href="#about" className="hover:text-green-300">About</a></li>
        <li><a href="#services" className="hover:text-green-300">Services</a></li>
        <li><a href="#working" className="hover:text-green-300">Working</a></li>
        <li><a href="#contact" className="hover:text-green-300">Contact</a></li>
      </ul>

      <Link to="/login" className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600">
        Login
      </Link>
    </nav>
  );
}

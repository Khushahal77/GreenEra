import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getSavedTheme, toggleTheme, applyTheme, getInitialTheme } from "../utils/theme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  // Initialize theme from saved value or OS preference
  useEffect(() => {
    const saved = getSavedTheme();
    const initial = saved || getInitialTheme();
    setDark(initial === "dark");
    applyTheme(initial);
  }, []);

  return (
    <header className="bg-white shadow-lg p-4 md:p-6 rounded-b-3xl dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <nav className="container mx-auto flex justify-between items-center">
        
        {/* LOGO */}
        <Link to="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
          </svg>

          <span className="font-bold text-xl text-green-700 dark:text-green-400">
            GreenEra
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
          <li><Link to="/" className="hover:text-green-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-green-500">About</Link></li>
          <li><Link to="/solutions" className="hover:text-green-500">Solutions</Link></li>
          <li><Link to="/impact" className="hover:text-green-500">Impact</Link></li>
          <li><Link to="/profile" className="hover:text-green-500">Profile</Link></li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center space-x-4">
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => {
              const next = toggleTheme();
              setDark(next === 'dark');
            }}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white transition"
            aria-label="Toggle dark mode"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          {/* MOBILE MENU */}
          <button
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

        </div>
      </nav>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-800 mt-4 p-4 rounded-xl shadow-lg">
          <ul className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/solutions" onClick={() => setOpen(false)}>Solutions</Link></li>
            <li><Link to="/impact" onClick={() => setOpen(false)}>Impact</Link></li>
            <li><Link to="/profile" onClick={() => setOpen(false)}>Profile</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}

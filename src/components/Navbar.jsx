import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Prevent multiple script additions
    if (!document.querySelector("script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']")) {
      const addScript = document.createElement("script");
      addScript.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      document.body.appendChild(addScript);
    }
    // Delay initialization to avoid conflicts
    setTimeout(() => {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en", // Default language
            includedLanguages: "hi,mr,ta,te,bn,gu,pa,kn,ml,en", // Indian languages
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          "google_translate_element"
        );
      };
    }, 100); // Delay by 500ms
  }, []);

  return (
    <nav className="bg-[#123524] w-full fixed top-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo and Agritech Text */}
        <div className="flex items-center">
          <Link to="/home" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="w-[50px] h-[50px]" />
            <span className="text-white font-bold ml-2 text-sm md:text-lg">
              Agritech
            </span>
          </Link>
        </div>
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          <Link to="/home">
            <li className="hover:text-yellow-300 transition">Home</li>
          </Link>
          <Link to="/hardware">
            <li className="hover:text-yellow-300 transition">Components</li>
          </Link>
          <Link to="/Monitoring">
            <li className="hover:text-yellow-300 transition">Farm Monitoring</li>
          </Link>
          <Link to="/weed-herbicide-guide">
            <li className="hover:text-yellow-300 transition">Herbicide Guide</li>
          </Link>
          <Link to="/govt-notification">
            <li className="hover:text-yellow-300 transition">Govt Notification</li>
          </Link>
        </ul>
        {/* Google Translate Element - Desktop */}
        <div className="hidden md:flex w-[120px] h-[30px] overflow-hidden border border-gray-300 rounded bg-white">
          <div id="google_translate_element"></div>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-800 text-white text-center py-3 space-y-2">
          <ul className="space-y-2">
            <Link to="/home" onClick={() => setMenuOpen(false)}>
              <li className="py-2 hover:bg-green-600">Home</li>
            </Link>
            <Link to="/hardware" onClick={() => setMenuOpen(false)}>
              <li className="py-2 hover:bg-green-600">Components</li>
            </Link>
            <Link to="/Monitoring" onClick={() => setMenuOpen(false)}>
              <li className="py-2 hover:bg-green-600">My Farm & Bot</li>
            </Link>
            <Link to="/weed-herbicide-guide" onClick={() => setMenuOpen(false)}>
              <li className="py-2 hover:bg-green-600">Herbicide Guide</li>
            </Link>
            <Link to="/govt-notification" onClick={() => setMenuOpen(false)}>
              <li className="py-2 hover:bg-green-600">Govt Notification</li>
            </Link>
          </ul>
          {/* Google Translate Element - Mobile */}
          <div className="w-full flex justify-center mt-4">
            <div className="w-[120px] h-[30px] overflow-hidden border border-gray-300 rounded bg-white">
              <div id="google_translate_element_mobile"></div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
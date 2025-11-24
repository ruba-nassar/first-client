// MobileMenu.jsx
import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const items = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "works", label: "WORKS" },
  { id: "contact", label: "CONTACT" },
];

export default function MobileMenu({ open, onClose, active, onNavClick }) {
  return (
    // full screen overlay
    <div
      className={`fixed inset-0 z-[9999] flex flex-col bg-white transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
      aria-hidden={!open}
    >
      {/* thin top social bar */}
      <div className="h-10 bg-[#d1b147] flex items-center px-4 text-sm">
        <div className="flex items-center gap-3">
          <a href="https://instagram.com/binbashar.water" target="_blank" rel="noreferrer" className="text-black">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-black">
            <FaFacebook />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="text-black">
            <FaTiktok />
          </a>
        </div>
      </div>

      {/* header with logo/title and close button */}
      <div className="px-4 py-3 bg-[#d1b147] flex items-center justify-between shadow-sm">
        <div className="font-bold text-lg text-black">binbashar.water</div>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 rounded-md bg-black/10 text-black"
        >
          <IoClose size={28} />
        </button>
      </div>

      {/* menu body */}
      <div className="flex-1 overflow-auto px-6 pt-6 pb-8">
        {/* Buttons list: right-aligned like screenshot */}
        <nav className="w-full">
          <ul className="flex flex-col gap-0">
            {items.map((item) => (
              <li key={item.id} className="border-b border-gray-200">
                <button
                  onClick={() => onNavClick && onNavClick(item.id)}
                  className={`w-full text-right py-6 text-2xl tracking-wide ${
                    active === item.id ? "text-[#d1b147] font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* contact lines */}
        <div className="mt-6 border-t border-gray-200 pt-6 text-center">
          <div className="text-base text-gray-700 flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm">77790894 _ 77710165 _ 77755602</span>
              <FaPhone className="text-gray-700" />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-sm">info@binbashar.com</span>
              <FaEnvelope className="text-gray-700" />
            </div>
          </div>

          {/* small social icons row */}
          <div className="mt-6 flex items-center justify-center gap-6 text-2xl">
            <a href="https://instagram.com/binbashar.water" target="_blank" rel="noreferrer">
              <FaInstagram className="text-gray-700" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-gray-700" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* powered-by / footer area */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">POWERED BY</p>
          <div className="mt-2">
            {/* If you have a local image logo, replace with <img src="/path" /> */}
            <div className="inline-block px-4 py-2 bg-white rounded-md shadow-sm">
              <span className="text-purple-600 font-bold">strikingly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

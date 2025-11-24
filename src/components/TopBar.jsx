// TopBar.jsx
import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

export default function TopBar() {
  return (
    <div
      className="w-full bg-[#c8a63b] text-black text-sm"
      style={{ height: 40, position: "fixed", top: 0, left: 0, zIndex: 60 }}
    >
      <div className="w-full px-4 h-full flex items-center gap-4">
        {/* hide full contact text on small screens and show only icons */}
        <div className="flex items-center gap-3 text-[14px]">
          <a className="opacity-90" href="https://www.instagram.com/binbashar.water" target="_blank" rel="noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a className="opacity-90" href="https://www.facebook.com/profile.php?id=61557126641217" target="_blank" rel="noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          <a className="opacity-90" href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK" target="_blank" rel="noreferrer" aria-label="TikTok">
            <FaTiktok />
          </a>

          {/* Contact details hidden on small screens */}
          <span className="hidden md:flex items-center gap-2 pl-4">
            info@binbashar.com <FaEnvelope />
          </span>

          <span className="hidden md:flex items-center gap-2 pl-4">
            77790894 _ 77710165 _ 77755602 <FaPhone />
          </span>
        </div>
      </div>
    </div>
  );
}

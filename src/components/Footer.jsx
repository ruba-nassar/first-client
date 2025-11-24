import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-16" dir="rtl">
      <div className="flex flex-col items-center justify-center space-y-10">

        {/* SOCIAL ICONS */}
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a href="https://www.instagram.com/binbashar.water" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61557126641217" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>
          <a href="https://www.tiktok.com/@binbashar50" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>
        </div>

        {/* EMAIL + PHONE - STACK ON MOBILE */}
        <div className="flex flex-col md:flex-row items-center md:space-x-4 rtl:md:space-x-reverse text-gray-300 text-sm space-y-3 md:space-y-0">

          {/* EMAIL */}
          <a
            href="mailto:info@binbashar.com"
            className="flex items-center gap-2 hover:text-[#b6912c] transition text-lg"
          >
            <FaEnvelope className="text-[#b6912c]" />
            info@binbashar.com
          </a>

          {/* SEPARATOR (only show on md and above) */}
          <span className="hidden md:block mx-3 text-[#b6912c]">|</span>

          {/* PHONE NUMBERS */}
          <div className="flex items-center gap-2 hover:text-[#b6912c] transition cursor-pointer text-lg">
            <FaPhone className="text-[#b6912c] text-" />
            77790894 – 77710165 – 77755602
          </div>
        </div>

        {/* COMPANY NAME */}
        <p className="text-white text-xl text-center leading-relaxed">
          شركة بن بشّار للمقاولات – الشركة الأولى والوحيدة في قطر
        </p>
      </div>
    </footer>
  );
}

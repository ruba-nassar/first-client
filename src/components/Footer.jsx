import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-20" dir="rtl">
      <div className="flex flex-col items-center justify-center space-y-8">

        {/* SOCIAL ICONS */}
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <a
            href="https://www.instagram.com/binbashar.water"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61557126641217"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>

          <a
            href="https://www.tiktok.com/@binbashar50"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>
        </div>

        {/* EMAIL + PHONE IN SAME LINE */}
        <div className="flex items-center space-x-4 rtl:space-x-reverse text-gray-300 text-sm">

          {/* EMAIL */}
          <a
            href="mailto:info@binbashar.com"
            className="flex items-center gap-2 hover:text-[#b6912c] transition"
          >
            <FaEnvelope className="text-[#b6912c]" />
            info@binbashar.com
          </a>

          {/* SEPARATOR */}
          <span className="mx-3 text-[#b6912c]">|</span>

          {/* PHONE NUMBERS */}
          <div className="flex items-center gap-2 hover:text-[#b6912c] transition cursor-pointer">
            <FaPhone className="text-[#b6912c]" />
            77790894 – 77710165 – 77755602
          </div>
        </div>

        {/* COMPANY NAME */}
        <p className="text-[#b6912c] text-sm text-center mt-4 leading-relaxed">
          شركة بن بشّار للمقاولات – الشركة الأولى والوحيدة في قطر
        </p>
      </div>
    </footer>
  );
}

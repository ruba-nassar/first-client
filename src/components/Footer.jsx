import React from "react";
import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-10" dir="rtl">
      <div className="flex flex-col items-center justify-center space-y-6">

        {/* SOCIAL ICONS */}
        <div className="flex space-x-6 rtl:space-x-reverse">
          <a href="https://www.instagram.com/binbashar.water?igsh=MWdod3Q5dncyMDE0Mg%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61557126641217" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>

          <a href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="text-[#b6912c] text-2xl hover:text-white transition" />
          </a>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="flex flex-col items-center space-y-2 text-sm text-gray-300">
          <a
            href="mailto:binbashar646@gmail.com"
            className="hover:text-[#b6912c] transition"
          >
           info@binbashar.com
          </a>

          <p className="hover:text-[#b6912c] transition cursor-pointer">
            77790894 - 77710165 - 77755602
          </p>
        </div>

        {/* COMPANY NAME */}
        <p className="text-[#b6912c] mt-4 text-center text-sm">
          شركة بن بشار للمقاولات – الشركة الأولى والوحيدة في قطر
        </p>
      </div>
    </footer>
  );
}

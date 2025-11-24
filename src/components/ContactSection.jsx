// ContactSection.jsx
import React from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaTiktok,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-[#f0f0f0]" dir="rtl" id="contact">
      {/* match WorksSection wrapper exactly so horizontal padding aligns */}
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16 text-black">تواصلوا معنا</h2>

        {/* icons row constrained to photo-grid width and spaced evenly */}
        <div
          className="
            w-full
            max-w-[1184px]   /* matches max-w-screen-xl minus px-6 left&right (1280 - 96 ~= 1184) */
            mx-auto
            flex
            items-center
            justify-between
            gap-6
            flex-nowrap
          "
          dir="ltr"
        >
          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaTiktok size={40} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">TikTok</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/binbashar.water"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaInstagram size={45} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Instagram</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61557126641217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaFacebook size={45} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Facebook</p>
          </a>

          {/* Email */}
          <a href="mailto:info@binbashar.com" className="flex flex-col items-center">
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaEnvelope size={40} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Email</p>
          </a>

          {/* Phone */}
          <a href="tel:97477755602" className="flex flex-col items-center">
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaPhoneAlt size={36} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Phone</p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/97477755602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaWhatsapp size={45} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">WhatsApp</p>
          </a>
        </div>
      </div>
    </section>
  );
}

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
      {/* keep same outer wrapper so horizontal padding matches WorksSection */}
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-16 text-black">تواصلوا معنا</h2>

        {/* === DESKTOP / LARGE: single row, no-wrap, spaced exactly as before ===
            visible on lg+ only; hidden on smaller screens
        */}
        <div
          className="hidden lg:flex
            w-full
            max-w-[1184px]
            mx-auto
            items-center
            justify-between
            gap-6
            flex-nowrap"
          dir="ltr"
        >
          <a
            href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaTiktok size={36} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">TikTok</p>
          </a>

          <a
            href="https://www.instagram.com/binbashar.water"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaInstagram size={36} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Instagram</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61557126641217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaFacebook size={36} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Facebook</p>
          </a>

          <a href="mailto:info@binbashar.com" className="flex flex-col items-center">
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaEnvelope size={36} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Email</p>
          </a>

          <a href="tel:97477755602" className="flex flex-col items-center">
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaPhoneAlt size={36} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">Phone</p>
          </a>

          <a
            href="https://wa.me/97477755602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-28 h-28 bg-black rounded-full flex items-center justify-center">
              <FaWhatsapp size={36} color="white" />
            </div>
            <p className="mt-3 text-base font-semibold">WhatsApp</p>
          </a>
        </div>

        {/* === MOBILE & TABLET: 3-column grid (shows on < lg) ===
               keeps icons visible, evenly spaced inside the page bounds.
               This will show on sm/md; lg hides it (desktop uses previous block).
        */}
        <div className="grid grid-cols-3 gap-6 lg:hidden max-w-lg mx-auto">
          <a
            href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <FaTiktok size={28} color="white" />
            </div>
            <p className="mt-3 text-sm font-semibold">TikTok</p>
          </a>

          <a
            href="https://www.instagram.com/binbashar.water"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <FaInstagram size={28} color="white" />
            </div>
            <p className="mt-3 text-sm font-semibold">Instagram</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61557126641217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <FaFacebook size={28} color="white" />
            </div>
            <p className="mt-3 text-sm font-semibold">Facebook</p>
          </a>

          <a href="mailto:info@binbashar.com" className="flex flex-col items-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <FaEnvelope size={28} color="white" />
            </div>
            <p className="mt-3 text-sm font-semibold">Email</p>
          </a>

          <a href="tel:97477755602" className="flex flex-col items-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <FaPhoneAlt size={28} color="white" />
            </div>
            <p className="mt-3 text-sm font-semibold">Phone</p>
          </a>

          <a
            href="https://wa.me/97477755602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
              <FaWhatsapp size={28} color="white" />
            </div>
            <p className="mt-3 text-sm font-semibold">WhatsApp</p>
          </a>
        </div>
      </div>
    </section>
  );
}

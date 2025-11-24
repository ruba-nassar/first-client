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
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-16 text-black">تواصلوا معنا</h2>

        {/* FLEX ROW — everything in one line */}
        <div className="flex flex-wrap justify-center gap-10 lg:gap-16">

          {/* WhatsApp */}
          <a
            href="https://wa.me/97477755602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <FaWhatsapp size={40} color="white" />
            </div>
            <p className="mt-3 text-lg font-semibold">WhatsApp</p>
          </a>

          {/* Phone */}
          <a href="tel:97477755602" className="flex flex-col items-center">
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <FaPhoneAlt size={40} color="white" />
            </div>
            <p className="mt-3 text-lg font-semibold">Phone</p>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <FaTiktok size={40} color="white" />
            </div>
            <p className="mt-3 text-lg font-semibold">TikTok</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/binbashar.water"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <FaInstagram size={40} color="white" />
            </div>
            <p className="mt-3 text-lg font-semibold">Instagram</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61557126641217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <FaFacebook size={40} color="white" />
            </div>
            <p className="mt-3 text-lg font-semibold">Facebook</p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@binbashar.com"
            className="flex flex-col items-center"
          >
            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center">
              <FaEnvelope size={40} color="white" />
            </div>
            <p className="mt-3 text-lg font-semibold">Email</p>
          </a>

        </div>
      </div>
    </section>
  );
}

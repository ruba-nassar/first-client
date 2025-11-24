import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaTiktok, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-[#f0f0f0]" dir="rtl" id="contact">
      <div className="max-w-screen-xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-16 text-black">تواصلوا معنا</h2>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 place-items-center">

          {/* WhatsApp */}
          <a
            href="https://wa.me/97477755602"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
              <FaWhatsapp size={60} color="white" />
            </div>
            <p className="mt-4 text-lg font-semibold">WhatsApp</p>
          </a>

          {/* Phone Call */}
          <a href="" className="flex flex-col items-center">
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
              <FaPhoneAlt size={60} color="white" />
            </div>
            <p className="mt-4 text-lg font-semibold">Phone</p>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
              <FaTiktok size={60} color="white" />
            </div>
            <p className="mt-4 text-lg font-semibold">TikTok</p>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/binbashar.water?igsh=MWdod3Q5dncyMDE0Mg%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
              <FaInstagram size={60} color="white" />
            </div>
            <p className="mt-4 text-lg font-semibold">Instagram</p>
          </a>

          {/* Email — SEND DIRECT EMAIL */}
          <a
            href="mailto:info@binbashar.com"
            className="flex flex-col items-center"
          >
            <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
              <FaEnvelope size={60} color="white" />
            </div>
            <p className="mt-4 text-lg font-semibold">Email</p>
          </a>

        </div>
      </div>
    </section>
  );
}

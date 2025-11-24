

function Star({ filled }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.383 2.408c-.785.57-1.84-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118l-3.386-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
  );
}

import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "  أحمد.م",
    text: "بيض الله وجهكم على الخدمة , استشارتكم و خبرتكم وفرت علي الوقت و المال و الجهد يعطيكم العافية",
      avatar: <FaUserCircle className="text-6xl text-[#d1b147]" />, // gold color
      rating: 5,
    },
    {
      id: 2,
      name: "سارة.ر",
    text: "تم إصلاح التسريب في جدار الغرفة شكرا على مجهودكم 🌷ً",
      avatar: <MdAccountCircle className="text-6xl text-[#d1b147]" />,
      rating: 4,
    },
    {
      id: 3,
      name: "علي.أ",
    text: "خبرة عالية ومواعيد دقيقة، يعطيكم ألف عافية ",
      avatar: <HiUserCircle className="text-6xl text-[#d1b147]" />,
      rating: 5,
    },
  ];
  function Star({ filled }) {
  return (
    <svg
      className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      viewBox="0 0 20 20"
      fill={filled ? "currentColor" : "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.383 2.408c-.785.57-1.84-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118l-3.386-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
  );
}

  return (
    <section className="bg-[#f0f0f0] py-20" id="reviews">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">آراء العملاء</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl shadow-md">
              
              <div className="flex justify-center mb-4">
                {item.avatar}
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-700 leading-7 mb-4">{item.text}</p>

              <div className="flex justify-center">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-xl" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

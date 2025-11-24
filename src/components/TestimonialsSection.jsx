import React from "react";
import { FaStar, FaUserCircle } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { HiUserCircle } from "react-icons/hi";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      name: "أحمد",
      text: "بيض الله وجهكم على الخدمة , استشارتكم و خبرتكم وفرت علي الوقت و المال و الجهد يعطيكم العافية",
      avatar: <FaUserCircle className="text-5xl md:text-6xl text-[#d1b147]" />,
      rating: 5,
    },
    {
      id: 2,
      name: "سارة",
      text: "تم إصلاح التسريب في جدار الغرفة شكرا على مجهودكم 🌷",
      avatar: <MdAccountCircle className="text-5xl md:text-6xl text-[#d1b147]" />,
      rating: 4,
    },
    {
      id: 3,
      name: "علي",
      text: "خبرة عالية ومواعيد دقيقة، يعطيكم ألف عافية",
      avatar: <HiUserCircle className="text-5xl md:text-6xl text-[#d1b147]" />,
      rating: 5,
    },
  ];

  return (
    <section className="bg-[#f0f0f0] py-20" id="reviews">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">آراء العملاء</h2>

        {/* one card per line ALWAYS */}
       <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
  {testimonials.map((item) => (
    <div
      key={item.id}
      className="
        bg-white 
        rounded-2xl 
        shadow-md 
        p-6 
        mx-auto
        w-[90%]          /* عرض أصغر بالموبايل */
        min-h-[260px]    /* يجعل جميع البوكسات نفس الارتفاع */
        flex 
        flex-col 
        items-center 
        justify-between
        text-center
      "
    >
      <div className="flex justify-center mb-3">
        {item.avatar}
      </div>

      <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

      <p className="text-gray-700 text-sm leading-6 mb-4">
        {item.text}
      </p>

      <div className="flex justify-center mb-2">
        {Array.from({ length: item.rating }).map((_, i) => (
          <FaStar key={i} className="text-yellow-500 text-lg" />
        ))}
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}

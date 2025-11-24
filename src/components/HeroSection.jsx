// HeroSection.jsx
import React from "react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-[70vh]
        bg-cover
        bg-center
        bg-no-repeat
        flex
        justify-end
        items-start
        pr-6 md:pr-20
      "
      style={{
        backgroundImage: "url('images/bg.png')",
        // use CSS variable --site-top-offset set by Header to avoid overlap
        paddingTop: "var(--site-top-offset, 152px)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="relative text-right text-white max-w-2xl py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">شركة بن بشّار للمقاولات</h1>
        <br/>

        <p className="text-xl md:text-3xl leading-relaxed">
          الشركة الأولى والوحيدة في قطر التي توفر خدمة الكشف عن تسريب المياه والرطوبة بأحدث الأجهزة  
            <span className="whitespace-nowrap">  بدون تكسير  </span>

        </p>
      </div>
    </section>
  );
}

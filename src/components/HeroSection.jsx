import React from "react";

export default function HeroSection() {
  return (
  <section id="home"
  className="
    relative 
    w-full 
    h-[90vh] 
    bg-cover 
    bg-center 
    bg-no-repeat 
    flex 
    justify-end 
    items-start
    pt-40   /* moves text down a controlled amount */
    pr-20
  "
  style={{ backgroundImage: "url('images/bg.png')"  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-30"></div>

  <div className="relative text-right text-white max-w-2xl">
    <h1 className="text-5xl font-bold mb-4">
      شركة بن بشّار للمقاولات
    </h1>
<br/>
    <p className="text-3xl leading-relaxed">
      الشركة الأولى والوحيدة في قطر التي توفر خدمة الكشف عن تسريب 
      المياه والرطوبة بأحدث الأجهزة بدون تكسير
    </p>
  </div>
</section>

  );
}

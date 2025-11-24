import React from "react";

const works = [
  {
    id: 4,
    src: "images/11.webp",
    title: "ضرر ناتج عن تسريب داخلي في السقف تم فحصه ومعالجته",
  },
  {
    id: 3,
    src: "images/22.webp",
    title: "أثناء الحفر تبين وجود ضرر قد يتحول إلى خطر إنشائي",
  },
  {
    id: 2,
    src: "images/33.webp",
    title: "انتقال رطوبة من الجدار نحو الخشب، تم إعادة تأهيله",
  },
  {
    id: 1,
    src: "images/44.webp",
    title: "تسريب حول النوافذ الخارجية تمت معالجته بالكامل",
  },
];

export default function WorksSection() {
  return (
    <section className="bg-[#f0f0f0] py-20" dir="rtl" id="works">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* ======== Title (fixed left) ======== */}
        <div className="mb-10 text-left" dir="ltr">
          <h2 className="text-5xl font-bold flex items-center gap-4">
            Our Latest Works :
          </h2>

          <p className="text-2xl text-black mt-2 font-bold">
            Leak Detection & Repair
          </p>
        </div>

        {/* ======== Responsive Grid ======== */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((w) => (
            <article key={w.id} className="flex flex-col items-center text-center">
              
              {/* Image */}
              <div className="w-full overflow-hidden rounded-sm shadow-sm bg-white">
                <img
                  src={w.src}
                  alt={w.title}
                  className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Title */}
              <p className="mt-3 text-[#b6912c] text-lg font-semibold leading-relaxed max-w-xs">
                {w.title}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

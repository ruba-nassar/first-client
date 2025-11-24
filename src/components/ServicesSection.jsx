// ServicesSection.jsx
import React from "react";

const services = [
  {
    id: 1,
    title: "كشف تسريب المياه والرطوبة",
    img: "images/img1.webp",
    text:
      "اكشتف مصدر التسرب قبل أن يتفاقم الضرر — نستخدم أحدث التقنيات لكشف تسربات المياه والرطوبة بدون تكسير. شركة بن بشار للمقاولات، الشركة الأولى والوحيدة في قطر.",
  },
  {
    id: 2,
    title: "الصيانة و الكشف على المباني",
    img: "images/build.webp",
    text:
      "تقييم حالة المبنى وضمان سلامته الإنشائية والفنية لاكتشاف العيوب الخفية مثل التشققات، الرطوبة، أو مشكلات العزل والتمديدات.",
  },
  {
    id: 3,
    title: "أعمال الكهرباء",
    img: "images/light.webp",
    text:
      "حلول كهربائية وميكانيكية متكاملة تشمل التمديدات، الإنارة، وأجهزة الأمان. تنفيذ بمعايير عالية تضمن السلامة، الكفاءة والاستمرارية.",
  },
  {
    id: 4,
    title: "أعمال الديكورات",
    img: "images/wall.webp",
    text:
      "تصميم وتنفيذ ديكورات حديثة تجمع بين الجمال والوظيفة وتُنفّذ بأعلى معايير الجودة لتلبية ذوق كل عميل بدقة واحترافية.",
  },
  {
    id: 5,
    title: "أعمال السباكة",
    img: "images/hand.webp",
    text:
      "نقدّم خدمات سباكة متكاملة تشمل كشف الأعطال وإصلاح التسريبات بسرعة واحتراف، بأدوات حديثة وخامات عالية الجودة.",
  },
  {
    id: 6,
    title: "إدارة المشاريع والمقاولات",
    img: "images/building.webp",
    text:
      "تخطيط وتنفيذ فعّال يضمن إنجاز المشروع بكفاءة عالية ضمن الوقت والميزانية، مع متابعة دقيقة لكل مرحلة لضمان جودة التنفيذ.",
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full py-20 bg-[#f0f0f0]" id="services">
      <div className="max-w-screen-xl mx-auto px-6">

        {/* MAIN SECTION TITLE */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-left text-black flex items-center gap-4">
            Services
            <span className="w-12 h-[3px] bg-black inline-block"></span>
            <span className="w-12 h-[3px] bg-black inline-block"></span>
          </h2>
        </div>

        {/* SERVICE BLOCKS */}
        <div className="space-y-20">
          {services.map((s) => (
            <div key={s.id}>

              {/* TITLE: centered, same visual start for all titles */}
              <h3 className="text-[#b6912c] text-3xl md:text-5xl font-semibold mb-8 mx-auto text-center md:max-w-[720px]">
                {s.title}
              </h3>

              {/* LAYOUT:
                  - md: two columns: left fixed image (300px), right flexible content
                  - paragraph inside right column centered horizontally with a wide max width
              */}
              <div
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-10 items-start"
                style={{ direction: "ltr" }}
              >
                {/* IMAGE column (left on desktop) */}
                <div className="order-2 md:order-1 flex justify-center md:justify-start">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-[300px] h-[240px] object-contain rounded-md"
                    loading="lazy"
                  />
                </div>

                {/* TEXT column (right on desktop) — centered inside this column */}
                <div
                  className="order-1 md:order-2 flex justify-center"
                  style={{ direction: "rtl" }}
                >
                  {/* key changes:
                        - text-center instead of text-justify/text-right to avoid blocky aligned lines
                        - text-black for color
                        - keep max-w to control wrapping
                        - keep mt spacing so it stays in the same vertical position
                  */}
                  <p
                    className="text-xl md:text-2xl font-semibold text-black leading-relaxed text-center max-w-[550px] mt-14 mr-56"
                    style={{ direction: "rtl" }}
                  >
                    {s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

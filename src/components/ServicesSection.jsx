// ServicesSection.jsx
import React from "react";

const services = [
  {
    id: 1,
    title: "كشف تسريب المياه والرطوبة",
    img: "images/img1.webp",
    text:
      "اكشتف مصدر التسرب قبل أن يتفاقم الضرر — نستخدم أحدث التقنيات لكشف تسربات المياه والرطوبة بدون تكسير. شركة بن بشّار للمقاولات، الشركة الأولى والوحيدة في قطر.",
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
      <div className="max-w-screen-xl mx-auto px-4 md:px-6">

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

              {/* Title: always centered */}
              <h3 className="text-[#b6912c] text-3xl md:text-5xl font-semibold mb-8 mx-auto text-center md:max-w-[720px]">
                {s.title}
              </h3>

              {/* Layout:
                  - mobile: single column (image then text)
                  - md+: two columns -> left: image (300px), right: centered text-column (fixed width)
                  This makes the paragraph appear centered on page while image stays left.
              */}
              <div
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 md:gap-10 items-start"
                style={{ direction: "ltr" }}
              >
                {/* IMAGE column (left on desktop) */}
                <div className="order-2 md:order-1 flex justify-center md:justify-start">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="w-48 h-40 md:w-[300px] md:h-[240px] object-contain rounded-md mx-auto"
                    loading="lazy"
                  />
                </div>

                {/* TEXT column (right on desktop) — centered block on md+ */}
                <div
                  className="order-1 md:order-2 flex justify-center"
                  style={{ direction: "rtl" }}
                >
                  <p
                    className="
                      text-base md:text-2xl
                      font-medium
                      text-black
                      leading-relaxed
                      text-center md:text-center
                      max-w-full md:max-w-[540px]
                      mt-6 md:mt-14
                      px-2 md:px-0
                      md:mr-64
                      "
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

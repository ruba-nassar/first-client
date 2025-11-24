import React from "react";

export default function ServicesSection() {
  return (
    <section className="w-full py-20  bg-[#f0f0f0] " id="services">
      <div className="max-w-screen-xl mx-auto   ">

        {/* SECTION TITLE */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-left text-black flex items-center gap-4 ">
            Services
            <span className="w-12 h-[3px] bg-black inline-block mt-3"></span>
                        <span className="w-12 h-[3px] bg-black inline-block mt-3"></span>

          </h2>
        </div>
<div 
  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
  style={{ direction: "ltr" }}
>
  {/* LEFT IMAGE */}
  <div className="flex justify-start ml-20">
    <img
      src="images/img1.webp"
      alt="device"
      className="w-[280px] h-auto object-contain"
    />
  </div>

  {/* RIGHT CENTERED TEXT */}
  <div 
    className="text-center mx-auto flex flex-col justify-center"
    style={{ direction: "rtl" }}
  >
    <h3 className="text-[#b6912c] text-5xl font-semibold mb-6">
      كشف تسريب المياه والرطوبة
    </h3>

    <p className="text-xl leading-8 text-black">
      اكشتف مصدر التسرب قبل أن يتفاقم الضرر — نستخدم أحدث التقنيات لكشف  
      تسربات المياه والرطوبة بدون تكسير <br />
      شركة بن بشار للمقاولات، الشركة الأولى والوحيدة في قطر
    </p>
  </div>
</div>

  {/* Divider */}
        <div className="border-t border-gray-300 max-w-xl mx-auto mb-10 mt-10" />

        {/* SERVICE BLOCK  2*/}
       <div 
  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
  style={{ direction: "ltr" }}
>
  {/* LEFT IMAGE */}
  <div className="flex justify-start ml-20">
    <img
      src="images/build.webp"
      alt="device"
      className="w-[280px] h-auto object-contain"
    />
  </div>

  {/* RIGHT CENTERED TEXT */}
  <div 
    className="text-center mx-auto flex flex-col justify-center"
    style={{ direction: "rtl" }}
  >
    <h3 className="text-[#b6912c] text-5xl font-semibold mb-6">
      الصيانة و الكشف على المباني
    </h3>

    <p className="text-xl leading-8 text-black">
      تقييم حالة المبنى وضمان سلامته الانشائية والفنية لاكتشاف العيوب <br/>
      الخفية مثل التشققات , الرطوبة , او مشكلات العزل والتمديدات
    </p>
  </div>
</div>
{/* Divider */}
        <div className="border-t border-gray-300 max-w-xl mx-auto mb-10 mt-10" />



  {/* SERVICE BLOCK  3*/}
       <div 
  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
  style={{ direction: "ltr" }}
>
  {/* LEFT IMAGE */}
  <div className="flex justify-start ml-20">
    <img
      src="images/light.webp"
      alt="device"
      className="w-[280px] h-auto object-contain"
    />
  </div>

  {/* RIGHT CENTERED TEXT */}
  <div 
    className="text-center mx-auto flex flex-col justify-center"
    style={{ direction: "rtl" }}
  >
    <h3 className="text-[#b6912c] text-5xl font-semibold mb-6">
أعمال الكهرباء 
    </h3>

    <p className="text-xl leading-8 text-black">
        حلول كهربائية وميكانيكية متكاملة تشمل
<strong>  التمديدات، الإنارة، وأجهزة الأمان.    </strong> 
تنفيذ بمعايير عالية تضمن السلامة، الكفاءة، والاستمرارية.<br/>
نلتزم بتقديم أعمال احترافية تعتمد على الدقة في التنفيذ، جودة المواد،  لضمان أعلى مستويات الأمان في كل مشروع.
    </p>
  </div>
</div>
{/* Divider */}
        <div className="border-t border-gray-300 max-w-xl mx-auto mb-10 mt-10" />



 {/* SERVICE BLOCK  4*/}
       <div 
  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
  style={{ direction: "ltr" }}
>
  {/* LEFT IMAGE */}
  <div className="flex justify-start ml-20">
    <img
      src="images/wall.webp"
      alt="device"
      className="w-[280px] h-auto object-contain"
    />
  </div>

  {/* RIGHT CENTERED TEXT */}
  <div 
    className="text-center mx-auto flex flex-col justify-center"
    style={{ direction: "rtl" }}
  >
    <h3 className="text-[#b6912c] text-5xl font-semibold mb-6">
أعمال الديكورات 
    </h3>

    <p className="text-xl leading-8 text-black">
      <strong>تصميم وتنفيذ ديكورات حديثة</strong> تجمع بين  <strong  >الجمال والوظيفة</strong>  وتُنفّذ بأعلى معايير الجودة لتلبية <strong>ذوق كل عميل</strong> بدقة واحترافية
واختيار المواد بعناية من <strong>أفضل الخامات العصرية</strong>
    </p>
  </div>
</div>
{/* Divider */}
        <div className="border-t border-gray-300 max-w-xl mx-auto mb-10 mt-10" />




{/* SERVICE BLOCK  5*/}
       <div 
  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
  style={{ direction: "ltr" }}
>
  {/* LEFT IMAGE */}
  <div className="flex justify-start ml-20">
    <img
      src="images/hand.webp"
      alt="device"
      className="w-[280px] h-auto object-contain"
    />
  </div>

  {/* RIGHT CENTERED TEXT */}
  <div 
    className="text-center mx-auto flex flex-col justify-center"
    style={{ direction: "rtl" }}
  >
    <h3 className="text-[#b6912c] text-5xl font-semibold mb-6">
أعمال السباكة
    </h3>

    <p className="text-xl leading-8 text-black">
      نقدّم خدمات سباكة متكاملة تشمل كشف الأعطال وإصلاح التسريبات بسرعة واحتراف. نعتمد على أدوات حديثة وخامات عالية الجودة لضمان عمل الأنظمة بكفاءة ومنع تكرار المشكلات، مع تنفيذ دقيق يضمن راحة وأمان العملاء

    </p>
  </div>
</div>
{/* Divider */}
        <div className="border-t border-gray-300 max-w-xl mx-auto mb-10 mt-10" />




{/* SERVICE BLOCK  6*/}
       <div 
  className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
  style={{ direction: "ltr" }}
>
  {/* LEFT IMAGE */}
  <div className="flex justify-start ml-20">
    <img
      src="images/building.webp"
      alt="device"
      className="w-[280px] h-auto object-contain"
    />
  </div>

  {/* RIGHT CENTERED TEXT */}
  <div 
    className="text-center mx-auto flex flex-col justify-center"
    style={{ direction: "rtl" }}
  >
    <h3 className="text-[#b6912c] text-5xl font-semibold mb-6">
إدارة المشاريع والمقاولات

    </h3>

    <p className="text-xl leading-8 text-black">
تخطيط وتنفيذ فعّال يضمن إنجاز المشروع بكفاءة عالية، ضمن الوقت والميزانية المحددة
<br/>
مع متابعة دقيقة لكل مرحلة لضمان جودة التنفيذ وتحقيق أهداف العميل بأعلى معايير الجودة

    </p>
  </div>
</div>
{/* Divider */}
        <div className="border-t border-gray-300 max-w-xl mx-auto mb-10 mt-10" />





      </div>
    </section>

    

    
  );
}

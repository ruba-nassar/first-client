import React from "react";
import { FaClock, FaClipboardList, FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section id="about" dir="rtl" className="bg-gray-100 text-gray-800">
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        {/* Heading */}
        <br/>
        <br/>
                <br/>

        <br/>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          الشركة الأولى والوحيدة في قطر
        </h2>
<br/>
        {/* Small icon (flag) */}
        <div className="flex justify-center mb-6">
          <img src="images/flag.webp" alt="flag" className="w-12 h-auto opacity-80" />
        </div>

        {/* Intro paragraph */}
        <div className="max-w-7xl mx-auto text-center text-gray-600 leading-relaxed mb-12 text-xl ">
          <p>
            تأسست شركة "بن بشار للمقاولات" في قطر لتكون واحدة من الشركات الرائدة والمتخصصة في مجالات كشف تسريب المياه والرطوبة، وصيانة والكشف عن المباني، وأعمال الكهرباء، وأعمال الديكورات، بالإضافة إلى إدارة المشاريع والمقاولات.
<br/>
نحن نفخر بتقديم خدمات متكاملة تلبي إحتياجات الحديثة، مستندين إلى خبرات متراكمة ومعرفة عميقة في هذه المجالات، مما يجلب لعملائنا حلولاً ناجعة وفعالة بأعلى معايير الجودة.
<br></br>
نجمع في "بن بشار للمقاولات" بين الابتكار التقني والخبرة العملية، لضمان إستدامة وأمان المشاريع التي نتولاها
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 max-w-xl mx-auto mb-10" />

        {/* Secondary description / long paragraph */}
        <div className="max-w-7xl mx-auto text-center text-gray-600 leading-relaxed mb-12 ">
          <p>
            الشركة الأولى والوحيدة في قطر، تجمع بين الخبرة والدقة لتقديم حلول متكاملة في عالم الإنشاءات والخدمات الفنية. نتميز بتنفيذ <strong  >أعمال التكييف والتبريد </strong>بأعلى  معايير الكفاءة،
            <br></br>
            وتصميم <strong>الديكورات الداخلية </strong> بأسلوب يجمع بين الفخامة والوظيفية. كما نقدم خدمات احترافية في <strong>أعمال السبَاكَة والكهرباء </strong> لضمان أداء متكامل وآمن في كل مشروع.
            <br/>
تُعنى الشركة أيضًا بـ <strong>الكشف على العقارات</strong> باستخدام أحدث الأجهزة والتقنيات الحديثة للكشف عن التسريبات والمشكلات الخفية، حفاظًا على سلامة المباني واستدامتها.
          </p>
        </div>
{/* Features Section */}
<div className="mt-16">
  <div className="
      grid 
      grid-cols-1 
      sm:grid-cols-3 
      gap-10 
      text-center 
      justify-items-center 
      rtl
    "
    dir="rtl"
  >
  
    {/* دقّة */}
    <div className="flex flex-col items-center">
      <img 
        src="images/tick.png"  /* replace with your icon path */
        className="w-30 h-40 object-contain"
        alt="دقّة"
      />
      <p className="mt-4 text-xl font-semibold text-gray-800">دقّة</p>
    </div>

    {/* كفاءة */}
    <div className="flex flex-col items-center">
      <img 
        src="images/list.webp"  /* replace with your icon path */
        className="w-30 h-40 object-contain"
        alt="كفاءة"
      />
      <p className="mt-4 text-xl font-semibold text-gray-800">كفاءة</p>
    </div>


      {/* سرعة */}
    <div className="flex flex-col items-center">
      <img 
        src="images/fast.png"  /* replace with your icon path */
        className="w-15 h-40 "
        alt="سرعة"
      />
      <p className="mt-4 text-xl font-semibold text-gray-800">سرعة</p>
    </div>
  </div>
</div>

        
          </div>
          

        
          
        
      
    </section>
  );
}

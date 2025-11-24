import React from "react";

export default function VisitSection() {
  return (
    <section className="w-full bg-[#f0f0f0] py-16" id="location">
      <div className="max-w-screen-xl mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* LEFT — Logo */}
          <div className="flex-shrink-0">
            <img
              src="images/330903_945801.webp"
              alt="company logo"
              className="
                w-36 h-auto object-contain 
                md:w-60           /* Larger on desktop */
              "
            />
          </div>

          {/* RIGHT — Text */}
          <div className="flex-1 text-right" dir="rtl">

            <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
              زورونا في موقعنا :
            </h3>

            <div className="text-gray-700 space-y-4 leading-relaxed text-sm md:text-lg font-medium">

              <p>
                أبراج بروة السد، شارع سحيم بن حمد،  
                الطريق الدائري الثالث، الدور الرابع
              </p>

              <p>
                أبراج المارينا 50، لوسيل، الدور الخامس
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

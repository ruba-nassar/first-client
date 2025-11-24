import React from "react";

/**
 * VisitSection
 * - Uses uploaded image at /mnt/data/A_digital_photograph_captures_a_first-person_persp.png
 * - RTL text, logo on the left, text block on the right
 * - TailwindCSS classes (adjust as needed)
 */

export default function VisitSection() {
  return (
    <section className="w-full bg-[#f0f0f0] py-16" id="location">
      <div className="max-w-screen-xl mx-auto px-6">
        <br/>
                <br/>

        <br/>

        <div className="flex items-center justify-between gap-8">
          {/* LEFT: Logo */}
          <div className="flex-shrink-0">
            <img
              src="images/330903_945801.webp"
              alt="company logo"
              className="w-60 h-auto object-contain"
            />
          </div>

          {/* RIGHT: Text (RTL) */}
          <div className="flex-1 text-right" dir="rtl">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
              زورونا في موقعنا :
            </h3>
<br/>
            <div className="text-gray-600 space-y-6 leading-relaxed">
              <p className="md:text-base font-semibold">
                أبراج بروة السيد، شارع سحيم بن حمد، الطريق الدائري الثالث، الدور
                الرابع
              </p>

              <p className="md:text-base font-semibold">
                أبراج المارينا 50 ، لوسيل ، الدور الخامس
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

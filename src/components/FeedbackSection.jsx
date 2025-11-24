import React, { useState } from "react";

function Star({ filled, onClick, onHover, onHoverEnd }) {
  return (
    <svg
      onMouseEnter={onHover}
      onMouseLeave={onHoverEnd}
      onClick={onClick}
      className={`w-8 h-8 cursor-pointer transition ${
        filled ? "text-yellow-400" : "text-gray-300"
      }`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.383 2.408c-.785.57-1.84-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118l-3.386-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
  );
}

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [sent, setSent] = useState(false);

  const supportEmail = "binbashar646@gmail.com";

  function handleSubmit(e) {
    e.preventDefault();

    if (!message.trim()) {
      alert("الرجاء كتابة رسالتك أو ملاحظاتك.");
      return;
    }

    const subject = encodeURIComponent("اقتراح / ملاحظة من موقع بن بشار للمقاولات");

    const body = encodeURIComponent(
      `الاسم: ${name || "—"}\n` +
        `البريد: ${email || "—"}\n` +
        `التقييم: ${rating > 0 ? rating + " نجوم" : "—"}\n\n` +
        `الرسالة:\n${message}`
    );

    const mailto = `mailto:${supportEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
    setSent(true);

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setRating(0);
      setSent(false);
    }, 2500);
  }

  return (
    <section className="w-full bg-[#f0f0f0]" dir="rtl">
      <div className="max-w-screen-md mx-auto px-6">
        <div className="text-right mb-8">
          <h2 className="text-3xl font-bold">أرسل لنا تقييمك وملاحظاتك</h2>
          <br/>
          <p className="text-gray-500 mt-2">
            نرحّب بآرائكم واقتراحاتكم لتحسين خدماتنا.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Rating */}
          <div className="flex flex-col text-right">
            <label className="text-lg font-semibold mb-2">التقييم:</label>
            <div className="flex flex-row-reverse gap-2 justify-end">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  filled={star <= (hoverRating || rating)}
                  onClick={() => setRating(star)}
                  onHover={() => setHoverRating(star)}
                  onHoverEnd={() => setHoverRating(0)}
                />
              ))}
            </div>
          </div>

          {/* Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="الاسم "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border px-4 py-3 text-right"
              dir="rtl"
            />

            <input
              type="email"
              placeholder="البريد الإلكتروني "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-4 py-3 text-right"
              dir="ltr"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="اكتب رسالتك أو ملاحظتك هنا..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-md border px-4 py-3 h-40 text-right"
            dir="rtl"
          />

          {/* Submit */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              className="bg-[#d1b147] hover:bg-[#b69536] text-white font-semibold px-6 py-3 rounded shadow"
            >
              إرسال
            </button>

            {sent && <span className="text-green-600">✔ تم إرسال التقييم!</span>}
          </div>
        </form>

        {/* Direct Email */}
       
      </div>
    </section>
  );
}

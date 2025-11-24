import React from "react";

export default function RightLogo() {
  return (
    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pr-8">
      <div className="flex items-center gap-4">
        <div className="text-black font-extrabold text-2xl tracking-wide">
          binbashar.water
        </div>
        <img
          src="images/330903_945801.webp"
          alt="Company Logo"
          className="w-24 h-auto opacity-100"
        />
      </div>
    </div>
  );
}

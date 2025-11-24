import React from "react";

export default function ScrollButtons() {
  // Get all section IDs in order
  const sections = ["home", "about", "services", "works" , "contact" , "location" , "test"];

  const scrollToSection = (direction) => {
    const current = sections.findIndex(
      (id) => document.getElementById(id)?.getBoundingClientRect().top >= -50
    );

    let nextIndex =
      direction === "down"
        ? Math.min(current + 1, sections.length - 1)
        : Math.max(current - 1, 0);

    const nextSection = document.getElementById(sections[nextIndex]);
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed right-4 bottom-20 z-50 flex flex-col gap-3">
      {/* Up Button */}
      <button
        onClick={() => scrollToSection("up")}
        className="p-3 bg-black/70 text-white rounded-full hover:bg-black transition"
      >
        ↑
      </button>

      {/* Down Button */}
      <button
        onClick={() => scrollToSection("down")}
        className="p-3 bg-black/70 text-white rounded-full hover:bg-black transition"
      >
        ↓
      </button>
    </div>
  );
}

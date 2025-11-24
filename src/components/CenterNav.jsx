import React, { useEffect, useState, useCallback } from "react";

/*
  - Put the ids of your page sections (the user said they already have ids).
  - Example: section ids = ["contact","works","services","about","home"]
*/
const navItems = [
  { id: "contact", label: "CONTACT" },
  { id: "works", label: "WORKS" },
  { id: "services", label: "SERVICES" },
  { id: "about", label: "ABOUT" },
  { id: "home", label: "HOME" },
];

export default function CenterNav({ topBarHeight = 40, headerHeight = 112 }) {
  const [active, setActive] = useState("home");

  // smooth scroll to section with offset for fixed header
  const handleClick = useCallback(
    (e, sectionId) => {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (!el) return;

      // compute offset top and subtract header heights
      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const target = rect.top + scrollTop - (topBarHeight + headerHeight) + 1; // +1 to avoid exact overlap

      window.scrollTo({
        top: Math.max(0, target),
        behavior: "smooth",
      });

      // set active immediately for UX
      setActive(sectionId);
    },
    [topBarHeight, headerHeight]
  );

  useEffect(() => {
    // IntersectionObserver to set active link while scrolling
    const observerOptions = {
      root: null,
      rootMargin: `-${topBarHeight + headerHeight}px 0px  -40% 0px`,
      threshold: 0.15,
    };

    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);

    const obs = new IntersectionObserver((entries) => {
      // pick the entry with largest intersectionRatio > 0
      const visible = entries
        .filter((en) => en.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActive(visible.target.id);
      }
    }, observerOptions);

    sections.forEach((s) => obs.observe(s));

    return () => obs.disconnect();
  }, [topBarHeight, headerHeight]);

  return (
    <nav className="py-4">
      <ul className="flex justify-center gap-14 font-semibold items-center">
        {navItems.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="relative">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                className="text-black px-1 inline-block"
                aria-current={isActive ? "page" : undefined}
              >
                {/* label */}
                <span className="relative inline-block">
                  {item.label}
                  {/* animated underline: absolutely positioned bar scaled horizontally */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[3px] bg-[#000] origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ width: "100%" }}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

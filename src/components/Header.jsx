import React, { useEffect, useRef, useState } from "react";
import CenterNav from "./CenterNav";
import RightLogo from "./RightLogo";

/* topBarHeight (40) and headerHeight (112) : adjust if you change sizes */
const topBarHeight = 40;   // px
const headerHeight = 112;  // px (h-28 ≈ 112px)

export default function Header() {
  const [activeId, setActiveId] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    const ids = ["home", "about", "services", "works", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

    // IntersectionObserver picks the section with the largest intersection
    observerRef.current = new IntersectionObserver(
      (entries) => {
        let best = null;
        entries.forEach((e) => {
          if (!best || e.intersectionRatio > best.intersectionRatio) best = e;
        });
        if (best && best.target?.id) setActiveId(best.target.id);
      },
      {
        root: null,
        // rootMargin moves the "active" threshold up so header offset is considered
        rootMargin: `0px 0px -${Math.floor(window.innerHeight * 0.4)}px 0px`,
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    els.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  // Called by CenterNav when a nav button is clicked
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // setActiveId immediately so user sees underline while scrolling
    setActiveId(id);
  }

  return (
    <>
      {/* Top bar is assumed fixed above header in your layout; keeping header fixed below it */}
      <header
        className="w-full bg-[#d1b147] shadow-md"
        style={{
          position: "fixed",
          top: `${topBarHeight}px`,
          left: 0,
          height: headerHeight,
          zIndex: 55,
        }}
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-6 h-full">
          <div className="flex-1">
            {/* Pass activeId and scroll function down */}
            <CenterNav active={activeId} onNavClick={scrollToSection} />
          </div>

          {/* RightLogo stays on the right */}
          <RightLogo />
        </div>
      </header>

      
    </>
  );
}

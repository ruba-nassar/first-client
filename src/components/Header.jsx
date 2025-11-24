// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import CenterNav from "./CenterNav";
import RightLogo from "./RightLogo";

/* topBarHeight is the fixed top bar height (px). Keep this in sync with TopBar. */
const TOP_BAR_HEIGHT = 40; // px

export default function Header() {
  const rootRef = useRef(null);
  const headerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // compute header height (desktop vs mobile) after mount and whenever window resizes
  useEffect(() => {
    function updateOffsetVar() {
      if (!headerRef.current) return;
      // actual header element height
      const headerHeight = headerRef.current.getBoundingClientRect().height;
      const total = TOP_BAR_HEIGHT + Math.round(headerHeight);
      // set CSS variable so the whole page can read it
      document.documentElement.style.setProperty("--site-top-offset", `${total}px`);
    }

    updateOffsetVar();
    setIsMounted(true);
    window.addEventListener("resize", updateOffsetVar);
    return () => window.removeEventListener("resize", updateOffsetVar);
  }, []);

  return (
    <>
      {/* header fixed below top bar. height uses tailwind responsive heights:
          md:h-28 -> desktop ~112px, h-16 -> mobile ~64px */}
      <header
        ref={headerRef}
        className="w-full bg-[#d1b147] shadow-md fixed left-0 z-50"
        style={{
          top: `${TOP_BAR_HEIGHT}px`,
          // we don't set explicit pixel height here; use tailwind classes inside container
        }}
      >
        <div className="w-full max-w-screen-xl mx-auto flex items-center justify-between px-6 h-16 md:h-28">
          {/* Center nav handles both desktop and mobile nav + mobile hamburger */}
          <div className="flex-1">
            <CenterNav topBarHeight={TOP_BAR_HEIGHT} headerHeightDesktop={112} />
          </div>

          {/* RightLogo shown only on medium+ screens (keeps desktop behavior) */}
          <div className="hidden md:flex items-center">
            <RightLogo />
          </div>
        </div>
      </header>
    </>
  );
}

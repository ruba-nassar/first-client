// Header.jsx
import React, { useEffect, useRef, useState } from "react";
import CenterNav from "./CenterNav";
import RightLogo from "./RightLogo";

/* topBarHeight is the fixed top bar height (px). Keep this in sync with TopBar. */
const TOP_BAR_HEIGHT = 40; // px
const MOBILE_BREAKPOINT = 768; // px (matches Tailwind md breakpoint)

export default function Header() {
  const headerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    function updateOffsetVar() {
      if (!headerRef.current) return;

      // measure header height (actual rendered height)
      const headerHeight = Math.round(headerRef.current.getBoundingClientRect().height);

      // topBar is always present (fixed at top), so total offset = topBar + header
      const total = TOP_BAR_HEIGHT + headerHeight;

      // set CSS variable so other sections (hero, anchors) can read it
      document.documentElement.style.setProperty("--site-top-offset", `${total}px`);
    }

    // run once on mount
    updateOffsetVar();
    setIsMounted(true);

    // update on resize - throttle with rAF
    let rafId = null;
    function handleResize() {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateOffsetVar();
        rafId = null;
      });
    }
    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // IMPORTANT: header stays **below** the top bar on all breakpoints.
  // TopBar is fixed at top:0; header should sit at top: TOP_BAR_HEIGHT.
  return (
    <>
      <header
        ref={headerRef}
        className="w-full bg-[#d1b147] shadow-md fixed left-0 z-50"
        style={{
          top: `${TOP_BAR_HEIGHT}px`,
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

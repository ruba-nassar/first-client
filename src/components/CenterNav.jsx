// CenterNav.jsx
import React, { useEffect, useState, useCallback } from "react";
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaTiktok, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const navItems = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "services", label: "SERVICES" },
  { id: "works", label: "WORKS" },
  { id: "contact", label: "CONTACT" },
];

export default function CenterNav({ topBarHeight = 40, headerHeightDesktop = 112, active: outerActive, onNavClick }) {
  const [active, setActive] = useState(outerActive || "home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (outerActive) setActive(outerActive);
  }, [outerActive]);

  // smooth scroll with header offset (reads CSS var that Header sets)
  const handleClick = useCallback(
    (e, sectionId) => {
      e && e.preventDefault();
      const el = document.getElementById(sectionId);
      if (!el) return;

      // compute offset: read CSS var if set, fallback to provided numbers
      const computed = getComputedStyle(document.documentElement).getPropertyValue("--site-top-offset");
      const offset = computed ? parseInt(computed.trim(), 10) : topBarHeight + headerHeightDesktop;

      const rect = el.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const target = rect.top + scrollTop - offset + 1;

      window.scrollTo({
        top: Math.max(0, target),
        behavior: "smooth",
      });

      setActive(sectionId);
      onNavClick && onNavClick(sectionId);
      setOpen(false);
    },
    [topBarHeight, headerHeightDesktop, onNavClick]
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `-${topBarHeight + headerHeightDesktop}px 0px -40% 0px`,
      threshold: 0.15,
    };

    const sections = navItems.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((en) => en.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, options);

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [topBarHeight, headerHeightDesktop]);

  /* ------------------ Desktop Nav (unchanged) ------------------ */
  const DesktopNav = (
    <ul className="hidden md:flex justify-center gap-14 font-semibold items-center">
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
              <span className="relative inline-block">
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-[3px] bg-black origin-center transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0"}`}
                  style={{ width: "100%", transformOrigin: "center" }}
                />
              </span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  /* ------------------ Mobile Header (compact) ------------------ */
  const MobileHeader = (
    <div className="flex items-center justify-between md:hidden w-full">
      <div className="flex items-center gap-3">
        <div className="text-black font-bold text-lg">binbashar.water</div>
      </div>

      <button aria-label="menu" onClick={() => setOpen((s) => !s)} className="p-2 rounded-md bg-black/10">
        {open ? <FaTimes /> : <FaBars />}
      </button>
    </div>
  );

  /* ------------------ Mobile Fullscreen Menu (improved) ------------------ */
  const MobileMenu = (
    // top-level covers entire viewport; slide/opacity handled by classes
    <div
      className={`fixed inset-0 z-[9998] md:hidden transition-all duration-250 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      {/* dimmer behind panel; clicking closes */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setOpen(false)}
        aria-hidden
      />

      {/* white panel — full height, scrollable */}
      <div className="absolute inset-0 bg-white overflow-y-auto">
        {/* top thin bar with small social icons (matches screenshot) */}
        <div className="h-10 bg-[#d1b147] flex items-center px-4">
          <div className="flex items-center gap-3 text-sm">
            <FaInstagram className="text-black" />
            <FaFacebook className="text-black" />
            <FaTiktok className="text-black" />
          </div>
        </div>

        {/* close / header row */}
        <div className="flex items-center justify-between px-6 py-6 border-b">
          <button onClick={() => setOpen(false)} aria-label="close menu" className="text-3xl text-gray-700">
            <IoClose />
          </button>

          {/* you can optionally center logo/text; kept right aligned like screenshot */}
          <div className="text-base font-semibold text-gray-800">binbashar.water</div>
        </div>

        {/* main menu list */}
        <div className="px-6 py-8">
          <nav>
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.id} className="border-b pb-4">
                  <button
                    onClick={() => handleClick(null, item.id)}
                    className={`w-full text-left text-2xl tracking-wide py-3 ${active === item.id ? "text-[#d1b147]" : "text-gray-800"}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* contact lines (phone + email) */}
          <div className="mt-8 text-gray-700 text-base space-y-4">
            <div className="flex items-center gap-3">
              <FaPhone className="text-xl text-gray-700" />
              <span>77790894 _ 77710165 _ 77755602</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-xl text-gray-700" />
              <a href="mailto:info@binbashar.com" className="underline">
                info@binbashar.com
              </a>
            </div>
          </div>

          {/* small social icons row centered */}
          <div className="mt-8 flex justify-center gap-6 text-2xl text-gray-700">
            <a href="https://instagram.com/binbashar.water" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61557126641217" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://www.tiktok.com/@binbashar50?_r=1&_t=ZS-91dhn70HYHK" target="_blank" rel="noreferrer"><FaTiktok /></a>
          </div>

          {/* powered-by / footer note (optional) */}
          
        </div>
      </div>
    </div>
  );

  return (
    <>
      {MobileHeader}
      {DesktopNav}
      {MobileMenu}
    </>
  );
}

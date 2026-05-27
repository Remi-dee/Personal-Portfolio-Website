import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-bold text-white tracking-tight hover:text-indigo-400 transition-colors"
        >
          remi<span className="text-indigo-400">.</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1ueSJEq_VPaLan--mnQmC2aEH63DnF4wjFUTpo_Lan20/edit?tab=t.0#heading=h.ocvpswguxa6m"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 border border-indigo-500/50 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-colors"
          >
            Resume
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111118] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-slate-300 hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="https://docs.google.com/document/d/1ueSJEq_VPaLan--mnQmC2aEH63DnF4wjFUTpo_Lan20/edit?tab=t.0#heading=h.ocvpswguxa6m"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Resume ↗
          </a>
        </div>
      )}
    </header>
  );
};

export default Nav;

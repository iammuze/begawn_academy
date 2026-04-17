"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#courses");
  const [scrolled, setScrolled] = useState(false);

  // Add scroll listener for a "glassmorphism" effect on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    ["#courses", "Courses"],
    ["#roadmap", "Learning Path"],
    ["#tools", "Tools"],
    ["#mentors", "Instructors"],
  ];

  return (
    <>
      <style jsx global>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          100% { left: 125%; }
        }
      `}</style>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-white/80 backdrop-blur-md py-2 shadow-lg border-slate-200" 
            : "bg-white py-4 border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 flex-shrink-0 group">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/logo/logo.png"
                alt="Begawn Logo"
                width={35}
                height={35}
                className="object-contain"
              />
            </div>
            <span className="font-black text-xl text-slate-900 tracking-tighter uppercase">
              Begawn <span className="text-brand-700">Academy</span>
            </span>
          </a>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1 rounded-xl border border-slate-200/50">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setActive(href)}
                className={`text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 ${
                  active === href
                    ? "bg-white text-brand-700 shadow-sm scale-105"
                    : "text-slate-500 hover:text-slate-900 hover:bg-white/50"
                }`}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <a
                href="https://forms.gle/mqAetbQ3eENmFMYa7"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden bg-brand-700 text-white px-7 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:bg-brand-800 hover:shadow-[0_8px_25px_-5px_rgba(var(--brand-rgb),0.4)] active:scale-95"
              >
                <span className="relative z-10">Register Now</span>
                {/* Animated Shine */}
                <div className="absolute top-0 -left-full w-1/2 h-full z-5 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:animate-[shimmer_0.75s_forward]" 
                     style={{ animation: 'shimmer 1s infinite' }} 
                />
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <span className="text-2xl font-light">✕</span>
              ) : (
                <div className="space-y-1.5">
                  <div className="w-6 h-0.5 bg-current rounded-full"></div>
                  <div className="w-4 h-0.5 bg-current rounded-full"></div>
                  <div className="w-6 h-0.5 bg-current rounded-full"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu with Slide-Down Animation */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden bg-white border-t border-slate-100 ${
            open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => {
                  setActive(href);
                  setOpen(false);
                }}
                className={`text-lg font-bold p-4 rounded-xl transition-all ${
                  active === href
                    ? "bg-brand-50 text-brand-700 translate-x-2"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <a
                href="https://forms.gle/mqAetbQ3eENmFMYa7"
                className="block w-full bg-brand-700 text-white py-4 rounded-xl text-center font-bold shadow-lg shadow-brand-700/20"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
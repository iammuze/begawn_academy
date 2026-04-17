"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Stars } from "./shared";

const CSS = `
  @keyframes fadeUp  { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
  @keyframes fadeIn  { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes blink   { 0%,100%{ opacity:1 } 50%{ opacity:0.35 } }
  @keyframes ticker  { 0%{ transform:translateX(0); } 100%{ transform:translateX(-50%); } }
  
  /* NEW: Shine and Sparkle Animations */
  @keyframes shine {
    0% { background-position: 200% center; }
    100% { background-position: -200% center; }
  }
  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1.2); }
  }

  .ao-up, .ao-in, .ao-scale { opacity: 0; }
  .ao-up.vis    { animation: fadeUp  0.55s ease forwards; }
  .ao-in.vis    { animation: fadeIn  0.45s ease forwards; }
  .ao-scale.vis { animation: scaleIn 0.5s  ease forwards; }
  .live-dot     { animation: blink 2s ease-in-out infinite; }
  .ticker-track { animation: ticker 26s linear infinite; }
  .ticker-track:hover { animation-play-state: paused; }
  
  /* Class utilities */
  .animate-shine { animation: shine 3s linear infinite; }
  .animate-sparkle { animation: sparkle 2s ease-in-out infinite; }
`;

const instructorAvatars: string[] = [
  "/instructors/p1.png",
  "/instructors/p2.jpg",
  "/instructors/p3.png",
  "/instructors/p4.jpg",
];

const topics: string[] = [
  "Technical Writing",
  "API Docs",
  "User Manuals",
  "Knowledge Base",
  "Portfolio Building",
  "Career Prep",
  "Tools & Software",
];

const includes: { icon: string; text: string }[] = [
  { icon: "📹", text: "Learning from Live Projects" },
  { icon: "💼", text: "Training Completion Certificate" },
  { icon: "🏅", text: "Lifetime Alumni Community" },
  { icon: "♾️", text: "1-on-1 Resume & Interview Prep" },
  { icon: "🎯", text: "100% Placement Support" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const els = ref.current?.querySelectorAll(".ao-up, .ao-in, .ao-scale");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-slate-50 pt-14 border-b border-slate-200 overflow-hidden"
    >
      <style>{CSS}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-16 items-center">
        {/* ── LEFT ── */}
        <div>
<div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-4 py-1.5 mb-5 shadow-sm">
  
  {/* Animated dot */}
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
  </span>

  {/* Shining text */}
  <span className="text-[11px] font-bold tracking-widest uppercase">
    <span className="bg-gradient-to-r from-slate-400 via-blue-400 to-slate-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
      {"India's"} First Technical Writing Academy
    </span>
  </span>

</div>

          {/* Headline */}
          <h1
            className="ao-up text-4xl sm:text-6xl font-extrabold leading-tight text-slate-900 mb-6 tracking-tight"
            style={{ animationDelay: "0.07s" }}
          >
            Launch Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Technical
            </span>
            <br className="hidden sm:block" /> Writing Career in{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                45 Days
              </span>
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="ao-up text-base sm:text-lg text-slate-500 leading-relaxed mb-6 max-w-xl"
            style={{ animationDelay: "0.13s" }}
          >
            Exposure to live client projects. Learn from {"India's"} top
            technical writers. Exclusive placement support.{" "}
            <strong className="text-slate-900 font-bold">
              We get you the job.
            </strong>
          </p>

          {/* Rating */}
          <div
            className="ao-up flex flex-wrap items-center gap-2 mb-5"
            style={{ animationDelay: "0.18s" }}
          >
            <Stars rating={5} size={15} />
            <span className="text-amber-700 text-sm font-bold">5.0</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-sm">312 ratings</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 text-sm">
              400+ students enrolled
            </span>
          </div>

          {/* Instructor avatars */}
          <div
            className="ao-up flex flex-wrap items-center gap-3 mb-7"
            style={{ animationDelay: "0.23s" }}
          >
            <div className="flex items-center">
              {instructorAvatars.map((src, idx) => (
                <div
                  key={idx}
                  className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white flex-shrink-0"
                  style={{
                    marginLeft: idx === 0 ? 0 : -8,
                    zIndex: 4 - idx,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Instructor ${idx + 1}`}
                    fill
                    sizes="32px"
                    className="object-cover object-top"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
            <span className="text-slate-500 text-sm">
              Taught by{" "}
              <span className="text-blue-700 font-semibold">
                6 expert instructors
              </span>{" "}
              from {"BEGAWN's"} active team
            </span>
          </div>

          {/* CTAs */}
          <div
            className="ao-up flex flex-wrap gap-3 mb-8"
            style={{ animationDelay: "0.28s" }}
          >
            <a
              href="https://forms.gle/mqAetbQ3eENmFMYa7"
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-7 py-3.5 rounded-xl font-extrabold text-base hover:bg-blue-800 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-700/20"
            >
              🚀 Register Now
            </a>
            <a
              href="#roadmap"
              className="inline-flex items-center gap-2 text-slate-800 px-6 py-3.5 rounded-xl font-semibold text-base border border-slate-300 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
            >
              View Learning Path →
            </a>
          </div>

          {/* Badge strip */}
        </div>

        {/* ── RIGHT — Program Card ── */}
        <div
          className="ao-scale hidden lg:flex lg:flex-col bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden"
          style={{ animationDelay: "0.15s" }}
        >
          {/* Thumbnail */}
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 h-44 flex flex-col items-center justify-center gap-3 overflow-hidden flex-shrink-0">
            <div className="absolute top-4 left-4 w-24 h-24 bg-white/5 rounded-full pointer-events-none" />
            <div className="absolute bottom-2 right-6 w-16 h-16 bg-white/5 rounded-full pointer-events-none" />
            <div className="w-12 h-12 rounded-full bg-white/10 border-2 border-white/30 flex items-center justify-center text-white text-xl relative z-10 hover:scale-105 transition-transform duration-200 cursor-pointer select-none">
              ▶
            </div>
            <span className="text-white/80 text-xs font-medium text-center px-6 relative z-10">
              Preview: Day 1 — What is Technical Writing?
            </span>
          </div>

          {/* Card body */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-2xl font-extrabold text-slate-900">
                  Free Preview
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Full program · 45 days
                </div>
              </div>
            </div>

            <a
              href="https://forms.gle/mqAetbQ3eENmFMYa7"
              className="block bg-blue-700 text-white py-3.5 rounded-xl text-center font-extrabold text-base mb-2.5 hover:bg-blue-800 hover:-translate-y-0.5 transition-all duration-200 shadow-lg shadow-blue-700/20"
            >
              🚀 Register Now
            </a>
            <p className="text-xs text-slate-400 text-center mb-4">
              ⏰ Batch starts soon — apply today
            </p>

            {/* Includes */}
            <div className="border-t border-slate-100 pt-4">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                Program Includes
              </div>
              <div className="flex flex-col gap-2.5">
                {includes.map(({ icon, text }, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-sm flex-shrink-0">
                      {icon}
                    </div>
                    <span className="text-sm text-slate-700">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-slate-100 text-center">
              <span className="text-[11px] text-slate-400">
                🔒 Secure · No spam · Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Topic strip ── */}
      {/* <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 py-3">
         
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-sm font-medium mr-1">
              Topics:
            </span>
            {topics.map((t) => (
              <a
                key={t}
                href="#courses"
                className="text-slate-500 text-sm px-3 py-1.5 border border-slate-200 rounded-full whitespace-nowrap bg-slate-50 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-150 flex-shrink-0"
              >
                {t}
              </a>
            ))}
          </div>

          <div className="sm:hidden overflow-hidden">
            <div className="ticker-track flex gap-3 w-max items-center">
              {[...topics, ...topics].map((t, i) => (
                <a
                  key={i}
                  href="#courses"
                  className="text-slate-500 text-sm px-3 py-1.5 border border-slate-200 rounded-full whitespace-nowrap bg-slate-50 flex-shrink-0"
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

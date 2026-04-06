"use client";
import { Stars } from "./shared";

export default function Hero() {
  const instructorAvatars = [
    ["PM", "#7c3aed"],
    ["AK", "#1d4ed8"],
    ["SR", "#b45309"],
    ["DN", "#15803d"],
  ];

  const topics = [
    "Technical Writing",
    "API Docs",
    "User Manuals",
    "Knowledge Base",
    "Portfolio Building",
    "Career Prep",
    "Tools & Software",
  ];

  return (
    <section className="bg-slate-50 pt-16 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
        {/* Left */}
        <div>
          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-brand-700 rounded-full inline-block" />
            <span className="text-brand-700 text-xs font-bold tracking-widest uppercase">
              India's First Technical Writing Academy
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900 mb-5 tracking-tight">
            Launch Your Career
            <br />
            in{" "}
            <span className="text-brand-700">Technical Writing</span>
          </h1>

          <p className="text-lg text-slate-500 leading-relaxed mb-7 max-w-lg">
            45 days. Real client projects. Trained by India's top technical writers.
            You write the docs —{" "}
            <strong className="text-slate-900 font-bold">we get you the job.</strong>
          </p>

          {/* Rating row */}
          <div className="flex items-center gap-2 mb-6 flex-wrap">
            <Stars rating={5} size={15} />
            <span className="text-amber-700 text-sm font-bold">5.0</span>
            <span className="text-slate-300 text-sm">•</span>
            <span className="text-slate-500 text-sm">312 ratings</span>
            <span className="text-slate-300 text-sm">•</span>
            <span className="text-slate-500 text-sm">4,200+ students enrolled</span>
          </div>

          {/* Instructor avatars */}
          <div className="flex items-center gap-2.5 mb-8">
            <div className="flex">
              {instructorAvatars.map(([init, bg], idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-slate-50"
                  style={{
                    background: bg,
                    marginLeft: idx ? "-8px" : "0",
                    zIndex: 4 - idx,
                    position: "relative",
                  }}
                >
                  {init}
                </div>
              ))}
            </div>
            <span className="text-slate-500 text-sm">
              Taught by{" "}
              <span className="text-brand-700 font-semibold">6 expert instructors</span>{" "}
              from BEGAWN's active team
            </span>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mb-9">
            <a
              href="https://forms.gle/mqAetbQ3eENmFMYa7"
              className="inline-block bg-brand-700 text-white px-8 py-3.5 rounded-lg font-extrabold text-base hover:bg-brand-800 transition-colors"
            >
              Register Now
            </a>
            <a
              href="#roadmap"
              className="inline-block text-slate-900 px-7 py-3.5 rounded-lg font-semibold text-base border border-slate-300 hover:border-slate-400 transition-colors"
            >
              View Learning Path →
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex gap-6 flex-wrap">
            {[
              { icon: "🏅", text: "100% Placement Support" },
              { icon: "🌐", text: "10+ Global Clients" },
              { icon: "📅", text: "45-Day Program" },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="text-sm">{b.icon}</span>
                <span className="text-slate-500 text-sm font-medium">{b.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — program card */}
        <div className="hidden lg:block bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden">
          {/* Thumbnail */}
          <div className="bg-gradient-to-br from-blue-800 via-brand-700 to-blue-500 h-44 flex flex-col items-center justify-center gap-3">
            <div className="w-13 h-13 rounded-full bg-white/15 border-2 border-white/35 flex items-center justify-center text-2xl">
              ▶
            </div>
            <span className="text-white/85 text-sm font-medium">
              Preview: Day 1 — What is Technical Writing?
            </span>
          </div>

          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="text-2xl font-extrabold text-slate-900">Free Preview</div>
                <div className="text-xs text-slate-400 mt-0.5">Full program · 45 days</div>
              </div>
              {/* <div className="bg-amber-100 text-amber-800 px-2.5 py-1 rounded-md text-xs font-bold">
                12 Seats Left
              </div> */}
            </div>

            <a
               href="https://forms.gle/mqAetbQ3eENmFMYa7"
              className="block bg-brand-700 text-white py-3 rounded-lg text-center font-bold text-base mb-2.5 hover:bg-brand-800 transition-colors"
            >
              Register Now
            </a>
            <p className="text-xs text-slate-400 text-center mb-4">
              ⏰ Batch starts soon — apply today
            </p>

            <div className="border-t border-slate-100 pt-3.5">
              <div className="text-sm font-bold text-slate-900 mb-2.5">Program includes:</div>
              {[
                ["📹", "18 hours on-demand training"],
                ["💼", "5–8 real client portfolio pieces"],
                ["🏅", "BEGAWN completion certificate"],
                ["♾️", "Lifetime alumni community"],
                ["🎯", "1-on-1 resume & interview prep"],
              ].map(([icon, text], i) => (
                <div key={i} className="flex items-center gap-2.5 mb-2">
                  <span className="text-sm">{icon}</span>
                  <span className="text-sm text-gray-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Topic strip */}
      <div className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex gap-2 flex-wrap items-center">
          <span className="text-slate-400 text-sm mr-1 font-medium">Topics:</span>
          {topics.map((c) => (
            <a
              key={c}
              href="#courses"
              className="text-slate-500 text-sm px-3.5 py-1 border border-slate-200 rounded-full whitespace-nowrap bg-slate-50 hover:bg-blue-50 hover:text-brand-700 hover:border-blue-200 transition-all"
            >
              {c}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

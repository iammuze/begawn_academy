"use client";
import { useState } from "react";

const phases = [
  {
    p: "01",
    days: "Days 1–15",
    title: "Beginner Level",
    color: "#7c3aed",
    bg: "#faf5ff",
    borderColor: "#ddd6fe",
    lessons: 28,
    hours: "12h",
    items: [
      "Introduction to Code Editors",
      "Working inside a Code Editor (open folder, write/update files, preview, fix issues)",
      "Basics of Markdown",
      "Writing simple documentation using Markdown",
      "Understanding documentation workflow",
      "Practice: Convert plain text into Markdown",
    ],
    outcome:
      "You understand Markdown, documentation basics, and can create structured docs.",
  },
  {
    p: "02",
    days: "Days 16–30",
    title: "Advanced Level",
    color: "#1d4ed8",
    bg: "#eff6ff",
    borderColor: "#bfdbfe",
    lessons: 32,
    hours: "15h",
    items: [
      "Advanced Markdown (MarkdownX features)",
      "Tables, checklists, code blocks",
      "Markdown vs MarkdownX differences",
      "Introduction to Git",
      "Core Git Concepts (Repo, Commit, Branch, Merge, Clone, Push, Pull)",
      "GitHub basics and documentation workflow",
      "Practice: Create and manage documentation in GitHub",
    ],
    outcome:
      "You can manage documentation using GitHub and collaborate effectively.",
  },
  {
    p: "03",
    days: "Days 31–45",
    title: "Pro Level",
    color: "#b45309",
    bg: "#fffbeb",
    borderColor: "#fde68a",
    lessons: 24,
    hours: "18h",
    items: [
      "Real-world documentation workflow in GitHub",
      "Branching and Pull Requests",
      "Collaboration and review process",
      "Writing professional documentation (release notes, help docs)",
      "Using Git inside code editors",
      "Comparing versions and maintaining documentation quality",
      "Final Project: Complete documentation lifecycle",
    ],
    outcome:
      "You can handle real-world documentation workflows and deliver production-ready docs.",
  },
];

const testFeatures = [
  { icon: "📝", text: "Live project-based test series" },
  { icon: "🏭", text: "Real industry scenarios" },
  { icon: "📊", text: "Instant performance feedback" },
  { icon: "🏆", text: "Ranked leaderboard" },
];

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const ph = phases[active];

  return (
    <section
      id="roadmap"
      className="py-16 px-6 bg-white border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-10">
          <div className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
            Your Learning Path
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
            Your 45-Day Roadmap
          </h2>
          <p className="text-slate-500 text-sm max-w-md">
            Step by step. Skill by skill. From complete beginner to job-ready professional.
          </p>
        </div>

        {/* ── Phase tabs + detail ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-5">

          {/* Tabs */}
          <div className="flex flex-col gap-2.5">
            {phases.map((p, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="text-left p-4 rounded-xl cursor-pointer transition-all duration-200"
                style={{
                  border: active === i ? `2px solid ${p.color}` : "2px solid #e2e8f0",
                  background: active === i ? p.bg : "#fff",
                }}
              >
                <div
                  className="text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ color: p.color }}
                >
                  {p.days}
                </div>
                <div className="text-base font-extrabold text-slate-900 mb-0.5">
                  Phase {p.p}: {p.title}
                </div>
                <div className="text-xs text-slate-400">
                  {p.lessons} lessons · {p.hours}
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div
            className="bg-white rounded-xl p-7 relative overflow-hidden"
            style={{ border: `1.5px solid ${ph.borderColor}` }}
          >
            {/* Top color bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
              style={{ background: ph.color }}
            />

            {/* Phase header */}
            <div className="flex justify-between flex-wrap gap-3 mb-6">
              <div>
                <div
                  className="text-xs font-bold uppercase tracking-wide mb-1"
                  style={{ color: ph.color }}
                >
                  {ph.days}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Phase {ph.p}: {ph.title}
                </h3>
              </div>
              {/* <div className="flex gap-2.5">
                {[
                  { icon: "📹", val: ph.hours },
                  { icon: "📚", val: `${ph.lessons} lessons` },
                ].map((m, j) => (
                  <div
                    key={j}
                    className="rounded-lg px-4 py-2.5 text-center"
                    style={{ background: ph.bg, border: `1px solid ${ph.borderColor}` }}
                  >
                    <div className="text-base">{m.icon}</div>
                    <div className="text-xs font-bold text-gray-700">{m.val}</div>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Curriculum */}
            <div className="mb-5">
  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2.5">
    Curriculum
  </div>

  <div className="border border-slate-100 rounded-lg overflow-hidden">
    {ph.items.map((item, i) => (
      <div
        key={i}
        className="flex items-center gap-3 px-4 py-2.5"
        style={{
          borderBottom: i < ph.items.length - 1 ? "1px solid #f8fafc" : "none",
          background: i % 2 ? "#fafafa" : "#fff",
        }}
      >
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ background: ph.bg, border: `1px solid ${ph.borderColor}` }}
        >
          {/* ✅ Bullet Circle */}
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: ph.color }}
          />
        </div>

        <span className="text-sm text-gray-700">{item}</span>
      </div>
    ))}
  </div>
</div>

            {/* Outcome */}
          
          </div>
        </div>

{/* ── Test Series callout — ULTRA SLEEK ROW ── */}
<div className="mt-8 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
  <div className="flex flex-col lg:flex-row items-center gap-4 px-4 py-4">
    
    {/* Section 1: Badge & Title */}
    <div className="flex items-center gap-3 flex-shrink-0">
      <div className="relative flex h-2 w-2 ml-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
      </div>
      <h3 className="text-sm font-bold text-white tracking-tight leading-none whitespace-nowrap">
        Test Series: <span className="text-blue-400">Live Projects</span>
      </h3>
    </div>

    {/* Section 2: Divider (Hidden on Mobile) */}
    <div className="hidden lg:block w-px h-6 bg-slate-800" />

    {/* Section 3: Feature Pills (Compressed) */}
    <div className="flex flex-wrap items-center gap-2 flex-1 justify-center lg:justify-start">
      {testFeatures.map((f, i) => (
        <div
          key={i}
          className="flex items-center gap-1.5 bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors rounded-full px-3 py-1"
        >
          <span className="text-xs">{f.icon}</span>
          <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider whitespace-nowrap">
            {f.text}
          </span>
        </div>
      ))}
    </div>

    {/* Section 4: CTA Button */}
    <div className="flex-shrink-0 w-full lg:w-auto">
      <a
        href="#register"
        className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.3)]"
      >
        Join Program
        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </a>
    </div>
    
  </div>
</div>
        
</div>
      
    </section>
  );
}
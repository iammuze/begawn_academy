"use client";
import { useState } from "react";

const phases = [
  {
    p: "01",
    days: "Days 1–15",
    title: "Foundations",
    color: "#7c3aed",
    bg: "#faf5ff",
    borderColor: "#ddd6fe",
    lessons: 28,
    hours: "12h",
    items: [
      "What is technical writing?",
      "Writing style, voice & audience",
      "Docs-as-code basics",
      "Style guide creation",
      "Tools: Google Docs, Notion",
    ],
    outcome:
      "You understand technical writing deeply and have your first style guide done.",
  },
  {
    p: "02",
    days: "Days 16–30",
    title: "Core Skills",
    color: "#1d4ed8",
    bg: "#eff6ff",
    borderColor: "#bfdbfe",
    lessons: 32,
    hours: "15h",
    items: [
      "User Manuals & Guides",
      "Knowledge Base Articles",
      "Quick Start Guides",
      "Screenshots, GIFs & screen recording",
      "Structured writing best practices",
    ],
    outcome:
      "You deliver 3 real documentation pieces for BEGAWN's active clients.",
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
      "API & developer documentation",
      "Release Notes",
      "Interactive Walkthroughs",
      "Real client project execution",
      "Portfolio building & job prep",
    ],
    outcome:
      "You leave with a full portfolio, a certificate, and placement support locked in.",
  },
];

export default function Roadmap() {
  const [active, setActive] = useState(0);
  const ph = phases[active];

  return (
    <section id="roadmap" className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="text-xs font-bold text-brand-700 uppercase tracking-widest mb-2">
            Your Learning Path
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
            Your 45-Day Roadmap
          </h2>
          <p className="text-slate-500 text-sm max-w-md">
            Step by step. Skill by skill. From complete beginner to job-ready professional.
          </p>
        </div>

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

          {/* Detail */}
          <div
            className="bg-white rounded-xl p-7 relative overflow-hidden"
            style={{ border: `1.5px solid ${ph.borderColor}` }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
              style={{ background: ph.color }}
            />

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
              <div className="flex gap-2.5">
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
              </div>
            </div>

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
                      <svg width="10" height="10" viewBox="0 0 12 12">
                        <polygon points="4,2 10,6 4,10" fill={ph.color} />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-lg p-4 flex gap-3"
              style={{ background: ph.bg, border: `1px solid ${ph.borderColor}` }}
            >
              <span className="text-xl flex-shrink-0">🎯</span>
              <div>
                <div className="text-xs font-bold mb-1" style={{ color: ph.color }}>
                  Phase Outcome
                </div>
                <div className="text-sm text-gray-700 leading-relaxed">{ph.outcome}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication callout */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-7 flex flex-wrap gap-6 items-center justify-between">
          <div>
            <div className="text-xs text-brand-700 font-bold uppercase tracking-wide mb-2">
              🗣 Exclusive to BEGAWN
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              Real communication with real clients — every week
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-lg">
              Each phase includes actual SME interviews, client feedback sessions, and professional
              Slack & email communication — the exact skills BEGAWN's own writers use every day.
            </p>
          </div>
          <a
            href="#register"
            className="bg-brand-700 text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-brand-800 transition-colors flex-shrink-0"
          >
            Join the Program
          </a>
        </div>
      </div>
    </section>
  );
}

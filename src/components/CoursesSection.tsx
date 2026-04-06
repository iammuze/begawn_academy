"use client";
import { useState } from "react";
import { Stars, Avatar } from "./shared";
import { COURSES, type Course } from "@/data/courses";

function CourseCard({ c }: { c: Course }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-200"
      style={{
        boxShadow: hov ? "0 12px 32px rgba(0,0,0,0.10)" : "0 2px 8px rgba(0,0,0,0.04)",
        transform: hov ? "translateY(-4px)" : "none",
      }}
    >
      {/* Thumbnail */}
      <div
        className="h-36 flex items-center justify-center relative"
        style={{ background: `linear-gradient(135deg, ${c.avatarBg}15, ${c.avatarBg}30)` }}
      >
        <span
          className="text-5xl transition-transform duration-200"
          style={{ transform: hov ? "scale(1.1)" : "scale(1)" }}
        >
          {c.emoji}
        </span>
        {c.isNew && (
          <div className="absolute top-2.5 left-2.5">
            <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-0.5 rounded">
              New
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-[15px] font-bold text-slate-900 leading-snug mb-1.5">{c.title}</h3>
        <p className="text-[13px] text-slate-500 leading-relaxed mb-2.5 flex-1">{c.subtitle}</p>

        <div className="flex items-center gap-1.5 mb-2">
          <Avatar initials={c.initials} bg={c.avatarBg} size={22} />
          <span className="text-xs text-slate-500">{c.instructor}</span>
        </div>

        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[13px] font-bold text-amber-700">{c.rating}</span>
          <Stars rating={c.rating} />
          <span className="text-xs text-slate-400">({c.reviews.toLocaleString()})</span>
        </div>

        <div className="flex gap-3 mb-2.5 flex-wrap">
          {[
            { icon: "📹", val: c.hours },
            { icon: "📚", val: `${c.lessons} lessons` },
            { icon: "👥", val: c.students },
          ].map((m, i) => (
            <span key={i} className="text-xs text-slate-500 flex items-center gap-0.5">
              <span>{m.icon}</span>
              {m.val}
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <span
            className="text-xs font-bold px-2.5 py-0.5 rounded"
            style={{ color: c.levelColor, background: c.levelBg }}
          >
            {c.level}
          </span>
          <div className="flex gap-1">
            {c.tags.slice(0, 2).map((t) => (
              <span key={t} className="text-[11px] text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 pb-3.5 pt-2.5 border-t border-slate-100">
        <a
          href="#register"
          className="block text-center bg-brand-700 text-white py-2.5 rounded-md font-bold text-sm hover:bg-brand-800 transition-colors"
        >
          Enroll in This Course
        </a>
      </div>
    </div>
  );
}

export default function CoursesSection() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Beginner", "Intermediate", "Advanced", "All Levels"];
  const filtered = filter === "All" ? COURSES : COURSES.filter((c) => c.level === filter);

  return (
    <section id="courses" className="py-16 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-8 flex-wrap gap-4">
          <div>
            <div className="text-xs font-bold text-brand-700 uppercase tracking-widest mb-2">
              What You'll Learn
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
              All Courses in the Program
            </h2>
            <p className="text-slate-500 text-sm">
              Every course is built on real projects — not slideshows or theory.
            </p>
          </div>
          <a href="#register" className="text-brand-700 text-sm font-bold hover:underline">
            View full curriculum →
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-7 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-[13px] font-semibold border-2 cursor-pointer transition-all ${
                filter === f
                  ? "border-brand-700 bg-brand-700 text-white"
                  : "border-slate-200 bg-white text-slate-500 hover:border-slate-300"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((c) => (
            <CourseCard key={c.id} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

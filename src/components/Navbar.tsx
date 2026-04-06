"use client";
import { useState } from "react";
import Logo from "@/assests/logo/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#courses");

  const navLinks = [
    ["#courses", "Courses"],
    ["#roadmap", "Learning Path"],
    ["#tools", "Tools"],
    ["#mentors", "Instructors"],
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-4">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-1 flex-shrink-0 no-underline"
        >
          <img
            src={Logo.src}
            alt="Begawn Logo"
            className="w-8  h-8  object-contain"
          />
          <span className="font-extrabold text-lg text-slate-900 tracking-tight uppercase">
            Begawn <span className="text-brand-700">Academy</span>
          </span>
        </a>

        {/* Nav links — desktop */}
        <div className="hidden lg:flex gap-1 ml-4">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              className={`text-sm font-medium px-3 py-1.5 rounded-md transition-all ${
                active === href
                  ? "bg-brand-700 text-white"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 max-w-sm relative mx-2">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            placeholder="Search courses, skills..."
            className="w-full pl-10 pr-4 py-2 rounded-3xl border border-slate-200 bg-slate-50 text-slate-900 text-sm outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-700/10 transition-all"
          />
        </div>

        <div className="flex-1" />

        {/* CTAs */}
        <div className="hidden md:flex gap-2.5 items-center">
          {/* <a
            href="#courses"
            onClick={() => setActive("#courses")}
            className="text-slate-500 text-sm font-semibold px-4 py-2 rounded-lg border border-slate-200 hover:border-slate-400 hover:text-slate-900 transition-all"
          >
            Browse Courses
          </a> */}
          <a
            href="https://forms.gle/mqAetbQ3eENmFMYa7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-700 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-brand-800 transition-colors whitespace-nowrap"
          >
            Register Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-slate-500 text-xl p-1"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="bg-white border-t border-slate-200 px-6 py-4 flex flex-col gap-1 md:hidden">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => {
                setActive(href);
                setOpen(false);
              }}
              className={`text-base font-medium px-3 py-2.5 rounded-md ${
                active === href
                  ? "bg-brand-700 text-white"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              {label}
            </a>
          ))}

          <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2">
            {/* <a
              href="#courses"
              className="text-slate-900 text-sm font-semibold px-3 py-2.5 border border-slate-200 rounded-lg text-center"
            >
              Browse Courses
            </a> */}
            <a
              href="https://forms.gle/mqAetbQ3eENmFMYa7"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-brand-700 text-white px-6 py-2.5 rounded-lg text-center font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--brand-rgb),0.4)] hover:scale-[1.02] active:scale-[0.98] group"
            >
              {/* Shine effect */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

              <span className="relative z-10">Register Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

"use client";
import { Stars, Avatar } from "./shared";

const instructors = [
  { name: "Priya Mehta",    role: "Technical Writing Lead",      courses: 2, students: "4.2k", rating: 4.8, initials: "PM", bg: "#7c3aed" },
  { name: "Arjun Kapoor",   role: "API Docs Specialist",          courses: 2, students: "3.1k", rating: 4.7, initials: "AK", bg: "#1d4ed8" },
  { name: "Sneha Rao",      role: "Developer Docs Expert",        courses: 1, students: "2.4k", rating: 4.9, initials: "SR", bg: "#b45309" },
  { name: "Divya Nair",     role: "Portfolio & Career Coach",     courses: 1, students: "2.9k", rating: 4.8, initials: "DN", bg: "#15803d" },
  { name: "Rahul Singh",    role: "Client Communication Expert",  courses: 1, students: "1.8k", rating: 4.6, initials: "RS", bg: "#0e7490" },
  { name: "Vikram Patel",   role: "Corporate Readiness Lead",     courses: 1, students: "1.2k", rating: 4.5, initials: "VP", bg: "#6d28d9" },
];

const clients = [
  "Intel", "Tata Communications", "TrendSpider", "Knowi",
  "SignalStack", "InstaWP", "ProtectOnce", "Rebel Bots",
];

const whatYouGet = [
  { icon: "📂", title: "Real Project Portfolio",   desc: "5–8 real-world documented pieces that employers can verify." },
  { icon: "🏅", title: "BEGAWN Certificate",        desc: "Industry-recognized certificate from an active writing agency." },
  { icon: "🧑‍💼", title: "1-on-1 Mentorship",         desc: "Personal sessions from active writers — not automated feedback." },
  { icon: "🎯", title: "Placement Support",          desc: "Resume screening, mock interviews and direct referrals." },
  { icon: "🚀", title: "Chance to Join BEGAWN",      desc: "Top performers get offered a full role on the team." },
  { icon: "♾️", title: "Lifetime Alumni Access",     desc: "Community of writers for job leads and collaboration forever." },
];

export default function Mentors() {
  return (
    <section id="mentors" className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-9">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">
            Your Instructors
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
            Trained by Real Writers
          </h2>
          <p className="text-slate-500 text-sm max-w-md">
            Every instructor is an active BEGAWN writer working with global clients today.
          </p>
        </div>

        {/* Instructor grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-9">
          {instructors.map((inst, i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-lg transition-shadow"
            >
              <Avatar initials={inst.initials} bg={inst.bg} size={50} />
              <div className="mt-3 text-sm font-bold text-slate-900 mb-0.5">{inst.name}</div>
              <div className="text-xs text-slate-500 mb-2.5">{inst.role}</div>
              <div className="flex items-center gap-1.5 mb-1.5">
                <Stars rating={inst.rating} />
                <span className="text-xs font-bold text-amber-700">{inst.rating}</span>
              </div>
              <div className="text-xs text-slate-400">
                {inst.courses} course{inst.courses > 1 ? "s" : ""} · {inst.students} students
              </div>
            </div>
          ))}
        </div>

        {/* Clients */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-4">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3.5 text-center">
            Clients Our Instructors Have Delivered Docs For
          </div>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {clients.map((c) => (
              <span
                key={c}
                className="bg-slate-50 border border-slate-200 rounded-md px-4 py-1.5 text-sm font-semibold text-gray-700"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-slate-900 rounded-xl p-7 flex gap-5 items-start flex-wrap">
          <div className="text-5xl text-brand-500 leading-none font-serif flex-shrink-0">"</div>
          <div>
            <p className="text-base text-slate-300 leading-relaxed italic mb-3.5">
              BEGAWN thoroughly completed the project. Hard working, very reliable. We would highly
              recommend them.
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-brand-700 rounded-full flex items-center justify-center font-extrabold text-white text-lg">
                I
              </div>
              <div>
                <div className="font-bold text-white text-sm">Intel — Verified Client</div>
                <Stars rating={5} size={13} />
              </div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="mt-10">
          <h3 className="text-xl font-extrabold text-slate-900 mb-5">What You Get on Completion</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {whatYouGet.map((w, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-4.5 hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-2.5">{w.icon}</div>
                <div className="text-sm font-bold text-slate-900 mb-1">{w.title}</div>
                <p className="text-xs text-slate-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

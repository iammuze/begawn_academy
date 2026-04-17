"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Stars } from "./shared";

const instructors = [
  { name: "Akash", role: "Lead Technical Writer",          courses: 2,  rating: 4.8, img: "/instructors/p1.png" },
  { name: "Namit", role: "API Documentation Specialist",   courses: 2,  rating: 4.7, img: "/instructors/p2.jpg" },
  { name: "Rohan", role: "Developer Documentation Expert", courses: 1,  rating: 4.9, img: "/instructors/p3.png" },
  { name: "Sumit", role: "Team Lead & Career Mentor",      courses: 1,  rating: 4.8, img: "/instructors/p4.jpg" },
];

const clients = [
  { name: "MediLedger", logo: "/company/12img.png" },
  { name: "Knowi",      logo: "/company/11img.png" },
  { name: "InstaWP",    logo: "/company/10img.png" },
  { name: "LayerZero",  logo: "/company/7img.png"  },
  { name: "Scalemath",  logo: "/company/6img.png"  },
  { name: "Amove",      logo: "/company/5img.png"  },
  { name: "OneDeck",    logo: "/company/4img.png"  },
  { name: "Muso AI",    logo: "/company/3img.png"  },
  { name: "Rebel Bots", logo: "/company/2img.png"  },
  { name: "SimpleTix",  logo: "/company/1img.png"  },
];

const whatYouGet = [
  { icon: "📂", title: "Real Project Portfolio",  desc: "5–8 pieces employers can verify and recruiters love.",              bar: "#3b82f6", ibg: "rgba(59,130,246,.12)",  bbg: "rgba(59,130,246,.15)",  btx: "#60a5fa", badge: "5–8 Pieces" },
  { icon: "🏅", title: "BEGAWN Certificate",       desc: "From an active agency — not a coaching institute.",               bar: "#8b5cf6", ibg: "rgba(139,92,246,.12)",  bbg: "rgba(139,92,246,.15)",  btx: "#a78bfa", badge: "Recognized"  },
  { icon: "🧑‍💼", title: "1-on-1 Mentorship",        desc: "Personal sessions from active writers, not automated bots.",      bar: "#0ea5e9", ibg: "rgba(14,165,233,.12)",  bbg: "rgba(14,165,233,.15)",  btx: "#38bdf8", badge: "Personal"    },
  { icon: "🎯", title: "Placement Support",         desc: "Resume screening, mock interviews, direct referrals.",            bar: "#10b981", ibg: "rgba(16,185,129,.12)",  bbg: "rgba(16,185,129,.15)",  btx: "#34d399", badge: "Job Ready"   },
  { icon: "🚀", title: "Chance to Join BEGAWN",     desc: "Top performers get offered a full-time role on the team.",        bar: "#f59e0b", ibg: "rgba(245,158,11,.12)",  bbg: "rgba(245,158,11,.15)",  btx: "#fbbf24", badge: "Top Talent"  },
  { icon: "♾️", title: "Lifetime Alumni Access",    desc: "Job leads, referrals and collaboration — forever.",               bar: "#ec4899", ibg: "rgba(236,72,153,.12)",  bbg: "rgba(236,72,153,.15)",  btx: "#f472b6", badge: "Lifetime"    },
];

const stats = [
  { num: "5–8",  label: "Real Projects"     },
  { num: "100%", label: "Placement Support" },
  { num: "♾️",   label: "Alumni Access"     },
];

const CSS = `
  @keyframes marquee  { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes fadeUp   { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
  @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
  @keyframes scaleIn  { from{opacity:0;transform:scale(0.93)} to{opacity:1;transform:scale(1)} }
  @keyframes slideL   { from{opacity:0;transform:translateX(-20px)} to{opacity:1;transform:translateX(0)} }
  @keyframes pulseSlow{ 0%,100%{transform:scale(1)} 50%{transform:scale(1.07)} }

  .marquee-track              { animation: marquee 30s linear infinite; }
  .marquee-track:hover        { animation-play-state: paused; }

  .ao-fadeup, .ao-fadein, .ao-scale, .ao-slidel { opacity: 0; }
  .ao-fadeup.visible  { animation: fadeUp  0.55s ease forwards; }
  .ao-fadein.visible  { animation: fadeIn  0.45s ease forwards; }
  .ao-scale.visible   { animation: scaleIn 0.45s ease forwards; }
  .ao-slidel.visible  { animation: slideL  0.45s ease forwards; }

  .inst-card:hover .inst-ring  { box-shadow: 0 0 0 3px rgba(96,165,250,.4); }
  .inst-ring                   { transition: box-shadow 0.25s; }
  .get-card:hover .get-bar     { width: 52px !important; }
  .get-card:hover .get-icon    { transform: scale(1.12); }
  .get-card:hover .get-glow    { opacity: 0.18 !important; }
  .get-bar  { transition: width 0.3s ease; }
  .get-icon { transition: transform 0.2s ease; }
  .get-glow { transition: opacity 0.3s ease; }
`;

export default function Mentors() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    const els = sectionRef.current?.querySelectorAll(
      ".ao-fadeup, .ao-fadein, .ao-scale, .ao-slidel"
    );
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    // ✅ Full dark background for the section
    <section id="mentors" className="py-16 px-6 bg-[#0a0f1e] border-t border-slate-800">
      <style>{CSS}</style>

      <div className="max-w-7xl mx-auto" ref={sectionRef}>

        {/* ── Header ── */}
        <div className="mb-9">
          <div
            className="ao-fadein inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-3"
            style={{ animationDelay: "0s" }}
          >
            ⭐ Your Instructors
          </div>
          <h2
            className="ao-fadeup text-3xl lg:text-4xl font-extrabold text-slate-100 mb-2"
            style={{ animationDelay: "0.06s" }}
          >
            Trained by <span className="text-blue-400">Real Writers</span>
          </h2>
          <p
            className="ao-fadeup text-slate-500 text-sm max-w-md"
            style={{ animationDelay: "0.12s" }}
          >
            Every instructor is an active BEGAWN writer working with global clients today.
          </p>
        </div>

        {/* ── Instructor Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          {instructors.map((inst, i) => (
            <div
              key={i}
              className="inst-card ao-fadeup bg-[#111827] border border-slate-800 rounded-xl p-4 flex flex-col items-center text-center hover:border-blue-500/40 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${0.1 + i * 0.07}s` }}
            >
              <div className="inst-ring relative w-14 h-14 rounded-full overflow-hidden mb-3 flex-shrink-0">
                <Image
                  src={inst.img}
                  alt={inst.name}
                  fill
                  sizes="56px"
                  className="object-cover object-top"
                  priority={i < 2}
                />
              </div>
              <div className="text-sm font-bold text-slate-100 leading-tight mb-0.5">{inst.name}</div>
              <div className="text-[11px] text-slate-500 mb-2 leading-tight">{inst.role}</div>
              <div className="flex items-center gap-1 mb-1">
                <Stars rating={inst.rating} />
                <span className="text-[11px] font-bold text-amber-400">{inst.rating}</span>
              </div>
            
            </div>
          ))}
        </div>

        {/* ── Client Marquee ── */}
    <div
          className="ao-fadein bg-white border border-slate-200 rounded-xl py-6 mb-6 overflow-hidden"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-4 text-center">
            Clients Our Instructors Have Delivered Docs For
          </div>
          <div className="overflow-hidden">
            <div className="marquee-track flex gap-10 w-max items-center">
              {[...clients, ...clients].map((c, i) => (
                <div key={i} className="flex items-center justify-center" style={{ minWidth: 120 }}>
                  <div className="relative h-9 w-28">
                    <Image
                      src={c.logo}
                      alt={c.name}
                      fill
                      sizes="112px"
                      className="object-contain object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Testimonial ── */}
        {/* <div
          className="ao-slidel relative rounded-xl p-6 flex gap-4 items-start flex-wrap mb-0 overflow-hidden"
          style={{
            background: "linear-gradient(135deg,#0f172a,#1e1b4b)",
            border: "1px solid #1e293b",
            animationDelay: "0.15s",
          }}
        >
         
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(99,102,241,.12),transparent 70%)" }} />

          <div className="text-5xl text-indigo-400 leading-none font-serif flex-shrink-0 mt-[-4px]">"</div>
          <div className="flex-1">
            <p className="text-sm text-slate-400 leading-relaxed italic mb-4">
              BEGAWN thoroughly completed the project. Hard working, very reliable. We would highly recommend them.
            </p>
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-blue-800 rounded-full flex items-center justify-center font-extrabold text-blue-300 text-base flex-shrink-0">
                I
              </div>
              <div>
                <div className="font-bold text-slate-200 text-sm">Intel — Verified Client</div>
                <Stars rating={5} size={12} />
              </div>
            </div>
          </div>
        </div> */}

        {/* ── What You Get ── */}
        <div className="mt-10">

          {/* Strip header */}
          <div
            className="ao-fadein flex items-center justify-center gap-3 mb-5"
            style={{ animationDelay: "0s" }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-slate-800" />
            <span className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              🎓 Upon Completion
            </span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-slate-800" />
          </div>

          <h3
            className="ao-fadeup text-2xl lg:text-3xl font-extrabold text-slate-100 text-center mb-6"
            style={{ animationDelay: "0.06s" }}
          >
            Everything You Walk Away With
          </h3>
          

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {stats.map((s, i) => (
              <div
                key={i}
                className="ao-scale bg-[#111827] border border-slate-800 rounded-xl py-3 text-center"
                style={{ animationDelay: `${0.15 + i * 0.08}s` }}
              >
                <div className="text-lg font-extrabold text-blue-400">{s.num}</div>
                <div className="text-[10px] text-slate-600 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-3">
            {whatYouGet.map((w, i) => (
              <div
                key={i}
                className="get-card ao-fadeup relative bg-[#111827] border border-slate-800 rounded-2xl p-4 overflow-hidden hover:-translate-y-1.5 transition-all duration-200"
                style={{
                  animationDelay: `${0.2 + i * 0.07}s`,
                  // hover border color set via CSS custom prop
                  ["--hover-border" as string]: w.bar,
                }}
              >
                {/* Glow */}
                <div
                  className="get-glow absolute -top-5 -right-5 w-20 h-20 rounded-full opacity-0 pointer-events-none"
                  style={{ background: w.bar }}
                />
                {/* Number */}
                <span className="absolute top-3 right-3.5 text-2xl font-black text-slate-800 select-none">
                  0{i + 1}
                </span>
                {/* Bar */}
                <div className="get-bar h-0.5 rounded-full mb-3" style={{ background: w.bar, width: 32 }} />
                {/* Icon */}
                <div
                  className="get-icon w-9 h-9 rounded-xl flex items-center justify-center text-lg mb-3"
                  style={{ background: w.ibg }}
                >
                  {w.icon}
                </div>
                <div className="text-sm font-bold text-slate-200 mb-1">{w.title}</div>
                <p className="text-xs text-slate-500 leading-relaxed mb-2.5">{w.desc}</p>
                <span
                  className="inline-flex items-center text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                  style={{ background: w.bbg, color: w.btx }}
                >
                  {w.badge}
                </span>
              </div>
            ))}
          </div>

        

        </div>
      </div>
    </section>
  );
}
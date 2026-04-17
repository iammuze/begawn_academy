"use client";

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const profiles = [
  {
    icon: "🎓",
    title: "College Students",
    sub: "B.Tech · BCA · BSc IT",
    desc: "Final-year students who want to start their career before graduation.",
  },
  {
    icon: "🌱",
    title: "Fresh Graduates",
    sub: "0–1 Year Experience",
    desc: "No experience? No problem. We build your skills and portfolio from scratch.",
  },
  {
    icon: "🔄",
    title: "Career Changers",
    sub: "Any Background",
    desc: "Transition into tech without having to learn a single line of code.",
  },
  {
    icon: "🌏",
    title: "Remote-Job Seekers",
    sub: "Work from Anywhere",
    desc: "Dream of working with global clients from your city? This is the path.",
  },
];

const checklist = [
  "You want a well-paying job without learning to code",
  "You're good at explaining things clearly in English",
  "You want global exposure and remote work opportunities",
  "You want a real portfolio — not just another certificate",
  "You're ready to put in 45 days of focused, structured effort",
];

export default function WhoShouldJoin() {
  return (
    <section id="who-should-join" className="py-20 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Profiles */}
          <div>
            <div className="text-[11px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-3">
              Perfect For
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
              Who Should Join?
            </h2>
            
            <div className="flex flex-col gap-4">
              {profiles.map((p, i) => (
                <div
                  key={i}
                  className="group bg-white border border-slate-200 rounded-2xl p-5 flex gap-5 items-start hover:border-blue-400 hover:shadow-md transition-all duration-300 cursor-default"
                >
                  <div className="text-4xl  transition-all duration-300 pt-1">
                    {p.icon}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className="text-base font-bold text-slate-900">{p.title}</span>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wider">
                        {p.sub}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Checklist */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-slate-900 rounded-3xl p-8 lg:p-10 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-2xl font-bold mb-6 relative z-10">This is for you if:</h3>
              
              <ul className="space-y-6 relative z-10">
                {checklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 className="text-emerald-400" size={20} />
                    </div>
                    <p className="text-slate-300 text-base font-medium leading-snug">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-slate-800">
                <p className="text-emerald-400 font-bold text-sm mb-2 italic">
                  "The fastest way to break into Big Tech."
                </p>
                <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                  45 Days Intensive Training
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
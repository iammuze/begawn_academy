"use client";

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
    <section className="py-16 px-6 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">
              Perfect For
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-7">
              Who Should Join?
            </h2>
            <div className="flex flex-col gap-3">
              {profiles.map((p, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex gap-3.5 items-start hover:bg-blue-50 hover:border-blue-200 transition-all cursor-default"
                >
                  <span className="text-3xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-slate-900">{p.title}</span>
                      <span className="text-xs text-slate-500 bg-slate-200 px-2 py-0.5 rounded-full">
                        {p.sub}
                      </span>
                    </div>
                    <p className="text-[13.5px] text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <div className="bg-slate-900 rounded-2xl p-8 text-white lg:sticky lg:top-20">
            <h3 className="text-xl font-extrabold mb-1.5">You Belong Here If…</h3>
            <p className="text-slate-400 text-sm mb-6">
              Say yes to even one — this program was built for you.
            </p>
            {checklist.map((c, i) => (
              <div key={i} className="flex gap-3 items-start mb-4">
                <div className="w-5 h-5 rounded-full bg-brand-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-[14.5px] text-slate-300 leading-relaxed">{c}</span>
              </div>
            ))}
            <a
              href="#register"
              className="block mt-6 bg-brand-700 text-white py-3.5 rounded-lg text-center font-bold text-base hover:bg-brand-800 transition-colors"
            >
              Register Now →
            </a>
            <p className="text-center text-xs text-slate-500 mt-2.5">
              ⏰ Limited seats per batch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

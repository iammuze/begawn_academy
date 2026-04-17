"use client";

const LOCK = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

// ... (cats data remains the same as your input)
const cats = [
  {
    label: "Writing & Editing",
    icon: "✍️",
    color: "#1d4ed8",
    border: "#bfdbfe",
    bg: "#eff6ff",
    tools: [
      { n: "Google Docs", img: "/tools/gd.png" },
      { n: "Notion", img: "/tools/notion.png" },
      { n: "Confluence", img: "/tools/confluence.svg" },
      { n: "Grammarly", img: "/tools/gd.png" },
    ],
  },
  {
    label: "Code & Versioning",
    icon: "⌨️",
    color: "#7c3aed",
    border: "#ddd6fe",
    bg: "#faf5ff",
    tools: [
      { n: "VS Code", img: "/tools/vs.png" },
      { n: "GitHub", img: "/tools/github.png" },
      { n: "Swagger / OpenAPI", img: "/tools/swagger.svg" },
      { n: "GitLab", img: "/tools/gitlab.svg" },
    ],
  },
  {
    label: "Media & Capture",
    icon: "🎬",
    color: "#b45309",
    border: "#fde68a",
    bg: "#fffbeb",
    tools: [
      { n: "Snagit", img: "/tools/gd.png" },
      { n: "Loom", img: "/tools/loom.svg" },
      { n: "Figma", img: "/tools/figma.svg" },
      { n: "Screen Studio", img: "/tools/screen.png" },
    ],
  },
  {
    label: "Communication",
    icon: "💬",
    color: "#0369a1",
    border: "#bae6fd",
    bg: "#f0f9ff",
    tools: [
      { n: "Slack", img: "/tools/slack.svg" },
      { n: "Microsoft Teams", img: "/tools/microsoft-teams.svg" },
      { n: "Discord", img: "/tools/discord.svg" },
      { n: "Telegram", img: "/tools/telegram.png" }
    ],
  },
  {
    label: "Project Management",
    icon: "📋",
    color: "#0f766e",
    border: "#99f6e4",
    bg: "#f0fdfa",
    tools: [
      { n: "Jira", img: "/tools/jira.svg" },
      { n: "Asana", img: "/tools/asana.svg" },
      { n: "Trello", img: "/tools/trello.svg" },
      { n: "Monday.com", locked: true, img: "/tools/gd.png" },
    ],
  },
  {
    label: "AI Tools",
    icon: "🤖",
    color: "#be185d",
    border: "#fbcfe8",
    bg: "#fdf2f8",
    tools: [
      { n: "Claude", img: "/tools/claude.svg" },
      { n: "ChatGPT", img: "/tools/chatgpt.svg" },
      { n: "GitHub Copilot", locked: true, img: "/tools/github.png" },
      { n: "Gemini AI", locked: true, img: "/tools/gemini.png" },
    ],
  }
];

export default function Tools() {
  return (
   <section id="tools" className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-9">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-widest mb-2">
            Industry-Standard Stack
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">
            Tools You'll Master
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((cat, i) => (
            <div 
              key={i} 
              className="bg-white border border-slate-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-slate-300"
            >
              {/* Header - Always colored */}
              <div
                className="px-4 py-3.5 flex items-center gap-2.5 border-b"
                style={{ background: cat.bg, borderColor: cat.border }}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="font-bold text-sm" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>

              {/* Tools List */}
              {cat.tools.map((t, j) => (
                <div
                  key={j}
                  className="group flex items-center gap-3.5 px-4 py-3 transition-colors duration-200 hover:bg-slate-50"
                  style={{
                    borderBottom: j < cat.tools.length - 1 ? "1px solid #f1f5f9" : "none",
                  }}
                >
                  {/* Icon - Grayscale removed, always full color */}
                  <img
                    src={t.img}
                    alt={t.n}
                    className="w-5 h-5 object-contain flex-shrink-0"
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3">
                      {/* Text - Always slate-900, nudges right on hover */}
                      <div className="text-sm font-semibold text-slate-900 transition-transform duration-200 group-hover:translate-x-1">
                        {t.n}
                      </div>
                      
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
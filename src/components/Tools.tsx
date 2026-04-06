const cats = [
  {
    label: "Writing & Editing",
    icon: "✍️",
    color: "#1d4ed8",
    border: "#bfdbfe",
    bg: "#eff6ff",
    tools: [
      { n: "Google Docs", d: "Live collaboration & comments" },
      { n: "Notion", d: "Knowledge base & documentation" },
      { n: "Confluence", d: "Enterprise-grade wiki system" },
      { n: "Grammarly", d: "Style & grammar refinement" },
    ],
  },
  {
    label: "Code & Versioning",
    icon: "⌨️",
    color: "#7c3aed",
    border: "#ddd6fe",
    bg: "#faf5ff",
    tools: [
      { n: "VS Code", d: "Docs-as-code editing" },
      { n: "GitHub / Git", d: "Version control for docs" },
      { n: "Markdown / MDX", d: "Standard technical writing format" },
      { n: "Swagger / OpenAPI", d: "API documentation specs" },
    ],
  },
  {
    label: "Media & Capture",
    icon: "🎬",
    color: "#b45309",
    border: "#fde68a",
    bg: "#fffbeb",
    tools: [
      { n: "Snagit", d: "Professional screenshot tool" },
      { n: "Loom", d: "Video walkthroughs & recording" },
      { n: "Figma (Reading)", d: "Design context for writers" },
      { n: "AI Writing Tools", d: "ChatGPT, Claude & Copilot" },
    ],
  },
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
          <p className="text-slate-500 text-sm">
            You don't just learn about these tools — you use them on real client projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cats.map((cat, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
              <div
                className="px-4 py-3.5 flex items-center gap-2.5 border-b"
                style={{ background: cat.bg, borderColor: cat.border }}
              >
                <span className="text-xl">{cat.icon}</span>
                <span className="font-bold text-sm" style={{ color: cat.color }}>
                  {cat.label}
                </span>
              </div>
              {cat.tools.map((t, j) => (
                <div
                  key={j}
                  className="flex items-center gap-3.5 px-4 py-3"
                  style={{ borderBottom: j < cat.tools.length - 1 ? "1px solid #f8fafc" : "none" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: cat.color }}
                  />
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{t.n}</div>
                    <div className="text-xs text-slate-400">{t.d}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-4 bg-white border border-slate-200 rounded-xl px-5 py-4 flex items-center gap-3.5">
          <span className="text-2xl">✨</span>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Every tool is used on live client projects.</strong> By graduation, your
            portfolio proves your proficiency — no separate certification courses needed.
          </p>
        </div>
      </div>
    </section>
  );
}

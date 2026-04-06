export default function TrustBar() {
  const stats = [
    { icon: "👥", value: "4,200+", label: "Students Enrolled" },
    { icon: "📄", value: "5,000+", label: "Hours of Docs Delivered" },
    { icon: "⭐", value: "5.0", label: "Average Rating" },
    { icon: "🎯", value: "100%", label: "Placement Support" },
    { icon: "🌐", value: "10+", label: "Enterprise Clients" },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-5 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 items-center justify-center">
        {stats.map((s, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <span className="text-xl">{s.icon}</span>
            <div>
              <div className="text-base font-extrabold text-slate-900 leading-tight">{s.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-wide">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

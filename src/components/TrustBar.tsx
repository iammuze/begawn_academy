export default function TrustBar() {
  const stats = [
    { icon: "👥", value: "400+", label: "Students Enrolled" },
    { icon: "📄", value: "500+", label: "Hours of Docs Delivered" },
    { icon: "⭐", value: "5.0", label: "Average Rating" },
    { icon: "🎯", value: "100%", label: "Placement Support" },
    { icon: "🌐", value: "10+", label: "Enterprise Clients" },
  ];

  return (
    <section className="bg-white border-b border-slate-200 py-5 px-6">
     <div className="max-w-7xl mx-auto px-4 sm:px-6">
  <div className="
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5 
    gap-6 sm:gap-8 
    items-center 
    justify-items-center
  ">
    {stats.map((s, i) => (
      <div key={i} className="flex items-center gap-2.5">
        <span className="text-lg sm:text-xl">{s.icon}</span>

        <div>
          <div className="text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
            {s.value}
          </div>

          <div className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wide">
            {s.label}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

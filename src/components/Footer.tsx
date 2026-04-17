import {
  FiPhone,
  FiMail,
  FiLinkedin,
  FiGlobe,
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  const navCols = [
    {
      h: "Quick Links",
      links: [
        ["#roadmap", "Learning Path"],
        ["#tools", "Tools"],
        ["#mentors", "Instructors"],
        ["#register", "Register Now"],
      ],
    },
    {
      h: "Program",
      links: [
        ["#roadmap", "45-Day Intensive"],
        ["#", "Real Client Projects"],
        ["#", "1-on-1 Mentorship"],
        ["#", "Portfolio Building"],
        ["#", "Placement Support"],
        ["#", "Alumni Community"],
      ],
    },
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-5 space-y-6">
            <a href="#" className="flex items-center gap-3 w-fit group">
              {/* <div className="p-2 bg-slate-900 rounded-xl border border-slate-800 group-hover:border-blue-500 transition-colors"> */}
              <Image
                src="/logo/logo.png"
                alt="Begawn Logo"
                width={32}
                height={32}
                className="object-contain"
              />
              {/* </div> */}
              <span className="font-bold text-xl text-white tracking-tight uppercase">
                Begawn <span className="text-blue-500">Academy</span>
              </span>
            </a>

            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              India's first dedicated technical writing{" "}
              <span className="text-slate-200 font-medium">
                {" "}
                <br /> 45 days. Real projects. Real placement.
              </span>
            </p>

            {/* Social & Web Links */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FiGlobe, href: "https://www.begawn.com" },
                {
                  icon: FiLinkedin,
                  href: "https://www.linkedin.com/company/begawn-pvt-ltd/",
                },
                { icon: FiMail, href: "mailto:info@begawn.com" },
              ].map(({ icon: Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  className="p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-blue-500 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            {navCols.map((col, i) => (
              <div key={i}>
                <p className="text-white text-sm font-bold mb-6 uppercase tracking-wider">
                  {col.h}
                </p>
                <ul className="space-y-4">
                  {col.links.map(([href, label]) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="group text-slate-400 text-[15px] hover:text-white transition-colors flex items-center w-fit"
                      >
                        <span className="relative">
                          {label}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
                        </span>
                        <FiArrowUpRight className="ml-1 w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-white text-sm font-bold mb-6 uppercase tracking-wider">
              Get in Touch
            </p>
            <div className="space-y-4">
              <a
                href="tel:7986228254"
                className="flex items-center gap-4 p-3 rounded-2xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase text-slate-500 font-bold tracking-tighter">
                    Call Us
                  </p>
                  <p className="text-sm text-slate-300">+91 7986228254</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-3">
                <FiMapPin className="text-blue-500 w-5 h-5 shrink-0 mt-1" />
                <p className="text-sm text-slate-400 leading-snug">
                  K&B Tower, F-465, Industrial Area,
                  <br />
                  Sector 74, SAS Nagar, Punjab 140307
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t  border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-xs flex items-center gap-4 uppercase">
            <span>© {new Date().getFullYear()} BEGAWN It Pvt. Ltd.</span>
            <span className="hidden md:inline w-1 h-1 bg-slate-800 rounded-full" />
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div>

          {/* <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <p className="text-slate-300 text-xs font-medium">
              Enrollment open for <span className="text-blue-400">Summer Batch</span>
            </p>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

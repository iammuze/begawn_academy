import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiLinkedin,
  FiArrowRight,
  FiGlobe,
} from "react-icons/fi";
import Logo from "@/assests/logo/logo.png";

export default function Footer() {
  const navCols = [
    {
      h: "Quick Links",
      links: [
        ["#courses", "Browse Courses"],
        ["#roadmap", "Learning Path"],
        ["#tools", "Tools"],
        ["#mentors", "Instructors"],
        ["#register", "Register Now"],
      ],
    },
    {
      h: "Program",
      links: [
        ["#", "45-Day Intensive"],
        ["#", "Real Client Projects"],
        ["#", "1-on-1 Mentorship"],
        ["#", "Portfolio Building"],
        ["#", "Placement Support"],
        ["#", "Alumni Community"],
      ],
    },
    {
      h: "Courses",
      links: [
        ["#courses", "TW Fundamentals"],
        ["#courses", "User Docs Mastery"],
        ["#courses", "API Documentation"],
        ["#courses", "Client Communication"],
        ["#courses", "Portfolio & Career"],
        ["#courses", "Corporate Readiness"],
      ],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 px-6 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand & Contact Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex items-center gap-1 flex-shrink-0 no-underline"
              >
                <img
                  src={Logo.src}
                  alt="Begawn Logo"
                  className="w-8  h-8  object-contain"
                />
                <span className="font-extrabold text-lg text-white  uppercase">
                  Begawn <span className="text-brand-700">Academy</span>
                </span>
              </a>
            </div>

            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              India's first dedicated technical writing academy. 45 days. Real
              projects. Real placement.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 text-sm text-gray-400">
              <a
                href="https://www.begawn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <FiGlobe className="text-blue-500 size-5" />
                <span className="group-hover:translate-x-1 transition-transform">
                  www.begawn.com
                </span>
              </a>
              {/* Phone */}
              <a
                href="tel:7986228254"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <FiPhone className="text-blue-500 size-5" />
                <span className="group-hover:translate-x-1 transition-transform">
                  +91 7986228254
                </span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@begawn.com"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <FiMail className="text-blue-500 size-5" />
                <span className="group-hover:translate-x-1 transition-transform">
                  info@begawn.com
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/begawn-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-white transition group"
              >
                <FiLinkedin className="text-blue-500 size-5" />
                <span className="group-hover:translate-x-1 transition-transform">
                  LinkedIn
                </span>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Plot+no.+E-309+Industrial+Area+Sector+75+Sahibzada+Ajit+Singh+Nagar+Punjab+140307"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-white transition group"
              >
                <FiMapPin className="text-blue-500 size-5 shrink-0" />
                <span className="leading-relaxed group-hover:translate-x-1 transition-transform">
                  Plot no. E-309 <br />
                  Industrial Area, Sector 75 <br />
                  Sahibzada Ajit Singh Nagar, Punjab 140307
                </span>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col, i) => (
            <div key={i} className="lg:pl-8">
              <div className="text-white font-semibold text-base mb-6 tracking-wide">
                {col.h}
              </div>
              <div className="space-y-3.5">
                {col.links.map(([href, label]) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-1.5 group text-slate-400 text-[14.5px] hover:text-white transition-colors"
                  >
                    {label}
                    <FiArrowRight className="w-4 h-4 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
          <p className="text-sm">
            © {new Date().getFullYear()} BEGAWN Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-sm font-medium text-slate-400">
            Write Your Future.{" "}
            <span className="text-blue-500 font-semibold">
              Join BEGAWN Academy.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

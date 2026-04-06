"use client";
import { useState } from "react";
import { Avatar, Stars } from "./shared";

type FormState = {
  firstName: string; lastName: string; email: string; phone: string;
  whatsapp: string; city: string; state: string; education: string;
  college: string; yearOfPassing: string; background: string;
  goal: string; hearAboutUs: string; linkedin: string; message: string;
  agreeTerms: boolean;
};

const initialForm: FormState = {
  firstName: "", lastName: "", email: "", phone: "",
  whatsapp: "", city: "", state: "", education: "",
  college: "", yearOfPassing: "", background: "",
  goal: "", hearAboutUs: "", linkedin: "", message: "",
  agreeTerms: false,
};

const inputCls =
  "w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm outline-none focus:border-brand-700 focus:ring-2 focus:ring-brand-700/10 transition-all font-sans";

export default function Register() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const t = e.target as HTMLInputElement;
    setForm((p) => ({ ...p, [t.name]: t.type === "checkbox" ? t.checked : t.value }));
  };

  const submit = () => {
    if (!form.firstName || !form.email || !form.phone || !form.agreeTerms) {
      alert("Please fill all required fields and agree to terms.");
      return;
    }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  if (submitted)
    return (
      <section id="register" className="py-20 px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-lg mx-auto text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Application Submitted!</h2>
          <p className="text-base text-slate-500 leading-relaxed mb-6">
            Thanks, <strong>{form.firstName}</strong>! We'll reach out within 24–48 hours at{" "}
            <strong>{form.email}</strong> with your next steps.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl px-5 py-4">
            <p className="text-brand-700 font-semibold text-sm">
              📩 Check your inbox for a confirmation from academy@begawn.com
            </p>
          </div>
        </div>
      </section>
    );

  return (
    <section id="register" className="py-16 px-6 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-7 items-start">

        {/* Form */}
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 px-7 py-6">
            <div className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-1">
              Applications Open
            </div>
            <h2 className="text-xl font-extrabold text-white mb-1">Apply to BEGAWN Academy</h2>
            <p className="text-sm text-slate-400">Fill in the form — we review within 24–48 hours.</p>
            {/* Step tabs */}
            <div className="flex mt-4 rounded-md overflow-hidden border border-white/10">
              {["Personal Info", "Education", "Your Goals"].map((s, i) => (
                <button
                  key={i}
                  onClick={() => setStep(i + 1)}
                  className={`flex-1 py-2 text-xs font-semibold cursor-pointer border-r last:border-r-0 border-white/10 transition-all ${
                    step === i + 1 ? "bg-brand-700 text-white" : "bg-white/5 text-slate-500 hover:bg-white/10"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="p-7">
            {step === 1 && (
              <div>
                <div className="text-sm font-bold text-slate-900 mb-4">👤 Personal Information</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div><label className="block text-xs font-semibold text-gray-700 mb-1.5">First Name <span className="text-red-500">*</span></label><input className={inputCls} name="firstName" value={form.firstName} onChange={handle} placeholder="Riya" /></div>
                  <div><label className="block text-xs font-semibold text-gray-700 mb-1.5">Last Name</label><input className={inputCls} name="lastName" value={form.lastName} onChange={handle} placeholder="Sharma" /></div>
                  <div><label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label><input className={inputCls} type="email" name="email" value={form.email} onChange={handle} placeholder="riya@example.com" /></div>
                  <div><label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label><input className={inputCls} type="tel" name="phone" value={form.phone} onChange={handle} placeholder="+91 98765 43210" /></div>
                  <div><label className="block text-xs font-semibold text-gray-700 mb-1.5">WhatsApp Number</label><input className={inputCls} type="tel" name="whatsapp" value={form.whatsapp} onChange={handle} placeholder="Same as above?" /></div>
                  <div><label className="block text-xs font-semibold text-gray-700 mb-1.5">LinkedIn Profile</label><input className={inputCls} name="linkedin" value={form.linkedin} onChange={handle} placeholder="linkedin.com/in/yourname" /></div>
                  <div><label className="block text-xs font-semibold text-gray-700 mb-1.5">City</label><input className={inputCls} name="city" value={form.city} onChange={handle} placeholder="Delhi" /></div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">State</label>
                    <select className={inputCls} name="state" value={form.state} onChange={handle}>
                      <option value="">Select State</option>
                      {["Andhra Pradesh","Bihar","Delhi","Gujarat","Haryana","Karnataka","Kerala","Maharashtra","Punjab","Rajasthan","Tamil Nadu","Telangana","Uttar Pradesh","West Bengal","Other"].map(s=><option key={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <button onClick={() => setStep(2)} className="mt-5 w-full bg-brand-700 text-white py-3 rounded-lg font-bold text-sm hover:bg-brand-800 transition-colors">
                  Continue → Education Details
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <div className="text-sm font-bold text-slate-900 mb-4">🎓 Education & Background</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Highest Education <span className="text-red-500">*</span></label>
                    <select className={inputCls} name="education" value={form.education} onChange={handle}>
                      <option value="">Select Qualification</option>
                      {["12th / HSC","B.Tech / BE","BCA","BSc IT / Computer Science","B.Com / BA / BSc (Other)","MBA / MCA / M.Tech","Other Graduate","Post Graduate"].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Year of Passing</label>
                    <select className={inputCls} name="yearOfPassing" value={form.yearOfPassing} onChange={handle}>
                      <option value="">Select Year</option>
                      {["2026","2025","2024","2023","2022","2021","2020 or earlier"].map(y=><option key={y}>{y}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">College / University Name</label>
                    <input className={inputCls} name="college" value={form.college} onChange={handle} placeholder="e.g. Delhi University, VIT, BITS" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Current Profile</label>
                    <select className={inputCls} name="background" value={form.background} onChange={handle}>
                      <option value="">Select one</option>
                      {["Final Year Student","Fresh Graduate (0–1 yr)","Working Professional (Career Switch)","Freelancer","Other"].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex gap-3 mt-5">
                  <button onClick={() => setStep(1)} className="bg-slate-100 text-gray-700 px-5 py-3 rounded-lg font-semibold text-sm">← Back</button>
                  <button onClick={() => setStep(3)} className="flex-1 bg-brand-700 text-white py-3 rounded-lg font-bold text-sm hover:bg-brand-800 transition-colors">Continue → Your Goals</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <div className="text-sm font-bold text-slate-900 mb-4">🎯 Your Goals</div>
                <div className="flex flex-col gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">What's your main goal? <span className="text-red-500">*</span></label>
                    <select className={inputCls} name="goal" value={form.goal} onChange={handle}>
                      <option value="">Select your goal</option>
                      {["Get my first tech job","Switch careers into technical writing","Work remotely with global clients","Freelance as a technical writer","Upskill while in college","Join BEGAWN's team directly"].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">How did you hear about us?</label>
                    <select className={inputCls} name="hearAboutUs" value={form.hearAboutUs} onChange={handle}>
                      <option value="">Select one</option>
                      {["LinkedIn","Instagram","Friend / Colleague","Google Search","YouTube","College / University","Other"].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Anything you'd like us to know?</label>
                    <textarea className={`${inputCls} resize-y`} name="message" value={form.message} onChange={handle} rows={3} placeholder="Tell us about yourself or ask any questions..." />
                  </div>
                  <label className="flex gap-3 items-start cursor-pointer bg-slate-50 px-4 py-3.5 rounded-lg border border-slate-200">
                    <input type="checkbox" name="agreeTerms" checked={form.agreeTerms} onChange={handle} className="mt-0.5 w-4 h-4 accent-brand-700 flex-shrink-0" />
                    <span className="text-xs text-slate-500 leading-relaxed">
                      I agree to BEGAWN Academy's terms and conditions. I understand enrollment is confirmed after a review call and seats are limited.
                    </span>
                  </label>
                </div>
                <div className="flex gap-3 mt-5">
                  <button onClick={() => setStep(2)} className="bg-slate-100 text-gray-700 px-5 py-3 rounded-lg font-semibold text-sm">← Back</button>
                  <button
                    onClick={submit}
                    disabled={loading}
                    className={`flex-1 py-3.5 text-white font-extrabold text-base rounded-lg transition-colors ${loading ? "bg-slate-400 cursor-not-allowed" : "bg-brand-700 hover:bg-brand-800 cursor-pointer"}`}
                  >
                    {loading ? "⏳ Submitting..." : "🚀 Submit Application"}
                  </button>
                </div>
                <p className="text-center text-xs text-slate-400 mt-2.5">🔒 Your information is private and secure.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-3.5 lg:sticky lg:top-20">
          <div className="bg-white border border-slate-200 rounded-xl p-5">
            <div className="text-sm font-bold text-slate-900 mb-3.5">📋 Program Snapshot</div>
            {[
              { l: "Duration", v: "45 Days" },
              { l: "Format",   v: "Offline + Real Experience" },
              { l: "Batch Size", v: "30 seats" },
              { l: "Certificate", v: "BEGAWN Certified" },
              { l: "Placement", v: "100% Support" },
              { l: "Language", v: "English" },
            ].map((r, i) => (
              <div key={i} className={`flex justify-between py-2.5 ${i < 5 ? "border-b border-slate-100" : ""}`}>
                <span className="text-xs text-slate-500">{r.l}</span>
                <span className="text-xs font-semibold text-slate-900">{r.v}</span>
              </div>
            ))}
          </div>
{/* 
          <div className="bg-amber-50 border border-amber-300 rounded-xl p-4">
            <div className="text-sm font-bold text-amber-800 mb-1.5">⏰ Limited Availability</div>
            <p className="text-xs text-amber-900 leading-relaxed">
              Only <strong>12 seats</strong> remaining in this batch. Applications are first-come, first-served.
            </p>
          </div> */}

          <div className="bg-white border border-slate-200 rounded-xl p-4">
            <div className="flex items-center gap-2.5 mb-2.5">
              <Avatar initials="RK" bg="#7c3aed" size={36} />
              <div>
                <div className="text-sm font-bold text-slate-900">Rohit K.</div>
                <div className="text-xs text-slate-500">Now at TCS as Technical Writer</div>
              </div>
            </div>
            <p className="text-xs text-gray-700 leading-relaxed italic">
              "I had zero experience. BEGAWN gave me real projects and a portfolio that got me hired in under 3 months."
            </p>
            <div className="mt-2"><Stars rating={5} /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

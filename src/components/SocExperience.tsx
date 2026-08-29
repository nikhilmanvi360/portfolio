import React from "react";
import { SOC_EXPERIENCE, SKILL_CATEGORIES } from "../data/portfolioData";

export const SocExperience: React.FC = () => {
  return (
    <div className="space-y-20 animate-fadeIn py-6 font-sans">
      {/* Section Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <span className="text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
          chronology & technical matrix
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-heading">
          Operational History.
        </h1>
        <p className="text-base text-slate-300 font-normal max-w-2xl">
          Real security operations, SIEM alert triage, log correlation, and core technical proficiencies documented chronologically.
        </p>
      </div>

      {/* 
        ==================================================
        CHRONOLOGICAL EXPERIENCE
        ==================================================
      */}
      <section className="space-y-12">
        <div className="text-xs font-mono-tech uppercase text-slate-400 border-b border-white/10 pb-2">
          CHRONOLOGY // 2024 — PRESENT
        </div>

        <div className="space-y-16">
          {SOC_EXPERIENCE.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start border-b border-white/10 pb-12">
              {/* Left Meta Column */}
              <div className="lg:col-span-4 space-y-2 font-mono-tech">
                <div className="text-rose-400 font-bold text-sm">{exp.period}</div>
                <h2 className="text-xl font-bold text-white font-heading">{exp.role}</h2>
                <div className="text-xs text-slate-400">{exp.organization}</div>
                <div className="text-[11px] text-slate-500 pt-1">{exp.type}</div>
              </div>

              {/* Right Detail Column */}
              <div className="lg:col-span-8 space-y-6 text-sm text-slate-300">
                <p className="text-base text-slate-200 italic border-l-2 border-rose-500 pl-4 py-1">
                  "{exp.summary}"
                </p>

                <div className="space-y-3">
                  <div className="text-xs font-mono-tech uppercase text-slate-400 font-semibold">
                    KEY RESPONSIBILITIES & INCIDENT TRIAGE
                  </div>
                  <ul className="space-y-2 text-slate-300 leading-relaxed">
                    {exp.keyResponsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="text-rose-500 font-mono font-bold">—</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 font-mono-tech text-xs text-slate-400">
                  <span className="text-rose-400 font-bold mr-2">DOMAINS:</span>
                  <span>{exp.domainsMastered.join("  ·  ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ==================================================
        TYPOGRAPHY-BASED SKILLS MATRIX (NO PILLS!)
        ==================================================
      */}
      <section className="space-y-10 border-t border-white/10 pt-16">
        <div className="space-y-2">
          <span className="text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
            technical domain matrix
          </span>
          <h2 className="text-3xl font-bold text-white font-heading">
            Proficiencies & Toolset.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-mono-tech text-xs">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="space-y-3 border-t border-white/10 pt-4">
              <div className="text-rose-400 font-bold uppercase tracking-wider">
                {cat.name}
              </div>
              <p className="text-slate-200 text-sm leading-relaxed font-sans">
                {cat.skills.join("  /  ")}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 
        ==================================================
        EDUCATION & CONTEXT
        ==================================================
      */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-16 text-xs font-mono-tech">
        <div className="space-y-2">
          <div className="text-rose-400 font-bold uppercase">DEGREE & EDUCATION</div>
          <div className="text-base text-white font-bold font-heading">BCA (Bachelor of Computer Applications)</div>
          <div className="text-slate-400">KLE's JT BCA College, Gadag</div>
          <div className="text-slate-500">Graduation: May 2027</div>
        </div>

        <div className="space-y-2">
          <div className="text-rose-400 font-bold uppercase">LANGUAGES</div>
          <div className="text-slate-300">English (Intermediate)</div>
          <div className="text-slate-300">Hindi (Intermediate)</div>
          <div className="text-slate-300">Japanese (Beginner A1)</div>
        </div>

        <div className="space-y-2">
          <div className="text-rose-400 font-bold uppercase">AVAILABILITY & LOCATION</div>
          <div className="text-slate-200">Bangalore & Gadag, India</div>
          <div className="text-slate-400 leading-relaxed font-sans">
            Ready for SOC L1 & Security Analyst roles with evening, weekend, and remote flexibility.
          </div>
        </div>
      </section>
    </div>
  );
};

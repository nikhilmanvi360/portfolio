import React from "react";
import { SOC_EXPERIENCE, SKILL_CATEGORIES } from "../data/portfolioData";
import { Shield, CheckCircle2 } from "lucide-react";

export const SocExperience: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn font-mono">
      {/* Title */}
      <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
        <div className="w-8 h-8 rounded bg-emerald-950/80 border border-emerald-600/50 flex items-center justify-center text-emerald-400">
          <Shield className="w-4 h-4" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-100 tracking-tight">
            SOC Operations & Skills Matrix
          </h2>
          <p className="text-xs text-slate-400">
            Practical Exposure, Incident Workflows & MITRE ATT&CK Mappings
          </p>
        </div>
      </div>

      {/* Operational Experience */}
      <div className="space-y-4">
        <h3 className="text-xs text-rose-400 font-bold uppercase tracking-wider">
          Operational Experience
        </h3>

        {SOC_EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className="p-6 rounded-xl bg-[#070B16] border border-slate-800 space-y-4 shadow-lg"
          >
            <div className="flex flex-wrap items-start justify-between gap-2 pb-3 border-b border-slate-800">
              <div>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-rose-950 text-rose-300 border border-rose-800 rounded">
                  {exp.type}
                </span>
                <h4 className="text-base font-bold text-slate-100 mt-1">{exp.role}</h4>
                <p className="text-xs text-slate-400">{exp.organization} • {exp.period}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-sans">{exp.summary}</p>

            {/* Responsibilities */}
            <div className="space-y-2">
              <span className="text-[11px] text-slate-400 uppercase block font-mono">
                Key Responsibilities:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
                {exp.keyResponsibilities.map((resp, i) => (
                  <div key={i} className="p-2.5 rounded bg-[#040712] border border-slate-800/80 flex items-start space-x-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-sans">{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Domains */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800">
              {exp.domainsMastered.map((domain, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[10px] bg-slate-900 text-slate-300 border border-slate-800 rounded"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Matrix */}
      <div className="space-y-3">
        <h3 className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
          Technical Skills Matrix
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-[#070B16] border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-slate-100">{cat.name}</h4>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 text-[11px] bg-[#040712] text-slate-300 border border-slate-800 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education, Languages & Availability */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-[#070B16] border border-slate-800 space-y-2 font-mono">
          <span className="text-[10px] text-rose-400 font-bold uppercase tracking-wider">EDUCATION</span>
          <h4 className="text-sm font-bold text-slate-100">BCA (Bachelor of Computer Applications)</h4>
          <p className="text-xs text-slate-400">KLE's JT BCA College</p>
          <div className="text-[11px] text-emerald-400 font-semibold pt-1">Expected Graduation: 05/2027 · Gadag, Karnataka</div>
        </div>

        <div className="p-4 rounded-xl bg-[#070B16] border border-slate-800 space-y-2 font-mono">
          <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">LANGUAGES</span>
          <div className="space-y-1.5 text-xs text-slate-300 pt-1">
            <div className="flex justify-between"><span>English</span><span className="text-slate-500 text-[10px]">Intermediate (B1)</span></div>
            <div className="flex justify-between"><span>Hindi</span><span className="text-slate-500 text-[10px]">Intermediate (B1)</span></div>
            <div className="flex justify-between"><span>Japanese</span><span className="text-slate-500 text-[10px]">Beginner (A1)</span></div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-[#070B16] border border-slate-800 space-y-2 font-mono">
          <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">AVAILABILITY & LOCATION</span>
          <h4 className="text-xs font-bold text-slate-200">Gadag, India 582101 / Bangalore</h4>
          <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
            Flexible for part-time roles with weekend and evening availability.
          </p>
        </div>
      </div>
    </div>
  );
};

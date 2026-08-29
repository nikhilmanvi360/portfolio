import React from "react";
import { PERSONAL_INFO, TARGET_ROLES, LONG_TERM_DIRECTIONS } from "../data/portfolioData";
import { Layers, Target, Compass, CheckCircle2, Shield, ArrowRight, Zap, Sparkles } from "lucide-react";

export const PhilosophyRoadmap: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Title */}
      <div className="flex items-center space-x-3 pb-3 border-b border-slate-800">
        <div className="w-9 h-9 rounded-lg bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
          <Compass className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-xl font-extrabold text-slate-100 tracking-tight">
            PHILOSOPHY, ROADMAP & VALUE PROPOSITION
          </h2>
          <p className="text-xs text-slate-400 font-mono">
            Technical Methodology, Career Trajectory & Value Delivered to SOC Teams
          </p>
        </div>
      </div>

      {/* Technical Philosophy Banner */}
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex items-center space-x-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
          <Zap className="w-4 h-4 text-emerald-400" />
          <span>[01] THE TECHNICAL PHILOSOPHY</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-lg sm:text-2xl md:text-3xl font-extrabold text-slate-100 font-mono tracking-tight text-center py-4 px-2 bg-slate-900/80 rounded-xl border border-slate-800">
          <span className="text-emerald-400">LEARN</span>
          <span className="text-slate-600">→</span>
          <span className="text-cyan-400">BUILD</span>
          <span className="text-slate-600">→</span>
          <span className="text-rose-400">BREAK</span>
          <span className="text-slate-600">→</span>
          <span className="text-amber-400">ANALYZE</span>
          <span className="text-slate-600">→</span>
          <span className="text-emerald-300">IMPROVE</span>
        </div>

        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-4xl mx-auto text-center font-sans">
          "I believe cybersecurity is best learned by building and breaking things. Instead of only studying theoretical concepts, I understand technologies by implementing them myself. This approach allows me to understand not only how something works, but also how it can fail and how it can be secured."
        </p>
      </div>

      {/* Career Trajectory Roadmap (Immediate vs Long-Term) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Immediate Career Goal */}
        <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">
                [02] IMMEDIATE CAREER GOAL
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                READY FOR HIRE
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-100">Tier-1 SOC & Security Operations</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              My immediate ambition is to join a forward-thinking Security Operations Center as an L1 Analyst or Security Monitoring Intern where I can apply real-time log investigation, alert triage, and threat mitigation.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-slate-400 block uppercase">Target Roles:</span>
              <div className="flex flex-wrap gap-2">
                {TARGET_ROLES.map((role, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-900 text-slate-200 border border-slate-700/80 rounded"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs font-mono text-emerald-400 flex items-center space-x-1">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Operational Mindset & Rapid Adaptation</span>
          </div>
        </div>

        {/* Long-Term Vision */}
        <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                [03] LONG-TERM TECHNICAL DIRECTION
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-cyan-950 text-cyan-400 border border-cyan-800 rounded">
                AI + CYBERSECURITY
              </span>
            </div>

            <h3 className="text-lg font-bold text-slate-100">Cybersecurity + AI + Automation Pioneer</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              To evolve into a senior Security Researcher & Engineer who designs proprietary security technologies, autonomous AI SOC agents, threat intelligence pipelines, and automated detection engines.
            </p>

            <div className="space-y-2 pt-2">
              <span className="text-xs font-mono text-slate-400 block uppercase">Long-Term Specializations:</span>
              <div className="flex flex-wrap gap-2">
                {LONG_TERM_DIRECTIONS.map((dir, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-900 text-cyan-300 border border-slate-700/80 rounded"
                  >
                    {dir}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-xs font-mono text-cyan-400 flex items-center space-x-1">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Building Next-Gen AI Cyber Technologies</span>
          </div>
        </div>
      </div>

      {/* What Nikhil Brings to a SOC Team */}
      <div className="bg-[#090D16] border border-slate-800 rounded-xl p-6 space-y-5 shadow-lg">
        <h3 className="text-sm font-mono text-emerald-400 uppercase tracking-wider flex items-center space-x-2">
          <span>[04] WHAT I BRING TO A SOC TEAM</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-sans">
          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-100 font-mono text-sm text-emerald-400">
              1. Deep Defensive Curiosity
            </h4>
            <p className="text-slate-300 leading-relaxed">
              A intense drive to understand how attacks happen from the inside out, analyzing raw log artifacts rather than relying on surface alert labels.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-100 font-mono text-sm text-cyan-400">
              2. Full-Stack Dev & Automation
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Fluency in React, TypeScript, Python, Express, and REST APIs allows me to build custom security scripts, automated SIEM parsers, and internal tooling.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-100 font-mono text-sm text-purple-400">
              3. AI & ML Integration Focus
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Hands-on experience building ML classifiers and multi-agent AI verification pipelines to assist analysts with repetitive tier-1 triage workload.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

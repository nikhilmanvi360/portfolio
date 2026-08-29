import React from "react";
import { FIELD_NOTES } from "../data/portfolioData";

export const PhilosophyRoadmap: React.FC = () => {
  return (
    <div className="space-y-20 animate-fadeIn py-6 font-sans">
      {/* Section Header */}
      <div className="space-y-4 border-b border-white/10 pb-8">
        <span className="text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
          field notes & research notebook
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-heading">
          Notebook & Thinking.
        </h1>
        <p className="text-base text-slate-300 font-normal max-w-2xl">
          Observations on security operations, alert design UX, detection engineering, and ongoing research into autonomous defense systems.
        </p>
      </div>

      {/* 
        ==================================================
        FIELD NOTES & ESSAYS
        ==================================================
      */}
      <section className="space-y-12">
        <div className="text-xs font-mono-tech uppercase text-slate-400 border-b border-white/10 pb-2">
          FIELD NOTES // OBSERVATIONS & ESSAYS
        </div>

        <div className="space-y-16">
          {FIELD_NOTES.map((note) => (
            <article key={note.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start border-b border-white/10 pb-12">
              <div className="lg:col-span-4 space-y-2 font-mono-tech">
                <div className="text-rose-500 font-bold text-xs">{note.noteNumber}</div>
                <div className="text-slate-400 text-xs">{note.date}</div>
                <div className="text-slate-500 text-[11px] uppercase tracking-wider">{note.category}</div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl font-bold text-white font-heading">
                  {note.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {note.content}
                </p>
                <div className="p-4 bg-white/[0.02] border-l-2 border-rose-500 text-xs font-mono-tech text-slate-200">
                  <span className="text-rose-400 font-bold block mb-1">KEY TAKEAWAY</span>
                  {note.takeaway}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 
        ==================================================
        ACTIVE RESEARCH NOTEBOOK
        ==================================================
      */}
      <section className="space-y-10 border-t border-white/10 pt-16">
        <div className="space-y-2">
          <span className="text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
            ongoing explorations
          </span>
          <h2 className="text-3xl font-bold text-white font-heading">
            Research Notebook & Experiments.
          </h2>
          <p className="text-xs font-mono-tech text-slate-400">
            Unfinished experiments, ongoing reading, and hypotheses under test.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="p-6 bg-[#0b0c12] border border-white/10 space-y-2">
            <div className="text-xs font-mono-tech text-rose-400 font-bold">RESEARCH // 01</div>
            <h3 className="text-lg font-bold text-white font-heading">Adaptive Security Operations</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Exploring self-healing SOC mechanisms that automatically trigger API-driven host isolation, firewall reconfigurations, and baseline state restorations.
            </p>
          </div>

          <div className="p-6 bg-[#0b0c12] border border-white/10 space-y-2">
            <div className="text-xs font-mono-tech text-rose-400 font-bold">RESEARCH // 02</div>
            <h3 className="text-lg font-bold text-white font-heading">Multi-Agent AI Log Triage</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Designing coordinated LLM agent architectures that ingest raw SIEM feeds, cross-examine threat intelligence databases, and output verified incident reports.
            </p>
          </div>

          <div className="p-6 bg-[#0b0c12] border border-white/10 space-y-2">
            <div className="text-xs font-mono-tech text-rose-400 font-bold">RESEARCH // 03</div>
            <h3 className="text-lg font-bold text-white font-heading">Detection Engineering</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Developing custom Sigma and YARA rules mapped to MITRE ATT&CK techniques (T1056, T1595, T1070) for early anomaly identification.
            </p>
          </div>

          <div className="p-6 bg-[#0b0c12] border border-white/10 space-y-2">
            <div className="text-xs font-mono-tech text-rose-400 font-bold">RESEARCH // 04</div>
            <h3 className="text-lg font-bold text-white font-heading">Autonomous Remediation</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Lowering Mean Time to Respond (MTTR) through automated playbook execution during high-confidence threat events.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

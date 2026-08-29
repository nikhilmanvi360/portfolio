import React from "react";
import { PROJECTS, FIELD_NOTES, SOC_EXPERIENCE, PERSONAL_INFO } from "../data/portfolioData";
import { ActiveTab } from "../types";
import { ArrowUpRight, Github, Mail, ArrowRight } from "lucide-react";
import { downloadResume } from "../utils/resumeGenerator";

import mrRobotBanner from "../assets/images/mr_robot_hero_banner_1787750216135.jpg";
import profilePic from "../assets/images/elliot_profile_pic_1787804332102.jpg";

interface CommandCenterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({ setActiveTab, onOpenContact }) => {
  const mainProjects = PROJECTS.filter((p) => p.featured);
  const proj1 = mainProjects[0]; // AI SIEM Copilot
  const proj2 = mainProjects[1]; // Hybrid ML IDS
  const proj3 = mainProjects[2]; // MITRE ATT&CK Game
  const proj4 = mainProjects[3]; // Phantom Key C2

  return (
    <div className="space-y-16 sm:space-y-32 animate-fadeIn font-sans py-2 sm:py-8">
      {/* 
        ==================================================
        UNCONVENTIONAL EDITORIAL HERO
        ==================================================
      */}
      <section className="pt-4 sm:pt-14 pb-10 sm:pb-16 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Large Statement */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-[11px] sm:text-xs font-mono-tech uppercase text-rose-500 tracking-widest block">
                nikhil manvi / gadag & bangalore
              </span>
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] sm:leading-[1.05] font-heading break-words">
                I spend most of my time trying to figure out why machines do stupid things.
              </h1>
            </div>

            <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              Currently working across security operations, alert triage, detection engineering, and building automated systems to catch attacks before anyone notices.
            </p>

            {/* Mobile-Friendly Vertical & Desktop Horizontal Actions */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 text-sm font-mono-tech">
              <button
                onClick={() => setActiveTab("project-labs")}
                className="min-h-[44px] px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors flex items-center justify-center space-x-2 rounded-none shadow-sm active:bg-rose-700"
              >
                <span>explore work</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <div className="flex items-center justify-between sm:justify-start gap-4 pt-1 sm:pt-0">
                <button
                  onClick={downloadResume}
                  className="min-h-[44px] text-slate-300 hover:text-white transition-colors border-b border-slate-500 hover:border-white pb-0.5 text-xs sm:text-sm flex items-center"
                >
                  view résumé.pdf
                </button>

                <button
                  onClick={onOpenContact}
                  className="min-h-[44px] text-rose-400 hover:text-rose-300 transition-colors text-xs sm:text-sm flex items-center font-semibold"
                >
                  contact →
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Real Artifact Image with Edge Frame */}
          <div className="lg:col-span-4 space-y-4 pt-2 lg:pt-0">
            <div className="border border-white/15 bg-[#090a0f] p-2 space-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={mrRobotBanner}
                  alt="Security Laboratory Artifact"
                  referrerPolicy="no-referrer"
                  className="w-full h-52 sm:h-72 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute top-2 left-2 bg-black/80 text-[10px] font-mono-tech text-rose-400 px-2 py-0.5 border border-white/10">
                  ARTIFACT // TELEMETRY LAB
                </div>
              </div>

              <div className="p-3 bg-white/[0.02] border border-white/5 space-y-2 text-xs font-mono-tech">
                <div className="flex items-center space-x-3">
                  <img
                    src={profilePic}
                    alt="Nikhil Manvi"
                    referrerPolicy="no-referrer"
                    className="w-8 h-8 rounded border border-rose-500/40 object-cover shrink-0"
                  />
                  <div>
                    <div className="text-white font-bold">Nikhil Manvi</div>
                    <div className="text-[10px] text-slate-400">Junior Security Analyst</div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-300 border-t border-white/5 pt-2 leading-relaxed">
                  "I don't learn security by reading documentation alone. I build it, break it, and investigate the fallout."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ==================================================
        WHO'S BEHIND THIS (HUMAN PERSONALITY SECTION)
        ==================================================
      */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start border-b border-white/10 pb-12 sm:pb-20">
        <div className="lg:col-span-4 space-y-1 sm:space-y-2">
          <span className="text-[11px] sm:text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
            context & mindset
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
            Who's behind the site?
          </h2>
        </div>

        <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-slate-300 text-sm sm:text-lg leading-relaxed font-normal">
          <p>
            I'm a BCA student at KLE's JT BCA College in Gadag, and a Junior Security Analyst at Vijesha IT Service LLP. 
            I spend an unreasonable amount of time trying to understand what happened inside a machine during an attack.
          </p>
          <p>
            That curiosity led me directly into SOC work. Then SIEM monitoring. Then log correlation. Then detection engineering. Then I realized standard SOC analyst workflows rely too much on manual tab-switching, so I started writing Python scripts and multi-agent AI tools to do the heavy lifting.
          </p>
          <div className="pt-3 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 font-mono-tech text-xs border-t border-white/10">
            <div>
              <div className="text-rose-400 font-bold mb-0.5 sm:mb-1">CURRENT ROLE</div>
              <div className="text-slate-200">Junior Security Analyst at Vijesha IT</div>
            </div>
            <div>
              <div className="text-rose-400 font-bold mb-0.5 sm:mb-1">FOCUS</div>
              <div className="text-slate-200">SOC Triage, Detection Rules, AI Automation</div>
            </div>
            <div>
              <div className="text-rose-400 font-bold mb-0.5 sm:mb-1">LOCATION</div>
              <div className="text-slate-200">Gadag & Bangalore, India</div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ==================================================
        I BUILD THINGS (NON-UNIFORM PROJECT COMPOSITIONS)
        ==================================================
      */}
      <section className="space-y-16 sm:space-y-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4 sm:pb-6">
          <div>
            <span className="text-[11px] sm:text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
              selected projects
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-heading tracking-tight mt-0.5">
              Things I've Built.
            </h2>
          </div>
          <button
            onClick={() => setActiveTab("project-labs")}
            className="text-xs font-mono-tech text-rose-400 hover:text-rose-300 flex items-center space-x-1 min-h-[44px] py-1"
          >
            <span>view all {PROJECTS.length} projects →</span>
          </button>
        </div>

        {/* 
          PROJECT 1: Full-Width Asymmetric Headline Layout
        */}
        {proj1 && (
          <article className="space-y-6 sm:space-y-8 border-b border-white/10 pb-12 sm:pb-20">
            <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2 max-w-3xl">
                <span className="text-[11px] sm:text-xs font-mono-tech text-rose-500 uppercase">
                  PROJECT 01 // AI & ML SECURITY
                </span>
                <h3 className="text-2xl sm:text-5xl font-bold text-white font-heading leading-tight break-words">
                  {proj1.title}
                </h3>
                <p className="text-sm sm:text-lg font-mono-tech text-rose-300">
                  {proj1.tagline}
                </p>
              </div>

              <div className="shrink-0 pt-2 lg:pt-0">
                <button
                  onClick={() => setActiveTab("project-labs")}
                  className="w-full sm:w-auto min-h-[44px] px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-mono-tech text-xs transition-colors flex items-center justify-center space-x-1.5 border border-white/10"
                >
                  <span>read full case file</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Asymmetrical 2-Column Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-4">
              <div className="lg:col-span-7 bg-[#0b0c12] border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6">
                <div>
                  <div className="text-xs font-mono-tech uppercase text-rose-400 mb-1">
                    WHAT WAS I TRYING TO FIGURE OUT?
                  </div>
                  <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic">
                    "{proj1.question}"
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono-tech uppercase text-slate-400 mb-1">
                    WHAT DID I BUILD & HOW DOES IT WORK?
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {proj1.fullDescription}
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/[0.02] border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <div className="text-xs font-mono-tech uppercase text-rose-400 mb-1">
                      WHAT WENT WRONG & WHAT I LEARNED
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {proj1.learned}
                    </p>
                  </div>

                  <div>
                    <div className="text-xs font-mono-tech uppercase text-slate-400 mb-1">
                      OPERATIONAL RESULT
                    </div>
                    <p className="text-slate-200 text-xs sm:text-sm font-semibold">
                      {proj1.result}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 font-mono-tech text-[11px] text-slate-400">
                  {proj1.techStack.map((tech, i) => (
                    <span key={i} className="px-2 py-1 border border-white/10 text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* 
          PROJECT 2: Text-Heavy Editorial & Architecture Focus Layout
        */}
        {proj2 && (
          <article className="space-y-6 sm:space-y-8 border-b border-white/10 pb-12 sm:pb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
              <div className="lg:col-span-5 space-y-4 sm:space-y-6">
                <span className="text-[11px] sm:text-xs font-mono-tech text-rose-500 uppercase">
                  PROJECT 02 // INTRUSION DETECTION
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold text-white font-heading break-words">
                  {proj2.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono-tech text-rose-300">
                  {proj2.tagline}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {proj2.approach}
                </p>

                <div className="p-3.5 sm:p-4 border-l-2 border-rose-500 bg-white/[0.02] text-xs font-mono-tech text-slate-200">
                  <span className="text-rose-400 font-bold block mb-1">ACCURACY METRIC</span>
                  {proj2.result}
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#0b0c12] border border-white/10 p-5 sm:p-8 space-y-4">
                <div className="text-xs font-mono-tech uppercase text-slate-400 border-b border-white/10 pb-2 flex flex-wrap justify-between gap-2">
                  <span>SYSTEM ARCHITECTURE DIAGRAM</span>
                  <span className="text-rose-400">NSL-KDD / CICIDS</span>
                </div>

                <div className="space-y-2.5 font-mono-tech text-xs text-slate-300 pt-2">
                  {proj2.architectureComponents.map((comp, idx) => (
                    <div key={idx} className="p-2.5 sm:p-3 bg-white/[0.03] border border-white/5 flex items-start space-x-3">
                      <span className="text-rose-500 font-bold shrink-0">0{idx + 1}</span>
                      <span className="leading-snug">{comp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 text-xs font-mono-tech text-slate-400 leading-relaxed">
                  <span className="text-rose-400 font-bold">LESSON: </span>
                  {proj2.learned}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* 
          PROJECT 3 & 4: Staggered Side-by-Side Asymmetric Block
        */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          {proj3 && (
            <article className="bg-[#0b0c12] border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[11px] sm:text-xs font-mono-tech text-rose-500 uppercase">
                  PROJECT 03 // CYBER GAME & CLI
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {proj3.title}
                </h3>
                <p className="text-xs font-mono-tech text-slate-400">
                  {proj3.tagline}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {proj3.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 font-mono-tech text-xs">
                <div className="text-rose-400 font-bold">MITRE ATT&CK TECHNIQUES COVERED</div>
                <div className="text-slate-300 leading-relaxed">{proj3.mitreTechniques?.join("  ·  ")}</div>
              </div>
            </article>
          )}

          {proj4 && (
            <article className="bg-[#0b0c12] border border-white/10 p-5 sm:p-8 space-y-5 sm:space-y-6 flex flex-col justify-between">
              <div className="space-y-3 sm:space-y-4">
                <span className="text-[11px] sm:text-xs font-mono-tech text-rose-500 uppercase">
                  PROJECT 04 // DEFENSIVE RESEARCH
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                  {proj4.title}
                </h3>
                <p className="text-xs font-mono-tech text-slate-400">
                  {proj4.tagline}
                </p>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {proj4.fullDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-2 font-mono-tech text-xs">
                <div className="text-rose-400 font-bold">KEY LESSON</div>
                <div className="text-slate-300 leading-relaxed">{proj4.learned}</div>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* 
        ==================================================
        FIELD NOTES & ESSAYS (EDITORIAL JOURNAL LAYOUT)
        ==================================================
      */}
      <section className="space-y-8 sm:space-y-12 border-t border-white/10 pt-12 sm:pt-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <span className="text-[11px] sm:text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
              field notes & observations
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading mt-0.5">
              Security Journal & Thinking
            </h2>
          </div>
          <button
            onClick={() => setActiveTab("philosophy-roadmap")}
            className="text-xs font-mono-tech text-rose-400 hover:text-rose-300 min-h-[44px] py-1 flex items-center"
          >
            read all research notes →
          </button>
        </div>

        <div className="divide-y divide-white/10">
          {FIELD_NOTES.slice(0, 3).map((note) => (
            <div
              key={note.id}
              onClick={() => setActiveTab("philosophy-roadmap")}
              className="py-4 sm:py-6 group cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-baseline"
            >
              <div className="md:col-span-3 text-xs font-mono-tech text-slate-400 flex items-center space-x-2">
                <span className="text-rose-500 font-semibold">{note.noteNumber}</span>
                <span>•</span>
                <span>{note.date}</span>
              </div>
              <div className="md:col-span-6">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-rose-400 transition-colors font-heading leading-snug">
                  {note.title}
                </h3>
              </div>
              <div className="md:col-span-3 text-xs font-mono-tech text-slate-400 text-right hidden md:block">
                <span>{note.takeaway}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

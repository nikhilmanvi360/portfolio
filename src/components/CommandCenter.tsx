import React from "react";
import { PERSONAL_INFO, TARGET_ROLES, PROJECTS } from "../data/portfolioData";
import { ActiveTab } from "../types";
import { Shield, Cpu, Terminal, ArrowRight, ExternalLink, Download, Mail } from "lucide-react";
import { downloadResume } from "../utils/resumeGenerator";

import mrRobotBanner from "../assets/images/mr_robot_hero_banner_1787750216135.jpg";
import profilePic from "../assets/images/elliot_profile_pic_1787804332102.jpg";

interface CommandCenterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const CommandCenter: React.FC<CommandCenterProps> = ({ setActiveTab, onOpenContact }) => {
  return (
    <div className="space-y-12 animate-fadeIn font-mono">
      {/* Sleek Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4">
        {/* Left: Info */}
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-rose-950/60 border border-rose-800/40 text-rose-300 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>SOC ANALYST L1 · BANGALORE, INDIA</span>
          </div>

          <div className="flex items-center space-x-4">
            <img
              src={profilePic}
              alt="Nikhil Profile Picture"
              referrerPolicy="no-referrer"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl border-2 border-rose-500/60 object-cover shadow-lg shadow-rose-950/40 shrink-0"
            />
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
                NIKHIL
              </h1>
              <p className="text-sm sm:text-lg font-bold text-emerald-400">
                Cybersecurity & AI Security Operations
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-300 font-sans leading-relaxed">
            BCA candidate specializing in real-time SIEM alert triage, log correlation, incident response, and AI-driven threat automation. Built with hands-on lab experience and SOC disciplines.
          </p>

          {/* Role Pills */}
          <div className="flex flex-wrap gap-2 pt-1">
            {TARGET_ROLES.map((role, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-[11px] bg-slate-900 text-slate-300 border border-slate-800 rounded"
              >
                {role}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => setActiveTab("project-labs")}
              className="px-4 py-2.5 text-xs font-bold rounded bg-rose-600 hover:bg-rose-500 text-white transition-all flex items-center space-x-2 shadow-lg shadow-rose-950/50"
            >
              <Terminal className="w-4 h-4" />
              <span>Explore Projects</span>
            </button>

            <button
              onClick={downloadResume}
              className="px-4 py-2.5 text-xs font-bold rounded bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-all flex items-center space-x-2"
            >
              <Download className="w-4 h-4 text-slate-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onOpenContact}
              className="px-4 py-2.5 text-xs font-bold rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all flex items-center space-x-2"
            >
              <Mail className="w-4 h-4 text-rose-400" />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Right: Artwork */}
        <div className="lg:col-span-5">
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-[#070A14] shadow-2xl">
            <img
              src={mrRobotBanner}
              alt="Mr Robot Visual Theme"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#04060A] via-transparent to-transparent opacity-70" />
            <div className="absolute bottom-3 left-3 right-3 p-2 bg-[#04060A]/90 border border-slate-800/80 rounded text-[11px] text-slate-300 text-center">
              "Control is an illusion. Defense is proactive."
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest">
            FEATURED PROJECTS
          </h2>
          <button
            onClick={() => setActiveTab("project-labs")}
            className="text-xs text-rose-400 hover:underline font-bold flex items-center space-x-1"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PROJECTS.filter((p) => p.featured).map((project) => (
            <div
              key={project.id}
              className="p-4 sm:p-5 rounded-xl bg-[#070B16] border border-slate-800/90 hover:border-slate-700 transition-colors space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] sm:text-xs">
                  <span className="text-rose-400 font-bold">{project.category}</span>
                  <span className="text-slate-500 text-[10px]">{project.status}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-100 tracking-tight">{project.title}</h3>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">{project.shortDescription}</p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row gap-2 sm:items-center justify-between text-xs">
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 3).map((t, i) => (
                    <span key={i} className="px-2 py-0.5 text-[10px] bg-slate-900 text-slate-400 rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setActiveTab("project-labs")}
                  className="text-rose-400 hover:underline flex items-center space-x-1 font-bold self-end sm:self-auto"
                >
                  <span>Inspect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

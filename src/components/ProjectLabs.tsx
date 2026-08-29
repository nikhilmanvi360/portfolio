import React, { useState, useEffect } from "react";
import { PROJECTS } from "../data/portfolioData";
import { Project } from "../types";
import { Terminal, ShieldAlert, Cpu, FileSearch, Layers, CheckCircle2, X, Skull } from "lucide-react";

export const ProjectLabs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useEffect(() => {
    if (activeModalProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalProject]);

  const categories = ["ALL", "AI & ML Security", "Cybersecurity & SOC", "Interactive Cyber Game", "Research & IoT", "Software Engineering"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "AI & ML Security":
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case "Interactive Cyber Game":
        return <FileSearch className="w-4 h-4 text-emerald-400" />;
      case "Research & IoT":
        return <Terminal className="w-4 h-4 text-amber-400" />;
      default:
        return <ShieldAlert className="w-4 h-4 text-rose-400" />;
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn font-mono">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-extrabold text-slate-100 tracking-tight flex items-center space-x-2">
            <Skull className="w-5 h-5 text-rose-400" />
            <span>PROJECT LABS & CYBER ARCHITECTURE</span>
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            Practical Engineering Implementations, Security Scenarios & Research Prototypes
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`min-h-[38px] px-3.5 py-2 rounded-lg transition-colors font-medium ${
                selectedCategory === cat
                  ? "bg-rose-600 text-white font-bold shadow-md"
                  : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid - Vertical-stacked compact mobile layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="fsociety-card rounded-xl p-4 sm:p-5 space-y-3.5 flex flex-col justify-between transition-all shadow-xl bg-[#070B16] border border-slate-800/90 hover:border-slate-700"
          >
            <div className="space-y-3">
              {/* Category & Status */}
              <div className="flex items-center justify-between text-[11px] sm:text-xs">
                <div className="flex items-center space-x-2">
                  {getCategoryIcon(project.category)}
                  <span className="text-rose-300 font-bold">{project.category}</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] bg-emerald-950/90 text-emerald-400 border border-emerald-600/50 rounded font-bold">
                  {project.status}
                </span>
              </div>

              {/* Title & Tagline */}
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 tracking-tight">{project.title}</h3>
                <p className="text-[11px] sm:text-xs text-emerald-400 mt-0.5 font-medium">{project.tagline}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">{project.shortDescription}</p>

              {/* Architecture Bullet List Preview */}
              <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                <span className="text-[10px] sm:text-[11px] text-slate-400 uppercase tracking-wider block font-bold">
                  Core Technical Components:
                </span>
                <ul className="space-y-1 text-xs font-sans">
                  {project.architectureComponents.slice(0, 3).map((comp, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-slate-300">
                      <span className="text-rose-400 font-mono text-[10px] mt-0.5">•</span>
                      <span className="leading-tight">{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* MITRE Tags if present */}
              {project.mitreTags && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.mitreTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 text-[10px] bg-rose-950/80 text-rose-300 border border-rose-600/50 rounded font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] bg-[#040710] text-slate-300 border border-slate-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Compact Vertical-stacked Actions on Mobile */}
            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <span className="text-[11px] text-slate-400 font-sans leading-snug">
                <strong className="text-slate-300 font-mono text-[10px] block sm:inline sm:mr-1">Defensive Value:</strong>
                {project.securityValue}
              </span>

              <button
                onClick={() => setActiveModalProject(project)}
                className="w-full sm:w-auto min-h-[44px] px-4 py-2 text-xs font-bold bg-[#0A1020] hover:bg-[#121A30] text-rose-400 border border-rose-600/40 rounded-lg transition-colors flex items-center justify-center space-x-1.5 shrink-0"
              >
                <Layers className="w-3.5 h-3.5" />
                <span>INSPECT BLUEPRINT</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Blueprint Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
          <div className="bg-[#050812] border border-rose-600/50 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6 text-slate-100 relative shadow-2xl font-mono">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-white w-10 h-10 flex items-center justify-center rounded-lg bg-[#0A0F20] border border-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 text-xs bg-rose-950 text-rose-300 border border-rose-600/50 rounded font-bold">
                  {activeModalProject.category}
                </span>
                <span className="text-xs text-slate-400">Status: {activeModalProject.status}</span>
              </div>
              <h3 className="text-2xl font-bold">{activeModalProject.title}</h3>
              <p className="text-xs text-emerald-400">{activeModalProject.tagline}</p>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <h4 className="text-slate-400 font-bold uppercase mb-1">PROJECT DESCRIPTION</h4>
                <p className="text-slate-300 leading-relaxed text-sm font-sans">{activeModalProject.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-slate-400 font-bold uppercase mb-2">COMPLETE ARCHITECTURE BREAKDOWN</h4>
                <div className="space-y-2">
                  {activeModalProject.architectureComponents.map((comp, idx) => (
                    <div key={idx} className="p-3 rounded bg-[#090E1E] border border-slate-800 flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200 font-sans">{comp}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-slate-400 font-bold uppercase mb-1">DEFENSIVE & SOC IMPACT</h4>
                <div className="p-3 rounded bg-emerald-950/40 border border-emerald-600/50 text-emerald-300 font-sans">
                  {activeModalProject.securityValue}
                </div>
              </div>

              <div>
                <h4 className="text-slate-400 font-bold uppercase mb-1">TECHNOLOGY STACK</h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.techStack.map((tech, i) => (
                    <span key={i} className="px-2.5 py-1 bg-[#090E1E] border border-slate-800 text-slate-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white rounded transition-colors"
              >
                CLOSE BLUEPRINT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React, { useState } from "react";
import { PROJECTS } from "../data/portfolioData";
import { Project } from "../types";
import { X, ArrowUpRight, Github, Terminal, AlertCircle, CheckCircle2 } from "lucide-react";

export const ProjectLabs: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    "ALL",
    "AI & ML Security",
    "Cybersecurity & SOC",
    "Interactive Cyber Game",
    "Research & IoT",
  ];

  const filteredProjects =
    selectedCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-20 animate-fadeIn py-6 font-sans">
      {/* Section Header */}
      <div className="space-y-6 border-b border-white/10 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono-tech uppercase text-rose-500 tracking-wider">
              work & investigations
            </span>
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight font-heading">
              Built & Analyzed.
            </h1>
            <p className="text-base text-slate-300 font-normal">
              Real security projects, autonomous triage tools, and defensive research documented as laboratory investigations.
            </p>
          </div>

          {/* Minimal Text Filter Pills */}
          <div className="flex flex-wrap gap-3 text-xs font-mono-tech">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`transition-colors border-b pb-0.5 ${
                  selectedCategory === cat
                    ? "text-rose-400 font-bold border-rose-500"
                    : "text-slate-400 border-transparent hover:text-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 
        ==================================================
        CURATED NON-UNIFORM PROJECT STREAM
        ==================================================
      */}
      <div className="space-y-28">
        {filteredProjects.map((project, index) => {
          // Create 4 distinct visual layouts based on index or project ID!
          const layoutType = index % 4;

          if (layoutType === 0) {
            /* 
              LAYOUT TYPE A: Huge Title, High-Contrast 2-Column Split
            */
            return (
              <article key={project.id} className="space-y-8 border-b border-white/10 pb-20">
                <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono-tech text-rose-500 uppercase">
                      {project.caseNumber} // {project.category}
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-heading tracking-tight mt-1">
                      {project.title}
                    </h2>
                  </div>
                  <div className="text-xs font-mono-tech text-slate-400">
                    STATUS: <span className="text-slate-200">{project.status}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-7 space-y-6">
                    <div className="p-4 bg-white/[0.02] border-l-2 border-rose-500 space-y-1">
                      <div className="text-xs font-mono-tech text-rose-400 font-semibold">
                        WHAT WAS I TRYING TO FIGURE OUT?
                      </div>
                      <p className="text-sm sm:text-base text-slate-200 italic font-normal">
                        "{project.question || project.tagline}"
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-mono-tech uppercase text-slate-400">
                        WHAT DID I BUILD & HOW DOES IT WORK?
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {project.fullDescription}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-[#0b0c12] border border-white/10 p-6 space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                      {project.result && (
                        <div>
                          <div className="text-xs font-mono-tech uppercase text-rose-400 mb-1">
                            OPERATIONAL RESULT
                          </div>
                          <p className="text-xs sm:text-sm text-slate-200 font-semibold">
                            {project.result}
                          </p>
                        </div>
                      )}

                      {project.learned && (
                        <div>
                          <div className="text-xs font-mono-tech uppercase text-slate-400 mb-1">
                            WHAT I LEARNED & WOULD CHANGE
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {project.learned}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech">
                      <div className="text-slate-400">
                        {project.techStack.slice(0, 4).join(" · ")}
                      </div>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-rose-400 hover:text-rose-300 flex items-center space-x-1 font-semibold"
                      >
                        <span>INSPECT CASE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          } else if (layoutType === 1) {
            /* 
              LAYOUT TYPE B: Editorial Text Column with Architecture List
            */
            return (
              <article key={project.id} className="space-y-8 border-b border-white/10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-mono-tech text-rose-500 uppercase">
                      {project.caseNumber} // {project.category}
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
                      {project.title}
                    </h2>
                    <p className="text-xs font-mono-tech text-rose-300">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>
                    {project.mitreTechniques && (
                      <div className="text-xs font-mono-tech text-slate-400 pt-2 border-t border-white/10">
                        <span className="text-rose-400 font-semibold">MITRE EVIDENCE: </span>
                        <span>{project.mitreTechniques.join(" · ")}</span>
                      </div>
                    )}
                  </div>

                  <div className="lg:col-span-7 bg-[#0b0c12] border border-white/10 p-6 sm:p-8 space-y-6">
                    <div className="text-xs font-mono-tech uppercase text-slate-400 border-b border-white/10 pb-2">
                      SYSTEM ARCHITECTURE & COMPONENTS
                    </div>
                    <div className="space-y-3 font-mono-tech text-xs text-slate-300">
                      {project.architectureComponents.map((comp, idx) => (
                        <div key={idx} className="p-3 bg-white/[0.03] border border-white/5 flex items-start space-x-3">
                          <span className="text-rose-500 font-bold shrink-0">#{idx + 1}</span>
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex justify-between items-center text-xs font-mono-tech">
                      <span className="text-slate-400">{project.techStack.join(" · ")}</span>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="text-rose-400 hover:text-rose-300 flex items-center space-x-1 font-semibold"
                      >
                        <span>INSPECT CASE →</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          } else if (layoutType === 2) {
            /* 
              LAYOUT TYPE C: Screenshot / Terminal Output Style Box
            */
            return (
              <article key={project.id} className="space-y-8 border-b border-white/10 pb-20">
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech text-rose-500 uppercase">
                    {project.caseNumber} // {project.category}
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
                    {project.title}
                  </h2>
                </div>

                <div className="bg-[#050608] border border-white/15 p-6 space-y-6 font-mono-tech">
                  <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3">
                    <span>FORENSIC SIMULATION // TERMINAL BLUEPRINT</span>
                    <span className="text-rose-400 font-bold">{project.status}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
                    <div className="space-y-2">
                      <div className="text-rose-400 font-bold">[ INVESTIGATION FOCUS ]</div>
                      <p className="leading-relaxed font-sans">{project.shortDescription}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-rose-400 font-bold">[ LESSONS & TAKEAWAYS ]</div>
                      <p className="leading-relaxed font-sans">{project.learned || project.securityValue}</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                    <div className="text-slate-400">
                      STACK: {project.techStack.join("  ·  ")}
                    </div>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors"
                    >
                      OPEN BLUEPRINT
                    </button>
                  </div>
                </div>
              </article>
            );
          } else {
            /* 
              LAYOUT TYPE D: Minimal Research Presentation
            */
            return (
              <article key={project.id} className="space-y-6 border-b border-white/10 pb-20">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-mono-tech text-rose-500 uppercase">
                      {project.caseNumber} // RESEARCH NOTE
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                      {project.title}
                    </h2>
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-mono-tech text-rose-400 hover:text-rose-300 shrink-0"
                  >
                    read blueprint →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-sm text-slate-300">
                  <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1">
                    <div className="text-xs font-mono-tech text-slate-400">HYPOTHESIS</div>
                    <p className="text-xs text-slate-200">{project.question || project.tagline}</p>
                  </div>
                  <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1">
                    <div className="text-xs font-mono-tech text-slate-400">APPROACH</div>
                    <p className="text-xs text-slate-200">{project.shortDescription}</p>
                  </div>
                  <div className="p-4 bg-white/[0.02] border border-white/10 space-y-1">
                    <div className="text-xs font-mono-tech text-rose-400">KEY FINDING</div>
                    <p className="text-xs text-slate-200">{project.result || project.learned}</p>
                  </div>
                </div>
              </article>
            );
          }
        })}
      </div>

      {/* Blueprint Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0b0c12] border border-white/20 rounded-none max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-100 relative shadow-2xl animate-fadeIn font-sans">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white w-8 h-8 flex items-center justify-center border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 border-b border-white/10 pb-4">
              <div className="text-xs font-mono-tech text-rose-400">
                {activeModalProject.caseNumber} • {activeModalProject.category} • {activeModalProject.status}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                {activeModalProject.title}
              </h3>
              <p className="text-xs font-mono-tech text-slate-300">
                {activeModalProject.tagline}
              </p>
            </div>

            <div className="space-y-5 text-sm">
              <div>
                <h4 className="text-xs font-mono-tech uppercase text-slate-400 mb-1">
                  FULL INVESTIGATION DESCRIPTION
                </h4>
                <p className="text-slate-300 leading-relaxed font-normal">
                  {activeModalProject.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech uppercase text-slate-400 mb-2">
                  SYSTEM ARCHITECTURE
                </h4>
                <div className="space-y-2">
                  {activeModalProject.architectureComponents.map((comp, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white/[0.03] border border-white/10 text-xs font-mono-tech text-slate-200"
                    >
                      • {comp}
                    </div>
                  ))}
                </div>
              </div>

              {activeModalProject.mitreTechniques && (
                <div>
                  <h4 className="text-xs font-mono-tech uppercase text-slate-400 mb-1">
                    MITRE ATT&CK EVIDENCE MAPPING
                  </h4>
                  <div className="p-3 bg-white/[0.03] border border-white/10 text-xs font-mono-tech text-rose-300">
                    {activeModalProject.mitreTechniques.join(" · ")}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-xs font-mono-tech uppercase text-slate-400 mb-2">
                  TECHNICAL STACK
                </h4>
                <div className="flex flex-wrap gap-2 font-mono-tech text-xs">
                  {activeModalProject.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/[0.05] border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end space-x-3 font-mono-tech text-xs">
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-white/[0.05] text-white border border-white/10 flex items-center space-x-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GITHUB REPO</span>
                </a>
              )}
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold transition-colors"
              >
                CLOSE CASE FILE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

import React from "react";
import { ActiveTab } from "../types";
import { Mail, Download } from "lucide-react";
import { downloadResume } from "../utils/resumeGenerator";

import profilePic from "../assets/images/elliot_profile_pic_1787804332102.jpg";

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenContact,
}) => {
  const navItems: { id: ActiveTab; label: string }[] = [
    { id: "command-center", label: "Overview" },
    { id: "experience-skills", label: "Experience" },
    { id: "project-labs", label: "Projects" },
    { id: "philosophy-roadmap", label: "Manifesto" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#050813]/90 backdrop-blur-md border-b border-slate-800 text-slate-100 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand Identity */}
        <div
          onClick={() => setActiveTab("command-center")}
          className="cursor-pointer flex items-center space-x-3 shrink-0"
        >
          <img
            src={profilePic}
            alt="Nikhil Profile Picture"
            referrerPolicy="no-referrer"
            className="w-9 h-9 rounded-lg border border-rose-500/50 object-cover shadow-sm"
          />
          <div className="flex items-center space-x-2">
            <span className="text-base font-extrabold text-slate-100 tracking-tight hover:text-rose-400 transition-colors">
              NIKHIL
            </span>
            <span className="px-2 py-0.5 text-[10px] bg-rose-950/80 text-rose-300 border border-rose-800 rounded font-bold">
              SOC L1
            </span>
          </div>
        </div>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors ${
                  isActive
                    ? "bg-rose-950/70 text-rose-300 border border-rose-700/50"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={downloadResume}
            className="px-3 py-1.5 text-xs font-bold rounded bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors hidden sm:flex items-center space-x-1.5"
          >
            <Download className="w-3.5 h-3.5 text-rose-400" />
            <span>Resume</span>
          </button>

          <button
            onClick={onOpenContact}
            className="px-3.5 py-1.5 text-xs font-bold rounded bg-rose-600 hover:bg-rose-500 text-white transition-colors flex items-center space-x-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Bar */}
      <nav className="md:hidden flex items-center space-x-1 overflow-x-auto scrollbar-none px-4 py-2 border-t border-slate-800/80 text-xs">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`whitespace-nowrap px-3 py-1 rounded transition-colors ${
                isActive
                  ? "bg-rose-950 text-rose-300 border border-rose-700/60 font-bold"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </nav>
    </header>
  );
};

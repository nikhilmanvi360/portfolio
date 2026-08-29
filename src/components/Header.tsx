import React, { useState } from "react";
import { ActiveTab } from "../types";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { downloadResume } from "../utils/resumeGenerator";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string }[] = [
    { id: "command-center", label: "overview" },
    { id: "project-labs", label: "work" },
    { id: "experience-skills", label: "chronology" },
    { id: "philosophy-roadmap", label: "notes" },
  ];

  const handleNavClick = (id: ActiveTab) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#07080b]/95 backdrop-blur-sm border-b border-white/10 text-slate-100 transition-all font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 sm:gap-6">
        {/* Brand Mark: Simple, direct typography */}
        <button
          onClick={() => handleNavClick("command-center")}
          className="text-left shrink-0 focus:outline-none group py-1 min-h-[44px] flex flex-col justify-center"
        >
          <span className="text-base sm:text-lg font-black tracking-wider text-white group-hover:text-rose-400 transition-colors uppercase font-heading">
            NIKHIL MANVI
          </span>
          <span className="block text-[10px] text-slate-400 font-mono-tech tracking-tight">
            security / automation / research
          </span>
        </button>

        {/* Minimal Editorial Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-xs font-mono-tech lowercase">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-rose-400 font-semibold border-b-2 border-rose-500"
                    : "text-slate-400 hover:text-slate-100"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Quiet Actions */}
        <div className="hidden sm:flex items-center space-x-6 shrink-0 text-xs font-mono-tech">
          <button
            onClick={downloadResume}
            className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1 min-h-[44px] py-2"
          >
            <span>résumé</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-rose-500" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-3.5 py-2 rounded text-white bg-rose-600 hover:bg-rose-500 font-medium transition-colors min-h-[36px]"
          >
            contact
          </button>
        </div>

        {/* Mobile Toggle with 44px Touch Target */}
        <div className="flex sm:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-11 h-11 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center rounded active:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-white/10 bg-[#07080b] px-4 py-5 space-y-4 font-mono-tech text-xs shadow-2xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left transition-colors min-h-[44px] py-3 px-2 border-b border-white/5 flex items-center justify-between ${
                    isActive ? "text-rose-400 font-bold bg-white/[0.03]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="uppercase">{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>}
                </button>
              );
            })}
          </div>

          <div className="pt-2 flex items-center justify-between gap-3 border-t border-white/10">
            <button
              onClick={() => {
                downloadResume();
                setMobileMenuOpen(false);
              }}
              className="min-h-[44px] py-2.5 px-3 text-slate-300 flex items-center space-x-1.5 border border-white/10 rounded bg-white/[0.03] active:bg-white/10 transition-colors text-xs"
            >
              <span>résumé PDF</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-rose-400" />
            </button>
            <button
              onClick={() => {
                onOpenContact();
                setMobileMenuOpen(false);
              }}
              className="min-h-[44px] py-2.5 px-4 bg-rose-600 hover:bg-rose-500 text-white font-semibold rounded text-xs transition-colors flex items-center space-x-1"
            >
              <span>contact</span>
              <span>→</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

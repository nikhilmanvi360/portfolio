import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { Shield, Terminal, Mail, Radar, Github } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="mt-16 bg-[#090D16] border-t border-slate-800/80 text-slate-400 font-mono text-xs py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center">
              <Radar className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-100 text-sm">NIKHIL</span>
              <span className="text-slate-500 text-xs block">SOC Analyst & AI Security Researcher</span>
            </div>
          </div>

          <p className="text-slate-400 text-center md:text-right text-[11px] max-w-md">
            "{PERSONAL_INFO.tagline}"
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            <span>{PERSONAL_INFO.philosophy}</span>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={onOpenContact} className="hover:text-emerald-400 transition-colors">
              Dispatch Contact
            </button>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-emerald-400 transition-colors">
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

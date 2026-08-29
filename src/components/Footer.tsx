import React from "react";
import { PERSONAL_INFO } from "../data/portfolioData";

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="mt-16 sm:mt-28 border-t border-white/10 text-slate-400 text-xs py-8 sm:py-12 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 space-y-6 sm:space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div className="space-y-1 font-heading">
            <div className="text-base sm:text-lg font-black text-white uppercase tracking-wider">NIKHIL MANVI</div>
            <div className="text-xs font-mono-tech text-rose-500 lowercase">
              gadag & bangalore, india
            </div>
          </div>

          <p className="text-slate-300 text-xs max-w-md font-normal leading-relaxed">
            I spend most of my time trying to figure out why machines do stupid things.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-tech">
          <div className="text-slate-500">
            © {new Date().getFullYear()} Nikhil Manvi
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:space-x-6">
            <button
              onClick={onOpenContact}
              className="min-h-[44px] text-slate-300 hover:text-white transition-colors flex items-center"
            >
              contact →
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="min-h-[44px] text-rose-400 hover:text-rose-300 transition-colors flex items-center break-all"
            >
              {PERSONAL_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

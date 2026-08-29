import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { X, Mail, MapPin, Download, Check, Send } from "lucide-react";
import { downloadResume } from "../utils/resumeGenerator";

interface ContactResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactResumeModal: React.FC<ContactResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formState, setFormState] = useState({ name: "", company: "", role: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="bg-[#0b0d14] border border-white/10 rounded-2xl max-w-xl w-full max-h-[90dvh] overflow-y-auto p-4 sm:p-6 space-y-5 sm:space-y-6 text-slate-100 relative shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/[0.05] border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-1.5 border-b border-white/10 pb-4 pr-10">
          <div className="text-xs font-mono-tech uppercase tracking-widest text-rose-400">
            CONTACT & INQUIRIES
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Connect with Nikhil</h3>
          <p className="text-xs text-slate-400 font-normal">
            Available for SOC L1 roles, Security Engineering Internships & Project Collaborations.
          </p>
        </div>

        {/* Quick Info Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <span className="text-slate-400 text-[10px] font-mono-tech uppercase">DIRECT EMAIL:</span>
            <div className="flex items-center justify-between gap-2">
              <span className="text-white font-semibold truncate text-xs">{PERSONAL_INFO.email}</span>
              <button
                onClick={handleCopyEmail}
                className="text-[10px] font-mono-tech min-h-[36px] px-2.5 rounded bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 transition-colors shrink-0 flex items-center"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : "COPY"}
              </button>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-1">
            <span className="text-slate-400 text-[10px] font-mono-tech uppercase">LOCATION:</span>
            <div className="flex items-center space-x-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span className="truncate text-xs">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Resume Action */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-rose-950/20 border border-rose-800/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs">
          <div>
            <h4 className="font-bold text-white">Formatted Resume Specification</h4>
            <p className="text-slate-400 text-xs font-normal">Download complete candidate profile document</p>
          </div>
          <button
            onClick={downloadResume}
            className="min-h-[44px] px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-all flex items-center justify-center space-x-1.5 shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
        </div>

        {/* Dispatch Message Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmitForm} className="space-y-4 text-xs font-normal">
            <div className="text-xs font-mono-tech uppercase text-slate-400">SEND DISPATCH MESSAGE:</div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-300 block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-2.5 text-base sm:text-sm bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-500"
                />
              </div>

              <div>
                <label className="text-slate-300 block mb-1">Company / Organization</label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="e.g. CyberSec Inc"
                  className="w-full p-2.5 text-base sm:text-sm bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-300 block mb-1">Subject / Role</label>
              <input
                type="text"
                value={formState.role}
                onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                placeholder="e.g. SOC Analyst L1 Opportunity / Security Project"
                className="w-full p-2.5 text-base sm:text-sm bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <div>
              <label className="text-slate-300 block mb-1">Message *</label>
              <textarea
                required
                rows={3}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Share role details or questions for Nikhil..."
                className="w-full p-2.5 text-base sm:text-sm bg-white/[0.04] border border-white/10 rounded-lg text-white focus:outline-none focus:border-rose-500"
              />
            </div>

            <button
              type="submit"
              className="w-full min-h-[44px] py-3 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-500 text-white transition-all flex items-center justify-center space-x-2 shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </form>
        ) : (
          <div className="p-5 sm:p-6 rounded-xl bg-white/[0.03] border border-rose-500/40 text-center space-y-3">
            <Check className="w-8 h-8 text-rose-400 mx-auto" />
            <h4 className="text-base sm:text-lg font-bold text-white">Message Transmitted</h4>
            <p className="text-xs text-slate-300">
              Thank you, {formState.name}. Your message has been routed to Nikhil. He will respond promptly via email at {PERSONAL_INFO.email}.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="min-h-[44px] px-4 py-2 text-xs font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 rounded-lg"
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

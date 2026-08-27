import React, { useState } from "react";
import { PERSONAL_INFO } from "../data/portfolioData";
import { X, Mail, Github, Linkedin, MapPin, Download, Check, Send, ShieldAlert, Sparkles } from "lucide-react";
import { downloadResume } from "../utils/resumeGenerator";

interface ContactResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactResumeModal: React.FC<ContactResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [formState, setFormState] = useState({ name: "", company: "", role: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

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
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#0B101D] border border-slate-800 rounded-xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 text-slate-100 relative shadow-2xl animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-900 border border-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-2 border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 rounded font-bold">
              CONTACT & RECRUITER DISPATCH
            </span>
          </div>
          <h3 className="text-2xl font-bold">CONNECT WITH NIKHIL</h3>
          <p className="text-xs font-mono text-slate-400">
            Available for SOC L1 Roles, Security Internships & AI Cybersecurity Projects
          </p>
        </div>

        {/* Quick Contact Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-slate-500 block text-[10px]">EMAIL ADDRESS:</span>
            <div className="flex items-center justify-between">
              <span className="text-emerald-400 font-bold truncate">{PERSONAL_INFO.email}</span>
              <button
                onClick={handleCopyEmail}
                className="text-[10px] px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              >
                {copiedEmail ? <Check className="w-3 h-3 text-emerald-400" /> : "COPY"}
              </button>
            </div>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
            <span className="text-slate-500 block text-[10px]">LOCATION / AVAILABILITY:</span>
            <div className="flex items-center space-x-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">{PERSONAL_INFO.location}</span>
            </div>
          </div>
        </div>

        {/* Resume Download Action */}
        <div className="p-4 rounded-lg bg-emerald-950/40 border border-emerald-800/60 flex flex-wrap items-center justify-between gap-3 font-mono">
          <div>
            <h4 className="text-sm font-bold text-slate-100">DOWNLOAD RESUME SPECIFICATION</h4>
            <p className="text-[11px] text-emerald-300">Generate formatted SOC Analyst profile text file</p>
          </div>
          <button
            onClick={downloadResume}
            className="px-4 py-2 text-xs font-bold rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center space-x-1.5 shadow"
          >
            <Download className="w-3.5 h-3.5" />
            <span>DOWNLOAD RESUME</span>
          </button>
        </div>

        {/* Dispatch Form */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmitForm} className="space-y-4 font-mono text-xs">
            <h4 className="font-bold text-slate-200 uppercase">SEND RECRUITER / INQUIRY MESSAGE:</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-slate-400 block mb-1">YOUR NAME / RECRUITER NAME *</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="text-slate-400 block mb-1">COMPANY / ORGANIZATION</label>
                <input
                  type="text"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                  placeholder="e.g. CyberSec Operations Inc"
                  className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-100 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="text-slate-400 block mb-1">ROLE / PURPOSE</label>
              <input
                type="text"
                value={formState.role}
                onChange={(e) => setFormState({ ...formState, role: e.target.value })}
                placeholder="e.g. SOC L1 Interview / Security Internship / Project Collaboration"
                className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="text-slate-400 block mb-1">DISPATCH MESSAGE *</label>
              <textarea
                required
                rows={3}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                placeholder="Share role details or questions for Nikhil..."
                className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded text-slate-100 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 font-bold rounded bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>TRANSMIT DISPATCH MESSAGE</span>
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-lg bg-slate-900 border border-emerald-500 text-center space-y-3 font-mono">
            <Check className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-slate-100">DISPATCH TRANSMITTED</h4>
            <p className="text-xs text-slate-300">
              Thank you {formState.name}. Your message has been routed to Nikhil. He will respond promptly via email at {PERSONAL_INFO.email}.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-4 py-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-200 rounded"
            >
              Send Another Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

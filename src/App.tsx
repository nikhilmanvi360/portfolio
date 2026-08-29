import React, { useState } from "react";
import { ActiveTab } from "./types";
import { Header } from "./components/Header";
import { CommandCenter } from "./components/CommandCenter";
import { SocExperience } from "./components/SocExperience";
import { ProjectLabs } from "./components/ProjectLabs";
import { PhilosophyRoadmap } from "./components/PhilosophyRoadmap";
import { ContactResumeModal } from "./components/ContactResumeModal";
import { Footer } from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("command-center");
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen max-w-full overflow-x-hidden bg-[#07080c] bg-archive-grid text-slate-100 antialiased flex flex-col selection:bg-rose-900/40 selection:text-white">
      {/* Editorial Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Narrative Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {activeTab === "command-center" && (
          <CommandCenter
            setActiveTab={setActiveTab}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}
        {activeTab === "project-labs" && <ProjectLabs />}
        {activeTab === "experience-skills" && <SocExperience />}
        {activeTab === "philosophy-roadmap" && <PhilosophyRoadmap />}
      </main>

      {/* Editorial Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact & Resume Modal */}
      <ContactResumeModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

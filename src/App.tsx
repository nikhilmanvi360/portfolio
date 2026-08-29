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
    <div className="min-h-screen max-w-full overflow-x-hidden mr-robot-bg text-slate-100 font-mono antialiased flex flex-col selection:bg-rose-600 selection:text-white">
      {/* Top Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Operational Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-8">
        {activeTab === "command-center" && (
          <CommandCenter
            setActiveTab={setActiveTab}
            onOpenContact={() => setIsContactOpen(true)}
          />
        )}
        {activeTab === "experience-skills" && <SocExperience />}
        {activeTab === "project-labs" && <ProjectLabs />}
        {activeTab === "philosophy-roadmap" && <PhilosophyRoadmap />}
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Recruiter Contact & Resume Modal */}
      <ContactResumeModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

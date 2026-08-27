export type ActiveTab =
  | "command-center"
  | "experience-skills"
  | "project-labs"
  | "philosophy-roadmap"
  | "contact-resume";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "Cybersecurity & SOC" | "AI & ML Security" | "Interactive Cyber Game" | "Research & IoT" | "Software Engineering";
  shortDescription: string;
  fullDescription: string;
  architectureComponents: string[];
  techStack: string[];
  securityValue: string;
  mitreTags?: string[];
  featured?: boolean;
  status: "ACTIVE" | "RESEARCH" | "PROTOTYPE" | "COMPLETED";
  iconName: string;
}

export interface SocExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: string;
  summary: string;
  keyResponsibilities: string[];
  domainsMastered: string[];
  workflowsUsed: string[];
}


export type ActiveTab =
  | "command-center"
  | "project-labs"
  | "experience-skills"
  | "philosophy-roadmap";

export interface Project {
  id: string;
  caseNumber?: string;
  title: string;
  category: string;
  status: string;
  shortDescription: string;
  tagline: string;
  fullDescription: string;
  architectureComponents: string[];
  securityValue: string;
  techStack: string[];
  featured?: boolean;
  mitreTechniques?: string[];
  mitreTags?: string[];
  iconName?: string;
  githubUrl?: string;
  liveUrl?: string;
  // Case File Case Study Sections
  question?: string;
  approach?: string;
  result?: string;
  learned?: string;
}

export interface SocExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type?: string;
  summary: string;
  keyResponsibilities: string[];
  domainsMastered: string[];
  workflowsUsed?: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface FieldNote {
  id: string;
  noteNumber: string;
  title: string;
  date: string;
  category: string;
  content: string;
  takeaway: string;
}

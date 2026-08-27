export const NIKHIL_RESUME_TEXT = `================================================================================
NIKHIL MANVI
Junior Security Analyst | Cybersecurity & SOC Operations
================================================================================
Email: nikhilmanvi360@gmail.com
Phone: +91 9844745195
Location: Gadag, India 582101
Availability: Flexible for part-time roles with weekend and evening availability.
GitHub: https://github.com/nikhilmanvi360

--------------------------------------------------------------------------------
SUMMARY
--------------------------------------------------------------------------------
Analytical Junior Security Analyst skilled in incident response, risk assessment,
and security documentation. Monitors security systems and contributes to threat
mitigation strategies. Flexible for part-time roles with weekend and evening
availability. Adapts quickly to fast-paced environments and delivers high-quality
results under pressure.

--------------------------------------------------------------------------------
EXPERIENCE
--------------------------------------------------------------------------------
Junior Security Analyst | Vijesha IT Service LLP
Duration: 04/2025 – 02/2026
Location: Bangalore, India

Key Responsibilities & Achievements:
• Deployed SIEM tools to detect and respond to malicious activities on corporate networks.
• Monitored security systems to identify potential threats and vulnerabilities.
• Collaborated with team members to create incident response strategies that enhanced team readiness.
• Maintained documentation of security policies and compliance requirements to ensure regulatory adherence.
• Supported training sessions on cybersecurity awareness for staff to mitigate risks.
• Designed, implemented, and maintained security systems and controls.
• Learned about the latest security threats from blogs and online publications.

--------------------------------------------------------------------------------
EDUCATION AND TRAINING
--------------------------------------------------------------------------------
BCA (Bachelor of Computer Applications)
Institution: KLE's JT BCA College
Location: Gadag, Karnataka
Expected Graduation: 05/2027

--------------------------------------------------------------------------------
SKILLS
--------------------------------------------------------------------------------
• Cybersecurity principles           • Network protection
• Incident management                • Documentation of security policies
• Threat intelligence                • Risk evaluation
• Analytical problem solving         • Containerization with Docker
• Linux operating systems

--------------------------------------------------------------------------------
PROJECTS AND RESEARCH
--------------------------------------------------------------------------------
• Worked on IDS system using machine learning models
• Researched on self healing SOC mechanisms
• Built a multi agent SIEM automation and Executive Orchestration layer for SIEM tools

--------------------------------------------------------------------------------
LANGUAGES
--------------------------------------------------------------------------------
• English: Intermediate (B1)
• Japanese: Beginner (A1)
• Hindi: Intermediate (B1)
================================================================================
`;

export function downloadResume() {
  const blob = new Blob([NIKHIL_RESUME_TEXT], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Nikhil_Manvi_Resume.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

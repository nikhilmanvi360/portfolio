import jsPDF from "jspdf";

export const RESUME_DATA = {
  name: "Nikhil Manvi",
  email: "nikhilmanvi360@gmail.com",
  phone: "+91 9844745195",
  location: "Gadag, India 582101",
  availability: "Flexible for part-time roles with weekend and evening availability.",
  github: "github.com/nikhilmanvi360",
  summary:
    "Analytical Junior Security Analyst skilled in incident response, risk assessment, and security documentation. Monitors security systems and contributes to threat mitigation strategies. Flexible for part-time roles with weekend and evening availability. Adapts quickly to fast-paced environments and delivers high-quality results under pressure.",
  experience: {
    role: "Junior Security Analyst",
    company: "Vijesha It service llp",
    dates: "04/2025 – 02/2026",
    location: "Bangalore, India",
    bullets: [
      "Deployed SIEM tools to detect and respond to malicious activities on corporate networks.",
      "Monitored security systems to identify potential threats and vulnerabilities.",
      "Collaborated with team members to create incident response strategies that enhanced team readiness.",
      "Maintained documentation of security policies and compliance requirements to ensure regulatory adherence.",
      "Supported training sessions on cybersecurity awareness for staff to mitigate risks.",
      "Designed, implemented, and maintained security systems and controls.",
      "Learned about the latest security threats from blogs and online publications.",
    ],
  },
  education: {
    degree: "BCA",
    institution: "KLE's JT BCA COLLAGE",
    dates: "05/2027",
    status: "Expected",
    location: "Gadag, Karnataka",
  },
  skillsLeft: [
    "Cybersecurity principles",
    "Incident management",
    "Threat intelligence",
    "Analytical problem solving",
    "Linux operating systems",
  ],
  skillsRight: [
    "Network protection",
    "Documentation of security policies",
    "Risk evaluation",
    "Containerization with Docker",
  ],
  projects: [
    "worked on IDS system using machine learning models",
    "researched on self healing SOC mechanisms",
    "built a multi agent SEIM automation and Executive Orchestration layer for SIEM tools",
  ],
  languages: [
    { name: "English", level: "Intermediate (B1)" },
    { name: "Japanese", level: "Beginner (A1)" },
    { name: "Hindi", level: "Intermediate (B1)" },
  ],
};

export function downloadResume() {
  const doc = new jsPDF({
    unit: "pt",
    format: "letter",
  });

  const marginX = 45;
  let y = 45;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - marginX * 2;

  // Title: Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(15, 23, 42); // slate-900
  doc.text(RESUME_DATA.name, marginX, y);
  y += 18;

  // Contact line 1
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const contactStr1 = `${RESUME_DATA.email}   |   ${RESUME_DATA.phone}   |   ${RESUME_DATA.location}`;
  doc.text(contactStr1, marginX, y);
  y += 14;

  // Contact line 2
  const contactStr2 = `${RESUME_DATA.availability}   |   ${RESUME_DATA.github}`;
  doc.text(contactStr2, marginX, y);
  y += 18;

  // Helper function for section header
  const addSectionHeader = (title: string) => {
    // Draw thin rule line
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(0.8);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 14;

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(15, 23, 42);
    doc.text(title, marginX, y);
    y += 12;
  };

  // Section: Summary
  addSectionHeader("Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  const summaryLines = doc.splitTextToSize(RESUME_DATA.summary, contentWidth);
  doc.text(summaryLines, marginX, y);
  y += summaryLines.length * 12 + 10;

  // Section: Experience
  addSectionHeader("Experience");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`${RESUME_DATA.experience.role}, `, marginX, y);
  const roleWidth = doc.getTextWidth(`${RESUME_DATA.experience.role}, `);
  
  doc.setFont("helvetica", "italic");
  doc.text(RESUME_DATA.experience.company, marginX + roleWidth, y);

  // Right aligned dates & location
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text(RESUME_DATA.experience.dates, pageWidth - marginX, y, { align: "right" });
  y += 13;
  doc.text(RESUME_DATA.experience.location, pageWidth - marginX, y, { align: "right" });

  // Bullets
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);

  RESUME_DATA.experience.bullets.forEach((bullet) => {
    const bulletText = doc.splitTextToSize(bullet, contentWidth - 16);
    doc.text("•", marginX + 4, y);
    doc.text(bulletText, marginX + 16, y);
    y += bulletText.length * 12 + 2;
  });
  y += 8;

  // Section: Education and Training
  addSectionHeader("Education and Training");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10.5);
  doc.setTextColor(15, 23, 42);
  doc.text(`${RESUME_DATA.education.degree}, `, marginX, y);
  const degreeWidth = doc.getTextWidth(`${RESUME_DATA.education.degree}, `);

  doc.setFont("helvetica", "italic");
  doc.text(RESUME_DATA.education.institution, marginX + degreeWidth, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.text(RESUME_DATA.education.dates, pageWidth - marginX, y, { align: "right" });
  y += 13;
  doc.text(RESUME_DATA.education.status, marginX, y);
  doc.text(RESUME_DATA.education.location, pageWidth - marginX, y, { align: "right" });
  y += 18;

  // Section: Skills
  addSectionHeader("Skills");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);

  const colWidth = contentWidth / 2;
  const maxSkillsLen = Math.max(RESUME_DATA.skillsLeft.length, RESUME_DATA.skillsRight.length);
  for (let i = 0; i < maxSkillsLen; i++) {
    if (RESUME_DATA.skillsLeft[i]) {
      doc.text("•  " + RESUME_DATA.skillsLeft[i], marginX + 4, y);
    }
    if (RESUME_DATA.skillsRight[i]) {
      doc.text("•  " + RESUME_DATA.skillsRight[i], marginX + colWidth + 4, y);
    }
    y += 14;
  }
  y += 6;

  // Section: Projects and Research
  addSectionHeader("Projects and Research");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(30, 41, 59);

  RESUME_DATA.projects.forEach((proj) => {
    const projText = doc.splitTextToSize(proj, contentWidth - 16);
    doc.text("•", marginX + 4, y);
    doc.text(projText, marginX + 16, y);
    y += projText.length * 12 + 3;
  });
  y += 8;

  // Section: Languages
  addSectionHeader("Languages");
  const langColWidth = contentWidth / 3;
  RESUME_DATA.languages.forEach((lang, idx) => {
    const xPos = marginX + idx * langColWidth;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.text(lang.name, xPos, y);
    doc.setFont("helvetica", "normal");
    doc.text(lang.level, xPos, y + 12);
  });

  // Save the PDF
  doc.save("Nikhil_Manvi_Resume.pdf");
}


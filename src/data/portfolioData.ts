import { Project, SocExperienceItem } from "../types";

export const PERSONAL_INFO = {
  name: "Nikhil Manvi",
  title: "Junior Security Analyst & Cybersecurity Specialist",
  subTitle: "BCA Candidate @ KLE's JT BCA College | Security Operations | SIEM & Incident Response",
  tagline: "Building the intersection of Cybersecurity, AI, and Security Operations.",
  altTagline: "Learning how attackers think. Building how defenders respond.",
  email: "nikhilmanvi360@gmail.com",
  phone: "+91 9844745195",
  github: "https://github.com/nikhilmanvi360",
  linkedin: "https://linkedin.com",
  location: "Gadag / Bangalore, India",
  availability: "Flexible for part-time roles with weekend and evening availability.",
  status: "READY FOR SOC L1 / SECURITY ANALYST ROLE",
  philosophy: "Learn → Build → Break → Analyze → Improve",
  positioning: "Analytical Junior Security Analyst skilled in incident response, risk assessment, and security documentation. Monitors security systems and contributes to threat mitigation strategies.",
  aboutText: `I am Nikhil Manvi, a BCA candidate at KLE's JT BCA College (Expected 05/2027) and Junior Security Analyst with practical experience at Vijesha IT Service LLP.

My primary career focus is Security Operations, threat detection, incident response, risk assessment, and security automation. I monitor security systems to identify potential threats, deploy SIEM tools, and collaborate on incident response strategies.

Alongside cybersecurity, I develop solutions using Machine Learning and containerized environments. My work includes building ML-based IDS systems, researching self-healing SOC mechanisms, and constructing multi-agent SIEM automation & executive orchestration layers.`,
  missionText: `My mission is to deliver high-quality security analysis under pressure, ensuring corporate networks are defended, compliance policies are documented, and automated SOC tools empower rapid threat mitigation.`
};

export const TARGET_ROLES = [
  "SOC Analyst L1",
  "Junior Security Analyst",
  "Security Operations Intern",
  "Cybersecurity Analyst",
  "Security Monitoring Analyst"
];

export const LONG_TERM_DIRECTIONS = [
  "Security Operations & Incident Response",
  "Threat Detection & Log Analytics",
  "Detection Engineering & Threat Intelligence",
  "AI-assisted Cyber Defense & SOC Automation",
  "Offensive Security & Red Teaming"
];

export const SOC_EXPERIENCE: SocExperienceItem[] = [
  {
    id: "exp-vijesha",
    role: "Junior Security Analyst",
    organization: "Vijesha IT Service LLP",
    period: "04/2025 – 02/2026",
    type: "OPERATIONAL SECURITY EXPERIENCE",
    summary: "Deployed SIEM tools, monitored corporate network security systems, created incident response strategies, and maintained security policy compliance.",
    keyResponsibilities: [
      "Deployed SIEM tools to detect and respond to malicious activities on corporate networks.",
      "Monitored security systems to identify potential threats and vulnerabilities.",
      "Collaborated with team members to create incident response strategies that enhanced team readiness.",
      "Maintained documentation of security policies and compliance requirements to ensure regulatory adherence.",
      "Supported training sessions on cybersecurity awareness for staff to mitigate risks.",
      "Designed, implemented, and maintained security systems and controls.",
      "Learned about the latest security threats from blogs and online publications."
    ],
    domainsMastered: [
      "SIEM Deployment & Monitoring",
      "Incident Response Strategies",
      "Security Policy Documentation",
      "Risk Assessment & Mitigation",
      "Staff Cybersecurity Awareness",
      "Security Controls & Controls Maintenance"
    ],
    workflowsUsed: [
      "Detection -> Validation -> Triage -> Investigation -> Containment -> Documentation"
    ]
  },
  {
    id: "exp-1",
    role: "SOC Operations & Threat Triage Lab",
    organization: "Security Operations Center Practice",
    period: "Continuous Lab & Project Work",
    type: "OPERATIONAL PRACTICE & MONITORING",
    summary: "Developed foundational hands-on exposure to operational security monitoring, alert prioritization, SIEM event triage, and security incident investigation workflows.",
    keyResponsibilities: [
      "Monitored real-time SIEM alerts and security event logs to identify potential unauthorized activity.",
      "Performed initial alert triage, distinguishing benign false positives from genuine security anomalies.",
      "Investigated suspicious network connections, failed authentication spikes, and unusual process executions.",
      "Analyzed Indicator of Compromise (IOC) artifacts including suspicious IP hashes, malicious URLs, and email payloads.",
      "Documented incident containment steps and drafted initial incident report summaries following standard SOC SLAs."
    ],
    domainsMastered: [
      "Security Event Monitoring",
      "Alert Triage & Prioritization",
      "Log Analysis & Correlation",
      "Suspicious Activity Investigation",
      "Attack Pattern Recognition",
      "SOC Workflow Documentation"
    ],
    workflowsUsed: [
      "Detection -> Validation -> Triage -> Investigation -> Containment -> Documentation"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ml-ids-system",
    title: "Machine Learning IDS System",
    tagline: "Intrusion Detection System Powered by Machine Learning Models",
    category: "AI & ML Security",
    shortDescription: "An automated Intrusion Detection System (IDS) utilizing trained ML models to classify malicious network traffic and anomaly patterns.",
    fullDescription: "Built an Intrusion Detection System leveraging machine learning algorithms to process network packet logs, extract statistical features, and identify suspicious intrusion attempts before host compromise.",
    architectureComponents: [
      "Feature Extractor: Preprocesses network packet flows and protocol headers",
      "ML Classification Engine: Models trained to distinguish normal baseline traffic from port scans and DDoS attempts",
      "Alert Dispatcher: Outputs high-confidence intrusion alerts to SOC logging channels"
    ],
    techStack: ["Python", "Scikit-learn", "Machine Learning Models", "Pandas", "Linux", "Docker"],
    securityValue: "Enhances perimeter detection accuracy by identifying non-linear attack signatures that static signature rules miss.",
    mitreTags: ["T1595 - Active Scanning", "T1498 - Network Denial of Service"],
    featured: true,
    status: "ACTIVE",
    iconName: "ShieldAlert"
  },
  {
    id: "self-healing-soc",
    title: "Self-Healing SOC Mechanisms Research",
    tagline: "Autonomous Incident Remediation & Self-Correcting SOC Workflows",
    category: "Cybersecurity & SOC",
    shortDescription: "Research project focusing on self-correcting SOC workflows that automatically isolate compromised hosts and patch firewall configurations.",
    fullDescription: "Investigated autonomous self-healing SOC architectures that detect compromised assets, trigger immediate API-driven micro-segmentation, and dynamically roll back suspicious host state changes without manual human latency.",
    architectureComponents: [
      "Anomaly Detection Trigger: Real-time telemetry monitor catching rapid privilege changes",
      "Automated Playbook Engine: API-based quarantine and firewall rule updater",
      "State Verifier: Validates system health and policy compliance post-remediation"
    ],
    techStack: ["Python", "Docker", "Linux", "REST APIs", "Automated Playbooks"],
    securityValue: "Drastically lowers Mean Time to Respond (MTTR) by executing immediate, automated containment for high-confidence threats.",
    mitreTags: ["T1070 - Indicator Removal", "T1562 - Impair Defenses"],
    featured: true,
    status: "RESEARCH",
    iconName: "Terminal"
  },
  {
    id: "multiagent-siem-orchestration",
    title: "Multi-Agent SIEM Automation & Executive Orchestration",
    tagline: "Multi-Agent AI Orchestration Layer for SIEM Platforms",
    category: "AI & ML Security",
    shortDescription: "Built a multi-agent SIEM automation and executive orchestration layer designed to correlate SIEM logs and summarize threats for SOC leadership.",
    fullDescription: "Designed an advanced multi-agent framework that sits on top of standard SIEM tools. Autonomous agents specialize in log parsing, threat intelligence lookup, and executive summary generation for CISO-level security reporting.",
    architectureComponents: [
      "SIEM Ingestion Agent: Interfaces with SIEM API feeds for raw log parsing",
      "Threat Intelligence Cross-Examiner: Queries IP, URL, and file hash reputation databases",
      "Executive Orchestrator: Synthesizes technical investigation steps into high-level executive summaries"
    ],
    techStack: ["Python", "LangChain / Multi-Agent Frameworks", "FastAPI", "Docker", "SIEM APIs"],
    securityValue: "Bridges the gap between technical Tier-1 alert details and executive-level threat reporting.",
    mitreTags: ["T1083 - File and Directory Discovery", "T1071 - Application Layer Protocol"],
    featured: true,
    status: "ACTIVE",
    iconName: "Cpu"
  },
  {
    id: "cybersentinel-ai",
    title: "CyberSentinel AI",
    tagline: "Autonomous AI-Driven Cybersecurity Monitoring & Response Platform",
    category: "AI & ML Security",
    shortDescription: "An intelligent security platform integrating AI threat monitoring, automated phishing analysis, voice-guided SOC assistance, and an immutable blockchain alert ledger.",
    fullDescription: "CyberSentinel AI explores how artificial intelligence can be seamlessly integrated into a modern Security Operations Center pipeline. It automates repetitive tier-1 analyst tasks such as initial log ingestion, suspicious URL scoring, and threat classification while providing an immutable ledger for audit compliance.",
    architectureComponents: [
      "Phishing Detector: ML pipeline for URL & email structural threat scoring",
      "AI Threat Monitor: Real-time telemetry ingest with anomaly detection algorithms",
      "Blockchain Alert Ledger: Immutable audit trail for critical security incidents",
      "Voice & Automated Response: Voice-assisted SOC investigation bot for rapid incident triage"
    ],
    techStack: ["Python", "FastAPI", "Streamlit", "Scikit-learn", "Machine Learning", "REST APIs"],
    securityValue: "Accelerates Tier-1 SOC alert triage from minutes to seconds, reducing analyst burnout while ensuring alert records cannot be tampered with by attackers.",
    mitreTags: ["T1566 - Phishing", "T1071 - Application Layer Protocol", "T1059 - Command and Scripting Interpreter"],
    featured: false,
    status: "ACTIVE",
    iconName: "ShieldAlert"
  },
  {
    id: "digital-crime-lab",
    title: "Digital Crime Lab / Tech Detective",
    tagline: "Interactive Web-Based Digital Forensics & Incident Response Game",
    category: "Interactive Cyber Game",
    shortDescription: "A gamified simulation platform where security enthusiasts investigate digital crime scenes, correlate log artifacts, and uncover simulated cyber incidents.",
    fullDescription: "Digital Crime Lab transforms complex DFIR (Digital Forensics and Incident Response) concepts into an immersive, interactive digital investigation game. Users act as digital detectives analyzing network packet captures, memory dumps, server access logs, and registry keys to solve real-world scenario cases.",
    architectureComponents: [
      "Evidence Vault: Web interface displaying raw log files and network pcap snippets",
      "Interactive Case Engine: State machine evaluating user hypotheses and investigation progress",
      "Real-Time Event Stream: WebSockets for multiplayer collaborative investigation rooms",
      "SQLite Log Store: Queryable log database for practicing SQL security queries"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Socket.io", "Flask", "SQLite", "HTML5", "CSS3"],
    securityValue: "Demonstrates practical understanding of digital investigation workflows, forensic evidence chain-of-custody, and educational security engagement.",
    mitreTags: ["T1003 - OS Credential Dumping", "T1070 - Indicator Removal", "T1083 - File and Directory Discovery"],
    featured: false,
    status: "ACTIVE",
    iconName: "FileSearch"
  },
  {
    id: "keylogger-iot-research",
    title: "Keylogger & IoT Security Research",
    tagline: "Defensive Endpoint Input Capture & Malware Behavior Analysis",
    category: "Research & IoT",
    shortDescription: "Defensive research project studying input capture mechanisms, persistence hooks, and endpoint detection strategies to create robust EDR detection rules.",
    fullDescription: "To defend endpoints effectively, one must understand how input monitoring spyware operates. This research project involved crafting controlled low-level input loggers in isolated lab environments to study API hooks, keystroke logging techniques, and how endpoint detection and response (EDR) systems detect persistence.",
    architectureComponents: [
      "Input Hook Monitor: Controlled low-level system event receiver",
      "Behavioral Telemetry Logger: Captures process lineage and system call artifacts",
      "EDR Detection Rule Set: Custom Sigma and YARA rules to detect unauthorized hook creation"
    ],
    techStack: ["Python", "C/C++", "Windows API Hooks", "Sigma Rules", "YARA", "Sysmon"],
    securityValue: "Provides deep insight into endpoint malware behavior, persistence mechanisms, and how SOC analysts can write precise Sigma detection rules for anomalous hooks.",
    mitreTags: ["T1056 - Input Capture", "T1547 - Boot or Logon Autostart Execution"],
    featured: false,
    status: "RESEARCH",
    iconName: "Terminal"
  },
  {
    id: "multi-agent-truth-system",
    title: "Multi-Agent Truth System",
    tagline: "Collaborative Multi-Agent AI Verification for Cyber Investigation",
    category: "AI & ML Security",
    shortDescription: "A multi-agent AI architecture where specialized LLM agents collaborate, cross-examine threat intelligence, and eliminate unreliable conclusions.",
    fullDescription: "Security investigations require gathering intelligence from multiple disparate feeds (VT, AbuseIPDB, AlienVault, internal SIEM). This project coordinates multiple autonomous AI agents—such as a Log Analyzer Agent, Threat Intel Scraper Agent, and Forensic Validator Agent—that cross-examine each other's findings to output verified, bulletproof incident summaries.",
    architectureComponents: [
      "Orchestrator Agent: Directs workflow and assigns triage sub-tasks",
      "Evidence Collector Agent: Queries external threat intelligence APIs",
      "Critic & Cross-Checker Agent: Verifies claims against strict ground-truth log evidence",
      "Report Synthesizer Agent: Generates human-readable SOC incident executive summaries"
    ],
    techStack: ["Python", "LangChain / Multi-Agent Frameworks", "FastAPI", "OpenAI / Gemini APIs", "JSON Schema Validation"],
    securityValue: "Drastically reduces AI hallucinations in threat intelligence correlation, giving SOC teams verifiable AI reasoning they can trust.",
    mitreTags: ["T1589 - Gather Victim Identity Information", "T1595 - Active Scanning"],
    featured: false,
    status: "PROTOTYPE",
    iconName: "Cpu"
  },
  {
    id: "smart-food-waste-prediction",
    title: "Smart Food Waste Prediction System",
    tagline: "Predictive Machine Learning Data Analytics Pipeline",
    category: "Software Engineering",
    shortDescription: "A machine learning prediction system analyzing consumer data patterns to forecast waste metrics and optimize supply chain efficiency.",
    fullDescription: "Though focused on sustainability, this project honed my data science and machine learning capabilities. Building end-to-end data cleaning pipelines, feature engineering, and model training in Python translates directly to SOC log analytics, anomaly baseline creation, and user behavior analytics (UEBA).",
    architectureComponents: [
      "Data Preprocessing Pipeline: Cleans, normalizes, and handles missing sensor/user data",
      "Predictive ML Engine: Scikit-learn Random Forest regression model",
      "Flask Web Dashboard: Interactive dashboard visualizing forecast metrics"
    ],
    techStack: ["Python", "Flask", "Scikit-learn", "Pandas", "NumPy", "Chart.js"],
    securityValue: "Demonstrates fundamental ML data handling skills critical for User and Entity Behavior Analytics (UEBA) and baseline anomaly detection in SOCs.",
    featured: false,
    status: "COMPLETED",
    iconName: "BarChart3"
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Security Operations & Incident Response",
    icon: "Shield",
    skills: ["Cybersecurity Principles", "Incident Management", "SIEM Monitoring", "Alert Triage & Prioritization", "Log Correlation", "Documentation of Security Policies", "Risk Evaluation"]
  },
  {
    name: "Threat Detection & Network Protection",
    icon: "Radar",
    skills: ["Threat Intelligence", "Network Protection", "Network Traffic Analysis", "Sysmon & Windows Event Logs", "MITRE ATT&CK Matrix", "Phishing Detection", "YARA & Sigma Rules"]
  },
  {
    name: "AI, ML & Container Systems",
    icon: "Bot",
    skills: ["Containerization with Docker", "Linux Operating Systems", "Analytical Problem Solving", "Machine Learning Models (Scikit-learn)", "Multi-Agent AI Systems", "Automated Threat Enrichment"]
  },
  {
    name: "Software & Systems Development",
    icon: "Code",
    skills: ["Python (FastAPI / Flask)", "React & TypeScript", "Node.js & Express", "REST APIs & WebSockets", "SQLite & MongoDB", "Tailwind CSS & Vite"]
  }
];


import { Project, SocExperienceItem, SkillCategory, FieldNote } from "../types";

export const PERSONAL_INFO = {
  name: "Nikhil Manvi",
  handle: "nikhilmanvi",
  title: "Cybersecurity & Security Operations Specialist",
  email: "nikhilmanvi25@gmail.com",
  location: "Bangalore / Gadag, India",
  education: "BCA (Bachelor of Computer Applications)",
  institution: "KLE's JT BCA College, Gadag",
  expectedGraduation: "05/2027",
  status: "Open for SOC L1 & Security Analyst Roles",
  tagline: "I build systems that understand when something is wrong.",
  heroHeadline: "I'm interested in what happens between an attack and the moment someone notices.",
  bioParagraphs: [
    "I'm Nikhil — a cybersecurity-focused BCA student working across security operations, detection engineering, incident response, and AI-driven security automation.",
    "I don't learn security particularly well by only reading about it. I prefer to build something, break it, investigate what happened, and then try to make it better.",
    "My work combines SOC practices, cybersecurity labs, Linux, scripting, and AI-driven automation, with a strong interest in detection engineering, threat intelligence, and offensive security. I'm constantly building, breaking, analyzing, and learning—because the best way to understand security is to experience it from both sides."
  ],
  links: {
    github: "https://github.com/Nikhil-Manvi",
    linkedin: "https://linkedin.com/in/nikhil-manvi",
    email: "nikhilmanvi25@gmail.com",
    phone: "+91 80509 46764"
  }
};

export const TARGET_ROLES = [
  "SOC Analyst L1",
  "Security Operations Engineer",
  "Detection Engineer (Junior)",
  "Cybersecurity Intern",
  "Incident Response Analyst"
];

export const LONG_TERM_DIRECTIONS = [
  "AI Cyber Security Architect",
  "Autonomous SOC Operations Lead",
  "Threat Intelligence & Detection Researcher",
  "Enterprise Security Infrastructure Architect"
];

export const SOC_EXPERIENCE: SocExperienceItem[] = [
  {
    id: "vijesha-it",
    role: "Junior Security Analyst",
    organization: "Vijesha IT Service LLP",
    period: "2025 — Present",
    type: "Industry Work",
    summary: "Where security stopped being something I studied and became something I had to investigate in real operational environments.",
    keyResponsibilities: [
      "Monitored and triaged Security Information and Event Management (SIEM) alerts to identify potential threats, unauthorized access, and anomaly events.",
      "Analyzed system, application, and network logs across Windows Event Logs, Linux syslogs, and network captures to isolate security incidents.",
      "Investigated security events, performed root-cause analysis, and documented findings to assist in incident resolution and perimeter defense.",
      "Supported implementation of defensive security controls and compliance baselines across endpoint nodes."
    ],
    domainsMastered: [
      "SIEM Alert Triage",
      "Log Analysis & Parser Logic",
      "Incident Classification",
      "Windows / Linux Security Baselines",
      "Threat Detection Playbooks"
    ],
    workflowsUsed: [
      "Real-time Event Stream Monitoring",
      "Log Correlation & Normalization",
      "Ticket Documentation & Severity Triage"
    ]
  },
  {
    id: "soc-labs",
    role: "SOC Analyst Practice & Independent Research Labs",
    organization: "Independent Cybersecurity Security Operations",
    period: "2024 — Present",
    type: "Hands-on Lab Engineering",
    summary: "Simulated adversary techniques and built detection mechanisms within homelab environments to observe threat vectors firsthand.",
    keyResponsibilities: [
      "Configured Splunk / ELK Stack environments for ingesting Sysmon, Suricata, and PfSense firewalls logs.",
      "Designed automated detection playbooks using Python scripts and REST APIs to isolate infected nodes.",
      "Executed attack scenarios (brute-force, privilege escalation, keyloggers) to write targeted YARA and Sigma rules.",
      "Developed ML anomaly detection prototypes comparing isolation forests against baseline network telemetry."
    ],
    domainsMastered: [
      "SIEM Infrastructure",
      "Sysmon Telemetry",
      "Detection Engineering",
      "Python SOC Scripting",
      "Network Packet Analysis (Wireshark)"
    ],
    workflowsUsed: [
      "Sigma Rule Testing",
      "MITRE ATT&CK Technique Mapping",
      "Playbook Automation Scripting"
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "ai-siem-copilot",
    caseNumber: "CASE 001",
    title: "AI Security Operations SIEM Copilot",
    category: "AI & ML Security",
    status: "Active Lab",
    tagline: "Autonomous multi-agent SOC alert triage and incident report generator.",
    shortDescription: "Ingests raw SIEM log streams, correlates multi-vector alerts across endpoint and network sources, and leverages AI agents to filter noise and draft incident summaries.",
    fullDescription: "Built to solve SOC alert fatigue. This system ingests Windows Event Logs, Sysmon telemetry, and network syslog streams. It runs raw logs through a multi-agent processing pipeline: Agent 1 normalizes and extracts indicators of compromise (IOCs), Agent 2 queries threat intelligence feeds, and Agent 3 evaluates severity and writes a human-readable incident summary with recommended containment steps.",
    question: "How do we reduce analyst fatigue when processing high-volume SIEM alerts without missing low-and-slow attack signatures?",
    approach: "Designed a multi-stage Python ingestion engine paired with structured LLM prompt chains that isolate IOCs, query IP reputation APIs, and produce deterministic Markdown triage reports.",
    result: "Demonstrated a 70% reduction in manual log review time during simulated brute-force and credential-dumping lab scenarios.",
    learned: "Raw AI models hallucinate when given unstructured logs; enforcing strict JSON schema parsers before calling LLM evaluation steps is mandatory for operational safety.",
    architectureComponents: [
      "Log Ingestion Pipeline (Sysmon / Windows Security Events)",
      "Multi-Agent AI Triage Pipeline (IOC Extraction, Intel Verification, Severity Scoring)",
      "Automated Incident Report Builder & Alert Escalation Web Interface"
    ],
    securityValue: "Significantly reduces Mean Time to Detect (MTTD) and Mean Time to Respond (MTTR) by eliminating routine noise and pre-packaging context for Level 1 SOC analysts.",
    techStack: ["Python", "Gemini API", "FastAPI", "React", "Tailwind CSS", "Docker"],
    featured: true,
    mitreTechniques: ["T1078 / Valid Accounts", "T1110 / Brute Force", "T1059 / Command and Scripting Interpreter"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "BrainCircuit"
  },
  {
    id: "ml-intrusion-detection",
    caseNumber: "CASE 002",
    title: "Hybrid ML Intrusion Detection System",
    category: "AI & ML Security",
    status: "Research Prototype",
    tagline: "Teaching machines to detect non-linear malicious network behavior.",
    shortDescription: "Combines supervised machine learning models (Random Forest & XGBoost) with unsupervised Isolation Forests to flag zero-day network flow anomalies.",
    fullDescription: "Designed to complement static signature-based firewalls. The engine analyzes packet headers, flow duration, byte ratios, and port frequencies from PCAP dumps. It applies Random Forest models for known attack patterns (DoS, PortScans, Botnets) while routing unclassified traffic through Isolation Forests to catch novel anomalies.",
    question: "Can machine learning catch zero-day port scans and covert command-and-control channels that bypass traditional static Snort rules?",
    approach: "Extracted 42 statistical flow features from NSL-KDD and CICIDS datasets, trained hybrid Random Forest and Isolation Forest classifiers, and wrapped the inference engine in a real-time stream analyzer.",
    result: "Achieved 96.4% classification accuracy on test flow datasets while maintaining sub-50ms latency per flow batch.",
    learned: "Feature selection (packet ratio vs total bytes) impacts model accuracy far more than model complexity. Lightweight tree ensembles outperform heavy neural networks for real-time packet inspection.",
    architectureComponents: [
      "PCAP Packet Capture & Feature Extraction Module",
      "Supervised / Unsupervised Scikit-Learn Inference Pipeline",
      "Real-Time Anomaly Scoring Dashboard & Threat Alert Feed"
    ],
    securityValue: "Identified zero-day traffic spikes and suspicious egress streams that bypassed traditional Snort/Suricata static signature rules.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "PyShark", "Flask", "Recharts"],
    featured: true,
    mitreTechniques: ["T1595 / Active Scanning", "T1071 / Application Layer Protocol"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "ShieldAlert"
  },
  {
    id: "mitre-attack-game",
    caseNumber: "CASE 003",
    title: "MITRE ATT&CK Interactive Terminal Game",
    category: "Interactive Cyber Game",
    status: "Completed Project",
    tagline: "Gamified CLI simulation for mastering red-team tactics and blue-team detections.",
    shortDescription: "An interactive, terminal-based simulation game designed to teach cyber defense concepts, MITRE ATT&CK matrix techniques, and command-line forensics.",
    fullDescription: "Created to help students and junior analysts internalize offensive tactics and defensive verification steps. Players step into a simulated terminal environment where they must investigate compromised hosts, analyze suspicious processes, find malicious registry keys, and deploy mitigation commands to stop adversary escalation.",
    question: "How can we make learning complex MITRE ATT&CK techniques engaging and practical for aspiring SOC analysts?",
    approach: "Built a custom terminal shell emulator with simulated filesystem nodes, process trees, and dynamic scenario scripts that evaluate player forensic commands in real time.",
    result: "Deployed as an interactive learning tool with 15 scenarios covering Initial Access, Persistence, Privilege Escalation, and Defense Evasion.",
    learned: "Emulating system responses in pure JS/TS requires strict state isolation, but provides immediate feedback without needing full virtual machine infrastructure.",
    architectureComponents: [
      "Custom CLI Terminal Emulator with Command Parser",
      "MITRE ATT&CK Knowledge Base & Scenario Engine",
      "Forensic Investigation Challenges & Tactical Scorecard"
    ],
    securityValue: "Accelerates onboarding for cybersecurity students by translating abstract ATT&CK matrix framework definitions into hands-on tactical commands.",
    techStack: ["TypeScript", "React", "Tailwind CSS", "XTerm.js", "MITRE ATT&CK API"],
    featured: true,
    mitreTechniques: ["T1056 / Input Capture", "T1547 / Boot or Logon Autostart Execution", "T1070 / Indicator Removal"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "Terminal"
  },
  {
    id: "phantom-key-c2",
    caseNumber: "CASE 004",
    title: "Phantom-Key Offensive Security C2 & Keylogger",
    category: "Cybersecurity & SOC",
    status: "Defensive Research",
    tagline: "Exploring keylogging mechanics and C2 persistence to build resilient detection rules.",
    shortDescription: "A dual-component research project featuring a low-level endpoint keylogger and a lightweight Command-and-Control (C2) server used to study host telemetry.",
    fullDescription: "Developed exclusively in isolated lab environments to study how malicious executables capture keystrokes, establish persistence via Windows Registry run keys, and exfiltrate encrypted payloads over HTTP/DNS channels. Used as the ground truth target for writing custom Sysmon configs and YARA rules.",
    question: "What specific OS-level footprints do lightweight keyloggers leave behind in Windows Event logs and process trees?",
    approach: "Wrote a Python/C hook listener that writes keystrokes to an encrypted buffer, exfiltrates over HTTPS, and analyzed the resulting Sysmon Event ID 1 (Process Create) and Event ID 11 (File Create) telemetry.",
    result: "Authored 4 resilient Sigma rules that reliably detect keylogger DLL injection and unauthorized API hook attempts.",
    learned: "Offensive tools don't need to be complex to be dangerous. Understanding raw API calls (e.g. SetWindowsHookEx) is essential for writing signatures that can't be easily bypassed.",
    architectureComponents: [
      "Windows API Keyboard Hooking & Encrypted Exfiltration Payload",
      "Python Flask C2 Server with Task Queue & Session Management",
      "Sysmon Telemetry Mapping & Custom YARA / Sigma Rule Generator"
    ],
    securityValue: "Allowed defensive testing against raw endpoint hooks, producing actionable Sigma detection rules that detect unauthorized API hooking and hidden registry persistence.",
    techStack: ["Python", "C/C++", "Sysmon", "YARA", "Sigma", "Wireshark"],
    featured: true,
    mitreTechniques: ["T1056.001 / Keylogging", "T1041 / Exfiltration Over C2 Channel", "T1547.001 / Registry Run Keys"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "Key"
  },
  {
    id: "ai-incident-triage-bot",
    caseNumber: "CASE 005",
    title: "Automated Incident Triage Bot",
    category: "AI & ML Security",
    status: "Active Tool",
    tagline: "Webhook-integrated Slack / Telegram bot that parses SOC alerts and enriches IOCs.",
    shortDescription: "Receives raw alert webhooks from Grafana/Splunk, queries VirusTotal and AbuseIPDB, and delivers formatted incident summaries directly to operational chat rooms.",
    fullDescription: "Built to streamline rapid communication during active incidents. When a security alert triggers, this bot extracts IP addresses, domain hashes, and file signatures, queries multiple threat intelligence APIs concurrently, and posts a color-coded triage card with immediate action buttons.",
    question: "How can we shorten the gap between alert generation and initial threat intelligence enrichment?",
    approach: "Constructed an asynchronous Python Webhook worker using FastAPI and asyncio, integrating caching layers for VirusTotal and AbuseIPDB API limits.",
    result: "Automated preliminary IOC enrichment for incoming alerts, delivering complete threat intelligence context within 3 seconds of alert arrival.",
    learned: "API rate limits require intelligent Redis-backed caching strategies so repeated internal IPs don't burn daily threat intelligence quotas.",
    architectureComponents: [
      "FastAPI Webhook Listener for Alert Ingestion",
      "Asynchronous Threat Intel Querier (VirusTotal, AbuseIPDB, Shodan)",
      "Slack / Telegram Bot Notification Engine"
    ],
    securityValue: "Delivers instant threat intelligence enrichment without forcing analysts to manually context-switch across browser tabs during high-severity events.",
    techStack: ["Python", "FastAPI", "VirusTotal API", "AbuseIPDB", "Docker"],
    featured: false,
    mitreTechniques: ["T1071 / Application Layer Protocol"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "Bot"
  },
  {
    id: "esp32-deauth-detector",
    caseNumber: "CASE 006",
    title: "ESP32 Wi-Fi Deauth & Rogue AP Detector",
    category: "Research & IoT",
    status: "Hardware Prototype",
    tagline: "Hardware-based 802.11 management frame monitor for rogue AP identification.",
    shortDescription: "An embedded hardware project using ESP32 microcontrollers flashed with custom C++ firmware to continuously audit 2.4GHz Wi-Fi channels for deauthentication attacks.",
    fullDescription: "Designed as a low-cost physical security sensor. The ESP32 operates in promiscuous mode, sniffing raw 802.11 management frames. It counts deauth/disassociation frames per second and alerts when thresholds are crossed, indicating active Wi-Fi jamming or Evil Twin access point deployment.",
    question: "Can an inexpensive $4 microcontroller serve as an effective physical perimeter Wi-Fi deauth sensor?",
    approach: "Flashed ESP32 microcontrollers with custom C++ promiscuous mode frame sniffers, parsing 802.11 subtypes and outputting alerts over serial and MQTT.",
    result: "Successfully detected simulated 802.11 deauth attacks within 1.5 seconds of frame transmission in lab testing.",
    learned: "Embedded RF sniffing requires strict buffer management to prevent packet drops during heavy traffic bursts.",
    architectureComponents: [
      "ESP32 C++ Promiscuous Mode Frame Sniffer Firmware",
      "MQTT Telemetry Publisher & Web Alert Dashboard",
      "OLED Hardware Display & Visual RGB Alarm Subsystem"
    ],
    securityValue: "Provides cheap, localized physical wireless monitoring to alert facilities of rogue access point impersonation and active wireless denial-of-service attempts.",
    techStack: ["C++", "Arduino / ESP32", "MQTT", "Wi-Fi 802.11 Protocols"],
    featured: false,
    mitreTechniques: ["T1498 / Network Denial of Service"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "Radio"
  },
  {
    id: "smart-contract-auditor",
    caseNumber: "CASE 007",
    title: "Static Smart Contract Vulnerability Analyzer",
    category: "Cybersecurity & SOC",
    status: "Research Tool",
    tagline: "Static code analysis tool checking Solidity contracts for reentrancy and overflow.",
    shortDescription: "A Python-based AST parser that scans Solidity codebases for common smart contract vulnerabilities including reentrancy, unhandled calls, and integer flaws.",
    fullDescription: "Built to automate code auditing for decentralized protocols. Uses regular expressions and Abstract Syntax Tree (AST) pattern matching to flag risky coding patterns before contract deployment to testnets.",
    question: "How can static AST parsing prevent high-impact smart contract vulnerabilities before mainnet deployment?",
    approach: "Implemented regex and regex-free AST tree traversals using Python to detect unchecked state changes before external function calls.",
    result: "Scanned 50+ sample Solidity contracts, successfully flagging known reentrancy and unhandled call patterns.",
    learned: "Static analysis catches obvious anti-patterns, but dynamic symbolic execution is required for complex cross-contract state vulnerabilities.",
    architectureComponents: [
      "Solidity File Lexer & AST Generator",
      "Vulnerability Pattern Matcher (Reentrancy, Tx.Origin, Delegatecall)",
      "HTML Audit Summary Report Generator"
    ],
    securityValue: "Helps developers identify critical smart contract vulnerabilities early in the software development lifecycle.",
    techStack: ["Python", "Solidity", "Regex AST", "CLI"],
    featured: false,
    mitreTechniques: ["T1190 / Exploit Public-Facing Application"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "FileCode"
  },
  {
    id: "tor-node-monitor",
    caseNumber: "CASE 008",
    title: "Tor Network Relay & Exit Node Monitor",
    category: "Cybersecurity & SOC",
    status: "Experimental",
    tagline: "Real-time telemetry collector tracking Tor exit node IPs for SIEM threat intel.",
    shortDescription: "Scrapes official Tor directory authority lists, parses active exit nodes into threat intelligence feeds, and cross-checks inbound web traffic against known exit nodes.",
    fullDescription: "Maintains an updated list of Tor exit node IP addresses to assist SOC analysts in determining if incoming suspicious HTTP requests originate from anonymized networks.",
    question: "How can web application firewalls dynamically block or flag Tor exit node traffic without manual IP list updates?",
    approach: "Wrote a Python cron service that fetches Tor consensus data hourly, parses IP records into CIDR blocks, and exposes an API endpoint for SIEM integration.",
    result: "Created a real-time Threat Intelligence API feed consumed by custom web application firewalls.",
    learned: "Anonymity networks change nodes dynamically; automated polling with fallback mirrors is vital for threat feed reliability.",
    architectureComponents: [
      "Tor Directory Scraping & Consensus Parser",
      "Threat Feed API Endpoint",
      "SIEM Integration Module"
    ],
    securityValue: "Provides accurate, real-time context when investigating anonymous network traffic hitting web applications.",
    techStack: ["Python", "REST API", "Linux", "Cron"],
    featured: false,
    mitreTechniques: ["T1090 / Proxy"],
    githubUrl: "https://github.com/Nikhil-Manvi",
    iconName: "Globe"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: "01 / Security Operations & Triage",
    skills: [
      "SIEM Alert Monitoring",
      "Log Triage & Escalation",
      "Windows Event Logs (Sysmon)",
      "Linux Syslog / Auditd",
      "Incident Response Playbooks",
      "Root-Cause Analysis"
    ]
  },
  {
    name: "02 / Detection & Forensics",
    skills: [
      "Detection Engineering",
      "MITRE ATT&CK Mapping",
      "YARA Rule Development",
      "Sigma Rule Writing",
      "Packet Analysis (Wireshark)",
      "Threat Intelligence (IOCs)"
    ]
  },
  {
    name: "03 / Engineering & Scripting",
    skills: [
      "Python SOC Scripting",
      "Linux Administration (Bash)",
      "REST APIs & Webhooks",
      "Docker Containerization",
      "Git & Version Control",
      "TypeScript / Web Basics"
    ]
  },
  {
    name: "04 / AI & Security Automation",
    skills: [
      "Multi-Agent AI Triage",
      "Gemini API Security Apps",
      "Scikit-Learn ML Anomaly Models",
      "Log Summarization Pipelines",
      "Automated Response Scripts"
    ]
  }
];

export const FIELD_NOTES: FieldNote[] = [
  {
    id: "note-001",
    noteNumber: "FIELD NOTE 034",
    title: "What makes a security alert actually useful?",
    date: "AUG 2026",
    category: "Security Operations",
    content: "A good alert is not just a notification that an event occurred; it's a context-rich prompt. If an analyst has to run 5 manual CLI queries just to figure out what machine triggered the alert and who was logged in, the alert design failed. High-value alerts pre-package process lineage, user context, and host IP in the payload.",
    takeaway: "Alert design is UX design for incident response. Minimize time-to-context."
  },
  {
    id: "note-002",
    noteNumber: "FIELD NOTE 035",
    title: "Why correlation matters more than raw alert volume.",
    date: "JUL 2026",
    category: "Detection Engineering",
    content: "10,000 un-correlated events are just noise that leads to analyst burnout. But 3 correlated events—a rare PowerShell child process, an outbound connection to an unfamiliar IP, and a scheduled task modification within 60 seconds—tell a clear, actionable attack story.",
    takeaway: "Build rules that look for sequences of behaviors rather than isolated anomaly spikes."
  },
  {
    id: "note-003",
    noteNumber: "FIELD NOTE 036",
    title: "Can AI safely participate in incident response?",
    date: "JUN 2026",
    category: "AI Security Automation",
    content: "AI is exceptional at summarizing 500 lines of complex log output into a 3-bullet executive briefing. However, destructive containment actions (like isolating primary domain controllers or revoking root credentials) must remain human-in-the-loop until deterministic validation gates pass.",
    takeaway: "Use AI for rapid context synthesis and triage drafting; keep executive authorization for destructive responses."
  },
  {
    id: "note-004",
    noteNumber: "FIELD NOTE 037",
    title: "The necessity of building offensive tools to write better defense rules.",
    date: "MAY 2026",
    category: "Offensive Security",
    content: "Writing keyloggers and basic C2 agents in Python and C revealed exactly how Windows API hooks interact with system memory and processes. Experiencing the attacker's path makes writing precise Sysmon Event ID 1 and YARA rules far simpler and less prone to false positives.",
    takeaway: "Offensive understanding directly sharpens defensive precision."
  }
];

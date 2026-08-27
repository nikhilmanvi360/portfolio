import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Google GenAI client lazily or safely for server-side endpoints
let aiClient: GoogleGenAI | null = null;

function getAiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Endpoint 1: Live Threat Log Analysis via CyberSentinel AI
app.post("/api/gemini/analyze-threat", async (req, res) => {
  try {
    const { logData, logType } = req.body;
    if (!logData) {
      return res.status(400).json({ error: "logData is required" });
    }

    const ai = getAiClient();
    const prompt = `You are CyberSentinel AI, an advanced AI SOC Security Analyst assistant built for Nikhil's cybersecurity portfolio.
Analyze the following security log/payload (${logType || 'General Log'}):

\`\`\`
${logData}
\`\`\`

Provide a structured, precise SOC Triage analysis with:
1. Threat Level (CRITICAL, HIGH, MEDIUM, LOW, or BENIGN)
2. Summary of suspicious indicators / IOCs observed
3. Attack Technique Classification (e.g., MITRE ATT&CK ID & Name if applicable)
4. Recommended Immediate SOC Response Steps (Containment, Investigation, Eradication)

Keep the tone crisp, professional, and formatted in clear markdown suitable for a SOC Analyst dashboard.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        temperature: 0.2,
      },
    });

    res.json({ analysis: response.text || "No analysis output returned." });
  } catch (error: any) {
    console.error("Error analyzing threat log:", error);
    res.status(500).json({
      error: "Failed to analyze threat log.",
      details: error?.message || String(error),
    });
  }
});

// Endpoint 2: Interactive CyberSentinel Q&A Assistant about Nikhil & SOC
app.post("/api/gemini/soc-assistant", async (req, res) => {
  try {
    const { message, conversationHistory } = req.body;
    if (!message) {
      return res.status(400).json({ error: "message is required" });
    }

    const ai = getAiClient();

    const systemInstruction = `You are CyberSentinel AI, the interactive virtual intelligence assistant embedded in Nikhil's Cybersecurity & SOC Analyst Portfolio.
Nikhil is a BCA student, Junior SOC Analyst, and aspiring Cybersecurity & AI Security Researcher.

Key facts about Nikhil:
- Roles targeted: SOC Analyst L1, Junior Security Analyst, Security Operations Intern, Cybersecurity Analyst, Security Monitoring Analyst.
- Core focus: Security Operations (Alert triage, log analysis, incident investigation), Threat Detection, Incident Response, and AI for Cybersecurity.
- Major Projects:
  1. CyberSentinel AI (AI threat monitor, phishing detector, blockchain alert ledger, voice response)
  2. Digital Crime Lab / Tech Detective (Interactive web-based digital crime investigation game built with React, Node, Socket.io, SQLite)
  3. Keylogger / IoT Security Research (Defensive endpoint input monitoring & malware behavior research)
  4. Multi-Agent Truth System (Collaborative AI agents cross-checking evidence to reduce hallucinated conclusions)
  5. Smart Food Waste Prediction System (ML prediction model built with Python & Flask)
- Technical Stack: React, TypeScript, Node.js, Express, Python, FastAPI, Flask, Scikit-learn, SQLite, MongoDB.
- Philosophy: "Learn -> Build -> Break -> Analyze -> Improve".
- Contact: Email nikhilmanvi25@gmail.com.

Answer recruiter and visitor questions accurately, technically, concisely, and with a confident, helpful SOC Analyst posture.`;

    const contents = [
      ...(conversationHistory || []).map((msg: { role: string; content: string }) => ({
        role: msg.role === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      })),
      { role: "user", parts: [{ text: message }] },
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents,
      config: {
        systemInstruction,
        temperature: 0.4,
      },
    });

    res.json({ reply: response.text || "I am processing your query..." });
  } catch (error: any) {
    console.error("Error in SOC Assistant:", error);
    res.status(500).json({
      error: "Failed to process message.",
      details: error?.message || String(error),
    });
  }
});

// Endpoint 3: Incident Triage Simulator AI Evaluation
app.post("/api/gemini/triage-eval", async (req, res) => {
  try {
    const { scenarioTitle, alertData, userTriageChoice, userReasoning } = req.body;

    const ai = getAiClient();
    const prompt = `You are evaluating a candidate's triage decision in a simulated SOC Alert Investigation for Nikhil's Portfolio Incident Sandbox.

Scenario: ${scenarioTitle}
Alert Payload:
${JSON.stringify(alertData, null, 2)}

User Decision: ${userTriageChoice}
User Reasoning: "${userReasoning || "No reasoning provided"}"

Provide a concise evaluation breakdown:
1. Verdict: (EXCELLENT, GOOD, MARGINAL, or INCORRECT)
2. Analyst Feedback: Explain why their response was effective or what key SOC indicators were missed.
3. Key takeaway for SOC L1 analysts.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        temperature: 0.3,
      },
    });

    res.json({ evaluation: response.text });
  } catch (error: any) {
    console.error("Error evaluating triage:", error);
    res.status(500).json({
      error: "Failed to evaluate triage decision.",
      details: error?.message || String(error),
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`SOC Command Center Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

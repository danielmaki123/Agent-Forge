<div align="center">
  <h1>🛡️ Agent Forge</h1>
  <p><b>Agnostic governance framework for AI-assisted software development.</b></p>
  <p>Control how your AI agents build—without locking into any vendor.</p>

  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![Framework: Agnostic](https://img.shields.io/badge/Framework-Agnostic-success.svg)](#)
  [![Governance: 3-Layer](https://img.shields.io/badge/Governance-3--Layer-purple.svg)](#)

  <h3>✨ <a href="https://danielmaki123.github.io/Agent-Forge/docs/index.html">View the Interactive Visual Guide</a> ✨</h3>
  <p><i>(To enable this link, go to Settings > Pages in your GitHub Repo and select the `main` branch / `docs` folder)</i></p>
</div>

---

## 🧠 Why Agent Forge?

Current AI agent tools (Cursor, Claude, Kimi, Devin) are walled gardens. Agent Forge is the **first tool-agnostic governance kernel** that standardizes how agents operate across your entire monorepo.

*   **0% Vendor Lock-in:** Use any tool for any role.
*   **3-Layer Governance:** Markdown Instructions → YAML Policies → Numerical Kill Switches.
*   **Backed by Data:** Built on 48 research sources to prevent AI technical debt.

## ⚡ Quick Start

1.  **Clone or copy** this directory into your project root.
2.  **Configure:** Edit `PROJECT.yaml` — define your project identity, stack, and agent team.
3.  **Govern:** Edit `policies/` to set boundaries and safety rules.
4.  **Execute:** Run `/new-task` to create your first task, then `/continue-roadmap`.

## 📁 Architecture

```text
agent-forge/
├── AGENTS.md              # 📜 Agent constitution & roles
├── PROJECT.yaml           # ⚙️ Centralized project config
├── commands/              # ⚡ Operational shortcuts (/autopilot, /review)
├── policies/              # 🔒 Enforceable YAML rules (boundaries, safety)
├── contracts/             # 🤝 API and data contracts
├── handoffs/              # 📤 Worker handoff documents
├── reviews/               # 👀 Task review documents
├── tasks/                 # 📋 Task definitions & verification
└── templates/             # 🏗️ Reusable system templates
```

## 🛡️ Kill Switches & Safety

Agent Forge implements "Selective Autonomy" based on research showing that a 10-step agent at 95% accuracy only has a 59.9% system success rate. 

*   **Auto-Stop:** Agents halt if a task exceeds 5 files, 100 lines, or 15 minutes.
*   **Pre-Mortem:** Every review requires 3 mandatory failure scenarios to counter sycophantic AI behavior.
*   **Context Compaction:** Handoffs summarize context to prevent LLM memory overflow during `/autopilot`.

---
<div align="center">
  <sub>Built with empirical research. Designed for Senior Engineers.</sub>
</div>

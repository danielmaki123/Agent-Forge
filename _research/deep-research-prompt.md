# Deep Research Prompt — AI-Native Project Governance

> Copy this entire block and send it to a deep research AI (Gemini Deep Research, Perplexity Pro, ChatGPT Deep Research, or equivalent).

---

## Context

I'm building an open-source, tool-agnostic governance framework for AI-assisted software development. It defines how AI coding agents (Claude Code, Cursor, Codex, Gemini CLI, Kimi, Windsurf, etc.) should operate within a software project — with structured roles, contracts, tasks, verification loops, handoffs, and reviews.

The framework consists of:
- `AGENTS.md` — agent roles (orchestrator, backend worker, frontend worker) with abstract boundaries
- `PROJECT.yaml` — single config file for stack, checks, deployment, safety rules, integrations
- `commands/` — operational shortcuts (continue-roadmap, autopilot, stop, review, status, etc.)
- `contracts/` — API/data contracts as source of truth between frontend and backend
- `templates/` — structured templates for tasks (with executable acceptance criteria), ADRs, handoffs, reviews, contracts
- `tasks/` — decomposed work units with verification commands
- `decisions/` — lightweight Architecture Decision Records (ADRs)

Core principles: spec-driven development, contract-first, governed autonomy, Observe-Think-Act-Verify loop, governance-as-code, ship-first philosophy.

## Research Questions

I need current, evidence-based findings (2024–2026) on the following. For each question, provide: specific tools/projects/repos doing this, what's working, what's failing, and any quantitative data available.

### 1. State of AGENTS.md and AI Spec Files
- What is the current industry standard for `AGENTS.md`, `.cursorrules`, `CLAUDE.md`, `.windsurfrules`, and similar AI instruction files?
- Which open-source projects or companies have published exemplary versions of these files?
- What structure/length/format produces the best agent compliance? Is there empirical data on optimal file length?
- Are there emerging standards or RFCs for agent instruction formats?

### 2. Multi-Agent Orchestration in Real Codebases
- How are teams actually using multiple AI agents (not demos, real production workflows)?
- What orchestration patterns are succeeding? Orchestrator-worker vs. pipeline vs. peer-to-peer?
- How do teams handle agent handoffs in practice? Are there documented protocols?
- What failure modes are most common in multi-agent coding setups?

### 3. Contract-First and Spec-Driven Development with AI
- What tools/workflows exist for enforcing API contracts that AI agents must follow?
- How are teams using OpenAPI, gRPC, or other schema definitions as constraints for AI agents?
- Are there projects that automatically validate agent output against contracts?
- What's the relationship between spec quality and AI output quality? Any metrics?

### 4. Verification and Quality Gates for AI-Generated Code
- What verification patterns are teams using beyond lint/test/build?
- How is the "Observe-Think-Act-Verify" loop being implemented in practice?
- What's the measured impact of automated verification on AI code quality?
- Are there tools that specifically verify AI-generated code against specs/contracts?
- What's the current data on technical debt accumulation from AI-generated code, and what mitigation strategies work?

### 5. Governance-as-Code for AI Agents
- How are teams implementing runtime guardrails vs. document-based policies?
- What policy-as-code frameworks exist for constraining AI coding agents?
- How do teams handle escalation triggers (security changes, dependency additions, production access)?
- What observability/logging approaches work for tracking agent decisions?

### 6. Task Decomposition Strategies
- What granularity of task decomposition produces the best AI agent output?
- How are teams structuring acceptance criteria that agents can self-verify?
- Are there frameworks for automatically generating task breakdowns from specs?
- What's the optimal task size for autonomous agent execution (lines of code, number of files, complexity)?

### 7. Competitive Landscape
- What existing open-source frameworks, templates, or scaffolds serve a similar purpose to what I'm building?
- What are their strengths and weaknesses?
- GitHub repos, npm packages, or tools that provide "project governance for AI agents"
- What gap exists that isn't being addressed?

### 8. Failure Patterns and Anti-Patterns
- What are the documented failure modes of AI-governed development workflows?
- What's the "analysis paralysis" threshold — at what point does governance overhead kill velocity?
- What are the most common reasons AI agent projects fail or get abandoned?
- What governance practices have been explicitly abandoned by teams and why?

## Output Format

For each section, provide:
1. **Key findings** (3-5 bullet points with sources)
2. **Specific tools/repos/projects** (with links when possible)
3. **Actionable recommendations** for my framework
4. **Open questions** that remain unanswered

Prioritize: real implementations over theoretical papers, quantitative data over opinions, 2025-2026 sources over older ones.

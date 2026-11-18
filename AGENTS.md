# AGENTS.md — Salon Queue Management System

A high-performance, real-time Queue Management Web Application for modern salons. Customers join from their phones, see live queue status, and receive alerts when called; reception and barbers manage chair turns seamlessly; and a TV display broadcasts live status for waiting areas.

## Core Documentation Hierarchy (Read First)
1. `docs/01-brief.md`: Project vision, user roles, must-have features, and strict "Don't-Build" list.
2. `docs/02-screens.md`: Complete layout, behavior, and responsive styling for all 7 screens.
3. `docs/03-flows-rules.md`: Queue state machine, barber preference matching algorithms, and test checklist.

## Technology Stack
- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS (Dark Charcoal `#111827`/`#1F2937` + Luxury Gold `#D4A017`/`#F59E0B`)
- **Icons & Effects:** Lucide React, Web Audio API (synthesized alerts), Canvas Confetti
- **Storage & Synchronization:** `localStorage` + `BroadcastChannel` with storage event listeners to guarantee instantaneous real-time sync across customer phones, tablet reception dashboards, barber stations, and TV display without requiring costly backend hosting.
- **Hosting Target:** Vercel (Frontend SPA)

## Non-Negotiable Development Rules
- **Design Language:** Mobile-first responsive UI, 44px+ minimum touch targets, rounded cards, gold accents on charcoal backgrounds.
- **Single Source of Queue Truth:** All queue rules, state transitions, wait calculations, and matching algorithms live in ONE centralized service module (`src/services/queueEngine.js`), shared across all views.
- **Zero Hardcoded Strings:** All visible UI copy is loaded through the central bilingual dictionary (`src/i18n/translations.js`) supporting English and Gujarati.
- **Strict Boundary Adherence:** Never add features from the "Don't-Build" list (no external payment gateways, no future appointments, no SMS APIs).
- **Graceful Multi-Tab Sync:** Any state mutation in one tab must automatically update other tabs within 50ms via `BroadcastChannel`.
- **Pre-seeded Sample Data:** Provide a 1-click sample data reset button to immediately populate realistic waiting, called, and seated customers for lab testing and grading demonstrations.

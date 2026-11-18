# Salon Queue Management System

**Live demo:** https://salon-queue-management-system-iota.vercel.app  
*(Once deployed on Vercel, replace with your exact production URL; ready for 1-click zero-config deploy on Vercel)*  
**Hosted on:** Vercel (Frontend SPA)  
**Staff Test PIN:** `1234` (for Reception & Owner Settings)

---

## 📌 About the Project
Salon Queue Management System is a responsive, real-time web application built for modern salons to eliminate chaotic waiting lobbies. Customers join the queue from their phones, track their live position and estimated wait time, and receive an instant gold screen alert with chime when called. Staff manage chairs effortlessly through dedicated Reception, Barber, and Waiting Lounge TV screens.

Built as part of the **MSc IT Vibe Coding Lab** using **Google Antigravity / Agentic Engineering**.

---

## 🚀 Key Features

### 1. Customer Experience
- **Mobile First Booking (`/join`):** Select up to 3 services (Haircut, Beard Trim, Hair Spa, Facial, etc.), pick a specific barber or choose "Any Barber (Fastest)", and enter a 10-digit phone number.
- **Duplicate Prevention:** Prevents multiple bookings from the same active phone number.
- **Live Status Tracking (`/status/:id`):** Real-time position (e.g. *"2nd in line"*), circular countdown timer, and an amber alert *"Start heading to the salon"* when second in line.
- **Exciting Turn Notification:** Full-screen animated gold celebration modal with synthesized audio chime and mobile vibration when called to the chair.
- **Cancel Anytime:** Customer can release their queue spot with confirmation.

### 2. Reception Dashboard (`/reception`)
- Tablet/desktop optimized 2-column interface.
- Real-time barber station status (Busy, Free, On Break) with active service timers and progress bars.
- 1-click **"Call Next"** automatically matching customer barber preferences.
- Master chronological waiting queue with amber alert for customers waiting > 60 minutes.
- **+ Add Walk-in Customer** modal with automatic tail-end queue placement.
- Mark **No-Show** for clients who fail to arrive within 10 minutes.

### 3. Barber Personal View (`/barber/:name` or `/barber`)
- Designed for barbers' mobile phones mounted at styling mirrors.
- Tracks current seated customer with elapsed service stopwatch.
- One-tap state machine: `[ Start Service ]` $\rightarrow$ `[ Finish Service · Mark Done ]`.
- Live preview of **"Next for You"** in line.
- Barber availability toggle (`Available` vs `On Break`).

### 4. Waiting Area TV Display (`/display`)
- High-contrast, large-font dark gold theme legible from 5+ meters away.
- Current chair status for all barbers (`NOW SERVING: S-12`).
- **Next 5 Tokens** ticker with estimated wait times.
- Newly-called tokens trigger animated flashing gold borders and an attention chime.

### 5. Owner Settings & Analytics (`/admin`)
- PIN-protected (`1234`).
- Service menu management (adjust pricing, durations, toggle active status).
- Barber roster & shift management.
- Queue switch (Open / Closed for online joining).
- Today's metrics: customers served, average wait time, no-show count, and estimated revenue.
- **1-Click Sandbox Reset / Seed Data** button for instant demonstration and grading.

### 6. Bilingual Support
- Instant toggle between **English** and **Gujarati (ગુજરાતી)** across all 7 screens with complete dictionary coverage.

### 7. Multi-Tab Real-Time Sync
- Powered by `BroadcastChannel` + `localStorage` reactive events — open Customer, Reception, Barber, and TV Display in separate browser windows or devices, and watch state update simultaneously in sub-second time without needing a backend server!

---

## 🛠️ Tech Stack
- **Framework:** React 18, Vite
- **Styling:** Tailwind CSS (Luxury Dark Charcoal `#111827` & Royal Gold `#D4A017`)
- **Icons:** Lucide React
- **Audio:** Web Audio API (Synthesized pleasant alert bell chime)
- **Deployment:** Vercel (Zero configuration needed)

---

## 📦 Local Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/harsh2005gosaliya-create/Salon-Queue-Management-System.git
   cd Salon-Queue-Management-System
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🧪 Quick Test / Grading Guide
To test the full system in under 2 minutes:
1. Open the app at `/` and click the language toggle (EN $\leftrightarrow$ GU) to verify translations.
2. Click **Staff Hub $\rightarrow$ Owner Settings (`/admin`)**, enter PIN `1234`, and click **"Reset / Load Sample Data"**.
3. Open 3 windows side-by-side:
   - Window 1: **Waiting Area TV** (`/display`)
   - Window 2: **Reception Dashboard** (`/reception`)
   - Window 3: **Barber View** (`/barber`)
4. In Reception, click **"Call Next"** for **Amit**. Notice:
   - Amit only picks customers who chose Amit or "Any Barber" (never Ravi's exclusive customers).
   - The TV screen instantly flashes gold with an audio chime!
   - Amit's Barber View immediately switches to the called customer.
5. In Barber View, click **"Start Service"** then **"Finish Service"** — see all screens update instantaneously!

---

## 📝 Lab Deliverables
- `docs/01-brief.md`: Project brief & scope
- `docs/02-screens.md`: Detailed specification for all 7 screens
- `docs/03-flows-rules.md`: State machine, matching logic, and test checklist
- `AGENTS.md`: Agent configuration & prompt instructions
- `prompts.md`: Chronological vibe-coding prompt log & self-reflection

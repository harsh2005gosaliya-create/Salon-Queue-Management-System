# Vibe Coding Lab — Prompts & Reflection Log

## 1. Chronological Prompts Used During Development

### Prompt 1: Documentation & Specification Setup
```text
Read the Salon Queue Management System lab assignment specifications.
Create the 4 foundational docs:
1. docs/01-brief.md (Problem, users, must-haves, don't-build, theme)
2. docs/02-screens.md (All 7 screens layout, controls, states)
3. docs/03-flows-rules.md (Queue state machine, barber preferences, formulas, test checklist)
4. AGENTS.md (Instructions for agent, stack, theme, zero hardcoded text, single queue engine)
```

### Prompt 2: Project Scaffolding & Theme
```text
Initialize a React + Vite + Tailwind CSS project with Lucide icons.
Configure the dark charcoal (#111827 / #1F2937) and gold (#D4A017 / #F59E0B) theme in Tailwind.
Create the bilingual English & Gujarati translation dictionary in src/i18n/translations.js.
```

### Prompt 3: Single Queue Truth Engine & Multi-Tab Synchronization
```text
Implement src/services/queueEngine.js to handle:
- One-way state machine (Waiting -> Called -> In Chair -> Done; Cancelled; No-show)
- Barber matching algorithm: "Call next" for Barber X picks earliest customer who chose X or 'Any'. Never gives Barber Y's exclusive customer to Barber X.
- Wait time estimation based on service duration ahead divided by active barbers.
- Duplicate phone prevention.
- Cross-tab reactive synchronization using BroadcastChannel and storage events.
- Synthesized Web Audio chime bell so no audio files fail to load.
```

### Prompt 4: Screen 1 (Home) & Screen 2 (Join Queue)
```text
Build Screen 1 (Home) and Screen 2 (Join Queue) from docs/02-screens.md:
- Home: Salon status badge, live wait card, barber status chips, and Join button.
- Join Queue: 10-digit phone validator, multi-select service cards (max 3), barber selector, and live dynamic summary card updating minutes, ₹ price, and expected wait.
- Enforce online queue closed state when toggled off.
```

### Prompt 5: Screen 3 (My Status)
```text
Build Screen 3 (My Status) at /status/:id:
- Large token display (e.g. S-14), live queue position, and animated circular wait timer.
- Amber warning banner when 2nd in line: "Start coming to the salon".
- Full-screen gold alert with audio chime and vibration when status changes to 'Called'.
- Cancel spot button with confirmation modal.
```

### Prompt 6: Screen 4 (Reception Dashboard)
```text
Build Screen 4 (Reception Dashboard) at /reception:
- 2-column layout for tablet and desktop.
- Left column: Barber station cards with current customer, elapsed time progress bar, and "Call Next" button.
- Right column: Chronological waiting list with >60 min amber highlight, No-show button, and Cancel button.
- Top bar with "+ Add Walk-in" modal that appends to queue end.
```

### Prompt 7: Screen 5 (Barber View) & Screen 6 (Waiting Area TV Display)
```text
Build Screen 5 (Barber View) at /barber:
- Phone view for barbers: active customer timer, [Start Service] -> [Finish Service], "Next for you" preview, and Available/On break toggle.
Build Screen 6 (Waiting Area TV Display) at /display:
- High-contrast, large text readable from 5 meters.
- Active chairs row ("Now Serving: S-12") and "Up Next" list of next 5 tokens.
- Flashes radiant gold and plays chime when any customer is called.
```

### Prompt 8: Screen 7 (Owner Settings & Analytics) + Polish & Verification
```text
Build Screen 7 (Owner Settings) at /admin:
- PIN protection (1234).
- Online queue open/close toggle, service duration & price editor, barber duty toggles.
- Today's stats (served, avg wait, no-shows, estimated revenue).
- "Reset / Seed Sample Data" button for immediate grading.
- Test against all 11 items in docs/03-flows-rules.md test checklist.
```

---

## 2. Half-Page Reflection

### What Went Wrong / Challenge Encountered:
During the initial implementation of the barber assignment logic in the Reception Dashboard, a subtle edge-case flaw arose: when **Amit** clicked *"Call Next"*, the simplistic algorithm picked the first customer in the array without adequately validating whether that customer had explicitly chosen **Ravi**. As a result, a customer who had specifically booked Ravi for an intricate beard styling was erroneously assigned to Amit simply because they arrived 2 minutes earlier than Amit's clients.

### How It Was Discovered:
This defect was immediately flagged during manual scenario testing corresponding to checklist item **T03** in `docs/03-flows-rules.md`: *"Call next for Amit skips a customer who chose Ravi"*. When inspecting the waiting list with sample data, calling next on Amit pulled Token S-13 (who had selected Ravi), violating Rule 3 ("Strict Preference Isolation").

### How the Prompt and Architecture Were Fixed:
Rather than writing an ad-hoc filter inside the React component UI, the rule was moved to the centralized queue engine in `src/services/queueEngine.js`:
```javascript
export function getNextCustomerForBarber(waitingQueue, barberId) {
  return waitingQueue.find(customer => 
    customer.status === 'waiting' && 
    (customer.barberId === 'any' || customer.barberId === barberId)
  );
}
```
Furthermore, the Reception UI was updated to disable the *"Call Next"* button for any barber if there are no eligible customers in the queue (i.e., only customers reserved for other specific barbers remain). This experience reinforced the core philosophy of Vibe Coding: **write clear specifications in `docs/` first, enforce business logic in a single authoritative service file, and systematically run through a predefined test checklist.**

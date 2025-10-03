# Analyst Training Runbook · Legacy Logic & Data Requirements

**Audience:** Business and systems analysts (no coding expected)  
**Scenario:** Short-code trading recordkeeping module (COBOL + JCL)  
**Goal:** Extract business logic, data flows, and requirements so engineering squads can rebuild the module without touching the legacy code themselves.

The session is organised as four analyst tasks (≈10 minutes each). Every task uses Copilot Chat (VS Code or Microsoft 365 Copilot) for summarising and drafting—no local compilers, Power BI, or Tableau needed.

---

## Task 0 · Prep (before the clock starts)
- Open the repository files:
  - COBOL program `cobol/interest-adjustment.cbl`
  - Copybook `copybooks/TRMAP.cpy`
  - JCL job `jcl/INTADJ01.jcl`
  - Sample data `data/TRLOG.DAT`
- Create working documents (Markdown/Sheets):
  - `business-logic-summary.md`
  - `data-flow-map.md`
  - `sme-question-log.md`
  - `data-requirements-package.md`
- Confirm Copilot Chat is available. If Microsoft 365 Copilot is not provisioned, use VS Code w/ GitHub Copilot Chat. No other tooling is required.

Deliverable readiness: empty templates created and synced to repo/SharePoint.

---

## Task 1 · Business Logic Deconstruction (10 minutes)
**Purpose:** Understand what the legacy module does from a business point of view.

1. Prompt Copilot:
   ```
   /explain Act as a systems analyst. Summarise the business logic, decision points, and outputs for cobol/interest-adjustment.cbl using copybooks/TRMAP.cpy for field meanings. Avoid implementation jargon.
   ```
2. Rewrite the response in `business-logic-summary.md`, emphasising:
   - Trigger/loop conditions from the COBOL mainline and JCL scheduling steps.
   - Calculations (e.g., delta = `(PXC - PXO) * QTY`).
   - Flags (`RSK`, `SDR`) and what they imply for downstream processes.
3. Highlight missing context (e.g., `RSK` code dictionary) in `sme-question-log.md` with owners and priority.

**Output:** Plain-language summary ready for stakeholder review + first SME questions logged.

---

## Task 2 · Data & Flow Mapping (10 minutes)
**Purpose:** Ensure every data element, screen field, and file movement is accounted for so nothing is missed in the rebuild.

1. Prompt Copilot:
   ```
   /doc Build a table with columns [Field, Definition, Source (JCL/Copybook), Transformation, Destination, Notes] using TRMAP and TRLOG. Flag abbreviations that need SME confirmation.
   ```
2. In `data-flow-map.md`, capture for each short code (TID, BUID, ASCD, SDR, QTY, PXO, PXC, RSK):
   - What UI/screen or upstream job provides it (cross reference JCL).  
   - Any conversions (e.g., implied decimals, signed values).  
   - Where the data ends up (report, downstream batch, archive).
3. Annotate flows visually (Mermaid or bullet diagram) if helpful, especially when data hops between jobs or files.
4. Record uncovered gaps (e.g., time zone for `TID`, currency code for `PXO/PXC`) in `sme-question-log.md`.

**Output:** Traceable lineage for every field and assurance that no coded data element is overlooked.

---

## Task 3 · Requirements Package Assembly (10 minutes)
**Purpose:** Turn discovery into the data + business logic requirements pack that engineering will build from.

1. Prompt Copilot:
   ```
   /doc Draft the outline of a Legacy Trade Requirements Package using business-logic-summary.md and data-flow-map.md. Include purpose, stakeholders, inputs/outputs, rules, quality checks, and open issues.
   ```
2. Expand the draft manually, ensuring sections cover:
   - Business outcomes and value triggers (why the module exists).  
   - Step-by-step logic with references back to COBOL paragraph names (for validation only).  
   - Field definitions + validation/quality rules (acceptable ranges, mandatory vs optional).  
   - Screen or user interaction notes if available (which field appears where, who captures it).
3. Attach `sme-question-log.md` as an appendix and tag each item with owner, due date, and dependency (e.g., “Required before sprint planning”).

**Output:** Requirements document ready for review, clearly separating confirmed logic from open questions.

---

## Task 4 · Governance & Handoff (10 minutes)
**Purpose:** Package evidence and tee up backlog work without writing code.

1. Update change-control log (`modules/module-4-legacy-modernization/logs/change-control-log.md`):
   - Risks uncovered (short codes, unknown RSK meanings).  
   - Mitigations (SME validation, parity testing plan).  
   - Approvals required (e.g., compliance for risk codes, operations for batch windows).
2. Summarise key stats:
   - Count of fields mapped vs total.  
   - Number of open SME items.  
   - Any assumptions that require sign-off.
3. Package the artefacts in `legacy-data-mapping-<your-name>/` (summary, flow map, requirements, SME log, change log excerpt).
4. Optional prompt for backlog seeding:
   ```
   /doc Propose epics and high-level stories based on data-requirements-package.md, including acceptance criteria that reference the mapped fields. Flag as ANALYST-DRAFT for engineering review.
   ```

**Output:** Complete analyst bundle ready for stakeholder walkthrough and backlog grooming.

---

## Optional Follow-Ups
- **Parity validation:** ask Copilot to calculate delta values in Python/Excel to cross-check the COBOL logic.  
- **Story refinement:** use `/explain` and `/doc` to draft INVEST stories, then pass to engineering for refinement.  
- **Incident drill:** run Module 5’s accuracy workflow by feeding erroneous trade records into the summary.

---

### Success Checklist
- ✅ Business logic captured in plain English with references for validation only.  
- ✅ Every short-coded field mapped from screen/input → transformation → destination.  
- ✅ Data & business logic requirements package drafted, with open issues and owners logged.  
- ✅ Change-control log updated; evidence bundle prepared for engineering and governance teams.

Remember: your job is to expose the “what and why” so engineers can plan the “how.” Copilot accelerates the documentation, but the analyst remains accountable for accuracy, validation, and stakeholder alignment.

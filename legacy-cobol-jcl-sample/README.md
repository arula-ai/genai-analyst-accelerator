# Legacy COBOL + JCL Training Repo (Template)

This folder contains a self-contained COBOL + JCL sample you can publish as a stand-alone repository for Module 4 training. It mirrors the artefacts analysts need to interpret legacy jobs without diving into software engineering deliverables.

## Contents

```
cobol/                   Interest-adjustment COBOL program (batch)
copybooks/               Copybook defining the account record layout
jcl/                     Sample JCL job to compile and execute the program
data/                    Synthetic VSAM-style flat file used by the job
docs/training-runbook.md Analyst-facing walkthrough and prompts
```

## How to Use

1. Create a new git repo (e.g., `legacy-logic-lab`) and copy this directory into the root.
2. Replace the synthetic dataset with a version that matches your domain, keeping PII out.
3. Update dataset names in the JCL job if your environment uses different high-level qualifiers.
4. Share the repo URL with participants so they can clone it directly into Codespaces or their IDE.

> If you prefer to keep everything in one repository, leave this folder as-is and remind learners to work from here. The structure has no tooling dependencies.

## Suggested Training Flow

1. **Explain the program** – Use `/explain` on `cobol/interest-adjustment.cbl` to capture business logic (inputs, decisions, outputs).
2. **Map data flow** – Review `copybooks/ACCOUNT-RECORD.cpy` and `data/ACCOUNTS.DAT` to trace lineage and transformation steps.
3. **Draft requirements** – Translate findings into the data requirements package outlined in `docs/training-runbook.md`.
4. **Governance alignment** – Log risks and SME questions in your change-control or data requirements templates.

## Optional: Running Locally with GnuCOBOL

If you want analysts to execute the program outside a mainframe:

```bash
# Compile
cobc -x -free -o bin/interest-adjustment \
     -I copybooks cobol/interest-adjustment.cbl

# Run (assumes ASCII text file)
cat data/ACCOUNTS.DAT | ./bin/interest-adjustment
```

The output mirrors the mainframe job report and can feed validation exercises.

---

This template is MIT licensed. Feel free to expand it with additional COBOL members, batch control cards, or downstream reports that match your training scenario.

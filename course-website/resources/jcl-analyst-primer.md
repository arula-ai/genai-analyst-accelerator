# JCL Primer for Analysts

- **What it is:** Job Control Language for z/OS batch processing—defines jobs, steps, procedures (PROCs), and the datasets each step reads/writes.
- **Why analysts care:** It reveals *orchestration*—which programs run, in what order, and which files they touch—so you can map upstream/downstream data movement.
- **What to extract:** For each step, capture program, PROCs, datasets (DD statements), and whether datasets are input or output. Link steps to COBOL programs.

References: IBM Redbooks on z/OS basics and JCL overview. :contentReference[oaicite:15]{index=15}

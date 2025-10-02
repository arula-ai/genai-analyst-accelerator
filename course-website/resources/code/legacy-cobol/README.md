# Legacy COBOL Modernization Assets

Use these files in Module 4 to practice decomposing and modernising mainframe logic.

## Structure

- Interest adjustment COBOL program – the primary routine you will translate
- Batch job JCL sample showing scheduling context
- Data layout notes describing the fixed-width file structure
- Fixture files for regression testing the Python refactor

## Modern Target

Participants create a Python module that:

1. Reads the fixed-width input file described in the data layout notes
2. Calculates interest adjustments identical to the COBOL logic
3. Writes results to a Parquet file used by downstream analytics
4. Logs differences and flags for manual review when tolerances are exceeded

Keep the change-control log updated as you iterate. The modernization brief should explain every delta from the legacy job.

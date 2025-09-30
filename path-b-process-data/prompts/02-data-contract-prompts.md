# Data Contract Generation Prompts

## Overview

This guide provides prompt templates for using GitHub Copilot to extract data elements from business requirements and generate comprehensive OpenAPI data contracts. Data contracts are essential for ensuring consistency between business requirements and technical implementation.

## What Makes a Good Data Contract

A quality data contract includes:
- **Complete Field Definitions:** Every business data element is represented
- **Appropriate Validation:** Business rules are enforced through field constraints
- **Clear Documentation:** Each field has purpose, format, and example
- **Realistic Examples:** Sample data that reflects actual business scenarios
- **Compliance Considerations:** Regulatory requirements are embedded in validation

## The Five-Part Prompt Pattern for Data Contracts

1. **Role:** Systems analyst or data modeler with domain expertise
2. **Source:** Policy document or business requirements text
3. **Format:** OpenAPI 3.0 YAML with specific structure requirements
4. **Validation:** Business rules translated to technical constraints
5. **Examples:** Realistic but safe sample data

---

## Prompt 1: Extract Data Elements from Policy

### When to Use
First step: identify all data elements mentioned in business requirements before creating the contract.

### The Prompt
```
You are a systems analyst working on customer onboarding for a regulated financial institution.

Analyze this policy document and extract all data elements that need to be collected, stored, or validated:

[PASTE POLICY SECTION FROM onboarding-policy.md]

For each data element, provide:
1. Field name (camelCase format)
2. Business purpose (why is this collected?)
3. Data type (string, number, boolean, date, etc.)
4. Validation requirements (format, length, range, etc.)
5. Business rules (when required, who can modify, etc.)
6. Compliance significance (BSA, PATRIOT Act, FINRA requirements)
7. Example values (realistic but synthetic)

Group related fields logically (Personal Info, Contact Info, Account Details, etc.).

Focus on:
- Required vs. optional fields based on policy language
- Format requirements (SSN format, phone patterns, etc.)
- Business constraints (age minimums, deposit limits, etc.)
- Regulatory requirements (KYC/AML data collection)
```

### Expected Output
A structured list of data elements with business context, validation rules, and compliance rationale.

### Tips for Better Results
- If output is too generic: Add "Be specific about financial services requirements and regulatory constraints"
- If missing validation: Add "Include all business rules that can be expressed as data validation"
- If examples are unrealistic: Add "Use realistic but synthetic test data suitable for financial services"

---

## Prompt 2: Generate Complete OpenAPI Schema

### When to Use
Create the full OpenAPI schema from extracted data elements.

### The Prompt
```
Create a comprehensive OpenAPI 3.0 schema for customer onboarding based on these data elements:

[PASTE DATA ELEMENTS FROM PROMPT 1]

Generate a complete YAML schema that includes:

1. **CustomerApplication object** with nested sub-objects:
   - PersonalInformation
   - ContactInformation  
   - IdentificationDocument
   - AccountDetails
   - EmploymentInformation
   - CustomerDisclosures

2. **For each field, include:**
   - Appropriate data type and format
   - Validation constraints (minLength, maxLength, pattern, minimum, maximum)
   - Required field declarations
   - Clear descriptions with business purpose
   - Realistic examples using synthetic data

3. **Validation patterns for:**
   - SSN format: XXX-XX-XXXX
   - Phone numbers: US formats
   - Email addresses: standard validation
   - Dates: ISO format
   - State codes: 2-letter uppercase
   - ZIP codes: 5 or 9 digit formats

4. **Business rule enforcement:**
   - Age minimum (18 years)
   - Deposit limits ($25 minimum, $10,000 maximum for new customers)
   - Required disclosures for compliance

Format as valid OpenAPI 3.0 YAML with proper indentation and structure.
```

### Expected Output
A complete, valid OpenAPI schema with comprehensive validation rules.

---

## Prompt 3: Add Advanced Validation Rules

### When to Use
Enhance basic schema with complex business rules and cross-field validation.

### The Prompt
```
Enhance this OpenAPI schema with advanced validation and business rules:

[PASTE YOUR BASIC SCHEMA]

Add these sophisticated validations:

1. **Cross-field validation requirements:**
   - ID expiration date must be in the future
   - Customer age must match calculated age from date of birth
   - Mailing address only required if different from primary address

2. **Conditional requirements:**
   - Employment information required if annual income > $50,000
   - Business license required for business account types
   - Enhanced documentation for large initial deposits (>$5,000)

3. **Format enhancements:**
   - More specific regex patterns for government ID numbers
   - International phone number support with country codes
   - Address validation compatible with USPS standards

4. **Compliance enhancements:**
   - PII handling annotations
   - Data retention classifications
   - Audit trail requirements

Use OpenAPI features like:
- Conditional schemas (if/then/else)
- Dependencies between fields
- Custom validation patterns
- Detailed error response schemas
```

---

## Prompt 4: Generate Realistic Test Data

### When to Use
Create comprehensive example payloads for testing and documentation.

### The Prompt
```
Generate realistic test data examples for this customer onboarding schema:

[PASTE YOUR OPENAPI SCHEMA]

Create 5 different customer examples:

1. **Standard Individual Customer:** Typical checking account opening
2. **High-Value Customer:** Large initial deposit requiring enhanced review
3. **Edge Case Customer:** Minimum age (18), minimum deposit ($25)
4. **Business Customer:** Small business account with additional requirements
5. **Complex Customer:** Joint account with multiple addresses

For each example:
- Use realistic but obviously synthetic data
- Follow all validation rules
- Include all required fields
- Show different valid formats (phone number variations, address formats)
- Ensure data consistency (age matches DOB, etc.)

Format as complete JSON payloads that would pass schema validation.

Make the data diverse (different states, age ranges, account types) but compliant with all business rules.
```

### Expected Output
Multiple complete, valid JSON examples demonstrating different customer scenarios.

---

## Prompt 5: Validation Error Scenarios

### When to Use
Define error responses and validation failure scenarios.

### The Prompt
```
Create comprehensive error response schemas for this customer onboarding API:

[PASTE YOUR SCHEMA]

Design error responses for:

1. **Field validation errors:**
   - Invalid SSN format
   - Underage customer (< 18)
   - Invalid email format
   - Expired ID document
   - Deposit amount out of range

2. **Business rule violations:**
   - OFAC sanctions list match
   - Incomplete required disclosures
   - Missing employment info for high-income customers
   - Invalid state code or ZIP code combination

3. **System integration errors:**
   - Identity verification service timeout
   - Document processing failure
   - Address validation service unavailable

For each error type, provide:
- HTTP status code
- Error code (machine-readable)
- User-friendly message
- Field-specific error details
- Suggested corrective actions
- Support contact information where appropriate

Include both single-field errors and complex multi-field business rule violations.
```

---

## Prompt 6: API Endpoint Documentation

### When to Use
Create complete API documentation with request/response examples.

### The Prompt
```
Create complete OpenAPI documentation for the customer onboarding endpoints:

[PASTE YOUR SCHEMA]

Include these endpoints:

1. **POST /customers/applications**
   - Submit new customer application
   - Request: CustomerApplication schema
   - Response: ApplicationResponse with ID and status
   - Error responses: Validation errors, business rule violations

2. **GET /customers/applications/{id}**
   - Check application status
   - Response: Current status, next steps, decision timeline
   - Error responses: Not found, access denied

3. **PUT /customers/applications/{id}/documents**
   - Upload additional documentation
   - Request: Document metadata and file
   - Response: Document acceptance confirmation
   - Error responses: File format, size, processing errors

For each endpoint:
- Complete parameter descriptions
- Request/response examples
- Error scenarios with specific HTTP codes
- Rate limiting information
- Security requirements (authentication)
- SLA information (response times)

Make this suitable for developer onboarding and external API documentation.
```

---

## Prompt 7: Data Privacy and Compliance Annotations

### When to Use
Add privacy, security, and compliance metadata to your schema.

### The Prompt
```
Enhance this customer onboarding schema with privacy and compliance annotations:

[PASTE YOUR SCHEMA]

Add metadata for:

1. **PII Classification:**
   - Mark fields containing personally identifiable information
   - Specify sensitivity levels (public, internal, confidential, restricted)
   - Add data handling requirements

2. **Regulatory Compliance:**
   - BSA/AML data collection requirements
   - PATRIOT Act verification fields
   - FINRA recordkeeping obligations
   - CCPA/privacy law considerations

3. **Data Retention:**
   - Retention periods for different field types
   - Archival requirements
   - Deletion policies and procedures

4. **Security Requirements:**
   - Encryption requirements (at rest, in transit)
   - Access control specifications
   - Audit logging requirements

5. **Data Quality:**
   - Data source tracking
   - Validation confidence levels
   - Update frequency requirements

Use OpenAPI extensions (x-* properties) to add compliance metadata without breaking standard schema validation.
```

---

## Common Pitfalls and Solutions

### Pitfall 1: Overly Restrictive Validation
**Problem:** Validation rules that reject valid customer data
**Solution:** Add to prompt: "Ensure validation rules accommodate real-world data variations while maintaining security. For example, names should allow hyphens, apostrophes, and spaces."

### Pitfall 2: Missing Business Context
**Problem:** Technical schema without business meaning
**Solution:** Add to prompt: "Include clear business descriptions for each field explaining why it's collected and how it's used in the onboarding process."

### Pitfall 3: Inadequate Error Handling
**Problem:** Generic error responses that don't help users fix problems
**Solution:** Add to prompt: "Design error responses that provide specific, actionable guidance for fixing validation problems. Include examples of correct formats."

### Pitfall 4: Non-Compliant Field Names
**Problem:** Field names that don't match business terminology
**Solution:** Add to prompt: "Use field names that match business terminology and are self-documenting. Avoid abbreviations or technical jargon."

### Pitfall 5: Weak Validation Patterns
**Problem:** Regex patterns that are too loose or too strict
**Solution:** Add to prompt: "Test validation patterns against realistic data variations. SSN patterns should accept 123-45-6789 but reject invalid formats."

---

## Validation and Quality Check Prompts

### Schema Validation
```
Review this OpenAPI schema for technical correctness:

[PASTE SCHEMA]

Check for:
- Valid YAML syntax and indentation
- Proper OpenAPI 3.0 structure
- Correct field type declarations
- Valid regex patterns (test common cases)
- Required field consistency
- Example data that matches validation rules

Fix any technical errors and return corrected schema.
```

### Business Rule Verification
```
Verify this data contract against business requirements:

Policy Requirements: [PASTE POLICY SECTION]
Data Contract: [PASTE SCHEMA]

Check that:
- All policy data requirements are captured
- Business rules are enforced through validation
- Regulatory requirements are addressed
- Field optionality matches policy language
- Examples demonstrate policy compliance

Identify any gaps between policy and contract.
```

### Completeness Review
```
Analyze this customer onboarding schema for completeness:

[PASTE SCHEMA]

Evaluate:
- Customer journey coverage (application through approval)
- Data sufficiency for identity verification
- Compliance data collection (KYC/AML requirements)
- Error scenario handling
- Integration point data needs

Suggest missing elements or improvements.
```

---

## Integration with Other Artifacts

### From Flowchart to Data Contract
```
I have this process flowchart showing customer onboarding:

[PASTE FLOWCHART]

And this data contract:

[PASTE SCHEMA]

Verify that:
- All data collected in the process is defined in the schema
- Validation points in the flowchart match schema validation
- Decision criteria in flowchart can be evaluated with schema data
- Error paths in flowchart are supported by error schemas

Identify any misalignments and suggest corrections.
```

### From Data Contract to Test Cases
```
Generate UAT test scenarios based on this data contract:

[PASTE SCHEMA]

Create test cases for:
- Valid data scenarios (one for each major field combination)
- Invalid data scenarios (test each validation rule)
- Boundary conditions (minimum/maximum values)
- Business rule violations
- Required field omissions

Format as UAT test case outlines with specific test data.
```

---

## Practice Exercise

Using the customer onboarding policy (inputs/onboarding-policy.md):

1. Use Prompt 1 to extract data elements from Section 1 (Initial Application)
2. Use Prompt 2 to generate basic OpenAPI schema
3. Use Prompt 3 to add advanced validation
4. Use Prompt 4 to create test data examples

Compare your results with solutions/sample-data-contract.yaml
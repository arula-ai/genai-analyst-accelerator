# Exercise 2: Data Contracts Generation

**Time:** 12 minutes (40:00 - 52:00 in session)  
**Objective:** Extract data elements from policy requirements and generate comprehensive OpenAPI data contracts with validation rules and examples

## Prerequisites

- [ ] You've completed Exercise 1 (Process Flow)
- [ ] You have `inputs/onboarding-policy.md` open
- [ ] You have `prompts/02-data-contract-prompts.md` available for reference
- [ ] You have `templates/openapi-contract-template.yaml` for structure guidance

## Exercise Overview

You'll use Copilot to:
1. **Extract Data Elements** from policy text (4 minutes)
2. **Generate OpenAPI Schema** with validation rules (5 minutes)
3. **Add Test Data Examples** and validate the contract (3 minutes)

---

## Step 1: Extract Data Elements from Policy (4 minutes)

### Instructions

1. **Open a new file:** `my-data-contract.yaml`
2. **Review the source policy:** Focus on Section 1 (Initial Account Application) in `inputs/onboarding-policy.md`
3. **Use Prompt 1** from `prompts/02-data-contract-prompts.md`
4. **Extract all data elements** mentioned in the policy requirements

### The Policy Section to Analyze

Copy this text from `inputs/onboarding-policy.md` Section 1:

```
All prospective customers must complete a comprehensive application through our approved channels (web portal, mobile application, or branch location). The application process requires collection of the following mandatory information:

Personal Information Requirements:
- Legal full name (as appears on government-issued identification)
- Date of birth
- Social Security Number or Taxpayer Identification Number
- Primary residential address and mailing address (if different)
- Primary phone number and email address
- Employment information including employer name and annual income
- Intended use of account and source of funds

Documentation Requirements:
Customers must provide one primary form of government-issued photo identification such as driver's license, state ID, or passport. For commercial accounts, additional documentation including articles of incorporation, business licenses, and beneficial ownership information is required.

Initial Business Rules:
- Customer must be at least 18 years of age
- Must be a U.S. resident or have qualifying immigration status
- Cannot appear on any prohibited lists including OFAC sanctions lists
- Maximum initial funding of $10,000 for new customer relationships
```

### The Data Extraction Prompt

```
You are a systems analyst working on customer onboarding for a regulated financial institution.

Analyze this policy document and extract all data elements that need to be collected, stored, or validated:

[PASTE THE POLICY SECTION ABOVE]

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

### Checkpoint ✓
Review your data element list:
- Did you identify all the fields mentioned in the policy?
- Are the validation rules based on business requirements?
- Do you have appropriate groupings (Personal, Contact, Employment, etc.)?
- Are compliance requirements clearly noted?

### What Good Looks Like

Your data extraction should include approximately 20-25 fields organized into groups:

**Personal Information:**
- firstName, lastName, middleName
- dateOfBirth (with age 18+ validation)
- socialSecurityNumber (with format validation)
- citizenship status

**Contact Information:**
- primaryAddress (street, city, state, zipCode)
- mailingAddress (optional, if different)
- phoneNumber, alternatePhoneNumber
- emailAddress

**Employment Information:**
- employerName, jobTitle
- annualIncome (with range validation)
- employmentStatus

**Account Details:**
- accountType, initialDeposit
- intendedUse, sourceOfFunds

**Identification:**
- idType, idNumber
- issueDate, expirationDate

---

## Step 2: Generate Complete OpenAPI Schema (5 minutes)

### Instructions

1. **Take your data elements** from Step 1
2. **Use Prompt 2** from the prompt guide (Generate Complete OpenAPI Schema)
3. **Create comprehensive YAML schema** with validation rules
4. **Ensure proper nesting** and structure

### The Schema Generation Prompt

```
Create a comprehensive OpenAPI 3.0 schema for customer onboarding based on these data elements:

[PASTE YOUR DATA ELEMENTS FROM STEP 1]

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

### Checkpoint ✓
Validate your schema structure:
- Is it valid YAML syntax (proper indentation)?
- Do all fields have appropriate data types?
- Are validation constraints based on business rules?
- Do examples match the validation patterns?

### What Good Looks Like

Your OpenAPI schema should include:

```yaml
components:
  schemas:
    CustomerApplication:
      type: object
      required: [personalInfo, contactInfo, identification, accountDetails, disclosures]
      properties:
        personalInfo:
          $ref: '#/components/schemas/PersonalInformation'
        contactInfo:
          $ref: '#/components/schemas/ContactInformation'
        # ... other sections

    PersonalInformation:
      type: object
      required: [firstName, lastName, dateOfBirth, socialSecurityNumber]
      properties:
        firstName:
          type: string
          minLength: 1
          maxLength: 50
          pattern: '^[A-Za-z\s\-\.]+$'
          description: Customer's legal first name
          example: "Alice"
        # ... other fields with proper validation
```

---

## Step 3: Add Test Data Examples and Validation (3 minutes)

### Instructions

1. **Use Prompt 4** from the prompt guide (Generate Realistic Test Data)
2. **Create 3 different customer examples:**
   - Standard individual customer
   - Edge case customer (minimum age, minimum deposit)
   - High-value customer (large initial deposit)
3. **Validate your examples** against your schema

### The Test Data Generation Prompt

```
Generate realistic test data examples for this customer onboarding schema:

[PASTE YOUR OPENAPI SCHEMA]

Create 3 different customer examples:

1. **Standard Individual Customer:** Typical checking account opening with $500 deposit
2. **Edge Case Customer:** Exactly 18 years old with minimum $25 deposit
3. **High-Value Customer:** Large $5,000 initial deposit

For each example:
- Use realistic but obviously synthetic data
- Follow all validation rules
- Include all required fields
- Show different valid formats (phone number variations, address formats)
- Ensure data consistency (age matches DOB, etc.)

Format as complete JSON payloads that would pass schema validation.

Make the data diverse (different states, age ranges) but compliant with all business rules.
```

### Checkpoint ✓
Test your examples:
- Do all JSON examples follow your schema validation rules?
- Is the data realistic for banking customers?
- Do dates, ages, and other calculated fields match?
- Would these examples pass business rule validation?

### What Good Looks Like

Your test data should include complete customer records like:

```json
{
  "personalInfo": {
    "firstName": "Alice",
    "lastName": "Anderson",
    "dateOfBirth": "1985-03-15",
    "socialSecurityNumber": "123-45-6789"
  },
  "contactInfo": {
    "primaryAddress": {
      "street": "123 Main Street",
      "city": "Dallas",
      "state": "TX",
      "zipCode": "75201"
    },
    "phoneNumber": "(214) 555-0123",
    "emailAddress": "alice.anderson.test@example.com"
  },
  "accountDetails": {
    "accountType": "checking",
    "initialDeposit": 500.00
  }
  // ... complete record
}
```

---

## Exercise Complete!

### What You've Created
- [ ] Comprehensive data element inventory from policy requirements
- [ ] Complete OpenAPI schema with validation rules
- [ ] Realistic test data examples demonstrating different scenarios
- [ ] Data contract ready for development team handoff

### Self-Assessment Questions

1. **Completeness:** Does your schema capture all data mentioned in the policy?
2. **Validation:** Do your business rules translate to appropriate technical constraints?
3. **Usability:** Could a developer implement API endpoints from your schema?
4. **Compliance:** Are regulatory requirements embedded in the data validation?
5. **Quality:** Do your test examples demonstrate proper validation?

### Integration Check

Review how your data contract connects to your process flowchart from Exercise 1:
- **Data Collection Points:** Where in the process is each field collected?
- **Validation Steps:** When does validation occur in the workflow?
- **Decision Data:** What data drives the decision points in your flowchart?
- **Error Scenarios:** How do validation failures connect to error paths?

### Common Issues & Fixes

**Issue:** Schema is too complex
```
Fix: Start with core required fields, then add optional fields incrementally
```

**Issue:** Validation rules are too strict
```
Fix: Review real-world data variations (names with hyphens, international formats)
```

**Issue:** Missing business context
```
Fix: Add clear descriptions explaining why each field is collected and how it's used
```

**Issue:** Test data doesn't match schema
```
Fix: Validate each example against your schema constraints before finalizing
```

---

## Bonus Challenges (if time allows)

### Advanced Validation
Try generating conditional validation rules:
```
Add conditional requirements where employment information is only required if annual income exceeds $50,000
```

### Error Response Design
Create error schemas for validation failures:
```
Design comprehensive error responses for each type of validation failure with specific guidance for users
```

### API Endpoint Design
Expand to full API documentation:
```
Create complete API endpoint documentation including request/response examples and error codes
```

---

## Troubleshooting

### Problem: YAML syntax errors
**Solution:** Check indentation (use spaces, not tabs), ensure proper nesting, validate bracket matching.

### Problem: Validation patterns not working
**Solution:** Test regex patterns with online validators, ensure proper escaping of special characters.

### Problem: Business rules missing
**Solution:** Review policy text again, ensure all "must," "required," and "shall" statements are captured.

### Problem: Examples don't match schema
**Solution:** Validate JSON examples against schema using online OpenAPI validators.

---

## Next Steps

Continue to **Exercise 3: Traceability & UAT** where you'll create comprehensive test cases and traceability matrices linking your data contract back to policy requirements and forward to test validation.

Your data contract will inform UAT testing by defining:
- What data needs to be tested
- What validation rules need verification
- What edge cases need coverage
- What compliance aspects need validation
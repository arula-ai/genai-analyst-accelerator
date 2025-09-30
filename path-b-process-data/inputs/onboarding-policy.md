# Customer Onboarding & Identity Verification Policy

**Policy Number:** COP-2024-017  
**Version:** 2.1  
**Effective Date:** January 1, 2024  
**Owner:** Compliance Department  
**Last Review:** October 1, 2024  
**Next Review:** January 1, 2025  

## Purpose

This policy establishes standardized procedures for customer onboarding and identity verification to ensure compliance with the Bank Secrecy Act (BSA), USA PATRIOT Act, and FINRA Rule 4512. The policy aims to prevent money laundering, terrorist financing, and fraud while providing a seamless customer experience during account opening.

## Scope

This policy applies to all new retail and commercial banking customers opening deposit accounts, investment accounts, or credit facilities. It covers both digital and in-person account opening processes and applies to all subsidiaries and business units.

## Policy Statement

### 1. Initial Account Application

All prospective customers must complete a comprehensive application through our approved channels (web portal, mobile application, or branch location). The application process requires collection of the following mandatory information:

**Personal Information Requirements:**
- Legal full name (as appears on government-issued identification)
- Date of birth
- Social Security Number or Taxpayer Identification Number
- Primary residential address and mailing address (if different)
- Primary phone number and email address
- Employment information including employer name and annual income
- Intended use of account and source of funds

**Documentation Requirements:**
Customers must provide one primary form of government-issued photo identification such as driver's license, state ID, or passport. For commercial accounts, additional documentation including articles of incorporation, business licenses, and beneficial ownership information is required.

**Initial Business Rules:**
- Customer must be at least 18 years of age
- Must be a U.S. resident or have qualifying immigration status
- Cannot appear on any prohibited lists including OFAC sanctions lists
- Maximum initial funding of $10,000 for new customer relationships

### 2. Identity Verification Process

The identity verification process follows a four-step automated workflow with manual review fallbacks:

**Step 1: Data Validation**
All submitted information undergoes initial format validation including SSN format verification, address standardization through USPS database, and phone number format checking. Invalid data triggers immediate error messages with specific guidance for correction.

**Step 2: Third-Party Identity Verification**
Customer information is submitted to our primary identity verification service provider for real-time validation against credit bureau databases and public records. The service returns a confidence score between 0-100 and identifies any inconsistencies or potential fraud indicators.

**Step 3: Document Authentication**
Uploaded identification documents undergo optical character recognition (OCR) processing to extract data for comparison against manually entered information. The system checks for document authenticity markers, image quality, and data consistency.

**Step 4: Knowledge-Based Authentication (KBA)**
If automated verification produces a score below 85%, customers may be presented with knowledge-based authentication questions generated from their credit history and public records. Customers have up to three attempts to answer questions correctly.

**System Timeout Handling:**
All verification services must respond within 10 seconds. Service timeouts or failures automatically route applications to the manual review queue with appropriate customer messaging about temporary delays.

### 3. Decision Rules

The verification process results in one of three outcomes based on established scoring thresholds:

**Auto-Approval Criteria:**
- Identity verification confidence score above 85%
- All document verification checks pass
- No adverse findings in OFAC or fraud databases
- Customer passes all business rule validations
- Applications meeting these criteria receive immediate approval

**Manual Review Triggers:**
Applications scoring between 60-85% or meeting specific criteria require human review:
- Address discrepancies between submitted and verified information
- Document quality issues that prevent automated processing
- Incomplete KBA responses (1-2 failed attempts)
- New customer relationships with intended deposits exceeding $5,000
- Commercial accounts or trust arrangements

**Auto-Rejection Criteria:**
- Identity verification score below 60%
- OFAC sanctions list matches
- Clear fraud indicators identified by verification services
- Failed KBA (3 unsuccessful attempts)
- Incomplete applications after 30 days

**Approval Authority Levels:**
- Under $10,000: System auto-approval or customer service representative
- $10,000-$50,000: Supervisor approval required
- Above $50,000: Branch manager or regional manager approval

### 4. Data Retention

All customer data and verification results must be retained according to regulatory requirements:

**Application Data:** All submitted customer information, including both approved and denied applications, must be retained for seven (7) years from the date of application in encrypted database storage.

**Verification Results:** Identity verification scores, individual check results, and fraud indicators must be preserved for seven (7) years with detailed audit trails showing system responses and decision rationale.

**Supporting Documentation:** Digital copies of all uploaded identification documents and any additional supporting materials must be stored in encrypted document management systems for seven (7) years.

**Audit Trail Requirements:** Complete logging of all verification attempts, including timestamps, system responses, decision makers (for manual reviews), and final outcomes must be maintained with immutable audit trails.

### 5. Error Handling

The system must gracefully handle various error conditions while maintaining positive customer experience:

**Verification Service Outages:** When primary identity verification services are unavailable, customer applications are automatically saved and queued for processing when services resume. Customers receive clear messaging about temporary delays and expected resolution timeframes.

**Document Upload Failures:** Customers experiencing document upload issues can retry up to three times with progressive assistance including file format guidance and alternative upload methods. After three failures, applications route to phone support for assistance.

**Data Validation Errors:** Real-time validation provides specific, actionable error messages for each field with examples of correct formats. Common issues include SSN format errors, invalid addresses, and incorrect date formats.

**Timeout Recovery:** Applications interrupted by system timeouts preserve customer progress and allow continuation from the last completed step rather than requiring restart of the entire process.

### 6. Compliance Requirements

This policy ensures adherence to multiple regulatory frameworks:

**Bank Secrecy Act (BSA) Compliance:** All customer identification and verification procedures meet BSA requirements for Customer Identification Programs (CIP) including verification of customer identity using documentary and non-documentary methods.

**USA PATRIOT Act Section 326:** Identity verification procedures satisfy Section 326 requirements for reasonable belief that we know the true identity of each customer, including appropriate verification methods and recordkeeping.

**FINRA Rule 4512:** For investment accounts, additional suitability information collection and verification ensures compliance with customer account information requirements.

**Enhanced Due Diligence:** High-risk customer categories including politically exposed persons (PEPs), customers from high-risk jurisdictions, and large cash transaction patterns trigger enhanced due diligence procedures.

**Privacy Protection:** All personally identifiable information (PII) is encrypted both at rest and in transit using AES-256 encryption. Access controls limit data viewing to authorized personnel with business need-to-know.

### 7. Service Level Agreement (SLA) Requirements

The onboarding process must meet established performance standards:

**Automated Verification:** Complete identity verification for auto-approval cases must finish within 60 seconds of application submission, including all third-party service calls and database updates.

**Manual Review Processing:** Applications requiring manual review must receive initial human review within 24 business hours, with final decision communicated to customers within 48 business hours.

**Customer Communication:** Automated email notifications must be sent within 2 minutes of each major status change including application receipt, verification completion, approval, or requests for additional information.

**System Availability:** The application platform must maintain 99.5% uptime during business hours (6:00 AM to 10:00 PM Eastern Time, Monday through Friday) with planned maintenance occurring outside these hours.

**Exception Processing:** Applications experiencing system errors or requiring specialized review must be escalated to appropriate personnel within 4 hours with customer notification of any delays beyond standard processing times.

## Policy Enforcement

Violations of this policy may result in regulatory sanctions, financial penalties, and operational restrictions. All staff involved in customer onboarding must complete annual training on these procedures and maintain current knowledge of regulatory requirements.

## Document Control

This policy is reviewed annually and updated as needed to reflect regulatory changes, system enhancements, and operational improvements. Version control ensures all stakeholders work from current procedures.

---

**Document History:**
- Version 1.0: Initial policy (January 2023)
- Version 2.0: Added enhanced due diligence procedures (July 2024)
- Version 2.1: Updated SLA requirements and error handling (October 2024)
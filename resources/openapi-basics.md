# OpenAPI Basics for Business Analysts

## Overview

OpenAPI (formerly Swagger) is a specification for describing REST APIs. For business analysts, OpenAPI serves as a contract between business requirements and technical implementation, ensuring that APIs deliver exactly what the business needs. This guide covers the fundamentals analysts need to document APIs effectively.

## Why OpenAPI Matters for Analysts

### Bridge Business and Technical Teams
- **Clear data requirements:** Define exactly what information is needed
- **Validation rules:** Specify business constraints and validation
- **Documentation:** Provide context for developers and QA teams
- **Contract-first development:** Agree on the interface before implementation

### Benefits for Analysts
- **Precision:** Eliminate ambiguity about data structures
- **Validation:** Ensure business rules are enforced at the API level
- **Communication:** Provide a shared language between business and technical teams
- **Testing:** Enable automated testing of business requirements

---

## YAML Syntax Basics

OpenAPI specifications are written in YAML (YAML Ain't Markup Language), a human-readable data format.

### Basic YAML Structure
```yaml
# Comments start with hash
key: value
nested:
  subkey: "quoted string"
  another: 42
  boolean: true

# Lists use dashes
items:
  - first item
  - second item
  - third item

# Or inline format
inline_list: [item1, item2, item3]
```

### YAML Rules for Analysts
1. **Indentation matters:** Use 2 spaces (not tabs)
2. **Colons require spaces:** `key: value` not `key:value`
3. **Quote strings with special characters:** Use quotes around strings containing spaces, special characters, or numbers that should be treated as strings

---

## Data Types in OpenAPI

### Primitive Types

#### String
```yaml
customerName:
  type: string
  description: "Customer's full legal name"
  example: "Alice Marie Anderson"
```

#### Integer
```yaml
accountNumber:
  type: integer
  format: int64
  description: "Unique account identifier"
  example: 1234567890
```

#### Number (Decimal)
```yaml
accountBalance:
  type: number
  format: float
  description: "Current account balance in USD"
  example: 1247.83
```

#### Boolean
```yaml
isActive:
  type: boolean
  description: "Whether the account is currently active"
  example: true
```

#### Date and DateTime
```yaml
dateOfBirth:
  type: string
  format: date
  description: "Customer's birth date"
  example: "1985-03-15"

lastLoginTime:
  type: string
  format: date-time
  description: "Timestamp of customer's last login"
  example: "2024-10-15T14:30:00Z"
```

### Complex Types

#### Array
```yaml
accountTypes:
  type: array
  items:
    type: string
  description: "List of account types customer is eligible for"
  example: ["checking", "savings", "credit"]

transactionHistory:
  type: array
  items:
    $ref: '#/components/schemas/Transaction'
  description: "Recent transactions for this account"
```

#### Object
```yaml
address:
  type: object
  properties:
    street:
      type: string
      example: "123 Main Street"
    city:
      type: string
      example: "Dallas"
    state:
      type: string
      example: "TX"
    zipCode:
      type: string
      pattern: "^[0-9]{5}(-[0-9]{4})?$"
      example: "75201"
  required:
    - street
    - city
    - state
    - zipCode
```

---

## Common Formats

OpenAPI provides predefined formats that add semantic meaning and validation:

### String Formats
```yaml
email:
  type: string
  format: email
  example: "alice@example.com"

uuid:
  type: string
  format: uuid
  example: "123e4567-e89b-12d3-a456-426614174000"

uri:
  type: string
  format: uri
  example: "https://api.example.com/customers/12345"

password:
  type: string
  format: password
  description: "Customer's password (never returned in responses)"
```

### Date and Time Formats
```yaml
birthDate:
  type: string
  format: date
  description: "Date in YYYY-MM-DD format"
  example: "1985-03-15"

createdAt:
  type: string
  format: date-time
  description: "ISO 8601 datetime with timezone"
  example: "2024-10-15T14:30:00.123Z"
```

---

## Validation Rules

### String Validation
```yaml
customerName:
  type: string
  minLength: 2
  maxLength: 100
  pattern: "^[a-zA-Z\\s\\-']+$"
  description: "Customer's legal name (letters, spaces, hyphens, apostrophes only)"
  example: "Alice O'Connor-Smith"

socialSecurityNumber:
  type: string
  pattern: "^[0-9]{3}-[0-9]{2}-[0-9]{4}$"
  description: "SSN in XXX-XX-XXXX format"
  example: "123-45-6789"
```

### Numeric Validation
```yaml
alertThreshold:
  type: number
  format: float
  minimum: 0
  maximum: 10000
  multipleOf: 0.01
  description: "Alert threshold amount (min $0, max $10,000, penny precision)"
  example: 250.00

customerAge:
  type: integer
  minimum: 18
  maximum: 120
  description: "Customer age (must be 18 or older)"
  example: 35
```

### Array Validation
```yaml
phoneNumbers:
  type: array
  minItems: 1
  maxItems: 3
  uniqueItems: true
  items:
    type: string
    pattern: "^\\+?1?[2-9][0-9]{2}[2-9][0-9]{2}[0-9]{4}$"
  description: "Customer phone numbers (1-3 unique US numbers)"
  example: ["555-123-4567", "555-987-6543"]
```

---

## Complete Customer Object Example

This example demonstrates a comprehensive data contract for a financial services customer:

```yaml
Customer:
  type: object
  description: "Complete customer profile for banking services"
  required:
    - customerId
    - legalName
    - dateOfBirth
    - socialSecurityNumber
    - primaryAddress
    - emailAddress
    - phoneNumber
    - accountStatus
  properties:
    customerId:
      type: string
      format: uuid
      description: "Unique identifier for the customer"
      example: "123e4567-e89b-12d3-a456-426614174000"
      readOnly: true
    
    legalName:
      type: string
      minLength: 2
      maxLength: 100
      pattern: "^[a-zA-Z\\s\\-']+$"
      description: "Customer's full legal name as it appears on government ID"
      example: "Alice Marie Anderson"
    
    dateOfBirth:
      type: string
      format: date
      description: "Customer's birth date (must be 18+ for account opening)"
      example: "1985-03-15"
    
    socialSecurityNumber:
      type: string
      pattern: "^[0-9]{3}-[0-9]{2}-[0-9]{4}$"
      description: "Social Security Number in XXX-XX-XXXX format"
      example: "123-45-6789"
      writeOnly: true
    
    primaryAddress:
      $ref: '#/components/schemas/Address'
      description: "Customer's primary residential address"
    
    emailAddress:
      type: string
      format: email
      maxLength: 320
      description: "Primary email address for communications"
      example: "alice.anderson@example.com"
    
    phoneNumber:
      type: string
      pattern: "^\\+?1?[2-9][0-9]{2}[2-9][0-9]{2}[0-9]{4}$"
      description: "Primary phone number (US format)"
      example: "555-123-4567"
    
    alternatePhoneNumbers:
      type: array
      maxItems: 2
      uniqueItems: true
      items:
        type: string
        pattern: "^\\+?1?[2-9][0-9]{2}[2-9][0-9]{2}[0-9]{4}$"
      description: "Additional phone numbers for customer contact"
      example: ["555-987-6543"]
    
    accountStatus:
      type: string
      enum: ["ACTIVE", "INACTIVE", "SUSPENDED", "CLOSED"]
      description: "Current status of the customer relationship"
      example: "ACTIVE"
    
    customerSince:
      type: string
      format: date
      description: "Date when customer relationship began"
      example: "2020-06-15"
      readOnly: true
    
    kycStatus:
      type: string
      enum: ["PENDING", "VERIFIED", "REQUIRES_UPDATE", "FAILED"]
      description: "Know Your Customer verification status"
      example: "VERIFIED"
      readOnly: true
    
    riskRating:
      type: string
      enum: ["LOW", "MEDIUM", "HIGH"]
      description: "Customer risk assessment for compliance purposes"
      example: "LOW"
      readOnly: true
    
    communicationPreferences:
      $ref: '#/components/schemas/CommunicationPreferences'
      description: "Customer's preferred communication methods and settings"
    
    alertPreferences:
      $ref: '#/components/schemas/AlertPreferences'
      description: "Customer's account alert configuration"
    
    lastUpdated:
      type: string
      format: date-time
      description: "Timestamp when customer record was last modified"
      example: "2024-10-15T14:30:00.123Z"
      readOnly: true
    
    createdBy:
      type: string
      description: "System or user ID that created this customer record"
      example: "SYSTEM_ONBOARDING"
      readOnly: true

# Supporting schemas
Address:
  type: object
  required:
    - street
    - city
    - state
    - zipCode
  properties:
    street:
      type: string
      minLength: 5
      maxLength: 100
      description: "Street address including number and name"
      example: "123 Main Street"
    
    apartment:
      type: string
      maxLength: 20
      description: "Apartment, suite, or unit number"
      example: "Apt 4B"
    
    city:
      type: string
      minLength: 2
      maxLength: 50
      pattern: "^[a-zA-Z\\s\\-']+$"
      description: "City name"
      example: "Dallas"
    
    state:
      type: string
      pattern: "^[A-Z]{2}$"
      description: "Two-letter state code"
      example: "TX"
    
    zipCode:
      type: string
      pattern: "^[0-9]{5}(-[0-9]{4})?$"
      description: "ZIP code in XXXXX or XXXXX-XXXX format"
      example: "75201"

CommunicationPreferences:
  type: object
  properties:
    emailNotifications:
      type: boolean
      description: "Whether customer wants to receive email notifications"
      example: true
      default: true
    
    smsNotifications:
      type: boolean
      description: "Whether customer wants to receive SMS notifications"
      example: true
      default: false
    
    pushNotifications:
      type: boolean
      description: "Whether customer wants to receive mobile push notifications"
      example: false
      default: false
    
    paperStatements:
      type: boolean
      description: "Whether customer wants physical paper statements"
      example: false
      default: false
    
    marketingOptIn:
      type: boolean
      description: "Whether customer opted in to marketing communications"
      example: false
      default: false

AlertPreferences:
  type: object
  properties:
    lowBalanceAlert:
      type: object
      properties:
        enabled:
          type: boolean
          description: "Whether low balance alerts are enabled"
          example: true
        threshold:
          type: number
          format: float
          minimum: 0
          maximum: 10000
          multipleOf: 0.01
          description: "Dollar amount that triggers low balance alert"
          example: 250.00
        channels:
          type: array
          items:
            type: string
            enum: ["EMAIL", "SMS", "PUSH"]
          description: "Delivery methods for this alert type"
          example: ["EMAIL", "SMS"]
    
    largeTransactionAlert:
      type: object
      properties:
        enabled:
          type: boolean
          description: "Whether large transaction alerts are enabled"
          example: true
        threshold:
          type: number
          format: float
          minimum: 100
          maximum: 50000
          multipleOf: 0.01
          description: "Dollar amount that triggers large transaction alert"
          example: 1000.00
        channels:
          type: array
          items:
            type: string
            enum: ["EMAIL", "SMS", "PUSH"]
          description: "Delivery methods for this alert type"
          example: ["EMAIL", "PUSH"]
```

---

## Documenting APIs for Development Teams

### Adding Descriptions and Context
```yaml
AccountBalance:
  type: object
  description: |
    Current account balance information including available funds,
    pending transactions, and any holds or restrictions.
    
    Used by:
    - Mobile app dashboard
    - ATM balance inquiries
    - Online banking summary
    
    Business rules:
    - Available balance = current balance - pending debits - holds
    - Negative balances trigger overdraft processing
    - Balance updates are real-time except during nightly batch processing (11 PM - 1 AM EST)
  properties:
    currentBalance:
      type: number
      format: float
      multipleOf: 0.01
      description: |
        Actual balance including all posted transactions.
        Does not include pending transactions or available credit.
      example: 1247.83
    
    availableBalance:
      type: number
      format: float
      multipleOf: 0.01
      description: |
        Amount available for immediate use.
        Calculation: currentBalance - pendingDebits - holds - reservedFunds
      example: 1200.00
    
    pendingCredits:
      type: number
      format: float
      multipleOf: 0.01
      minimum: 0
      description: "Total amount of pending credit transactions (deposits, transfers in)"
      example: 500.00
    
    pendingDebits:
      type: number
      format: float
      multipleOf: 0.01
      minimum: 0
      description: "Total amount of pending debit transactions (purchases, transfers out)"
      example: 75.50
```

### Required vs Optional Fields
```yaml
CustomerApplication:
  type: object
  description: "New customer application data"
  required:
    # Core identification (required by law)
    - legalName
    - dateOfBirth
    - socialSecurityNumber
    
    # Contact information (required for account management)
    - primaryAddress
    - emailAddress
    - phoneNumber
    
    # Legal agreements (required for account opening)
    - termsAccepted
    - privacyPolicyAccepted
  
  properties:
    # Required fields listed above in 'required' array
    legalName:
      type: string
      description: "Legal name exactly as it appears on government ID"
    
    # Optional fields
    preferredName:
      type: string
      description: "Name customer prefers to be called (optional)"
      example: "Ali"
    
    middleName:
      type: string
      description: "Middle name or initial (optional)"
      example: "Marie"
    
    suffix:
      type: string
      enum: ["Jr", "Sr", "II", "III", "IV"]
      description: "Name suffix (optional)"
```

### Error Response Documentation
```yaml
ErrorResponse:
  type: object
  description: "Standard error response format for all API endpoints"
  required:
    - error
    - message
    - timestamp
    - path
  properties:
    error:
      type: string
      description: "Error code for programmatic handling"
      example: "VALIDATION_FAILED"
    
    message:
      type: string
      description: "Human-readable error description"
      example: "Customer date of birth is required and must be a valid date"
    
    details:
      type: array
      items:
        type: object
        properties:
          field:
            type: string
            description: "Name of the field that caused the error"
            example: "dateOfBirth"
          code:
            type: string
            description: "Specific validation error code"
            example: "FIELD_REQUIRED"
          message:
            type: string
            description: "Detailed error message for this field"
            example: "Date of birth is required for age verification"
      description: "Detailed validation errors (when applicable)"
    
    timestamp:
      type: string
      format: date-time
      description: "When the error occurred"
      example: "2024-10-15T14:30:00.123Z"
    
    path:
      type: string
      description: "API endpoint where error occurred"
      example: "/api/v1/customers"
    
    requestId:
      type: string
      format: uuid
      description: "Unique identifier for this request (for support)"
      example: "req_123e4567-e89b-12d3-a456-426614174000"
```

---

## Best Practices for Analysts

### 1. Start with Business Requirements
Before writing OpenAPI, understand:
- What business processes will use this API?
- What data is absolutely required vs nice-to-have?
- What validation rules reflect business constraints?
- What error conditions need special handling?

### 2. Use Clear, Business-Friendly Names
```yaml
# Good: Clear business meaning
accountBalance:
  type: number
  description: "Current account balance in USD"

customerStatus:
  type: string
  enum: ["ACTIVE", "INACTIVE", "SUSPENDED"]

# Avoid: Technical jargon
bal_amt:
  type: number

cust_stat_cd:
  type: string
```

### 3. Include Business Context in Descriptions
```yaml
creditScore:
  type: integer
  minimum: 300
  maximum: 850
  description: |
    FICO credit score retrieved from credit bureau.
    
    Business usage:
    - Scores 750+ qualify for premium rates
    - Scores 650-749 qualify for standard rates  
    - Scores below 650 require manual underwriting
    
    Updated: Monthly via batch process
    Source: Experian credit bureau
    Retention: 24 months per compliance policy
  example: 720
```

### 4. Define Validation Rules That Enforce Business Rules
```yaml
withdrawalAmount:
  type: number
  format: float
  minimum: 1.00
  maximum: 5000.00
  multipleOf: 0.01
  description: |
    ATM withdrawal amount in USD.
    
    Business rules:
    - Minimum withdrawal: $1.00
    - Maximum daily withdrawal: $5,000 (configurable per customer)
    - Must be in penny increments
    - Cannot exceed available balance
  example: 100.00
```

### 5. Document Security and Compliance Requirements
```yaml
socialSecurityNumber:
  type: string
  pattern: "^[0-9]{3}-[0-9]{2}-[0-9]{4}$"
  description: |
    Customer's Social Security Number in XXX-XX-XXXX format.
    
    Security: 
    - PII - encrypt at rest and in transit
    - Never log in plain text
    - Mask in all displays (show only last 4 digits)
    
    Compliance:
    - Required for tax reporting (IRS Form 1099)
    - Subject to BSA/AML recordkeeping requirements
    - Retain for 7 years after account closure
  example: "123-45-6789"
  writeOnly: true  # Never returned in API responses
```

---

## Working with Development Teams

### What Analysts Should Provide
1. **Complete data models** with all required fields
2. **Business validation rules** with specific constraints
3. **Error scenarios** that need special handling
4. **Integration context** - how this API fits into business processes
5. **Compliance requirements** - what regulations apply

### What to Expect from Developers
1. **Technical implementation details** (authentication, rate limiting)
2. **Performance specifications** (response time, throughput)
3. **Infrastructure requirements** (hosting, scaling, monitoring)
4. **Integration patterns** (webhooks, polling, real-time)

### Review Checklist for Analysts
When reviewing developer-created OpenAPI specs:

- [ ] Are all business-required fields marked as `required`?
- [ ] Do validation rules match business constraints?
- [ ] Are business terms used consistently throughout?
- [ ] Are error messages user-friendly and actionable?
- [ ] Are compliance requirements addressed?
- [ ] Do examples use realistic (but synthetic) data?
- [ ] Are field descriptions clear to business users?

---

## Quick Reference

### Common Field Patterns
```yaml
# Monetary amount
amount:
  type: number
  format: float
  multipleOf: 0.01
  minimum: 0

# Phone number (US)
phoneNumber:
  type: string
  pattern: "^\\+?1?[2-9][0-9]{2}[2-9][0-9]{2}[0-9]{4}$"

# Email address
email:
  type: string
  format: email
  maxLength: 320

# Date
date:
  type: string
  format: date

# Timestamp
timestamp:
  type: string
  format: date-time

# UUID
id:
  type: string
  format: uuid
  readOnly: true
```

### Validation Quick Reference
- `required: [field1, field2]` - Required fields
- `minLength: 2` / `maxLength: 100` - String length
- `minimum: 0` / `maximum: 1000` - Numeric range  
- `pattern: "^[A-Z]{2}$"` - Regular expression
- `enum: ["A", "B", "C"]` - Allowed values
- `multipleOf: 0.01` - Decimal precision

This guide provides the foundation for creating clear, comprehensive API documentation that serves both business and technical needs while ensuring compliance and data quality requirements are met.
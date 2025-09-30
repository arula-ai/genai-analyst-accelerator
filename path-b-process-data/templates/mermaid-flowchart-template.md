# Mermaid Flowchart Template Guide

## What is Mermaid?

Mermaid is a JavaScript-based diagramming tool that renders diagrams from text descriptions. It's ideal for creating flowcharts, sequence diagrams, and other process visualizations that can be version-controlled and easily updated.

## Why Use Mermaid for Process Documentation?

- **Version Control Friendly:** Text-based diagrams can be tracked in Git
- **Maintainable:** Easy to update as processes change
- **Consistent Styling:** Automatic formatting ensures professional appearance
- **Tool Integration:** Supported in GitHub, GitLab, Notion, and many documentation platforms
- **Collaborative:** Multiple analysts can edit the same diagram

## Basic Mermaid Syntax

### Flowchart Declaration
Every Mermaid flowchart starts with a direction declaration:

```mermaid
flowchart TD
    %% TD = Top Down, LR = Left Right, RL = Right Left, BT = Bottom Top
```

### Node Shapes Reference

Different shapes convey different meanings in process flows:

```mermaid
flowchart TD
    A[Rectangle - Process Step]
    B{Diamond - Decision Point}
    C((Circle - Start/End))
    D[(Database - Data Store)]
    E[/Parallelogram - Input/Output/]
    F{{Hexagon - Preparation}}
    G[[Subroutine - Sub-process]]
```

### Connecting Nodes

```mermaid
flowchart TD
    A --> B
    B -->|Yes| C
    B -->|No| D
    C --> E
    D --> E
```

### Labels and Conditions

Use pipe symbols to add labels to connections:

```mermaid
flowchart TD
    Start((Start)) --> Input[/Enter Customer Info/]
    Input --> Validate{Valid Format?}
    Validate -->|Yes| Process[Process Application]
    Validate -->|No| Error[Show Error Message]
    Error --> Input
    Process --> End((End))
```

## Decision Points Best Practices

### Clear Yes/No Paths
Always label decision outputs clearly:

```mermaid
flowchart TD
    Check{Score > 85?}
    Check -->|Yes| Approve[Auto-Approve]
    Check -->|No| Review{Score > 60?}
    Review -->|Yes| Manual[Manual Review]
    Review -->|No| Reject[Auto-Reject]
```

### Multiple Conditions
For complex decisions, use descriptive labels:

```mermaid
flowchart TD
    CustomerType{Customer Type}
    CustomerType -->|Individual| IndividualFlow[Individual Verification]
    CustomerType -->|Business| BusinessFlow[Business Verification]
    CustomerType -->|Trust| TrustFlow[Trust Verification]
```

## Error Handling Patterns

### Error Recovery Loops
Show how errors are handled and recovery paths:

```mermaid
flowchart TD
    Upload[/Upload Document/]
    Validate{File Valid?}
    Upload --> Validate
    Validate -->|Yes| Process[Process Document]
    Validate -->|No| Error[Show Error]
    Error --> Retry{Attempts < 3?}
    Retry -->|Yes| Upload
    Retry -->|No| Support[Redirect to Support]
    Process --> Success[Document Accepted]
```

### Timeout Handling
Include timeout scenarios:

```mermaid
flowchart TD
    CallAPI[Call Verification API]
    Wait{Response in 10s?}
    CallAPI --> Wait
    Wait -->|Yes| ProcessResponse[Process Response]
    Wait -->|No| Timeout[Handle Timeout]
    Timeout --> Queue[Add to Manual Queue]
    ProcessResponse --> Success[Continue Process]
```

## Swimlane Diagrams

Use subgraphs to show different actors or systems:

```mermaid
flowchart TD
    subgraph Customer
        A[Enter Information]
        B[Upload Documents]
    end
    
    subgraph System
        C[Validate Data]
        D[Call Verification API]
        E[Generate Score]
    end
    
    subgraph Manual Review
        F[Review Application]
        G[Make Decision]
    end
    
    A --> C
    B --> D
    C --> D
    D --> E
    E --> F
    F --> G
```

## Styling and Colors

Add visual hierarchy with styling:

```mermaid
flowchart TD
    Start((Start))
    Process[Normal Process]
    Error[Error State]
    Success[Success State]
    
    classDef startEnd fill:#e1f5fe
    classDef process fill:#f3e5f5
    classDef error fill:#ffebee
    classDef success fill:#e8f5e8
    
    class Start,End startEnd
    class Process process
    class Error error
    class Success success
```

## Complete Example: Simple Verification Flow

```mermaid
flowchart TD
    Start((Start)) --> Input[/Customer Enters Data/]
    Input --> Validate{Data Valid?}
    Validate -->|No| ErrorMsg[Display Validation Errors]
    ErrorMsg --> Input
    Validate -->|Yes| CallAPI[Call Identity Verification API]
    CallAPI --> Timeout{Response < 10s?}
    Timeout -->|No| Queue[Route to Manual Review Queue]
    Timeout -->|Yes| Score{Score >= 85?}
    Score -->|Yes| Approve[Auto-Approve Account]
    Score -->|No| CheckMinimum{Score >= 60?}
    CheckMinimum -->|Yes| Manual[Send to Manual Review]
    CheckMinimum -->|No| Reject[Auto-Reject Application]
    Queue --> Manual
    Manual --> Decision{Reviewer Decision}
    Decision -->|Approve| Approve
    Decision -->|Reject| Reject
    Decision -->|Need More Info| RequestInfo[Request Additional Information]
    RequestInfo --> Input
    Approve --> SendEmail[Send Approval Email]
    Reject --> SendRejectEmail[Send Rejection Email]
    SendEmail --> End((End))
    SendRejectEmail --> End
    
    classDef startEnd fill:#e1f5fe
    classDef process fill:#f3e5f5
    classDef decision fill:#fff3e0
    classDef error fill:#ffebee
    classDef success fill:#e8f5e8
    
    class Start,End startEnd
    class Input,CallAPI,SendEmail,SendRejectEmail,RequestInfo process
    class Validate,Timeout,Score,CheckMinimum,Decision decision
    class ErrorMsg,Queue,Reject error
    class Approve,Manual success
```

## Advanced Example: Swimlane with Error Handling

```mermaid
flowchart TD
    subgraph "Customer Portal"
        A[Enter Application Data]
        B[Upload ID Document]
        C[Review Application]
        D[Submit Application]
    end
    
    subgraph "Verification Service"
        E[Validate Data Format]
        F[Check OFAC Lists]
        G[Call Credit Bureau API]
        H[Generate Risk Score]
    end
    
    subgraph "Manual Review Queue"
        I[Assign to Reviewer]
        J[Review Application Details]
        K[Make Approval Decision]
    end
    
    subgraph "Notification Service"
        L[Send Status Email]
        M[Update Customer Portal]
    end
    
    A --> E
    B --> E
    C --> D
    D --> E
    E --> Validate{Format Valid?}
    Validate -->|No| ErrorReturn[Return Validation Errors]
    ErrorReturn --> A
    Validate -->|Yes| F
    F --> OFACCheck{On OFAC List?}
    OFACCheck -->|Yes| AutoReject[Automatic Rejection]
    OFACCheck -->|No| G
    G --> APITimeout{API Response < 10s?}
    APITimeout -->|No| I
    APITimeout -->|Yes| H
    H --> ScoreCheck{Score >= 85?}
    ScoreCheck -->|Yes| AutoApprove[Automatic Approval]
    ScoreCheck -->|No| ScoreMinimum{Score >= 60?}
    ScoreMinimum -->|Yes| I
    ScoreMinimum -->|No| AutoReject
    I --> J
    J --> K
    K --> DecisionResult{Decision}
    DecisionResult -->|Approve| AutoApprove
    DecisionResult -->|Reject| AutoReject
    DecisionResult -->|More Info| InfoRequest[Request Additional Info]
    InfoRequest --> A
    AutoApprove --> L
    AutoReject --> L
    L --> M
    M --> End((End))
    
    classDef customer fill:#e3f2fd
    classDef system fill:#f3e5f5
    classDef manual fill:#fff3e0
    classDef notification fill:#e8f5e8
    classDef decision fill:#ffecb3
    classDef error fill:#ffebee
    
    class A,B,C,D customer
    class E,F,G,H system
    class I,J,K manual
    class L,M notification
    class Validate,OFACCheck,APITimeout,ScoreCheck,ScoreMinimum,DecisionResult decision
    class ErrorReturn,AutoReject error
```

## Tips for Using Mermaid with Copilot

1. **Start Simple:** Begin with basic flowcharts and add complexity incrementally
2. **Use Descriptive Node Names:** This helps Copilot understand your intent
3. **Include Error Paths:** Always ask Copilot to include error handling scenarios
4. **Request Styling:** Ask Copilot to add appropriate CSS classes for visual clarity
5. **Validate Syntax:** Copy-paste generated Mermaid code into a validator to check for errors

## Common Mermaid Syntax Errors to Avoid

- **Missing Direction:** Always start with `flowchart TD` or similar
- **Invalid Characters:** Avoid special characters in node IDs
- **Unclosed Brackets:** Ensure all node shapes are properly closed
- **Missing Arrows:** Every connection needs `-->` or similar
- **Duplicate IDs:** Each node must have a unique identifier

## Testing Your Mermaid Diagrams

Use the online Mermaid Live Editor (https://mermaid.live) to test your generated diagrams before committing to documentation.
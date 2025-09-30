# GitHub Copilot Troubleshooting Guide

## Common Issues & Solutions

### Issue 1: Copilot Not Suggesting Anything

**Symptoms:**
- No inline suggestions appear as you type
- Copilot icon shows but nothing happens

**Solutions:**

1. **Check Copilot Status**
   - Look at bottom-right status bar
   - Icon should show "Copilot ready"
   - If red X, click to view error

2. **Verify License**
   ```
   Cmd/Ctrl + Shift + P
   > GitHub Copilot: Check status
   ```
   Should show "Copilot Business/Enterprise Active"

3. **Restart Copilot**
   ```
   Cmd/Ctrl + Shift + P
   > GitHub Copilot: Restart
   ```

4. **Check File Type**
   - Copilot works best in code files (.md, .java, .ts)
   - In plaintext files, suggestions may be limited
   - Solution: Use Copilot Chat instead

---

### Issue 2: Suggestions Are Low Quality or Irrelevant

**Symptoms:**
- Copilot suggests code when you want documentation
- Suggestions don't match your context
- Output is generic or wrong

**Solutions:**

1. **Provide More Context**
   - Add comments explaining what you want
   - Include examples above your cursor
   - Reference templates or formats

2. **Use Copilot Chat Instead**
   - Chat is better for longer-form content
   - Inline suggestions are better for repetitive patterns

3. **Improve Your Prompt**
   - Use the five-part pattern (Role + Inputs + Format + Constraints + Examples)
   - Be very specific
   - Provide examples of what good looks like

**Example:**

❌ Bad prompt:
```
Create user stories
```

✅ Good prompt:
```
You are a business analyst in financial services.
Based on these stakeholder notes: [paste notes]
Create 3 user stories in this format:
As a [role], I want [capability], so that [benefit]
Each story needs 2-3 testable acceptance criteria.
Follow INVEST principles.
Example good story: [paste example]
```

---

### Issue 3: Copilot Generated PII or Sensitive Data

**Symptoms:**
- Copilot suggested real names, SSNs, account numbers
- Output includes data that looks real

**Solutions:**

1. **Never include real PII in your prompts**
   - Sanitize all inputs before pasting
   - Use synthetic data: "Customer A," "ACC-1234-5678"

2. **Enable Public Code Filter**
   - Settings > Extensions > GitHub Copilot
   - Check "Enable Public Code Filter"

3. **If Copilot generates concerning data:**
   - DO NOT use it
   - Replace with synthetic data
   - Report to your organization's Copilot admin

---

### Issue 4: Copilot Chat Not Opening

**Symptoms:**
- Ctrl/Cmd+Shift+I does nothing
- Chat panel won't appear

**Solutions:**

1. **Try Alternate Methods**
   - Click Copilot icon in sidebar
   - Or: View menu > Extensions > GitHub Copilot Chat

2. **Check Extension Enabled**
   - Extensions panel (Ctrl/Cmd+Shift+X)
   - Search "GitHub Copilot Chat"
   - Should show "Enabled"

3. **Update Extensions**
   - Outdated versions may have bugs
   - Update both Copilot and Copilot Chat extensions

4. **Reinstall**
   - Uninstall both Copilot extensions
   - Restart VS Code
   - Reinstall from marketplace

---

### Issue 5: Output Is Cut Off or Incomplete

**Symptoms:**
- Copilot generates half a story then stops
- Response ends mid-sentence
- Large documents incomplete

**Solutions:**

1. **Ask for Continuation**
   ```
   Continue from where you stopped.
   ```

2. **Break into Smaller Requests**
   - Instead of "create 10 stories"
   - Ask for 3, then 3 more, then 4 more

3. **Use Progressive Refinement**
   - First: Generate outline/structure
   - Then: Fill in each section one at a time

---

### Issue 6: Copilot Keeps Making the Same Mistake

**Symptoms:**
- You correct Copilot but next suggestion has same issue
- Pattern repeats despite feedback

**Solutions:**

1. **Add Explicit Constraint**
   ```
   Important: Do NOT include [the wrong thing]
   Instead, always [the right thing]
   ```

2. **Provide Counter-Example**
   ```
   Bad example (DO NOT DO THIS):
   [show wrong way]

   Good example (DO THIS):
   [show right way]
   ```

3. **Start Fresh Chat**
   - Current chat context may be "stuck"
   - Open new chat session

---

### Issue 7: Different Results on Each Run

**Symptoms:**
- Running same prompt gives different quality each time
- Inconsistent output

**Understanding:**
- This is expected - Copilot uses AI, not templates
- Some randomness is normal

**Solutions:**

1. **Generate Multiple Options**
   ```
   Create 3 different versions of this story so I can choose the best.
   ```

2. **Use Copilot to Compare**
   ```
   I got these two versions:
   [paste version 1]
   [paste version 2]

   Which is better for [your specific need]? Why?
   ```

3. **Lock in Good Patterns**
   - When you get great output, save it as an example
   - Use it in future prompts: "Use this format: [example]"

---

### Issue 8: Can't Get Specific Format I Need

**Symptoms:**
- Copilot generates markdown when you wanted a table
- Format doesn't match your template

**Solutions:**

1. **Show Exact Format**
   ```
   Output MUST be in exactly this format:

   [paste your template with placeholders]

   Fill in this template with the actual content.
   ```

2. **Specify Format Explicitly**
   ```
   Format requirements:
   - Use markdown table with these exact columns: [list]
   - Use bullet points, not numbered lists
   - Bold all field names
   - Include code blocks for examples
   ```

---

## Tips for Better Results

### 1. Prime Each Session
Start each Copilot Chat session with context:
```
I'm a business analyst working on customer account features for a financial services company.
I need help creating requirements documentation that follows our INVEST standards and includes compliance considerations.
```

### 2. Build Incrementally
Don't ask for everything at once:
```
Step 1: "Create a user story outline"
Step 2: "Now add acceptance criteria"
Step 3: "Now add negative test scenarios"
```

### 3. Use Critique Loops
Generate, then improve:
```
First: "Create a user story for X"
Then: "Review this story for ambiguities and gaps"
Finally: "Rewrite based on your feedback"
```

### 4. Reference Templates
Always point to examples:
```
Use the format from templates/user-story-template.md
```

### 5. Specify Constraints Early
Don't let Copilot go down wrong path:
```
Constraints:
- No implementation details
- Must include compliance considerations
- Use Gherkin format for AC
- Include traceability links
```

---

## When to NOT Use Copilot

Copilot is not appropriate for:
- Sensitive PII or confidential data
- Final decision-making (you review, you decide)
- Replacing SME consultation
- Generating content you don't understand
- Meeting regulatory obligations (use as assist only)

---

## Getting Additional Help

**During the session:**
- Ask facilitator
- Check with neighbor
- Reference solutions/ folder

**After the session:**
- GitHub Copilot documentation: https://docs.github.com/copilot
- Your organization's Copilot support channel
- Internal Copilot community/Slack

---

## Remember

- Copilot is a tool, not a replacement for analyst judgment
- Always verify output for accuracy and completeness
- You own the quality of what you commit
- When in doubt, ask a human expert
# GitHub Copilot Setup Guide

This guide walks you through installing, configuring, and testing GitHub Copilot for optimal use in requirements analysis and documentation.

## Overview

**Time Required:** 15-20 minutes  
**Prerequisites:** GitHub account with Copilot Business/Enterprise license

## Step 1: Install GitHub Copilot Extension

### For VS Code Users

1. **Open Extensions Panel**
   - Click Extensions icon in left sidebar (or press Ctrl/Cmd+Shift+X)

2. **Install GitHub Copilot**
   - Search for "GitHub Copilot"
   - Click "Install" on the extension by GitHub
   - Wait for installation to complete

3. **Install GitHub Copilot Chat**
   - Search for "GitHub Copilot Chat"
   - Click "Install" on the extension by GitHub
   - This is a separate extension - you need both!

4. **Verify Installation**
   - Look at bottom-right status bar
   - You should see a Copilot icon (looks like two brackets or pilot wings)
   - Icon may show "Copilot: Disabled" or require sign-in

### For JetBrains IDE Users

1. **Open Plugin Settings**
   - File → Settings (Windows/Linux) or IntelliJ IDEA → Preferences (Mac)
   - Navigate to Plugins

2. **Install GitHub Copilot**
   - Click "Marketplace" tab
   - Search for "GitHub Copilot"
   - Click "Install"
   - Click "Restart IDE" when prompted

3. **Verify Installation**
   - After restart, look for Copilot icon in status bar (bottom of window)
   - Icon may require sign-in

## Step 2: Sign In to GitHub

### First-Time Authentication

1. **Initiate Sign-In**
   - Click the Copilot icon in status bar
   - Select "Sign in to GitHub"
   - A browser window will open

2. **Authorize GitHub Copilot**
   - Log in to GitHub if prompted
   - Review permissions requested
   - Click "Authorize GitHub Copilot"
   - You may need to authorize your organization

3. **Complete Authentication**
   - Browser will show "Success!" message
   - Return to your IDE
   - Copilot icon should now show "Copilot: Ready" or similar

4. **Troubleshooting Authentication**
   - **If browser doesn't open:** Copy the URL shown in IDE and paste in browser
   - **If "Access Denied":** Your organization hasn't assigned you a license - contact admin
   - **If "Already signed in but not working":** Sign out and sign in again

## Step 3: Verify License Status

### Check Your License

**VS Code:**
1. Open Command Palette (Ctrl/Cmd+Shift+P)
2. Type: "GitHub Copilot: Check Status"
3. You should see "Copilot Business" or "Copilot Enterprise"

**JetBrains:**
1. Click Copilot icon in status bar
2. Select "Copilot Status"
3. Verify license type is shown

### Expected License Types

- ✅ **Copilot Business** - Organization license, perfect for this training
- ✅ **Copilot Enterprise** - Enterprise license with additional features
- ❌ **Copilot Individual** - Personal license, may not have Business features
- ❌ **No Active Subscription** - Contact your organization admin

## Step 4: Enable Public Code Filter

**Why This Matters:** Public Code Filter prevents Copilot from suggesting code that matches public GitHub repositories, reducing license and IP risks. This is required in regulated environments.

### VS Code Configuration

1. **Open Settings**
   - File → Preferences → Settings (or Ctrl/Cmd+,)

2. **Navigate to Copilot Settings**
   - In search bar, type: "copilot"
   - Or: Extensions → GitHub Copilot → Extension Settings

3. **Enable Public Code Filter**
   - Find setting: "GitHub Copilot: Enable Public Code Filter" or similar
   - Check the box to enable
   - Some versions label this "Enable Public Code Duplication Detection"

4. **Verify Setting**
   - Setting should show checkbox as enabled
   - Copilot icon in status bar may show "Filter: On" (not all versions)

### JetBrains Configuration

1. **Open Settings**
   - File → Settings (Windows/Linux) or IntelliJ IDEA → Preferences (Mac)

2. **Navigate to Copilot Settings**
   - Tools → GitHub Copilot

3. **Enable Public Code Filter**
   - Look for "Enable public code filter" or "Block suggestions matching public code"
   - Check the box
   - Click "Apply" and "OK"

### If You Can't Find This Setting

Some Copilot versions or organization policies may:
- Have this enabled by default at organization level
- Not expose this setting in UI

**What to do:** Check with your organization's Copilot admin. If they confirm it's enabled at org level, you're good to proceed.

## Step 5: Configure Settings for Optimal Analyst Experience

### Recommended VS Code Settings

Open Settings (Ctrl/Cmd+,) and configure:

1. **Editor: Inline Suggest**
   - Editor › Inline Suggest: Enabled ✅
   - This allows Copilot to show suggestions as you type

2. **Copilot: Enable Auto Completions**
   - GitHub Copilot: Enable Auto Completions ✅
   - Suggestions appear automatically

3. **Files: Auto Save**
   - Files › Auto Save: "afterDelay" (recommended)
   - This prevents losing work as you experiment

### Recommended JetBrains Settings

In Settings → Tools → GitHub Copilot:

1. **Enable Completions**
   - "Show GitHub Copilot completions" ✅

2. **Copilot Chat Window**
   - Enable Copilot chat window
   - Choose preferred location (typically right side panel)

### Optional but Helpful

**Disable Competing AI Extensions** (if installed):
- TabNine
- Kite
- Other code completion tools

These can conflict with Copilot. For this training, use only Copilot.

## Step 6: Test Copilot Inline Suggestions

Let's verify Copilot is suggesting content as you type.

### Test in VS Code or JetBrains

1. **Create a New File**
   - File → New File
   - Save as: `copilot-test.md`

2. **Type the Following**
   ```
   # User Story Template
   
   As a
   ```

3. **Wait 2 Seconds**
   - Copilot should suggest completion in gray text
   - Example: "customer, I want to log in to my account, so that..."

4. **Accept or Reject**
   - Press **Tab** to accept the suggestion
   - Press **ESC** to dismiss
   - Press **Alt+]** (or Option+]) to see next suggestion

5. **Expected Behavior**
   - You see gray suggestion text
   - Pressing Tab accepts it
   - Suggestions relate to user stories (because of file context)

### Troubleshooting Inline Suggestions

**No suggestions appear:**
- Check Copilot icon in status bar - should say "Ready"
- Ensure file is saved with .md extension
- Wait 3-5 seconds after typing
- Try in a code file (.js, .py) to see if suggestions work there

**Suggestions are code instead of documentation:**
- Normal! File type and context matter
- For longer documentation, use Copilot Chat (next step)

**Suggestions are off-topic:**
- Provide more context at top of file
- Use comments to guide: `# This is a user story for customer login`

## Step 7: Test Copilot Chat

Copilot Chat is your primary tool for generating requirements documentation.

### Open Copilot Chat

**VS Code:**
- Press **Ctrl+Shift+I** (Windows/Linux) or **Cmd+Shift+I** (Mac)
- Or: Click chat icon in left sidebar
- Or: View → Extensions → GitHub Copilot Chat

**JetBrains:**
- Press **Alt+C** (Windows/Linux) or **Option+C** (Mac)
- Or: Click Copilot icon → Open Copilot Chat
- Or: Tools → GitHub Copilot → Open Copilot Chat

### Run Verification Test

In the Copilot Chat window, type:

```
Create a sample user story for customer login
```

**Expected Response:**
```
As a customer
I want to log in to my account using my email and password
So that I can access my personal information and account settings

Acceptance Criteria:
- AC1: Customer can enter email and password
- AC2: System validates credentials
- AC3: Successful login redirects to dashboard
```

### What This Tests

- ✅ Copilot Chat is working
- ✅ You can make requests and get responses
- ✅ Output is formatted and relevant
- ✅ Response quality is reasonable

### Troubleshooting Chat

**Chat window won't open:**
- Verify "GitHub Copilot Chat" extension is installed (separate extension!)
- Try alternate method (keyboard shortcut, menu, icon)
- Restart IDE

**Error: "Unable to connect":**
- Check internet connection
- Check if firewall/proxy is blocking
- Try signing out and back in

**Response is very slow (>30 seconds):**
- May be temporary server issue
- Try again
- If persistent, contact IT support

**Response is off-topic:**
- Normal for complex or ambiguous requests
- Solution: Be more specific in your prompt
- Reference templates: "Use this format: [paste format]"

## Step 8: Understand Copilot Behavior

Before starting the lab, understand how Copilot works:

### What Copilot Sees

Copilot uses context from:
1. **Current file** - Everything you've typed so far
2. **Open files** - Other tabs in your editor
3. **File type** - .md gets documentation, .py gets Python code
4. **Your prompt** - What you type in Chat

### What Copilot Doesn't See

- ❌ Your entire file system (only open files)
- ❌ Private repositories (unless explicitly shared)
- ❌ Your previous Chat sessions (each session is fresh)
- ❌ Real-time data or current events

### Best Practices

1. **Provide Context**
   - Start prompts with role: "You are a business analyst in financial services"
   - Reference templates: "Use this format: [paste]"
   - Include examples: "Like this: [paste example]"

2. **Be Specific**
   - ❌ "Create user stories"
   - ✅ "Create 3 user stories in INVEST format with Gherkin acceptance criteria"

3. **Iterate**
   - First response won't be perfect
   - Refine: "Make the business value more specific"
   - Critique: "Review this for ambiguities"

4. **Verify Everything**
   - Copilot can make mistakes
   - Always apply professional judgment
   - You own the quality, not Copilot

## Step 9: Review Security Guidelines

Before using Copilot on real work, review security requirements:

**Must Read:** [../SECURITY.md](../SECURITY.md)

### Critical Security Rules

1. **Never include PII** in prompts
   - No real customer names, SSNs, account numbers
   - Use synthetic data: "Customer A," "ACC-1234"

2. **Enable Public Code Filter** (you did this in Step 4)

3. **Verify before committing**
   - Use checklist: [verify-before-commit-checklist.md](verify-before-commit-checklist.md)

4. **Document sources and rationale**
   - Cite where requirements came from
   - Include "Generated with GitHub Copilot" in commits

## Final Verification Test

Complete this test to confirm you're ready for the lab:

### Create a Sample User Story

1. Open Copilot Chat
2. Paste this prompt:

```
You are a business analyst in financial services.

Create one user story for "customer sets up account balance alerts"

Format:
- As a [role], I want [capability], so that [benefit]
- 2-3 acceptance criteria in Given/When/Then format
- Priority: High/Medium/Low
- Risk: Any dependencies or concerns

Use INVEST principles. Be specific, not vague.
```

3. **Review the response**

Does it have:
- [ ] Clear user story format?
- [ ] Specific acceptance criteria?
- [ ] Appropriate level of detail?
- [ ] Professional language?

If yes, **you're ready!** 🎉

If no, review troubleshooting sections or ask facilitator for help.

## Next Steps

Setup complete? Here's what to do next:

1. ✅ **Review the verify-before-commit checklist**
   - [verify-before-commit-checklist.md](verify-before-commit-checklist.md)

2. ✅ **Choose your learning path**
   - [Path A: Backlog from Notes](../path-a-backlog/README.md) - Product-focused
   - [Path B: Process & Data](../path-b-process-data/README.md) - Systems-focused

3. ✅ **Bookmark troubleshooting guide**
   - [Copilot Troubleshooting](../resources/copilot-troubleshooting.md)

## Getting Help During the Lab

**Common Issues:**
- Copilot stopped working → Check status bar, restart extension
- Suggestions are vague → Add more context, be more specific
- Wrong format → Show exact template in prompt
- Output cut off → Ask "continue from where you stopped"

**Full troubleshooting:** [../resources/copilot-troubleshooting.md](../resources/copilot-troubleshooting.md)

---

**Ready to begin the hands-on exercises?** 

Choose your path and let's start transforming messy inputs into well-formed requirements! 🚀
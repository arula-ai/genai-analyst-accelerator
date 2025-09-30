# Prerequisites Checklist

Before beginning the hands-on lab, verify that you have everything you need:

## Required Access & Licenses

- [ ] **GitHub Copilot Business/Enterprise license active**
  - Verify at: GitHub Settings → Copilot
  - You should see "Copilot Business" or "Copilot Enterprise" status
  - If not active, contact your GitHub organization admin

- [ ] **Access to training GitHub organization/repository**
  - You should be able to clone this repository
  - You should have permission to create issues (for Exercise 3)
  - Test: Can you view this file on GitHub?

## Development Environment

- [ ] **VS Code or JetBrains IDE installed**
  - VS Code: Download from https://code.visualstudio.com/
  - JetBrains (IntelliJ, PyCharm, etc.): Download from https://www.jetbrains.com/
  - Version: Any recent version (VS Code 1.80+, JetBrains 2023.1+)

- [ ] **GitHub Copilot extension installed and enabled**
  - **VS Code:** 
    - Extensions panel (Ctrl/Cmd+Shift+X)
    - Search "GitHub Copilot"
    - Install both "GitHub Copilot" and "GitHub Copilot Chat"
    - Status bar (bottom right) should show Copilot icon
  - **JetBrains:**
    - Settings → Plugins
    - Search "GitHub Copilot"
    - Install and restart IDE
    - Status bar should show Copilot icon

- [ ] **Markdown preview working in IDE**
  - **VS Code:** Built-in. Open any .md file, click preview icon
  - **JetBrains:** Built-in. Right-click .md file → Open Preview
  - Test: Can you see this file formatted nicely?

## GitHub Copilot Configuration

- [ ] **Public Code Filter enabled**
  - **Why:** Reduces risk of license/IP issues, required for regulated environments
  - **How to enable:**
    - VS Code: Settings → Extensions → GitHub Copilot → Enable "Public Code Filter"
    - JetBrains: Settings → Tools → GitHub Copilot → Check "Enable public code filter"
  - **Verify:** Status bar should indicate filter is on

- [ ] **External context providers disabled** (Optional but recommended)
  - **Why:** Ensures Copilot only uses your local context, not external sources
  - **How:** Check Copilot settings for context/indexing options
  - Not all versions have this setting - skip if you don't see it

- [ ] **Copilot Chat working**
  - **Test:** Open Copilot Chat (Ctrl/Cmd+Shift+I)
  - Type: "What is a user story?"
  - You should get a response within a few seconds
  - If error, see troubleshooting below

## GitHub Access

- [ ] **Can create GitHub Issues in training project**
  - Navigate to repository on GitHub
  - Click "Issues" tab
  - You should see "New Issue" button (if not, you don't have write access)
  - Contact facilitator if you need access

## Knowledge Prerequisites

- [ ] **Basic familiarity with user stories**
  - You should understand: "As a [role], I want [capability], so that [benefit]"
  - If new to user stories, read: resources/prompt-pattern-guide.md (5 minutes)

- [ ] **Basic familiarity with Agile/Scrum concepts**
  - Terms like: sprint, backlog, epic, acceptance criteria
  - If unfamiliar, ask facilitator for quick primer

- [ ] **No coding experience required!**
  - This lab is designed for analysts, not developers
  - We'll create documentation, not code

## Environment Verification

Complete this quick test to verify your setup:

### Test 1: Copilot Inline Suggestions

1. Create a new file: `test-copilot.md`
2. Type: `# User Story Template`
3. Press Enter and wait 2 seconds
4. ✅ Copilot should suggest content (you'll see grayed-out text)
5. Press Tab to accept or ESC to dismiss

**If nothing appears:** See troubleshooting section below

### Test 2: Copilot Chat

1. Open Copilot Chat (Ctrl/Cmd+Shift+I or click Copilot icon)
2. Type: `Create a sample user story for customer login`
3. ✅ You should get a response with a formatted user story

**If you get an error:** See troubleshooting section below

### Test 3: Markdown Preview

1. Open any .md file from this repository
2. Activate preview (VS Code: click preview icon; JetBrains: right-click → preview)
3. ✅ You should see formatted, readable content (not raw markdown)

## Troubleshooting

### Issue: "Copilot not signed in"

**Solution:**
1. Click Copilot icon in status bar
2. Select "Sign in to GitHub"
3. Follow browser authentication flow
4. Grant necessary permissions
5. Return to IDE - should now show "Copilot ready"

### Issue: "Copilot access denied" or "No license"

**Solution:**
- Your organization may not have assigned you a license
- Contact your GitHub organization admin
- Provide your GitHub username
- Wait for license assignment (usually instant)
- Restart IDE after license is assigned

### Issue: Copilot Chat not opening

**Solution:**
1. Ensure "GitHub Copilot Chat" extension is installed (separate from base Copilot)
2. Try alternate shortcut: View menu → Extensions → GitHub Copilot Chat
3. If still not working, reinstall both Copilot extensions
4. Restart IDE

### Issue: Copilot suggesting code instead of documentation

**This is normal!** Copilot behavior depends on:
- File type (.md files get documentation suggestions)
- Context (what you've typed recently)
- Your prompt specificity

**Solution:** Use Copilot Chat for longer-form content like stories and requirements

### Issue: Public Code Filter option missing

**Don't worry!** Not all Copilot versions have this setting exposed in UI.
- It may be enabled by default at your organization level
- Check with your Copilot admin
- Proceed with the lab regardless

## Still Having Issues?

- **During session:** Ask the facilitator
- **Before session:** Contact training coordinator
- **Technical issues:** Contact IT support

## Ready to Begin?

Once all boxes are checked:

✅ **You're ready!** Proceed to [copilot-setup.md](copilot-setup.md) for detailed configuration

✅ **Already configured?** Jump to [verify-before-commit-checklist.md](verify-before-commit-checklist.md) to understand quality standards

✅ **Ready for the lab?** Choose your path:
- [Path A: Backlog from Notes](../path-a-backlog/README.md)
- [Path B: Process & Data](../path-b-process-data/README.md)

---

**Pro Tip:** Bookmark the [Copilot troubleshooting guide](../resources/copilot-troubleshooting.md) - you'll want it handy during the lab!
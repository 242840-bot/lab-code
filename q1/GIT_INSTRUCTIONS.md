# Git Setup - Two Meaningful Commits

## Commit 1: Frontend Setup

```bash
# Initialize repository
git init

# Configure git (first time only)
git config user.name "Your Name"
git config user.email "your.email@example.com"

# Add all files
git add .

# Create first commit
git commit -m "Initial setup: HTML5, CSS3, Bootstrap form and UI"
```

**What's included:**
- index.html - Responsive page with form
- style.css - Styling
- script.js - Basic DOM setup

---

## Commit 2: Backend Implementation

After ensuring server.js is working:

```bash
# Add the backend files
git add server.js

# Create second commit
git commit -m "Add Node.js Express API with JSON data storage"
```

**What's included:**
- server.js - REST API endpoints
- attendees.json - Data storage

---

## View Commits

```bash
# See all commits
git log

# See short version
git log --oneline
```

Should show:
```
abc1234 Add Node.js Express API with JSON data storage
def5678 Initial setup: HTML5, CSS3, Bootstrap form and UI
```

---

## If You Make Mistakes

```bash
# See what changed
git status

# See changes in a file
git diff filename

# Undo last commit (keep files)
git reset --soft HEAD~1

# Undo last commit (discard files)
git reset --hard HEAD~1
```

---

## For Windows PowerShell Issues

If you get execution policy errors:

**Option 1: Use Command Prompt instead**
- Press Win+R
- Type: `cmd`
- Run git commands in cmd.exe

**Option 2: Use Git Bash**
- Download: https://git-scm.com/download/win
- Run commands in Git Bash terminal

**Option 3: Use Visual Studio Code**
- Press Ctrl+` to open terminal
- Terminal should allow git commands

---

## Quick Checklist

- [ ] Git installed: `git --version`
- [ ] Repository initialized: `git init`
- [ ] All files added: `git add .`
- [ ] First commit made: `git commit -m "..."`
- [ ] Server code committed: `git commit -m "..."`
- [ ] View commits: `git log --oneline`

---

## What to Tell in Viva

"I made two meaningful commits:
1. **First commit** - Created the HTML, CSS, and Bootstrap responsive UI with the registration form
2. **Second commit** - Implemented the Node.js Express REST API with GET, POST, DELETE endpoints and JSON file storage

Each commit represents a complete working feature."

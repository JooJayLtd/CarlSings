# Infrastructure Scripts

Automation and infrastructure scripts for the Carl Sings project.

## Workflow Helper Scripts

### next-task.sh

Shows the next open GitHub issue to work on.

**Usage:**
```bash
./infra/next-task.sh
```

**Output:**
- Issue number, title, milestone, and labels
- Quick links to view details or start working

---

### start-task.sh

Fetches issue details and creates a feature branch.

**Usage:**
```bash
./infra/start-task.sh <issue-number>
```

**Example:**
```bash
./infra/start-task.sh 22
```

**What it does:**
1. Fetches issue details from GitHub
2. Checks out `main` and pulls latest changes
3. Creates feature branch named `carls-X-description`
4. Displays issue details

---

### finish-task.sh

Pushes branch, creates PR, and links to issue.

**Usage:**
```bash
./infra/finish-task.sh <issue-number>
```

**Example:**
```bash
./infra/finish-task.sh 22
```

**What it does:**
1. Validates you're on a feature branch
2. Checks for uncommitted changes
3. Pushes branch to remote
4. Creates PR with auto-close reference (`Closes #X`)
5. Returns PR URL

**Note:** Make sure to commit your changes before running this script.

---

## Migration Script

### migrate-todo-to-issues.sh

Migrates uncompleted tasks from TODO.md to GitHub Issues.

### What it does:

1. **Creates Labels** - 13 phase-specific labels with color coding
2. **Creates Milestones** - One milestone per phase
3. **Creates Issues** - One issue per uncompleted task with:
   - Title: `[CARLS-X] Task description`
   - Labels: Phase-specific label
   - Milestone: Corresponding phase
   - Body: Detailed task information

### Prerequisites:

- GitHub CLI (`gh`) installed: https://cli.github.com/
- Authenticated with GitHub: `gh auth login`
- Repository must be pushed to GitHub

### Usage:

```bash
./infra/migrate-todo-to-issues.sh
```

### What gets migrated:

- ✅ Only **uncompleted tasks** (`- [ ] [CARLS-X]`)
- ❌ Skips **completed tasks** (`- [x] [CARLS-X]`)
- ❌ Skips **strikethrough tasks** (already handled differently)

### After migration:

View created issues:
```bash
gh issue list
```

Or visit: `https://github.com/YOUR_USERNAME/CarlSings/issues`

### Notes:

- Script is **idempotent** for labels/milestones (safe to re-run)
- Issues will be created as **open** by default
- Each issue includes a link back to its TODO.md origin
- Currently creates **58 issues** from remaining tasks

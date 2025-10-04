# Infrastructure Scripts

Automation and infrastructure scripts for the Carl Sings project.

## migrate-todo-to-issues.sh

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

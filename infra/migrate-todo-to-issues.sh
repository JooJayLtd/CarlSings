#!/bin/bash

# migrate-todo-to-issues.sh
# Migrates TODO.md tasks to GitHub Issues with proper labels and milestones

set -e

echo "🚀 Starting migration of TODO.md to GitHub Issues..."

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if gh CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI (gh) is not installed."
    echo "Install it from: https://cli.github.com/"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub CLI."
    echo "Run: gh auth login"
    exit 1
fi

# Get repository info
REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
echo -e "${BLUE}Repository: $REPO${NC}"

# Create labels
echo -e "\n${YELLOW}Creating labels...${NC}"
labels=(
    "phase-1-setup:0ea5e9:Phase 1 - Project Setup"
    "phase-2-design:8b5cf6:Phase 2 - Design System"
    "phase-3-types:ec4899:Phase 3 - Core Types"
    "phase-4-validation:f97316:Phase 4 - Validation"
    "phase-5-ui:84cc16:Phase 5 - UI Components"
    "phase-6-layout:14b8a6:Phase 6 - Layout"
    "phase-7-categories:06b6d4:Phase 7 - Categories Pages"
    "phase-8-entries:3b82f6:Phase 8 - Entries Pages"
    "phase-9-content:6366f1:Phase 9 - Content System"
    "phase-10-data:a855f7:Phase 10 - Data Layer"
    "phase-11-pages:d946ef:Phase 11 - Additional Pages"
    "phase-12-testing:f43f5e:Phase 12 - Testing"
    "phase-13-polish:eab308:Phase 13 - Polish & SEO"
)

for label in "${labels[@]}"; do
    IFS=':' read -r name color description <<< "$label"
    gh label create "$name" --color "$color" --description "$description" --force 2>/dev/null || true
    echo -e "${GREEN}✓${NC} Created label: $name"
done

# Create milestones
echo -e "\n${YELLOW}Creating milestones...${NC}"
milestones=(
    "Phase 1: Project Setup & Dependencies"
    "Phase 2: Design System & Theme"
    "Phase 3: Core Types & Configuration"
    "Phase 4: Validation & Constants"
    "Phase 5: More UI Components"
    "Phase 6: Root Layout Enhancement"
    "Phase 7: Categories Pages"
    "Phase 8: Entries Pages"
    "Phase 9: Content System (File-based)"
    "Phase 10: Data Access Layer (File-based)"
    "Phase 11: Additional Pages"
    "Phase 12: Testing & Quality"
    "Phase 13: Polish & Basic SEO"
)

for milestone in "${milestones[@]}"; do
    gh api repos/$REPO/milestones -f title="$milestone" 2>/dev/null || true
    echo -e "${GREEN}✓${NC} Created milestone: $milestone"
done

# Parse TODO.md and create issues
echo -e "\n${YELLOW}Creating issues from TODO.md...${NC}"

current_phase=""
current_phase_label=""
issue_count=0

while IFS= read -r line; do
    # Detect phase headers
    if [[ $line =~ ^##\ Phase\ ([0-9]+):\ (.+)$ ]]; then
        phase_num="${BASH_REMATCH[1]}"
        current_phase="${BASH_REMATCH[2]}"

        # Map phase number to label
        case $phase_num in
            1) current_phase_label="phase-1-setup" ;;
            2) current_phase_label="phase-2-design" ;;
            3) current_phase_label="phase-3-types" ;;
            4) current_phase_label="phase-4-validation" ;;
            5) current_phase_label="phase-5-ui" ;;
            6) current_phase_label="phase-6-layout" ;;
            7) current_phase_label="phase-7-categories" ;;
            8) current_phase_label="phase-8-entries" ;;
            9) current_phase_label="phase-9-content" ;;
            10) current_phase_label="phase-10-data" ;;
            11) current_phase_label="phase-11-pages" ;;
            12) current_phase_label="phase-12-testing" ;;
            13) current_phase_label="phase-13-polish" ;;
        esac

        echo -e "\n${BLUE}Processing Phase $phase_num: $current_phase${NC}"
        continue
    fi

    # Parse uncompleted tasks (- [ ] pattern)
    if [[ $line =~ ^-\ \[\ \]\ \[CARLS-([0-9]+)\]\ (.+)$ ]]; then
        task_num="${BASH_REMATCH[1]}"
        task_description="${BASH_REMATCH[2]}"

        # Clean up task description (remove strikethrough and notes in parentheses at end)
        task_description=$(echo "$task_description" | sed 's/ (.*)//')

        # Create issue title
        issue_title="[CARLS-$task_num] $task_description"

        # Create issue body
        issue_body="**Phase:** $current_phase

**Task:** $task_description

**Original TODO.md entry:** CARLS-$task_num

---
_This issue was automatically created from TODO.md_"

        # Create the issue
        if [ -n "$current_phase_label" ]; then
            gh issue create \
                --title "$issue_title" \
                --body "$issue_body" \
                --label "$current_phase_label" \
                --milestone "Phase ${phase_num}: $current_phase" > /dev/null

            echo -e "${GREEN}✓${NC} Created issue: $issue_title"
            ((issue_count++))
        fi
    fi
done < TODO.md

echo -e "\n${GREEN}✅ Migration complete!${NC}"
echo -e "${BLUE}Created $issue_count issues${NC}"
echo -e "\nView issues: ${YELLOW}gh issue list${NC}"
echo -e "Or visit: ${YELLOW}https://github.com/$REPO/issues${NC}"

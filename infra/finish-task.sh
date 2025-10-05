#!/bin/bash

# finish-task.sh
# Commits changes, pushes branch, creates PR, and links to issue

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Check if issue number provided
if [ -z "$1" ]; then
  echo -e "${RED}❌ Error: Please provide an issue number${NC}"
  echo "Usage: ./infra/finish-task.sh <issue-number>"
  echo "Example: ./infra/finish-task.sh 22"
  exit 1
fi

ISSUE_NUMBER=$1

# Get current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

# Don't allow finishing from main
if [ "$CURRENT_BRANCH" = "main" ]; then
  echo -e "${RED}❌ Error: Cannot finish task from main branch${NC}"
  echo "Please checkout your feature branch first"
  exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
  echo -e "${RED}❌ Error: You have uncommitted changes${NC}"
  echo "Please commit your changes first"
  exit 1
fi

echo -e "${BLUE}🚀 Finishing task for issue #$ISSUE_NUMBER${NC}\n"

# Fetch issue details
ISSUE_TITLE=$(gh issue view "$ISSUE_NUMBER" --json title -q .title)

# Push branch to remote
echo -e "${YELLOW}Pushing branch to remote...${NC}"
git push -u origin "$CURRENT_BRANCH"

# Create PR
echo -e "${YELLOW}Creating pull request...${NC}"

PR_BODY="## Summary

Implements the changes described in #$ISSUE_NUMBER.

## Related Issue

Closes #$ISSUE_NUMBER

## Changes

<!-- Automatically filled based on commits -->

---

Co-Authored-By: Basil <noreply@anthropic.com>"

PR_URL=$(gh pr create \
  --title "$ISSUE_TITLE" \
  --body "$PR_BODY" \
  --assignee @me)

echo -e "\n${GREEN}✓ Pull request created!${NC}"
echo -e "${BLUE}PR URL:${NC} $PR_URL"
echo -e "\n${YELLOW}Next steps:${NC}"
echo -e "1. Wait for CI checks to pass"
echo -e "2. Review the PR"
echo -e "3. Merge when ready (issue #$ISSUE_NUMBER will auto-close)"

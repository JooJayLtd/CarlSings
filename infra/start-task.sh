#!/bin/bash

# start-task.sh
# Fetches issue details and creates a feature branch

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
  echo "Usage: ./infra/start-task.sh <issue-number>"
  echo "Example: ./infra/start-task.sh 22"
  exit 1
fi

ISSUE_NUMBER=$1

# Check if issue exists
if ! gh issue view "$ISSUE_NUMBER" &> /dev/null; then
  echo -e "${RED}❌ Error: Issue #$ISSUE_NUMBER not found${NC}"
  exit 1
fi

echo -e "${BLUE}🚀 Starting work on issue #$ISSUE_NUMBER${NC}\n"

# Fetch issue details
ISSUE_TITLE=$(gh issue view "$ISSUE_NUMBER" --json title -q .title)
ISSUE_BODY=$(gh issue view "$ISSUE_NUMBER" --json body -q .body)

# Extract CARLS number from title if exists
CARLS_NUM=$(echo "$ISSUE_TITLE" | grep -oE 'CARLS-[0-9]+' | head -1 || echo "issue-$ISSUE_NUMBER")

# Create branch name from CARLS number and sanitized title
BRANCH_TITLE=$(echo "$ISSUE_TITLE" | sed 's/\[CARLS-[0-9]*\] //' | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-//' | sed 's/-$//' | cut -c1-50)
BRANCH_NAME=$(echo "$CARLS_NUM-$BRANCH_TITLE" | tr '[:upper:]' '[:lower:]')

# Ensure we're on main and up to date
echo -e "${YELLOW}Checking out main branch...${NC}"
git checkout main
git pull origin main

# Create and checkout feature branch
echo -e "${YELLOW}Creating branch: $BRANCH_NAME${NC}"
git checkout -b "$BRANCH_NAME"

# Display issue details
echo -e "\n${GREEN}✓ Branch created: $BRANCH_NAME${NC}\n"
echo -e "${BLUE}Issue Details:${NC}"
echo -e "Title: $ISSUE_TITLE\n"
echo -e "${BLUE}Description:${NC}"
echo "$ISSUE_BODY"
echo ""
echo -e "${GREEN}Ready to work!${NC}"
echo -e "${BLUE}When done, run:${NC} ./infra/finish-task.sh $ISSUE_NUMBER"

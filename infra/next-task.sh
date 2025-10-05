#!/bin/bash

# next-task.sh
# Shows the next open issue to work on (sorted by milestone and issue number)

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📋 Next Task to Work On${NC}\n"

# Get all open issues and sort by CARLS number extracted from title
ISSUE=$(gh issue list \
  --state open \
  --limit 100 \
  --json number,title,milestone,labels \
  --jq 'map(select(.title | test("\\[CARLS-[0-9]+\\]"))) |
        map(.carls_num = (.title | capture("\\[CARLS-(?<num>[0-9]+)\\]") | .num | tonumber)) |
        sort_by(.carls_num) |
        .[0]')

if [ -z "$ISSUE" ] || [ "$ISSUE" = "null" ]; then
  echo -e "${YELLOW}🎉 No open issues! All tasks completed.${NC}"
  exit 0
fi

# Parse issue details
ISSUE_NUMBER=$(echo "$ISSUE" | jq -r '.number')
ISSUE_TITLE=$(echo "$ISSUE" | jq -r '.title')
MILESTONE=$(echo "$ISSUE" | jq -r '.milestone.title // "No milestone"')
LABELS=$(echo "$ISSUE" | jq -r '.labels[].name' | tr '\n' ', ' | sed 's/,$//')

echo -e "${GREEN}Issue #$ISSUE_NUMBER${NC}"
echo -e "Title: $ISSUE_TITLE"
echo -e "Milestone: $MILESTONE"
echo -e "Labels: ${LABELS:-None}"
echo ""
echo -e "${BLUE}View details:${NC} gh issue view $ISSUE_NUMBER"
echo -e "${BLUE}Start working:${NC} ./infra/start-task.sh $ISSUE_NUMBER"

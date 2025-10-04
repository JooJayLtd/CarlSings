# GitHub Actions Workflows

## CI Workflow (`ci.yml`)

Runs on every pull request and push to `main`.

### Jobs

1. **Lint** - Runs ESLint to check code quality
2. **Build** - Builds the Next.js application with Turbopack
3. **Type Check** - Runs TypeScript compiler to verify types
4. **Test** - Runs test suite (currently optional, will be required once tests are added)
5. **All Checks** - Summary job that ensures all checks passed

### Required Status Checks

To enable branch protection, configure these required checks in GitHub:
1. Go to Settings → Branches → Branch protection rules
2. Add rule for `main` branch
3. Enable "Require status checks to pass before merging"
4. Select these checks:
   - `Lint`
   - `Build`
   - `Type Check`
   - `All Checks Passed`

### How It Works

```
PR Created → CI Runs → All Checks Must Pass → Review → Merge → Deploy (Vercel)
```

### Workflow Triggers

- **Pull Request:** Runs on any PR targeting `main`
- **Push to main:** Runs after merge (sanity check)

### Caching

Uses npm cache to speed up dependency installation across runs.

### Node Version

Currently set to Node.js 20 (matches local development).

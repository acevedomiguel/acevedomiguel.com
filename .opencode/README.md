# OpenCode Configuration

This project uses **OpenSpec workflow** with both global and project-level configuration.

## 🌍 Global + Project Configuration

### Global Configuration
- **Location:** `~/.opencode/config.json`
- **Applies to:** ALL projects on this system
- **Templates:** `~/.opencode/templates/`

### Project Configuration
- **Location:** `.opencode/config.json` (this directory)
- **Purpose:** Project-specific overrides (optional)
- **Templates:** `.opencode/templates/` (optional, uses global if not present)

### Configuration Precedence
1. **Project-level** (`.opencode/config.json`) - Overrides global
2. **Global** (`~/.opencode/config.json`) - System-wide defaults ✓
3. **Built-in** - OpenCode defaults

## 📋 Check Global Status

Run this command from anywhere:
```bash
opsx-status
# or
~/.opencode/verify-setup.sh
```

## What This Means

Every session in **ANY project** will automatically use OpenSpec:

1. **Start new work**: OpenSpec creates structured change
2. **Continue work**: Follow guided workflow
3. **Apply changes**: Implement tasks systematically
4. **Archive work**: Document and complete

## Configuration

### Global Config
See `~/.opencode/config.json` for system-wide settings.

### Project Config (This Project)
See `.opencode/config.json` for project-specific overrides.

### Key Settings:

- `workflow.default`: `"openspec"` - Always use OpenSpec workflow
- `workflow.autoStart`: `true` - Automatically start OpenSpec for new work
- `workflow.enforceOpenSpec`: `true` - Require OpenSpec for all changes
- `openspec.autoCreateChange`: `true` - Auto-create change when needed
- `preferences.useGlobalTemplates`: `true` - Use templates from `~/.opencode/templates/`

## Directory Structure

### Global Structure
```
~/.opencode/
├── config.json           # Global configuration
├── README.md             # Global documentation
├── QUICK_REFERENCE.md    # Command reference
├── templates/            # Shared templates for all projects
│   ├── feature-template.md
│   ├── bugfix-template.md
│   ├── refactor-template.md
│   └── change-template.md
├── archive/              # Global archive (optional)
└── verify-setup.sh       # Setup verification script
```

### Project Structure (This Project)
```
.opencode/
├── config.json           # Project configuration (can override global)
├── README.md             # This file
├── QUICK_REFERENCE.md    # Quick reference
├── changes/              # Active OpenSpec changes (gitignored)
├── archive/              # Completed changes (committed to git)
└── templates/            # Project templates (optional, uses global if not present)
```

## OpenSpec Commands

Available in **all projects**:

- `/opsx-new` - Start a new OpenSpec change
- `/opsx-continue` - Continue with next artifact
- `/opsx-apply` - Implement tasks from change
- `/opsx-verify` - Verify implementation
- `/opsx-archive` - Archive completed change
- `/opsx-explore` - Explore and clarify ideas
- `/opsx-sync` - Sync delta specs to main specs
- `/opsx-bulk-archive` - Archive multiple changes
- `/opsx-ff` - Fast-forward through all artifacts

## Shell Aliases (Global)

Run `opsx-status` from anywhere to check setup status!

Available aliases:
- `opsx-status` - Check OpenCode setup
- `opsx-config` - View global config
- `opsx-edit-config` - Edit global config
- `opsx-docs` - View global docs
- `opsx-help` - Quick reference
- `opsx-templates` - List global templates
- `cdo` - Go to ~/.opencode
- `cdot` - Go to ~/.opencode/templates

## Workflow

### Starting New Work (Automatic)

```
User: "I want to add a dark mode feature"
Assistant: 
  → Automatically creates OpenSpec change
  → Generates proposal artifact
  → Creates implementation plan
  → Breaks down into tasks
  → Implements step-by-step
  → Verifies completion
  → Archives when complete
```

### Benefits

✅ **Structured approach** - Consistent workflow across all projects  
✅ **Global templates** - Reusable templates shared across projects  
✅ **Automatic documentation** - Every change is documented  
✅ **Traceability** - Clear history of decisions and implementations  
✅ **Quality** - Verification steps ensure completeness  
✅ **Easy onboarding** - Same workflow everywhere  

## Customization

### Override Global Settings (This Project Only)

Edit `.opencode/config.json` in this project:

```json
{
  "_comment": "Project-specific overrides",
  "preferences": {
    "defaultChangeType": "bugfix"  // Different default for this project
  }
}
```

### Add Project Templates

Create custom templates in `.opencode/templates/` for this project only.
They will be used in addition to global templates.

### Disable OpenSpec (This Project Only)

Edit `.opencode/config.json`:
```json
{
  "workflow": {
    "enforceOpenSpec": false
  }
}
```

## Disable Globally

To disable OpenSpec for **all projects**:

```bash
mv ~/.opencode/config.json ~/.opencode/config.json.disabled
```

However, this is **not recommended** as OpenSpec provides better structure and documentation.

---

**Global OpenSpec is active!** All your projects now use structured development workflow. 🎉

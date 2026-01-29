# OpenCode Configuration

This project is configured to **always use OpenSpecs** for all development work.

## What This Means

Every session will automatically use the OpenSpec workflow:

1. **Start new work**: Use `/opsx-new` or work will auto-start with OpenSpec
2. **Continue work**: Use `/opsx-continue` to create next artifact
3. **Apply changes**: Use `/opsx-apply` to implement tasks
4. **Archive work**: Use `/opsx-archive` when complete

## Configuration

See `.opencode/config.json` for the full configuration.

### Key Settings:

- `workflow.default`: `"openspec"` - Always use OpenSpec workflow
- `workflow.autoStart`: `true` - Automatically start OpenSpec for new work
- `workflow.enforceOpenSpec`: `true` - Require OpenSpec for all changes
- `openspec.autoCreateChange`: `true` - Auto-create change when needed

## Directory Structure

```
.opencode/
├── config.json           # OpenCode configuration (enforces OpenSpec)
├── changes/              # Active OpenSpec changes (in progress)
├── archive/              # Completed and archived changes
├── templates/            # Custom templates for changes
├── skills/               # OpenSpec skills
└── command/              # OpenSpec commands
```

## OpenSpec Commands

- `/opsx-new` - Start a new OpenSpec change
- `/opsx-continue` - Continue with next artifact
- `/opsx-apply` - Implement tasks from change
- `/opsx-verify` - Verify implementation
- `/opsx-archive` - Archive completed change
- `/opsx-explore` - Explore and clarify ideas
- `/opsx-sync` - Sync delta specs to main specs
- `/opsx-bulk-archive` - Archive multiple changes

## Workflow

### Starting New Work

```
User: "I want to add a dark mode feature"
Assistant: Creates OpenSpec change automatically
→ Generates proposal
→ Creates implementation plan
→ Breaks down into tasks
→ Implements step-by-step
→ Archives when complete
```

### Benefits

✅ **Structured approach** - Every change follows a consistent workflow  
✅ **Documentation** - Automatic documentation of all changes  
✅ **Traceability** - Clear history of decisions and implementations  
✅ **Quality** - Verification steps ensure completeness  
✅ **Collaboration** - Easy to review and understand changes  

## Disabling (if needed)

To disable OpenSpec for a specific session, you can:

1. Edit `.opencode/config.json` and set `workflow.enforceOpenSpec` to `false`
2. Or delete `.opencode/config.json` to use default behavior

However, this is **not recommended** as OpenSpec provides better structure and documentation.

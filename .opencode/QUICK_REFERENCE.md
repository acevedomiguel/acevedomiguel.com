# OpenSpec Quick Reference

## Common Commands

### Starting Work
```
/opsx-new          # Start new change with full workflow
/opsx-ff           # Fast-forward through all artifacts
/opsx-explore      # Explore ideas before starting
```

### During Work
```
/opsx-continue     # Create next artifact
/opsx-apply        # Implement tasks
/opsx-verify       # Verify implementation
```

### Completing Work
```
/opsx-archive      # Archive single change
/opsx-bulk-archive # Archive multiple changes
/opsx-sync         # Sync specs without archiving
```

## Workflow Steps

1. **Proposal** - What and why
2. **Plan** - How to implement
3. **Tasks** - Step-by-step breakdown
4. **Implementation** - Code changes
5. **Verification** - Ensure completeness
6. **Archive** - Move to archive

## Tips

- Use `/opsx-explore` when you need to think through ideas
- Use `/opsx-ff` when you know exactly what you want
- Archive changes frequently to keep workspace clean
- Review archived changes for learning and documentation

## File Locations

- **Active changes:** `.opencode/changes/`
- **Completed:** `.opencode/archive/`
- **Config:** `.opencode/config.json`

# Token / Context Efficiency Policy

Practical rules for keeping this project cheap to work on in Claude Code.
Not a process document — a checklist to actually follow.

## Reading

- Don't reread unchanged large files. Trust prior edits unless a tool
  reports otherwise.
- Use targeted Grep/Glob/offset-limited reads instead of dumping whole
  files when only one section is relevant.
- Use subagents (Explore / general-purpose) for isolated research or QA
  sweeps that don't need to pollute main context — e.g. "check every route
  for console errors" is a subagent task, not a main-thread narration.

## Writing / implementing

- No lengthy explanations while implementing. State what changed, not why
  it's a good idea, unless the reasoning is non-obvious.
- Reuse existing components instead of regenerating similar code.
- Don't install packages "just in case" — see the dependency-discipline
  list in `CLAUDE.md`'s addendum brief.
- Don't load MCPs/skills unrelated to the current step. Frontend work uses
  `frontend-design`, `design-taste-frontend`, `ui-ux-pro-max`,
  `vercel-react-best-practices`, `web-design-guidelines` — not video/CLI
  tooling skills that happen to be installed.

## Running commands

- Run grouped checks (`lint`, `tsc --noEmit`, `build`) once per meaningful
  batch of changes, not after every single edit.
- Don't repeat an identical command hoping for a different result — fix
  the cause first.

## Reporting

- Progress updates: concise, one or two sentences at natural checkpoints.
- `/compact` only when the conversation is genuinely bloated, not on a
  fixed schedule.
- Never fabricate token counts. If exact telemetry isn't available, don't
  estimate one and present it as fact.

## Phase checklist

Planning → Foundation → Pages → Responsive QA → Accessibility →
Performance → Final Review.

Each phase should end with a short status note, not a report.

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
- Don't install packages "just in case" — no state library, ORM, CMS, or
  animation library unless a specific need arises (see `CLAUDE.md`).
- Don't load MCPs/skills unrelated to the current step. Frontend work uses
  `frontend-design`, `design-taste-frontend`, `ui-ux-pro-max`,
  `vercel-react-best-practices`, `web-design-guidelines` — not video/CLI
  tooling skills that happen to be installed.
- Don't invoke every installed skill automatically just because it exists.

## Orchestration

- Use a Dynamic Workflow (multi-agent graph) only for substantive
  parallel work — e.g. independent reviewer passes that must not share
  context or edit overlapping files — and for final cross-checking.
- Use a single agent for trivial corrections. Don't spin up a workflow to
  fix a typo.
- Don't enable broad multi-agent orchestration for every small edit.
- Don't repeatedly regenerate a plan after it's already been approved.

## Running commands

- Run grouped checks (`lint`, `tsc --noEmit`, `build`) once per meaningful
  batch of changes, not after every single edit.
- Don't repeat an identical command hoping for a different result — fix
  the cause first.

## Reporting

- Progress updates: concise, one or two sentences at natural checkpoints.
- Don't narrate routine commands.
- `/compact` only when the conversation is genuinely bloated, not on a
  fixed schedule.
- Never fabricate token counts. If exact telemetry isn't available, don't
  estimate one and present it as fact.
- Don't duplicate the full business content across several files — the
  single source is `src/content/site.ts`, described in
  `docs/CONTENT_SOURCE.md`.

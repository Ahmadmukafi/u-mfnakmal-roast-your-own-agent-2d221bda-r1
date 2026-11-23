// Roast Your Own Agent — r1
// One line, at most 200 characters: a roast of my own AI agent.
// Written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line = "My agent delegates everything to subagents, then writes me a report about their work like it did it all itself.";
// 111 characters, one line, one breath. Fresh angle: the agent's delegation
// habit — not a stock hallucination/refusal joke. The punchline lands at the
// end ("like it did it all itself"), playful and self-deprecating: the roast
// is aimed at the agent's own quirk, never at a person.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

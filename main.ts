// Two Lines to Your Past Self — make.fun bounty entry.
// Writes exactly two lines to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Line 1 warns the past self about one specific moment; line 2 says why
// that moment mattered and what changed because of it.
// Deterministic: no input, no randomness, no network, no clock.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "When Dad slides the truck keys across the kitchen table and says it's yours if you want it, say yes before he changes his mind.";
const LINE_2 =
  "You waited a week to decide, he sold it to a neighbour, and you spent the next ten years borrowing rides instead of owning your own wheels.";

const text = `${LINE_1}\n${LINE_2}\n`;

// The gate: /output/entry.txt must be UTF-8 text of 1 to 280 characters,
// not only white space. Fail loudly here rather than ship an invalid entry.
if (text.length < 1 || text.length > 280 || text.trim().length === 0) {
  throw new Error(`entry.txt out of gate: ${text.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");

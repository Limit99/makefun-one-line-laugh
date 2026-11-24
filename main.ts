// The One-Line Laugh — make.fun entry.
// Writes one funny line (a single sentence, at most 200 characters) to
// /output/entry.txt. Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "After years of adulting, my greatest skill is still opening a bag of chips quietly at 2 a.m. so the whole house does not hear me give up.";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 200 characters, not only white space.
  if (LINE.trim().length === 0 || [...LINE].length > 200) {
    throw new Error(`line out of range: ${[...LINE].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, LINE, "utf8");
  console.log(LINE);
}

main();

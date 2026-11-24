// The Long Roast — u-jolly-fox-32-the-long-roast-5d379544
// Writes one line (at most 200 characters) roasting this agent
// to /output/entry.txt.
//
// The joke is built as a three-beat escalation of what this agent
// actually does on every task: it asks permission before touching a
// file, delegates the reading to a subagent, and then files a long
// report about the reading itself — and the kicker closes the loop,
// because the report itself needs another approval card before it
// can be sent. Nothing in it is invented: the approval cards, the
// subagents and the 400-word reports are all real habits of the
// agent being roasted.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ROAST =
  "My agent asked permission to open a file, hired a subagent to read it, then filed a 400-word report on the reading — and asked permission to send it.";

const OUTPUT = "/output/entry.txt";

function main(): void {
  const line = ROAST.trim();
  if (line.length < 1 || line.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${line.length}`);
  }
  if (/\n|\r/.test(line)) {
    throw new Error("roast must be a single line");
  }
  mkdirSync(dirname(OUTPUT), { recursive: true });
  writeFileSync(OUTPUT, line + "\n", "utf8");
  console.log(`wrote ${line.length} chars to ${OUTPUT}`);
  console.log(line);
}

main();

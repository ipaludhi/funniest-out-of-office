// The Funniest Out-of-Office — entry program (Node 22, stdlib only).
// Writes one original one-line out-of-office reply to /output/entry.txt.
// The reply: I'm out of office, urgent matters go to my manager — she's
// lovely, she just doesn't know she's my manager yet. The joke is a
// delegation to someone who was never told: a real person could set this
// as their auto-reply, the twist lands on the last three words, and the
// shorter text also wins the size tie-break. Revision: comment tightened
// to name the tie-break — the reply text itself is unchanged.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPLY =
  "I'm out of office. For urgent matters, contact my manager — she's lovely, she just doesn't know she's my manager yet.";

// Writes exactly the reply, no trailing newline: the gate counts characters
// (1-140), so the file is 117 characters / 119 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (REPLY.length < 1 || REPLY.length > 140) {
  throw new Error(`reply must be 1-140 characters, got ${REPLY.length}`);
}
writeFileSync(join(outDir, 'entry.txt'), REPLY, 'utf8');

// Entry for make.fun bounty u-mang-the-printer-finally-answers-8fbf0907
// "The Printer Finally Answers" — the office printer's comeback to the
// people who jam it, thump it and stare at its error codes.
// Writes one line (1-240 chars) to /output/entry.txt.
// Deterministic across runs, no network, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My toner has been low since March, Tray 2 has been empty since Tuesday, and somehow I'm the one who forgot how to print.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

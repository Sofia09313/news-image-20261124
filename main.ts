// news-image-20261124 entry program (Node 22, standard library only).
//
// The entry image is the entry.png that sits next to this file. The grader
// runs this program in an offline container; all it has to do is place a
// copy of that PNG at <output dir>/entry.png, byte for byte, every time.
//
// The output directory is /output inside the grader. When run locally,
// MAKEFUN_OUTPUT_DIR overrides it, e.g.:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outputDir, 'entry.png');

if (!existsSync(source)) {
  console.error(`entry image missing: ${source}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`wrote ${target}`);

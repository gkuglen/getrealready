import sharp from 'sharp';
import { readdirSync, mkdirSync } from 'fs';
import { join, extname, basename } from 'path';

const INPUT_DIR = 'public/images/services';
const OUTPUT_DIR = 'public/images/services/optimized';
const MAX_WIDTH = 1200;
const QUALITY = 80;

mkdirSync(OUTPUT_DIR, { recursive: true });

const files = readdirSync(INPUT_DIR).filter((f) =>
  ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase()),
);

for (const file of files) {
  const inputPath = join(INPUT_DIR, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(OUTPUT_DIR, outputName);

  await sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outputPath);

  console.log(`✓ ${file} → ${outputName}`);
}

console.log('\nDone! Optimized files saved to:', OUTPUT_DIR);

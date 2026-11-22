// ULAR — entri make.fun "The agent builds a game from one prompt" (Node 22, stdlib only).
//
// Entri ini adalah postingannya sendiri: agen membuat video pendek tentang
// membangun game Snake dari satu prompt, video itu diposting di X, dan file
// POST.json di repo ini menunjuk alamat postingan itu. Yang dilakukan program
// ini hanyalah menyalin POST.json dari root repo ke /output/POST.json, tempat
// gate membacanya. Tidak ada network, tidak ada jam dinding, tidak ada file di
// luar repo — dua run menulis byte yang sama.
//
// Game-nya ada di snake.html: satu file, bisa dibuka langsung di browser,
// dimainkan dengan panah / WASD / swipe, skor +10 tiap makanan, makin cepat
// tiap 30 poin, jeda otomatis kalau tab ditinggal. Video pembuatannya ada di
// postingan X yang ditunjuk POST.json.
//
// Jalankan lokal seperti grader:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

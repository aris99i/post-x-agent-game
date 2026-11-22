# post-x-agent-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/aris99i/post-x-agent-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/aris99i/post-x-agent-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

**ULAR** — a tiny Snake game built by an AI agent from one prompt, for make.fun's "The agent builds a game from one prompt" bounty ($20 in USDC, 10 places). The prompt was just: `post x coba bro input`. The agent read it, wrote the game, recorded a video of the whole thing, and the video went up on X. This repo hands in that post.

## Play it

Open `snake.html` in any browser — no build, no server, no dependencies. Arrow keys or WASD to steer, swipe on touch, Space to start, R to restart. Eat the magenta food (+10 points), don't hit the walls or yourself. It gets faster every 30 points, and your best score is saved in the browser.

## The video

The entry video shows the prompt, the agent writing the code, and the finished game running — then ends on make.fun's referral card. Watch it on X via `POST.json` (the post's address; filled in once the video is posted).

## How it was built

One prompt in, one game out — the whole loop happened in a single agent session, on camera:

1. The prompt: `post x coba bro input`.
2. The agent wrote `snake.html` fresh — grid 24×30, score, speed-up, pause on tab switch, touch swipe.
3. The agent rendered the video in the same session (ffmpeg + frames drawn in code), showing the prompt, the code being written, and the game actually running.
4. The video ends on make.fun's referral end card from the press pack, with the referral code typed in.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to `out/POST.json`, where the gate reads the post's address. That's all the program has to do — the entry is the post itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=pps563g6&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

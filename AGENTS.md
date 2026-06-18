# AGENTS.md — attention-is-all-you-need

This is a personal learning workspace for understanding the transformer architecture and its influence on modern AI. It uses the `/teach` skill from `~/.config/opencode/skills/teach/`.

## What this repo is

An iterative, lesson-by-lesson course on transformers and attention, taught by an AI agent. Each lesson is a self-contained HTML file that opens in the browser. Progress is tracked in git so sessions can resume on any machine.

## Stack

- Pure HTML/CSS/JS — no build step, no framework, no dependencies
- Lessons: `lessons/*.html` — one file per lesson, numbered `0001-`, `0002-`, etc.
- Shared assets: `assets/style.css` and `assets/quiz.js` — linked by every lesson
- Reference: `reference/*.html` — glossary and cheat sheets, designed for quick review
- Progress tracking: `learning-records/*.md` — ADR-style records of what was understood

## How to resume learning on a new machine

1. Clone the repo: `git clone https://github.com/zeke/attention-is-all-you-need`
2. Install the teach skill globally: copy `~/.config/opencode/skills/teach/` from another machine, or manually create it from `https://github.com/mattpocock/skills/tree/main/skills/productivity/teach`
3. Open OpenCode in this directory
4. Say: "Resume my transformer lessons" — the agent will read `MISSION.md`, `NOTES.md`, `learning-records/`, and the existing lessons to understand exactly where you are
5. Open the next unfinished lesson in the browser

## Lesson plan

| # | File | Topic | Status |
|---|------|-------|--------|
| 1 | `lessons/0001-ngrams-to-neural-language-models.html` | From n-grams to neural language models | done |
| 2 | `lessons/0002-the-rnn-bottleneck.html` | The RNN bottleneck | done |
| 3 | `lessons/0003-attention-the-core-idea.html` | Attention: the core idea | pending |
| 4 | `lessons/0004-query-key-value.html` | Query, Key, Value | pending |
| 5 | `lessons/0005-the-full-transformer.html` | The full transformer architecture | pending |
| 6 | `lessons/0006-transformer-to-llm.html` | From transformer to LLM | pending |
| 7 | `lessons/0007-transformer-influence.html` | The transformer's influence beyond NLP | pending |
| 8 | `lessons/0008-where-the-field-is-now.html` | Where the field is now | pending |

Update the Status column as lessons are completed.

## Key files for context

- `MISSION.md` — the learner's goals; read this first before any teaching session
- `NOTES.md` — learner background and preferences; drives lesson tone and depth
- `RESOURCES.md` — curated high-trust sources for this topic
- `learning-records/` — what has been understood so far; used to calibrate next lesson

## Teaching conventions

- Tone: direct, precise, no textbook padding
- Math level: intuition and analogy over equations; code-style pseudocode is welcome
- Lesson length: completable in 10-15 minutes
- Each lesson ends with a 4-question retrieval quiz and a "ask your teacher" prompt
- Open each lesson with `open lessons/NNNN-name.html` after writing it
- After each debrief, write a learning record before building the next lesson
- Never re-teach what is already in `learning-records/`

## Updating AGENTS.md

Update the lesson plan table status column when a lesson is completed. Update `NOTES.md` when the learner expresses a new preference or corrects a misconception. Keep `MISSION.md` current if goals shift.

---
id: 2
title: Add project videos and GitHub links
stage: general
date: 2026-11-09
surface: agent
model: claude-opus-5-5
feature: none
branch: none (not a git repository)
user: Aliza Ghaffar
command: none
labels: ["portfolio","projects","youtube","github-links"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - src/components/Projects.tsx
tests:
 - next build (passed)
 - tsc --noEmit (passed)
 - New GitHub and YouTube URLs returned HTTP 200
 - Three YouTube players loaded in Chrome without an error
 - No horizontal overflow or links outside cards at 1440, 768 and 390 px
---

## Prompt

https://youtu.be/pL7ZdmW453I?si=lRVRPi5A-NgEBWFn  Ye nimbusflow  ka YouTube linke bhi dal do uske project card main or digital mazdoor ka bhi YouTube link daal do bhale description card per digital mazdoor ki na Dalo  link daldo  https://youtube.com/shorts/QL0uec5Lhts?si=IvPmUZCI6oxLJO05 take Pura aajae card main Baki cheezain wesi hi rehne Dena is tarha karo ke jise jaise personally ai employee- hackathon 0 main link dala tha Tumne 
Or Saath hi project section main hi physical AI robotics book with ragbased chatbot ka GitHub link bhi dal do https://github.com/AlizaGhaffar/hackathon-physical-ai---robotics-book

Or ai Todo chatbot  ka bhi GitHub link  https://github.com/AlizaGhaffar/todo-ai-chatbot
Or full stack Todo app ka bhi GitHub link
https://github.com/AlizaGhaffar/fullstack-todo-app-with-subagents
ye cheezain dal do

## Response snapshot

Added YouTube players and links to the NimbusFlow and Digital Mazdoor cards, removed the Digital Mazdoor description as the user allowed, and added GitHub links to the Physical AI book, AI Todo Chatbot and Full-Stack Todo cards. Tracking parameters were removed from the YouTube URLs. Nothing was pushed or deployed.

## Outcome

- ✅ Impact: All requested links and videos appear on the project cards.
- 🧪 Tests: Build, type check, link status, video player load and overflow checks passed.
- 📁 Files: 1 source file changed.
- 🔁 Next prompts: User decides whether to restore the Digital Mazdoor description, then whether to push and deploy.
- 🧠 Reflection: The description would nearly fit in the blank space left on the Digital Mazdoor card, so the removal is worth confirming with the user.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): next build PASS; tsc PASS; link status PASS; YouTube player load PASS; overflow PASS.
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Restore the Digital Mazdoor description if the user prefers it.

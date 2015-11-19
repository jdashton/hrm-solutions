callback({
  "levelNumber": 8,
  "size": 6,
  "steps": 24,
  "successRatio": 1,
  "author": "atesgoral",
  "hash": "f842281a123f97dfe96c42d3c4f76ff9",
  "path": "08-Tripler-Room-6.24/6.24-atesgoral.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 08-Tripler-Room - SIZE 6/6 - SPEED 24/24 --\n\n-- Triple each inbox item by copying to memory and adding it to itself twice.\n\na:\n    INBOX   \n    COPYTO   0\n    ADD      0\n    ADD      0\n    OUTBOX  \n    JUMP     a\n\n"
});
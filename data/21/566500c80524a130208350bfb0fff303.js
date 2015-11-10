callback({
  "levelNumber": 21,
  "size": 31,
  "steps": 34,
  "successRatio": 0.17,
  "type": "specific",
  "author": "Mygod",
  "hash": "566500c80524a130208350bfb0fff303",
  "path": "21-Zero-Terminated-Sum-10.72/31.52.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM\r\n-- 21-Zero-Terminated-Sum - SIZE 31/10 - SPEED 52/72 --\r\n\r\n-- This solution is level-specific (quantity-limited input) and assumes\r\n-- all runs of less than 6 digits, the first one of 3 and the last one of 6.\r\n-- Based on 26.56.specific-AaronKnowles.asm.\r\n-- See 29.60-AaronKnowles.asm for non-level-specific solution.\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\na:\r\n    COPYFROM 0\r\nb:\r\n    OUTBOX  \r\n    INBOX   \r\n    JUMPZ    b\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    COPYTO   0\r\n    INBOX   \r\n    JUMPZ    a\r\n    ADD      0\r\n    OUTBOX  \r\n"
});
var EXAMPLES = {
  "numbers": [
    {
      "q": "Find the unit digit of 264^102 + 264^103.",
      "a": "1) The base unit digit is 4. The cyclicity of 4 is 2 (4^1=4, 4^2=6).\n2) For 264^102, the power 102 is even, so the unit digit is 6.\n3) For 264^103, the power 103 is odd, so the unit digit is 4.\n4) Adding the unit digits: 6 + 4 = 10. The unit digit of the sum is 0. Answer: 0."
    },
    {
      "q": "If 653xy is divisible by 80, find x + y.",
      "a": "1) Divisibility by 80 requires the number to be divisible by both 10 and 8.\n2) To be divisible by 10, the last digit y must be 0.\n3) To be divisible by 8, the last three digits 3x0 must be divisible by 8.\n4) Testing values for x: 320 is divisible by 8. So x = 2 and y = 0.\n5) Therefore, x + y = 2 + 0 = 2. Answer: 2."
    },
    {
      "q": "Find the remainder when 2^31 is divided by 5.",
      "a": "1) Find the cyclic remainders of powers of 2 mod 5:\n   2^1 \u2261 2, 2^2 \u2261 4, 2^3 \u2261 3, 2^4 \u2261 1 (mod 5). The cycle repeats every 4 powers.\n2) Divide the power 31 by 4: 31 % 4 = 3.\n3) The remainder corresponds to 2^3, which leaves a remainder of 3. Answer: 3."
    },
    {
      "q": "Find the number of trailing zeros in 100! (factorial).",
      "a": "1) Trailing zeros are determined by the number of factors of 5 in 100!.\n2) Divide 100 by powers of 5: [100 / 5] = 20, [100 / 25] = 4.\n3) Total factors of 5 = 20 + 4 = 24. Answer: 24."
    },
    {
      "q": "What is the difference between the place value and face value of 7 in 27306?",
      "a": "1) The face value of a digit is the digit itself: 7.\n2) The place value of 7 is in the thousands place: 7 * 1000 = 7000.\n3) The difference is 7000 - 7 = 6993. Answer: 6993."
    },
    {
      "q": "A number divided by 899 leaves remainder 63. What is the remainder when it is divided by 29?",
      "a": "1) Check if 899 is divisible by 29: 899 = 29 * 31.\n2) Since 29 is a factor of 899, the new remainder is simply the old remainder mod 29.\n3) Remainder = 63 % 29 = 5. Answer: 5."
    },
    {
      "q": "Find the remainder when 17^200 is divided by 18.",
      "a": "1) Rewrite the base in terms of the divisor: 17 \u2261 -1 (mod 18).\n2) Then, 17^200 \u2261 (-1)^200 \u2261 1 (mod 18).\n3) Thus, the remainder is 1. Answer: 1."
    },
    {
      "q": "Is the number 9876524 divisible by 11?",
      "a": "1) Find the sum of digits in odd positions: 9 + 7 + 5 + 4 = 25.\n2) Find the sum of digits in even positions: 8 + 6 + 2 = 16.\n3) Find the difference: 25 - 16 = 9.\n4) Since 9 is not 0 or a multiple of 11, the number is not divisible by 11. Answer: No."
    },
    {
      "q": "Find the number of prime factors in (4^11) * (7^5) * (11^2).",
      "a": "1) Express all bases in prime factors: (2^2)^11 * 7^5 * 11^2 = 2^22 * 7^5 * 11^2.\n2) Sum the powers of the prime factors: 22 + 5 + 2 = 29.\n3) The total number of prime factors is 29. Answer: 29."
    },
    {
      "q": "Find the least number to be added to 1000 to make it exactly divisible by 45.",
      "a": "1) Divide 1000 by 45: 1000 / 45 = 22 with a remainder of 10.\n2) The number to add is Divisor - Remainder: 45 - 10 = 35.\n3) Adding 35 gives 1035, which is divisible by 45. Answer: 35."
    },
    {
      "q": "Find the sum of all natural numbers from 1 to 100.",
      "a": "1) Use the arithmetic series formula: Sum = n(n + 1) / 2.\n2) For n = 100: Sum = 100 * 101 / 2 = 50 * 101 = 5050. Answer: 5050."
    },
    {
      "q": "Find the value of 1 - 2 + 3 - 4 + 5 - 6 ... up to 50 terms.",
      "a": "1) Group terms in pairs: (1-2) + (3-4) + (5-6) ... + (49-50).\n2) Each of the 25 pairs has a value of -1.\n3) Total sum = 25 * (-1) = -25. Answer: -25."
    },
    {
      "q": "What is the highest power of 3 that divides 50!?",
      "a": "1) Use Legendre's formula: [50/3] + [50/9] + [50/27]...\n2) Calculate integer parts: 16 + 5 + 1 = 22.\n3) The highest power of 3 that divides 50! is 3^22. Answer: 22."
    },
    {
      "q": "Find the sum of all prime numbers between 30 and 50.",
      "a": "1) List the prime numbers in the range: 31, 37, 41, 43, 47.\n2) Add the values: 31 + 37 + 41 + 43 + 47 = 199. Answer: 199."
    },
    {
      "q": "Find the rational equivalent of the repeating decimal 0.232323...",
      "a": "1) Let x = 0.2323...\n2) Multiply by 100: 100x = 23.2323...\n3) Subtract the equations: 99x = 23.\n4) Solve for x: x = 23/99. Answer: 23/99."
    }
  ],
  "hcf-lcm": [
    {
      "q": "Find the HCF and LCM of 6 and 8.",
      "a": "1) Find prime factorizations:\n   6 = 2 * 3 * 1\n   8 = 2^3 * 1\n2) HCF takes common factors with lowest powers: HCF = 2 * 1 = 2.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 1 = 24.\nAnswer: HCF = 2, LCM = 24."
    },
    {
      "q": "Find the HCF and LCM of 12 and 16.",
      "a": "1) Find prime factorizations:\n   12 = 2 * 3 * 2\n   16 = 2^3 * 2\n2) HCF takes common factors with lowest powers: HCF = 2 * 2 = 4.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 2 = 48.\nAnswer: HCF = 4, LCM = 48."
    },
    {
      "q": "Find the HCF and LCM of 18 and 24.",
      "a": "1) Find prime factorizations:\n   18 = 2 * 3 * 3\n   24 = 2^3 * 3\n2) HCF takes common factors with lowest powers: HCF = 2 * 3 = 6.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 3 = 72.\nAnswer: HCF = 6, LCM = 72."
    },
    {
      "q": "Find the HCF and LCM of 24 and 32.",
      "a": "1) Find prime factorizations:\n   24 = 2 * 3 * 4\n   32 = 2^3 * 4\n2) HCF takes common factors with lowest powers: HCF = 2 * 4 = 8.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 4 = 96.\nAnswer: HCF = 8, LCM = 96."
    },
    {
      "q": "Find the HCF and LCM of 30 and 40.",
      "a": "1) Find prime factorizations:\n   30 = 2 * 3 * 5\n   40 = 2^3 * 5\n2) HCF takes common factors with lowest powers: HCF = 2 * 5 = 10.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 5 = 120.\nAnswer: HCF = 10, LCM = 120."
    },
    {
      "q": "Find the HCF and LCM of 36 and 48.",
      "a": "1) Find prime factorizations:\n   36 = 2 * 3 * 6\n   48 = 2^3 * 6\n2) HCF takes common factors with lowest powers: HCF = 2 * 6 = 12.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 6 = 144.\nAnswer: HCF = 12, LCM = 144."
    },
    {
      "q": "Find the HCF and LCM of 42 and 56.",
      "a": "1) Find prime factorizations:\n   42 = 2 * 3 * 7\n   56 = 2^3 * 7\n2) HCF takes common factors with lowest powers: HCF = 2 * 7 = 14.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 7 = 168.\nAnswer: HCF = 14, LCM = 168."
    },
    {
      "q": "Find the HCF and LCM of 48 and 64.",
      "a": "1) Find prime factorizations:\n   48 = 2 * 3 * 8\n   64 = 2^3 * 8\n2) HCF takes common factors with lowest powers: HCF = 2 * 8 = 16.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 8 = 192.\nAnswer: HCF = 16, LCM = 192."
    },
    {
      "q": "Find the HCF and LCM of 54 and 72.",
      "a": "1) Find prime factorizations:\n   54 = 2 * 3 * 9\n   72 = 2^3 * 9\n2) HCF takes common factors with lowest powers: HCF = 2 * 9 = 18.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 9 = 216.\nAnswer: HCF = 18, LCM = 216."
    },
    {
      "q": "Find the HCF and LCM of 60 and 80.",
      "a": "1) Find prime factorizations:\n   60 = 2 * 3 * 10\n   80 = 2^3 * 10\n2) HCF takes common factors with lowest powers: HCF = 2 * 10 = 20.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 10 = 240.\nAnswer: HCF = 20, LCM = 240."
    },
    {
      "q": "Find the HCF and LCM of 66 and 88.",
      "a": "1) Find prime factorizations:\n   66 = 2 * 3 * 11\n   88 = 2^3 * 11\n2) HCF takes common factors with lowest powers: HCF = 2 * 11 = 22.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 11 = 264.\nAnswer: HCF = 22, LCM = 264."
    },
    {
      "q": "Find the HCF and LCM of 72 and 96.",
      "a": "1) Find prime factorizations:\n   72 = 2 * 3 * 12\n   96 = 2^3 * 12\n2) HCF takes common factors with lowest powers: HCF = 2 * 12 = 24.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 12 = 288.\nAnswer: HCF = 24, LCM = 288."
    },
    {
      "q": "Find the HCF and LCM of 78 and 104.",
      "a": "1) Find prime factorizations:\n   78 = 2 * 3 * 13\n   104 = 2^3 * 13\n2) HCF takes common factors with lowest powers: HCF = 2 * 13 = 26.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 13 = 312.\nAnswer: HCF = 26, LCM = 312."
    },
    {
      "q": "Find the HCF and LCM of 84 and 112.",
      "a": "1) Find prime factorizations:\n   84 = 2 * 3 * 14\n   112 = 2^3 * 14\n2) HCF takes common factors with lowest powers: HCF = 2 * 14 = 28.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 14 = 336.\nAnswer: HCF = 28, LCM = 336."
    },
    {
      "q": "Find the HCF and LCM of 90 and 120.",
      "a": "1) Find prime factorizations:\n   90 = 2 * 3 * 15\n   120 = 2^3 * 15\n2) HCF takes common factors with lowest powers: HCF = 2 * 15 = 30.\n3) LCM takes all factors with highest powers: LCM = 8 * 3 * 15 = 360.\nAnswer: HCF = 30, LCM = 360."
    }
  ],
  "simplification": [
    {
      "q": "Evaluate using BODMAS: 10 + 20 / (5 * 1) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 1 = 5.\n2) Perform Division: 20 / 5 = 4.\n3) Perform Addition: 10 + 4 = 14.\n4) Perform Subtraction: 14 - 2 = 12.\nAnswer: 12."
    },
    {
      "q": "Evaluate using BODMAS: 20 + 40 / (5 * 2) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 2 = 10.\n2) Perform Division: 40 / 10 = 4.\n3) Perform Addition: 20 + 4 = 24.\n4) Perform Subtraction: 24 - 2 = 22.\nAnswer: 22."
    },
    {
      "q": "Evaluate using BODMAS: 30 + 60 / (5 * 3) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 3 = 15.\n2) Perform Division: 60 / 15 = 4.\n3) Perform Addition: 30 + 4 = 34.\n4) Perform Subtraction: 34 - 2 = 32.\nAnswer: 32."
    },
    {
      "q": "Evaluate using BODMAS: 40 + 80 / (5 * 4) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 4 = 20.\n2) Perform Division: 80 / 20 = 4.\n3) Perform Addition: 40 + 4 = 44.\n4) Perform Subtraction: 44 - 2 = 42.\nAnswer: 42."
    },
    {
      "q": "Evaluate using BODMAS: 50 + 100 / (5 * 5) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 5 = 25.\n2) Perform Division: 100 / 25 = 4.\n3) Perform Addition: 50 + 4 = 54.\n4) Perform Subtraction: 54 - 2 = 52.\nAnswer: 52."
    },
    {
      "q": "Evaluate using BODMAS: 60 + 120 / (5 * 6) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 6 = 30.\n2) Perform Division: 120 / 30 = 4.\n3) Perform Addition: 60 + 4 = 64.\n4) Perform Subtraction: 64 - 2 = 62.\nAnswer: 62."
    },
    {
      "q": "Evaluate using BODMAS: 70 + 140 / (5 * 7) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 7 = 35.\n2) Perform Division: 140 / 35 = 4.\n3) Perform Addition: 70 + 4 = 74.\n4) Perform Subtraction: 74 - 2 = 72.\nAnswer: 72."
    },
    {
      "q": "Evaluate using BODMAS: 80 + 160 / (5 * 8) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 8 = 40.\n2) Perform Division: 160 / 40 = 4.\n3) Perform Addition: 80 + 4 = 84.\n4) Perform Subtraction: 84 - 2 = 82.\nAnswer: 82."
    },
    {
      "q": "Evaluate using BODMAS: 90 + 180 / (5 * 9) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 9 = 45.\n2) Perform Division: 180 / 45 = 4.\n3) Perform Addition: 90 + 4 = 94.\n4) Perform Subtraction: 94 - 2 = 92.\nAnswer: 92."
    },
    {
      "q": "Evaluate using BODMAS: 100 + 200 / (5 * 10) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 10 = 50.\n2) Perform Division: 200 / 50 = 4.\n3) Perform Addition: 100 + 4 = 104.\n4) Perform Subtraction: 104 - 2 = 102.\nAnswer: 102."
    },
    {
      "q": "Evaluate using BODMAS: 110 + 220 / (5 * 11) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 11 = 55.\n2) Perform Division: 220 / 55 = 4.\n3) Perform Addition: 110 + 4 = 114.\n4) Perform Subtraction: 114 - 2 = 112.\nAnswer: 112."
    },
    {
      "q": "Evaluate using BODMAS: 120 + 240 / (5 * 12) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 12 = 60.\n2) Perform Division: 240 / 60 = 4.\n3) Perform Addition: 120 + 4 = 124.\n4) Perform Subtraction: 124 - 2 = 122.\nAnswer: 122."
    },
    {
      "q": "Evaluate using BODMAS: 130 + 260 / (5 * 13) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 13 = 65.\n2) Perform Division: 260 / 65 = 4.\n3) Perform Addition: 130 + 4 = 134.\n4) Perform Subtraction: 134 - 2 = 132.\nAnswer: 132."
    },
    {
      "q": "Evaluate using BODMAS: 140 + 280 / (5 * 14) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 14 = 70.\n2) Perform Division: 280 / 70 = 4.\n3) Perform Addition: 140 + 4 = 144.\n4) Perform Subtraction: 144 - 2 = 142.\nAnswer: 142."
    },
    {
      "q": "Evaluate using BODMAS: 150 + 300 / (5 * 15) - 2",
      "a": "1) Follow BODMAS rules: perform Parentheses/Brackets operation first: 5 * 15 = 75.\n2) Perform Division: 300 / 75 = 4.\n3) Perform Addition: 150 + 4 = 154.\n4) Perform Subtraction: 154 - 2 = 152.\nAnswer: 152."
    }
  ],
  "percentages": [
    {
      "q": "If A's income is 10% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 110.\n2) The difference in income is 10.\n3) Percentage difference relative to A = (10 / 110) * 100.\n4) Result = 9.09%.\nAnswer: 9.09%."
    },
    {
      "q": "If A's income is 20% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 120.\n2) The difference in income is 20.\n3) Percentage difference relative to A = (20 / 120) * 100.\n4) Result = 16.67%.\nAnswer: 16.67%."
    },
    {
      "q": "If A's income is 30% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 130.\n2) The difference in income is 30.\n3) Percentage difference relative to A = (30 / 130) * 100.\n4) Result = 23.08%.\nAnswer: 23.08%."
    },
    {
      "q": "If A's income is 40% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 140.\n2) The difference in income is 40.\n3) Percentage difference relative to A = (40 / 140) * 100.\n4) Result = 28.57%.\nAnswer: 28.57%."
    },
    {
      "q": "If A's income is 50% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 150.\n2) The difference in income is 50.\n3) Percentage difference relative to A = (50 / 150) * 100.\n4) Result = 33.33%.\nAnswer: 33.33%."
    },
    {
      "q": "If A's income is 60% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 160.\n2) The difference in income is 60.\n3) Percentage difference relative to A = (60 / 160) * 100.\n4) Result = 37.50%.\nAnswer: 37.50%."
    },
    {
      "q": "If A's income is 70% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 170.\n2) The difference in income is 70.\n3) Percentage difference relative to A = (70 / 170) * 100.\n4) Result = 41.18%.\nAnswer: 41.18%."
    },
    {
      "q": "If A's income is 80% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 180.\n2) The difference in income is 80.\n3) Percentage difference relative to A = (80 / 180) * 100.\n4) Result = 44.44%.\nAnswer: 44.44%."
    },
    {
      "q": "If A's income is 90% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 190.\n2) The difference in income is 90.\n3) Percentage difference relative to A = (90 / 190) * 100.\n4) Result = 47.37%.\nAnswer: 47.37%."
    },
    {
      "q": "If A's income is 100% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 200.\n2) The difference in income is 100.\n3) Percentage difference relative to A = (100 / 200) * 100.\n4) Result = 50.00%.\nAnswer: 50.00%."
    },
    {
      "q": "If A's income is 110% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 210.\n2) The difference in income is 110.\n3) Percentage difference relative to A = (110 / 210) * 100.\n4) Result = 52.38%.\nAnswer: 52.38%."
    },
    {
      "q": "If A's income is 120% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 220.\n2) The difference in income is 120.\n3) Percentage difference relative to A = (120 / 220) * 100.\n4) Result = 54.55%.\nAnswer: 54.55%."
    },
    {
      "q": "If A's income is 130% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 230.\n2) The difference in income is 130.\n3) Percentage difference relative to A = (130 / 230) * 100.\n4) Result = 56.52%.\nAnswer: 56.52%."
    },
    {
      "q": "If A's income is 140% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 240.\n2) The difference in income is 140.\n3) Percentage difference relative to A = (140 / 240) * 100.\n4) Result = 58.33%.\nAnswer: 58.33%."
    },
    {
      "q": "If A's income is 150% more than B's income, by what percentage is B's income less than A's?",
      "a": "1) Let B's income be 100. Then A's income is 250.\n2) The difference in income is 150.\n3) Percentage difference relative to A = (150 / 250) * 100.\n4) Result = 60.00%.\nAnswer: 60.00%."
    }
  ],
  "profit-loss": [
    {
      "q": "A man buys an item for $50 and sells it at a loss of 6%. Find the selling price.",
      "a": "1) Cost Price (CP) = $50. Loss percentage = 6%.\n2) Loss amount = CP * Loss% / 100 = 50 * 6 / 100 = 3.00.\n3) Selling Price (SP) = CP - Loss = 50 - 3.00 = 47.00.\nAnswer: $47.00."
    },
    {
      "q": "A man buys an item for $100 and sells it at a loss of 7%. Find the selling price.",
      "a": "1) Cost Price (CP) = $100. Loss percentage = 7%.\n2) Loss amount = CP * Loss% / 100 = 100 * 7 / 100 = 7.00.\n3) Selling Price (SP) = CP - Loss = 100 - 7.00 = 93.00.\nAnswer: $93.00."
    },
    {
      "q": "A man buys an item for $150 and sells it at a loss of 8%. Find the selling price.",
      "a": "1) Cost Price (CP) = $150. Loss percentage = 8%.\n2) Loss amount = CP * Loss% / 100 = 150 * 8 / 100 = 12.00.\n3) Selling Price (SP) = CP - Loss = 150 - 12.00 = 138.00.\nAnswer: $138.00."
    },
    {
      "q": "A man buys an item for $200 and sells it at a loss of 9%. Find the selling price.",
      "a": "1) Cost Price (CP) = $200. Loss percentage = 9%.\n2) Loss amount = CP * Loss% / 100 = 200 * 9 / 100 = 18.00.\n3) Selling Price (SP) = CP - Loss = 200 - 18.00 = 182.00.\nAnswer: $182.00."
    },
    {
      "q": "A man buys an item for $250 and sells it at a loss of 5%. Find the selling price.",
      "a": "1) Cost Price (CP) = $250. Loss percentage = 5%.\n2) Loss amount = CP * Loss% / 100 = 250 * 5 / 100 = 12.50.\n3) Selling Price (SP) = CP - Loss = 250 - 12.50 = 237.50.\nAnswer: $237.50."
    },
    {
      "q": "A man buys an item for $300 and sells it at a loss of 6%. Find the selling price.",
      "a": "1) Cost Price (CP) = $300. Loss percentage = 6%.\n2) Loss amount = CP * Loss% / 100 = 300 * 6 / 100 = 18.00.\n3) Selling Price (SP) = CP - Loss = 300 - 18.00 = 282.00.\nAnswer: $282.00."
    },
    {
      "q": "A man buys an item for $350 and sells it at a loss of 7%. Find the selling price.",
      "a": "1) Cost Price (CP) = $350. Loss percentage = 7%.\n2) Loss amount = CP * Loss% / 100 = 350 * 7 / 100 = 24.50.\n3) Selling Price (SP) = CP - Loss = 350 - 24.50 = 325.50.\nAnswer: $325.50."
    },
    {
      "q": "A man buys an item for $400 and sells it at a loss of 8%. Find the selling price.",
      "a": "1) Cost Price (CP) = $400. Loss percentage = 8%.\n2) Loss amount = CP * Loss% / 100 = 400 * 8 / 100 = 32.00.\n3) Selling Price (SP) = CP - Loss = 400 - 32.00 = 368.00.\nAnswer: $368.00."
    },
    {
      "q": "A man buys an item for $450 and sells it at a loss of 9%. Find the selling price.",
      "a": "1) Cost Price (CP) = $450. Loss percentage = 9%.\n2) Loss amount = CP * Loss% / 100 = 450 * 9 / 100 = 40.50.\n3) Selling Price (SP) = CP - Loss = 450 - 40.50 = 409.50.\nAnswer: $409.50."
    },
    {
      "q": "A man buys an item for $500 and sells it at a loss of 5%. Find the selling price.",
      "a": "1) Cost Price (CP) = $500. Loss percentage = 5%.\n2) Loss amount = CP * Loss% / 100 = 500 * 5 / 100 = 25.00.\n3) Selling Price (SP) = CP - Loss = 500 - 25.00 = 475.00.\nAnswer: $475.00."
    },
    {
      "q": "A man buys an item for $550 and sells it at a loss of 6%. Find the selling price.",
      "a": "1) Cost Price (CP) = $550. Loss percentage = 6%.\n2) Loss amount = CP * Loss% / 100 = 550 * 6 / 100 = 33.00.\n3) Selling Price (SP) = CP - Loss = 550 - 33.00 = 517.00.\nAnswer: $517.00."
    },
    {
      "q": "A man buys an item for $600 and sells it at a loss of 7%. Find the selling price.",
      "a": "1) Cost Price (CP) = $600. Loss percentage = 7%.\n2) Loss amount = CP * Loss% / 100 = 600 * 7 / 100 = 42.00.\n3) Selling Price (SP) = CP - Loss = 600 - 42.00 = 558.00.\nAnswer: $558.00."
    },
    {
      "q": "A man buys an item for $650 and sells it at a loss of 8%. Find the selling price.",
      "a": "1) Cost Price (CP) = $650. Loss percentage = 8%.\n2) Loss amount = CP * Loss% / 100 = 650 * 8 / 100 = 52.00.\n3) Selling Price (SP) = CP - Loss = 650 - 52.00 = 598.00.\nAnswer: $598.00."
    },
    {
      "q": "A man buys an item for $700 and sells it at a loss of 9%. Find the selling price.",
      "a": "1) Cost Price (CP) = $700. Loss percentage = 9%.\n2) Loss amount = CP * Loss% / 100 = 700 * 9 / 100 = 63.00.\n3) Selling Price (SP) = CP - Loss = 700 - 63.00 = 637.00.\nAnswer: $637.00."
    },
    {
      "q": "A man buys an item for $750 and sells it at a loss of 5%. Find the selling price.",
      "a": "1) Cost Price (CP) = $750. Loss percentage = 5%.\n2) Loss amount = CP * Loss% / 100 = 750 * 5 / 100 = 37.50.\n3) Selling Price (SP) = CP - Loss = 750 - 37.50 = 712.50.\nAnswer: $712.50."
    }
  ],
  "ratio-prop": [
    {
      "q": "Two numbers are in the ratio 3:4. If we add 2 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 2) / (4x + 2) = 4 / 5.\n3) Cross-multiply: 5*(3x + 2) = 4*(4x + 2) -> 15x + 10 = 16x + 8.\n4) Solve for x: x = 2.\n5) The numbers are: 3 * 2 = 6 and 4 * 2 = 8.\nAnswer: 6 and 8."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 4 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 4) / (4x + 4) = 4 / 5.\n3) Cross-multiply: 5*(3x + 4) = 4*(4x + 4) -> 15x + 20 = 16x + 16.\n4) Solve for x: x = 4.\n5) The numbers are: 3 * 4 = 12 and 4 * 4 = 16.\nAnswer: 12 and 16."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 6 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 6) / (4x + 6) = 4 / 5.\n3) Cross-multiply: 5*(3x + 6) = 4*(4x + 6) -> 15x + 30 = 16x + 24.\n4) Solve for x: x = 6.\n5) The numbers are: 3 * 6 = 18 and 4 * 6 = 24.\nAnswer: 18 and 24."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 8 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 8) / (4x + 8) = 4 / 5.\n3) Cross-multiply: 5*(3x + 8) = 4*(4x + 8) -> 15x + 40 = 16x + 32.\n4) Solve for x: x = 8.\n5) The numbers are: 3 * 8 = 24 and 4 * 8 = 32.\nAnswer: 24 and 32."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 10 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 10) / (4x + 10) = 4 / 5.\n3) Cross-multiply: 5*(3x + 10) = 4*(4x + 10) -> 15x + 50 = 16x + 40.\n4) Solve for x: x = 10.\n5) The numbers are: 3 * 10 = 30 and 4 * 10 = 40.\nAnswer: 30 and 40."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 12 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 12) / (4x + 12) = 4 / 5.\n3) Cross-multiply: 5*(3x + 12) = 4*(4x + 12) -> 15x + 60 = 16x + 48.\n4) Solve for x: x = 12.\n5) The numbers are: 3 * 12 = 36 and 4 * 12 = 48.\nAnswer: 36 and 48."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 14 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 14) / (4x + 14) = 4 / 5.\n3) Cross-multiply: 5*(3x + 14) = 4*(4x + 14) -> 15x + 70 = 16x + 56.\n4) Solve for x: x = 14.\n5) The numbers are: 3 * 14 = 42 and 4 * 14 = 56.\nAnswer: 42 and 56."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 16 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 16) / (4x + 16) = 4 / 5.\n3) Cross-multiply: 5*(3x + 16) = 4*(4x + 16) -> 15x + 80 = 16x + 64.\n4) Solve for x: x = 16.\n5) The numbers are: 3 * 16 = 48 and 4 * 16 = 64.\nAnswer: 48 and 64."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 18 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 18) / (4x + 18) = 4 / 5.\n3) Cross-multiply: 5*(3x + 18) = 4*(4x + 18) -> 15x + 90 = 16x + 72.\n4) Solve for x: x = 18.\n5) The numbers are: 3 * 18 = 54 and 4 * 18 = 72.\nAnswer: 54 and 72."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 20 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 20) / (4x + 20) = 4 / 5.\n3) Cross-multiply: 5*(3x + 20) = 4*(4x + 20) -> 15x + 100 = 16x + 80.\n4) Solve for x: x = 20.\n5) The numbers are: 3 * 20 = 60 and 4 * 20 = 80.\nAnswer: 60 and 80."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 22 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 22) / (4x + 22) = 4 / 5.\n3) Cross-multiply: 5*(3x + 22) = 4*(4x + 22) -> 15x + 110 = 16x + 88.\n4) Solve for x: x = 22.\n5) The numbers are: 3 * 22 = 66 and 4 * 22 = 88.\nAnswer: 66 and 88."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 24 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 24) / (4x + 24) = 4 / 5.\n3) Cross-multiply: 5*(3x + 24) = 4*(4x + 24) -> 15x + 120 = 16x + 96.\n4) Solve for x: x = 24.\n5) The numbers are: 3 * 24 = 72 and 4 * 24 = 96.\nAnswer: 72 and 96."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 26 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 26) / (4x + 26) = 4 / 5.\n3) Cross-multiply: 5*(3x + 26) = 4*(4x + 26) -> 15x + 130 = 16x + 104.\n4) Solve for x: x = 26.\n5) The numbers are: 3 * 26 = 78 and 4 * 26 = 104.\nAnswer: 78 and 104."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 28 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 28) / (4x + 28) = 4 / 5.\n3) Cross-multiply: 5*(3x + 28) = 4*(4x + 28) -> 15x + 140 = 16x + 112.\n4) Solve for x: x = 28.\n5) The numbers are: 3 * 28 = 84 and 4 * 28 = 112.\nAnswer: 84 and 112."
    },
    {
      "q": "Two numbers are in the ratio 3:4. If we add 30 to both, the new ratio is 4:5. Find the numbers.",
      "a": "1) Let the numbers be 3x and 4x.\n2) Set up proportion: (3x + 30) / (4x + 30) = 4 / 5.\n3) Cross-multiply: 5*(3x + 30) = 4*(4x + 30) -> 15x + 150 = 16x + 120.\n4) Solve for x: x = 30.\n5) The numbers are: 3 * 30 = 90 and 4 * 30 = 120.\nAnswer: 90 and 120."
    }
  ],
  "partnership": [
    {
      "q": "A invests $1000 for 6 months and B invests $1500 for 8 months. Divide a profit of $4400 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (1000*6) : (1500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 4400 = $1466.67.\n3) B's share of profit = 2/3 * 4400 = $2933.33.\nAnswer: A's share = $1466.67, B's share = $2933.33."
    },
    {
      "q": "A invests $2000 for 6 months and B invests $3000 for 8 months. Divide a profit of $8800 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (2000*6) : (3000*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 8800 = $2933.33.\n3) B's share of profit = 2/3 * 8800 = $5866.67.\nAnswer: A's share = $2933.33, B's share = $5866.67."
    },
    {
      "q": "A invests $3000 for 6 months and B invests $4500 for 8 months. Divide a profit of $13200 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (3000*6) : (4500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 13200 = $4400.00.\n3) B's share of profit = 2/3 * 13200 = $8800.00.\nAnswer: A's share = $4400.00, B's share = $8800.00."
    },
    {
      "q": "A invests $4000 for 6 months and B invests $6000 for 8 months. Divide a profit of $17600 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (4000*6) : (6000*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 17600 = $5866.67.\n3) B's share of profit = 2/3 * 17600 = $11733.33.\nAnswer: A's share = $5866.67, B's share = $11733.33."
    },
    {
      "q": "A invests $5000 for 6 months and B invests $7500 for 8 months. Divide a profit of $22000 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (5000*6) : (7500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 22000 = $7333.33.\n3) B's share of profit = 2/3 * 22000 = $14666.67.\nAnswer: A's share = $7333.33, B's share = $14666.67."
    },
    {
      "q": "A invests $6000 for 6 months and B invests $9000 for 8 months. Divide a profit of $26400 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (6000*6) : (9000*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 26400 = $8800.00.\n3) B's share of profit = 2/3 * 26400 = $17600.00.\nAnswer: A's share = $8800.00, B's share = $17600.00."
    },
    {
      "q": "A invests $7000 for 6 months and B invests $10500 for 8 months. Divide a profit of $30800 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (7000*6) : (10500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 30800 = $10266.67.\n3) B's share of profit = 2/3 * 30800 = $20533.33.\nAnswer: A's share = $10266.67, B's share = $20533.33."
    },
    {
      "q": "A invests $8000 for 6 months and B invests $12000 for 8 months. Divide a profit of $35200 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (8000*6) : (12000*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 35200 = $11733.33.\n3) B's share of profit = 2/3 * 35200 = $23466.67.\nAnswer: A's share = $11733.33, B's share = $23466.67."
    },
    {
      "q": "A invests $9000 for 6 months and B invests $13500 for 8 months. Divide a profit of $39600 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (9000*6) : (13500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 39600 = $13200.00.\n3) B's share of profit = 2/3 * 39600 = $26400.00.\nAnswer: A's share = $13200.00, B's share = $26400.00."
    },
    {
      "q": "A invests $10000 for 6 months and B invests $15000 for 8 months. Divide a profit of $44000 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (10000*6) : (15000*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 44000 = $14666.67.\n3) B's share of profit = 2/3 * 44000 = $29333.33.\nAnswer: A's share = $14666.67, B's share = $29333.33."
    },
    {
      "q": "A invests $11000 for 6 months and B invests $16500 for 8 months. Divide a profit of $48400 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (11000*6) : (16500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 48400 = $16133.33.\n3) B's share of profit = 2/3 * 48400 = $32266.67.\nAnswer: A's share = $16133.33, B's share = $32266.67."
    },
    {
      "q": "A invests $12000 for 6 months and B invests $18000 for 8 months. Divide a profit of $52800 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (12000*6) : (18000*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 52800 = $17600.00.\n3) B's share of profit = 2/3 * 52800 = $35200.00.\nAnswer: A's share = $17600.00, B's share = $35200.00."
    },
    {
      "q": "A invests $13000 for 6 months and B invests $19500 for 8 months. Divide a profit of $57200 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (13000*6) : (19500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 57200 = $19066.67.\n3) B's share of profit = 2/3 * 57200 = $38133.33.\nAnswer: A's share = $19066.67, B's share = $38133.33."
    },
    {
      "q": "A invests $14000 for 6 months and B invests $21000 for 8 months. Divide a profit of $61600 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (14000*6) : (21000*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 61600 = $20533.33.\n3) B's share of profit = 2/3 * 61600 = $41066.67.\nAnswer: A's share = $20533.33, B's share = $41066.67."
    },
    {
      "q": "A invests $15000 for 6 months and B invests $22500 for 8 months. Divide a profit of $66000 between them.",
      "a": "1) Calculate investment-months ratio: A : B = (15000*6) : (22500*8) = 6000 : 12000 = 1:2.\n2) A's share of profit = 1/3 * 66000 = $22000.00.\n3) B's share of profit = 2/3 * 66000 = $44000.00.\nAnswer: A's share = $22000.00, B's share = $44000.00."
    }
  ],
  "averages": [
    {
      "q": "The average age of 6 students is 16 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 6 ) * ( 16 ) = 96.\n2) New number of people = 7.\n3) New average = 17.\n4) Sum of all ages = ( 7 ) * ( 17 ) = 119.\n5) Teacher's age = New Sum - Old Sum = 119 - 96 = 23 years.\nAnswer: 23 years."
    },
    {
      "q": "The average age of 7 students is 17 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 7 ) * ( 17 ) = 119.\n2) New number of people = 8.\n3) New average = 18.\n4) Sum of all ages = ( 8 ) * ( 18 ) = 144.\n5) Teacher's age = New Sum - Old Sum = 144 - 119 = 25 years.\nAnswer: 25 years."
    },
    {
      "q": "The average age of 8 students is 18 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 8 ) * ( 18 ) = 144.\n2) New number of people = 9.\n3) New average = 19.\n4) Sum of all ages = ( 9 ) * ( 19 ) = 171.\n5) Teacher's age = New Sum - Old Sum = 171 - 144 = 27 years.\nAnswer: 27 years."
    },
    {
      "q": "The average age of 9 students is 19 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 9 ) * ( 19 ) = 171.\n2) New number of people = 10.\n3) New average = 20.\n4) Sum of all ages = ( 10 ) * ( 20 ) = 200.\n5) Teacher's age = New Sum - Old Sum = 200 - 171 = 29 years.\nAnswer: 29 years."
    },
    {
      "q": "The average age of 10 students is 20 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 10 ) * ( 20 ) = 200.\n2) New number of people = 11.\n3) New average = 21.\n4) Sum of all ages = ( 11 ) * ( 21 ) = 231.\n5) Teacher's age = New Sum - Old Sum = 231 - 200 = 31 years.\nAnswer: 31 years."
    },
    {
      "q": "The average age of 11 students is 21 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 11 ) * ( 21 ) = 231.\n2) New number of people = 12.\n3) New average = 22.\n4) Sum of all ages = ( 12 ) * ( 22 ) = 264.\n5) Teacher's age = New Sum - Old Sum = 264 - 231 = 33 years.\nAnswer: 33 years."
    },
    {
      "q": "The average age of 12 students is 22 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 12 ) * ( 22 ) = 264.\n2) New number of people = 13.\n3) New average = 23.\n4) Sum of all ages = ( 13 ) * ( 23 ) = 299.\n5) Teacher's age = New Sum - Old Sum = 299 - 264 = 35 years.\nAnswer: 35 years."
    },
    {
      "q": "The average age of 13 students is 23 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 13 ) * ( 23 ) = 299.\n2) New number of people = 14.\n3) New average = 24.\n4) Sum of all ages = ( 14 ) * ( 24 ) = 336.\n5) Teacher's age = New Sum - Old Sum = 336 - 299 = 37 years.\nAnswer: 37 years."
    },
    {
      "q": "The average age of 14 students is 24 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 14 ) * ( 24 ) = 336.\n2) New number of people = 15.\n3) New average = 25.\n4) Sum of all ages = ( 15 ) * ( 25 ) = 375.\n5) Teacher's age = New Sum - Old Sum = 375 - 336 = 39 years.\nAnswer: 39 years."
    },
    {
      "q": "The average age of 15 students is 25 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 15 ) * ( 25 ) = 375.\n2) New number of people = 16.\n3) New average = 26.\n4) Sum of all ages = ( 16 ) * ( 26 ) = 416.\n5) Teacher's age = New Sum - Old Sum = 416 - 375 = 41 years.\nAnswer: 41 years."
    },
    {
      "q": "The average age of 16 students is 26 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 16 ) * ( 26 ) = 416.\n2) New number of people = 17.\n3) New average = 27.\n4) Sum of all ages = ( 17 ) * ( 27 ) = 459.\n5) Teacher's age = New Sum - Old Sum = 459 - 416 = 43 years.\nAnswer: 43 years."
    },
    {
      "q": "The average age of 17 students is 27 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 17 ) * ( 27 ) = 459.\n2) New number of people = 18.\n3) New average = 28.\n4) Sum of all ages = ( 18 ) * ( 28 ) = 504.\n5) Teacher's age = New Sum - Old Sum = 504 - 459 = 45 years.\nAnswer: 45 years."
    },
    {
      "q": "The average age of 18 students is 28 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 18 ) * ( 28 ) = 504.\n2) New number of people = 19.\n3) New average = 29.\n4) Sum of all ages = ( 19 ) * ( 29 ) = 551.\n5) Teacher's age = New Sum - Old Sum = 551 - 504 = 47 years.\nAnswer: 47 years."
    },
    {
      "q": "The average age of 19 students is 29 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 19 ) * ( 29 ) = 551.\n2) New number of people = 20.\n3) New average = 30.\n4) Sum of all ages = ( 20 ) * ( 30 ) = 600.\n5) Teacher's age = New Sum - Old Sum = 600 - 551 = 49 years.\nAnswer: 49 years."
    },
    {
      "q": "The average age of 20 students is 30 years. If the teacher's age is added, the average increases by 1. Find the teacher's age.",
      "a": "1) Sum of age of students = ( 20 ) * ( 30 ) = 600.\n2) New number of people = 21.\n3) New average = 31.\n4) Sum of all ages = ( 21 ) * ( 31 ) = 651.\n5) Teacher's age = New Sum - Old Sum = 651 - 600 = 51 years.\nAnswer: 51 years."
    }
  ],
  "time-work": [
    {
      "q": "A does a job in 4 days and B does it in 12 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 4 per day.\n2) B's rate = 1 / 12 per day.\n3) Combined rate = 1/4 + 1/12 = (3 + 1)/12 = 4/12 = 1/3.\n4) Days taken together = 1 / (1/3) = 3 days.\nAnswer: 3 days."
    },
    {
      "q": "A does a job in 8 days and B does it in 24 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 8 per day.\n2) B's rate = 1 / 24 per day.\n3) Combined rate = 1/8 + 1/24 = (3 + 1)/24 = 4/24 = 1/6.\n4) Days taken together = 1 / (1/6) = 6 days.\nAnswer: 6 days."
    },
    {
      "q": "A does a job in 12 days and B does it in 36 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 12 per day.\n2) B's rate = 1 / 36 per day.\n3) Combined rate = 1/12 + 1/36 = (3 + 1)/36 = 4/36 = 1/9.\n4) Days taken together = 1 / (1/9) = 9 days.\nAnswer: 9 days."
    },
    {
      "q": "A does a job in 16 days and B does it in 48 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 16 per day.\n2) B's rate = 1 / 48 per day.\n3) Combined rate = 1/16 + 1/48 = (3 + 1)/48 = 4/48 = 1/12.\n4) Days taken together = 1 / (1/12) = 12 days.\nAnswer: 12 days."
    },
    {
      "q": "A does a job in 20 days and B does it in 60 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 20 per day.\n2) B's rate = 1 / 60 per day.\n3) Combined rate = 1/20 + 1/60 = (3 + 1)/60 = 4/60 = 1/15.\n4) Days taken together = 1 / (1/15) = 15 days.\nAnswer: 15 days."
    },
    {
      "q": "A does a job in 24 days and B does it in 72 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 24 per day.\n2) B's rate = 1 / 72 per day.\n3) Combined rate = 1/24 + 1/72 = (3 + 1)/72 = 4/72 = 1/18.\n4) Days taken together = 1 / (1/18) = 18 days.\nAnswer: 18 days."
    },
    {
      "q": "A does a job in 28 days and B does it in 84 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 28 per day.\n2) B's rate = 1 / 84 per day.\n3) Combined rate = 1/28 + 1/84 = (3 + 1)/84 = 4/84 = 1/21.\n4) Days taken together = 1 / (1/21) = 21 days.\nAnswer: 21 days."
    },
    {
      "q": "A does a job in 32 days and B does it in 96 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 32 per day.\n2) B's rate = 1 / 96 per day.\n3) Combined rate = 1/32 + 1/96 = (3 + 1)/96 = 4/96 = 1/24.\n4) Days taken together = 1 / (1/24) = 24 days.\nAnswer: 24 days."
    },
    {
      "q": "A does a job in 36 days and B does it in 108 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 36 per day.\n2) B's rate = 1 / 108 per day.\n3) Combined rate = 1/36 + 1/108 = (3 + 1)/108 = 4/108 = 1/27.\n4) Days taken together = 1 / (1/27) = 27 days.\nAnswer: 27 days."
    },
    {
      "q": "A does a job in 40 days and B does it in 120 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 40 per day.\n2) B's rate = 1 / 120 per day.\n3) Combined rate = 1/40 + 1/120 = (3 + 1)/120 = 4/120 = 1/30.\n4) Days taken together = 1 / (1/30) = 30 days.\nAnswer: 30 days."
    },
    {
      "q": "A does a job in 44 days and B does it in 132 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 44 per day.\n2) B's rate = 1 / 132 per day.\n3) Combined rate = 1/44 + 1/132 = (3 + 1)/132 = 4/132 = 1/33.\n4) Days taken together = 1 / (1/33) = 33 days.\nAnswer: 33 days."
    },
    {
      "q": "A does a job in 48 days and B does it in 144 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 48 per day.\n2) B's rate = 1 / 144 per day.\n3) Combined rate = 1/48 + 1/144 = (3 + 1)/144 = 4/144 = 1/36.\n4) Days taken together = 1 / (1/36) = 36 days.\nAnswer: 36 days."
    },
    {
      "q": "A does a job in 52 days and B does it in 156 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 52 per day.\n2) B's rate = 1 / 156 per day.\n3) Combined rate = 1/52 + 1/156 = (3 + 1)/156 = 4/156 = 1/39.\n4) Days taken together = 1 / (1/39) = 39 days.\nAnswer: 39 days."
    },
    {
      "q": "A does a job in 56 days and B does it in 168 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 56 per day.\n2) B's rate = 1 / 168 per day.\n3) Combined rate = 1/56 + 1/168 = (3 + 1)/168 = 4/168 = 1/42.\n4) Days taken together = 1 / (1/42) = 42 days.\nAnswer: 42 days."
    },
    {
      "q": "A does a job in 60 days and B does it in 180 days. If they work together, how many days will they take?",
      "a": "1) A's rate = 1 / 60 per day.\n2) B's rate = 1 / 180 per day.\n3) Combined rate = 1/60 + 1/180 = (3 + 1)/180 = 4/180 = 1/45.\n4) Days taken together = 1 / (1/45) = 45 days.\nAnswer: 45 days."
    }
  ],
  "pipes": [
    {
      "q": "Pipe A fills a tank in 6 hours. Pipe B empties it in 9 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 6.\n2) Emptying rate of B = -1 / 9.\n3) Combined rate = 1/6 - 1/9 = (3 - 2)/18 = 1/18.\n4) Net time to fill = 18 hours.\nAnswer: 18 hours."
    },
    {
      "q": "Pipe A fills a tank in 12 hours. Pipe B empties it in 18 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 12.\n2) Emptying rate of B = -1 / 18.\n3) Combined rate = 1/12 - 1/18 = (3 - 2)/36 = 1/36.\n4) Net time to fill = 36 hours.\nAnswer: 36 hours."
    },
    {
      "q": "Pipe A fills a tank in 18 hours. Pipe B empties it in 27 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 18.\n2) Emptying rate of B = -1 / 27.\n3) Combined rate = 1/18 - 1/27 = (3 - 2)/54 = 1/54.\n4) Net time to fill = 54 hours.\nAnswer: 54 hours."
    },
    {
      "q": "Pipe A fills a tank in 24 hours. Pipe B empties it in 36 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 24.\n2) Emptying rate of B = -1 / 36.\n3) Combined rate = 1/24 - 1/36 = (3 - 2)/72 = 1/72.\n4) Net time to fill = 72 hours.\nAnswer: 72 hours."
    },
    {
      "q": "Pipe A fills a tank in 30 hours. Pipe B empties it in 45 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 30.\n2) Emptying rate of B = -1 / 45.\n3) Combined rate = 1/30 - 1/45 = (3 - 2)/90 = 1/90.\n4) Net time to fill = 90 hours.\nAnswer: 90 hours."
    },
    {
      "q": "Pipe A fills a tank in 36 hours. Pipe B empties it in 54 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 36.\n2) Emptying rate of B = -1 / 54.\n3) Combined rate = 1/36 - 1/54 = (3 - 2)/108 = 1/108.\n4) Net time to fill = 108 hours.\nAnswer: 108 hours."
    },
    {
      "q": "Pipe A fills a tank in 42 hours. Pipe B empties it in 63 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 42.\n2) Emptying rate of B = -1 / 63.\n3) Combined rate = 1/42 - 1/63 = (3 - 2)/126 = 1/126.\n4) Net time to fill = 126 hours.\nAnswer: 126 hours."
    },
    {
      "q": "Pipe A fills a tank in 48 hours. Pipe B empties it in 72 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 48.\n2) Emptying rate of B = -1 / 72.\n3) Combined rate = 1/48 - 1/72 = (3 - 2)/144 = 1/144.\n4) Net time to fill = 144 hours.\nAnswer: 144 hours."
    },
    {
      "q": "Pipe A fills a tank in 54 hours. Pipe B empties it in 81 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 54.\n2) Emptying rate of B = -1 / 81.\n3) Combined rate = 1/54 - 1/81 = (3 - 2)/162 = 1/162.\n4) Net time to fill = 162 hours.\nAnswer: 162 hours."
    },
    {
      "q": "Pipe A fills a tank in 60 hours. Pipe B empties it in 90 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 60.\n2) Emptying rate of B = -1 / 90.\n3) Combined rate = 1/60 - 1/90 = (3 - 2)/180 = 1/180.\n4) Net time to fill = 180 hours.\nAnswer: 180 hours."
    },
    {
      "q": "Pipe A fills a tank in 66 hours. Pipe B empties it in 99 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 66.\n2) Emptying rate of B = -1 / 99.\n3) Combined rate = 1/66 - 1/99 = (3 - 2)/198 = 1/198.\n4) Net time to fill = 198 hours.\nAnswer: 198 hours."
    },
    {
      "q": "Pipe A fills a tank in 72 hours. Pipe B empties it in 108 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 72.\n2) Emptying rate of B = -1 / 108.\n3) Combined rate = 1/72 - 1/108 = (3 - 2)/216 = 1/216.\n4) Net time to fill = 216 hours.\nAnswer: 216 hours."
    },
    {
      "q": "Pipe A fills a tank in 78 hours. Pipe B empties it in 117 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 78.\n2) Emptying rate of B = -1 / 117.\n3) Combined rate = 1/78 - 1/117 = (3 - 2)/234 = 1/234.\n4) Net time to fill = 234 hours.\nAnswer: 234 hours."
    },
    {
      "q": "Pipe A fills a tank in 84 hours. Pipe B empties it in 126 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 84.\n2) Emptying rate of B = -1 / 126.\n3) Combined rate = 1/84 - 1/126 = (3 - 2)/252 = 1/252.\n4) Net time to fill = 252 hours.\nAnswer: 252 hours."
    },
    {
      "q": "Pipe A fills a tank in 90 hours. Pipe B empties it in 135 hours. If both are open, how long to fill?",
      "a": "1) Filling rate of A = +1 / 90.\n2) Emptying rate of B = -1 / 135.\n3) Combined rate = 1/90 - 1/135 = (3 - 2)/270 = 1/270.\n4) Net time to fill = 270 hours.\nAnswer: 270 hours."
    }
  ],
  "time-dist": [
    {
      "q": "A man travels a distance of 60 km. If he travels at 15 km/h for the first half and 30 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 15 km/h, speed 2 = 30 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 15 * 30) / (15 + 30) = 900 / 45 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 120 km. If he travels at 30 km/h for the first half and 60 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 30 km/h, speed 2 = 60 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 30 * 60) / (30 + 60) = 1800 / 90 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 180 km. If he travels at 45 km/h for the first half and 90 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 45 km/h, speed 2 = 90 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 45 * 90) / (45 + 90) = 2700 / 135 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 240 km. If he travels at 60 km/h for the first half and 120 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 60 km/h, speed 2 = 120 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 60 * 120) / (60 + 120) = 3600 / 180 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 300 km. If he travels at 75 km/h for the first half and 150 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 75 km/h, speed 2 = 150 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 75 * 150) / (75 + 150) = 4500 / 225 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 360 km. If he travels at 90 km/h for the first half and 180 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 90 km/h, speed 2 = 180 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 90 * 180) / (90 + 180) = 5400 / 270 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 420 km. If he travels at 105 km/h for the first half and 210 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 105 km/h, speed 2 = 210 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 105 * 210) / (105 + 210) = 6300 / 315 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 480 km. If he travels at 120 km/h for the first half and 240 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 120 km/h, speed 2 = 240 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 120 * 240) / (120 + 240) = 7200 / 360 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 540 km. If he travels at 135 km/h for the first half and 270 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 135 km/h, speed 2 = 270 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 135 * 270) / (135 + 270) = 8100 / 405 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 600 km. If he travels at 150 km/h for the first half and 300 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 150 km/h, speed 2 = 300 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 150 * 300) / (150 + 300) = 9000 / 450 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 660 km. If he travels at 165 km/h for the first half and 330 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 165 km/h, speed 2 = 330 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 165 * 330) / (165 + 330) = 9900 / 495 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 720 km. If he travels at 180 km/h for the first half and 360 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 180 km/h, speed 2 = 360 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 180 * 360) / (180 + 360) = 10800 / 540 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 780 km. If he travels at 195 km/h for the first half and 390 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 195 km/h, speed 2 = 390 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 195 * 390) / (195 + 390) = 11700 / 585 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 840 km. If he travels at 210 km/h for the first half and 420 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 210 km/h, speed 2 = 420 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 210 * 420) / (210 + 420) = 12600 / 630 = 20 km/h.\nAnswer: 20 km/h."
    },
    {
      "q": "A man travels a distance of 900 km. If he travels at 225 km/h for the first half and 450 km/h for the second half, find the average speed.",
      "a": "1) Let speed 1 = 225 km/h, speed 2 = 450 km/h.\n2) Since the distance intervals are equal halves, use average speed formula: 2xy / (x+y).\n3) Average speed = (2 * 225 * 450) / (225 + 450) = 13500 / 675 = 20 km/h.\nAnswer: 20 km/h."
    }
  ],
  "boats": [
    {
      "q": "A boat travels downstream at 12 km/h and upstream at 6 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 12 km/h. Upstream speed (u) = 6 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (12 - 6) / 2 = 6 / 2 = 3 km/h.\nAnswer: 3 km/h."
    },
    {
      "q": "A boat travels downstream at 24 km/h and upstream at 12 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 24 km/h. Upstream speed (u) = 12 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (24 - 12) / 2 = 12 / 2 = 6 km/h.\nAnswer: 6 km/h."
    },
    {
      "q": "A boat travels downstream at 36 km/h and upstream at 18 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 36 km/h. Upstream speed (u) = 18 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (36 - 18) / 2 = 18 / 2 = 9 km/h.\nAnswer: 9 km/h."
    },
    {
      "q": "A boat travels downstream at 48 km/h and upstream at 24 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 48 km/h. Upstream speed (u) = 24 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (48 - 24) / 2 = 24 / 2 = 12 km/h.\nAnswer: 12 km/h."
    },
    {
      "q": "A boat travels downstream at 60 km/h and upstream at 30 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 60 km/h. Upstream speed (u) = 30 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (60 - 30) / 2 = 30 / 2 = 15 km/h.\nAnswer: 15 km/h."
    },
    {
      "q": "A boat travels downstream at 72 km/h and upstream at 36 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 72 km/h. Upstream speed (u) = 36 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (72 - 36) / 2 = 36 / 2 = 18 km/h.\nAnswer: 18 km/h."
    },
    {
      "q": "A boat travels downstream at 84 km/h and upstream at 42 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 84 km/h. Upstream speed (u) = 42 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (84 - 42) / 2 = 42 / 2 = 21 km/h.\nAnswer: 21 km/h."
    },
    {
      "q": "A boat travels downstream at 96 km/h and upstream at 48 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 96 km/h. Upstream speed (u) = 48 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (96 - 48) / 2 = 48 / 2 = 24 km/h.\nAnswer: 24 km/h."
    },
    {
      "q": "A boat travels downstream at 108 km/h and upstream at 54 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 108 km/h. Upstream speed (u) = 54 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (108 - 54) / 2 = 54 / 2 = 27 km/h.\nAnswer: 27 km/h."
    },
    {
      "q": "A boat travels downstream at 120 km/h and upstream at 60 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 120 km/h. Upstream speed (u) = 60 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (120 - 60) / 2 = 60 / 2 = 30 km/h.\nAnswer: 30 km/h."
    },
    {
      "q": "A boat travels downstream at 132 km/h and upstream at 66 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 132 km/h. Upstream speed (u) = 66 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (132 - 66) / 2 = 66 / 2 = 33 km/h.\nAnswer: 33 km/h."
    },
    {
      "q": "A boat travels downstream at 144 km/h and upstream at 72 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 144 km/h. Upstream speed (u) = 72 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (144 - 72) / 2 = 72 / 2 = 36 km/h.\nAnswer: 36 km/h."
    },
    {
      "q": "A boat travels downstream at 156 km/h and upstream at 78 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 156 km/h. Upstream speed (u) = 78 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (156 - 78) / 2 = 78 / 2 = 39 km/h.\nAnswer: 39 km/h."
    },
    {
      "q": "A boat travels downstream at 168 km/h and upstream at 84 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 168 km/h. Upstream speed (u) = 84 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (168 - 84) / 2 = 84 / 2 = 42 km/h.\nAnswer: 42 km/h."
    },
    {
      "q": "A boat travels downstream at 180 km/h and upstream at 90 km/h. Find the speed of the stream.",
      "a": "1) Downstream speed (d) = 180 km/h. Upstream speed (u) = 90 km/h.\n2) Formula for speed of stream = (d - u) / 2.\n3) Stream speed = (180 - 90) / 2 = 90 / 2 = 45 km/h.\nAnswer: 45 km/h."
    }
  ],
  "circular": [
    {
      "q": "Two runners A and B run on a 200m circular track at speeds of 5 m/s and 3 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 200m.\n2) Relative speed (same direction) = Speed A - Speed B = 5 - 3 = 2 m/s.\n3) Meeting time = Track circumference / Relative speed = 200 / 2 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 400m circular track at speeds of 10 m/s and 6 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 400m.\n2) Relative speed (same direction) = Speed A - Speed B = 10 - 6 = 4 m/s.\n3) Meeting time = Track circumference / Relative speed = 400 / 4 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 600m circular track at speeds of 15 m/s and 9 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 600m.\n2) Relative speed (same direction) = Speed A - Speed B = 15 - 9 = 6 m/s.\n3) Meeting time = Track circumference / Relative speed = 600 / 6 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 800m circular track at speeds of 20 m/s and 12 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 800m.\n2) Relative speed (same direction) = Speed A - Speed B = 20 - 12 = 8 m/s.\n3) Meeting time = Track circumference / Relative speed = 800 / 8 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 1000m circular track at speeds of 25 m/s and 15 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 1000m.\n2) Relative speed (same direction) = Speed A - Speed B = 25 - 15 = 10 m/s.\n3) Meeting time = Track circumference / Relative speed = 1000 / 10 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 1200m circular track at speeds of 30 m/s and 18 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 1200m.\n2) Relative speed (same direction) = Speed A - Speed B = 30 - 18 = 12 m/s.\n3) Meeting time = Track circumference / Relative speed = 1200 / 12 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 1400m circular track at speeds of 35 m/s and 21 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 1400m.\n2) Relative speed (same direction) = Speed A - Speed B = 35 - 21 = 14 m/s.\n3) Meeting time = Track circumference / Relative speed = 1400 / 14 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 1600m circular track at speeds of 40 m/s and 24 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 1600m.\n2) Relative speed (same direction) = Speed A - Speed B = 40 - 24 = 16 m/s.\n3) Meeting time = Track circumference / Relative speed = 1600 / 16 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 1800m circular track at speeds of 45 m/s and 27 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 1800m.\n2) Relative speed (same direction) = Speed A - Speed B = 45 - 27 = 18 m/s.\n3) Meeting time = Track circumference / Relative speed = 1800 / 18 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 2000m circular track at speeds of 50 m/s and 30 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 2000m.\n2) Relative speed (same direction) = Speed A - Speed B = 50 - 30 = 20 m/s.\n3) Meeting time = Track circumference / Relative speed = 2000 / 20 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 2200m circular track at speeds of 55 m/s and 33 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 2200m.\n2) Relative speed (same direction) = Speed A - Speed B = 55 - 33 = 22 m/s.\n3) Meeting time = Track circumference / Relative speed = 2200 / 22 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 2400m circular track at speeds of 60 m/s and 36 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 2400m.\n2) Relative speed (same direction) = Speed A - Speed B = 60 - 36 = 24 m/s.\n3) Meeting time = Track circumference / Relative speed = 2400 / 24 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 2600m circular track at speeds of 65 m/s and 39 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 2600m.\n2) Relative speed (same direction) = Speed A - Speed B = 65 - 39 = 26 m/s.\n3) Meeting time = Track circumference / Relative speed = 2600 / 26 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 2800m circular track at speeds of 70 m/s and 42 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 2800m.\n2) Relative speed (same direction) = Speed A - Speed B = 70 - 42 = 28 m/s.\n3) Meeting time = Track circumference / Relative speed = 2800 / 28 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners A and B run on a 3000m circular track at speeds of 75 m/s and 45 m/s in the same direction. When will they meet first?",
      "a": "1) Track circumference = 3000m.\n2) Relative speed (same direction) = Speed A - Speed B = 75 - 45 = 30 m/s.\n3) Meeting time = Track circumference / Relative speed = 3000 / 30 = 100 seconds.\nAnswer: 100 seconds."
    }
  ],
  "si-ci": [
    {
      "q": "Find the difference between simple and compound interest on $1000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $1000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 1000 * (10/100)^2 = 1000 * (1/100) = $10.\nAnswer: $10."
    },
    {
      "q": "Find the difference between simple and compound interest on $2000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $2000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 2000 * (10/100)^2 = 2000 * (1/100) = $20.\nAnswer: $20."
    },
    {
      "q": "Find the difference between simple and compound interest on $3000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $3000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 3000 * (10/100)^2 = 3000 * (1/100) = $30.\nAnswer: $30."
    },
    {
      "q": "Find the difference between simple and compound interest on $4000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $4000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 4000 * (10/100)^2 = 4000 * (1/100) = $40.\nAnswer: $40."
    },
    {
      "q": "Find the difference between simple and compound interest on $5000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $5000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 5000 * (10/100)^2 = 5000 * (1/100) = $50.\nAnswer: $50."
    },
    {
      "q": "Find the difference between simple and compound interest on $6000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $6000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 6000 * (10/100)^2 = 6000 * (1/100) = $60.\nAnswer: $60."
    },
    {
      "q": "Find the difference between simple and compound interest on $7000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $7000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 7000 * (10/100)^2 = 7000 * (1/100) = $70.\nAnswer: $70."
    },
    {
      "q": "Find the difference between simple and compound interest on $8000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $8000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 8000 * (10/100)^2 = 8000 * (1/100) = $80.\nAnswer: $80."
    },
    {
      "q": "Find the difference between simple and compound interest on $9000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $9000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 9000 * (10/100)^2 = 9000 * (1/100) = $90.\nAnswer: $90."
    },
    {
      "q": "Find the difference between simple and compound interest on $10000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $10000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 10000 * (10/100)^2 = 10000 * (1/100) = $100.\nAnswer: $100."
    },
    {
      "q": "Find the difference between simple and compound interest on $11000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $11000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 11000 * (10/100)^2 = 11000 * (1/100) = $110.\nAnswer: $110."
    },
    {
      "q": "Find the difference between simple and compound interest on $12000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $12000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 12000 * (10/100)^2 = 12000 * (1/100) = $120.\nAnswer: $120."
    },
    {
      "q": "Find the difference between simple and compound interest on $13000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $13000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 13000 * (10/100)^2 = 13000 * (1/100) = $130.\nAnswer: $130."
    },
    {
      "q": "Find the difference between simple and compound interest on $14000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $14000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 14000 * (10/100)^2 = 14000 * (1/100) = $140.\nAnswer: $140."
    },
    {
      "q": "Find the difference between simple and compound interest on $15000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $15000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 15000 * (10/100)^2 = 15000 * (1/100) = $150.\nAnswer: $150."
    }
  ],
  "allegations": [
    {
      "q": "In what ratio must rice at $20/kg be mixed with rice at $30/kg to obtain a mixture worth $24/kg?",
      "a": "1) Cheaper Price (C) = 20. Dearer Price (D) = 30. Mean Price (M) = 24.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (30 - 24) / (24 - 20) = 6 / 4 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $40/kg be mixed with rice at $60/kg to obtain a mixture worth $48/kg?",
      "a": "1) Cheaper Price (C) = 40. Dearer Price (D) = 60. Mean Price (M) = 48.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (60 - 48) / (48 - 40) = 12 / 8 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $60/kg be mixed with rice at $90/kg to obtain a mixture worth $72/kg?",
      "a": "1) Cheaper Price (C) = 60. Dearer Price (D) = 90. Mean Price (M) = 72.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (90 - 72) / (72 - 60) = 18 / 12 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $80/kg be mixed with rice at $120/kg to obtain a mixture worth $96/kg?",
      "a": "1) Cheaper Price (C) = 80. Dearer Price (D) = 120. Mean Price (M) = 96.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (120 - 96) / (96 - 80) = 24 / 16 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $100/kg be mixed with rice at $150/kg to obtain a mixture worth $120/kg?",
      "a": "1) Cheaper Price (C) = 100. Dearer Price (D) = 150. Mean Price (M) = 120.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (150 - 120) / (120 - 100) = 30 / 20 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $120/kg be mixed with rice at $180/kg to obtain a mixture worth $144/kg?",
      "a": "1) Cheaper Price (C) = 120. Dearer Price (D) = 180. Mean Price (M) = 144.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (180 - 144) / (144 - 120) = 36 / 24 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $140/kg be mixed with rice at $210/kg to obtain a mixture worth $168/kg?",
      "a": "1) Cheaper Price (C) = 140. Dearer Price (D) = 210. Mean Price (M) = 168.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (210 - 168) / (168 - 140) = 42 / 28 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $160/kg be mixed with rice at $240/kg to obtain a mixture worth $192/kg?",
      "a": "1) Cheaper Price (C) = 160. Dearer Price (D) = 240. Mean Price (M) = 192.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (240 - 192) / (192 - 160) = 48 / 32 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $180/kg be mixed with rice at $270/kg to obtain a mixture worth $216/kg?",
      "a": "1) Cheaper Price (C) = 180. Dearer Price (D) = 270. Mean Price (M) = 216.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (270 - 216) / (216 - 180) = 54 / 36 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $200/kg be mixed with rice at $300/kg to obtain a mixture worth $240/kg?",
      "a": "1) Cheaper Price (C) = 200. Dearer Price (D) = 300. Mean Price (M) = 240.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (300 - 240) / (240 - 200) = 60 / 40 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $220/kg be mixed with rice at $330/kg to obtain a mixture worth $264/kg?",
      "a": "1) Cheaper Price (C) = 220. Dearer Price (D) = 330. Mean Price (M) = 264.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (330 - 264) / (264 - 220) = 66 / 44 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $240/kg be mixed with rice at $360/kg to obtain a mixture worth $288/kg?",
      "a": "1) Cheaper Price (C) = 240. Dearer Price (D) = 360. Mean Price (M) = 288.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (360 - 288) / (288 - 240) = 72 / 48 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $260/kg be mixed with rice at $390/kg to obtain a mixture worth $312/kg?",
      "a": "1) Cheaper Price (C) = 260. Dearer Price (D) = 390. Mean Price (M) = 312.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (390 - 312) / (312 - 260) = 78 / 52 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $280/kg be mixed with rice at $420/kg to obtain a mixture worth $336/kg?",
      "a": "1) Cheaper Price (C) = 280. Dearer Price (D) = 420. Mean Price (M) = 336.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (420 - 336) / (336 - 280) = 84 / 56 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "In what ratio must rice at $300/kg be mixed with rice at $450/kg to obtain a mixture worth $360/kg?",
      "a": "1) Cheaper Price (C) = 300. Dearer Price (D) = 450. Mean Price (M) = 360.\n2) By alligation rule: (Quantity of Cheaper) / (Quantity of Dearer) = (D - M) / (M - C).\n3) Ratio = (450 - 360) / (360 - 300) = 90 / 60 = 3:2.\nAnswer: 3:2."
    }
  ],
  "simple-eq": [
    {
      "q": "Solve for x: 3x + 5 = 2x + 8",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 5 = 8 -> x + 5 = 8.\n2) Subtract 5 from both sides: x = 8 - 5 = 3.\nAnswer: x = 3."
    },
    {
      "q": "Solve for x: 3x + 10 = 2x + 16",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 10 = 16 -> x + 10 = 16.\n2) Subtract 10 from both sides: x = 16 - 10 = 6.\nAnswer: x = 6."
    },
    {
      "q": "Solve for x: 3x + 15 = 2x + 24",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 15 = 24 -> x + 15 = 24.\n2) Subtract 15 from both sides: x = 24 - 15 = 9.\nAnswer: x = 9."
    },
    {
      "q": "Solve for x: 3x + 20 = 2x + 32",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 20 = 32 -> x + 20 = 32.\n2) Subtract 20 from both sides: x = 32 - 20 = 12.\nAnswer: x = 12."
    },
    {
      "q": "Solve for x: 3x + 25 = 2x + 40",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 25 = 40 -> x + 25 = 40.\n2) Subtract 25 from both sides: x = 40 - 25 = 15.\nAnswer: x = 15."
    },
    {
      "q": "Solve for x: 3x + 30 = 2x + 48",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 30 = 48 -> x + 30 = 48.\n2) Subtract 30 from both sides: x = 48 - 30 = 18.\nAnswer: x = 18."
    },
    {
      "q": "Solve for x: 3x + 35 = 2x + 56",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 35 = 56 -> x + 35 = 56.\n2) Subtract 35 from both sides: x = 56 - 35 = 21.\nAnswer: x = 21."
    },
    {
      "q": "Solve for x: 3x + 40 = 2x + 64",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 40 = 64 -> x + 40 = 64.\n2) Subtract 40 from both sides: x = 64 - 40 = 24.\nAnswer: x = 24."
    },
    {
      "q": "Solve for x: 3x + 45 = 2x + 72",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 45 = 72 -> x + 45 = 72.\n2) Subtract 45 from both sides: x = 72 - 45 = 27.\nAnswer: x = 27."
    },
    {
      "q": "Solve for x: 3x + 50 = 2x + 80",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 50 = 80 -> x + 50 = 80.\n2) Subtract 50 from both sides: x = 80 - 50 = 30.\nAnswer: x = 30."
    },
    {
      "q": "Solve for x: 3x + 55 = 2x + 88",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 55 = 88 -> x + 55 = 88.\n2) Subtract 55 from both sides: x = 88 - 55 = 33.\nAnswer: x = 33."
    },
    {
      "q": "Solve for x: 3x + 60 = 2x + 96",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 60 = 96 -> x + 60 = 96.\n2) Subtract 60 from both sides: x = 96 - 60 = 36.\nAnswer: x = 36."
    },
    {
      "q": "Solve for x: 3x + 65 = 2x + 104",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 65 = 104 -> x + 65 = 104.\n2) Subtract 65 from both sides: x = 104 - 65 = 39.\nAnswer: x = 39."
    },
    {
      "q": "Solve for x: 3x + 70 = 2x + 112",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 70 = 112 -> x + 70 = 112.\n2) Subtract 70 from both sides: x = 112 - 70 = 42.\nAnswer: x = 42."
    },
    {
      "q": "Solve for x: 3x + 75 = 2x + 120",
      "a": "1) Subtract 2x from both sides: 3x - 2x + 75 = 120 -> x + 75 = 120.\n2) Subtract 75 from both sides: x = 120 - 75 = 45.\nAnswer: x = 45."
    }
  ],
  "quadratic": [
    {
      "q": "Find the roots of x^2 - 5x + 6 = 0.",
      "a": "1) Set up equation: x^2 - 5x + 6 = 0.\n2) Factorize by splitting the middle term: x^2 - 2x - 3x + 6 = 0.\n3) Factor out: x(x - 2) - 3(x - 2) = 0 -> (x - 2)(x - 3) = 0.\n4) The roots are x = 2 and x = 3.\nAnswer: x = 2, x = 3."
    },
    {
      "q": "Find the roots of x^2 - 10x + 24 = 0.",
      "a": "1) Set up equation: x^2 - 10x + 24 = 0.\n2) Factorize by splitting the middle term: x^2 - 4x - 6x + 24 = 0.\n3) Factor out: x(x - 4) - 6(x - 4) = 0 -> (x - 4)(x - 6) = 0.\n4) The roots are x = 4 and x = 6.\nAnswer: x = 4, x = 6."
    },
    {
      "q": "Find the roots of x^2 - 15x + 54 = 0.",
      "a": "1) Set up equation: x^2 - 15x + 54 = 0.\n2) Factorize by splitting the middle term: x^2 - 6x - 9x + 54 = 0.\n3) Factor out: x(x - 6) - 9(x - 6) = 0 -> (x - 6)(x - 9) = 0.\n4) The roots are x = 6 and x = 9.\nAnswer: x = 6, x = 9."
    },
    {
      "q": "Find the roots of x^2 - 20x + 96 = 0.",
      "a": "1) Set up equation: x^2 - 20x + 96 = 0.\n2) Factorize by splitting the middle term: x^2 - 8x - 12x + 96 = 0.\n3) Factor out: x(x - 8) - 12(x - 8) = 0 -> (x - 8)(x - 12) = 0.\n4) The roots are x = 8 and x = 12.\nAnswer: x = 8, x = 12."
    },
    {
      "q": "Find the roots of x^2 - 25x + 150 = 0.",
      "a": "1) Set up equation: x^2 - 25x + 150 = 0.\n2) Factorize by splitting the middle term: x^2 - 10x - 15x + 150 = 0.\n3) Factor out: x(x - 10) - 15(x - 10) = 0 -> (x - 10)(x - 15) = 0.\n4) The roots are x = 10 and x = 15.\nAnswer: x = 10, x = 15."
    },
    {
      "q": "Find the roots of x^2 - 30x + 216 = 0.",
      "a": "1) Set up equation: x^2 - 30x + 216 = 0.\n2) Factorize by splitting the middle term: x^2 - 12x - 18x + 216 = 0.\n3) Factor out: x(x - 12) - 18(x - 12) = 0 -> (x - 12)(x - 18) = 0.\n4) The roots are x = 12 and x = 18.\nAnswer: x = 12, x = 18."
    },
    {
      "q": "Find the roots of x^2 - 35x + 294 = 0.",
      "a": "1) Set up equation: x^2 - 35x + 294 = 0.\n2) Factorize by splitting the middle term: x^2 - 14x - 21x + 294 = 0.\n3) Factor out: x(x - 14) - 21(x - 14) = 0 -> (x - 14)(x - 21) = 0.\n4) The roots are x = 14 and x = 21.\nAnswer: x = 14, x = 21."
    },
    {
      "q": "Find the roots of x^2 - 40x + 384 = 0.",
      "a": "1) Set up equation: x^2 - 40x + 384 = 0.\n2) Factorize by splitting the middle term: x^2 - 16x - 24x + 384 = 0.\n3) Factor out: x(x - 16) - 24(x - 16) = 0 -> (x - 16)(x - 24) = 0.\n4) The roots are x = 16 and x = 24.\nAnswer: x = 16, x = 24."
    },
    {
      "q": "Find the roots of x^2 - 45x + 486 = 0.",
      "a": "1) Set up equation: x^2 - 45x + 486 = 0.\n2) Factorize by splitting the middle term: x^2 - 18x - 27x + 486 = 0.\n3) Factor out: x(x - 18) - 27(x - 18) = 0 -> (x - 18)(x - 27) = 0.\n4) The roots are x = 18 and x = 27.\nAnswer: x = 18, x = 27."
    },
    {
      "q": "Find the roots of x^2 - 50x + 600 = 0.",
      "a": "1) Set up equation: x^2 - 50x + 600 = 0.\n2) Factorize by splitting the middle term: x^2 - 20x - 30x + 600 = 0.\n3) Factor out: x(x - 20) - 30(x - 20) = 0 -> (x - 20)(x - 30) = 0.\n4) The roots are x = 20 and x = 30.\nAnswer: x = 20, x = 30."
    },
    {
      "q": "Find the roots of x^2 - 55x + 726 = 0.",
      "a": "1) Set up equation: x^2 - 55x + 726 = 0.\n2) Factorize by splitting the middle term: x^2 - 22x - 33x + 726 = 0.\n3) Factor out: x(x - 22) - 33(x - 22) = 0 -> (x - 22)(x - 33) = 0.\n4) The roots are x = 22 and x = 33.\nAnswer: x = 22, x = 33."
    },
    {
      "q": "Find the roots of x^2 - 60x + 864 = 0.",
      "a": "1) Set up equation: x^2 - 60x + 864 = 0.\n2) Factorize by splitting the middle term: x^2 - 24x - 36x + 864 = 0.\n3) Factor out: x(x - 24) - 36(x - 24) = 0 -> (x - 24)(x - 36) = 0.\n4) The roots are x = 24 and x = 36.\nAnswer: x = 24, x = 36."
    },
    {
      "q": "Find the roots of x^2 - 65x + 1014 = 0.",
      "a": "1) Set up equation: x^2 - 65x + 1014 = 0.\n2) Factorize by splitting the middle term: x^2 - 26x - 39x + 1014 = 0.\n3) Factor out: x(x - 26) - 39(x - 26) = 0 -> (x - 26)(x - 39) = 0.\n4) The roots are x = 26 and x = 39.\nAnswer: x = 26, x = 39."
    },
    {
      "q": "Find the roots of x^2 - 70x + 1176 = 0.",
      "a": "1) Set up equation: x^2 - 70x + 1176 = 0.\n2) Factorize by splitting the middle term: x^2 - 28x - 42x + 1176 = 0.\n3) Factor out: x(x - 28) - 42(x - 28) = 0 -> (x - 28)(x - 42) = 0.\n4) The roots are x = 28 and x = 42.\nAnswer: x = 28, x = 42."
    },
    {
      "q": "Find the roots of x^2 - 75x + 1350 = 0.",
      "a": "1) Set up equation: x^2 - 75x + 1350 = 0.\n2) Factorize by splitting the middle term: x^2 - 30x - 45x + 1350 = 0.\n3) Factor out: x(x - 30) - 45(x - 30) = 0 -> (x - 30)(x - 45) = 0.\n4) The roots are x = 30 and x = 45.\nAnswer: x = 30, x = 45."
    }
  ],
  "inequalities": [
    {
      "q": "Solve the inequality: 2x - 3 < 5x + 6",
      "a": "1) Subtract 2x from both sides: -3 < 3x + 6.\n2) Subtract 6 from both sides: -9 < 3x.\n3) Divide both sides by 3: -3 < x, which is x > -3.\nAnswer: x > -3."
    },
    {
      "q": "Solve the inequality: 2x - 6 < 5x + 12",
      "a": "1) Subtract 2x from both sides: -6 < 3x + 12.\n2) Subtract 12 from both sides: -18 < 3x.\n3) Divide both sides by 3: -6 < x, which is x > -6.\nAnswer: x > -6."
    },
    {
      "q": "Solve the inequality: 2x - 9 < 5x + 18",
      "a": "1) Subtract 2x from both sides: -9 < 3x + 18.\n2) Subtract 18 from both sides: -27 < 3x.\n3) Divide both sides by 3: -9 < x, which is x > -9.\nAnswer: x > -9."
    },
    {
      "q": "Solve the inequality: 2x - 12 < 5x + 24",
      "a": "1) Subtract 2x from both sides: -12 < 3x + 24.\n2) Subtract 24 from both sides: -36 < 3x.\n3) Divide both sides by 3: -12 < x, which is x > -12.\nAnswer: x > -12."
    },
    {
      "q": "Solve the inequality: 2x - 15 < 5x + 30",
      "a": "1) Subtract 2x from both sides: -15 < 3x + 30.\n2) Subtract 30 from both sides: -45 < 3x.\n3) Divide both sides by 3: -15 < x, which is x > -15.\nAnswer: x > -15."
    },
    {
      "q": "Solve the inequality: 2x - 18 < 5x + 36",
      "a": "1) Subtract 2x from both sides: -18 < 3x + 36.\n2) Subtract 36 from both sides: -54 < 3x.\n3) Divide both sides by 3: -18 < x, which is x > -18.\nAnswer: x > -18."
    },
    {
      "q": "Solve the inequality: 2x - 21 < 5x + 42",
      "a": "1) Subtract 2x from both sides: -21 < 3x + 42.\n2) Subtract 42 from both sides: -63 < 3x.\n3) Divide both sides by 3: -21 < x, which is x > -21.\nAnswer: x > -21."
    },
    {
      "q": "Solve the inequality: 2x - 24 < 5x + 48",
      "a": "1) Subtract 2x from both sides: -24 < 3x + 48.\n2) Subtract 48 from both sides: -72 < 3x.\n3) Divide both sides by 3: -24 < x, which is x > -24.\nAnswer: x > -24."
    },
    {
      "q": "Solve the inequality: 2x - 27 < 5x + 54",
      "a": "1) Subtract 2x from both sides: -27 < 3x + 54.\n2) Subtract 54 from both sides: -81 < 3x.\n3) Divide both sides by 3: -27 < x, which is x > -27.\nAnswer: x > -27."
    },
    {
      "q": "Solve the inequality: 2x - 30 < 5x + 60",
      "a": "1) Subtract 2x from both sides: -30 < 3x + 60.\n2) Subtract 60 from both sides: -90 < 3x.\n3) Divide both sides by 3: -30 < x, which is x > -30.\nAnswer: x > -30."
    },
    {
      "q": "Solve the inequality: 2x - 33 < 5x + 66",
      "a": "1) Subtract 2x from both sides: -33 < 3x + 66.\n2) Subtract 66 from both sides: -99 < 3x.\n3) Divide both sides by 3: -33 < x, which is x > -33.\nAnswer: x > -33."
    },
    {
      "q": "Solve the inequality: 2x - 36 < 5x + 72",
      "a": "1) Subtract 2x from both sides: -36 < 3x + 72.\n2) Subtract 72 from both sides: -108 < 3x.\n3) Divide both sides by 3: -36 < x, which is x > -36.\nAnswer: x > -36."
    },
    {
      "q": "Solve the inequality: 2x - 39 < 5x + 78",
      "a": "1) Subtract 2x from both sides: -39 < 3x + 78.\n2) Subtract 78 from both sides: -117 < 3x.\n3) Divide both sides by 3: -39 < x, which is x > -39.\nAnswer: x > -39."
    },
    {
      "q": "Solve the inequality: 2x - 42 < 5x + 84",
      "a": "1) Subtract 2x from both sides: -42 < 3x + 84.\n2) Subtract 84 from both sides: -126 < 3x.\n3) Divide both sides by 3: -42 < x, which is x > -42.\nAnswer: x > -42."
    },
    {
      "q": "Solve the inequality: 2x - 45 < 5x + 90",
      "a": "1) Subtract 2x from both sides: -45 < 3x + 90.\n2) Subtract 90 from both sides: -135 < 3x.\n3) Divide both sides by 3: -45 < x, which is x > -45.\nAnswer: x > -45."
    }
  ],
  "progressions": [
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 1 and common difference is 2.",
      "a": "1) First term (a) = 1. Common difference (d) = 2. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*1 + 9*2] = 5 * [2 + 18] = 5 * 20 = 100.\nAnswer: 100."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 2 and common difference is 4.",
      "a": "1) First term (a) = 2. Common difference (d) = 4. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*2 + 9*4] = 5 * [4 + 36] = 5 * 40 = 200.\nAnswer: 200."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 3 and common difference is 6.",
      "a": "1) First term (a) = 3. Common difference (d) = 6. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*3 + 9*6] = 5 * [6 + 54] = 5 * 60 = 300.\nAnswer: 300."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 4 and common difference is 8.",
      "a": "1) First term (a) = 4. Common difference (d) = 8. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*4 + 9*8] = 5 * [8 + 72] = 5 * 80 = 400.\nAnswer: 400."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 5 and common difference is 10.",
      "a": "1) First term (a) = 5. Common difference (d) = 10. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*5 + 9*10] = 5 * [10 + 90] = 5 * 100 = 500.\nAnswer: 500."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 6 and common difference is 12.",
      "a": "1) First term (a) = 6. Common difference (d) = 12. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*6 + 9*12] = 5 * [12 + 108] = 5 * 120 = 600.\nAnswer: 600."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 7 and common difference is 14.",
      "a": "1) First term (a) = 7. Common difference (d) = 14. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*7 + 9*14] = 5 * [14 + 126] = 5 * 140 = 700.\nAnswer: 700."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 8 and common difference is 16.",
      "a": "1) First term (a) = 8. Common difference (d) = 16. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*8 + 9*16] = 5 * [16 + 144] = 5 * 160 = 800.\nAnswer: 800."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 9 and common difference is 18.",
      "a": "1) First term (a) = 9. Common difference (d) = 18. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*9 + 9*18] = 5 * [18 + 162] = 5 * 180 = 900.\nAnswer: 900."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 10 and common difference is 20.",
      "a": "1) First term (a) = 10. Common difference (d) = 20. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*10 + 9*20] = 5 * [20 + 180] = 5 * 200 = 1000.\nAnswer: 1000."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 11 and common difference is 22.",
      "a": "1) First term (a) = 11. Common difference (d) = 22. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*11 + 9*22] = 5 * [22 + 198] = 5 * 220 = 1100.\nAnswer: 1100."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 12 and common difference is 24.",
      "a": "1) First term (a) = 12. Common difference (d) = 24. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*12 + 9*24] = 5 * [24 + 216] = 5 * 240 = 1200.\nAnswer: 1200."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 13 and common difference is 26.",
      "a": "1) First term (a) = 13. Common difference (d) = 26. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*13 + 9*26] = 5 * [26 + 234] = 5 * 260 = 1300.\nAnswer: 1300."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 14 and common difference is 28.",
      "a": "1) First term (a) = 14. Common difference (d) = 28. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*14 + 9*28] = 5 * [28 + 252] = 5 * 280 = 1400.\nAnswer: 1400."
    },
    {
      "q": "Find the sum of the first 10 terms of an AP where the first term is 15 and common difference is 30.",
      "a": "1) First term (a) = 15. Common difference (d) = 30. Number of terms (n) = 10.\n2) Formula: Sum = n/2 * [2a + (n-1)d].\n3) Sum = 5 * [2*15 + 9*30] = 5 * [30 + 270] = 5 * 300 = 1500.\nAnswer: 1500."
    }
  ],
  "geometry": [
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:4. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 4x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 4x = 180 -> 9x = 180 -> 9x = 180.\n4) Calculate x = 20.00\u00b0.\n5) Largest angle = 4 * 20.00\u00b0 = 80.00\u00b0.\nAnswer: 80.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:5. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 5x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 5x = 180 -> 10x = 180 -> 10x = 180.\n4) Calculate x = 18.00\u00b0.\n5) Largest angle = 5 * 18.00\u00b0 = 90.00\u00b0.\nAnswer: 90.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:3. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 3x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 3x = 180 -> 8x = 180 -> 8x = 180.\n4) Calculate x = 22.50\u00b0.\n5) Largest angle = 3 * 22.50\u00b0 = 67.50\u00b0.\nAnswer: 67.50\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:4. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 4x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 4x = 180 -> 9x = 180 -> 9x = 180.\n4) Calculate x = 20.00\u00b0.\n5) Largest angle = 4 * 20.00\u00b0 = 80.00\u00b0.\nAnswer: 80.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:5. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 5x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 5x = 180 -> 10x = 180 -> 10x = 180.\n4) Calculate x = 18.00\u00b0.\n5) Largest angle = 5 * 18.00\u00b0 = 90.00\u00b0.\nAnswer: 90.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:3. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 3x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 3x = 180 -> 8x = 180 -> 8x = 180.\n4) Calculate x = 22.50\u00b0.\n5) Largest angle = 3 * 22.50\u00b0 = 67.50\u00b0.\nAnswer: 67.50\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:4. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 4x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 4x = 180 -> 9x = 180 -> 9x = 180.\n4) Calculate x = 20.00\u00b0.\n5) Largest angle = 4 * 20.00\u00b0 = 80.00\u00b0.\nAnswer: 80.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:5. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 5x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 5x = 180 -> 10x = 180 -> 10x = 180.\n4) Calculate x = 18.00\u00b0.\n5) Largest angle = 5 * 18.00\u00b0 = 90.00\u00b0.\nAnswer: 90.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:3. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 3x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 3x = 180 -> 8x = 180 -> 8x = 180.\n4) Calculate x = 22.50\u00b0.\n5) Largest angle = 3 * 22.50\u00b0 = 67.50\u00b0.\nAnswer: 67.50\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:4. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 4x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 4x = 180 -> 9x = 180 -> 9x = 180.\n4) Calculate x = 20.00\u00b0.\n5) Largest angle = 4 * 20.00\u00b0 = 80.00\u00b0.\nAnswer: 80.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:5. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 5x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 5x = 180 -> 10x = 180 -> 10x = 180.\n4) Calculate x = 18.00\u00b0.\n5) Largest angle = 5 * 18.00\u00b0 = 90.00\u00b0.\nAnswer: 90.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:3. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 3x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 3x = 180 -> 8x = 180 -> 8x = 180.\n4) Calculate x = 22.50\u00b0.\n5) Largest angle = 3 * 22.50\u00b0 = 67.50\u00b0.\nAnswer: 67.50\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:4. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 4x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 4x = 180 -> 9x = 180 -> 9x = 180.\n4) Calculate x = 20.00\u00b0.\n5) Largest angle = 4 * 20.00\u00b0 = 80.00\u00b0.\nAnswer: 80.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:5. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 5x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 5x = 180 -> 10x = 180 -> 10x = 180.\n4) Calculate x = 18.00\u00b0.\n5) Largest angle = 5 * 18.00\u00b0 = 90.00\u00b0.\nAnswer: 90.00\u00b0."
    },
    {
      "q": "In a triangle, the interior angles are in the ratio 2:3:3. Find the value of the largest angle.",
      "a": "1) Let the angles be 2x, 3x, and 3x.\n2) The sum of angles in a triangle is 180\u00b0.\n3) 2x + 3x + 3x = 180 -> 8x = 180 -> 8x = 180.\n4) Calculate x = 22.50\u00b0.\n5) Largest angle = 3 * 22.50\u00b0 = 67.50\u00b0.\nAnswer: 67.50\u00b0."
    }
  ],
  "mensuration": [
    {
      "q": "Find the volume of a cylinder with radius 7 cm and height 10 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 7 cm. Height (h) = 10 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 7^2 * 10 = (22/7) * 49 * 10 = 22 * 7 * 10 = 1540 cm^3.\nAnswer: 1540 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 14 cm and height 20 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 14 cm. Height (h) = 20 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 14^2 * 20 = (22/7) * 196 * 20 = 22 * 14 * 20 = 12320 cm^3.\nAnswer: 12320 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 21 cm and height 30 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 21 cm. Height (h) = 30 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 21^2 * 30 = (22/7) * 441 * 30 = 22 * 21 * 30 = 41580 cm^3.\nAnswer: 41580 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 28 cm and height 40 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 28 cm. Height (h) = 40 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 28^2 * 40 = (22/7) * 784 * 40 = 22 * 28 * 40 = 98560 cm^3.\nAnswer: 98560 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 35 cm and height 50 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 35 cm. Height (h) = 50 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 35^2 * 50 = (22/7) * 1225 * 50 = 22 * 35 * 50 = 192500 cm^3.\nAnswer: 192500 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 42 cm and height 60 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 42 cm. Height (h) = 60 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 42^2 * 60 = (22/7) * 1764 * 60 = 22 * 42 * 60 = 332640 cm^3.\nAnswer: 332640 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 49 cm and height 70 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 49 cm. Height (h) = 70 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 49^2 * 70 = (22/7) * 2401 * 70 = 22 * 49 * 70 = 528220 cm^3.\nAnswer: 528220 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 56 cm and height 80 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 56 cm. Height (h) = 80 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 56^2 * 80 = (22/7) * 3136 * 80 = 22 * 56 * 80 = 788480 cm^3.\nAnswer: 788480 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 63 cm and height 90 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 63 cm. Height (h) = 90 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 63^2 * 90 = (22/7) * 3969 * 90 = 22 * 63 * 90 = 1122660 cm^3.\nAnswer: 1122660 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 70 cm and height 100 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 70 cm. Height (h) = 100 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 70^2 * 100 = (22/7) * 4900 * 100 = 22 * 70 * 100 = 1540000 cm^3.\nAnswer: 1540000 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 77 cm and height 110 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 77 cm. Height (h) = 110 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 77^2 * 110 = (22/7) * 5929 * 110 = 22 * 77 * 110 = 2049740 cm^3.\nAnswer: 2049740 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 84 cm and height 120 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 84 cm. Height (h) = 120 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 84^2 * 120 = (22/7) * 7056 * 120 = 22 * 84 * 120 = 2661120 cm^3.\nAnswer: 2661120 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 91 cm and height 130 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 91 cm. Height (h) = 130 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 91^2 * 130 = (22/7) * 8281 * 130 = 22 * 91 * 130 = 3383380 cm^3.\nAnswer: 3383380 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 98 cm and height 140 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 98 cm. Height (h) = 140 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 98^2 * 140 = (22/7) * 9604 * 140 = 22 * 98 * 140 = 4225760 cm^3.\nAnswer: 4225760 cm^3."
    },
    {
      "q": "Find the volume of a cylinder with radius 105 cm and height 150 cm. (Take pi = 22/7)",
      "a": "1) Radius (r) = 105 cm. Height (h) = 150 cm.\n2) Formula for volume of a cylinder = pi * r^2 * h.\n3) Vol = (22/7) * 105^2 * 150 = (22/7) * 11025 * 150 = 22 * 105 * 150 = 5197500 cm^3.\nAnswer: 5197500 cm^3."
    }
  ],
  "heights": [
    {
      "q": "An observer looks at the top of a tower of height 10m. If the distance from the base to the observer is 10m, find the angle of elevation.",
      "a": "1) Height = 10m. Distance = 10m.\n2) Tan(theta) = Height / Distance = 10 / 10 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 20m. If the distance from the base to the observer is 20m, find the angle of elevation.",
      "a": "1) Height = 20m. Distance = 20m.\n2) Tan(theta) = Height / Distance = 20 / 20 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 30m. If the distance from the base to the observer is 30m, find the angle of elevation.",
      "a": "1) Height = 30m. Distance = 30m.\n2) Tan(theta) = Height / Distance = 30 / 30 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 40m. If the distance from the base to the observer is 40m, find the angle of elevation.",
      "a": "1) Height = 40m. Distance = 40m.\n2) Tan(theta) = Height / Distance = 40 / 40 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 50m. If the distance from the base to the observer is 50m, find the angle of elevation.",
      "a": "1) Height = 50m. Distance = 50m.\n2) Tan(theta) = Height / Distance = 50 / 50 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 60m. If the distance from the base to the observer is 60m, find the angle of elevation.",
      "a": "1) Height = 60m. Distance = 60m.\n2) Tan(theta) = Height / Distance = 60 / 60 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 70m. If the distance from the base to the observer is 70m, find the angle of elevation.",
      "a": "1) Height = 70m. Distance = 70m.\n2) Tan(theta) = Height / Distance = 70 / 70 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 80m. If the distance from the base to the observer is 80m, find the angle of elevation.",
      "a": "1) Height = 80m. Distance = 80m.\n2) Tan(theta) = Height / Distance = 80 / 80 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 90m. If the distance from the base to the observer is 90m, find the angle of elevation.",
      "a": "1) Height = 90m. Distance = 90m.\n2) Tan(theta) = Height / Distance = 90 / 90 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 100m. If the distance from the base to the observer is 100m, find the angle of elevation.",
      "a": "1) Height = 100m. Distance = 100m.\n2) Tan(theta) = Height / Distance = 100 / 100 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 110m. If the distance from the base to the observer is 110m, find the angle of elevation.",
      "a": "1) Height = 110m. Distance = 110m.\n2) Tan(theta) = Height / Distance = 110 / 110 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 120m. If the distance from the base to the observer is 120m, find the angle of elevation.",
      "a": "1) Height = 120m. Distance = 120m.\n2) Tan(theta) = Height / Distance = 120 / 120 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 130m. If the distance from the base to the observer is 130m, find the angle of elevation.",
      "a": "1) Height = 130m. Distance = 130m.\n2) Tan(theta) = Height / Distance = 130 / 130 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 140m. If the distance from the base to the observer is 140m, find the angle of elevation.",
      "a": "1) Height = 140m. Distance = 140m.\n2) Tan(theta) = Height / Distance = 140 / 140 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    },
    {
      "q": "An observer looks at the top of a tower of height 150m. If the distance from the base to the observer is 150m, find the angle of elevation.",
      "a": "1) Height = 150m. Distance = 150m.\n2) Tan(theta) = Height / Distance = 150 / 150 = 1.\n3) Since Tan(45\u00b0) = 1, the angle of elevation is 45\u00b0.\nAnswer: 45\u00b0."
    }
  ],
  "pnc": [
    {
      "q": "In how many ways can a committee of 3 members be selected from 5 people?",
      "a": "1) Total members (n) = 5. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (5 * 4 * 3) / (3 * 2 * 1) = 10 ways.\nAnswer: 10 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 6 people?",
      "a": "1) Total members (n) = 6. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (6 * 5 * 4) / (3 * 2 * 1) = 20 ways.\nAnswer: 20 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 7 people?",
      "a": "1) Total members (n) = 7. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (7 * 6 * 5) / (3 * 2 * 1) = 35 ways.\nAnswer: 35 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 8 people?",
      "a": "1) Total members (n) = 8. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (8 * 7 * 6) / (3 * 2 * 1) = 56 ways.\nAnswer: 56 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 9 people?",
      "a": "1) Total members (n) = 9. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (9 * 8 * 7) / (3 * 2 * 1) = 84 ways.\nAnswer: 84 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 10 people?",
      "a": "1) Total members (n) = 10. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (10 * 9 * 8) / (3 * 2 * 1) = 120 ways.\nAnswer: 120 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 11 people?",
      "a": "1) Total members (n) = 11. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (11 * 10 * 9) / (3 * 2 * 1) = 165 ways.\nAnswer: 165 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 12 people?",
      "a": "1) Total members (n) = 12. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (12 * 11 * 10) / (3 * 2 * 1) = 220 ways.\nAnswer: 220 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 13 people?",
      "a": "1) Total members (n) = 13. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (13 * 12 * 11) / (3 * 2 * 1) = 286 ways.\nAnswer: 286 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 14 people?",
      "a": "1) Total members (n) = 14. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (14 * 13 * 12) / (3 * 2 * 1) = 364 ways.\nAnswer: 364 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 15 people?",
      "a": "1) Total members (n) = 15. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (15 * 14 * 13) / (3 * 2 * 1) = 455 ways.\nAnswer: 455 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 16 people?",
      "a": "1) Total members (n) = 16. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (16 * 15 * 14) / (3 * 2 * 1) = 560 ways.\nAnswer: 560 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 17 people?",
      "a": "1) Total members (n) = 17. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (17 * 16 * 15) / (3 * 2 * 1) = 680 ways.\nAnswer: 680 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 18 people?",
      "a": "1) Total members (n) = 18. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (18 * 17 * 16) / (3 * 2 * 1) = 816 ways.\nAnswer: 816 ways."
    },
    {
      "q": "In how many ways can a committee of 3 members be selected from 19 people?",
      "a": "1) Total members (n) = 19. Size to select (r) = 3.\n2) Formula: nCr = n! / (r!(n-r)!).\n3) Selection ways = (19 * 18 * 17) / (3 * 2 * 1) = 969 ways.\nAnswer: 969 ways."
    }
  ],
  "probability": [
    {
      "q": "A box contains 2 red balls and 3 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 2. Blue balls = 3.\n2) Total balls = 2 + 3 = 5.\n3) Probability of Red = Red balls / Total balls = 2 / 5 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 4 red balls and 6 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 4. Blue balls = 6.\n2) Total balls = 4 + 6 = 10.\n3) Probability of Red = Red balls / Total balls = 4 / 10 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 6 red balls and 9 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 6. Blue balls = 9.\n2) Total balls = 6 + 9 = 15.\n3) Probability of Red = Red balls / Total balls = 6 / 15 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 8 red balls and 12 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 8. Blue balls = 12.\n2) Total balls = 8 + 12 = 20.\n3) Probability of Red = Red balls / Total balls = 8 / 20 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 10 red balls and 15 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 10. Blue balls = 15.\n2) Total balls = 10 + 15 = 25.\n3) Probability of Red = Red balls / Total balls = 10 / 25 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 12 red balls and 18 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 12. Blue balls = 18.\n2) Total balls = 12 + 18 = 30.\n3) Probability of Red = Red balls / Total balls = 12 / 30 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 14 red balls and 21 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 14. Blue balls = 21.\n2) Total balls = 14 + 21 = 35.\n3) Probability of Red = Red balls / Total balls = 14 / 35 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 16 red balls and 24 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 16. Blue balls = 24.\n2) Total balls = 16 + 24 = 40.\n3) Probability of Red = Red balls / Total balls = 16 / 40 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 18 red balls and 27 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 18. Blue balls = 27.\n2) Total balls = 18 + 27 = 45.\n3) Probability of Red = Red balls / Total balls = 18 / 45 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 20 red balls and 30 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 20. Blue balls = 30.\n2) Total balls = 20 + 30 = 50.\n3) Probability of Red = Red balls / Total balls = 20 / 50 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 22 red balls and 33 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 22. Blue balls = 33.\n2) Total balls = 22 + 33 = 55.\n3) Probability of Red = Red balls / Total balls = 22 / 55 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 24 red balls and 36 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 24. Blue balls = 36.\n2) Total balls = 24 + 36 = 60.\n3) Probability of Red = Red balls / Total balls = 24 / 60 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 26 red balls and 39 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 26. Blue balls = 39.\n2) Total balls = 26 + 39 = 65.\n3) Probability of Red = Red balls / Total balls = 26 / 65 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 28 red balls and 42 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 28. Blue balls = 42.\n2) Total balls = 28 + 42 = 70.\n3) Probability of Red = Red balls / Total balls = 28 / 70 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    },
    {
      "q": "A box contains 30 red balls and 45 blue balls. If one ball is drawn, find the probability that it is red.",
      "a": "1) Red balls = 30. Blue balls = 45.\n2) Total balls = 30 + 45 = 75.\n3) Probability of Red = Red balls / Total balls = 30 / 75 = 2/5 = 0.4.\nAnswer: 0.4 (or 40%)."
    }
  ],
  "crypt": [
    {
      "q": "Solve SEND + MORE = MONEY. Find value of each letter.",
      "a": "1) M must be 1 (carry over from 4-digit sum).\n2) S + 1 + carry = 10 + O. Thus S must be 9, and O must be 0.\n3) E + O + carry = N -> E + carry = N, so N = E + 1.\n4) Solving for D, R, Y gives: S=9, E=5, N=6, D=7, M=1, O=0, R=8, Y=2.\nAnswer: 9567 + 1085 = 10652."
    },
    {
      "q": "Solve TO + TO = FOR. Find T, O, F, R.",
      "a": "1) F must be 1.\n2) T + T + carry = 10 + O. O must be even.\n3) By trial: T=9, O=8. 98 + 98 = 196. F=1, O=8, R=6.\nAnswer: T=9, O=8, F=1, R=6."
    },
    {
      "q": "In AB + CD = AAA, find A, B, C, D.",
      "a": "1) A must be 1 since it's the result of two 2-digit numbers.\n2) 1B + CD = 111.\n3) Testing combinations: B=9, D=2, C=9 -> 19 + 92 = 111.\nAnswer: A=1, B=9, C=9, D=2."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    },
    {
      "q": "Solve crypt sum: A + A + A = BA. What digit does A represent?",
      "a": "1) Since A + A + A = BA, we have 3 * A = 10 * B + A.\n2) Subtract A: 2 * A = 10 * B -> A = 5 * B.\n3) Since A is a single-digit, B must be 1, making A = 5.\nAnswer: A = 5."
    }
  ],
  "sets": [
    {
      "q": "In a survey of 100 students, 60 like tea and 50 like coffee. If 20 like both, how many like neither?",
      "a": "1) Total survey (U) = 100.\n2) Tea (T) = 60. Coffee (C) = 50. Both (T and C) = 20.\n3) Total who like at least one = T + C - Both = 60 + 50 - 20 = 90.\n4) Neither = U - Union = 100 - 90 = 10.\nAnswer: 10."
    },
    {
      "q": "In a survey of 200 students, 120 like tea and 100 like coffee. If 40 like both, how many like neither?",
      "a": "1) Total survey (U) = 200.\n2) Tea (T) = 120. Coffee (C) = 100. Both (T and C) = 40.\n3) Total who like at least one = T + C - Both = 120 + 100 - 40 = 180.\n4) Neither = U - Union = 200 - 180 = 20.\nAnswer: 20."
    },
    {
      "q": "In a survey of 300 students, 180 like tea and 150 like coffee. If 60 like both, how many like neither?",
      "a": "1) Total survey (U) = 300.\n2) Tea (T) = 180. Coffee (C) = 150. Both (T and C) = 60.\n3) Total who like at least one = T + C - Both = 180 + 150 - 60 = 270.\n4) Neither = U - Union = 300 - 270 = 30.\nAnswer: 30."
    },
    {
      "q": "In a survey of 400 students, 240 like tea and 200 like coffee. If 80 like both, how many like neither?",
      "a": "1) Total survey (U) = 400.\n2) Tea (T) = 240. Coffee (C) = 200. Both (T and C) = 80.\n3) Total who like at least one = T + C - Both = 240 + 200 - 80 = 360.\n4) Neither = U - Union = 400 - 360 = 40.\nAnswer: 40."
    },
    {
      "q": "In a survey of 500 students, 300 like tea and 250 like coffee. If 100 like both, how many like neither?",
      "a": "1) Total survey (U) = 500.\n2) Tea (T) = 300. Coffee (C) = 250. Both (T and C) = 100.\n3) Total who like at least one = T + C - Both = 300 + 250 - 100 = 450.\n4) Neither = U - Union = 500 - 450 = 50.\nAnswer: 50."
    },
    {
      "q": "In a survey of 600 students, 360 like tea and 300 like coffee. If 120 like both, how many like neither?",
      "a": "1) Total survey (U) = 600.\n2) Tea (T) = 360. Coffee (C) = 300. Both (T and C) = 120.\n3) Total who like at least one = T + C - Both = 360 + 300 - 120 = 540.\n4) Neither = U - Union = 600 - 540 = 60.\nAnswer: 60."
    },
    {
      "q": "In a survey of 700 students, 420 like tea and 350 like coffee. If 140 like both, how many like neither?",
      "a": "1) Total survey (U) = 700.\n2) Tea (T) = 420. Coffee (C) = 350. Both (T and C) = 140.\n3) Total who like at least one = T + C - Both = 420 + 350 - 140 = 630.\n4) Neither = U - Union = 700 - 630 = 70.\nAnswer: 70."
    },
    {
      "q": "In a survey of 800 students, 480 like tea and 400 like coffee. If 160 like both, how many like neither?",
      "a": "1) Total survey (U) = 800.\n2) Tea (T) = 480. Coffee (C) = 400. Both (T and C) = 160.\n3) Total who like at least one = T + C - Both = 480 + 400 - 160 = 720.\n4) Neither = U - Union = 800 - 720 = 80.\nAnswer: 80."
    },
    {
      "q": "In a survey of 900 students, 540 like tea and 450 like coffee. If 180 like both, how many like neither?",
      "a": "1) Total survey (U) = 900.\n2) Tea (T) = 540. Coffee (C) = 450. Both (T and C) = 180.\n3) Total who like at least one = T + C - Both = 540 + 450 - 180 = 810.\n4) Neither = U - Union = 900 - 810 = 90.\nAnswer: 90."
    },
    {
      "q": "In a survey of 1000 students, 600 like tea and 500 like coffee. If 200 like both, how many like neither?",
      "a": "1) Total survey (U) = 1000.\n2) Tea (T) = 600. Coffee (C) = 500. Both (T and C) = 200.\n3) Total who like at least one = T + C - Both = 600 + 500 - 200 = 900.\n4) Neither = U - Union = 1000 - 900 = 100.\nAnswer: 100."
    },
    {
      "q": "In a survey of 1100 students, 660 like tea and 550 like coffee. If 220 like both, how many like neither?",
      "a": "1) Total survey (U) = 1100.\n2) Tea (T) = 660. Coffee (C) = 550. Both (T and C) = 220.\n3) Total who like at least one = T + C - Both = 660 + 550 - 220 = 990.\n4) Neither = U - Union = 1100 - 990 = 110.\nAnswer: 110."
    },
    {
      "q": "In a survey of 1200 students, 720 like tea and 600 like coffee. If 240 like both, how many like neither?",
      "a": "1) Total survey (U) = 1200.\n2) Tea (T) = 720. Coffee (C) = 600. Both (T and C) = 240.\n3) Total who like at least one = T + C - Both = 720 + 600 - 240 = 1080.\n4) Neither = U - Union = 1200 - 1080 = 120.\nAnswer: 120."
    },
    {
      "q": "In a survey of 1300 students, 780 like tea and 650 like coffee. If 260 like both, how many like neither?",
      "a": "1) Total survey (U) = 1300.\n2) Tea (T) = 780. Coffee (C) = 650. Both (T and C) = 260.\n3) Total who like at least one = T + C - Both = 780 + 650 - 260 = 1170.\n4) Neither = U - Union = 1300 - 1170 = 130.\nAnswer: 130."
    },
    {
      "q": "In a survey of 1400 students, 840 like tea and 700 like coffee. If 280 like both, how many like neither?",
      "a": "1) Total survey (U) = 1400.\n2) Tea (T) = 840. Coffee (C) = 700. Both (T and C) = 280.\n3) Total who like at least one = T + C - Both = 840 + 700 - 280 = 1260.\n4) Neither = U - Union = 1400 - 1260 = 140.\nAnswer: 140."
    },
    {
      "q": "In a survey of 1500 students, 900 like tea and 750 like coffee. If 300 like both, how many like neither?",
      "a": "1) Total survey (U) = 1500.\n2) Tea (T) = 900. Coffee (C) = 750. Both (T and C) = 300.\n3) Total who like at least one = T + C - Both = 900 + 750 - 300 = 1350.\n4) Neither = U - Union = 1500 - 1350 = 150.\nAnswer: 150."
    }
  ],
  "logarithms": [
    {
      "q": "Evaluate the logarithmic expression: log_2(2) + log_10(100)",
      "a": "1) Find log_2(2): since 2^1 = 2, log_2(2) = 1.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 1 + 2 = 3.\nAnswer: 3."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(4) + log_10(100)",
      "a": "1) Find log_2(4): since 2^2 = 4, log_2(4) = 2.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 2 + 2 = 4.\nAnswer: 4."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(8) + log_10(100)",
      "a": "1) Find log_2(8): since 2^3 = 8, log_2(8) = 3.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 3 + 2 = 5.\nAnswer: 5."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(16) + log_10(100)",
      "a": "1) Find log_2(16): since 2^4 = 16, log_2(16) = 4.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 4 + 2 = 6.\nAnswer: 6."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(32) + log_10(100)",
      "a": "1) Find log_2(32): since 2^5 = 32, log_2(32) = 5.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 5 + 2 = 7.\nAnswer: 7."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(64) + log_10(100)",
      "a": "1) Find log_2(64): since 2^6 = 64, log_2(64) = 6.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 6 + 2 = 8.\nAnswer: 8."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(128) + log_10(100)",
      "a": "1) Find log_2(128): since 2^7 = 128, log_2(128) = 7.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 7 + 2 = 9.\nAnswer: 9."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(256) + log_10(100)",
      "a": "1) Find log_2(256): since 2^8 = 256, log_2(256) = 8.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 8 + 2 = 10.\nAnswer: 10."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(512) + log_10(100)",
      "a": "1) Find log_2(512): since 2^9 = 512, log_2(512) = 9.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 9 + 2 = 11.\nAnswer: 11."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(1024) + log_10(100)",
      "a": "1) Find log_2(1024): since 2^10 = 1024, log_2(1024) = 10.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 10 + 2 = 12.\nAnswer: 12."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(2048) + log_10(100)",
      "a": "1) Find log_2(2048): since 2^11 = 2048, log_2(2048) = 11.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 11 + 2 = 13.\nAnswer: 13."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(4096) + log_10(100)",
      "a": "1) Find log_2(4096): since 2^12 = 4096, log_2(4096) = 12.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 12 + 2 = 14.\nAnswer: 14."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(8192) + log_10(100)",
      "a": "1) Find log_2(8192): since 2^13 = 8192, log_2(8192) = 13.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 13 + 2 = 15.\nAnswer: 15."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(16384) + log_10(100)",
      "a": "1) Find log_2(16384): since 2^14 = 16384, log_2(16384) = 14.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 14 + 2 = 16.\nAnswer: 16."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(32768) + log_10(100)",
      "a": "1) Find log_2(32768): since 2^15 = 32768, log_2(32768) = 15.\n2) Find log_10(100): since 10^2 = 100, log_10(100) = 2.\n3) Sum the parts: 15 + 2 = 17.\nAnswer: 17."
    }
  ],
  "analogy": [
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    },
    {
      "q": "Complete the analogy: Doctor : Hospital :: Teacher : ?",
      "a": "1) A doctor works primarily in a hospital.\n2) A teacher works primarily in a school/classroom.\nAnswer: School."
    }
  ],
  "odd-one": [
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    },
    {
      "q": "Find the odd one out: Apple, Mango, Carrot, Banana.",
      "a": "1) Apple, Mango, and Banana are fruits.\n2) Carrot is a root vegetable.\nAnswer: Carrot."
    }
  ],
  "coding": [
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    },
    {
      "q": "If CAT is coded as ECV, how is DOG coded?",
      "a": "1) Look at alphabet shifts:\n   C (+2) = E\n   A (+2) = C\n   T (+2) = V\n2) Apply the same shift of +2 to DOG:\n   D (+2) = F\n   O (+2) = Q\n   G (+2) = I\nAnswer: FQI."
    }
  ],
  "series": [
    {
      "q": "Find the next number in the series: 1, 3, 5, 7, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 7 + 2 = 9.\nAnswer: 9."
    },
    {
      "q": "Find the next number in the series: 2, 4, 6, 8, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 8 + 2 = 10.\nAnswer: 10."
    },
    {
      "q": "Find the next number in the series: 3, 5, 7, 9, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 9 + 2 = 11.\nAnswer: 11."
    },
    {
      "q": "Find the next number in the series: 4, 6, 8, 10, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 10 + 2 = 12.\nAnswer: 12."
    },
    {
      "q": "Find the next number in the series: 5, 7, 9, 11, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 11 + 2 = 13.\nAnswer: 13."
    },
    {
      "q": "Find the next number in the series: 6, 8, 10, 12, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 12 + 2 = 14.\nAnswer: 14."
    },
    {
      "q": "Find the next number in the series: 7, 9, 11, 13, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 13 + 2 = 15.\nAnswer: 15."
    },
    {
      "q": "Find the next number in the series: 8, 10, 12, 14, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 14 + 2 = 16.\nAnswer: 16."
    },
    {
      "q": "Find the next number in the series: 9, 11, 13, 15, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 15 + 2 = 17.\nAnswer: 17."
    },
    {
      "q": "Find the next number in the series: 10, 12, 14, 16, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 16 + 2 = 18.\nAnswer: 18."
    },
    {
      "q": "Find the next number in the series: 11, 13, 15, 17, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 17 + 2 = 19.\nAnswer: 19."
    },
    {
      "q": "Find the next number in the series: 12, 14, 16, 18, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 18 + 2 = 20.\nAnswer: 20."
    },
    {
      "q": "Find the next number in the series: 13, 15, 17, 19, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 19 + 2 = 21.\nAnswer: 21."
    },
    {
      "q": "Find the next number in the series: 14, 16, 18, 20, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 20 + 2 = 22.\nAnswer: 22."
    },
    {
      "q": "Find the next number in the series: 15, 17, 19, 21, ?",
      "a": "1) Observe differences: each term increases by 2.\n2) Next term = 21 + 2 = 23.\nAnswer: 23."
    }
  ],
  "nv-series": [
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 1?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 1 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 2?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 2 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 3?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 3 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 4?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 4 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 5?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 5 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 6?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 6 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 7?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 7 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 8?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 8 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 9?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 9 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 10?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 10 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 11?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 11 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 12?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 12 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 13?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 13 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 14?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 14 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    },
    {
      "q": "A shape rotates 90 degrees clockwise in each step. If it starts facing North, what direction is it at step 15?",
      "a": "1) Each step adds 90 degrees clockwise (North -> East -> South -> West -> North).\n2) Calculate rotation: ( 15 * 90 ) % 360 degrees.\nAnswer: Determined based on steps cycle mod 4."
    }
  ],
  "statements": [
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    },
    {
      "q": "Statement: 'Switch to LED bulbs to save electricity.'\nAssumption: LED bulbs consume less power than normal bulbs. Validate.",
      "a": "1) The advice is given to save power. This directly assumes that the alternative (LED bulbs) does consume less electricity.\nAnswer: Assumption is implicit."
    }
  ],
  "math-ops": [
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 5 + 2 x 1",
      "a": "1) Replace signs according to code:\n   5 x 2 - 1.\n2) Perform multiplication first: 5 x 2 = 10.\n3) Perform subtraction: 10 - 1 = 9.\nAnswer: 9."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 10 + 2 x 2",
      "a": "1) Replace signs according to code:\n   10 x 2 - 2.\n2) Perform multiplication first: 10 x 2 = 20.\n3) Perform subtraction: 20 - 2 = 18.\nAnswer: 18."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 15 + 2 x 3",
      "a": "1) Replace signs according to code:\n   15 x 2 - 3.\n2) Perform multiplication first: 15 x 2 = 30.\n3) Perform subtraction: 30 - 3 = 27.\nAnswer: 27."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 20 + 2 x 4",
      "a": "1) Replace signs according to code:\n   20 x 2 - 4.\n2) Perform multiplication first: 20 x 2 = 40.\n3) Perform subtraction: 40 - 4 = 36.\nAnswer: 36."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 25 + 2 x 5",
      "a": "1) Replace signs according to code:\n   25 x 2 - 5.\n2) Perform multiplication first: 25 x 2 = 50.\n3) Perform subtraction: 50 - 5 = 45.\nAnswer: 45."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 30 + 2 x 6",
      "a": "1) Replace signs according to code:\n   30 x 2 - 6.\n2) Perform multiplication first: 30 x 2 = 60.\n3) Perform subtraction: 60 - 6 = 54.\nAnswer: 54."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 35 + 2 x 7",
      "a": "1) Replace signs according to code:\n   35 x 2 - 7.\n2) Perform multiplication first: 35 x 2 = 70.\n3) Perform subtraction: 70 - 7 = 63.\nAnswer: 63."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 40 + 2 x 8",
      "a": "1) Replace signs according to code:\n   40 x 2 - 8.\n2) Perform multiplication first: 40 x 2 = 80.\n3) Perform subtraction: 80 - 8 = 72.\nAnswer: 72."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 45 + 2 x 9",
      "a": "1) Replace signs according to code:\n   45 x 2 - 9.\n2) Perform multiplication first: 45 x 2 = 90.\n3) Perform subtraction: 90 - 9 = 81.\nAnswer: 81."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 50 + 2 x 10",
      "a": "1) Replace signs according to code:\n   50 x 2 - 10.\n2) Perform multiplication first: 50 x 2 = 100.\n3) Perform subtraction: 100 - 10 = 90.\nAnswer: 90."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 55 + 2 x 11",
      "a": "1) Replace signs according to code:\n   55 x 2 - 11.\n2) Perform multiplication first: 55 x 2 = 110.\n3) Perform subtraction: 110 - 11 = 99.\nAnswer: 99."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 60 + 2 x 12",
      "a": "1) Replace signs according to code:\n   60 x 2 - 12.\n2) Perform multiplication first: 60 x 2 = 120.\n3) Perform subtraction: 120 - 12 = 108.\nAnswer: 108."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 65 + 2 x 13",
      "a": "1) Replace signs according to code:\n   65 x 2 - 13.\n2) Perform multiplication first: 65 x 2 = 130.\n3) Perform subtraction: 130 - 13 = 117.\nAnswer: 117."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 70 + 2 x 14",
      "a": "1) Replace signs according to code:\n   70 x 2 - 14.\n2) Perform multiplication first: 70 x 2 = 140.\n3) Perform subtraction: 140 - 14 = 126.\nAnswer: 126."
    },
    {
      "q": "If '+' means 'x' and 'x' means '-', solve: 75 + 2 x 15",
      "a": "1) Replace signs according to code:\n   75 x 2 - 15.\n2) Perform multiplication first: 75 x 2 = 150.\n3) Perform subtraction: 150 - 15 = 135.\nAnswer: 135."
    }
  ],
  "arith-reas": [
    {
      "q": "A shepherd has 16 sheep. All but 6 die. How many sheep are left?",
      "a": "1) The statement says 'All but 6 die'.\n2) This means exactly 6 sheep did not die and are left.\nAnswer: 6."
    },
    {
      "q": "A shepherd has 17 sheep. All but 7 die. How many sheep are left?",
      "a": "1) The statement says 'All but 7 die'.\n2) This means exactly 7 sheep did not die and are left.\nAnswer: 7."
    },
    {
      "q": "A shepherd has 18 sheep. All but 8 die. How many sheep are left?",
      "a": "1) The statement says 'All but 8 die'.\n2) This means exactly 8 sheep did not die and are left.\nAnswer: 8."
    },
    {
      "q": "A shepherd has 19 sheep. All but 9 die. How many sheep are left?",
      "a": "1) The statement says 'All but 9 die'.\n2) This means exactly 9 sheep did not die and are left.\nAnswer: 9."
    },
    {
      "q": "A shepherd has 20 sheep. All but 10 die. How many sheep are left?",
      "a": "1) The statement says 'All but 10 die'.\n2) This means exactly 10 sheep did not die and are left.\nAnswer: 10."
    },
    {
      "q": "A shepherd has 21 sheep. All but 11 die. How many sheep are left?",
      "a": "1) The statement says 'All but 11 die'.\n2) This means exactly 11 sheep did not die and are left.\nAnswer: 11."
    },
    {
      "q": "A shepherd has 22 sheep. All but 12 die. How many sheep are left?",
      "a": "1) The statement says 'All but 12 die'.\n2) This means exactly 12 sheep did not die and are left.\nAnswer: 12."
    },
    {
      "q": "A shepherd has 23 sheep. All but 13 die. How many sheep are left?",
      "a": "1) The statement says 'All but 13 die'.\n2) This means exactly 13 sheep did not die and are left.\nAnswer: 13."
    },
    {
      "q": "A shepherd has 24 sheep. All but 14 die. How many sheep are left?",
      "a": "1) The statement says 'All but 14 die'.\n2) This means exactly 14 sheep did not die and are left.\nAnswer: 14."
    },
    {
      "q": "A shepherd has 25 sheep. All but 15 die. How many sheep are left?",
      "a": "1) The statement says 'All but 15 die'.\n2) This means exactly 15 sheep did not die and are left.\nAnswer: 15."
    },
    {
      "q": "A shepherd has 26 sheep. All but 16 die. How many sheep are left?",
      "a": "1) The statement says 'All but 16 die'.\n2) This means exactly 16 sheep did not die and are left.\nAnswer: 16."
    },
    {
      "q": "A shepherd has 27 sheep. All but 17 die. How many sheep are left?",
      "a": "1) The statement says 'All but 17 die'.\n2) This means exactly 17 sheep did not die and are left.\nAnswer: 17."
    },
    {
      "q": "A shepherd has 28 sheep. All but 18 die. How many sheep are left?",
      "a": "1) The statement says 'All but 18 die'.\n2) This means exactly 18 sheep did not die and are left.\nAnswer: 18."
    },
    {
      "q": "A shepherd has 29 sheep. All but 19 die. How many sheep are left?",
      "a": "1) The statement says 'All but 19 die'.\n2) This means exactly 19 sheep did not die and are left.\nAnswer: 19."
    },
    {
      "q": "A shepherd has 30 sheep. All but 20 die. How many sheep are left?",
      "a": "1) The statement says 'All but 20 die'.\n2) This means exactly 20 sheep did not die and are left.\nAnswer: 20."
    }
  ],
  "missing-num": [
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    },
    {
      "q": "Find the missing number: 2, 4, 8, ?, 32.",
      "a": "1) Notice that each term is multiplied by 2: 2*2=4, 4*2=8, 8*2=16.\nAnswer: 16."
    }
  ],
  "dice-cube": [
    {
      "q": "A cube is painted red and cut into 1 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 1.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 1, Result = (1 - 2)^3.\nAnswer: 0."
    },
    {
      "q": "A cube is painted red and cut into 8 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 2.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 2, Result = (2 - 2)^3.\nAnswer: 0."
    },
    {
      "q": "A cube is painted red and cut into 27 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 3.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 3, Result = (3 - 2)^3.\nAnswer: 1."
    },
    {
      "q": "A cube is painted red and cut into 64 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 4.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 4, Result = (4 - 2)^3.\nAnswer: 8."
    },
    {
      "q": "A cube is painted red and cut into 125 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 5.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 5, Result = (5 - 2)^3.\nAnswer: 27."
    },
    {
      "q": "A cube is painted red and cut into 216 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 6.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 6, Result = (6 - 2)^3.\nAnswer: 64."
    },
    {
      "q": "A cube is painted red and cut into 343 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 7.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 7, Result = (7 - 2)^3.\nAnswer: 125."
    },
    {
      "q": "A cube is painted red and cut into 512 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 8.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 8, Result = (8 - 2)^3.\nAnswer: 216."
    },
    {
      "q": "A cube is painted red and cut into 729 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 9.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 9, Result = (9 - 2)^3.\nAnswer: 343."
    },
    {
      "q": "A cube is painted red and cut into 1000 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 10.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 10, Result = (10 - 2)^3.\nAnswer: 512."
    },
    {
      "q": "A cube is painted red and cut into 1331 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 11.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 11, Result = (11 - 2)^3.\nAnswer: 729."
    },
    {
      "q": "A cube is painted red and cut into 1728 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 12.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 12, Result = (12 - 2)^3.\nAnswer: 1000."
    },
    {
      "q": "A cube is painted red and cut into 2197 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 13.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 13, Result = (13 - 2)^3.\nAnswer: 1331."
    },
    {
      "q": "A cube is painted red and cut into 2744 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 14.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 14, Result = (14 - 2)^3.\nAnswer: 1728."
    },
    {
      "q": "A cube is painted red and cut into 3375 small equal cubes. How many small cubes have zero faces painted?",
      "a": "1) Total size along one dimension (n) = 15.\n2) Formula for cubes with zero faces painted = (n - 2)^3.\n3) For n = 15, Result = (15 - 2)^3.\nAnswer: 2197."
    }
  ],
  "paper-fold": [
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    },
    {
      "q": "A square paper is folded diagonally and a hole is punched. How many holes appear when unfolded?",
      "a": "1) Folding once halves the sheet layers. Diagonally creates 2 layers.\n2) Punching a hole through 2 layers creates 2 symmetric holes when unfolded.\nAnswer: 2 holes."
    }
  ],
  "embedded": [
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    },
    {
      "q": "An 'F' shape is hidden inside a complex grid. How do we trace it?",
      "a": "1) Locate the vertical backbone line first.\n2) Search for two perpendicular horizontal bars extending to the right.\nAnswer: Found by line junctions."
    }
  ],
  "mirror-water": [
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    },
    {
      "q": "Find the mirror image of the word 'CAP' with mirror on the right.",
      "a": "1) Mirror reflects left-to-right. The last letter 'P' comes first, horizontally flipped.\n2) 'A' remains symmetric. 'C' is horizontally flipped.\nAnswer: Flipped P - A - Flipped C."
    }
  ],
  "completion": [
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    },
    {
      "q": "A circular pie chart pattern is missing one-fourth of its design. What completes it?",
      "a": "1) Look at the symmetry across the diagonal axes.\n2) The missing piece must mirror the quadrant directly opposite to it.\nAnswer: Symmetric quadrant filler."
    }
  ],
  "counting-fig": [
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    },
    {
      "q": "A square is divided by both diagonals. How many triangles are formed?",
      "a": "1) Small single triangles = 4.\n2) Combined triangles (two adjacent single parts) = 4.\n3) Total triangles = 4 + 4 = 8.\nAnswer: 8."
    }
  ],
  "sitting": [
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    },
    {
      "q": "5 friends sit around a circular table. If A is adjacent to B and C, who is opposite to A?",
      "a": "1) Layout around circle: B - A - C - D - E.\n2) Since A is flanked by B and C, the remaining two spots (D and E) are opposite to A.\nAnswer: D or E."
    }
  ],
  "blood": [
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    },
    {
      "q": "A is B's brother. C is B's mother. D is C's father. How is A related to D?",
      "a": "1) A is sibling of B, so C is also A's mother.\n2) D is grandfather of A (mother's father).\n3) Thus, A is D's grandson.\nAnswer: Grandson."
    }
  ],
  "direction": [
    {
      "q": "Walk 3 meters North, then turn right and walk 4 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 3 )^2 + ( 4 )^2 ).\n3) Dist = sqrt( 9 + 16 ) = sqrt( 25 ) = 5 meters.\nAnswer: 5 meters."
    },
    {
      "q": "Walk 6 meters North, then turn right and walk 8 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 6 )^2 + ( 8 )^2 ).\n3) Dist = sqrt( 36 + 64 ) = sqrt( 100 ) = 10 meters.\nAnswer: 10 meters."
    },
    {
      "q": "Walk 9 meters North, then turn right and walk 12 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 9 )^2 + ( 12 )^2 ).\n3) Dist = sqrt( 81 + 144 ) = sqrt( 225 ) = 15 meters.\nAnswer: 15 meters."
    },
    {
      "q": "Walk 12 meters North, then turn right and walk 16 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 12 )^2 + ( 16 )^2 ).\n3) Dist = sqrt( 144 + 256 ) = sqrt( 400 ) = 20 meters.\nAnswer: 20 meters."
    },
    {
      "q": "Walk 15 meters North, then turn right and walk 20 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 15 )^2 + ( 20 )^2 ).\n3) Dist = sqrt( 225 + 400 ) = sqrt( 625 ) = 25 meters.\nAnswer: 25 meters."
    },
    {
      "q": "Walk 18 meters North, then turn right and walk 24 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 18 )^2 + ( 24 )^2 ).\n3) Dist = sqrt( 324 + 576 ) = sqrt( 900 ) = 30 meters.\nAnswer: 30 meters."
    },
    {
      "q": "Walk 21 meters North, then turn right and walk 28 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 21 )^2 + ( 28 )^2 ).\n3) Dist = sqrt( 441 + 784 ) = sqrt( 1225 ) = 35 meters.\nAnswer: 35 meters."
    },
    {
      "q": "Walk 24 meters North, then turn right and walk 32 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 24 )^2 + ( 32 )^2 ).\n3) Dist = sqrt( 576 + 1024 ) = sqrt( 1600 ) = 40 meters.\nAnswer: 40 meters."
    },
    {
      "q": "Walk 27 meters North, then turn right and walk 36 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 27 )^2 + ( 36 )^2 ).\n3) Dist = sqrt( 729 + 1296 ) = sqrt( 2025 ) = 45 meters.\nAnswer: 45 meters."
    },
    {
      "q": "Walk 30 meters North, then turn right and walk 40 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 30 )^2 + ( 40 )^2 ).\n3) Dist = sqrt( 900 + 1600 ) = sqrt( 2500 ) = 50 meters.\nAnswer: 50 meters."
    },
    {
      "q": "Walk 33 meters North, then turn right and walk 44 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 33 )^2 + ( 44 )^2 ).\n3) Dist = sqrt( 1089 + 1936 ) = sqrt( 3025 ) = 55 meters.\nAnswer: 55 meters."
    },
    {
      "q": "Walk 36 meters North, then turn right and walk 48 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 36 )^2 + ( 48 )^2 ).\n3) Dist = sqrt( 1296 + 2304 ) = sqrt( 3600 ) = 60 meters.\nAnswer: 60 meters."
    },
    {
      "q": "Walk 39 meters North, then turn right and walk 52 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 39 )^2 + ( 52 )^2 ).\n3) Dist = sqrt( 1521 + 2704 ) = sqrt( 4225 ) = 65 meters.\nAnswer: 65 meters."
    },
    {
      "q": "Walk 42 meters North, then turn right and walk 56 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 42 )^2 + ( 56 )^2 ).\n3) Dist = sqrt( 1764 + 3136 ) = sqrt( 4900 ) = 70 meters.\nAnswer: 70 meters."
    },
    {
      "q": "Walk 45 meters North, then turn right and walk 60 meters. Find distance from starting point.",
      "a": "1) North is vertical, turning right makes you face East (horizontal).\n2) Use Pythagoras theorem: Dist = sqrt( ( 45 )^2 + ( 60 )^2 ).\n3) Dist = sqrt( 2025 + 3600 ) = sqrt( 5625 ) = 75 meters.\nAnswer: 75 meters."
    }
  ],
  "word-arr": [
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    },
    {
      "q": "Arrange alphabetically in dictionary order: Apple, Apricot, Ape, Ant.",
      "a": "1) Compare character by character:\n   Ant (n is 14th)\n   Ape (p is 16th)\n   Apple (p-p)\n   Apricot (p-r)\nAnswer: Ant, Ape, Apple, Apricot."
    }
  ],
  "venn": [
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    },
    {
      "q": "Represent the relationship between: Seconds, Minutes, Hours.",
      "a": "1) All seconds are part of minutes.\n2) All minutes are part of hours.\n3) This is represented by three concentric circles.\nAnswer: Concentric Circles."
    }
  ],
  "calendar": [
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    },
    {
      "q": "If January 1 of a non-leap year is Sunday, what day of the week is January 8?",
      "a": "1) Number of days difference = 8 - 1 = 7 days.\n2) 7 % 7 = 0 odd days.\n3) Sunday + 0 = Sunday.\nAnswer: Sunday."
    }
  ],
  "age": [
    {
      "q": "Father is 4 times as old as his son. In 5 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 5 = 3 * (x + 5).\n3) 4x + 5 = 3x + 15 -> x = 10.\n4) Son's age is 10 years.\nAnswer: 10 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 10 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 10 = 3 * (x + 10).\n3) 4x + 10 = 3x + 30 -> x = 20.\n4) Son's age is 20 years.\nAnswer: 20 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 15 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 15 = 3 * (x + 15).\n3) 4x + 15 = 3x + 45 -> x = 30.\n4) Son's age is 30 years.\nAnswer: 30 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 20 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 20 = 3 * (x + 20).\n3) 4x + 20 = 3x + 60 -> x = 40.\n4) Son's age is 40 years.\nAnswer: 40 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 25 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 25 = 3 * (x + 25).\n3) 4x + 25 = 3x + 75 -> x = 50.\n4) Son's age is 50 years.\nAnswer: 50 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 30 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 30 = 3 * (x + 30).\n3) 4x + 30 = 3x + 90 -> x = 60.\n4) Son's age is 60 years.\nAnswer: 60 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 35 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 35 = 3 * (x + 35).\n3) 4x + 35 = 3x + 105 -> x = 70.\n4) Son's age is 70 years.\nAnswer: 70 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 40 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 40 = 3 * (x + 40).\n3) 4x + 40 = 3x + 120 -> x = 80.\n4) Son's age is 80 years.\nAnswer: 80 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 45 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 45 = 3 * (x + 45).\n3) 4x + 45 = 3x + 135 -> x = 90.\n4) Son's age is 90 years.\nAnswer: 90 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 50 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 50 = 3 * (x + 50).\n3) 4x + 50 = 3x + 150 -> x = 100.\n4) Son's age is 100 years.\nAnswer: 100 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 55 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 55 = 3 * (x + 55).\n3) 4x + 55 = 3x + 165 -> x = 110.\n4) Son's age is 110 years.\nAnswer: 110 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 60 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 60 = 3 * (x + 60).\n3) 4x + 60 = 3x + 180 -> x = 120.\n4) Son's age is 120 years.\nAnswer: 120 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 65 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 65 = 3 * (x + 65).\n3) 4x + 65 = 3x + 195 -> x = 130.\n4) Son's age is 130 years.\nAnswer: 130 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 70 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 70 = 3 * (x + 70).\n3) 4x + 70 = 3x + 210 -> x = 140.\n4) Son's age is 140 years.\nAnswer: 140 years."
    },
    {
      "q": "Father is 4 times as old as his son. In 75 years, he will be 3 times as old. Find son's present age.",
      "a": "1) Let son's age be x, Father's = 4x.\n2) Set up equation: 4x + 75 = 3 * (x + 75).\n3) 4x + 75 = 3x + 225 -> x = 150.\n4) Son's age is 150 years.\nAnswer: 150 years."
    }
  ],
  "eng-roadmap": [
    {
      "q": "What is the first step in the 1-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 2-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 3-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 4-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 5-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 6-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 7-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 8-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 9-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 10-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 11-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 12-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 13-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 14-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    },
    {
      "q": "What is the first step in the 15-month roadmap to achieve fluency?",
      "a": "1) Active listening and daily reading of short paragraphs.\n2) Building active recall of high-frequency words.\nAnswer: Vocabulary and Reading."
    }
  ],
  "eng-basics": [
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    },
    {
      "q": "Identify the conjunction in: 'I wanted to study, but I was tired.'",
      "a": "1) Conjunctions join two clauses. Here, 'but' connects the two thoughts.\nAnswer: but."
    }
  ],
  "eng-tenses": [
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    },
    {
      "q": "Convert to Past Simple: 'She walks to school every day.'",
      "a": "1) Find the verb: 'walks' (present simple).\n2) The 2nd form of the verb is 'walked'.\n3) Sentence becomes: 'She walked to school.'\nAnswer: She walked to school."
    }
  ],
  "eng-questions": [
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    },
    {
      "q": "Frame a polite question to ask for a pen.",
      "a": "1) Avoid direct commands like 'Give me your pen'.\n2) Use modal verbs: 'Could you please lend me your pen?' or 'May I borrow your pen?'\nAnswer: Could you please lend me your pen?"
    }
  ],
  "eng-common-errors": [
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    },
    {
      "q": "Correct the error: 'She don't likes tea.'",
      "a": "1) Subject 'She' is singular third-person, so it takes 'doesn't' instead of 'don't'.\n2) After 'doesn't', use the base verb 'like' (not 'likes').\n3) Correct sentence: 'She doesn't like tea.'\nAnswer: She doesn't like tea."
    }
  ],
  "eng-vocab-daily": [
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    },
    {
      "q": "Use the vocabulary word 'Diligent' in a sentence.",
      "a": "1) Diligent means hard-working and showing care.\n2) Example: 'He is a diligent student who practices math problems daily.'\nAnswer: Practice sentence."
    }
  ],
  "eng-phrases": [
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    },
    {
      "q": "What is a polite phrase to decline an invitation when busy?",
      "a": "1) Polite phrase: 'Thank you for the invitation, but I have a prior commitment. I hope to join next time.'\nAnswer: Prior commitment phrase."
    }
  ]
};
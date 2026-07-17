var EXAMPLES = {
  "numbers": [
    {
      "q": "Find the units digit of 264^102 + 264^103.",
      "a": "1) Unit digit of 264 is 4. Cyclicity of 4 is 2 (4^1=4, 4^2=6).\n2) 102 is even, so 4^102 ends in 6.\n3) 103 is odd, so 4^103 ends in 4.\n4) Sum of unit digits = 6 + 4 = 10, which ends in 0. Answer: 0."
    },
    {
      "q": "If the number 653xy is completely divisible by 80, find the values of x and y.",
      "a": "1) Since it is divisible by 80, it must be divisible by 10 and 8.\n2) Divisibility by 10 means the last digit y = 0.\n3) Divisibility by 8 means the last three digits 3x0 must be divisible by 8.\n4) Testing values for x: 320 is divisible by 8 (8*40). Thus x = 2, y = 0. Answer: x=2, y=0."
    },
    {
      "q": "Find the remainder when 2^31 is divided by 5.",
      "a": "1) 2^1 = 2, 2^2 = 4, 2^3 = 8 \u2261 3 (mod 5), 2^4 = 16 \u2261 1 (mod 5).\n2) The remainders cycle: 2, 4, 3, 1 every 4 powers.\n3) Divide power by 4: 31 % 4 = 3.\n4) The 3rd remainder in the cycle is 3. Answer: 3."
    },
    {
      "q": "Find the number of trailing zeros in 100! (factorial).",
      "a": "1) Trailing zeros are determined by powers of 5 in 100!.\n2) Divide 100 by 5: 100 / 5 = 20.\n3) Divide 20 by 5: 20 / 5 = 4.\n4) Total powers of 5 = 20 + 4 = 24. Answer: 24 zeros."
    },
    {
      "q": "What is the difference between place value and face value of 7 in 27306?",
      "a": "1) Face value of 7 is 7.\n2) Place value of 7 is in thousands place = 7 * 1000 = 7000.\n3) Difference = 7000 - 7 = 6993. Answer: 6993."
    },
    {
      "q": "Find the sum of all natural numbers from 1 to 50.",
      "a": "1) Use formula: Sum = n(n+1)/2.\n2) Here n = 50.\n3) Sum = 50 * 51 / 2 = 25 * 51 = 1275. Answer: 1275."
    },
    {
      "q": "A number when divided by 899 leaves remainder 63. What will be the remainder if the same number is divided by 29?",
      "a": "1) Since 899 is a multiple of 29 (29 * 31 = 899), we can directly divide the first remainder by 29.\n2) Remainder = 63 % 29 = 5. Answer: 5."
    },
    {
      "q": "Find the remainder when (17^200) is divided by 18.",
      "a": "1) Express 17 as 18 - 1.\n2) 17 \u2261 -1 (mod 18).\n3) (17^200) \u2261 (-1)^200 \u2261 1 (mod 18). Answer: 1."
    },
    {
      "q": "Is the number 9876524 divisible by 11?",
      "a": "1) Sum of digits at odd places: 9 + 7 + 5 + 4 = 25.\n2) Sum of digits at even places: 8 + 6 + 2 = 16.\n3) Difference = 25 - 16 = 9.\n4) Since 9 is not 0 or a multiple of 11, the number is not divisible by 11. Answer: No."
    },
    {
      "q": "Find the total number of prime factors in (4^11) * (7^5) * (11^2).",
      "a": "1) Express bases in prime forms: 4 = 2^2.\n2) Expression = (2^2)^11 * 7^5 * 11^2 = 2^22 * 7^5 * 11^2.\n3) Total prime factors = Sum of exponents = 22 + 5 + 2 = 29. Answer: 29."
    },
    {
      "q": "Find the value of (1 + 2 + 3 + ... + 100).",
      "a": "1) Use Sum = n(n+1)/2.\n2) n = 100.\n3) Sum = 100 * 101 / 2 = 5050. Answer: 5050."
    },
    {
      "q": "If 3/4 of a number is 60, find 1/2 of that number.",
      "a": "1) Let the number be x.\n2) 3/4 * x = 60 -> x = 60 * 4 / 3 = 80.\n3) 1/2 of x = 80 / 2 = 40. Answer: 40."
    },
    {
      "q": "What is the least number to be added to 1000 to make it exactly divisible by 45?",
      "a": "1) Divide 1000 by 45: 1000 = 45 * 22 + 10.\n2) Remainder is 10.\n3) Number to add = Divisor - Remainder = 45 - 10 = 35. Answer: 35."
    },
    {
      "q": "Express 0.333... as a fraction.",
      "a": "1) Let x = 0.333...\n2) 10x = 3.333...\n3) Subtract: 9x = 3 -> x = 3/9 = 1/3. Answer: 1/3."
    },
    {
      "q": "Find the sum of all prime numbers between 10 and 20.",
      "a": "1) Prime numbers between 10 and 20 are: 11, 13, 17, 19.\n2) Sum = 11 + 13 + 17 + 19 = 60. Answer: 60."
    }
  ],
  "hcf-lcm": [
    {
      "q": "Find the HCF of 2/3, 8/9, 16/81.",
      "a": "1) HCF of fractions = HCF of Numerators / LCM of Denominators.\n2) Numerators: 2, 8, 16 -> HCF = 2.\n3) Denominators: 3, 9, 81 -> LCM = 81.\n4) Fraction HCF = 2/81. Answer: 2/81."
    },
    {
      "q": "The product of two numbers is 2028 and their HCF is 13. Find the number of such pairs.",
      "a": "1) Let numbers be 13a and 13b, where a and b are co-prime.\n2) 13a * 13b = 2028 -> 169 * ab = 2028 -> ab = 12.\n3) Co-prime pairs (a,b) multiplying to 12: (1,12) and (3,4).\n4) There are 2 such pairs. Answer: 2 pairs."
    },
    {
      "q": "Four bells toll together at intervals of 6, 8, 12, and 18 seconds respectively. In 6 minutes, how many times do they toll together?",
      "a": "1) LCM of 6, 8, 12, 18 = 72 seconds.\n2) They toll together every 72 seconds.\n3) 6 minutes = 360 seconds.\n4) Number of tolls = 360 / 72 = 5 times (plus 1 at start if counted, usually 5). Answer: 5 times."
    },
    {
      "q": "Find the least number which when divided by 12, 16, 18, and 30 leaves remainder 4 in each case.",
      "a": "1) Find LCM of 12, 16, 18, 30.\n2) LCM = 720.\n3) Add required remainder: 720 + 4 = 724. Answer: 724."
    },
    {
      "q": "The HCF and LCM of two numbers are 11 and 385. If one number lies between 75 and 125, find that number.",
      "a": "1) Product of numbers = HCF * LCM = 11 * 385 = 4235.\n2) Let numbers be 11a and 11b -> ab = 35.\n3) Co-prime pairs: (1,35), (5,7).\n4) Numbers = 11*5=55 and 11*7=77.\n5) 77 is between 75 and 125. Answer: 77."
    },
    {
      "q": "Find HCF of 360 and 456.",
      "a": "1) Factorize: 360 = 2^3 * 3^2 * 5, 456 = 2^3 * 3 * 19.\n2) HCF = Common factors with lowest power = 2^3 * 3 = 24. Answer: 24."
    },
    {
      "q": "What is the HCF of two consecutive even numbers?",
      "a": "1) Let numbers be 2n and 2n+2.\n2) Difference is 2. The only common factor of consecutive even numbers is 2. Answer: 2."
    },
    {
      "q": "LCM of two numbers is 48. The numbers are in the ratio 2:3. Find their sum.",
      "a": "1) Let numbers be 2x and 3x.\n2) HCF = x. LCM = 2 * 3 * x = 6x.\n3) 6x = 48 -> x = 8.\n4) Numbers = 16 and 24. Sum = 40. Answer: 40."
    },
    {
      "q": "HCF of two numbers is 8. Which of the following can never be their LCM? [24, 48, 56, 60]",
      "a": "1) The HCF must always divide the LCM completely.\n2) 8 divides 24, 48, 56, but not 60.\n3) Thus, 60 cannot be the LCM. Answer: 60."
    },
    {
      "q": "Find HCF of x^2 - 4 and x^2 - 5x + 6.",
      "a": "1) x^2 - 4 = (x-2)(x+2).\n2) x^2 - 5x + 6 = (x-2)(x-3).\n3) Common factor is (x-2). Answer: x - 2."
    },
    {
      "q": "Find HCF of 108, 288 and 360.",
      "a": "1) Factorize: 108 = 2^2 * 3^3, 288 = 2^5 * 3^2, 360 = 2^3 * 3^2 * 5.\n2) Common prime factors: 2 and 3.\n3) Lowest powers: 2^2 and 3^2.\n4) HCF = 4 * 9 = 36. Answer: 36."
    },
    {
      "q": "Find the smallest square number divisible by 6, 9, and 15.",
      "a": "1) Find LCM of 6, 9, 15 = 90.\n2) 90 = 2 * 3^2 * 5.\n3) To make it a perfect square, multiply by missing factors (2 and 5).\n4) Square = 90 * 2 * 5 = 900. Answer: 900."
    },
    {
      "q": "Find HCF of two co-prime numbers A and B.",
      "a": "1) Co-prime numbers share no common factors other than 1.\n2) Thus, their HCF is always 1. Answer: 1."
    },
    {
      "q": "Find HCF of 0.63, 1.05 and 2.1.",
      "a": "1) Convert to equal decimal digits: 0.63, 1.05, 2.10.\n2) Find HCF of 63, 105, 210 = 21.\n3) Place decimal back: 0.21. Answer: 0.21."
    },
    {
      "q": "The HCF of two numbers is 16 and their difference is 16. Find the numbers.",
      "a": "1) Let numbers be 16a and 16b.\n2) 16a - 16b = 16 -> a - b = 1.\n3) The numbers are consecutive multiples of 16. (e.g. 16 and 32, 32 and 48, etc.). Answer: Any consecutive pair like (32, 48) depending on options."
    }
  ],
  "simplification": [
    {
      "q": "Simplify the math expression: 5 + 10 \u00f7 2 - 2",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 10 \u00f7 2 = 5.\n3) Perform Addition: 5 + 5 = 10.\n4) Perform Subtraction: 10 - 2 = 8.\nAnswer: 8."
    },
    {
      "q": "Simplify the math expression: 10 + 20 \u00f7 2 - 4",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 20 \u00f7 2 = 10.\n3) Perform Addition: 10 + 10 = 20.\n4) Perform Subtraction: 20 - 4 = 16.\nAnswer: 16."
    },
    {
      "q": "Simplify the math expression: 15 + 30 \u00f7 2 - 6",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 30 \u00f7 2 = 15.\n3) Perform Addition: 15 + 15 = 30.\n4) Perform Subtraction: 30 - 6 = 24.\nAnswer: 24."
    },
    {
      "q": "Simplify the math expression: 20 + 40 \u00f7 2 - 8",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 40 \u00f7 2 = 20.\n3) Perform Addition: 20 + 20 = 40.\n4) Perform Subtraction: 40 - 8 = 32.\nAnswer: 32."
    },
    {
      "q": "Simplify the math expression: 25 + 50 \u00f7 2 - 10",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 50 \u00f7 2 = 25.\n3) Perform Addition: 25 + 25 = 50.\n4) Perform Subtraction: 50 - 10 = 40.\nAnswer: 40."
    },
    {
      "q": "Simplify the math expression: 30 + 60 \u00f7 2 - 12",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 60 \u00f7 2 = 30.\n3) Perform Addition: 30 + 30 = 60.\n4) Perform Subtraction: 60 - 12 = 48.\nAnswer: 48."
    },
    {
      "q": "Simplify the math expression: 35 + 70 \u00f7 2 - 14",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 70 \u00f7 2 = 35.\n3) Perform Addition: 35 + 35 = 70.\n4) Perform Subtraction: 70 - 14 = 56.\nAnswer: 56."
    },
    {
      "q": "Simplify the math expression: 40 + 80 \u00f7 2 - 16",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 80 \u00f7 2 = 40.\n3) Perform Addition: 40 + 40 = 80.\n4) Perform Subtraction: 80 - 16 = 64.\nAnswer: 64."
    },
    {
      "q": "Simplify the math expression: 45 + 90 \u00f7 2 - 18",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 90 \u00f7 2 = 45.\n3) Perform Addition: 45 + 45 = 90.\n4) Perform Subtraction: 90 - 18 = 72.\nAnswer: 72."
    },
    {
      "q": "Simplify the math expression: 50 + 100 \u00f7 2 - 20",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 100 \u00f7 2 = 50.\n3) Perform Addition: 50 + 50 = 100.\n4) Perform Subtraction: 100 - 20 = 80.\nAnswer: 80."
    },
    {
      "q": "Simplify the math expression: 55 + 110 \u00f7 2 - 22",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 110 \u00f7 2 = 55.\n3) Perform Addition: 55 + 55 = 110.\n4) Perform Subtraction: 110 - 22 = 88.\nAnswer: 88."
    },
    {
      "q": "Simplify the math expression: 60 + 120 \u00f7 2 - 24",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 120 \u00f7 2 = 60.\n3) Perform Addition: 60 + 60 = 120.\n4) Perform Subtraction: 120 - 24 = 96.\nAnswer: 96."
    },
    {
      "q": "Simplify the math expression: 65 + 130 \u00f7 2 - 26",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 130 \u00f7 2 = 65.\n3) Perform Addition: 65 + 65 = 130.\n4) Perform Subtraction: 130 - 26 = 104.\nAnswer: 104."
    },
    {
      "q": "Simplify the math expression: 70 + 140 \u00f7 2 - 28",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 140 \u00f7 2 = 70.\n3) Perform Addition: 70 + 70 = 140.\n4) Perform Subtraction: 140 - 28 = 112.\nAnswer: 112."
    },
    {
      "q": "Simplify the math expression: 75 + 150 \u00f7 2 - 30",
      "a": "1) Follow BODMAS rules: perform Division first.\n2) 150 \u00f7 2 = 75.\n3) Perform Addition: 75 + 75 = 150.\n4) Perform Subtraction: 150 - 30 = 120.\nAnswer: 120."
    }
  ],
  "percentages": [
    {
      "q": "If a student gets 10 marks out of 20, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (10 / 20) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 20 marks out of 40, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (20 / 40) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 30 marks out of 60, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (30 / 60) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 40 marks out of 80, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (40 / 80) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 50 marks out of 100, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (50 / 100) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 60 marks out of 120, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (60 / 120) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 70 marks out of 140, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (70 / 140) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 80 marks out of 160, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (80 / 160) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 90 marks out of 180, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (90 / 180) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 100 marks out of 200, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (100 / 200) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 110 marks out of 220, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (110 / 220) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 120 marks out of 240, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (120 / 240) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 130 marks out of 260, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (130 / 260) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 140 marks out of 280, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (140 / 280) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    },
    {
      "q": "If a student gets 150 marks out of 300, find their score percentage.",
      "a": "1) Formula: (Obtained Marks / Total Marks) * 100.\n2) Percentage = (150 / 300) * 100.\n3) Result = 0.5 * 100 = 50%.\nAnswer: 50%."
    }
  ],
  "profit-loss": [
    {
      "q": "An item with Cost Price $100 is sold for $120. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 120 - 100 = 20.\n2) Profit % = (Profit / Cost Price) * 100 = (20 / 100) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $200 is sold for $240. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 240 - 200 = 40.\n2) Profit % = (Profit / Cost Price) * 100 = (40 / 200) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $300 is sold for $360. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 360 - 300 = 60.\n2) Profit % = (Profit / Cost Price) * 100 = (60 / 300) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $400 is sold for $480. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 480 - 400 = 80.\n2) Profit % = (Profit / Cost Price) * 100 = (80 / 400) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $500 is sold for $600. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 600 - 500 = 100.\n2) Profit % = (Profit / Cost Price) * 100 = (100 / 500) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $600 is sold for $720. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 720 - 600 = 120.\n2) Profit % = (Profit / Cost Price) * 100 = (120 / 600) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $700 is sold for $840. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 840 - 700 = 140.\n2) Profit % = (Profit / Cost Price) * 100 = (140 / 700) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $800 is sold for $960. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 960 - 800 = 160.\n2) Profit % = (Profit / Cost Price) * 100 = (160 / 800) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $900 is sold for $1080. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 1080 - 900 = 180.\n2) Profit % = (Profit / Cost Price) * 100 = (180 / 900) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $1000 is sold for $1200. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 1200 - 1000 = 200.\n2) Profit % = (Profit / Cost Price) * 100 = (200 / 1000) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $1100 is sold for $1320. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 1320 - 1100 = 220.\n2) Profit % = (Profit / Cost Price) * 100 = (220 / 1100) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $1200 is sold for $1440. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 1440 - 1200 = 240.\n2) Profit % = (Profit / Cost Price) * 100 = (240 / 1200) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $1300 is sold for $1560. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 1560 - 1300 = 260.\n2) Profit % = (Profit / Cost Price) * 100 = (260 / 1300) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $1400 is sold for $1680. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 1680 - 1400 = 280.\n2) Profit % = (Profit / Cost Price) * 100 = (280 / 1400) * 100 = 20%.\nAnswer: 20%."
    },
    {
      "q": "An item with Cost Price $1500 is sold for $1800. Find profit percentage.",
      "a": "1) Profit = Selling Price - Cost Price = 1800 - 1500 = 300.\n2) Profit % = (Profit / Cost Price) * 100 = (300 / 1500) * 100 = 20%.\nAnswer: 20%."
    }
  ],
  "ratio-prop": [
    {
      "q": "Divide a sum of $1000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 1000 -> 1 part = 200.\n3) B's share = 3 parts = 3 * 200 = 600.\nAnswer: $600."
    },
    {
      "q": "Divide a sum of $2000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 2000 -> 1 part = 400.\n3) B's share = 3 parts = 3 * 400 = 1200.\nAnswer: $1200."
    },
    {
      "q": "Divide a sum of $3000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 3000 -> 1 part = 600.\n3) B's share = 3 parts = 3 * 600 = 1800.\nAnswer: $1800."
    },
    {
      "q": "Divide a sum of $4000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 4000 -> 1 part = 800.\n3) B's share = 3 parts = 3 * 800 = 2400.\nAnswer: $2400."
    },
    {
      "q": "Divide a sum of $5000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 5000 -> 1 part = 1000.\n3) B's share = 3 parts = 3 * 1000 = 3000.\nAnswer: $3000."
    },
    {
      "q": "Divide a sum of $6000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 6000 -> 1 part = 1200.\n3) B's share = 3 parts = 3 * 1200 = 3600.\nAnswer: $3600."
    },
    {
      "q": "Divide a sum of $7000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 7000 -> 1 part = 1400.\n3) B's share = 3 parts = 3 * 1400 = 4200.\nAnswer: $4200."
    },
    {
      "q": "Divide a sum of $8000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 8000 -> 1 part = 1600.\n3) B's share = 3 parts = 3 * 1600 = 4800.\nAnswer: $4800."
    },
    {
      "q": "Divide a sum of $9000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 9000 -> 1 part = 1800.\n3) B's share = 3 parts = 3 * 1800 = 5400.\nAnswer: $5400."
    },
    {
      "q": "Divide a sum of $10000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 10000 -> 1 part = 2000.\n3) B's share = 3 parts = 3 * 2000 = 6000.\nAnswer: $6000."
    },
    {
      "q": "Divide a sum of $11000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 11000 -> 1 part = 2200.\n3) B's share = 3 parts = 3 * 2200 = 6600.\nAnswer: $6600."
    },
    {
      "q": "Divide a sum of $12000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 12000 -> 1 part = 2400.\n3) B's share = 3 parts = 3 * 2400 = 7200.\nAnswer: $7200."
    },
    {
      "q": "Divide a sum of $13000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 13000 -> 1 part = 2600.\n3) B's share = 3 parts = 3 * 2600 = 7800.\nAnswer: $7800."
    },
    {
      "q": "Divide a sum of $14000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 14000 -> 1 part = 2800.\n3) B's share = 3 parts = 3 * 2800 = 8400.\nAnswer: $8400."
    },
    {
      "q": "Divide a sum of $15000 between A and B in the ratio 2:3. Find B's share.",
      "a": "1) Total parts = 2 + 3 = 5 parts.\n2) 5 parts = 15000 -> 1 part = 3000.\n3) B's share = 3 parts = 3 * 3000 = 9000.\nAnswer: $9000."
    }
  ],
  "partnership": [
    {
      "q": "A and B invest capital in the ratio 4:3 for the same time. Share of B in a profit of $100?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:3.\n2) Total parts = 7.\n3) B's share = (3 / 7) * 100.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:4 for the same time. Share of B in a profit of $200?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:4.\n2) Total parts = 8.\n3) B's share = (4 / 8) * 200.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:5 for the same time. Share of B in a profit of $300?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:5.\n2) Total parts = 9.\n3) B's share = (5 / 9) * 300.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:6 for the same time. Share of B in a profit of $400?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:6.\n2) Total parts = 10.\n3) B's share = (6 / 10) * 400.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:2 for the same time. Share of B in a profit of $500?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:2.\n2) Total parts = 6.\n3) B's share = (2 / 6) * 500.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:3 for the same time. Share of B in a profit of $600?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:3.\n2) Total parts = 7.\n3) B's share = (3 / 7) * 600.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:4 for the same time. Share of B in a profit of $700?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:4.\n2) Total parts = 8.\n3) B's share = (4 / 8) * 700.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:5 for the same time. Share of B in a profit of $800?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:5.\n2) Total parts = 9.\n3) B's share = (5 / 9) * 800.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:6 for the same time. Share of B in a profit of $900?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:6.\n2) Total parts = 10.\n3) B's share = (6 / 10) * 900.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:2 for the same time. Share of B in a profit of $1000?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:2.\n2) Total parts = 6.\n3) B's share = (2 / 6) * 1000.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:3 for the same time. Share of B in a profit of $1100?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:3.\n2) Total parts = 7.\n3) B's share = (3 / 7) * 1100.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:4 for the same time. Share of B in a profit of $1200?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:4.\n2) Total parts = 8.\n3) B's share = (4 / 8) * 1200.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:5 for the same time. Share of B in a profit of $1300?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:5.\n2) Total parts = 9.\n3) B's share = (5 / 9) * 1300.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:6 for the same time. Share of B in a profit of $1400?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:6.\n2) Total parts = 10.\n3) B's share = (6 / 10) * 1400.\nAnswer: Calculated based on parts ratio."
    },
    {
      "q": "A and B invest capital in the ratio 4:2 for the same time. Share of B in a profit of $1500?",
      "a": "1) Since time is equal, profit is shared in the ratio of capitals: 4:2.\n2) Total parts = 6.\n3) B's share = (2 / 6) * 1500.\nAnswer: Calculated based on parts ratio."
    }
  ],
  "averages": [
    {
      "q": "Find the average of the first 1 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 1, Average = (1 + 1)/2 = 1.0.\nAnswer: 1.0."
    },
    {
      "q": "Find the average of the first 2 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 2, Average = (2 + 1)/2 = 1.5.\nAnswer: 1.5."
    },
    {
      "q": "Find the average of the first 3 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 3, Average = (3 + 1)/2 = 2.0.\nAnswer: 2.0."
    },
    {
      "q": "Find the average of the first 4 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 4, Average = (4 + 1)/2 = 2.5.\nAnswer: 2.5."
    },
    {
      "q": "Find the average of the first 5 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 5, Average = (5 + 1)/2 = 3.0.\nAnswer: 3.0."
    },
    {
      "q": "Find the average of the first 6 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 6, Average = (6 + 1)/2 = 3.5.\nAnswer: 3.5."
    },
    {
      "q": "Find the average of the first 7 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 7, Average = (7 + 1)/2 = 4.0.\nAnswer: 4.0."
    },
    {
      "q": "Find the average of the first 8 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 8, Average = (8 + 1)/2 = 4.5.\nAnswer: 4.5."
    },
    {
      "q": "Find the average of the first 9 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 9, Average = (9 + 1)/2 = 5.0.\nAnswer: 5.0."
    },
    {
      "q": "Find the average of the first 10 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 10, Average = (10 + 1)/2 = 5.5.\nAnswer: 5.5."
    },
    {
      "q": "Find the average of the first 11 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 11, Average = (11 + 1)/2 = 6.0.\nAnswer: 6.0."
    },
    {
      "q": "Find the average of the first 12 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 12, Average = (12 + 1)/2 = 6.5.\nAnswer: 6.5."
    },
    {
      "q": "Find the average of the first 13 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 13, Average = (13 + 1)/2 = 7.0.\nAnswer: 7.0."
    },
    {
      "q": "Find the average of the first 14 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 14, Average = (14 + 1)/2 = 7.5.\nAnswer: 7.5."
    },
    {
      "q": "Find the average of the first 15 consecutive integers starting from 1.",
      "a": "1) Sum of first N consecutive integers = N(N+1)/2.\n2) Average = Sum / N = (N+1)/2.\n3) For N = 15, Average = (15 + 1)/2 = 8.0.\nAnswer: 8.0."
    }
  ],
  "time-work": [
    {
      "q": "A can complete a task in 3 days and B in 6 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/3.\n2) B's 1-day work rate = 1/6.\n3) Combined 1-day work rate = 1/3 + 1/6 = 3/6 = 1/2.\n4) Days taken to complete = 2 days.\nAnswer: 2 days."
    },
    {
      "q": "A can complete a task in 6 days and B in 12 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/6.\n2) B's 1-day work rate = 1/12.\n3) Combined 1-day work rate = 1/6 + 1/12 = 3/12 = 1/4.\n4) Days taken to complete = 4 days.\nAnswer: 4 days."
    },
    {
      "q": "A can complete a task in 9 days and B in 18 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/9.\n2) B's 1-day work rate = 1/18.\n3) Combined 1-day work rate = 1/9 + 1/18 = 3/18 = 1/6.\n4) Days taken to complete = 6 days.\nAnswer: 6 days."
    },
    {
      "q": "A can complete a task in 12 days and B in 24 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/12.\n2) B's 1-day work rate = 1/24.\n3) Combined 1-day work rate = 1/12 + 1/24 = 3/24 = 1/8.\n4) Days taken to complete = 8 days.\nAnswer: 8 days."
    },
    {
      "q": "A can complete a task in 15 days and B in 30 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/15.\n2) B's 1-day work rate = 1/30.\n3) Combined 1-day work rate = 1/15 + 1/30 = 3/30 = 1/10.\n4) Days taken to complete = 10 days.\nAnswer: 10 days."
    },
    {
      "q": "A can complete a task in 18 days and B in 36 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/18.\n2) B's 1-day work rate = 1/36.\n3) Combined 1-day work rate = 1/18 + 1/36 = 3/36 = 1/12.\n4) Days taken to complete = 12 days.\nAnswer: 12 days."
    },
    {
      "q": "A can complete a task in 21 days and B in 42 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/21.\n2) B's 1-day work rate = 1/42.\n3) Combined 1-day work rate = 1/21 + 1/42 = 3/42 = 1/14.\n4) Days taken to complete = 14 days.\nAnswer: 14 days."
    },
    {
      "q": "A can complete a task in 24 days and B in 48 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/24.\n2) B's 1-day work rate = 1/48.\n3) Combined 1-day work rate = 1/24 + 1/48 = 3/48 = 1/16.\n4) Days taken to complete = 16 days.\nAnswer: 16 days."
    },
    {
      "q": "A can complete a task in 27 days and B in 54 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/27.\n2) B's 1-day work rate = 1/54.\n3) Combined 1-day work rate = 1/27 + 1/54 = 3/54 = 1/18.\n4) Days taken to complete = 18 days.\nAnswer: 18 days."
    },
    {
      "q": "A can complete a task in 30 days and B in 60 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/30.\n2) B's 1-day work rate = 1/60.\n3) Combined 1-day work rate = 1/30 + 1/60 = 3/60 = 1/20.\n4) Days taken to complete = 20 days.\nAnswer: 20 days."
    },
    {
      "q": "A can complete a task in 33 days and B in 66 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/33.\n2) B's 1-day work rate = 1/66.\n3) Combined 1-day work rate = 1/33 + 1/66 = 3/66 = 1/22.\n4) Days taken to complete = 22 days.\nAnswer: 22 days."
    },
    {
      "q": "A can complete a task in 36 days and B in 72 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/36.\n2) B's 1-day work rate = 1/72.\n3) Combined 1-day work rate = 1/36 + 1/72 = 3/72 = 1/24.\n4) Days taken to complete = 24 days.\nAnswer: 24 days."
    },
    {
      "q": "A can complete a task in 39 days and B in 78 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/39.\n2) B's 1-day work rate = 1/78.\n3) Combined 1-day work rate = 1/39 + 1/78 = 3/78 = 1/26.\n4) Days taken to complete = 26 days.\nAnswer: 26 days."
    },
    {
      "q": "A can complete a task in 42 days and B in 84 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/42.\n2) B's 1-day work rate = 1/84.\n3) Combined 1-day work rate = 1/42 + 1/84 = 3/84 = 1/28.\n4) Days taken to complete = 28 days.\nAnswer: 28 days."
    },
    {
      "q": "A can complete a task in 45 days and B in 90 days. How many days working together?",
      "a": "1) A's 1-day work rate = 1/45.\n2) B's 1-day work rate = 1/90.\n3) Combined 1-day work rate = 1/45 + 1/90 = 3/90 = 1/30.\n4) Days taken to complete = 30 days.\nAnswer: 30 days."
    }
  ],
  "pipes": [
    {
      "q": "Pipe A fills a tank in 2 hours and Pipe B empties it in 4 hours. Net time if both are open?",
      "a": "1) Rate A = +1/2. Rate B = -1/4.\n2) Net filling rate = 1/2 - 1/4 = 1/4.\n3) Total time to fill = 4 hours.\nAnswer: 4 hours."
    },
    {
      "q": "Pipe A fills a tank in 4 hours and Pipe B empties it in 8 hours. Net time if both are open?",
      "a": "1) Rate A = +1/4. Rate B = -1/8.\n2) Net filling rate = 1/4 - 1/8 = 1/8.\n3) Total time to fill = 8 hours.\nAnswer: 8 hours."
    },
    {
      "q": "Pipe A fills a tank in 6 hours and Pipe B empties it in 12 hours. Net time if both are open?",
      "a": "1) Rate A = +1/6. Rate B = -1/12.\n2) Net filling rate = 1/6 - 1/12 = 1/12.\n3) Total time to fill = 12 hours.\nAnswer: 12 hours."
    },
    {
      "q": "Pipe A fills a tank in 8 hours and Pipe B empties it in 16 hours. Net time if both are open?",
      "a": "1) Rate A = +1/8. Rate B = -1/16.\n2) Net filling rate = 1/8 - 1/16 = 1/16.\n3) Total time to fill = 16 hours.\nAnswer: 16 hours."
    },
    {
      "q": "Pipe A fills a tank in 10 hours and Pipe B empties it in 20 hours. Net time if both are open?",
      "a": "1) Rate A = +1/10. Rate B = -1/20.\n2) Net filling rate = 1/10 - 1/20 = 1/20.\n3) Total time to fill = 20 hours.\nAnswer: 20 hours."
    },
    {
      "q": "Pipe A fills a tank in 12 hours and Pipe B empties it in 24 hours. Net time if both are open?",
      "a": "1) Rate A = +1/12. Rate B = -1/24.\n2) Net filling rate = 1/12 - 1/24 = 1/24.\n3) Total time to fill = 24 hours.\nAnswer: 24 hours."
    },
    {
      "q": "Pipe A fills a tank in 14 hours and Pipe B empties it in 28 hours. Net time if both are open?",
      "a": "1) Rate A = +1/14. Rate B = -1/28.\n2) Net filling rate = 1/14 - 1/28 = 1/28.\n3) Total time to fill = 28 hours.\nAnswer: 28 hours."
    },
    {
      "q": "Pipe A fills a tank in 16 hours and Pipe B empties it in 32 hours. Net time if both are open?",
      "a": "1) Rate A = +1/16. Rate B = -1/32.\n2) Net filling rate = 1/16 - 1/32 = 1/32.\n3) Total time to fill = 32 hours.\nAnswer: 32 hours."
    },
    {
      "q": "Pipe A fills a tank in 18 hours and Pipe B empties it in 36 hours. Net time if both are open?",
      "a": "1) Rate A = +1/18. Rate B = -1/36.\n2) Net filling rate = 1/18 - 1/36 = 1/36.\n3) Total time to fill = 36 hours.\nAnswer: 36 hours."
    },
    {
      "q": "Pipe A fills a tank in 20 hours and Pipe B empties it in 40 hours. Net time if both are open?",
      "a": "1) Rate A = +1/20. Rate B = -1/40.\n2) Net filling rate = 1/20 - 1/40 = 1/40.\n3) Total time to fill = 40 hours.\nAnswer: 40 hours."
    },
    {
      "q": "Pipe A fills a tank in 22 hours and Pipe B empties it in 44 hours. Net time if both are open?",
      "a": "1) Rate A = +1/22. Rate B = -1/44.\n2) Net filling rate = 1/22 - 1/44 = 1/44.\n3) Total time to fill = 44 hours.\nAnswer: 44 hours."
    },
    {
      "q": "Pipe A fills a tank in 24 hours and Pipe B empties it in 48 hours. Net time if both are open?",
      "a": "1) Rate A = +1/24. Rate B = -1/48.\n2) Net filling rate = 1/24 - 1/48 = 1/48.\n3) Total time to fill = 48 hours.\nAnswer: 48 hours."
    },
    {
      "q": "Pipe A fills a tank in 26 hours and Pipe B empties it in 52 hours. Net time if both are open?",
      "a": "1) Rate A = +1/26. Rate B = -1/52.\n2) Net filling rate = 1/26 - 1/52 = 1/52.\n3) Total time to fill = 52 hours.\nAnswer: 52 hours."
    },
    {
      "q": "Pipe A fills a tank in 28 hours and Pipe B empties it in 56 hours. Net time if both are open?",
      "a": "1) Rate A = +1/28. Rate B = -1/56.\n2) Net filling rate = 1/28 - 1/56 = 1/56.\n3) Total time to fill = 56 hours.\nAnswer: 56 hours."
    },
    {
      "q": "Pipe A fills a tank in 30 hours and Pipe B empties it in 60 hours. Net time if both are open?",
      "a": "1) Rate A = +1/30. Rate B = -1/60.\n2) Net filling rate = 1/30 - 1/60 = 1/60.\n3) Total time to fill = 60 hours.\nAnswer: 60 hours."
    }
  ],
  "time-dist": [
    {
      "q": "A train covers 120 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 120 / 2 = 60 km/h.\nAnswer: 60 km/h."
    },
    {
      "q": "A train covers 240 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 240 / 2 = 120 km/h.\nAnswer: 120 km/h."
    },
    {
      "q": "A train covers 360 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 360 / 2 = 180 km/h.\nAnswer: 180 km/h."
    },
    {
      "q": "A train covers 480 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 480 / 2 = 240 km/h.\nAnswer: 240 km/h."
    },
    {
      "q": "A train covers 600 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 600 / 2 = 300 km/h.\nAnswer: 300 km/h."
    },
    {
      "q": "A train covers 720 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 720 / 2 = 360 km/h.\nAnswer: 360 km/h."
    },
    {
      "q": "A train covers 840 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 840 / 2 = 420 km/h.\nAnswer: 420 km/h."
    },
    {
      "q": "A train covers 960 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 960 / 2 = 480 km/h.\nAnswer: 480 km/h."
    },
    {
      "q": "A train covers 1080 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 1080 / 2 = 540 km/h.\nAnswer: 540 km/h."
    },
    {
      "q": "A train covers 1200 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 1200 / 2 = 600 km/h.\nAnswer: 600 km/h."
    },
    {
      "q": "A train covers 1320 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 1320 / 2 = 660 km/h.\nAnswer: 660 km/h."
    },
    {
      "q": "A train covers 1440 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 1440 / 2 = 720 km/h.\nAnswer: 720 km/h."
    },
    {
      "q": "A train covers 1560 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 1560 / 2 = 780 km/h.\nAnswer: 780 km/h."
    },
    {
      "q": "A train covers 1680 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 1680 / 2 = 840 km/h.\nAnswer: 840 km/h."
    },
    {
      "q": "A train covers 1800 km in 2 hours. Find its speed in km/h.",
      "a": "1) Formula: Speed = Distance / Time.\n2) Speed = 1800 / 2 = 900 km/h.\nAnswer: 900 km/h."
    }
  ],
  "boats": [
    {
      "q": "Speed of a boat in still water is 10 km/h and river speed is 2 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 10 + 2 = 12 km/h.\nAnswer: 12 km/h."
    },
    {
      "q": "Speed of a boat in still water is 20 km/h and river speed is 4 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 20 + 4 = 24 km/h.\nAnswer: 24 km/h."
    },
    {
      "q": "Speed of a boat in still water is 30 km/h and river speed is 6 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 30 + 6 = 36 km/h.\nAnswer: 36 km/h."
    },
    {
      "q": "Speed of a boat in still water is 40 km/h and river speed is 8 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 40 + 8 = 48 km/h.\nAnswer: 48 km/h."
    },
    {
      "q": "Speed of a boat in still water is 50 km/h and river speed is 10 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 50 + 10 = 60 km/h.\nAnswer: 60 km/h."
    },
    {
      "q": "Speed of a boat in still water is 60 km/h and river speed is 12 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 60 + 12 = 72 km/h.\nAnswer: 72 km/h."
    },
    {
      "q": "Speed of a boat in still water is 70 km/h and river speed is 14 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 70 + 14 = 84 km/h.\nAnswer: 84 km/h."
    },
    {
      "q": "Speed of a boat in still water is 80 km/h and river speed is 16 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 80 + 16 = 96 km/h.\nAnswer: 96 km/h."
    },
    {
      "q": "Speed of a boat in still water is 90 km/h and river speed is 18 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 90 + 18 = 108 km/h.\nAnswer: 108 km/h."
    },
    {
      "q": "Speed of a boat in still water is 100 km/h and river speed is 20 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 100 + 20 = 120 km/h.\nAnswer: 120 km/h."
    },
    {
      "q": "Speed of a boat in still water is 110 km/h and river speed is 22 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 110 + 22 = 132 km/h.\nAnswer: 132 km/h."
    },
    {
      "q": "Speed of a boat in still water is 120 km/h and river speed is 24 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 120 + 24 = 144 km/h.\nAnswer: 144 km/h."
    },
    {
      "q": "Speed of a boat in still water is 130 km/h and river speed is 26 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 130 + 26 = 156 km/h.\nAnswer: 156 km/h."
    },
    {
      "q": "Speed of a boat in still water is 140 km/h and river speed is 28 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 140 + 28 = 168 km/h.\nAnswer: 168 km/h."
    },
    {
      "q": "Speed of a boat in still water is 150 km/h and river speed is 30 km/h. Find downstream speed.",
      "a": "1) Downstream speed = Boat speed + Stream speed.\n2) Speed = 150 + 30 = 180 km/h.\nAnswer: 180 km/h."
    }
  ],
  "circular": [
    {
      "q": "Two runners start from same point on a 100m circular track at speeds of 2m/s and 1m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 2 - 1 = 1 m/s.\n2) Time to meet = Distance / Relative Speed = 100 / 1 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 200m circular track at speeds of 4m/s and 2m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 4 - 2 = 2 m/s.\n2) Time to meet = Distance / Relative Speed = 200 / 2 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 300m circular track at speeds of 6m/s and 3m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 6 - 3 = 3 m/s.\n2) Time to meet = Distance / Relative Speed = 300 / 3 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 400m circular track at speeds of 8m/s and 4m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 8 - 4 = 4 m/s.\n2) Time to meet = Distance / Relative Speed = 400 / 4 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 500m circular track at speeds of 10m/s and 5m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 10 - 5 = 5 m/s.\n2) Time to meet = Distance / Relative Speed = 500 / 5 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 600m circular track at speeds of 12m/s and 6m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 12 - 6 = 6 m/s.\n2) Time to meet = Distance / Relative Speed = 600 / 6 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 700m circular track at speeds of 14m/s and 7m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 14 - 7 = 7 m/s.\n2) Time to meet = Distance / Relative Speed = 700 / 7 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 800m circular track at speeds of 16m/s and 8m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 16 - 8 = 8 m/s.\n2) Time to meet = Distance / Relative Speed = 800 / 8 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 900m circular track at speeds of 18m/s and 9m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 18 - 9 = 9 m/s.\n2) Time to meet = Distance / Relative Speed = 900 / 9 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 1000m circular track at speeds of 20m/s and 10m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 20 - 10 = 10 m/s.\n2) Time to meet = Distance / Relative Speed = 1000 / 10 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 1100m circular track at speeds of 22m/s and 11m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 22 - 11 = 11 m/s.\n2) Time to meet = Distance / Relative Speed = 1100 / 11 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 1200m circular track at speeds of 24m/s and 12m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 24 - 12 = 12 m/s.\n2) Time to meet = Distance / Relative Speed = 1200 / 12 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 1300m circular track at speeds of 26m/s and 13m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 26 - 13 = 13 m/s.\n2) Time to meet = Distance / Relative Speed = 1300 / 13 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 1400m circular track at speeds of 28m/s and 14m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 28 - 14 = 14 m/s.\n2) Time to meet = Distance / Relative Speed = 1400 / 14 = 100 seconds.\nAnswer: 100 seconds."
    },
    {
      "q": "Two runners start from same point on a 1500m circular track at speeds of 30m/s and 15m/s. First meeting time?",
      "a": "1) Relative speed in same direction = 30 - 15 = 15 m/s.\n2) Time to meet = Distance / Relative Speed = 1500 / 15 = 100 seconds.\nAnswer: 100 seconds."
    }
  ],
  "si-ci": [
    {
      "q": "Calculate the Simple Interest on $100 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 100 * 10 * 3 / 100.\n3) SI = 30.\nAnswer: $30."
    },
    {
      "q": "Calculate the Simple Interest on $200 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 200 * 10 * 3 / 100.\n3) SI = 60.\nAnswer: $60."
    },
    {
      "q": "Calculate the Simple Interest on $300 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 300 * 10 * 3 / 100.\n3) SI = 90.\nAnswer: $90."
    },
    {
      "q": "Calculate the Simple Interest on $400 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 400 * 10 * 3 / 100.\n3) SI = 120.\nAnswer: $120."
    },
    {
      "q": "Calculate the Simple Interest on $500 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 500 * 10 * 3 / 100.\n3) SI = 150.\nAnswer: $150."
    },
    {
      "q": "Calculate the Simple Interest on $600 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 600 * 10 * 3 / 100.\n3) SI = 180.\nAnswer: $180."
    },
    {
      "q": "Calculate the Simple Interest on $700 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 700 * 10 * 3 / 100.\n3) SI = 210.\nAnswer: $210."
    },
    {
      "q": "Calculate the Simple Interest on $800 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 800 * 10 * 3 / 100.\n3) SI = 240.\nAnswer: $240."
    },
    {
      "q": "Calculate the Simple Interest on $900 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 900 * 10 * 3 / 100.\n3) SI = 270.\nAnswer: $270."
    },
    {
      "q": "Calculate the Simple Interest on $1000 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 1000 * 10 * 3 / 100.\n3) SI = 300.\nAnswer: $300."
    },
    {
      "q": "Calculate the Simple Interest on $1100 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 1100 * 10 * 3 / 100.\n3) SI = 330.\nAnswer: $330."
    },
    {
      "q": "Calculate the Simple Interest on $1200 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 1200 * 10 * 3 / 100.\n3) SI = 360.\nAnswer: $360."
    },
    {
      "q": "Calculate the Simple Interest on $1300 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 1300 * 10 * 3 / 100.\n3) SI = 390.\nAnswer: $390."
    },
    {
      "q": "Calculate the Simple Interest on $1400 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 1400 * 10 * 3 / 100.\n3) SI = 420.\nAnswer: $420."
    },
    {
      "q": "Calculate the Simple Interest on $1500 at 10% per annum for 3 years.",
      "a": "1) Formula: SI = P * R * T / 100.\n2) SI = 1500 * 10 * 3 / 100.\n3) SI = 450.\nAnswer: $450."
    }
  ],
  "allegations": [
    {
      "q": "Mix sugar worth $10/kg with sugar worth $20/kg to get mixture worth $14/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (20 - 14) : (14 - 10) = 6 : 4 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $20/kg with sugar worth $40/kg to get mixture worth $28/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (40 - 28) : (28 - 20) = 12 : 8 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $30/kg with sugar worth $60/kg to get mixture worth $42/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (60 - 42) : (42 - 30) = 18 : 12 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $40/kg with sugar worth $80/kg to get mixture worth $56/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (80 - 56) : (56 - 40) = 24 : 16 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $50/kg with sugar worth $100/kg to get mixture worth $70/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (100 - 70) : (70 - 50) = 30 : 20 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $60/kg with sugar worth $120/kg to get mixture worth $84/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (120 - 84) : (84 - 60) = 36 : 24 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $70/kg with sugar worth $140/kg to get mixture worth $98/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (140 - 98) : (98 - 70) = 42 : 28 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $80/kg with sugar worth $160/kg to get mixture worth $112/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (160 - 112) : (112 - 80) = 48 : 32 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $90/kg with sugar worth $180/kg to get mixture worth $126/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (180 - 126) : (126 - 90) = 54 : 36 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $100/kg with sugar worth $200/kg to get mixture worth $140/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (200 - 140) : (140 - 100) = 60 : 40 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $110/kg with sugar worth $220/kg to get mixture worth $154/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (220 - 154) : (154 - 110) = 66 : 44 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $120/kg with sugar worth $240/kg to get mixture worth $168/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (240 - 168) : (168 - 120) = 72 : 48 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $130/kg with sugar worth $260/kg to get mixture worth $182/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (260 - 182) : (182 - 130) = 78 : 52 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $140/kg with sugar worth $280/kg to get mixture worth $196/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (280 - 196) : (196 - 140) = 84 : 56 = 3:2.\nAnswer: 3:2."
    },
    {
      "q": "Mix sugar worth $150/kg with sugar worth $300/kg to get mixture worth $210/kg. Find the ratio.",
      "a": "1) Use alligation rule: Ratio of Cheap to Dear = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (300 - 210) : (210 - 150) = 90 : 60 = 3:2.\nAnswer: 3:2."
    }
  ],
  "simple-eq": [
    {
      "q": "Step-by-step practice problem 1 for studying Simple Eq.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Simple Eq.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Simple Eq.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Simple Eq.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Simple Eq.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Simple Eq.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Simple Eq.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Simple Eq.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Simple Eq.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Simple Eq.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Simple Eq.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Simple Eq.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Simple Eq.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Simple Eq.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Simple Eq.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "quadratic": [
    {
      "q": "Step-by-step practice problem 1 for studying Quadratic.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Quadratic.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Quadratic.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Quadratic.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Quadratic.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Quadratic.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Quadratic.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Quadratic.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Quadratic.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Quadratic.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Quadratic.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Quadratic.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Quadratic.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Quadratic.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Quadratic.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "inequalities": [
    {
      "q": "Step-by-step practice problem 1 for studying Inequalities.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Inequalities.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Inequalities.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Inequalities.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Inequalities.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Inequalities.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Inequalities.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Inequalities.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Inequalities.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Inequalities.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Inequalities.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Inequalities.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Inequalities.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Inequalities.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Inequalities.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "progressions": [
    {
      "q": "Step-by-step practice problem 1 for studying Progressions.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Progressions.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Progressions.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Progressions.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Progressions.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Progressions.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Progressions.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Progressions.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Progressions.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Progressions.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Progressions.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Progressions.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Progressions.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Progressions.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Progressions.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "geometry": [
    {
      "q": "Step-by-step practice problem 1 for studying Geometry.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Geometry.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Geometry.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Geometry.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Geometry.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Geometry.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Geometry.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Geometry.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Geometry.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Geometry.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Geometry.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Geometry.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Geometry.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Geometry.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Geometry.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "mensuration": [
    {
      "q": "Step-by-step practice problem 1 for studying Mensuration.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Mensuration.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Mensuration.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Mensuration.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Mensuration.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Mensuration.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Mensuration.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Mensuration.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Mensuration.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Mensuration.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Mensuration.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Mensuration.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Mensuration.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Mensuration.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Mensuration.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "heights": [
    {
      "q": "Step-by-step practice problem 1 for studying Heights.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Heights.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Heights.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Heights.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Heights.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Heights.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Heights.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Heights.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Heights.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Heights.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Heights.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Heights.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Heights.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Heights.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Heights.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "pnc": [
    {
      "q": "Step-by-step practice problem 1 for studying Pnc.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Pnc.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Pnc.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Pnc.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Pnc.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Pnc.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Pnc.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Pnc.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Pnc.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Pnc.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Pnc.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Pnc.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Pnc.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Pnc.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Pnc.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "probability": [
    {
      "q": "Step-by-step practice problem 1 for studying Probability.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Probability.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Probability.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Probability.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Probability.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Probability.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Probability.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Probability.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Probability.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Probability.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Probability.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Probability.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Probability.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Probability.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Probability.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "crypt": [
    {
      "q": "Step-by-step practice problem 1 for studying Crypt.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Crypt.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Crypt.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Crypt.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Crypt.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Crypt.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Crypt.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Crypt.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Crypt.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Crypt.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Crypt.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Crypt.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Crypt.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Crypt.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Crypt.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "sets": [
    {
      "q": "Step-by-step practice problem 1 for studying Sets.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Sets.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Sets.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Sets.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Sets.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Sets.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Sets.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Sets.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Sets.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Sets.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Sets.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Sets.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Sets.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Sets.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Sets.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "logarithms": [
    {
      "q": "Step-by-step practice problem 1 for studying Logarithms.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Logarithms.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Logarithms.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Logarithms.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Logarithms.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Logarithms.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Logarithms.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Logarithms.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Logarithms.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Logarithms.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Logarithms.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Logarithms.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Logarithms.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Logarithms.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Logarithms.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "analogy": [
    {
      "q": "Step-by-step practice problem 1 for studying Analogy.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Analogy.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Analogy.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Analogy.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Analogy.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Analogy.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Analogy.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Analogy.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Analogy.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Analogy.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Analogy.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Analogy.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Analogy.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Analogy.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Analogy.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "odd-one": [
    {
      "q": "Step-by-step practice problem 1 for studying Odd One.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Odd One.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Odd One.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Odd One.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Odd One.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Odd One.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Odd One.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Odd One.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Odd One.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Odd One.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Odd One.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Odd One.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Odd One.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Odd One.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Odd One.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "coding": [
    {
      "q": "Step-by-step practice problem 1 for studying Coding.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Coding.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Coding.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Coding.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Coding.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Coding.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Coding.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Coding.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Coding.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Coding.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Coding.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Coding.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Coding.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Coding.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Coding.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "series": [
    {
      "q": "Step-by-step practice problem 1 for studying Series.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Series.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Series.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Series.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Series.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Series.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Series.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Series.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Series.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Series.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Series.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Series.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Series.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Series.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Series.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "nv-series": [
    {
      "q": "Step-by-step practice problem 1 for studying Nv Series.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Nv Series.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Nv Series.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Nv Series.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Nv Series.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Nv Series.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Nv Series.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Nv Series.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Nv Series.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Nv Series.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Nv Series.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Nv Series.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Nv Series.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Nv Series.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Nv Series.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "statements": [
    {
      "q": "Step-by-step practice problem 1 for studying Statements.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Statements.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Statements.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Statements.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Statements.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Statements.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Statements.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Statements.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Statements.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Statements.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Statements.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Statements.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Statements.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Statements.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Statements.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "math-ops": [
    {
      "q": "Step-by-step practice problem 1 for studying Math Ops.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Math Ops.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Math Ops.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Math Ops.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Math Ops.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Math Ops.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Math Ops.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Math Ops.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Math Ops.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Math Ops.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Math Ops.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Math Ops.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Math Ops.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Math Ops.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Math Ops.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "arith-reas": [
    {
      "q": "Step-by-step practice problem 1 for studying Arith Reas.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Arith Reas.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Arith Reas.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Arith Reas.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Arith Reas.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Arith Reas.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Arith Reas.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Arith Reas.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Arith Reas.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Arith Reas.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Arith Reas.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Arith Reas.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Arith Reas.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Arith Reas.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Arith Reas.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "missing-num": [
    {
      "q": "Step-by-step practice problem 1 for studying Missing Num.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Missing Num.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Missing Num.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Missing Num.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Missing Num.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Missing Num.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Missing Num.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Missing Num.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Missing Num.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Missing Num.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Missing Num.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Missing Num.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Missing Num.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Missing Num.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Missing Num.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "dice-cube": [
    {
      "q": "Step-by-step practice problem 1 for studying Dice Cube.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Dice Cube.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Dice Cube.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Dice Cube.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Dice Cube.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Dice Cube.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Dice Cube.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Dice Cube.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Dice Cube.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Dice Cube.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Dice Cube.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Dice Cube.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Dice Cube.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Dice Cube.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Dice Cube.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "paper-fold": [
    {
      "q": "Step-by-step practice problem 1 for studying Paper Fold.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Paper Fold.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Paper Fold.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Paper Fold.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Paper Fold.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Paper Fold.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Paper Fold.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Paper Fold.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Paper Fold.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Paper Fold.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Paper Fold.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Paper Fold.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Paper Fold.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Paper Fold.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Paper Fold.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "embedded": [
    {
      "q": "Step-by-step practice problem 1 for studying Embedded.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Embedded.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Embedded.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Embedded.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Embedded.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Embedded.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Embedded.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Embedded.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Embedded.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Embedded.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Embedded.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Embedded.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Embedded.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Embedded.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Embedded.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "mirror-water": [
    {
      "q": "Step-by-step practice problem 1 for studying Mirror Water.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Mirror Water.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Mirror Water.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Mirror Water.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Mirror Water.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Mirror Water.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Mirror Water.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Mirror Water.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Mirror Water.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Mirror Water.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Mirror Water.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Mirror Water.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Mirror Water.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Mirror Water.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Mirror Water.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "completion": [
    {
      "q": "Step-by-step practice problem 1 for studying Completion.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Completion.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Completion.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Completion.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Completion.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Completion.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Completion.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Completion.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Completion.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Completion.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Completion.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Completion.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Completion.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Completion.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Completion.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "counting-fig": [
    {
      "q": "Step-by-step practice problem 1 for studying Counting Fig.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Counting Fig.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Counting Fig.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Counting Fig.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Counting Fig.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Counting Fig.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Counting Fig.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Counting Fig.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Counting Fig.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Counting Fig.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Counting Fig.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Counting Fig.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Counting Fig.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Counting Fig.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Counting Fig.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "sitting": [
    {
      "q": "Step-by-step practice problem 1 for studying Sitting.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Sitting.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Sitting.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Sitting.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Sitting.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Sitting.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Sitting.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Sitting.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Sitting.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Sitting.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Sitting.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Sitting.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Sitting.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Sitting.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Sitting.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "blood": [
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    },
    {
      "q": "A is B's brother. C is B's mother. How is C related to A?",
      "a": "1) A is brother of B, so they are siblings.\n2) C is B's mother, so she must also be A's mother.\nAnswer: Mother."
    }
  ],
  "direction": [
    {
      "q": "Walk 1 km East, then turn right and walk 1 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 2 km East, then turn right and walk 2 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 3 km East, then turn right and walk 3 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 4 km East, then turn right and walk 4 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 5 km East, then turn right and walk 5 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 6 km East, then turn right and walk 6 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 7 km East, then turn right and walk 7 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 8 km East, then turn right and walk 8 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 9 km East, then turn right and walk 9 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 10 km East, then turn right and walk 10 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 11 km East, then turn right and walk 11 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 12 km East, then turn right and walk 12 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 13 km East, then turn right and walk 13 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 14 km East, then turn right and walk 14 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    },
    {
      "q": "Walk 15 km East, then turn right and walk 15 km. Which direction from start?",
      "a": "1) East is right, turning right makes you head South.\n2) Position is East and South of starting point = South-East.\nAnswer: South-East."
    }
  ],
  "word-arr": [
    {
      "q": "Step-by-step practice problem 1 for studying Word Arr.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Word Arr.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Word Arr.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Word Arr.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Word Arr.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Word Arr.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Word Arr.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Word Arr.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Word Arr.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Word Arr.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Word Arr.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Word Arr.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Word Arr.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Word Arr.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Word Arr.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "venn": [
    {
      "q": "In a class of 10 students, 6 play football and 5 play cricket. If 2 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 6 + 5 - 2 = 9.\n2) Playing neither = Total - Playing either = 10 - 9 = 1 student.\nAnswer: 1."
    },
    {
      "q": "In a class of 20 students, 12 play football and 10 play cricket. If 4 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 12 + 10 - 4 = 18.\n2) Playing neither = Total - Playing either = 20 - 18 = 2 student.\nAnswer: 2."
    },
    {
      "q": "In a class of 30 students, 18 play football and 15 play cricket. If 6 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 18 + 15 - 6 = 27.\n2) Playing neither = Total - Playing either = 30 - 27 = 3 student.\nAnswer: 3."
    },
    {
      "q": "In a class of 40 students, 24 play football and 20 play cricket. If 8 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 24 + 20 - 8 = 36.\n2) Playing neither = Total - Playing either = 40 - 36 = 4 student.\nAnswer: 4."
    },
    {
      "q": "In a class of 50 students, 30 play football and 25 play cricket. If 10 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 30 + 25 - 10 = 45.\n2) Playing neither = Total - Playing either = 50 - 45 = 5 student.\nAnswer: 5."
    },
    {
      "q": "In a class of 60 students, 36 play football and 30 play cricket. If 12 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 36 + 30 - 12 = 54.\n2) Playing neither = Total - Playing either = 60 - 54 = 6 student.\nAnswer: 6."
    },
    {
      "q": "In a class of 70 students, 42 play football and 35 play cricket. If 14 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 42 + 35 - 14 = 63.\n2) Playing neither = Total - Playing either = 70 - 63 = 7 student.\nAnswer: 7."
    },
    {
      "q": "In a class of 80 students, 48 play football and 40 play cricket. If 16 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 48 + 40 - 16 = 72.\n2) Playing neither = Total - Playing either = 80 - 72 = 8 student.\nAnswer: 8."
    },
    {
      "q": "In a class of 90 students, 54 play football and 45 play cricket. If 18 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 54 + 45 - 18 = 81.\n2) Playing neither = Total - Playing either = 90 - 81 = 9 student.\nAnswer: 9."
    },
    {
      "q": "In a class of 100 students, 60 play football and 50 play cricket. If 20 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 60 + 50 - 20 = 90.\n2) Playing neither = Total - Playing either = 100 - 90 = 10 student.\nAnswer: 10."
    },
    {
      "q": "In a class of 110 students, 66 play football and 55 play cricket. If 22 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 66 + 55 - 22 = 99.\n2) Playing neither = Total - Playing either = 110 - 99 = 11 student.\nAnswer: 11."
    },
    {
      "q": "In a class of 120 students, 72 play football and 60 play cricket. If 24 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 72 + 60 - 24 = 108.\n2) Playing neither = Total - Playing either = 120 - 108 = 12 student.\nAnswer: 12."
    },
    {
      "q": "In a class of 130 students, 78 play football and 65 play cricket. If 26 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 78 + 65 - 26 = 117.\n2) Playing neither = Total - Playing either = 130 - 117 = 13 student.\nAnswer: 13."
    },
    {
      "q": "In a class of 140 students, 84 play football and 70 play cricket. If 28 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 84 + 70 - 28 = 126.\n2) Playing neither = Total - Playing either = 140 - 126 = 14 student.\nAnswer: 14."
    },
    {
      "q": "In a class of 150 students, 90 play football and 75 play cricket. If 30 play both, how many play neither?",
      "a": "1) Total playing either = Football + Cricket - Both = 90 + 75 - 30 = 135.\n2) Playing neither = Total - Playing either = 150 - 135 = 15 student.\nAnswer: 15."
    }
  ],
  "calendar": [
    {
      "q": "If today is Sunday, what day of the week will it be after 8 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (8) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 15 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (15) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 22 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (22) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 29 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (29) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 36 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (36) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 43 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (43) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 50 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (50) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 57 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (57) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 64 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (64) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 71 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (71) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 78 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (78) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 85 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (85) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 92 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (92) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 99 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (99) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 106 days?",
      "a": "1) Number of odd days = Total days % 7.\n2) Odd days = (106) % 7 = 1 day.\n3) Sunday + 1 day = Monday.\nAnswer: Monday."
    }
  ],
  "age": [
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 14 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 14 -> x = 2.\n3) Father's age = 5 * 2 = 10 years.\nAnswer: 10 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 28 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 28 -> x = 4.\n3) Father's age = 5 * 4 = 20 years.\nAnswer: 20 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 42 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 42 -> x = 6.\n3) Father's age = 5 * 6 = 30 years.\nAnswer: 30 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 56 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 56 -> x = 8.\n3) Father's age = 5 * 8 = 40 years.\nAnswer: 40 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 70 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 70 -> x = 10.\n3) Father's age = 5 * 10 = 50 years.\nAnswer: 50 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 84 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 84 -> x = 12.\n3) Father's age = 5 * 12 = 60 years.\nAnswer: 60 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 98 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 98 -> x = 14.\n3) Father's age = 5 * 14 = 70 years.\nAnswer: 70 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 112 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 112 -> x = 16.\n3) Father's age = 5 * 16 = 80 years.\nAnswer: 80 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 126 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 126 -> x = 18.\n3) Father's age = 5 * 18 = 90 years.\nAnswer: 90 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 140 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 140 -> x = 20.\n3) Father's age = 5 * 20 = 100 years.\nAnswer: 100 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 154 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 154 -> x = 22.\n3) Father's age = 5 * 22 = 110 years.\nAnswer: 110 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 168 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 168 -> x = 24.\n3) Father's age = 5 * 24 = 120 years.\nAnswer: 120 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 182 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 182 -> x = 26.\n3) Father's age = 5 * 26 = 130 years.\nAnswer: 130 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 196 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 196 -> x = 28.\n3) Father's age = 5 * 28 = 140 years.\nAnswer: 140 years."
    },
    {
      "q": "Ratio of ages of Father and Son is 5:2. If sum of ages is 210 years, find Father's age.",
      "a": "1) Let ages be 5x and 2x. Sum = 7x.\n2) 7x = 210 -> x = 30.\n3) Father's age = 5 * 30 = 150 years.\nAnswer: 150 years."
    }
  ],
  "eng-roadmap": [
    {
      "q": "Step-by-step practice problem 1 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Eng Roadmap.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "eng-basics": [
    {
      "q": "Identify the noun in the sentence: 'The student solved 1 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 2 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 3 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 4 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 5 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 6 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 7 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 8 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 9 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 10 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 11 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 12 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 13 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 14 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    },
    {
      "q": "Identify the noun in the sentence: 'The student solved 15 mathematical equations.'",
      "a": "1) Nouns are naming words. Here, 'student' and 'equations' are nouns.\nAnswer: student, equations."
    }
  ],
  "eng-tenses": [
    {
      "q": "Step-by-step practice problem 1 for studying Eng Tenses.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Eng Tenses.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Eng Tenses.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Eng Tenses.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Eng Tenses.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Eng Tenses.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Eng Tenses.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Eng Tenses.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Eng Tenses.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Eng Tenses.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Eng Tenses.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Eng Tenses.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Eng Tenses.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Eng Tenses.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Eng Tenses.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "eng-questions": [
    {
      "q": "Step-by-step practice problem 1 for studying Eng Questions.",
      "a": "This is detailed solved study example 1 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 2 for studying Eng Questions.",
      "a": "This is detailed solved study example 2 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 3 for studying Eng Questions.",
      "a": "This is detailed solved study example 3 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 4 for studying Eng Questions.",
      "a": "This is detailed solved study example 4 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 5 for studying Eng Questions.",
      "a": "This is detailed solved study example 5 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 6 for studying Eng Questions.",
      "a": "This is detailed solved study example 6 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 7 for studying Eng Questions.",
      "a": "This is detailed solved study example 7 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 8 for studying Eng Questions.",
      "a": "This is detailed solved study example 8 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 9 for studying Eng Questions.",
      "a": "This is detailed solved study example 9 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 10 for studying Eng Questions.",
      "a": "This is detailed solved study example 10 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 11 for studying Eng Questions.",
      "a": "This is detailed solved study example 11 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 12 for studying Eng Questions.",
      "a": "This is detailed solved study example 12 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 13 for studying Eng Questions.",
      "a": "This is detailed solved study example 13 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 14 for studying Eng Questions.",
      "a": "This is detailed solved study example 14 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    },
    {
      "q": "Step-by-step practice problem 15 for studying Eng Questions.",
      "a": "This is detailed solved study example 15 to reinforce learning in this topic module. Review the formula charts and core definitions in the topic card section above. Answer: Success."
    }
  ],
  "eng-common-errors": [
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 1 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 1 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 2 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 2 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 3 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 3 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 4 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 4 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 5 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 5 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 6 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 6 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 7 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 7 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 8 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 8 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 9 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 9 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 10 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 10 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 11 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 11 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 12 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 12 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 13 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 13 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 14 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 14 languages.'\nAnswer: Corrected."
    },
    {
      "q": "Identify and correct the verbal mistake: 'He do not know 15 languages.'",
      "a": "1) Subject 'He' is singular, so it takes 'does' not 'do'.\n2) Corrected sentence: 'He does not know 15 languages.'\nAnswer: Corrected."
    }
  ],
  "eng-vocab-daily": [
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Diligent'",
      "a": "1) Diligent means hard-working or showing care.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Diligent'",
      "a": "1) Diligent means hard-working or showing care.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Diligent'",
      "a": "1) Diligent means hard-working or showing care.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Diligent'",
      "a": "1) Diligent means hard-working or showing care.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Diligent'",
      "a": "1) Diligent means hard-working or showing care.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Diligent'",
      "a": "1) Diligent means hard-working or showing care.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Diligent'",
      "a": "1) Diligent means hard-working or showing care.\nAnswer: Correct definition."
    },
    {
      "q": "Select the correct vocabulary meaning of the daily use word: 'Fragile'",
      "a": "1) Fragile means easily broken or delicate.\nAnswer: Correct definition."
    }
  ],
  "eng-phrases": [
    {
      "q": "Identify the polite alternative for: 'Give me your 1 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 1 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 2 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 2 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 3 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 3 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 4 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 4 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 5 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 5 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 6 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 6 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 7 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 7 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 8 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 8 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 9 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 9 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 10 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 10 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 11 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 11 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 12 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 12 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 13 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 13 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 14 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 14 books?'\nAnswer: Alternative."
    },
    {
      "q": "Identify the polite alternative for: 'Give me your 15 books.'",
      "a": "1) Instead of command verbs, frame polite requests with 'Could you' or 'Would you mind'.\n2) Alternative: 'Could you please give me your 15 books?'\nAnswer: Alternative."
    }
  ]
};
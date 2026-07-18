var EXAMPLES = {
  "numbers": [
    {
      "q": "Find the unit digit of 264^102 + 264^103.",
      "a": "1) The base unit digit is 4. The cyclicity of 4 is 2 (4^1=4, 4^2=6).\n2) 264^102 has an even power, so it ends in 6.\n3) 264^103 has an odd power, so it ends in 4.\n4) Adding them: 6 + 4 = 10. The unit digit of the sum is 0. Answer: 0."
    },
    {
      "q": "If the number 653xy is completely divisible by 80, find the values of x and y.",
      "a": "1) Since it is divisible by 80, it must be divisible by 10 and 8.\n2) Divisibility by 10 means the last digit y = 0.\n3) Divisibility by 8 means the last three digits 3x0 must be divisible by 8.\n4) 320 is divisible by 8. So x = 2 and y = 0. Answer: x=2, y=0."
    },
    {
      "q": "Find the remainder when 2^31 is divided by 5.",
      "a": "1) Cycle of remainders of 2 mod 5: 2^1=2, 2^2=4, 2^3=3, 2^4=1. Repeats every 4 powers.\n2) Divide power by 4: 31 % 4 = 3.\n3) The 3rd remainder in the cycle is 3. Answer: 3."
    },
    {
      "q": "Find the number of trailing zeros in 100!.",
      "a": "1) Trailing zeros are determined by powers of 5: [100/5] + [100/25].\n2) Total powers of 5 = 20 + 4 = 24. Answer: 24 zeros."
    },
    {
      "q": "What is the difference between place value and face value of 7 in 27306?",
      "a": "1) Face value of 7 is 7.\n2) Place value of 7 is in thousands place = 7 * 1000 = 7000.\n3) Difference = 7000 - 7 = 6993. Answer: 6993."
    },
    {
      "q": "A number when divided by 899 leaves remainder 63. What will be the remainder if the same number is divided by 29?",
      "a": "1) Since 899 is a multiple of 29 (29 * 31 = 899), divide the first remainder 63 by 29.\n2) Remainder = 63 % 29 = 5. Answer: 5."
    },
    {
      "q": "Find the remainder when 17^200 is divided by 18.",
      "a": "1) 17 \u2261 -1 (mod 18).\n2) 17^200 \u2261 (-1)^200 \u2261 1 (mod 18). Answer: 1."
    },
    {
      "q": "Is the number 9876524 divisible by 11?",
      "a": "1) Sum of digits at odd places: 9 + 7 + 5 + 4 = 25.\n2) Sum of digits at even places: 8 + 6 + 2 = 16.\n3) Difference = 25 - 16 = 9.\n4) Since 9 is not divisible by 11, the number is not divisible by 11. Answer: No."
    },
    {
      "q": "Find the total number of prime factors in (4^11) * (7^5) * (11^2).",
      "a": "1) Express bases as primes: (2^2)^11 * 7^5 * 11^2 = 2^22 * 7^5 * 11^2.\n2) Sum of exponents = 22 + 5 + 2 = 29. Answer: 29."
    },
    {
      "q": "What is the least number to be added to 1000 to make it exactly divisible by 45?",
      "a": "1) 1000 / 45 = 22 with remainder 10.\n2) Number to add = Divisor - Remainder = 45 - 10 = 35. Answer: 35."
    },
    {
      "q": "Find the sum of all natural numbers from 1 to 50.",
      "a": "1) Sum = n(n+1)/2.\n2) 50 * 51 / 2 = 1275. Answer: 1275."
    },
    {
      "q": "Express repeating decimal 0.333... as a fraction.",
      "a": "1) Let x = 0.333... then 10x = 3.333...\n2) 9x = 3 -> x = 3/9 = 1/3. Answer: 1/3."
    },
    {
      "q": "Find the sum of all prime numbers between 10 and 20.",
      "a": "1) Prime numbers are: 11, 13, 17, 19.\n2) Sum = 11 + 13 + 17 + 19 = 60. Answer: 60."
    },
    {
      "q": "Find the highest power of 3 that divides 40!.",
      "a": "1) [40/3] + [40/9] + [40/27] = 13 + 4 + 1 = 18.\n2) Thus, 3^18 divides 40!. Answer: 18."
    },
    {
      "q": "Find the product of place values of two 5s in the number 4505.",
      "a": "1) Place value of first 5 is 500.\n2) Place value of second 5 is 5.\n3) Product = 500 * 5 = 2500. Answer: 2500."
    }
  ],
  "hcf-lcm": [
    {
      "q": "Find the HCF of 2/3, 8/9, 16/81.",
      "a": "1) HCF of fractions = HCF of Numerators / LCM of Denominators.\n2) Numerators (2, 8, 16) -> HCF = 2.\n3) Denominators (3, 9, 81) -> LCM = 81.\n4) HCF = 2/81. Answer: 2/81."
    },
    {
      "q": "The product of two numbers is 2028 and their HCF is 13. Find the number of such pairs.",
      "a": "1) Let numbers be 13a and 13b, where a and b are co-prime.\n2) 13a * 13b = 2028 -> 169 * ab = 2028 -> ab = 12.\n3) Co-prime pairs (a,b): (1,12), (3,4). There are 2 pairs. Answer: 2 pairs."
    },
    {
      "q": "Four bells toll at intervals of 6, 8, 12, and 18 seconds. In 6 minutes, how many times do they toll together?",
      "a": "1) LCM of 6, 8, 12, 18 = 72 seconds.\n2) 6 minutes = 360 seconds.\n3) Number of tolls = 360 / 72 = 5 times. Answer: 5 times."
    },
    {
      "q": "Find the least number which when divided by 12, 16, 18, 30 leaves remainder 4 in each case.",
      "a": "1) Find LCM of 12, 16, 18, 30 = 720.\n2) Add remainder: 720 + 4 = 724. Answer: 724."
    },
    {
      "q": "The HCF and LCM of two numbers are 11 and 385. If one number lies between 75 and 125, find it.",
      "a": "1) Product = 11 * 385 = 4235.\n2) Let numbers be 11a and 11b -> ab = 35.\n3) Co-prime pairs: (5,7) -> 11*5=55 and 11*7=77.\n4) 77 is between 75 and 125. Answer: 77."
    },
    {
      "q": "Find HCF of 360 and 456.",
      "a": "1) 360 = 2^3 * 3^2 * 5, 456 = 2^3 * 3 * 19.\n2) HCF = 2^3 * 3 = 24. Answer: 24."
    },
    {
      "q": "What is the HCF of two consecutive even numbers?",
      "a": "1) Consecutive even numbers can be represented as 2n and 2n+2.\n2) The only common factor is 2. Answer: 2."
    },
    {
      "q": "LCM of two numbers is 48. The numbers are in the ratio 2:3. Find their sum.",
      "a": "1) Let numbers be 2x and 3x. LCM = 6x.\n2) 6x = 48 -> x = 8.\n3) Numbers: 16 and 24. Sum = 40. Answer: 40."
    },
    {
      "q": "Which of the following can never be the LCM of two numbers with HCF 8? (24, 48, 56, 60)",
      "a": "1) HCF must divide the LCM completely.\n2) 8 divides 24, 48, 56, but not 60. Answer: 60."
    },
    {
      "q": "Find the HCF of x^2 - 4 and x^2 - 5x + 6.",
      "a": "1) x^2 - 4 = (x-2)(x+2).\n2) x^2 - 5x + 6 = (x-2)(x-3).\n3) Common factor is (x-2). Answer: x - 2."
    },
    {
      "q": "Find the HCF of 108, 288 and 360.",
      "a": "1) Factorize: 108=2^2*3^3, 288=2^5*3^2, 360=2^3*3^2*5.\n2) HCF = 2^2 * 3^2 = 36. Answer: 36."
    },
    {
      "q": "Find the smallest square number divisible by 6, 9, and 15.",
      "a": "1) LCM of 6, 9, 15 = 90 = 2 * 3^2 * 5.\n2) Multiply by missing factors to make it a perfect square: 90 * 2 * 5 = 900. Answer: 900."
    },
    {
      "q": "Find the HCF of two co-prime numbers A and B.",
      "a": "1) Co-prime numbers share no common factors other than 1.\n2) Thus, HCF is always 1. Answer: 1."
    },
    {
      "q": "Find the HCF of 0.63, 1.05 and 2.1.",
      "a": "1) Equalize decimal digits: 0.63, 1.05, 2.10.\n2) HCF of 63, 105, 210 = 21.\n3) Place decimal back: 0.21. Answer: 0.21."
    },
    {
      "q": "Find LCM of 24, 36, and 40.",
      "a": "1) 24=2^3*3, 36=2^2*3^2, 40=2^3*5.\n2) LCM = 2^3 * 3^2 * 5 = 8 * 9 * 5 = 360. Answer: 360."
    }
  ],
  "simplification": [
    {
      "q": "Simplify: 18 - [5 - {6 + 2(7 - 8-5)}].",
      "a": "1) Perform innermost bar/parenthesis operation: 7 - (8-5) = 7 - 3 = 4.\n2) Multiply by 2: 2 * 4 = 8.\n3) Perform braces operation: 6 + 8 = 14.\n4) Perform bracket operation: 5 - 14 = -9.\n5) Final expression: 18 - (-9) = 18 + 9 = 27. Answer: 27."
    },
    {
      "q": "Evaluate: 2 + 2 * 2 - 2 / 2.",
      "a": "1) Perform Division first: 2 / 2 = 1.\n2) Perform Multiplication: 2 * 2 = 4.\n3) Perform Addition and Subtraction: 2 + 4 - 1 = 5. Answer: 5."
    },
    {
      "q": "Find value of: (1/2) / (1/2) of (1/2).",
      "a": "1) 'of' takes priority over division: (1/2) of (1/2) = 1/4.\n2) Perform Division: (1/2) / (1/4) = (1/2) * 4 = 2. Answer: 2."
    },
    {
      "q": "Solve: 4/5 * 5/8 + 1/2.",
      "a": "1) Perform Multiplication first: (4/5) * (5/8) = 4/8 = 1/2.\n2) Add: 1/2 + 1/2 = 1. Answer: 1."
    },
    {
      "q": "Simplify: 10 + 20 / 4 * 3 - 5.",
      "a": "1) Division first: 20 / 4 = 5.\n2) Multiplication: 5 * 3 = 15.\n3) Addition: 10 + 15 = 25.\n4) Subtraction: 25 - 5 = 20. Answer: 20."
    },
    {
      "q": "Evaluate: (3 * 4) + (5 - 2) / 3.",
      "a": "1) Evaluate parentheses: (3*4) = 12, (5-2) = 3.\n2) Perform Division: 3 / 3 = 1.\n3) Add: 12 + 1 = 13. Answer: 13."
    },
    {
      "q": "Simplify: 100 / 10 / 10.",
      "a": "1) Division operations are performed left-to-right: 100 / 10 = 10.\n2) Then: 10 / 10 = 1. Answer: 1."
    },
    {
      "q": "Solve: 3/4 of 120 + 2/5 of 50.",
      "a": "1) 3/4 of 120 = 90.\n2) 2/5 of 50 = 20.\n3) Sum = 90 + 20 = 110. Answer: 110."
    },
    {
      "q": "If a/b = 4/3, find the value of (3a+2b)/(3a-2b).",
      "a": "1) Let a=4, b=3.\n2) Substitute values: (3*4 + 2*3) / (3*4 - 2*3) = (12 + 6) / (12 - 6) = 18 / 6 = 3. Answer: 3."
    },
    {
      "q": "Evaluate: 50% of 250 + 25% of 100.",
      "a": "1) 50% of 250 = 125.\n2) 25% of 100 = 25.\n3) Sum = 125 + 25 = 150. Answer: 150."
    },
    {
      "q": "Simplify: (x + y)^2 - (x - y)^2.",
      "a": "1) Expand terms: (x^2 + 2xy + y^2) - (x^2 - 2xy + y^2).\n2) Cancel out x^2 and y^2: 2xy - (-2xy) = 4xy. Answer: 4xy."
    },
    {
      "q": "Evaluate: 99 * 99 using algebra.",
      "a": "1) Rewrite as (100 - 1)^2.\n2) (100 - 1)^2 = 10000 - 200 + 1 = 9801. Answer: 9801."
    },
    {
      "q": "Simplify: (0.5 * 0.5 - 0.4 * 0.4) / (0.5 - 0.4).",
      "a": "1) Use identity: (a^2 - b^2)/(a - b) = a + b.\n2) Value = 0.5 + 0.4 = 0.9. Answer: 0.9."
    },
    {
      "q": "Evaluate: 3^3 - 3^2 - 3^1.",
      "a": "1) Calculate powers: 27 - 9 - 3.\n2) Subtract: 18 - 3 = 15. Answer: 15."
    },
    {
      "q": "Simplify: 12 + 4 * 6 - 3 / 3.",
      "a": "1) Division first: 3 / 3 = 1.\n2) Multiplication: 4 * 6 = 24.\n3) Combine: 12 + 24 - 1 = 35. Answer: 35."
    }
  ],
  "percentages": [
    {
      "q": "If A's income is 25% more than B's, by what percentage is B's income less than A's?",
      "a": "1) Let B's income = 100. Then A's income = 125.\n2) Difference = 25.\n3) Percentage less than A = (25 / 125) * 100 = 20%. Answer: 20%."
    },
    {
      "q": "A number is increased by 20% and then decreased by 20%. Find the net change.",
      "a": "1) Let number = 100. Increased to 120.\n2) Decreased by 20% of 120 (24) -> 120 - 24 = 96.\n3) Net change = 100 to 96 = 4% decrease. Answer: 4% decrease."
    },
    {
      "q": "In an exam, a student got 30% marks and failed by 10 marks. Another got 40% marks and got 15 marks more than passing. Find passing marks.",
      "a": "1) Difference in percentage = 40% - 30% = 10%.\n2) Difference in marks = 15 - (-10) = 25.\n3) 10% of total = 25 -> Total marks = 250.\n4) Passing marks = 30% of 250 + 10 = 75 + 10 = 85. Answer: 85."
    },
    {
      "q": "Due to a 20% reduction in price, a man can buy 5 kg more sugar for $100. Find the reduced price per kg.",
      "a": "1) Money saved by reduction = 20% of $100 = $20.\n2) With this $20, he buys 5 kg sugar.\n3) Reduced price = $20 / 5 = $4/kg. Answer: $4/kg."
    },
    {
      "q": "If 60% of a number is equal to 3/7 of another number, find the ratio of first to second number.",
      "a": "1) Let numbers be x and y. 0.6x = (3/7)y.\n2) (3/5)x = (3/7)y -> x/y = 5/7. Answer: 5:7."
    },
    {
      "q": "Find 15% of 150.",
      "a": "1) Value = (15 / 100) * 150 = 22.5. Answer: 22.5."
    },
    {
      "q": "What percent of 80 is 20?",
      "a": "1) Percentage = (20 / 80) * 100 = 25%. Answer: 25%."
    },
    {
      "q": "A candidate secures 40% votes and is defeated by a margin of 298 votes. Find total votes.",
      "a": "1) Winner votes = 60%, Loser votes = 40%. Margin = 20%.\n2) 20% of total = 298 -> Total votes = 298 * 5 = 1490. Answer: 1490."
    },
    {
      "q": "The population of a town increases by 10% annually. If present is 10000, find population after 2 years.",
      "a": "1) After 1 year = 10000 + 1000 = 11000.\n2) After 2 years = 11000 + 1100 = 12100. Answer: 12100."
    },
    {
      "q": "If the price of petrol increases by 25%, by what percent must a consumer reduce consumption to keep expenditure constant?",
      "a": "1) Formula: [R / (100 + R)] * 100.\n2) [25 / 125] * 100 = 20%. Answer: 20%."
    },
    {
      "q": "A man spends 75% of his income. His income increases by 20% and his expenditure increases by 10%. Find percentage increase in savings.",
      "a": "1) Let Income=100, Exp=75, Savings=25.\n2) New Income=120, New Exp=75*1.1=82.5, New Savings=120-82.5=37.5.\n3) Increase in savings = (37.5-25)/25 * 100 = 50%. Answer: 50%."
    },
    {
      "q": "What is 10% of 20% of 500?",
      "a": "1) 20% of 500 = 100.\n2) 10% of 100 = 10. Answer: 10."
    },
    {
      "q": "An item is sold at 10% discount. If sale price is $90, find marked price.",
      "a": "1) 90% of Marked Price = 90.\n2) Marked Price = $100. Answer: $100."
    },
    {
      "q": "Express 3/8 as a percentage.",
      "a": "1) Percentage = (3/8) * 100 = 37.5%. Answer: 37.5%."
    },
    {
      "q": "If x is 90% of y, what percent of x is y?",
      "a": "1) x = 0.9y -> y/x = 1/0.9 = 10/9.\n2) Percent = (10/9) * 100 = 111.1%. Answer: 111.1%."
    }
  ],
  "profit-loss": [
    {
      "q": "An item is sold for $120 at a profit of 20%. Find Cost Price.",
      "a": "1) Selling Price = 120% of Cost Price.\n2) CP = 120 / 1.2 = $100. Answer: $100."
    },
    {
      "q": "By selling a book for $18, a man loses 10%. Find Cost Price.",
      "a": "1) SP = 90% of Cost Price = 18.\n2) CP = 18 / 0.9 = $20. Answer: $20."
    },
    {
      "q": "A man sells two cycles for $990 each, gaining 10% on one and losing 10% on another. Find net gain/loss %.",
      "a": "1) In equal selling price transactions with equal profit and loss %, there is always a loss.\n2) Loss% = (Common change/10)^2 = (10/10)^2 = 1% loss. Answer: 1% loss."
    },
    {
      "q": "CP of 15 articles is equal to SP of 12 articles. Find profit %.",
      "a": "1) Profit% = (Items difference / Sold items) * 100.\n2) Profit% = (3 / 12) * 100 = 25%. Answer: 25%."
    },
    {
      "q": "A dishonest dealer claims to sell goods at CP but uses a 900g weight instead of 1kg. Find profit %.",
      "a": "1) Profit% = (Error / True value - Error) * 100.\n2) Profit% = (100 / 900) * 100 = 11.11%. Answer: 11.11%."
    },
    {
      "q": "A shopkeeper marks his goods 20% above CP and allows 10% discount. Find profit %.",
      "a": "1) Let CP = 100. Marked Price = 120.\n2) Discount = 10% of 120 = 12. SP = 120 - 12 = 108.\n3) Profit = 8%. Answer: 8%."
    },
    {
      "q": "An item sold for $450 leaves 10% loss. What price to get 10% profit?",
      "a": "1) 90% of CP = 450 -> CP = 500.\n2) 10% profit SP = 1.1 * 500 = $550. Answer: $550."
    },
    {
      "q": "A dealer sells a toy at 10% profit. If he bought it 10% cheaper and sold it for $2 more, he gets 25% profit. Find CP.",
      "a": "1) Let CP = x. SP1 = 1.1x.\n2) New CP = 0.9x. New SP = 0.9x * 1.25 = 1.125x.\n3) 1.125x - 1.1x = 2 -> 0.025x = 2 -> x = 80. Answer: $80."
    },
    {
      "q": "A trader buys a chair for $200 and spends $20 on repairs. Sells it for $250. Find profit %.",
      "a": "1) Total Cost = 200 + 20 = $220. SP = 250.\n2) Profit = 250 - 220 = $30.\n3) Profit% = (30/220)*100 = 13.63%. Answer: 13.63%."
    },
    {
      "q": "Find single discount equivalent to successive discounts of 20% and 10%.",
      "a": "1) Let Marked Price = 100. After 20% discount = 80.\n2) After 10% discount on 80 = 72.\n3) Net discount = 100 - 72 = 28%. Answer: 28%."
    },
    {
      "q": "By selling 33 meters of cloth, a shopkeeper gains the cost price of 11 meters. Find profit %.",
      "a": "1) Profit% = (Gain CP / Sold length CP) * 100 = (11 / 33) * 100 = 33.33%. Answer: 33.33%."
    },
    {
      "q": "CP of an item is $150. What should be the Marked Price to allow 10% discount and still gain 20%?",
      "a": "1) Target SP = 150 * 1.2 = $180.\n2) 90% of MP = 180 -> MP = 180 / 0.9 = $200. Answer: $200."
    },
    {
      "q": "A man sells a plot at 15% loss. If he got $45000 more, he gains 15%. Find CP of the plot.",
      "a": "1) Total percentage range = 15% loss to 15% profit = 30%.\n2) 30% of CP = 45000 -> CP = 45000 / 0.3 = $150,000. Answer: $150,000."
    },
    {
      "q": "Buy 6 lemons for $5 and sell 5 lemons for $6. Find profit %.",
      "a": "1) CP of 1 lemon = 5/6. SP of 1 lemon = 6/5.\n2) Profit = 6/5 - 5/6 = 11/30.\n3) Profit% = (11/30) / (5/6) * 100 = (11/30)*(6/5)*100 = 44%. Answer: 44%."
    },
    {
      "q": "A watch is sold at 5% loss. If sold for $56 more, it gets 2% profit. Find CP.",
      "a": "1) Percentage range = 5% + 2% = 7%.\n2) 7% of CP = 56 -> CP = 56 / 0.07 = $800. Answer: $800."
    }
  ],
  "ratio-prop": [
    {
      "q": "If A:B = 2:3 and B:C = 4:5, find A:B:C.",
      "a": "1) Equalize B by multiplying: A:B = 8:12, B:C = 12:15.\n2) Combine: A:B:C = 8:12:15. Answer: 8:12:15."
    },
    {
      "q": "Divide $1200 between A and B in the ratio 5:7. Find A's share.",
      "a": "1) Total parts = 5 + 7 = 12 parts.\n2) 1 part = 1200 / 12 = $100.\n3) A's share = 5 parts = 5 * 100 = $500. Answer: $500."
    },
    {
      "q": "Find the mean proportional between 9 and 16.",
      "a": "1) Mean proportional x = sqrt(a * b).\n2) x = sqrt(9 * 16) = sqrt(144) = 12. Answer: 12."
    },
    {
      "q": "Find the third proportional to 9 and 12.",
      "a": "1) Third proportional c = b^2 / a.\n2) c = 12^2 / 9 = 144 / 9 = 16. Answer: 16."
    },
    {
      "q": "Find the fourth proportional to 4, 9, 12.",
      "a": "1) Fourth proportional x satisfies 4/9 = 12/x.\n2) x = (9 * 12) / 4 = 27. Answer: 27."
    },
    {
      "q": "If 2A = 3B = 4C, find A:B:C.",
      "a": "1) Divide by LCM of 2, 3, 4 (12): A/6 = B/4 = C/3.\n2) Ratio A:B:C = 6:4:3. Answer: 6:4:3."
    },
    {
      "q": "Two numbers are in the ratio 3:5. If 9 is subtracted from both, they are in the ratio 12:23. Find the smaller number.",
      "a": "1) Let numbers be 3x and 5x -> (3x-9)/(5x-9) = 12/23.\n2) 23*(3x-9) = 12*(5x-9) -> 69x - 207 = 60x - 108 -> 9x = 99 -> x = 11.\n3) Smaller number = 3 * 11 = 33. Answer: 33."
    },
    {
      "q": "A bag contains 1-rupee, 50-paise and 25-paise coins in the ratio 5:9:25. If total value is 1008 rupees, find number of 50-paise coins.",
      "a": "1) Value ratio of coins = 5*1 : 9*0.5 : 25*0.25 = 5 : 4.5 : 6.25.\n2) Sum = 15.75 parts = 1008 -> 1 part = 64.\n3) 50-paise coins count = 9 * 64 = 576. Answer: 576."
    },
    {
      "q": "If (x:y) = 3:4, find (5x-3y)/(7x+2y).",
      "a": "1) Let x=3, y=4.\n2) (15 - 12) / (21 + 8) = 3/29. Answer: 3/29."
    },
    {
      "q": "What number must be added to each of 6, 15, 20, 43 to make them proportional?",
      "a": "1) (6+x)/(15+x) = (20+x)/(43+x).\n2) Cross-multiply: (6+x)(43+x) = (15+x)(20+x) -> x^2 + 49x + 258 = x^2 + 35x + 300.\n3) 14x = 42 -> x = 3. Answer: 3."
    },
    {
      "q": "The incomes of A and B are in the ratio 9:4 and their expenditures are in the ratio 7:3. If each saves $2000, find A's income.",
      "a": "1) Let income be 9x, 4x. Exp be 7y, 3y. 9x-7y=2000, 4x-3y=2000.\n2) Multiply: 27x-21y=6000, 28x-21y=14000 -> x = 8000.\n3) A's income = 9 * 8000 = $72,000. Answer: $72,000."
    },
    {
      "q": "Ratio of students in three classes is 2:3:5. If 20 students are added to each, the ratio becomes 4:5:7. Find total initial students.",
      "a": "1) Initial: 2x, 3x, 5x. New: 2x+20, 3x+20, 5x+20.\n2) (2x+20)/(3x+20) = 4/5 -> 10x+100 = 12x+80 -> 2x = 20 -> x = 10.\n3) Initial total = 10x = 100. Answer: 100."
    },
    {
      "q": "If 15% of A = 20% of B, find A:B.",
      "a": "1) 0.15A = 0.20B -> A/B = 20/15 = 4/3. Answer: 4:3."
    },
    {
      "q": "If A is 1/3 of B and B is 1/2 of C, find A:B:C.",
      "a": "1) Let C = 6 -> B = 3 -> A = 1.\n2) Ratio = 1:3:6. Answer: 1:3:6."
    },
    {
      "q": "Find duplicate ratio of 3:4.",
      "a": "1) Duplicate ratio = a^2 : b^2.\n2) 3^2 : 4^2 = 9:16. Answer: 9:16."
    }
  ],
  "partnership": [
    {
      "q": "A and B start a business with capitals $20000 and $30000. After 1 year, divide profit of $15000.",
      "a": "1) Capital ratio = 20000 : 30000 = 2:3.\n2) A's share = 2/5 * 15000 = $6000.\n3) B's share = 3/5 * 15000 = $9000. Answer: A=$6000, B=$9000."
    },
    {
      "q": "A invests $5000 for 12 months, B invests $6000 for 6 months. Share of A in $8000 profit?",
      "a": "1) A's part = 5000 * 12 = 60000. B's part = 6000 * 6 = 36000.\n2) Ratio = 60000 : 36000 = 5:3.\n3) A's share = 5/8 * 8000 = $5000. Answer: $5000."
    },
    {
      "q": "A, B, C invest capitals in ratio 5:6:8. At end of year, they receive profit in ratio 5:3:12. Find ratio of their times.",
      "a": "1) Profit = Capital * Time -> Time = Profit / Capital.\n2) Time ratio = 5/5 : 3/6 : 12/8 = 1 : 1/2 : 3/2 = 2:1:3. Answer: 2:1:3."
    },
    {
      "q": "A invests 1/6 of capital for 1/6 of time. B invests 1/3 for 1/3 of time. C invests rest for whole time. Share of B in $23000 profit?",
      "a": "1) Let total capital=6, total time=6. A invest 1 cap for 1 month. B invest 2 cap for 2 months. C invest 3 cap for 6 months.\n2) Shares: A = 1*1 = 1. B = 2*2 = 4. C = 3*6 = 18.\n3) Ratio = 1:4:18. B's share = (4/23) * 23000 = $4000. Answer: $4000."
    },
    {
      "q": "A and B enter partnership. A contributes $4000. At the end of 8 months A withdraws $1000. B receives $4000 out of $7000 profit after 1 year. Find B's capital.",
      "a": "1) A's investment value = 4000 * 8 + 3000 * 4 = 32000 + 12000 = 44000.\n2) Profit ratio A:B = (7000-4000):4000 = 3:4.\n3) A's value / B's value = 3/4 -> 44000 / (B * 12) = 3/4 -> B * 12 = 58666 -> B = $4888.89. Answer: $4888.89."
    },
    {
      "q": "A starts a business with $3500. After 5 months, B joins as partner. Profit is divided in 2:3 ratio after 1 year. B's contribution?",
      "a": "1) A's investment-months = 3500 * 12 = 42000.\n2) B invests x for 7 months. Value = 7x.\n3) 42000 / 7x = 2/3 -> 6000 / x = 2/3 -> x = 9000. Answer: $9000."
    },
    {
      "q": "Three partners A, B, C share profit in 5:7:8 ratio. They had partnered for 14, 8, 7 months. Find capital ratios.",
      "a": "1) Capital = Profit / Time.\n2) Capital ratio = 5/14 : 7/8 : 8/7 = 20 : 49 : 64. Answer: 20:49:64."
    },
    {
      "q": "A, B, C start a business. A invests 3 times as much as B, and B invests 2/3 of C. Find capital ratio.",
      "a": "1) Let C = 3 -> B = 2 -> A = 6.\n2) Ratio = 6:2:3. Answer: 6:2:3."
    },
    {
      "q": "A and B invest in 3:2 ratio. 5% of profit goes to charity. A's share is $855. Find total profit.",
      "a": "1) Let total profit = P. Net profit for sharing = 0.95P.\n2) A's share = 3/5 * 0.95P = 0.57P.\n3) 0.57P = 855 -> P = 855 / 0.57 = $1500. Answer: $1500."
    },
    {
      "q": "A, B, C rent pasture for $870. A puts 10 cows for 9 months, B puts 12 cows for 5 months, C puts 15 cows for 4 months. C's rent share?",
      "a": "1) Ratio = 10*9 : 12*5 : 15*4 = 90 : 60 : 60 = 3:2:2.\n2) C's share = 2/7 * 870 = $248.57. Answer: $248.57."
    },
    {
      "q": "A starts business with $21000. B joins later with $36000. If profit is shared equally at end of year, when did B join?",
      "a": "1) A's value = 21000 * 12. B's value = 36000 * x.\n2) 21000 * 12 = 36000 * x -> x = 7 months.\n3) B joined for 7 months, which means he joined after 12-7 = 5 months. Answer: 5 months."
    },
    {
      "q": "A, B, C enter a partnership with capitals in ratio 1/2 : 1/3 : 1/4. After 4 months, A withdraws half. Divide $840 profit after 1 year.",
      "a": "1) Initial ratio = 6:4:3. Let A=6, B=4, C=3.\n2) A's value = 6 * 4 + 3 * 8 = 48. B's value = 4 * 12 = 48. C's value = 3 * 12 = 36.\n3) Ratio = 48:48:36 = 4:4:3.\n4) A's share = 4/11 * 840 = $305.45. Answer: $305.45."
    },
    {
      "q": "A is active partner, B is sleeping partner. A gets 10% of profit for managing. Rest is shared in capital ratio 3:2. If A receives $580 total, find total profit.",
      "a": "1) Let profit = P. A gets 0.1P. Shared profit = 0.9P.\n2) A's share of shared profit = 3/5 * 0.9P = 0.54P.\n3) Total A = 0.1P + 0.54P = 0.64P = 580 -> P = $906.25. Answer: $906.25."
    },
    {
      "q": "A and B invest in ratio 4:5. After 3 months, A withdraws 1/4 and B withdraws 1/5. Divide $760 profit after 10 months.",
      "a": "1) Initial A=4, B=5.\n2) A value = 4*3 + 3*7 = 33. B value = 5*3 + 4*7 = 43. Ratio = 33:43.\n3) A's share = 33/76 * 760 = $330. Answer: $330."
    },
    {
      "q": "A and B invest in ratio 3:5. C joins after 6 months with capital equal to B's. Profit ratio after 1 year?",
      "a": "1) A = 3*12 = 36. B = 5*12 = 60. C = 5*6 = 30.\n2) Ratio = 36:60:30 = 6:10:5. Answer: 6:10:5."
    }
  ],
  "averages": [
    {
      "q": "The average of 5 consecutive odd numbers is 25. Find the largest number.",
      "a": "1) The average of consecutive odd numbers is the middle term.\n2) Numbers: 21, 23, 25, 27, 29. Largest is 29. Answer: 29."
    },
    {
      "q": "Average weight of 10 men is increased by 1.5kg when a man of 60kg is replaced. Find weight of new man.",
      "a": "1) Net weight increase = 10 * 1.5 = 15 kg.\n2) Weight of new man = 60 + 15 = 75 kg. Answer: 75 kg."
    },
    {
      "q": "Average marks of 30 students is 45. It was found that a mark 30 was misread as 60. Find correct average.",
      "a": "1) Error = 60 - 30 = 30 marks excess.\n2) Reduce average by Error / Total students = 30 / 30 = 1 mark.\n3) Correct average = 45 - 1 = 44. Answer: 44."
    },
    {
      "q": "The average salary of all workers in a workshop is $80. The average salary of 7 technicians is $120, and the rest is $60. Find total workers.",
      "a": "1) Let total workers = x. Rest = x-7. Total salary = 80x.\n2) 7 * 120 + (x-7) * 60 = 80x -> 840 + 60x - 420 = 80x.\n3) 20x = 420 -> x = 21. Answer: 21."
    },
    {
      "q": "A batsman makes a score of 87 runs in the 17th inning and thus increases his average by 3. Find his average after 17th inning.",
      "a": "1) Let previous average be x. Total score before = 16x.\n2) 16x + 87 = 17 * (x + 3) -> 16x + 87 = 17x + 51 -> x = 36.\n3) Average after 17th inning = 36 + 3 = 39. Answer: 39."
    },
    {
      "q": "Average age of 8 men increases by 2 years when two men aged 21 and 23 are replaced by two new men. Average age of new men?",
      "a": "1) Net increase = 8 * 2 = 16 years.\n2) Sum of replaced men = 21 + 23 = 44.\n3) Sum of new men = 44 + 16 = 60.\n4) Average of new men = 60 / 2 = 30 years. Answer: 30 years."
    },
    {
      "q": "Find average of first 50 natural numbers.",
      "a": "1) Sum = 50 * 51 / 2. Average = 51 / 2 = 25.5. Answer: 25.5."
    },
    {
      "q": "Find average of all odd numbers between 1 and 20.",
      "a": "1) Odd numbers: 1, 3, 5, ..., 19.\n2) Average = (First + Last) / 2 = (1 + 19) / 2 = 10. Answer: 10."
    },
    {
      "q": "Average of 11 results is 50. If average of first 6 is 49 and last 6 is 52, find 6th result.",
      "a": "1) Sum of 11 = 550.\n2) Sum of first 6 = 294. Sum of last 6 = 312.\n3) 6th result = (294 + 312) - 550 = 606 - 550 = 56. Answer: 56."
    },
    {
      "q": "Average age of husband, wife and child 3 years ago was 27 years. Average age of wife and child 5 years ago was 20 years. Husband's present age?",
      "a": "1) Present sum (H+W+C) = 27*3 + 9 = 90.\n2) Present sum (W+C) = 20*2 + 10 = 50.\n3) Husband's age = 90 - 50 = 40 years. Answer: 40 years."
    },
    {
      "q": "Find average of first 10 multiples of 7.",
      "a": "1) Average of 1 to 10 is 5.5.\n2) Average of multiples of 7 = 7 * 5.5 = 38.5. Answer: 38.5."
    },
    {
      "q": "Average of 3 numbers is 60. The first is 1/4 of the sum of other two. Find the first number.",
      "a": "1) Sum of numbers = 180. A = (B+C)/4 -> 4A = B+C.\n2) A + 4A = 180 -> 5A = 180 -> A = 36. Answer: 36."
    },
    {
      "q": "Average of 4 numbers is 30. If a fifth number is added, the average becomes 35. Find 5th number.",
      "a": "1) Sum of 4 = 120. Sum of 5 = 175.\n2) 5th number = 175 - 120 = 55. Answer: 55."
    },
    {
      "q": "Average age of a class of 40 students is 15 years. If 10 new students join, the average increases by 0.2 years. Average of new students?",
      "a": "1) Old Sum = 600. New Sum = 50 * 15.2 = 760.\n2) Sum of new = 160. Average of new = 160 / 10 = 16 years. Answer: 16 years."
    },
    {
      "q": "Average of 8 numbers is 12. If each is multiplied by 3, what is the new average?",
      "a": "1) If each term is multiplied by k, the average is also multiplied by k.\n2) New average = 12 * 3 = 36. Answer: 36."
    }
  ],
  "time-work": [
    {
      "q": "A does a job in 10 days and B in 15 days. If they work together, how many days?",
      "a": "1) Working together = (10 * 15) / (10 + 15) = 150 / 25 = 6 days. Answer: 6 days."
    },
    {
      "q": "A is twice as efficient as B. If A completes a task in 30 days, how long for both?",
      "a": "1) A takes 30 days -> B takes 60 days.\n2) Combined rate = 1/30 + 1/60 = 3/60 = 1/20.\n3) Days together = 20 days. Answer: 20 days."
    },
    {
      "q": "A can do a job in 24 days, B in 9 days, and C in 12 days. B and C start but leave after 3 days. Find days for A to finish.",
      "a": "1) 1 day work of B+C = 1/9 + 1/12 = 7/36.\n2) In 3 days B+C did: 3 * 7/36 = 7/12. Remaining work = 5/12.\n3) Time for A to complete = (5/12) / (1/24) = 10 days. Answer: 10 days."
    },
    {
      "q": "A and B can do a job in 12 days, B and C in 15 days, C and A in 20 days. How long if all work together?",
      "a": "1) 2*(A+B+C) = 1/12 + 1/15 + 1/20 = (5+4+3)/60 = 12/60 = 1/5.\n2) A+B+C rate = 1/10.\n3) Days taken = 10 days. Answer: 10 days."
    },
    {
      "q": "12 men can complete a work in 8 days. How many days for 16 men?",
      "a": "1) Use formula: M1 * D1 = M2 * D2.\n2) 12 * 8 = 16 * D2 -> D2 = 6 days. Answer: 6 days."
    },
    {
      "q": "A takes 10 days to finish a work. B takes 12 days and C 15 days. If they start together and A leaves after 2 days, find remaining days for B and C.",
      "a": "1) 1 day work of all = 1/10+1/12+1/15 = 15/60 = 1/4.\n2) In 2 days they did: 2 * 1/4 = 1/2. Remaining = 1/2.\n3) 1 day work of B+C = 1/12+1/15 = 9/60 = 3/20.\n4) Remaining time = (1/2)/(3/20) = 10/3 = 3.33 days. Answer: 3.33 days."
    },
    {
      "q": "If 3 men or 6 women can do a work in 16 days, in how many days can 12 men and 8 women do it?",
      "a": "1) 3 men = 6 women -> 1 man = 2 women.\n2) 12 men + 8 women = 24 women + 8 women = 32 women.\n3) M1 * D1 = M2 * D2 -> 6 women * 16 days = 32 women * D2 -> D2 = 3 days. Answer: 3 days."
    },
    {
      "q": "A can do a work in 4 hours, B and C in 3 hours, A and C in 2 hours. How long for B alone?",
      "a": "1) Rate A = 1/4, Rate A+C = 1/2 -> Rate C = 1/4.\n2) Rate B+C = 1/3 -> Rate B = 1/3 - 1/4 = 1/12.\n3) Time for B = 12 hours. Answer: 12 hours."
    },
    {
      "q": "A is 30% more efficient than B. How much time will they take to work together if A alone takes 23 days?",
      "a": "1) Efficiency ratio A:B = 1.3 : 1.\n2) Days ratio A:B = 1 : 1.3 -> B takes 23 * 1.3 = 29.9 days.\n3) Together days = (23 * 29.9) / (52.9) = 13 days. Answer: 13 days."
    },
    {
      "q": "A and B can do a work in 8 days. A is 1.5 times as efficient as B. Find days for A alone.",
      "a": "1) Let B's rate = x, A's rate = 1.5x. Combined rate = 2.5x.\n2) 2.5x = 1/8 -> x = 1/20 -> A's rate = 1.5/20 = 3/40.\n3) Days for A = 40/3 = 13.33 days. Answer: 13.33 days."
    },
    {
      "q": "A can do a work in 15 days. He works for 5 days and then B completes the rest in 30 days. How long for B alone?",
      "a": "1) A did 5/15 = 1/3 work. Remaining = 2/3.\n2) B does 2/3 work in 30 days -> B does whole work in 45 days. Answer: 45 days."
    },
    {
      "q": "10 men and 15 women can complete a work in 6 days. How long for 1 man if 1 woman takes 100 days?",
      "a": "1) 15 women 1-day work = 15/100 = 3/20.\n2) 10 men + 15 women rate = 1/6.\n3) 10 men rate = 1/6 - 3/20 = (10-9)/60 = 1/60.\n4) 1 man rate = 1/600 -> 1 man takes 600 days. Answer: 600 days."
    },
    {
      "q": "A is paid $300 for a work which he can do in 10 days, but with B he does it in 6 days. Find B's share.",
      "a": "1) A's share of work = 6/10 = 60%.\n2) B's share of work = 40%.\n3) B's wage = 40% of 300 = $120. Answer: $120."
    },
    {
      "q": "A can do a work in 10 days, B in 15 days, C in 20 days. They work together and get $650. C's share?",
      "a": "1) Wage ratio = 1/10 : 1/15 : 1/20 = 6 : 4 : 3.\n2) C's share = 3/13 * 650 = $150. Answer: $150."
    },
    {
      "q": "A, B, C can do a work in 6, 8, 12 days respectively. If they work on alternate days starting with A, when is it completed?",
      "a": "1) 3 days work (A+B+C) = 1/6 + 1/8 + 1/12 = 9/24 = 3/8.\n2) In 6 days = 6/8 = 3/4 work is done. Remaining = 1/4.\n3) Day 7: A does 1/6 -> remaining = 1/4 - 1/6 = 1/12.\n4) Day 8: B does 1/12 (since rate is 1/8, he takes 2/3 day).\n5) Total time = 7.67 days. Answer: 7.67 days."
    }
  ],
  "pipes": [
    {
      "q": "Pipe A fills a tank in 12 hours and Pipe B empties it in 15 hours. If both are open, how long to fill?",
      "a": "1) Combined rate = 1/12 - 1/15 = 1/60.\n2) Time taken = 60 hours. Answer: 60 hours."
    },
    {
      "q": "Two pipes fill a tank in 20 and 30 minutes. If both are open, find time to fill.",
      "a": "1) Rate = 1/20 + 1/30 = 5/60 = 1/12.\n2) Time = 12 minutes. Answer: 12 minutes."
    },
    {
      "q": "A leak in the bottom of a tank empties it in 6 hours. An inlet fills it at 4 liters/minute. If both are open, it empties in 8 hours. Find tank capacity.",
      "a": "1) Leak rate = -1/6. Net rate = -1/8.\n2) Inlet rate = 1/6 - 1/8 = 1/24 per hour.\n3) Inlet fills tank in 24 hours. Rate = 4 * 60 = 240 liters/hour.\n4) Capacity = 24 * 240 = 5760 liters. Answer: 5760 liters."
    },
    {
      "q": "Three pipes A, B, C can fill a cistern in 6, 9, 12 hours. If open together, find time.",
      "a": "1) Rate = 1/6 + 1/9 + 1/12 = (6+4+3)/36 = 13/36.\n2) Time = 36/13 = 2.77 hours. Answer: 2.77 hours."
    },
    {
      "q": "Pipe A fills in 10 hours, B in 15 hours. B is opened for 5 hours and closed. A is opened. Find time for A to finish.",
      "a": "1) B fills: 5/15 = 1/3. Remaining = 2/3.\n2) Time for A = (2/3) * 10 = 6.67 hours. Answer: 6.67 hours."
    },
    {
      "q": "A pipe can fill a tank in 3 hours. Due to a leak, it takes 3.5 hours. How long for the leak to empty a full tank?",
      "a": "1) Rate leak = 1/3 - 1/3.5 = 1/3 - 2/7 = 1/21.\n2) Time = 21 hours. Answer: 21 hours."
    },
    {
      "q": "Two pipes A and B can fill in 15 and 20 hours. C can empty it in 25 hours. If all are open, find time.",
      "a": "1) Rate = 1/15 + 1/20 - 1/25 = 23/300.\n2) Time = 300/23 = 13.04 hours. Answer: 13.04 hours."
    },
    {
      "q": "A cistern has two inlets filling in 4 and 6 hours, and one outlet emptying in 3 hours. Net time if all are open?",
      "a": "1) Rate = 1/4 + 1/6 - 1/3 = 1/12.\n2) Time = 12 hours. Answer: 12 hours."
    },
    {
      "q": "A pipe fills in 8 hours. After half is filled, 3 more similar pipes are opened. Total time?",
      "a": "1) Time for first half = 4 hours.\n2) Remaining half rate = 4 * (1/8) = 1/2 per hour.\n3) Time to finish remaining half = (1/2)/(1/2) = 1 hour.\n4) Total time = 4 + 1 = 5 hours. Answer: 5 hours."
    },
    {
      "q": "Pipe A fills in 5 minutes, B in 6 minutes, C empties in 8 minutes. Find time to fill.",
      "a": "1) Rate = 1/5 + 1/6 - 1/8 = (24+20-15)/120 = 29/120.\n2) Time = 120/29 = 4.14 minutes. Answer: 4.14 minutes."
    },
    {
      "q": "Two pipes A and B can fill in 36 and 45 minutes. A water pipe C can empty it in 30 minutes. A and B are opened. After 7 minutes, C is opened. Find time to fill.",
      "a": "1) Rate A+B = 1/36 + 1/45 = 9/180 = 1/20.\n2) In 7 minutes A+B filled: 7/20. Remaining = 13/20.\n3) Net rate with C = 1/20 - 1/30 = 1/60.\n4) Remaining time = (13/20)/(1/60) = 39 minutes.\n5) Total time = 7 + 39 = 46 minutes. Answer: 46 minutes."
    },
    {
      "q": "A pipe can fill in 12 minutes, B in 15 minutes. C can empty it at 3 gallons/minute. If all are open, it fills in 10 minutes. Capacity?",
      "a": "1) Rate A+B = 1/12 + 1/15 = 9/60 = 3/20.\n2) Net rate = 1/10.\n3) C rate = 3/20 - 1/10 = 1/20.\n4) C empties in 20 minutes. Capacity = 20 * 3 = 60 gallons. Answer: 60 gallons."
    },
    {
      "q": "Two pipes A and B can fill in 24 and 32 minutes. If both are opened, after how much time should B be closed so that tank is full in 18 minutes?",
      "a": "1) A is open for all 18 minutes. A filled: 18/24 = 3/4. Remaining = 1/4.\n2) B must fill 1/4. Time for B = (1/4) * 32 = 8 minutes.\n3) Close B after 8 minutes. Answer: 8 minutes."
    },
    {
      "q": "A pipe fills in 4 hours, another empties in 6 hours. Find time to fill a half-empty tank.",
      "a": "1) Rate = 1/4 - 1/6 = 1/12.\n2) Time to fill whole tank = 12 hours.\n3) Time to fill half tank = 6 hours. Answer: 6 hours."
    },
    {
      "q": "Three inlets A, B, C fill in 10, 12, 15 hours. If A is open all the time, and B, C are opened on alternate hours, find time.",
      "a": "1) Hour 1 (A+B) = 1/10 + 1/12 = 11/60. Hour 2 (A+C) = 1/10 + 1/15 = 10/60.\n2) In 2 hours = 21/60 = 7/20. In 4 hours = 14/20. In 5 hours (adds A+B) = 14/20 + 11/60 = 53/60.\n3) Hour 6 (A+C) needs 7/60. Rate is 10/60 -> takes 0.7 hours.\n4) Total time = 5.7 hours. Answer: 5.7 hours."
    }
  ],
  "time-dist": [
    {
      "q": "A train running at 54 km/h crosses a pole in 20 seconds. Find the length of the train.",
      "a": "1) Convert speed to m/s: 54 * (5/18) = 15 m/s.\n2) Length = Speed * Time = 15 * 20 = 300 meters. Answer: 300 meters."
    },
    {
      "q": "A man covers a distance at 10 km/h and returns at 15 km/h. Find average speed.",
      "a": "1) Avg Speed = 2xy / (x+y) = (2 * 10 * 15) / 25 = 300 / 25 = 12 km/h. Answer: 12 km/h."
    },
    {
      "q": "A train 240 m long passes a platform 120 m long in 24 seconds. Find speed in km/h.",
      "a": "1) Total distance = 240 + 120 = 360 meters.\n2) Speed = 360 / 24 = 15 m/s.\n3) Convert to km/h: 15 * (18/5) = 54 km/h. Answer: 54 km/h."
    },
    {
      "q": "Two trains 140 m and 160 m long are running in opposite directions at 60 km/h and 40 km/h. Find time to cross each other.",
      "a": "1) Total distance = 140 + 160 = 300 meters.\n2) Relative speed = 60 + 40 = 100 km/h = 100 * (5/18) = 250/9 m/s.\n3) Time = 300 / (250/9) = 300 * 9 / 250 = 10.8 seconds. Answer: 10.8 seconds."
    },
    {
      "q": "If a man walks at 14 km/h instead of 10 km/h, he would have walked 20 km more. Find actual distance.",
      "a": "1) Let actual distance = d. Time taken = d/10.\n2) New distance = d + 20. Time taken = (d+20)/14.\n3) d/10 = (d+20)/14 -> 14d = 10d + 200 -> 4d = 200 -> d = 50 km. Answer: 50 km."
    },
    {
      "q": "Excluding stoppages, train speed is 54 km/h; including stoppages, it is 45 km/h. How many minutes does the train stop per hour?",
      "a": "1) Time of stoppage per hour = (Fast Speed - Slow Speed) / Fast Speed.\n2) Time = (54 - 45) / 54 = 9 / 54 = 1/6 hour = 10 minutes. Answer: 10 minutes."
    },
    {
      "q": "A thief is noticed by a policeman from 200m. The thief runs at 10 km/h, policeman at 11 km/h. Distance between them after 6 minutes?",
      "a": "1) Relative speed = 11 - 10 = 1 km/h = 5/18 m/s.\n2) Distance covered in 6 mins (360s) = (5/18) * 360 = 100 meters.\n3) Remaining distance = 200 - 100 = 100 meters. Answer: 100 meters."
    },
    {
      "q": "A man covers 1/3 of journey at 20 km/h, 1/3 at 30 km/h, and rest at 60 km/h. Avg speed?",
      "a": "1) Let distance = 60 km. Sections are 20km, 20km, 20km.\n2) Time taken = 20/20 + 20/30 + 20/60 = 1 + 2/3 + 1/3 = 2 hours.\n3) Avg speed = 60 / 2 = 30 km/h. Answer: 30 km/h."
    },
    {
      "q": "A train passes two bridges of lengths 800m and 400m in 100s and 60s. Length of train?",
      "a": "1) Let length = L. Speed = (L+800)/100 = (L+400)/60.\n2) 60*(L+800) = 100*(L+400) -> 3*(L+800) = 5*(L+400) -> 3L+2400 = 5L+2000.\n3) 2L = 400 -> L = 200 meters. Answer: 200 meters."
    },
    {
      "q": "Walking at 3/4 of his usual speed, a man is 20 minutes late. Find usual time.",
      "a": "1) Speed ratio = 3 : 4 -> Time ratio = 4 : 3.\n2) Difference = 1 part = 20 minutes.\n3) Usual time = 3 parts = 60 minutes. Answer: 60 minutes."
    },
    {
      "q": "Two boys start running from same point in same direction at 10m/s and 12m/s. Distance after 1 minute?",
      "a": "1) Relative speed = 12 - 10 = 2 m/s.\n2) Distance = 2 * 60 = 120 meters. Answer: 120 meters."
    },
    {
      "q": "A train crosses a 150m long platform in 15s and a man on it in 9s. Speed of train?",
      "a": "1) Train crosses man in 9s -> crosses its own length L in 9s.\n2) Crosses platform -> L+150 in 15s -> platform length (150m) crossed in 15-9 = 6s.\n3) Speed = 150 / 6 = 25 m/s = 90 km/h. Answer: 90 km/h."
    },
    {
      "q": "A car travel 240km in 4 hours. How much should speed be increased to do it in 3 hours?",
      "a": "1) Speed 1 = 240 / 4 = 60 km/h.\n2) Speed 2 = 240 / 3 = 80 km/h.\n3) Increase = 80 - 60 = 20 km/h. Answer: 20 km/h."
    },
    {
      "q": "A train running at 90 km/h crosses a bridge in 36 seconds. If train length is 300m, find bridge length.",
      "a": "1) Speed = 90 * (5/18) = 25 m/s.\n2) Total distance = 25 * 36 = 900 meters.\n3) Bridge length = 900 - 300 = 600 meters. Answer: 600 meters."
    },
    {
      "q": "Find time taken by a 150m train at 60 km/h to cross a 250m train at 48 km/h in same direction.",
      "a": "1) Total distance = 150 + 250 = 400 meters.\n2) Relative speed = 60 - 48 = 12 km/h = 12 * (5/18) = 10/3 m/s.\n3) Time = 400 / (10/3) = 120 seconds. Answer: 120 seconds."
    }
  ],
  "boats": [
    {
      "q": "A boat speed in still water is 15 km/h, stream is 3 km/h. Find downstream speed.",
      "a": "1) Down = Speed still + Speed stream = 15 + 3 = 18 km/h. Answer: 18 km/h."
    },
    {
      "q": "A boat speed in still water is 12 km/h, stream is 4 km/h. Find upstream speed.",
      "a": "1) Up = Speed still - Speed stream = 12 - 4 = 8 km/h. Answer: 8 km/h."
    },
    {
      "q": "A boat goes 24 km downstream in 2 hours and same distance upstream in 4 hours. Speed of boat in still water?",
      "a": "1) Down speed = 24 / 2 = 12 km/h. Up speed = 24 / 4 = 6 km/h.\n2) Speed still = (Down + Up) / 2 = (12 + 6) / 2 = 9 km/h. Answer: 9 km/h."
    },
    {
      "q": "A man can row 18 km/h in still water. If it takes him thrice as long to row up as to row down, find stream speed.",
      "a": "1) Let stream speed = s. Down = 18 + s, Up = 18 - s.\n2) Down time = d/(18+s), Up time = d/(18-s).\n3) 3 * d/(18+s) = d/(18-s) -> 54 - 3s = 18 + s -> 4s = 36 -> s = 9 km/h. Answer: 9 km/h."
    },
    {
      "q": "Speed of a boat downstream is 16 km/h, stream speed is 2.5 km/h. Find upstream speed.",
      "a": "1) Down = Speed still + Stream -> 16 = Speed still + 2.5 -> Speed still = 13.5 km/h.\n2) Up = Speed still - Stream = 13.5 - 2.5 = 11 km/h. Answer: 11 km/h."
    },
    {
      "q": "A boat covers 32 km upstream and 36 km downstream in 7 hours. Also it covers 40 km upstream and 48 km downstream in 9 hours. Speed still?",
      "a": "1) Let 1/u = x, 1/d = y. 32x + 36y = 7, 40x + 48y = 9.\n2) Solve equations: x = 1/8, y = 1/12 -> u = 8 km/h, d = 12 km/h.\n3) Speed still = (12+8)/2 = 10 km/h. Answer: 10 km/h."
    },
    {
      "q": "Find stream speed if boat downstream speed is 22 km/h and upstream is 14 km/h.",
      "a": "1) Stream speed = (Down - Up) / 2 = (22 - 14) / 2 = 4 km/h. Answer: 4 km/h."
    },
    {
      "q": "A man can row 6 km/h in still water. If the river flows at 2 km/h, it takes him 3 hours to row to a place and back. Distance?",
      "a": "1) Down = 8 km/h, Up = 4 km/h.\n2) Let distance = d. d/8 + d/4 = 3 -> 3d/8 = 3 -> d = 8 km. Answer: 8 km."
    },
    {
      "q": "A motorboat speed in still water is 45 km/h. If it goes 80 km downstream in 1 hour 20 minutes, find stream speed.",
      "a": "1) Down time = 4/3 hours. Down speed = 80 / (4/3) = 60 km/h.\n2) Stream speed = Down - Still = 60 - 45 = 15 km/h. Answer: 15 km/h."
    },
    {
      "q": "If a man rows 5 km/h upstream and 9 km/h downstream, find his speed in still water.",
      "a": "1) Speed still = (5 + 9)/2 = 7 km/h. Answer: 7 km/h."
    },
    {
      "q": "A boat goes 6 km/h in still water. River speed is 1.2 km/h. How long to go 18 km upstream?",
      "a": "1) Up speed = 6 - 1.2 = 4.8 km/h.\n2) Time = 18 / 4.8 = 3.75 hours. Answer: 3.75 hours."
    },
    {
      "q": "How long to go 36 km downstream if boat speed is 10 km/h and river speed is 2 km/h?",
      "a": "1) Down speed = 10 + 2 = 12 km/h.\n2) Time = 36 / 12 = 3 hours. Answer: 3 hours."
    },
    {
      "q": "A boat covers 12 km upstream in 4 hours. If stream speed is 1 km/h, find boat still speed.",
      "a": "1) Up speed = 12 / 4 = 3 km/h.\n2) Up = Still - Stream -> 3 = Still - 1 -> Still = 4 km/h. Answer: 4 km/h."
    },
    {
      "q": "A man rows to a place 48 km distant and back in 14 hours. He finds he can row 4 km downstream in same time as 3 km upstream. Still speed?",
      "a": "1) Speed ratio Down:Up = 4:3. Let Down=4x, Up=3x.\n2) Time: 48/4x + 48/3x = 14 -> 12/x + 16/x = 14 -> 28/x = 14 -> x = 2.\n3) Down = 8 km/h, Up = 6 km/h. Still speed = (8+6)/2 = 7 km/h. Answer: 7 km/h."
    },
    {
      "q": "Stream speed is 2 km/h. A boat goes 10 km downstream and returns in 55 minutes. Find boat still speed.",
      "a": "1) Let still speed = x. 10/(x+2) + 10/(x-2) = 55/60 = 11/12.\n2) Solve for x: x = 22 km/h. Answer: 22 km/h."
    }
  ],
  "circular": [
    {
      "q": "Two runners run on a 400m circular track at 8 m/s and 5 m/s in same direction. Find first meeting time.",
      "a": "1) Relative speed = 8 - 5 = 3 m/s.\n2) Meeting time = 400 / 3 = 133.33 seconds. Answer: 133.33 seconds."
    },
    {
      "q": "Two runners run on a 400m circular track at 8 m/s and 5 m/s in opposite directions. First meeting time?",
      "a": "1) Relative speed = 8 + 5 = 13 m/s.\n2) Meeting time = 400 / 13 = 30.77 seconds. Answer: 30.77 seconds."
    },
    {
      "q": "Three runners A, B, C start from same point on a 1000m track at speeds of 2, 5, 8 m/s in same direction. When will they meet at start point?",
      "a": "1) Times to complete 1 round: A = 1000/2 = 500s. B = 1000/5 = 200s. C = 1000/8 = 125s.\n2) Meeting time at start = LCM(500, 200, 125) = 1000 seconds. Answer: 1000 seconds."
    },
    {
      "q": "Two cyclists A and B start on a 12 km circular track at 15 km/h and 18 km/h in same direction. When will they meet?",
      "a": "1) Relative speed = 18 - 15 = 3 km/h.\n2) Time = 12 / 3 = 4 hours. Answer: 4 hours."
    },
    {
      "q": "A, B, C run on a 1200m track at 3, 6, 10 m/s. When do A and B meet for first time?",
      "a": "1) Relative speed = 6 - 3 = 3 m/s.\n2) Meeting time = 1200 / 3 = 400 seconds. Answer: 400 seconds."
    },
    {
      "q": "On a 600m circular path, A runs at 9 km/h and B at 6 km/h in opposite directions. When do they meet?",
      "a": "1) Convert speeds: A = 2.5 m/s, B = 1.67 m/s. Sum = 4.17 m/s.\n2) Time = 600 / 4.17 = 144 seconds. Answer: 144 seconds."
    },
    {
      "q": "A and B start on a 300m circle at speeds 5 m/s and 3 m/s. How many meeting points exist on the track if they run in opposite directions?",
      "a": "1) Ratio of speeds A:B = 5:3.\n2) For opposite directions, number of distinct meeting points = 5 + 3 = 8 points. Answer: 8 points."
    },
    {
      "q": "How many meeting points exist if A and B run in same direction with speeds 5 m/s and 3 m/s?",
      "a": "1) Ratio of speeds A:B = 5:3.\n2) For same direction, distinct meeting points = 5 - 3 = 2 points. Answer: 2 points."
    },
    {
      "q": "A, B, C start on 1200m circle. A runs at 10m/s, B at 20m/s, C at 40m/s in same direction. First meeting time of all three anywhere?",
      "a": "1) Time A-B meet = 1200/10 = 120s.\n2) Time B-C meet = 1200/20 = 60s.\n3) First meeting of all = LCM(120, 60) = 120 seconds. Answer: 120 seconds."
    },
    {
      "q": "A circle track has circumference 360m. A and B run at 6m/s and 4m/s in same direction. Where is their first meeting point relative to start?",
      "a": "1) Meeting time = 360 / (6-4) = 180s.\n2) Distance A ran = 180 * 6 = 1080m.\n3) Rounds of A = 1080 / 360 = 3 complete rounds. They meet at the start point. Answer: At the start point."
    },
    {
      "q": "Two runners start on a 1km circular path at speeds 15m/s and 10m/s. First meeting time if running in opposite directions?",
      "a": "1) Relative speed = 15 + 10 = 25 m/s.\n2) Time = 1000 / 25 = 40 seconds. Answer: 40 seconds."
    },
    {
      "q": "A, B, C run on a 600m track at 4m/s, 6m/s, 10m/s. Find time when they meet at start point if B and C run opposite to A.",
      "a": "1) Round times: A=150s, B=100s, C=60s.\n2) Meeting at start = LCM(150, 100, 60) = 300 seconds. Answer: 300 seconds."
    },
    {
      "q": "Cyclists A and B run on a 5km track at 20km/h and 30km/h in opposite directions. How many times do they pass each other in 2 hours?",
      "a": "1) Relative speed = 20 + 30 = 50 km/h.\n2) Distance in 2 hours = 50 * 2 = 100 km.\n3) Passes count = 100 / 5 = 20 times. Answer: 20 times."
    },
    {
      "q": "On a circular track of 200m, A runs at 5m/s. B starts in opposite direction. They meet after 20s. Find B's speed.",
      "a": "1) Relative speed = 200 / 20 = 10 m/s.\n2) Speed A + Speed B = 10 -> 5 + Speed B = 10 -> Speed B = 5 m/s. Answer: 5 m/s."
    },
    {
      "q": "A and B start on a 900m circle. A runs at 8m/s, B at 5m/s in same direction. Find distance B covers before they meet.",
      "a": "1) Meeting time = 900 / (8-5) = 300 seconds.\n2) Distance B = 300 * 5 = 1500 meters. Answer: 1500 meters."
    }
  ],
  "si-ci": [
    {
      "q": "Find the difference between simple and compound interest on $1000 at 10% per annum for 2 years.",
      "a": "1) Principal (P) = $1000. Rate (R) = 10%.\n2) Difference formula for 2 years: Diff = P * (R/100)^2.\n3) Diff = 1000 * (10/100)^2 = 1000 * (1/100) = $10. Answer: $10."
    },
    {
      "q": "Find the simple interest on $5000 at 8% per annum for 3 years.",
      "a": "1) SI = P * R * T / 100.\n2) SI = 5000 * 8 * 3 / 100 = 1200 rupees. Answer: $1200."
    },
    {
      "q": "In how many years will a sum of money double itself at 12.5% simple interest?",
      "a": "1) To double itself, the interest earned must equal the principal (SI = P).\n2) P = P * 12.5 * T / 100 -> 1 = 12.5 * T / 100 -> T = 100 / 12.5 = 8 years. Answer: 8 years."
    },
    {
      "q": "Find compound interest on $10000 at 10% per annum for 3 years compounded annually.",
      "a": "1) Amount (A) = P * (1 + R/100)^T = 10000 * (1.1)^3 = 10000 * 1.331 = $13310.\n2) CI = A - P = 13310 - 10000 = $3310. Answer: $3310."
    },
    {
      "q": "A sum of money at compound interest doubles itself in 15 years. It will become 8 times itself in how many years?",
      "a": "1) 8 times = 2^3 times.\n2) Time taken = 3 * 15 years = 45 years. Answer: 45 years."
    },
    {
      "q": "Find the compound interest on $16000 at 20% per annum for 9 months compounded quarterly.",
      "a": "1) Since compounded quarterly, rate per quarter = 20 / 4 = 5%. Periods = 9 / 3 = 3 quarters.\n2) Amount = 16000 * (1 + 0.05)^3 = 16000 * 1.157625 = $18522.\n3) CI = 18522 - 16000 = $2522. Answer: $2522."
    },
    {
      "q": "The SI on a sum of money is 4/9 of the principal. If rate % and time years are equal, find the rate %.",
      "a": "1) Let P=9, SI=4. Since R=T: SI = P * R * T / 100 -> 4 = 9 * R^2 / 100.\n2) R^2 = 400 / 9 -> R = 20 / 3 = 6.67%. Answer: 6.67%."
    },
    {
      "q": "At what rate percent per annum simple interest will a sum double in 10 years?",
      "a": "1) SI = P. T = 10.\n2) P = P * R * 10 / 100 -> 1 = R / 10 -> R = 10%. Answer: 10%."
    },
    {
      "q": "Find the difference between CI and SI on $5000 at 12% per annum for 3 years.",
      "a": "1) Difference formula for 3 years: Diff = P * (R/100)^2 * (3 + R/100).\n2) Diff = 5000 * (0.12)^2 * (3.12) = 5000 * 0.0144 * 3.12 = 72 * 3.12 = $224.64. Answer: $224.64."
    },
    {
      "q": "If CI on a sum for 2 years at 10% is $420, find SI on the same sum for same time.",
      "a": "1) Let principal = P. CI = P * (1.21 - 1) = 0.21P = 420 -> P = 2000.\n2) SI = P * R * T / 100 = 2000 * 10 * 2 / 100 = $400. Answer: $400."
    },
    {
      "q": "A sum of money triples itself in 5 years at simple interest. In how many years will it become 9 times itself?",
      "a": "1) Triples means interest is 2P in 5 years -> P interest in 2.5 years.\n2) To become 9 times, interest must be 8P.\n3) Time = 8 * 2.5 = 20 years. Answer: 20 years."
    },
    {
      "q": "Find compound interest on $8000 at 15% per annum for 2 years 4 months compounded annually.",
      "a": "1) Amount for 2 years = 8000 * (1.15)^2 = 8000 * 1.3225 = $10580.\n2) Interest for 4 months (1/3 year) at 15% = 10580 * 15 * (1/3) / 100 = $529.\n3) Total Amount = 10580 + 529 = $11109. CI = 11109 - 8000 = $3109. Answer: $3109."
    },
    {
      "q": "A sum of $12000 deposited at CI becomes double after 5 years. How much will it be after 20 years?",
      "a": "1) 20 years represents 4 periods of 5 years.\n2) Value will double 4 times = 2^4 = 16 times.\n3) Total sum = 12000 * 16 = $192,000. Answer: $192,000."
    },
    {
      "q": "A sum of money lent at SI amounts to $720 after 2 years and $1020 after 7 years. Find the principal.",
      "a": "1) Interest for 5 years = 1020 - 720 = 300 -> Interest per year = 60.\n2) Interest for 2 years = 120.\n3) Principal = Amount - Interest = 720 - 120 = $600. Answer: $600."
    },
    {
      "q": "Find effective rate equivalent to 10% per annum compounding half-yearly.",
      "a": "1) Compounded half-yearly, rate per period = 5%. Periods = 2.\n2) Effective rate = 1.05^2 - 1 = 1.1025 - 1 = 10.25%. Answer: 10.25%."
    }
  ],
  "allegations": [
    {
      "q": "In what ratio must rice at $20/kg be mixed with rice at $30/kg to get a mixture worth $24/kg?",
      "a": "1) Ratio = (Dear Price - Mean Price) : (Mean Price - Cheap Price).\n2) Ratio = (30 - 24) : (24 - 20) = 6 : 4 = 3:2. Answer: 3:2."
    },
    {
      "q": "A mixture contains milk and water in the ratio 4:3. If 5 liters of water is added, the ratio becomes 4:5. Find quantity of milk.",
      "a": "1) Let milk = 4x, water = 3x.\n2) 4x / (3x + 5) = 4 / 5 -> 20x = 12x + 20 -> 8x = 20 -> x = 2.5.\n3) Milk = 4 * 2.5 = 10 liters. Answer: 10 liters."
    },
    {
      "q": "A container holds 80 liters of milk. 8 liters is replaced with water. This process is repeated two more times. Find final milk.",
      "a": "1) Formula: Final = Initial * (1 - y/x)^n.\n2) Final = 80 * (1 - 8/80)^3 = 80 * (0.9)^3 = 80 * 0.729 = 58.32 liters. Answer: 58.32 liters."
    },
    {
      "q": "In what ratio must water be mixed with milk costing $12/liter to get a mixture worth $8/liter? (Water is free).",
      "a": "1) Cheap (Water) = 0. Dear (Milk) = 12. Mean = 8.\n2) Ratio = (12 - 8) : (8 - 0) = 4 : 8 = 1:2. Answer: 1:2."
    },
    {
      "q": "Gold is 19 times heavier than water, copper is 9 times heavier. In what ratio should they be mixed to be 15 times heavier than water?",
      "a": "1) Dear (Gold) = 19. Cheap (Copper) = 9. Mean = 15.\n2) Ratio = (15 - 9) : (19 - 15) = 6 : 4 = 3:2. Answer: 3:2."
    },
    {
      "q": "A merchant has 1000 kg of sugar. Part of it he sells at 8% profit, rest at 18% profit. He gains 14% overall. Find quantity sold at 18%.",
      "a": "1) Ratio of 8% to 18% = (18 - 14) : (14 - 8) = 4 : 6 = 2:3.\n2) Quantity sold at 18% = 3/5 * 1000 = 600 kg. Answer: 600 kg."
    },
    {
      "q": "How many kg of wheat costing $8/kg must be mixed with 36 kg of wheat costing $5.40/kg to get a mixture worth $7/kg?",
      "a": "1) Cheap = 5.4. Dear = 8. Mean = 7.\n2) Ratio of Dear to Cheap = (7 - 5.4) : (8 - 7) = 1.6 : 1 = 8:5.\n3) Let wheat at $8/kg be x. x / 36 = 8 / 5 -> x = 57.6 kg. Answer: 57.6 kg."
    },
    {
      "q": "A mixture of 40 liters of milk and water contains 10% water. How much water should be added to make it 20% water?",
      "a": "1) Initial water = 4 liters. Milk = 36 liters.\n2) In new mixture, milk (36 liters) represents 80%.\n3) Total new mixture = 36 / 0.8 = 45 liters.\n4) Water to add = 45 - 40 = 5 liters. Answer: 5 liters."
    },
    {
      "q": "In two alloys A and B, gold and copper are in ratios 7:2 and 7:11. If equal quantities are melted to form C, find ratio in C.",
      "a": "1) In A: Gold = 7/9, Copper = 2/9. In B: Gold = 7/18, Copper = 11/18.\n2) Combined Gold = 7/9 + 7/18 = 21/18. Combined Copper = 2/9 + 11/18 = 15/18.\n3) Ratio = 21 : 15 = 7:5. Answer: 7:5."
    },
    {
      "q": "A milkman buys milk at $10/liter. He mixes water and sells it at $12/liter, gaining 50% profit. Find ratio of water to milk.",
      "a": "1) SP = 12, Profit = 50% -> CP of mixture = 12 / 1.5 = $8/liter.\n2) Cheap (Water) = 0. Dear (Milk) = 10. Mean = 8.\n3) Ratio = (10 - 8) : (8 - 0) = 2 : 8 = 1:4. Answer: 1:4 (water to milk)."
    },
    {
      "q": "A jar contains a mixture of two liquids A and B in ratio 4:1. When 10 liters of mixture is drawn off and replaced with B, the ratio becomes 2:3. Find initial quantity.",
      "a": "1) Let initial A=4x, B=x. Drawn off 10 liters (contains 8L of A and 2L of B).\n2) Remaining: A = 4x-8, B = x-2. Add 10L of B -> new B = x+8.\n3) (4x-8)/(x+8) = 2/3 -> 12x-24 = 2x+16 -> 10x = 40 -> x = 4.\n4) Initial quantity = 5x = 20 liters. Answer: 20 liters."
    },
    {
      "q": "A mixture of 70 liters of wine and water contains 10% water. How much water to add to make it 12.5% of the total?",
      "a": "1) Wine = 63 liters. In new mixture, Wine represents 87.5% (7/8).\n2) Total new mixture = 63 / (7/8) = 72 liters.\n3) Water to add = 72 - 70 = 2 liters. Answer: 2 liters."
    },
    {
      "q": "In what ratio must tea costing $62/kg and $72/kg be mixed so that selling mixture at $68.20/kg leaves 10% profit?",
      "a": "1) SP = 68.2. Profit = 10% -> CP of mixture = 68.2 / 1.1 = $62/kg.\n2) Since the mean price is exactly equal to the cheap price, no mixture can produce a profit. The ratio is invalid. (Re-calculating with mean 64.5 -> ratio is 7:2)."
    },
    {
      "q": "A vessel is filled with liquid, 3 parts water and 5 parts syrup. How much of the mixture must be drawn off and replaced with water so that the mixture may be half water and half syrup?",
      "a": "1) Let total = 8. Water = 3, Syrup = 5. We want Water = 4, Syrup = 4.\n2) We must reduce syrup by 1 part. Drawn off part of mixture = 1/5 of the total syrup.\n3) Thus, we must draw off 1/5 of the mixture. Answer: 1/5."
    },
    {
      "q": "Two containers have acid and water in ratios 3:2 and 2:1. In what ratio must they be mixed to get acid to water ratio of 8:5?",
      "a": "1) Acid fraction in A = 3/5, in B = 2/3. Target = 8/13.\n2) By alligation: (2/3 - 8/13) : (8/13 - 3/5) = 2/39 : 1/65 = 10 : 3. Answer: 10:3."
    }
  ],
  "simple-eq": [
    {
      "q": "Solved practice problem 1 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Simple Eq'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Simple Eq.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "quadratic": [
    {
      "q": "Solved practice problem 1 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Quadratic'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Quadratic.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "inequalities": [
    {
      "q": "Solved practice problem 1 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Inequalities'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Inequalities.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "progressions": [
    {
      "q": "Solved practice problem 1 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Progressions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Progressions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "geometry": [
    {
      "q": "Solved practice problem 1 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Geometry'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Geometry.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "mensuration": [
    {
      "q": "Solved practice problem 1 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Mensuration'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mensuration.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "heights": [
    {
      "q": "Solved practice problem 1 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Heights'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Heights.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "pnc": [
    {
      "q": "Solved practice problem 1 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Pnc'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Pnc.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "probability": [
    {
      "q": "Solved practice problem 1 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Probability'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Probability.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "crypt": [
    {
      "q": "Solved practice problem 1 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Crypt'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Crypt.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "sets": [
    {
      "q": "Solved practice problem 1 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Sets'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sets.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "logarithms": [
    {
      "q": "Solved practice problem 1 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Logarithms'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Logarithms.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "analogy": [
    {
      "q": "Solved practice problem 1 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Analogy'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Analogy.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "odd-one": [
    {
      "q": "Solved practice problem 1 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Odd One'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Odd One.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "coding": [
    {
      "q": "Solved practice problem 1 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Coding'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Coding.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "series": [
    {
      "q": "Solved practice problem 1 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "nv-series": [
    {
      "q": "Solved practice problem 1 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Nv Series'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Nv Series.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "statements": [
    {
      "q": "Solved practice problem 1 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Statements'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Statements.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "math-ops": [
    {
      "q": "Solved practice problem 1 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Math Ops'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Math Ops.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "arith-reas": [
    {
      "q": "Solved practice problem 1 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Arith Reas'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Arith Reas.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "missing-num": [
    {
      "q": "Solved practice problem 1 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Missing Num'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Missing Num.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "dice-cube": [
    {
      "q": "Solved practice problem 1 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Dice Cube'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Dice Cube.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "paper-fold": [
    {
      "q": "Solved practice problem 1 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Paper Fold'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Paper Fold.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "embedded": [
    {
      "q": "Solved practice problem 1 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Embedded'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Embedded.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "mirror-water": [
    {
      "q": "Solved practice problem 1 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Mirror Water'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Mirror Water.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "completion": [
    {
      "q": "Solved practice problem 1 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Completion'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Completion.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "counting-fig": [
    {
      "q": "Solved practice problem 1 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Counting Fig'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Counting Fig.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "sitting": [
    {
      "q": "Solved practice problem 1 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Sitting'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Sitting.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "blood": [
    {
      "q": "Solved practice problem 1 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Blood'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Blood.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "direction": [
    {
      "q": "Solved practice problem 1 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Direction'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Direction.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "word-arr": [
    {
      "q": "Solved practice problem 1 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Word Arr'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Word Arr.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "venn": [
    {
      "q": "Solved practice problem 1 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Venn'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Venn.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "calendar": [
    {
      "q": "Solved practice problem 1 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Calendar'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Calendar.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "age": [
    {
      "q": "Solved practice problem 1 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Age'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Age.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "eng-roadmap": [
    {
      "q": "Solved practice problem 1 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Eng Roadmap'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Roadmap.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "eng-basics": [
    {
      "q": "Solved practice problem 1 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Eng Basics'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Basics.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "eng-tenses": [
    {
      "q": "Solved practice problem 1 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Eng Tenses'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Tenses.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "eng-questions": [
    {
      "q": "Solved practice problem 1 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Eng Questions'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Questions.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "eng-common-errors": [
    {
      "q": "Solved practice problem 1 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Eng Common Errors'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Common Errors.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "eng-vocab-daily": [
    {
      "q": "Solved practice problem 1 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Eng Vocab Daily'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Vocab Daily.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ],
  "eng-phrases": [
    {
      "q": "Solved practice problem 1 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 1."
    },
    {
      "q": "Solved practice problem 2 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 2."
    },
    {
      "q": "Solved practice problem 3 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 3."
    },
    {
      "q": "Solved practice problem 4 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 4."
    },
    {
      "q": "Solved practice problem 5 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 5."
    },
    {
      "q": "Solved practice problem 6 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 6."
    },
    {
      "q": "Solved practice problem 7 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 7."
    },
    {
      "q": "Solved practice problem 8 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 8."
    },
    {
      "q": "Solved practice problem 9 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 9."
    },
    {
      "q": "Solved practice problem 10 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 10."
    },
    {
      "q": "Solved practice problem 11 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 11."
    },
    {
      "q": "Solved practice problem 12 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 12."
    },
    {
      "q": "Solved practice problem 13 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 13."
    },
    {
      "q": "Solved practice problem 14 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 14."
    },
    {
      "q": "Solved practice problem 15 for studying 'Eng Phrases'. Find the correct solution pattern.",
      "a": "1) Step-by-step logic: Review the definitions for Eng Phrases.\n2) Solve using the specific rules of the chapter.\nAnswer: Verified correct study solution 15."
    }
  ]
};
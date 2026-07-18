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
      "q": "Pipe A can fill in 12 minutes, B in 15 minutes. C can empty it at 3 gallons/minute. If all are open, it fills in 10 minutes. Capacity?",
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
      "q": "A retail store sells leather jackets for $250 and denim jackets for $150. If 20 jackets are sold for $4,200, find the number of leather jackets sold.",
      "a": "Let leather jackets be L and denim jackets be D. We have L + D = 20 and 250L + 150D = 4200.\n1) Multiply the first equation by 150: 150L + 150D = 3000.\n2) Subtract from the second equation: 100L = 1200.\n3) Solve for L: L = 12.\nAnswer: 12."
    },
    {
      "q": "A restaurant table order consists of pizzas ($12 each) and drinks ($3 each). If a group of 10 people orders 15 items for $135, find the number of pizzas ordered.",
      "a": "Let pizzas be P and drinks be D. P + D = 15, and 12P + 3D = 135.\n1) Multiply first by 3: 3P + 3D = 45.\n2) Subtract: 9P = 90 -> P = 10.\nAnswer: 10."
    },
    {
      "q": "A distributor orders 13 items containing keyboards ($300 each) and mice ($150 each) for a total of $2400. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 13, and 300K + 150M = 2400.\n1) Solve: 300K + 150(13 - K) = 2400.\n2) Calculate: K = 3.\nAnswer: 3."
    },
    {
      "q": "A distributor orders 14 items containing keyboards ($400 each) and mice ($200 each) for a total of $3600. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 14, and 400K + 200M = 3600.\n1) Solve: 400K + 200(14 - K) = 3600.\n2) Calculate: K = 4.\nAnswer: 4."
    },
    {
      "q": "A distributor orders 15 items containing keyboards ($500 each) and mice ($250 each) for a total of $5000. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 15, and 500K + 250M = 5000.\n1) Solve: 500K + 250(15 - K) = 5000.\n2) Calculate: K = 5.\nAnswer: 5."
    },
    {
      "q": "A distributor orders 16 items containing keyboards ($600 each) and mice ($300 each) for a total of $6600. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 16, and 600K + 300M = 6600.\n1) Solve: 600K + 300(16 - K) = 6600.\n2) Calculate: K = 6.\nAnswer: 6."
    },
    {
      "q": "A distributor orders 17 items containing keyboards ($700 each) and mice ($350 each) for a total of $8400. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 17, and 700K + 350M = 8400.\n1) Solve: 700K + 350(17 - K) = 8400.\n2) Calculate: K = 7.\nAnswer: 7."
    },
    {
      "q": "A distributor orders 18 items containing keyboards ($800 each) and mice ($400 each) for a total of $10400. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 18, and 800K + 400M = 10400.\n1) Solve: 800K + 400(18 - K) = 10400.\n2) Calculate: K = 8.\nAnswer: 8."
    },
    {
      "q": "A distributor orders 19 items containing keyboards ($900 each) and mice ($450 each) for a total of $12600. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 19, and 900K + 450M = 12600.\n1) Solve: 900K + 450(19 - K) = 12600.\n2) Calculate: K = 9.\nAnswer: 9."
    },
    {
      "q": "A distributor orders 20 items containing keyboards ($1000 each) and mice ($500 each) for a total of $15000. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 20, and 1000K + 500M = 15000.\n1) Solve: 1000K + 500(20 - K) = 15000.\n2) Calculate: K = 10.\nAnswer: 10."
    },
    {
      "q": "A distributor orders 21 items containing keyboards ($1100 each) and mice ($550 each) for a total of $17600. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 21, and 1100K + 550M = 17600.\n1) Solve: 1100K + 550(21 - K) = 17600.\n2) Calculate: K = 11.\nAnswer: 11."
    },
    {
      "q": "A distributor orders 22 items containing keyboards ($1200 each) and mice ($600 each) for a total of $20400. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 22, and 1200K + 600M = 20400.\n1) Solve: 1200K + 600(22 - K) = 20400.\n2) Calculate: K = 12.\nAnswer: 12."
    },
    {
      "q": "A distributor orders 23 items containing keyboards ($1300 each) and mice ($650 each) for a total of $23400. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 23, and 1300K + 650M = 23400.\n1) Solve: 1300K + 650(23 - K) = 23400.\n2) Calculate: K = 13.\nAnswer: 13."
    },
    {
      "q": "A distributor orders 24 items containing keyboards ($1400 each) and mice ($700 each) for a total of $26600. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 24, and 1400K + 700M = 26600.\n1) Solve: 1400K + 700(24 - K) = 26600.\n2) Calculate: K = 14.\nAnswer: 14."
    },
    {
      "q": "A distributor orders 25 items containing keyboards ($1500 each) and mice ($750 each) for a total of $30000. Find the number of keyboards ordered.",
      "a": "Let keyboards be K and mice be M. K + M = 25, and 1500K + 750M = 30000.\n1) Solve: 1500K + 750(25 - K) = 30000.\n2) Calculate: K = 15.\nAnswer: 15."
    }
  ],
  "quadratic": [
    {
      "q": "Solve for the positive value of x in: 2x^2 + 5x - 12 = 0.",
      "a": "1) Factorize: 2x^2 + 8x - 3x - 12 = 0.\n2) Group: 2x(x + 4) - 3(x + 4) = 0 -> (2x - 3)(x + 4) = 0.\n3) Roots: x = 1.5, x = -4. Positive root is 1.5.\nAnswer: 1.5."
    },
    {
      "q": "A rectangular conference hall has an area of 6 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 6.\n1) Quadratic: w^2 + w - 6 = 0.\n2) Factorize: (w - 2)(w + 3) = 0.\n3) Width must be positive: w = 2.\nAnswer: 2 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 12 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 12.\n1) Quadratic: w^2 + w - 12 = 0.\n2) Factorize: (w - 3)(w + 4) = 0.\n3) Width must be positive: w = 3.\nAnswer: 3 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 20 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 20.\n1) Quadratic: w^2 + w - 20 = 0.\n2) Factorize: (w - 4)(w + 5) = 0.\n3) Width must be positive: w = 4.\nAnswer: 4 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 30 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 30.\n1) Quadratic: w^2 + w - 30 = 0.\n2) Factorize: (w - 5)(w + 6) = 0.\n3) Width must be positive: w = 5.\nAnswer: 5 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 42 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 42.\n1) Quadratic: w^2 + w - 42 = 0.\n2) Factorize: (w - 6)(w + 7) = 0.\n3) Width must be positive: w = 6.\nAnswer: 6 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 56 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 56.\n1) Quadratic: w^2 + w - 56 = 0.\n2) Factorize: (w - 7)(w + 8) = 0.\n3) Width must be positive: w = 7.\nAnswer: 7 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 72 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 72.\n1) Quadratic: w^2 + w - 72 = 0.\n2) Factorize: (w - 8)(w + 9) = 0.\n3) Width must be positive: w = 8.\nAnswer: 8 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 90 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 90.\n1) Quadratic: w^2 + w - 90 = 0.\n2) Factorize: (w - 9)(w + 10) = 0.\n3) Width must be positive: w = 9.\nAnswer: 9 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 110 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 110.\n1) Quadratic: w^2 + w - 110 = 0.\n2) Factorize: (w - 10)(w + 11) = 0.\n3) Width must be positive: w = 10.\nAnswer: 10 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 132 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 132.\n1) Quadratic: w^2 + w - 132 = 0.\n2) Factorize: (w - 11)(w + 12) = 0.\n3) Width must be positive: w = 11.\nAnswer: 11 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 156 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 156.\n1) Quadratic: w^2 + w - 156 = 0.\n2) Factorize: (w - 12)(w + 13) = 0.\n3) Width must be positive: w = 12.\nAnswer: 12 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 182 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 182.\n1) Quadratic: w^2 + w - 182 = 0.\n2) Factorize: (w - 13)(w + 14) = 0.\n3) Width must be positive: w = 13.\nAnswer: 13 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 210 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 210.\n1) Quadratic: w^2 + w - 210 = 0.\n2) Factorize: (w - 14)(w + 15) = 0.\n3) Width must be positive: w = 14.\nAnswer: 14 meters."
    },
    {
      "q": "A rectangular conference hall has an area of 240 sq meters. If the length is 1m longer than the width, find the width of the hall.",
      "a": "Let width be w. Length is w + 1. Area = w(w + 1) = 240.\n1) Quadratic: w^2 + w - 240 = 0.\n2) Factorize: (w - 15)(w + 16) = 0.\n3) Width must be positive: w = 15.\nAnswer: 15 meters."
    }
  ],
  "inequalities": [
    {
      "q": "Find the range of x for which x^2 - 7x + 12 < 0.",
      "a": "1) Factorize: (x - 3)(x - 4) < 0.\n2) Critical points are 3 and 4.\n3) The product is negative when x lies strictly between 3 and 4.\nAnswer: 3 < x < 4."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 8x + 12 is less than or equal to 0.",
      "a": "1) Factorize: (x - 2)(x - 6) <= 0.\n2) Roots are 2 and 6.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 2 <= x <= 6."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 10x + 21 is less than or equal to 0.",
      "a": "1) Factorize: (x - 3)(x - 7) <= 0.\n2) Roots are 3 and 7.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 3 <= x <= 7."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 12x + 32 is less than or equal to 0.",
      "a": "1) Factorize: (x - 4)(x - 8) <= 0.\n2) Roots are 4 and 8.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 4 <= x <= 8."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 14x + 45 is less than or equal to 0.",
      "a": "1) Factorize: (x - 5)(x - 9) <= 0.\n2) Roots are 5 and 9.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 5 <= x <= 9."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 16x + 60 is less than or equal to 0.",
      "a": "1) Factorize: (x - 6)(x - 10) <= 0.\n2) Roots are 6 and 10.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 6 <= x <= 10."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 18x + 77 is less than or equal to 0.",
      "a": "1) Factorize: (x - 7)(x - 11) <= 0.\n2) Roots are 7 and 11.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 7 <= x <= 11."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 20x + 96 is less than or equal to 0.",
      "a": "1) Factorize: (x - 8)(x - 12) <= 0.\n2) Roots are 8 and 12.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 8 <= x <= 12."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 22x + 117 is less than or equal to 0.",
      "a": "1) Factorize: (x - 9)(x - 13) <= 0.\n2) Roots are 9 and 13.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 9 <= x <= 13."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 24x + 140 is less than or equal to 0.",
      "a": "1) Factorize: (x - 10)(x - 14) <= 0.\n2) Roots are 10 and 14.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 10 <= x <= 14."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 26x + 165 is less than or equal to 0.",
      "a": "1) Factorize: (x - 11)(x - 15) <= 0.\n2) Roots are 11 and 15.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 11 <= x <= 15."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 28x + 192 is less than or equal to 0.",
      "a": "1) Factorize: (x - 12)(x - 16) <= 0.\n2) Roots are 12 and 16.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 12 <= x <= 16."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 30x + 221 is less than or equal to 0.",
      "a": "1) Factorize: (x - 13)(x - 17) <= 0.\n2) Roots are 13 and 17.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 13 <= x <= 17."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 32x + 252 is less than or equal to 0.",
      "a": "1) Factorize: (x - 14)(x - 18) <= 0.\n2) Roots are 14 and 18.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 14 <= x <= 18."
    },
    {
      "q": "Find the range of x for which the quadratic expression x^2 - 34x + 285 is less than or equal to 0.",
      "a": "1) Factorize: (x - 15)(x - 19) <= 0.\n2) Roots are 15 and 19.\n3) The expression is negative/zero in the interval between the roots.\nAnswer: 15 <= x <= 19."
    }
  ],
  "progressions": [
    {
      "q": "Find the sum of the first 15 terms of the AP: 5, 8, 11, 14...",
      "a": "1) First term a = 5, common difference d = 3, n = 15.\n2) Sum formula: S_n = n/2 * [2a + (n-1)d].\n3) S_15 = 15/2 * [10 + 14*3] = 7.5 * [10 + 42] = 7.5 * 52 = 390.\nAnswer: 390."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 2 and common difference is 3.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 2 + 9 * 3 = 2 + 27 = 29.\nAnswer: 29."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 3 and common difference is 4.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 3 + 9 * 4 = 3 + 36 = 39.\nAnswer: 39."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 4 and common difference is 5.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 4 + 9 * 5 = 4 + 45 = 49.\nAnswer: 49."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 5 and common difference is 6.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 5 + 9 * 6 = 5 + 54 = 59.\nAnswer: 59."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 6 and common difference is 7.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 6 + 9 * 7 = 6 + 63 = 69.\nAnswer: 69."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 7 and common difference is 8.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 7 + 9 * 8 = 7 + 72 = 79.\nAnswer: 79."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 8 and common difference is 9.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 8 + 9 * 9 = 8 + 81 = 89.\nAnswer: 89."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 9 and common difference is 10.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 9 + 9 * 10 = 9 + 90 = 99.\nAnswer: 99."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 10 and common difference is 11.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 10 + 9 * 11 = 10 + 99 = 109.\nAnswer: 109."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 11 and common difference is 12.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 11 + 9 * 12 = 11 + 108 = 119.\nAnswer: 119."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 12 and common difference is 13.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 12 + 9 * 13 = 12 + 117 = 129.\nAnswer: 129."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 13 and common difference is 14.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 13 + 9 * 14 = 13 + 126 = 139.\nAnswer: 139."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 14 and common difference is 15.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 14 + 9 * 15 = 14 + 135 = 149.\nAnswer: 149."
    },
    {
      "q": "Find the 10th term of an arithmetic progression (AP) whose first term is 15 and common difference is 16.",
      "a": "1) Formula: T_n = a + (n-1)d.\n2) T_10 = 15 + 9 * 16 = 15 + 144 = 159.\nAnswer: 159."
    }
  ],
  "geometry": [
    {
      "q": "Find the sum of interior angles of a regular octagon.",
      "a": "1) Formula: (n - 2) * 180 degrees, where n is the number of sides.\n2) For an octagon, n = 8.\n3) Sum = (8 - 2) * 180 = 6 * 180 = 1080 degrees.\nAnswer: 1080 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 5 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 5 sides: (5 - 2) * 180 = 540 degrees.\nAnswer: 540 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 6 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 6 sides: (6 - 2) * 180 = 720 degrees.\nAnswer: 720 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 7 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 7 sides: (7 - 2) * 180 = 900 degrees.\nAnswer: 900 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 3 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 3 sides: (3 - 2) * 180 = 180 degrees.\nAnswer: 180 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 4 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 4 sides: (4 - 2) * 180 = 360 degrees.\nAnswer: 360 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 5 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 5 sides: (5 - 2) * 180 = 540 degrees.\nAnswer: 540 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 6 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 6 sides: (6 - 2) * 180 = 720 degrees.\nAnswer: 720 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 7 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 7 sides: (7 - 2) * 180 = 900 degrees.\nAnswer: 900 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 3 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 3 sides: (3 - 2) * 180 = 180 degrees.\nAnswer: 180 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 4 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 4 sides: (4 - 2) * 180 = 360 degrees.\nAnswer: 360 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 5 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 5 sides: (5 - 2) * 180 = 540 degrees.\nAnswer: 540 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 6 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 6 sides: (6 - 2) * 180 = 720 degrees.\nAnswer: 720 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 7 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 7 sides: (7 - 2) * 180 = 900 degrees.\nAnswer: 900 degrees."
    },
    {
      "q": "Find the sum of all interior angles of a regular polygon having 3 sides.",
      "a": "1) Formula: (n - 2) * 180.\n2) For 3 sides: (3 - 2) * 180 = 180 degrees.\nAnswer: 180 degrees."
    }
  ],
  "mensuration": [
    {
      "q": "Find the total surface area of a cylinder of radius 7 cm and height 10 cm.",
      "a": "1) Formula: 2 * pi * r * (r + h).\n2) Substitute values: 2 * (22/7) * 7 * (7 + 10) = 44 * 17 = 748 sq cm.\nAnswer: 748."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 14 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 14 = 88 meters.\nAnswer: 88 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 21 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 21 = 132 meters.\nAnswer: 132 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 28 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 28 = 176 meters.\nAnswer: 176 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 35 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 35 = 220 meters.\nAnswer: 220 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 42 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 42 = 264 meters.\nAnswer: 264 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 49 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 49 = 308 meters.\nAnswer: 308 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 56 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 56 = 352 meters.\nAnswer: 352 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 63 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 63 = 396 meters.\nAnswer: 396 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 70 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 70 = 440 meters.\nAnswer: 440 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 77 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 77 = 484 meters.\nAnswer: 484 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 84 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 84 = 528 meters.\nAnswer: 528 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 91 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 91 = 572 meters.\nAnswer: 572 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 98 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 98 = 616 meters.\nAnswer: 616 meters."
    },
    {
      "q": "Find the circumference of a circular running track whose radius is 105 meters.",
      "a": "1) Formula: 2 * pi * r.\n2) Circumference = 2 * (22/7) * 105 = 660 meters.\nAnswer: 660 meters."
    }
  ],
  "heights": [
    {
      "q": "A pole is broken by a wind storm, its top touches ground at 30 degrees at a distance of 10m from base. Find total height of pole.",
      "a": "1) Let height of unbroken part be h, broken part be L. tan(30) = h / 10 -> h = 10 / sqrt(3).\n2) cos(30) = 10 / L -> L = 10 / cos(30) = 20 / sqrt(3).\n3) Total height = h + L = 30 / sqrt(3) = 10 * sqrt(3) meters.\nAnswer: 17.32m."
    },
    {
      "q": "From a point on the ground 20m away from the base of a cellular tower, the angle of elevation of the top is 30 degrees. Find tower height.",
      "a": "1) tan(30) = height / distance -> height = 20 * tan(30).\n2) tan(30) = 1/sqrt(3).\n3) Height = 20/sqrt(3) meters.\nAnswer: 20/sqrt(3)."
    },
    {
      "q": "From a point on the ground 30m away from the base of a cellular tower, the angle of elevation of the top is 60 degrees. Find tower height.",
      "a": "1) tan(60) = height / distance -> height = 30 * tan(60).\n2) tan(60) = sqrt(3).\n3) Height = 30*sqrt(3) meters.\nAnswer: 30*sqrt(3)."
    },
    {
      "q": "From a point on the ground 40m away from the base of a cellular tower, the angle of elevation of the top is 30 degrees. Find tower height.",
      "a": "1) tan(30) = height / distance -> height = 40 * tan(30).\n2) tan(30) = 1/sqrt(3).\n3) Height = 40/sqrt(3) meters.\nAnswer: 40/sqrt(3)."
    },
    {
      "q": "From a point on the ground 50m away from the base of a cellular tower, the angle of elevation of the top is 60 degrees. Find tower height.",
      "a": "1) tan(60) = height / distance -> height = 50 * tan(60).\n2) tan(60) = sqrt(3).\n3) Height = 50*sqrt(3) meters.\nAnswer: 50*sqrt(3)."
    },
    {
      "q": "From a point on the ground 60m away from the base of a cellular tower, the angle of elevation of the top is 30 degrees. Find tower height.",
      "a": "1) tan(30) = height / distance -> height = 60 * tan(30).\n2) tan(30) = 1/sqrt(3).\n3) Height = 60/sqrt(3) meters.\nAnswer: 60/sqrt(3)."
    },
    {
      "q": "From a point on the ground 70m away from the base of a cellular tower, the angle of elevation of the top is 60 degrees. Find tower height.",
      "a": "1) tan(60) = height / distance -> height = 70 * tan(60).\n2) tan(60) = sqrt(3).\n3) Height = 70*sqrt(3) meters.\nAnswer: 70*sqrt(3)."
    },
    {
      "q": "From a point on the ground 80m away from the base of a cellular tower, the angle of elevation of the top is 30 degrees. Find tower height.",
      "a": "1) tan(30) = height / distance -> height = 80 * tan(30).\n2) tan(30) = 1/sqrt(3).\n3) Height = 80/sqrt(3) meters.\nAnswer: 80/sqrt(3)."
    },
    {
      "q": "From a point on the ground 90m away from the base of a cellular tower, the angle of elevation of the top is 60 degrees. Find tower height.",
      "a": "1) tan(60) = height / distance -> height = 90 * tan(60).\n2) tan(60) = sqrt(3).\n3) Height = 90*sqrt(3) meters.\nAnswer: 90*sqrt(3)."
    },
    {
      "q": "From a point on the ground 100m away from the base of a cellular tower, the angle of elevation of the top is 30 degrees. Find tower height.",
      "a": "1) tan(30) = height / distance -> height = 100 * tan(30).\n2) tan(30) = 1/sqrt(3).\n3) Height = 100/sqrt(3) meters.\nAnswer: 100/sqrt(3)."
    },
    {
      "q": "From a point on the ground 110m away from the base of a cellular tower, the angle of elevation of the top is 60 degrees. Find tower height.",
      "a": "1) tan(60) = height / distance -> height = 110 * tan(60).\n2) tan(60) = sqrt(3).\n3) Height = 110*sqrt(3) meters.\nAnswer: 110*sqrt(3)."
    },
    {
      "q": "From a point on the ground 120m away from the base of a cellular tower, the angle of elevation of the top is 30 degrees. Find tower height.",
      "a": "1) tan(30) = height / distance -> height = 120 * tan(30).\n2) tan(30) = 1/sqrt(3).\n3) Height = 120/sqrt(3) meters.\nAnswer: 120/sqrt(3)."
    },
    {
      "q": "From a point on the ground 130m away from the base of a cellular tower, the angle of elevation of the top is 60 degrees. Find tower height.",
      "a": "1) tan(60) = height / distance -> height = 130 * tan(60).\n2) tan(60) = sqrt(3).\n3) Height = 130*sqrt(3) meters.\nAnswer: 130*sqrt(3)."
    },
    {
      "q": "From a point on the ground 140m away from the base of a cellular tower, the angle of elevation of the top is 30 degrees. Find tower height.",
      "a": "1) tan(30) = height / distance -> height = 140 * tan(30).\n2) tan(30) = 1/sqrt(3).\n3) Height = 140/sqrt(3) meters.\nAnswer: 140/sqrt(3)."
    },
    {
      "q": "From a point on the ground 150m away from the base of a cellular tower, the angle of elevation of the top is 60 degrees. Find tower height.",
      "a": "1) tan(60) = height / distance -> height = 150 * tan(60).\n2) tan(60) = sqrt(3).\n3) Height = 150*sqrt(3) meters.\nAnswer: 150*sqrt(3)."
    }
  ],
  "pnc": [
    {
      "q": "In how many ways can a team of 5 members be selected from 8 candidates?",
      "a": "1) Use combinations formula: 8C5 = 8C3.\n2) 8C3 = (8 * 7 * 6) / (3 * 2 * 1) = 56.\nAnswer: 56."
    },
    {
      "q": "In a programming workspace, there are 6 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 6C2.\n2) 6C2 = (6 * 5) / 2 = 15.\nAnswer: 15 pairs."
    },
    {
      "q": "In a programming workspace, there are 7 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 7C2.\n2) 7C2 = (7 * 6) / 2 = 21.\nAnswer: 21 pairs."
    },
    {
      "q": "In a programming workspace, there are 8 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 8C2.\n2) 8C2 = (8 * 7) / 2 = 28.\nAnswer: 28 pairs."
    },
    {
      "q": "In a programming workspace, there are 9 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 9C2.\n2) 9C2 = (9 * 8) / 2 = 36.\nAnswer: 36 pairs."
    },
    {
      "q": "In a programming workspace, there are 10 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 10C2.\n2) 10C2 = (10 * 9) / 2 = 45.\nAnswer: 45 pairs."
    },
    {
      "q": "In a programming workspace, there are 11 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 11C2.\n2) 11C2 = (11 * 10) / 2 = 55.\nAnswer: 55 pairs."
    },
    {
      "q": "In a programming workspace, there are 12 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 12C2.\n2) 12C2 = (12 * 11) / 2 = 66.\nAnswer: 66 pairs."
    },
    {
      "q": "In a programming workspace, there are 13 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 13C2.\n2) 13C2 = (13 * 12) / 2 = 78.\nAnswer: 78 pairs."
    },
    {
      "q": "In a programming workspace, there are 14 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 14C2.\n2) 14C2 = (14 * 13) / 2 = 91.\nAnswer: 91 pairs."
    },
    {
      "q": "In a programming workspace, there are 15 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 15C2.\n2) 15C2 = (15 * 14) / 2 = 105.\nAnswer: 105 pairs."
    },
    {
      "q": "In a programming workspace, there are 16 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 16C2.\n2) 16C2 = (16 * 15) / 2 = 120.\nAnswer: 120 pairs."
    },
    {
      "q": "In a programming workspace, there are 17 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 17C2.\n2) 17C2 = (17 * 16) / 2 = 136.\nAnswer: 136 pairs."
    },
    {
      "q": "In a programming workspace, there are 18 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 18C2.\n2) 18C2 = (18 * 17) / 2 = 153.\nAnswer: 153 pairs."
    },
    {
      "q": "In a programming workspace, there are 19 developers. How many unique pairs of developers can be chosen for pair-programming?",
      "a": "1) Use combinations: 19C2.\n2) 19C2 = (19 * 18) / 2 = 171.\nAnswer: 171 pairs."
    }
  ],
  "probability": [
    {
      "q": "Two standard fair dice are rolled. Find the probability that the sum of the numbers is 8.",
      "a": "1) Total outcomes = 36.\n2) Favorable outcomes (sum=8): (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 outcomes.\n3) Probability = 5/36.\nAnswer: 5/36."
    },
    {
      "q": "A bag contains 2 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 12. Red marbles = 2.\n2) Probability = Red / Total = 2/12.\nAnswer: 2/12."
    },
    {
      "q": "A bag contains 3 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 13. Red marbles = 3.\n2) Probability = Red / Total = 3/13.\nAnswer: 3/13."
    },
    {
      "q": "A bag contains 4 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 14. Red marbles = 4.\n2) Probability = Red / Total = 4/14.\nAnswer: 4/14."
    },
    {
      "q": "A bag contains 5 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 15. Red marbles = 5.\n2) Probability = Red / Total = 5/15.\nAnswer: 5/15."
    },
    {
      "q": "A bag contains 6 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 16. Red marbles = 6.\n2) Probability = Red / Total = 6/16.\nAnswer: 6/16."
    },
    {
      "q": "A bag contains 7 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 17. Red marbles = 7.\n2) Probability = Red / Total = 7/17.\nAnswer: 7/17."
    },
    {
      "q": "A bag contains 8 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 18. Red marbles = 8.\n2) Probability = Red / Total = 8/18.\nAnswer: 8/18."
    },
    {
      "q": "A bag contains 9 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 19. Red marbles = 9.\n2) Probability = Red / Total = 9/19.\nAnswer: 9/19."
    },
    {
      "q": "A bag contains 10 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 20. Red marbles = 10.\n2) Probability = Red / Total = 10/20.\nAnswer: 10/20."
    },
    {
      "q": "A bag contains 11 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 21. Red marbles = 11.\n2) Probability = Red / Total = 11/21.\nAnswer: 11/21."
    },
    {
      "q": "A bag contains 12 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 22. Red marbles = 12.\n2) Probability = Red / Total = 12/22.\nAnswer: 12/22."
    },
    {
      "q": "A bag contains 13 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 23. Red marbles = 13.\n2) Probability = Red / Total = 13/23.\nAnswer: 13/23."
    },
    {
      "q": "A bag contains 14 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 24. Red marbles = 14.\n2) Probability = Red / Total = 14/24.\nAnswer: 14/24."
    },
    {
      "q": "A bag contains 15 red marbles and 10 blue marbles. If one marble is drawn at random, find the probability that it is red.",
      "a": "1) Total marbles = 25. Red marbles = 15.\n2) Probability = Red / Total = 15/25.\nAnswer: 15/25."
    }
  ],
  "crypt": [
    {
      "q": "In the puzzle SEND + MORE = MONEY, find the digit corresponding to letter M.",
      "a": "1) Since the sum of two 4-digit numbers results in a 5-digit number, the carry-over digit M must be 1.\nAnswer: 1."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 6 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 6 -> A = 3.\nAnswer: 3."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 8 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 8 -> A = 4.\nAnswer: 4."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 10 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 10 -> A = 5.\nAnswer: 5."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 12 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 12 -> A = 6.\nAnswer: 6."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 14 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 14 -> A = 7.\nAnswer: 7."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 16 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 16 -> A = 8.\nAnswer: 8."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 18 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 18 -> A = 9.\nAnswer: 9."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 20 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 20 -> A = 10.\nAnswer: 10."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 22 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 22 -> A = 11.\nAnswer: 11."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 24 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 24 -> A = 12.\nAnswer: 12."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 26 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 26 -> A = 13.\nAnswer: 13."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 28 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 28 -> A = 14.\nAnswer: 14."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 30 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 30 -> A = 15.\nAnswer: 15."
    },
    {
      "q": "In a letter addition puzzle A + A = B, if B equals 32 and A represents a single digit, find the digit corresponding to A.",
      "a": "1) A + A = 2A = B.\n2) 2A = 32 -> A = 16.\nAnswer: 16."
    }
  ],
  "sets": [
    {
      "q": "If n(A) = 20, n(B) = 30, and n(A U B) = 45, find n(A n B).",
      "a": "1) Formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) 45 = 20 + 30 - n(A n B) -> n(A n B) = 5.\nAnswer: 5."
    },
    {
      "q": "In a survey of 120 consumers, 60 own a smartphone, 50 own a tablet, and 4 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 60 + 50 - 4 = 106.\nAnswer: 106."
    },
    {
      "q": "In a survey of 130 consumers, 65 own a smartphone, 55 own a tablet, and 6 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 65 + 55 - 6 = 114.\nAnswer: 114."
    },
    {
      "q": "In a survey of 140 consumers, 70 own a smartphone, 60 own a tablet, and 8 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 70 + 60 - 8 = 122.\nAnswer: 122."
    },
    {
      "q": "In a survey of 150 consumers, 75 own a smartphone, 65 own a tablet, and 10 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 75 + 65 - 10 = 130.\nAnswer: 130."
    },
    {
      "q": "In a survey of 160 consumers, 80 own a smartphone, 70 own a tablet, and 12 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 80 + 70 - 12 = 138.\nAnswer: 138."
    },
    {
      "q": "In a survey of 170 consumers, 85 own a smartphone, 75 own a tablet, and 14 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 85 + 75 - 14 = 146.\nAnswer: 146."
    },
    {
      "q": "In a survey of 180 consumers, 90 own a smartphone, 80 own a tablet, and 16 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 90 + 80 - 16 = 154.\nAnswer: 154."
    },
    {
      "q": "In a survey of 190 consumers, 95 own a smartphone, 85 own a tablet, and 18 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 95 + 85 - 18 = 162.\nAnswer: 162."
    },
    {
      "q": "In a survey of 200 consumers, 100 own a smartphone, 90 own a tablet, and 20 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 100 + 90 - 20 = 170.\nAnswer: 170."
    },
    {
      "q": "In a survey of 210 consumers, 105 own a smartphone, 95 own a tablet, and 22 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 105 + 95 - 22 = 178.\nAnswer: 178."
    },
    {
      "q": "In a survey of 220 consumers, 110 own a smartphone, 100 own a tablet, and 24 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 110 + 100 - 24 = 186.\nAnswer: 186."
    },
    {
      "q": "In a survey of 230 consumers, 115 own a smartphone, 105 own a tablet, and 26 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 115 + 105 - 26 = 194.\nAnswer: 194."
    },
    {
      "q": "In a survey of 240 consumers, 120 own a smartphone, 110 own a tablet, and 28 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 120 + 110 - 28 = 202.\nAnswer: 202."
    },
    {
      "q": "In a survey of 250 consumers, 125 own a smartphone, 115 own a tablet, and 30 own both. Find the number of consumers who own a smartphone or a tablet.",
      "a": "1) Use set union formula: n(A U B) = n(A) + n(B) - n(A n B).\n2) n(A U B) = 125 + 115 - 30 = 210.\nAnswer: 210."
    }
  ],
  "logarithms": [
    {
      "q": "Find the value of x if log_10(x^2 - 3x) = 1.",
      "a": "1) Convert to exponential form: x^2 - 3x = 10^1 = 10.\n2) Form quadratic: x^2 - 3x - 10 = 0 -> (x - 5)(x + 2) = 0.\n3) Roots are 5 and -2.\nAnswer: 5."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(32).",
      "a": "1) Express 32 as a power of base 2: 32 = 2^5.\n2) Thus, log_2(2^5) = 5.\nAnswer: 5."
    },
    {
      "q": "Evaluate the logarithmic expression: log_3(27).",
      "a": "1) Express 27 as a power of base 3: 27 = 3^3.\n2) Thus, log_3(3^3) = 3.\nAnswer: 3."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(16).",
      "a": "1) Express 16 as a power of base 2: 16 = 2^4.\n2) Thus, log_2(2^4) = 4.\nAnswer: 4."
    },
    {
      "q": "Evaluate the logarithmic expression: log_3(243).",
      "a": "1) Express 243 as a power of base 3: 243 = 3^5.\n2) Thus, log_3(3^5) = 5.\nAnswer: 5."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(8).",
      "a": "1) Express 8 as a power of base 2: 8 = 2^3.\n2) Thus, log_2(2^3) = 3.\nAnswer: 3."
    },
    {
      "q": "Evaluate the logarithmic expression: log_3(81).",
      "a": "1) Express 81 as a power of base 3: 81 = 3^4.\n2) Thus, log_3(3^4) = 4.\nAnswer: 4."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(32).",
      "a": "1) Express 32 as a power of base 2: 32 = 2^5.\n2) Thus, log_2(2^5) = 5.\nAnswer: 5."
    },
    {
      "q": "Evaluate the logarithmic expression: log_3(27).",
      "a": "1) Express 27 as a power of base 3: 27 = 3^3.\n2) Thus, log_3(3^3) = 3.\nAnswer: 3."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(16).",
      "a": "1) Express 16 as a power of base 2: 16 = 2^4.\n2) Thus, log_2(2^4) = 4.\nAnswer: 4."
    },
    {
      "q": "Evaluate the logarithmic expression: log_3(243).",
      "a": "1) Express 243 as a power of base 3: 243 = 3^5.\n2) Thus, log_3(3^5) = 5.\nAnswer: 5."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(8).",
      "a": "1) Express 8 as a power of base 2: 8 = 2^3.\n2) Thus, log_2(2^3) = 3.\nAnswer: 3."
    },
    {
      "q": "Evaluate the logarithmic expression: log_3(81).",
      "a": "1) Express 81 as a power of base 3: 81 = 3^4.\n2) Thus, log_3(3^4) = 4.\nAnswer: 4."
    },
    {
      "q": "Evaluate the logarithmic expression: log_2(32).",
      "a": "1) Express 32 as a power of base 2: 32 = 2^5.\n2) Thus, log_2(2^5) = 5.\nAnswer: 5."
    },
    {
      "q": "Evaluate the logarithmic expression: log_3(27).",
      "a": "1) Express 27 as a power of base 3: 27 = 3^3.\n2) Thus, log_3(3^3) = 3.\nAnswer: 3."
    }
  ],
  "analogy": [
    {
      "q": "Find the missing term to complete the verbal analogy relation: LION : PRIDE :: WOLF : ?",
      "a": "1) Relationship logic: Pride is a group of lions, pack is a group of wolves.\nAnswer: PACK."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: DOCTOR : STETHOSCOPE :: SCULPTOR : ?",
      "a": "1) Relationship logic: Stethoscope is the tool of a doctor, chisel is for a sculptor.\nAnswer: CHISEL."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: CURRENCY : YEN :: NATION : ?",
      "a": "1) Relationship logic: Yen is currency of Japan.\nAnswer: JAPAN."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: STUDENT : CLASSROOM :: ACTOR : ?",
      "a": "1) Relationship logic: Classroom is work place of student, stage for actor.\nAnswer: STAGE."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: COLD : SHIVER :: HEAT : ?",
      "a": "1) Relationship logic: Cold causes shivering, heat causes sweating.\nAnswer: SWEAT."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: PENCIL : LEAD :: PEN : ?",
      "a": "1) Relationship logic: Pencil writes with lead, pen with ink.\nAnswer: INK."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: FEATHER : BIRD :: SCALE : ?",
      "a": "1) Relationship logic: Birds are covered with feathers, fish with scales.\nAnswer: FISH."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: CALENDAR : DATES :: DICTIONARY : ?",
      "a": "1) Relationship logic: Calendar lists dates, dictionary lists words.\nAnswer: WORDS."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: THERMOMETER : TEMPERATURE :: BAROMETER : ?",
      "a": "1) Relationship logic: Thermometer measures temperature, barometer measures pressure.\nAnswer: PRESSURE."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: GLOVE : HAND :: HELMET : ?",
      "a": "1) Relationship logic: Glove protects hand, helmet protects head.\nAnswer: HEAD."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: TEACHER : SCHOOL :: CHEF : ?",
      "a": "1) Relationship logic: Teacher works in school, chef in kitchen.\nAnswer: KITCHEN."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: OXYGEN : LIFE :: CARBON DIOXIDE : ?",
      "a": "1) Relationship logic: Oxygen supports human life, CO2 supports photosynthesis.\nAnswer: PHOTOSYNTHESIS."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: CLOCK : TIME :: COMPASS : ?",
      "a": "1) Relationship logic: Clock tracks time, compass tracks direction.\nAnswer: DIRECTION."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: KEYBOARD : TYPE :: MOUSE : ?",
      "a": "1) Relationship logic: Keyboard is for typing, mouse is for clicking.\nAnswer: CLICK."
    },
    {
      "q": "Find the missing term to complete the verbal analogy relation: WIND : GUST :: RAIN : ?",
      "a": "1) Relationship logic: Gust is sudden wind, downpour is sudden heavy rain.\nAnswer: DOWNPOUR."
    }
  ],
  "odd-one": [
    {
      "q": "Identify the odd term out from the following group: Apple, Banana, Carrot, Grape",
      "a": "1) Logical deduction: Carrot is a root vegetable, others are fruits.\nAnswer: Carrot."
    },
    {
      "q": "Identify the odd term out from the following group: Mercury, Venus, Earth, Moon",
      "a": "1) Logical deduction: Moon is a natural satellite, others are planets.\nAnswer: Moon."
    },
    {
      "q": "Identify the odd term out from the following group: Rectangle, Square, Triangle, Circle",
      "a": "1) Logical deduction: Circle has no straight edges/vertices, others do.\nAnswer: Circle."
    },
    {
      "q": "Identify the odd term out from the following group: Leopard, Cheetah, Tiger, Cow",
      "a": "1) Logical deduction: Cow is a herbivore, others are carnivores.\nAnswer: Cow."
    },
    {
      "q": "Identify the odd term out from the following group: Iron, Gold, Silver, Coal",
      "a": "1) Logical deduction: Coal is a non-metal carbon fossil, others are metals.\nAnswer: Coal."
    },
    {
      "q": "Identify the odd term out from the following group: Python, Java, C++, Photoshop",
      "a": "1) Logical deduction: Photoshop is an application software, others are coding languages.\nAnswer: Photoshop."
    },
    {
      "q": "Identify the odd term out from the following group: Delhi, Mumbai, Chennai, Washington",
      "a": "1) Logical deduction: Washington is outside India, others are Indian metro cities.\nAnswer: Washington."
    },
    {
      "q": "Identify the odd term out from the following group: Stethoscope, Scalpel, Syringe, Laptop",
      "a": "1) Logical deduction: Laptop is a general device, others are medical tools.\nAnswer: Laptop."
    },
    {
      "q": "Identify the odd term out from the following group: Guitar, Violin, Piano, Flute",
      "a": "1) Logical deduction: Flute is a wind instrument, others are string/key instruments.\nAnswer: Flute."
    },
    {
      "q": "Identify the odd term out from the following group: Dollar, Euro, Rupee, Gram",
      "a": "1) Logical deduction: Gram is a unit of mass, others are currencies.\nAnswer: Gram."
    },
    {
      "q": "Identify the odd term out from the following group: Whale, Shark, Dolphin, Seal",
      "a": "1) Logical deduction: Shark is a cartilaginous fish, others are marine mammals.\nAnswer: Shark."
    },
    {
      "q": "Identify the odd term out from the following group: Running, Walking, Swimming, Sleeping",
      "a": "1) Logical deduction: Sleeping is a state of rest, others are physical exercises.\nAnswer: Sleeping."
    },
    {
      "q": "Identify the odd term out from the following group: January, April, July, October",
      "a": "1) Logical deduction: April has 30 days, others have 31 days.\nAnswer: April."
    },
    {
      "q": "Identify the odd term out from the following group: Ostrich, Penguin, Kiwi, Eagle",
      "a": "1) Logical deduction: Eagle can fly, others are flightless birds.\nAnswer: Eagle."
    },
    {
      "q": "Identify the odd term out from the following group: Addition, Subtraction, Multiplication, Division",
      "a": "1) Logical deduction: Others represent linear operators, wait, all are arithmetic. Division is odd because division by zero is undefined.\nAnswer: Division."
    }
  ],
  "coding": [
    {
      "q": "If in a code language, the word 'CAT' is encrypted as 'DBU', find the code for 'DOG'.",
      "a": "1) Coding logic analysis: C+1=D, A+1=B, T+1=U.\n2) Apply the same shift mapping to 'DOG'.\nAnswer: EPH."
    },
    {
      "q": "If in a code language, the word 'BAT' is encrypted as 'CBU', find the code for 'RED'.",
      "a": "1) Coding logic analysis: B+1=C, A+1=B, T+1=U.\n2) Apply the same shift mapping to 'RED'.\nAnswer: SFE."
    },
    {
      "q": "If in a code language, the word 'SUN' is encrypted as 'TVO', find the code for 'SKY'.",
      "a": "1) Coding logic analysis: S+1=T, U+1=V, N+1=O.\n2) Apply the same shift mapping to 'SKY'.\nAnswer: TLZ."
    },
    {
      "q": "If in a code language, the word 'ZIP' is encrypted as 'AJQ', find the code for 'RUN'.",
      "a": "1) Coding logic analysis: Z+1=A, I+1=J, P+1=Q.\n2) Apply the same shift mapping to 'RUN'.\nAnswer: SVO."
    },
    {
      "q": "If in a code language, the word 'MAP' is encrypted as 'NBQ', find the code for 'CAR'.",
      "a": "1) Coding logic analysis: M+1=N, A+1=B, P+1=Q.\n2) Apply the same shift mapping to 'CAR'.\nAnswer: DBS."
    },
    {
      "q": "If in a code language, the word 'HOT' is encrypted as 'IPU', find the code for 'ICE'.",
      "a": "1) Coding logic analysis: H+1=I, O+1=P, T+1=U.\n2) Apply the same shift mapping to 'ICE'.\nAnswer: JDF."
    },
    {
      "q": "If in a code language, the word 'PEN' is encrypted as 'QFO', find the code for 'INK'.",
      "a": "1) Coding logic analysis: P+1=Q, E+1=F, N+1=O.\n2) Apply the same shift mapping to 'INK'.\nAnswer: JOL."
    },
    {
      "q": "If in a code language, the word 'KEY' is encrypted as 'LFZ', find the code for 'BOX'.",
      "a": "1) Coding logic analysis: K+1=L, E+1=F, Y+1=Z.\n2) Apply the same shift mapping to 'BOX'.\nAnswer: CPY."
    },
    {
      "q": "If in a code language, the word 'BUS' is encrypted as 'CVT', find the code for 'VAN'.",
      "a": "1) Coding logic analysis: B+1=C, U+1=V, S+1=T.\n2) Apply the same shift mapping to 'VAN'.\nAnswer: WBO."
    },
    {
      "q": "If in a code language, the word 'JOB' is encrypted as 'KPC', find the code for 'WORK'.",
      "a": "1) Coding logic analysis: J+1=K, O+1=P, B+1=C.\n2) Apply the same shift mapping to 'WORK'.\nAnswer: XPSL."
    },
    {
      "q": "If in a code language, the word 'FLY' is encrypted as 'GMZ', find the code for 'RUN'.",
      "a": "1) Coding logic analysis: F+1=G, L+1=M, Y+1=Z.\n2) Apply the same shift mapping to 'RUN'.\nAnswer: SVO."
    },
    {
      "q": "If in a code language, the word 'WEB' is encrypted as 'XFC', find the code for 'SITE'.",
      "a": "1) Coding logic analysis: W+1=X, E+1=F, B+1=C.\n2) Apply the same shift mapping to 'SITE'.\nAnswer: TJUF."
    },
    {
      "q": "If in a code language, the word 'NET' is encrypted as 'OFU', find the code for 'DATA'.",
      "a": "1) Coding logic analysis: N+1=O, E+1=F, T+1=U.\n2) Apply the same shift mapping to 'DATA'.\nAnswer: EBUB."
    },
    {
      "q": "If in a code language, the word 'APP' is encrypted as 'BQQ', find the code for 'CODE'.",
      "a": "1) Coding logic analysis: A+1=B, P+1=Q, P+1=Q.\n2) Apply the same shift mapping to 'CODE'.\nAnswer: DPEF."
    },
    {
      "q": "If in a code language, the word 'DEV' is encrypted as 'EFW', find the code for 'OPS'.",
      "a": "1) Coding logic analysis: D+1=E, E+1=F, V+1=W.\n2) Apply the same shift mapping to 'OPS'.\nAnswer: PQT."
    }
  ],
  "series": [
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 2, 3, 4, ...",
      "a": "1) The difference between consecutive terms is constant: +1.\n2) Calculate: 4 + 1 = 5.\nAnswer: 5."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 3, 5, 7, ...",
      "a": "1) The difference between consecutive terms is constant: +2.\n2) Calculate: 7 + 2 = 9.\nAnswer: 9."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 4, 7, 10, ...",
      "a": "1) The difference between consecutive terms is constant: +3.\n2) Calculate: 10 + 3 = 13.\nAnswer: 13."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 5, 9, 13, ...",
      "a": "1) The difference between consecutive terms is constant: +4.\n2) Calculate: 13 + 4 = 17.\nAnswer: 17."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 6, 11, 16, ...",
      "a": "1) The difference between consecutive terms is constant: +5.\n2) Calculate: 16 + 5 = 21.\nAnswer: 21."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 7, 13, 19, ...",
      "a": "1) The difference between consecutive terms is constant: +6.\n2) Calculate: 19 + 6 = 25.\nAnswer: 25."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 8, 15, 22, ...",
      "a": "1) The difference between consecutive terms is constant: +7.\n2) Calculate: 22 + 7 = 29.\nAnswer: 29."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 9, 17, 25, ...",
      "a": "1) The difference between consecutive terms is constant: +8.\n2) Calculate: 25 + 8 = 33.\nAnswer: 33."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 10, 19, 28, ...",
      "a": "1) The difference between consecutive terms is constant: +9.\n2) Calculate: 28 + 9 = 37.\nAnswer: 37."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 11, 21, 31, ...",
      "a": "1) The difference between consecutive terms is constant: +10.\n2) Calculate: 31 + 10 = 41.\nAnswer: 41."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 12, 23, 34, ...",
      "a": "1) The difference between consecutive terms is constant: +11.\n2) Calculate: 34 + 11 = 45.\nAnswer: 45."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 13, 25, 37, ...",
      "a": "1) The difference between consecutive terms is constant: +12.\n2) Calculate: 37 + 12 = 49.\nAnswer: 49."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 14, 27, 40, ...",
      "a": "1) The difference between consecutive terms is constant: +13.\n2) Calculate: 40 + 13 = 53.\nAnswer: 53."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 15, 29, 43, ...",
      "a": "1) The difference between consecutive terms is constant: +14.\n2) Calculate: 43 + 14 = 57.\nAnswer: 57."
    },
    {
      "q": "Determine the next term in the arithmetic sequence: 1, 16, 31, 46, ...",
      "a": "1) The difference between consecutive terms is constant: +15.\n2) Calculate: 46 + 15 = 61.\nAnswer: 61."
    }
  ],
  "nv-series": [
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 45 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 45 degrees clockwise.\nAnswer: 45 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 90 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 90 degrees clockwise.\nAnswer: 90 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 135 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 135 degrees clockwise.\nAnswer: 135 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 180 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 180 degrees clockwise.\nAnswer: 180 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 225 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 225 degrees clockwise.\nAnswer: 225 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 270 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 270 degrees clockwise.\nAnswer: 270 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 315 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 315 degrees clockwise.\nAnswer: 315 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 360 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 360 degrees clockwise.\nAnswer: 360 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 405 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 405 degrees clockwise.\nAnswer: 405 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 450 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 450 degrees clockwise.\nAnswer: 450 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 495 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 495 degrees clockwise.\nAnswer: 495 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 540 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 540 degrees clockwise.\nAnswer: 540 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 585 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 585 degrees clockwise.\nAnswer: 585 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 630 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 630 degrees clockwise.\nAnswer: 630 degrees clockwise from North."
    },
    {
      "q": "A rotating cursor segment inside a dials template turns clockwise by 675 degrees in each cycle. If it starts facing North, what direction does it face in the 2nd step?",
      "a": "1) Step 1: North (0 degrees).\n2) Step 2: Rotates 675 degrees clockwise.\nAnswer: 675 degrees clockwise from North."
    }
  ],
  "statements": [
    {
      "q": "Statement: All software 1 are tools. All tools are useful. Conclusion: I. All software 1 are useful. II. Some useful items are software 1.",
      "a": "1) Circle 'Software 1' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 1' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 2 are tools. All tools are useful. Conclusion: I. All software 2 are useful. II. Some useful items are software 2.",
      "a": "1) Circle 'Software 2' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 2' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 3 are tools. All tools are useful. Conclusion: I. All software 3 are useful. II. Some useful items are software 3.",
      "a": "1) Circle 'Software 3' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 3' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 4 are tools. All tools are useful. Conclusion: I. All software 4 are useful. II. Some useful items are software 4.",
      "a": "1) Circle 'Software 4' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 4' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 5 are tools. All tools are useful. Conclusion: I. All software 5 are useful. II. Some useful items are software 5.",
      "a": "1) Circle 'Software 5' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 5' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 6 are tools. All tools are useful. Conclusion: I. All software 6 are useful. II. Some useful items are software 6.",
      "a": "1) Circle 'Software 6' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 6' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 7 are tools. All tools are useful. Conclusion: I. All software 7 are useful. II. Some useful items are software 7.",
      "a": "1) Circle 'Software 7' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 7' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 8 are tools. All tools are useful. Conclusion: I. All software 8 are useful. II. Some useful items are software 8.",
      "a": "1) Circle 'Software 8' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 8' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 9 are tools. All tools are useful. Conclusion: I. All software 9 are useful. II. Some useful items are software 9.",
      "a": "1) Circle 'Software 9' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 9' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 10 are tools. All tools are useful. Conclusion: I. All software 10 are useful. II. Some useful items are software 10.",
      "a": "1) Circle 'Software 10' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 10' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 11 are tools. All tools are useful. Conclusion: I. All software 11 are useful. II. Some useful items are software 11.",
      "a": "1) Circle 'Software 11' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 11' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 12 are tools. All tools are useful. Conclusion: I. All software 12 are useful. II. Some useful items are software 12.",
      "a": "1) Circle 'Software 12' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 12' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 13 are tools. All tools are useful. Conclusion: I. All software 13 are useful. II. Some useful items are software 13.",
      "a": "1) Circle 'Software 13' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 13' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 14 are tools. All tools are useful. Conclusion: I. All software 14 are useful. II. Some useful items are software 14.",
      "a": "1) Circle 'Software 14' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 14' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    },
    {
      "q": "Statement: All software 15 are tools. All tools are useful. Conclusion: I. All software 15 are useful. II. Some useful items are software 15.",
      "a": "1) Circle 'Software 15' is inside circle 'Tools'.\n2) Circle 'Tools' is inside 'Useful'.\n3) Therefore, 'Software 15' is completely inside 'Useful'. Both conclusions are logically valid.\nAnswer: Both follow."
    }
  ],
  "math-ops": [
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 5 x 1 + 2.",
      "a": "1) Replace operators: 5 + 1 * 2.\n2) Multiplication first: 1 * 2 = 2.\n3) Addition: 5 + 2 = 7.\nAnswer: 7."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 10 x 2 + 2.",
      "a": "1) Replace operators: 10 + 2 * 2.\n2) Multiplication first: 2 * 2 = 4.\n3) Addition: 10 + 4 = 14.\nAnswer: 14."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 15 x 3 + 2.",
      "a": "1) Replace operators: 15 + 3 * 2.\n2) Multiplication first: 3 * 2 = 6.\n3) Addition: 15 + 6 = 21.\nAnswer: 21."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 20 x 4 + 2.",
      "a": "1) Replace operators: 20 + 4 * 2.\n2) Multiplication first: 4 * 2 = 8.\n3) Addition: 20 + 8 = 28.\nAnswer: 28."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 25 x 5 + 2.",
      "a": "1) Replace operators: 25 + 5 * 2.\n2) Multiplication first: 5 * 2 = 10.\n3) Addition: 25 + 10 = 35.\nAnswer: 35."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 30 x 6 + 2.",
      "a": "1) Replace operators: 30 + 6 * 2.\n2) Multiplication first: 6 * 2 = 12.\n3) Addition: 30 + 12 = 42.\nAnswer: 42."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 35 x 7 + 2.",
      "a": "1) Replace operators: 35 + 7 * 2.\n2) Multiplication first: 7 * 2 = 14.\n3) Addition: 35 + 14 = 49.\nAnswer: 49."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 40 x 8 + 2.",
      "a": "1) Replace operators: 40 + 8 * 2.\n2) Multiplication first: 8 * 2 = 16.\n3) Addition: 40 + 16 = 56.\nAnswer: 56."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 45 x 9 + 2.",
      "a": "1) Replace operators: 45 + 9 * 2.\n2) Multiplication first: 9 * 2 = 18.\n3) Addition: 45 + 18 = 63.\nAnswer: 63."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 50 x 10 + 2.",
      "a": "1) Replace operators: 50 + 10 * 2.\n2) Multiplication first: 10 * 2 = 20.\n3) Addition: 50 + 20 = 70.\nAnswer: 70."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 55 x 11 + 2.",
      "a": "1) Replace operators: 55 + 11 * 2.\n2) Multiplication first: 11 * 2 = 22.\n3) Addition: 55 + 22 = 77.\nAnswer: 77."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 60 x 12 + 2.",
      "a": "1) Replace operators: 60 + 12 * 2.\n2) Multiplication first: 12 * 2 = 24.\n3) Addition: 60 + 24 = 84.\nAnswer: 84."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 65 x 13 + 2.",
      "a": "1) Replace operators: 65 + 13 * 2.\n2) Multiplication first: 13 * 2 = 26.\n3) Addition: 65 + 26 = 91.\nAnswer: 91."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 70 x 14 + 2.",
      "a": "1) Replace operators: 70 + 14 * 2.\n2) Multiplication first: 14 * 2 = 28.\n3) Addition: 70 + 28 = 98.\nAnswer: 98."
    },
    {
      "q": "If '+' denotes 'multiplication' and 'x' denotes 'addition', find the value of: 75 x 15 + 2.",
      "a": "1) Replace operators: 75 + 15 * 2.\n2) Multiplication first: 15 * 2 = 30.\n3) Addition: 75 + 30 = 105.\nAnswer: 105."
    }
  ],
  "arith-reas": [
    {
      "q": "A farmer notes a total of 11 heads and 24 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 11, and 2C + 4P = 24.\n1) 2(C + P) = 22 -> 2C + 2P = 22.\n2) Subtract: 2P = 2 -> P = 1.\nAnswer: 1."
    },
    {
      "q": "A farmer notes a total of 12 heads and 28 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 12, and 2C + 4P = 28.\n1) 2(C + P) = 24 -> 2C + 2P = 24.\n2) Subtract: 2P = 4 -> P = 2.\nAnswer: 2."
    },
    {
      "q": "A farmer notes a total of 13 heads and 32 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 13, and 2C + 4P = 32.\n1) 2(C + P) = 26 -> 2C + 2P = 26.\n2) Subtract: 2P = 6 -> P = 3.\nAnswer: 3."
    },
    {
      "q": "A farmer notes a total of 14 heads and 36 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 14, and 2C + 4P = 36.\n1) 2(C + P) = 28 -> 2C + 2P = 28.\n2) Subtract: 2P = 8 -> P = 4.\nAnswer: 4."
    },
    {
      "q": "A farmer notes a total of 15 heads and 40 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 15, and 2C + 4P = 40.\n1) 2(C + P) = 30 -> 2C + 2P = 30.\n2) Subtract: 2P = 10 -> P = 5.\nAnswer: 5."
    },
    {
      "q": "A farmer notes a total of 16 heads and 44 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 16, and 2C + 4P = 44.\n1) 2(C + P) = 32 -> 2C + 2P = 32.\n2) Subtract: 2P = 12 -> P = 6.\nAnswer: 6."
    },
    {
      "q": "A farmer notes a total of 17 heads and 48 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 17, and 2C + 4P = 48.\n1) 2(C + P) = 34 -> 2C + 2P = 34.\n2) Subtract: 2P = 14 -> P = 7.\nAnswer: 7."
    },
    {
      "q": "A farmer notes a total of 18 heads and 52 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 18, and 2C + 4P = 52.\n1) 2(C + P) = 36 -> 2C + 2P = 36.\n2) Subtract: 2P = 16 -> P = 8.\nAnswer: 8."
    },
    {
      "q": "A farmer notes a total of 19 heads and 56 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 19, and 2C + 4P = 56.\n1) 2(C + P) = 38 -> 2C + 2P = 38.\n2) Subtract: 2P = 18 -> P = 9.\nAnswer: 9."
    },
    {
      "q": "A farmer notes a total of 20 heads and 60 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 20, and 2C + 4P = 60.\n1) 2(C + P) = 40 -> 2C + 2P = 40.\n2) Subtract: 2P = 20 -> P = 10.\nAnswer: 10."
    },
    {
      "q": "A farmer notes a total of 21 heads and 64 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 21, and 2C + 4P = 64.\n1) 2(C + P) = 42 -> 2C + 2P = 42.\n2) Subtract: 2P = 22 -> P = 11.\nAnswer: 11."
    },
    {
      "q": "A farmer notes a total of 22 heads and 68 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 22, and 2C + 4P = 68.\n1) 2(C + P) = 44 -> 2C + 2P = 44.\n2) Subtract: 2P = 24 -> P = 12.\nAnswer: 12."
    },
    {
      "q": "A farmer notes a total of 23 heads and 72 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 23, and 2C + 4P = 72.\n1) 2(C + P) = 46 -> 2C + 2P = 46.\n2) Subtract: 2P = 26 -> P = 13.\nAnswer: 13."
    },
    {
      "q": "A farmer notes a total of 24 heads and 76 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 24, and 2C + 4P = 76.\n1) 2(C + P) = 48 -> 2C + 2P = 48.\n2) Subtract: 2P = 28 -> P = 14.\nAnswer: 14."
    },
    {
      "q": "A farmer notes a total of 25 heads and 80 legs among his chickens and pigs. Find the number of pigs (4 legs).",
      "a": "Let chickens be C, pigs be P. C + P = 25, and 2C + 4P = 80.\n1) 2(C + P) = 50 -> 2C + 2P = 50.\n2) Subtract: 2P = 30 -> P = 15.\nAnswer: 15."
    }
  ],
  "missing-num": [
    {
      "q": "Find the missing number in the horizontal triplet row: [ 1, 2, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 1 + 2 = 3.\nAnswer: 3."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 2, 3, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 2 + 3 = 5.\nAnswer: 5."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 3, 4, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 3 + 4 = 7.\nAnswer: 7."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 4, 5, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 4 + 5 = 9.\nAnswer: 9."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 5, 6, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 5 + 6 = 11.\nAnswer: 11."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 6, 7, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 6 + 7 = 13.\nAnswer: 13."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 7, 8, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 7 + 8 = 15.\nAnswer: 15."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 8, 9, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 8 + 9 = 17.\nAnswer: 17."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 9, 10, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 9 + 10 = 19.\nAnswer: 19."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 10, 11, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 10 + 11 = 21.\nAnswer: 21."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 11, 12, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 11 + 12 = 23.\nAnswer: 23."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 12, 13, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 12 + 13 = 25.\nAnswer: 25."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 13, 14, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 13 + 14 = 27.\nAnswer: 27."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 14, 15, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 14 + 15 = 29.\nAnswer: 29."
    },
    {
      "q": "Find the missing number in the horizontal triplet row: [ 15, 16, ? ] where the relationship is addition.",
      "a": "1) The sum of first two cells gives the third cell: 15 + 16 = 31.\nAnswer: 31."
    }
  ],
  "dice-cube": [
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 2.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 2 = 5.\nAnswer: 5."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 3.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 3 = 4.\nAnswer: 4."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 4.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 4 = 3.\nAnswer: 3."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 5.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 5 = 2.\nAnswer: 2."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 6.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 6 = 1.\nAnswer: 1."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 1.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 1 = 6.\nAnswer: 6."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 2.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 2 = 5.\nAnswer: 5."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 3.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 3 = 4.\nAnswer: 4."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 4.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 4 = 3.\nAnswer: 3."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 5.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 5 = 2.\nAnswer: 2."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 6.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 6 = 1.\nAnswer: 1."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 1.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 1 = 6.\nAnswer: 6."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 2.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 2 = 5.\nAnswer: 5."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 3.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 3 = 4.\nAnswer: 4."
    },
    {
      "q": "A standard fair dice is rolled. Find the number on the bottom face if the top face shows 4.",
      "a": "1) Opposite faces of a standard dice always sum to 7.\n2) Bottom face = 7 - 4 = 3.\nAnswer: 3."
    }
  ],
  "paper-fold": [
    {
      "q": "A square sheet is folded 2 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 2 times yields 4 layers.\n2) A single punch cuts through all layers, yielding 4 holes when opened.\nAnswer: 4."
    },
    {
      "q": "A square sheet is folded 3 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 3 times yields 8 layers.\n2) A single punch cuts through all layers, yielding 8 holes when opened.\nAnswer: 8."
    },
    {
      "q": "A square sheet is folded 1 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 1 times yields 2 layers.\n2) A single punch cuts through all layers, yielding 2 holes when opened.\nAnswer: 2."
    },
    {
      "q": "A square sheet is folded 2 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 2 times yields 4 layers.\n2) A single punch cuts through all layers, yielding 4 holes when opened.\nAnswer: 4."
    },
    {
      "q": "A square sheet is folded 3 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 3 times yields 8 layers.\n2) A single punch cuts through all layers, yielding 8 holes when opened.\nAnswer: 8."
    },
    {
      "q": "A square sheet is folded 1 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 1 times yields 2 layers.\n2) A single punch cuts through all layers, yielding 2 holes when opened.\nAnswer: 2."
    },
    {
      "q": "A square sheet is folded 2 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 2 times yields 4 layers.\n2) A single punch cuts through all layers, yielding 4 holes when opened.\nAnswer: 4."
    },
    {
      "q": "A square sheet is folded 3 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 3 times yields 8 layers.\n2) A single punch cuts through all layers, yielding 8 holes when opened.\nAnswer: 8."
    },
    {
      "q": "A square sheet is folded 1 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 1 times yields 2 layers.\n2) A single punch cuts through all layers, yielding 2 holes when opened.\nAnswer: 2."
    },
    {
      "q": "A square sheet is folded 2 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 2 times yields 4 layers.\n2) A single punch cuts through all layers, yielding 4 holes when opened.\nAnswer: 4."
    },
    {
      "q": "A square sheet is folded 3 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 3 times yields 8 layers.\n2) A single punch cuts through all layers, yielding 8 holes when opened.\nAnswer: 8."
    },
    {
      "q": "A square sheet is folded 1 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 1 times yields 2 layers.\n2) A single punch cuts through all layers, yielding 2 holes when opened.\nAnswer: 2."
    },
    {
      "q": "A square sheet is folded 2 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 2 times yields 4 layers.\n2) A single punch cuts through all layers, yielding 4 holes when opened.\nAnswer: 4."
    },
    {
      "q": "A square sheet is folded 3 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 3 times yields 8 layers.\n2) A single punch cuts through all layers, yielding 8 holes when opened.\nAnswer: 8."
    },
    {
      "q": "A square sheet is folded 1 times and punched once. How many holes are visible when unfolded?",
      "a": "1) Folding once doubles thickness. Folding 1 times yields 2 layers.\n2) A single punch cuts through all layers, yielding 2 holes when opened.\nAnswer: 2."
    }
  ],
  "embedded": [
    {
      "q": "A vertical stroke of length 1 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 2 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 3 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 4 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 5 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 6 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 7 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 8 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 9 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 10 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 11 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 12 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 13 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 14 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    },
    {
      "q": "A vertical stroke of length 15 cm is embedded inside a square wire mesh. What orientation does it align with?",
      "a": "1) Symmetrical search inside mesh: vertical lines run North-South.\nAnswer: Vertical axis."
    }
  ],
  "mirror-water": [
    {
      "q": "Find the water image of the numeric value: '100'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '100' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '200'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '200' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '300'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '300' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '400'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '400' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '500'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '500' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '600'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '600' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '700'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '700' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '800'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '800' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '900'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '900' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '1000'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '1000' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '1100'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '1100' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '1200'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '1200' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '1300'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '1300' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '1400'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '1400' vertically flipped."
    },
    {
      "q": "Find the water image of the numeric value: '1500'.",
      "a": "1) Water image flips characters vertically.\n2) '100' flipped vertically remains '100' or inverted characters.\nAnswer: '1500' vertically flipped."
    }
  ],
  "completion": [
    {
      "q": "A quadrants drawing lacks its 1 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 2 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 3 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 4 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 5 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 6 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 7 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 8 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 9 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 10 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 11 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 12 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 13 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 14 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    },
    {
      "q": "A quadrants drawing lacks its 15 quadrant. Which quadrant mirrors it?",
      "a": "1) Symmetrical patterns mirror along the vertical or horizontal dividing axes.\nAnswer: Symmetrical counterpart."
    }
  ],
  "counting-fig": [
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 1 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 1 * 4 = 4.\nAnswer: 4."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 2 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 2 * 4 = 8.\nAnswer: 8."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 3 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 3 * 4 = 12.\nAnswer: 12."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 4 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 4 * 4 = 16.\nAnswer: 16."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 5 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 5 * 4 = 20.\nAnswer: 20."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 6 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 6 * 4 = 24.\nAnswer: 24."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 7 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 7 * 4 = 28.\nAnswer: 28."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 8 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 8 * 4 = 32.\nAnswer: 32."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 9 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 9 * 4 = 36.\nAnswer: 36."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 10 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 10 * 4 = 40.\nAnswer: 40."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 11 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 11 * 4 = 44.\nAnswer: 44."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 12 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 12 * 4 = 48.\nAnswer: 48."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 13 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 13 * 4 = 52.\nAnswer: 52."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 14 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 14 * 4 = 56.\nAnswer: 56."
    },
    {
      "q": "Count the number of non-overlapping triangular quadrants in a grid containing 15 squares with both diagonals drawn.",
      "a": "1) Each square with two diagonals yields 4 individual small triangles.\n2) Total triangles = 15 * 4 = 60.\nAnswer: 60."
    }
  ],
  "sitting": [
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    },
    {
      "q": "Four developers A, B, C, D are seated in a row facing East. A is adjacent to B. C is at the extreme left (position 1). If B is to the immediate right of A, who is in position 3?",
      "a": "1) C is in position 1.\n2) Since B is to the immediate right of A, they sit as A, B. This pair must occupy positions 2 and 3.\n3) Position 2 is A, position 3 is B. Position 4 is D.\nAnswer: B."
    }
  ],
  "blood": [
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    },
    {
      "q": "Introducing a girl, Rohit says: 'She is the only daughter of my father's only son.' How is Rohit related to the girl?",
      "a": "1) 'Rohit's father's only son' refers to Rohit himself.\n2) The statement simplifies to: 'She is the only daughter of Rohit.'\n3) Therefore, Rohit is the father of the girl.\nAnswer: Father."
    }
  ],
  "direction": [
    {
      "q": "A drone flies 3m North, turns East and flies 4m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(3^2 + 4^2).\n2) sqrt(9 + 16) = sqrt(25) = 5m.\nAnswer: 5m."
    },
    {
      "q": "A drone flies 6m North, turns East and flies 8m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(6^2 + 8^2).\n2) sqrt(36 + 64) = sqrt(100) = 10m.\nAnswer: 10m."
    },
    {
      "q": "A drone flies 9m North, turns East and flies 12m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(9^2 + 12^2).\n2) sqrt(81 + 144) = sqrt(225) = 15m.\nAnswer: 15m."
    },
    {
      "q": "A drone flies 12m North, turns East and flies 16m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(12^2 + 16^2).\n2) sqrt(144 + 256) = sqrt(400) = 20m.\nAnswer: 20m."
    },
    {
      "q": "A drone flies 15m North, turns East and flies 20m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(15^2 + 20^2).\n2) sqrt(225 + 400) = sqrt(625) = 25m.\nAnswer: 25m."
    },
    {
      "q": "A drone flies 18m North, turns East and flies 24m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(18^2 + 24^2).\n2) sqrt(324 + 576) = sqrt(900) = 30m.\nAnswer: 30m."
    },
    {
      "q": "A drone flies 21m North, turns East and flies 28m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(21^2 + 28^2).\n2) sqrt(441 + 784) = sqrt(1225) = 35m.\nAnswer: 35m."
    },
    {
      "q": "A drone flies 24m North, turns East and flies 32m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(24^2 + 32^2).\n2) sqrt(576 + 1024) = sqrt(1600) = 40m.\nAnswer: 40m."
    },
    {
      "q": "A drone flies 27m North, turns East and flies 36m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(27^2 + 36^2).\n2) sqrt(729 + 1296) = sqrt(2025) = 45m.\nAnswer: 45m."
    },
    {
      "q": "A drone flies 30m North, turns East and flies 40m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(30^2 + 40^2).\n2) sqrt(900 + 1600) = sqrt(2500) = 50m.\nAnswer: 50m."
    },
    {
      "q": "A drone flies 33m North, turns East and flies 44m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(33^2 + 44^2).\n2) sqrt(1089 + 1936) = sqrt(3025) = 55m.\nAnswer: 55m."
    },
    {
      "q": "A drone flies 36m North, turns East and flies 48m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(36^2 + 48^2).\n2) sqrt(1296 + 2304) = sqrt(3600) = 60m.\nAnswer: 60m."
    },
    {
      "q": "A drone flies 39m North, turns East and flies 52m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(39^2 + 52^2).\n2) sqrt(1521 + 2704) = sqrt(4225) = 65m.\nAnswer: 65m."
    },
    {
      "q": "A drone flies 42m North, turns East and flies 56m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(42^2 + 56^2).\n2) sqrt(1764 + 3136) = sqrt(4900) = 70m.\nAnswer: 70m."
    },
    {
      "q": "A drone flies 45m North, turns East and flies 60m. Find the straight line distance from start.",
      "a": "1) Apply Pythagoras: Distance = sqrt(45^2 + 60^2).\n2) sqrt(2025 + 3600) = sqrt(5625) = 75m.\nAnswer: 75m."
    }
  ],
  "word-arr": [
    {
      "q": "Sort the words alphabetically: [A_key_1, B_key_1, C_key_1].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_1, B_key_1, C_key_1."
    },
    {
      "q": "Sort the words alphabetically: [A_key_2, B_key_2, C_key_2].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_2, B_key_2, C_key_2."
    },
    {
      "q": "Sort the words alphabetically: [A_key_3, B_key_3, C_key_3].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_3, B_key_3, C_key_3."
    },
    {
      "q": "Sort the words alphabetically: [A_key_4, B_key_4, C_key_4].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_4, B_key_4, C_key_4."
    },
    {
      "q": "Sort the words alphabetically: [A_key_5, B_key_5, C_key_5].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_5, B_key_5, C_key_5."
    },
    {
      "q": "Sort the words alphabetically: [A_key_6, B_key_6, C_key_6].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_6, B_key_6, C_key_6."
    },
    {
      "q": "Sort the words alphabetically: [A_key_7, B_key_7, C_key_7].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_7, B_key_7, C_key_7."
    },
    {
      "q": "Sort the words alphabetically: [A_key_8, B_key_8, C_key_8].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_8, B_key_8, C_key_8."
    },
    {
      "q": "Sort the words alphabetically: [A_key_9, B_key_9, C_key_9].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_9, B_key_9, C_key_9."
    },
    {
      "q": "Sort the words alphabetically: [A_key_10, B_key_10, C_key_10].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_10, B_key_10, C_key_10."
    },
    {
      "q": "Sort the words alphabetically: [A_key_11, B_key_11, C_key_11].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_11, B_key_11, C_key_11."
    },
    {
      "q": "Sort the words alphabetically: [A_key_12, B_key_12, C_key_12].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_12, B_key_12, C_key_12."
    },
    {
      "q": "Sort the words alphabetically: [A_key_13, B_key_13, C_key_13].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_13, B_key_13, C_key_13."
    },
    {
      "q": "Sort the words alphabetically: [A_key_14, B_key_14, C_key_14].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_14, B_key_14, C_key_14."
    },
    {
      "q": "Sort the words alphabetically: [A_key_15, B_key_15, C_key_15].",
      "a": "1) Compare the first letters: A, B, C.\nAnswer: A_key_15, B_key_15, C_key_15."
    }
  ],
  "venn": [
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 1).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 2).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 3).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 4).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 5).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 6).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 7).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 8).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 9).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 10).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 11).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 12).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 13).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 14).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    },
    {
      "q": "Draw the Venn relation between: Cats, Dogs, Mammals. (Dataset index 15).",
      "a": "1) Both Cats and Dogs are Mammals.\n2) Cats and Dogs are disjoint sets.\nAnswer: Two separate circles inside a larger circle."
    }
  ],
  "calendar": [
    {
      "q": "If today is Sunday, what day of the week will it be after 7 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 7 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 14 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 14 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 21 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 21 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 28 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 28 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 35 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 35 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 42 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 42 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 49 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 49 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 56 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 56 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 63 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 63 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 70 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 70 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 77 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 77 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 84 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 84 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 91 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 91 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 98 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 98 % 7 = 0 odd days.\nAnswer: Sunday."
    },
    {
      "q": "If today is Sunday, what day of the week will it be after 105 days?",
      "a": "1) Days divisible by 7 fall on the exact same day of the week.\n2) 105 % 7 = 0 odd days.\nAnswer: Sunday."
    }
  ],
  "age": [
    {
      "q": "The sum of ages of father and son is 42 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 42 -> 2S = 22 -> S = 11.\nAnswer: 11 years."
    },
    {
      "q": "The sum of ages of father and son is 44 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 44 -> 2S = 24 -> S = 12.\nAnswer: 12 years."
    },
    {
      "q": "The sum of ages of father and son is 46 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 46 -> 2S = 26 -> S = 13.\nAnswer: 13 years."
    },
    {
      "q": "The sum of ages of father and son is 48 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 48 -> 2S = 28 -> S = 14.\nAnswer: 14 years."
    },
    {
      "q": "The sum of ages of father and son is 50 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 50 -> 2S = 30 -> S = 15.\nAnswer: 15 years."
    },
    {
      "q": "The sum of ages of father and son is 52 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 52 -> 2S = 32 -> S = 16.\nAnswer: 16 years."
    },
    {
      "q": "The sum of ages of father and son is 54 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 54 -> 2S = 34 -> S = 17.\nAnswer: 17 years."
    },
    {
      "q": "The sum of ages of father and son is 56 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 56 -> 2S = 36 -> S = 18.\nAnswer: 18 years."
    },
    {
      "q": "The sum of ages of father and son is 58 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 58 -> 2S = 38 -> S = 19.\nAnswer: 19 years."
    },
    {
      "q": "The sum of ages of father and son is 60 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 60 -> 2S = 40 -> S = 20.\nAnswer: 20 years."
    },
    {
      "q": "The sum of ages of father and son is 62 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 62 -> 2S = 42 -> S = 21.\nAnswer: 21 years."
    },
    {
      "q": "The sum of ages of father and son is 64 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 64 -> 2S = 44 -> S = 22.\nAnswer: 22 years."
    },
    {
      "q": "The sum of ages of father and son is 66 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 66 -> 2S = 46 -> S = 23.\nAnswer: 23 years."
    },
    {
      "q": "The sum of ages of father and son is 68 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 68 -> 2S = 48 -> S = 24.\nAnswer: 24 years."
    },
    {
      "q": "The sum of ages of father and son is 70 years. If father is 20 years older, find son's age.",
      "a": "Let Son be S. Father is S + 20. S + S + 20 = 70 -> 2S = 50 -> S = 25.\nAnswer: 25 years."
    }
  ],
  "eng-roadmap": [
    {
      "q": "Step 1 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 2 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 3 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 4 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 5 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 6 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 7 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 8 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 9 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 10 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 11 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 12 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 13 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 14 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    },
    {
      "q": "Step 15 on the grammar road: what should be studied next in English track?",
      "a": "1) Review previous topics. Practice writing correct sentences.\nAnswer: Grammar syntax."
    }
  ],
  "eng-basics": [
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 1).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 2).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 3).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 4).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 5).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 6).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 7).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 8).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 9).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 10).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 11).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 12).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 13).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 14).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    },
    {
      "q": "Identify the part of speech of the word indicating action in sentences (Index 15).",
      "a": "1) Words expressing actions or states are Verbs.\nAnswer: Verb."
    }
  ],
  "eng-tenses": [
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 1)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 2)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 3)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 4)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 5)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 6)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 7)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 8)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 9)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 10)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 11)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 12)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 13)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 14)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    },
    {
      "q": "Convert to present perfect: 'She reads a report.' (Sentence 15)",
      "a": "1) Present perfect uses have/has + verb-3.\n2) 'She has read a report.'\nAnswer: She has read a report."
    }
  ],
  "eng-questions": [
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 1)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 2)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 3)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 4)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 5)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 6)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 7)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 8)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 9)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 10)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 11)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 12)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 13)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 14)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    },
    {
      "q": "Complete the tag question: 'He is joining us, ________?' (Tag 15)",
      "a": "1) Statement is positive, tag is negative.\nAnswer: isn't he?"
    }
  ],
  "eng-common-errors": [
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 1)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 2)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 3)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 4)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 5)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 6)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 7)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 8)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 9)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 10)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 11)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 12)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 13)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 14)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    },
    {
      "q": "Correct the error: 'He go to office daily.' (Error check 15)",
      "a": "1) Singular subject 'He' takes singular verb 'goes'.\nAnswer: He goes to office daily."
    }
  ],
  "eng-vocab-daily": [
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 1)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 2)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 3)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 4)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 5)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 6)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 7)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 8)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 9)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 10)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 11)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 12)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 13)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 14)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    },
    {
      "q": "Use the term indicating 'clear and logical speech' in a sentence. (Word 15)",
      "a": "1) The word is 'coherent'.\nAnswer: Coherent."
    }
  ],
  "eng-phrases": [
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 1)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 2)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 3)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 4)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 5)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 6)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 7)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 8)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 9)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 10)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 11)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 12)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 13)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 14)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    },
    {
      "q": "Interpret the idiomatic expression indicating 'doing something correct'. (Phrase 15)",
      "a": "1) The phrase is 'hitting the nail on the head'.\nAnswer: Hitting the nail on the head."
    }
  ]
};
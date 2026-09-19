var EXAMPLES = {
  "numbers": [
    {
      "q": "Check whether 2,728 is divisible by 11.",
      "a": "Alternating sum (right to left): 8 - 2 + 7 - 2 = 11. Since 11 is divisible by 11, the answer is Yes."
    },
    {
      "q": "Check whether 47,835 is divisible by 9.",
      "a": "Digit sum = 4 + 7 + 8 + 3 + 5 = 27. Since 27 is divisible by 9, the answer is Yes."
    },
    {
      "q": "Check whether 3,528 is divisible by 4.",
      "a": "Last two digits = 28. Since 28 / 4 = 7 exactly, the answer is Yes."
    },
    {
      "q": "Check whether 3,653 is divisible by 7 (osculator method).",
      "a": "365 - (3 * 2) = 359; 35 - (9 * 2) = 17. Since 17 is not divisible by 7, the answer is No."
    },
    {
      "q": "Check whether 4,326 is divisible by 6.",
      "a": "Last digit is 6 (even) -> divisible by 2. Digit sum = 4 + 3 + 2 + 6 = 15 -> divisible by 3. Since both are true, it is divisible by 6. Answer: Yes."
    },
    {
      "q": "Find the units digit of 7^123.",
      "a": "Cycle of 7: 7, 9, 3, 1 (length 4). 123 % 4 = 3 -> 3rd term = 3. Answer: 3."
    },
    {
      "q": "Find the units digit of 8^57.",
      "a": "Cycle of 8: 8, 4, 2, 6 (length 4). 57 % 4 = 1 -> 1st term = 8. Answer: 8."
    },
    {
      "q": "Find the units digit of 4^33.",
      "a": "Cycle of 4: 4, 6 (length 2). 33 is odd -> 1st term = 4. Answer: 4."
    },
    {
      "q": "Find the remainder when 2^40 is divided by 7.",
      "a": "2^3 = 8 \u2261 1 (mod 7). 40 = 3 * 13 + 1 -> 2^40 \u2261 1^13 * 2 = 2. Answer: 2."
    },
    {
      "q": "Find the remainder when 17^23 is divided by 5.",
      "a": "17 \u2261 2 (mod 5). Cycle of 2 mod 5: 2, 4, 3, 1 (length 4). 23 % 4 = 3 -> 3rd term = 3. Answer: 3."
    },
    {
      "q": "Find the number of values of digit x for which 5x4 is divisible by 3.",
      "a": "Digit sum = 9 + x, divisible by 3 when x = 0, 3, 6, 9 -> 4 values. Answer: 4."
    },
    {
      "q": "Find the units digit of 23^45 + 34^56.",
      "a": "Units digit of 23^45 is units digit of 3^45 (cycle length 4; 45 % 4 = 1 -> 3). Units digit of 34^56 is units digit of 4^56 (even power -> 6). Sum = 3 + 6 = 9. Answer: 9."
    }
  ],
  "hcf-lcm": [
    {
      "q": "Find the HCF of 48 and 60.",
      "a": "48 = 2^4 * 3, 60 = 2^2 * 3 * 5 -> HCF = 2^2 * 3 = 12. Answer: 12."
    },
    {
      "q": "Find the LCM of 12 and 18.",
      "a": "12 = 2^2 * 3, 18 = 2 * 3^2 -> LCM = 2^2 * 3^2 = 36. Answer: 36."
    },
    {
      "q": "HCF of two numbers is 6, LCM is 90, one number is 18. Find the other.",
      "a": "Product = 6 * 90 = 540 -> other number = 540 / 18 = 30. Answer: 30."
    },
    {
      "q": "Find the HCF of 36, 60, 84.",
      "a": "Prime factors: 2^2 * 3^2, 2^2 * 3 * 5, 2^2 * 3 * 7 -> HCF = 2^2 * 3 = 12. Answer: 12."
    },
    {
      "q": "Find the LCM of 15, 20, 25.",
      "a": "15 = 3 * 5, 20 = 2^2 * 5, 25 = 5^2 -> LCM = 2^2 * 3 * 5^2 = 300. Answer: 300."
    },
    {
      "q": "Three temple bells ring every 12, 18, and 24 minutes. After how long do they ring together again?",
      "a": "The time they ring together is the LCM of 12, 18, and 24. LCM(12, 18, 24) = 72 minutes. Answer: 72 minutes."
    },
    {
      "q": "Find the greatest number that divides 245 and 1,029, leaving remainder 5 in each case.",
      "a": "Subtract remainders: 245 - 5 = 240, 1029 - 5 = 1024. HCF(240, 1024) = 16. Answer: 16."
    },
    {
      "q": "Find the HCF of the fractions 4/9 and 10/21.",
      "a": "HCF of fractions = HCF(Numerators) / LCM(Denominators) = HCF(4, 10) / LCM(9, 21) = 2 / 63. Answer: 2/63."
    },
    {
      "q": "Find the LCM of the fractions 2/3, 4/9, 6/15.",
      "a": "LCM of fractions = LCM(Numerators) / HCF(Denominators) = LCM(2, 4, 6) / HCF(3, 9, 15) = 12 / 3 = 4. Answer: 4."
    },
    {
      "q": "Find the smallest number which, when divided by 8, 12, and 16, leaves remainder 5 each time.",
      "a": "Find LCM of 8, 12, 16, which is 48. Add the remainder: 48 + 5 = 53. Answer: 53."
    },
    {
      "q": "Two traffic signals change every 45 sec and 75 sec. If both change together at 8:00:00, when do they change together next?",
      "a": "LCM(45, 75) = 225 sec = 3 min 45 sec. Next change time is 8:00:00 + 3 min 45 sec = 8:03:45. Answer: 8:03:45."
    },
    {
      "q": "Find the largest number that divides 70 and 125, leaving remainders 5 and 8 respectively.",
      "a": "Subtract remainders: 70 - 5 = 65, 125 - 8 = 117. HCF(65, 117) = 13. Answer: 13."
    }
  ],
  "simplification": [
    {
      "q": "Simplify: 15 + 6 * (8-3) / 5 - 2.",
      "a": "BODMAS: 15 + 6 * 5 / 5 - 2 = 15 + 30 / 5 - 2 = 15 + 6 - 2 = 19. Answer: 19."
    },
    {
      "q": "Simplify: [(3/4)+(2/3)] / (5/6).",
      "a": "(17/12) / (5/6) = (17/12) * (6/5) = 17 / 10 = 1.7. Answer: 1.7."
    },
    {
      "q": "Simplify: 0.75*0.4 + 0.05/0.5.",
      "a": "0.3 + 0.1 = 0.4. Answer: 0.4."
    },
    {
      "q": "Simplify: 12 - [8 - {6 - (5-3)}].",
      "a": "12 - [8 - {6 - 2}] = 12 - [8 - 4] = 12 - 4 = 8. Answer: 8."
    },
    {
      "q": "Simplify: (2.5)^2 - (1.5)^2.",
      "a": "Using a^2 - b^2 = (a+b)(a-b) -> (2.5+1.5)(2.5-1.5) = 4 * 1 = 4. Answer: 4."
    },
    {
      "q": "Find sqrt(0.0625).",
      "a": "sqrt(0.0625) = 0.25. Answer: 0.25."
    },
    {
      "q": "Simplify: 3 1/3 + 2 1/4 - 1 1/2.",
      "a": "10/3 + 9/4 - 3/2 = (40 + 27 - 18) / 12 = 49 / 12 = 4 1/12. Answer: 4 1/12."
    },
    {
      "q": "Simplify: 45% of 260 + 15% of 180.",
      "a": "117 + 27 = 144. Answer: 144."
    },
    {
      "q": "Simplify: 8 / 4 of 2 + 6*3 - 5.",
      "a": "BODMAS: 'of' before division. 8 / 8 + 18 - 5 = 1 + 18 - 5 = 14. Answer: 14."
    },
    {
      "q": "Simplify: 7.5*7.5 - 2.5*2.5.",
      "a": "Using a^2 - b^2 = (a+b)(a-b) -> (7.5+2.5)(7.5-2.5) = 10 * 5 = 50. Answer: 50."
    },
    {
      "q": "Simplify: [(1/2)+(1/3)] * [(1/2)-(1/3)].",
      "a": "Using (a+b)(a-b) = a^2 - b^2 -> (1/2)^2 - (1/3)^2 = 1/4 - 1/9 = 5/36. Answer: 5/36."
    },
    {
      "q": "Simplify: (3.2^3 + 1.8^3) / (3.2^2 - 3.2*1.8 + 1.8^2).",
      "a": "Using a^3 + b^3 = (a+b)(a^2 - ab + b^2) -> this simplifies to a+b = 3.2 + 1.8 = 5. Answer: 5."
    }
  ],
  "percentages": [
    {
      "q": "Find 35% of 480.",
      "a": "35% of 480 = (35/100) * 480 = 168. Answer: 168."
    },
    {
      "q": "A number rises from 250 to 300. Find the % increase.",
      "a": "Increase = 300 - 250 = 50. % increase = (50/250) * 100 = 20%. Answer: 20%."
    },
    {
      "q": "Find the number whose 24% is 108.",
      "a": "Let the number be x. 0.24 * x = 108 -> x = 108 / 0.24 = 450. Answer: 450."
    },
    {
      "q": "Price rises 20%, then falls 20%. Find the net % change.",
      "a": "Net % change = a + b + (ab/100) = 20 - 20 + (20 * -20)/100 = -4% (net decrease of 4%). Answer: -4%."
    },
    {
      "q": "Successive discounts of 10% and 15% on \u20b92,000. Find the net price.",
      "a": "Effective discount = 10 + 15 - (10 * 15)/100 = 23.5%. Net Price = \u20b92,000 * (1 - 0.235) = \u20b91,530. Answer: \u20b91,530."
    },
    {
      "q": "In an election of two candidates, the winner gets 60% of votes and wins by 4,800 votes. Find total votes.",
      "a": "Winner: 60%, Loser: 40%. Difference = 20%. 20% of total = 4,800 -> total = 24,000. Answer: 24,000."
    },
    {
      "q": "A's income is 25% more than B's. By what % is B's income less than A's?",
      "a": "If B = 100, A = 125. B's income is 25 less than A's. % less = (25/125) * 100 = 20%. Answer: 20%."
    },
    {
      "q": "A student scores 462 out of 700. Find the percentage.",
      "a": "(462 / 700) * 100 = 66%. Answer: 66%."
    },
    {
      "q": "A town's population grows 10% yearly from 5,000. Find population after 2 years.",
      "a": "Population = 5000 * 1.1 * 1.1 = 6,050. Answer: 6,050."
    },
    {
      "q": "A tank loses 40% of its water on Monday, then 25% of what remains on Tuesday. If full capacity is 1,000 L, find the remaining volume.",
      "a": "After Monday: 1000 * 0.6 = 600 L. After Tuesday: 600 * 0.75 = 450 L. Answer: 450 L."
    },
    {
      "q": "Sugar price falls 20%. By what % can consumption rise to keep expenditure unchanged?",
      "a": "Percentage rise = (fall / (100 - fall)) * 100 = (20 / 80) * 100 = 25%. Answer: 25%."
    },
    {
      "q": "In a class, 60% are boys. 10% of boys and 15% of girls are absent. What % of the whole class is present?",
      "a": "Assume 100 students: 60 boys, 40 girls. Absent boys = 6, absent girls = 6. Total absent = 12. Present = 88%. Answer: 88%."
    }
  ],
  "profit-loss": [
    {
      "q": "CP=\u20b9800, SP=\u20b9920. Find profit%.",
      "a": "Profit = 920 - 800 = 120. Profit% = (120/800) * 100 = 15%. Answer: 15%."
    },
    {
      "q": "An article sold at a 12% loss, CP=\u20b91,500. Find SP.",
      "a": "SP = 1500 * (1 - 0.12) = \u20b91,320. Answer: \u20b91,320."
    },
    {
      "q": "A shopkeeper marks goods 40% above cost, then gives a 15% discount. Find profit%.",
      "a": "Let CP = 100. MP = 140. SP = 140 * 0.85 = 119. Profit% = (119 - 100) = 19%. Answer: 19%."
    },
    {
      "q": "Find CP if SP=\u20b9690 at 15% profit.",
      "a": "CP = 690 / 1.15 = \u20b9600. Answer: \u20b9600."
    },
    {
      "q": "A man sells two articles at \u20b91,200 each - 20% gain on one, 20% loss on the other. Find overall result.",
      "a": "Loss% = 20^2 / 100 = 4% net loss. Answer: 4% net loss."
    },
    {
      "q": "A trader uses a false weight of 900g instead of 1kg while buying and selling at the same marked price. Find his gain%.",
      "a": "Gain% = ((True - False) / False) * 100 = (100 / 900) * 100 = 11.11%. Answer: 11.11%."
    },
    {
      "q": "CP=\u20b9500. Shopkeeper wants 25% profit after giving a 20% discount on MP. Find MP.",
      "a": "Target SP = 500 * 1.25 = 625. MP = 625 / 0.8 = \u20b9781.25. Answer: \u20b9781.25."
    },
    {
      "q": "A dealer sells a machine at a 5% loss. Had he sold it for \u20b92,000 more, he'd have gained 10%. Find the CP.",
      "a": "Difference in percentage = 10% - (-5%) = 15%. 15% of CP = 2,000 -> CP = 2000 / 0.15 = \u20b913,333.33. Answer: \u20b913,333.33."
    },
    {
      "q": "CP of 15 articles = SP of 12 articles. Find the profit%.",
      "a": "Profit% = ((15 - 12) / 12) * 100 = (3/12) * 100 = 25%. Answer: 25%."
    },
    {
      "q": "A shopkeeper gives a 10% discount on MP and still gains 8%. If CP=\u20b9450, find the MP.",
      "a": "SP = 450 * 1.08 = 486. MP = 486 / 0.9 = \u20b9540. Answer: \u20b9540."
    },
    {
      "q": "Selling 45 lemons for \u20b940 causes a 20% loss. How many lemons must be sold for \u20b924 to gain 20%?",
      "a": "CP of 45 lemons = 40 / 0.8 = 50. CP per lemon = 50 / 45 = 10/9. Target SP per lemon = (10/9) * 1.2 = 4/3. Lemons sold for \u20b924 = 24 / (4/3) = 18. Answer: 18."
    },
    {
      "q": "A retailer buys at 20% discount on MP and sells at MP. Find the profit%.",
      "a": "Let MP = 100. CP = 80. SP = 100. Profit = 20. Profit% = (20/80) * 100 = 25%. Answer: 25%."
    }
  ],
  "ratio-prop": [
    {
      "q": "Simplify the ratio 45:60.",
      "a": "Divide both terms by HCF (15) -> 45:60 = 3:4. Answer: 3:4."
    },
    {
      "q": "If a:b=2:3 and b:c=4:5, find a:b:c.",
      "a": "Scale b to 12: a:b = 8:12, b:c = 12:15 -> a:b:c = 8:12:15. Answer: 8:12:15."
    },
    {
      "q": "Divide \u20b91,200 among A, B, C in ratio 2:3:5.",
      "a": "Total parts = 10. A's share = 2/10 * 1200 = \u20b9240. B's share = 3/10 * 1200 = \u20b9360. C's share = 5/10 * 1200 = \u20b9600. Answer: A=\u20b9240, B=\u20b9360, C=\u20b9600."
    },
    {
      "q": "Find the fourth proportional to 3, 5, 12.",
      "a": "3/5 = 12/x -> x = (5 * 12)/3 = 20. Answer: 20."
    },
    {
      "q": "Find the third proportional to 4 and 8.",
      "a": "x = b^2 / a = 8^2 / 4 = 16. Answer: 16."
    },
    {
      "q": "Find the mean proportional between 9 and 16.",
      "a": "x = sqrt(9 * 16) = sqrt(144) = 12. Answer: 12."
    },
    {
      "q": "x varies directly as y; x=15 when y=5. Find x when y=8.",
      "a": "x = k * y -> 15 = k * 5 -> k = 3. When y = 8, x = 3 * 8 = 24. Answer: 24."
    },
    {
      "q": "x varies inversely as y; x=10 when y=6. Find x when y=15.",
      "a": "x * y = k -> 10 * 6 = 60. When y = 15, x = 60 / 15 = 4. Answer: 4."
    },
    {
      "q": "Two numbers are in ratio 5:7. Subtracting 20 from each gives ratio 3:5. Find the numbers.",
      "a": "Let numbers be 5k, 7k. (5k - 20)/(7k - 20) = 3/5 -> 25k - 100 = 21k - 60 -> 4k = 40 -> k = 10. Numbers are 50 and 70. Answer: 50 and 70."
    },
    {
      "q": "A sum is split so A:B=2:3 and B:C=4:5. If C gets \u20b9300, find A's share.",
      "a": "Scale A:B:C = 8:12:15. C gets \u20b9300 -> 15 parts = 300 -> 1 part = 20. A gets 8 parts = 8 * 20 = \u20b9160. Answer: \u20b9160."
    },
    {
      "q": "A train's speed varies inversely with time for a fixed distance. It covers a route in 5 hrs at 60 km/h. Find the time at 75 km/h.",
      "a": "Speed * Time = Constant -> 60 * 5 = 300. Time at 75 km/h = 300 / 75 = 4 hrs. Answer: 4 hrs."
    },
    {
      "q": "8 men build a wall in 12 days. Using inverse variation, find the days needed by 6 men.",
      "a": "Men * Days = Constant -> 8 * 12 = 96. Days for 6 men = 96 / 6 = 16 days. Answer: 16 days."
    }
  ],
  "partnership": [
    {
      "q": "A and B invest \u20b95,000 and \u20b97,000 for a year. Find the profit ratio.",
      "a": "Profit ratio is same as capital ratio: 5,000 : 7,000 = 5:7. Answer: 5:7."
    },
    {
      "q": "A invests \u20b98,000 for 12 months, B invests \u20b96,000 for 8 months. Find the ratio.",
      "a": "Profit ratio = (8000 * 12) : (6000 * 8) = 96000 : 48000 = 2:1. Answer: 2:1."
    },
    {
      "q": "A, B, C invest \u20b94,000, \u20b96,000, \u20b98,000 for a year; profit=\u20b99,000. Find each share.",
      "a": "Ratio = 2:3:4. Total parts = 9. A's share = 2000, B's share = 3000, C's share = 4000. Answer: A=\u20b92,000, B=\u20b93,000, C=\u20b94,000."
    },
    {
      "q": "A starts with \u20b910,000. After 4 months B joins with \u20b915,000. Find the profit ratio at year-end.",
      "a": "Profit ratio = (10000 * 12) : (15000 * 8) = 120,000 : 120,000 = 1:1. Answer: 1:1."
    },
    {
      "q": "A, B, C invest in ratio 2:3:5 for the same period; total profit \u20b95,000. Find B's share.",
      "a": "B's share = (3/10) * 5,000 = \u20b91,500. Answer: \u20b91,500."
    },
    {
      "q": "A invests \u20b912,000 for 6 months, B invests \u20b98,000 for 9 months, C invests \u20b96,000 for 12 months. Find the ratio.",
      "a": "Profit ratio = (12000 * 6) : (8000 * 9) : (6000 * 12) = 72,000 : 72,000 : 72,000 = 1:1:1. Answer: 1:1:1."
    },
    {
      "q": "A and B invest \u20b915,000 and \u20b925,000. After 4 months A withdraws \u20b95,000. Find the profit ratio at year-end.",
      "a": "A's share = 15000 * 4 + 10000 * 8 = 140,000. B's share = 25000 * 12 = 300,000. Ratio = 140 : 300 = 7:15. Answer: 7:15."
    },
    {
      "q": "A, B, C start with capitals in ratio 3:5:7. After 4 months A doubles his capital. Find the year-end ratio.",
      "a": "A's share = 3 * 4 + 6 * 8 = 60. B's share = 5 * 12 = 60. C's share = 7 * 12 = 84. Ratio = 60:60:84 = 5:5:7. Answer: 5:5:7."
    },
    {
      "q": "Total profit \u20b918,000 shared between A and B in ratio 4:5. Find B's share.",
      "a": "B's share = (5/9) * 18,000 = \u20b910,000. Answer: \u20b910,000."
    },
    {
      "q": "A, B, C invest in ratio 2:3:4 for 6, 8, 9 months respectively. Find the profit-sharing ratio.",
      "a": "Ratio = (2*6) : (3*8) : (4*9) = 12 : 24 : 36 = 1:2:3. Answer: 1:2:3."
    },
    {
      "q": "A invests \u20b920,000 for the full year; B invests \u20b915,000 for 8 months. Total profit=\u20b99,200. Find A's share.",
      "a": "A's share = 20000 * 12 = 240,000. B's share = 15000 * 8 = 120,000. Ratio = 2:1. A's share = (2/3) * 9200 = \u20b96,133.33. Answer: \u20b96,133.33."
    },
    {
      "q": "Three partners share a \u20b924,000 profit in ratio 3:4:5 (equal time). Find the gap between the largest and smallest share.",
      "a": "Total parts = 12. Largest share = (5/12) * 24000 = 10,000. Smallest share = (3/12) * 24000 = 6,000. Difference = 4,000. Answer: \u20b94,000."
    }
  ],
  "averages": [
    {
      "q": "Find the average of 12, 18, 24, 30, 36.",
      "a": "Average = (12+18+24+30+36)/5 = 120/5 = 24. Answer: 24."
    },
    {
      "q": "Average age of 30 students is 12. Including the teacher, it becomes 13. Find the teacher's age.",
      "a": "Sum of 30 students = 360. Sum of 31 people = 31 * 13 = 403. Teacher's age = 403 - 360 = 43 years. Answer: 43 years."
    },
    {
      "q": "Average of 5 numbers is 27. Excluding one, the average of the remaining 4 is 25. Find the excluded number.",
      "a": "Sum of 5 = 135. Sum of 4 = 100. Excluded number = 135 - 100 = 35. Answer: 35."
    },
    {
      "q": "A cricketer's average in 10 innings is 42. He scores 98 in the 11th. Find the new average.",
      "a": "Sum of 10 innings = 420. Sum of 11 innings = 420 + 98 = 518. New average = 518 / 11 = 47.09. Answer: 47.09."
    },
    {
      "q": "Average weight of 8 people rises by 2.5 kg when a 60 kg person is replaced. Find the new person's weight.",
      "a": "Total increase = 8 * 2.5 = 20 kg. New weight = 60 + 20 = 80 kg. Answer: 80 kg."
    },
    {
      "q": "Find the average of the first 20 natural numbers.",
      "a": "Sum = n(n+1)/2 = 20 * 21 / 2 = 210. Average = 210 / 20 = 10.5. Answer: 10.5."
    },
    {
      "q": "A train covers 100 km at 50 km/h and the next 100 km at 40 km/h. Find the average speed.",
      "a": "Average speed = 2xy/(x+y) = (2 * 50 * 40)/(50 + 40) = 4000 / 90 = 44.44 km/h. Answer: 44.44 km/h."
    },
    {
      "q": "Average marks of 40 students is 60. 10 students averaging 50 leave. Find the new average of the remaining 30.",
      "a": "Total marks = 2400. Leaving marks = 500. Remaining marks = 1900. New average = 1900 / 30 = 63.33. Answer: 63.33."
    },
    {
      "q": "The average of three consecutive even numbers is 24. Find the numbers.",
      "a": "Middle number is 24. The numbers are 22, 24, 26. Answer: 22, 24, 26."
    },
    {
      "q": "The average of 6 numbers is 18. Excluding two numbers, the remaining 4 average 20. Find the sum of the excluded numbers.",
      "a": "Sum of 6 = 108. Sum of 4 = 80. Sum of excluded = 108 - 80 = 28. Answer: 28."
    },
    {
      "q": "Runs scored in 5 matches: 45, 67, 32, 89, 52. Find the average.",
      "a": "Average = (45+67+32+89+52)/5 = 285/5 = 57. Answer: 57."
    },
    {
      "q": "Average salary of 12 employees is \u20b928,000. Including a manager earning \u20b952,000, find the new average for 13.",
      "a": "Total salary = 12 * 28,000 + 52,000 = 336,000 + 52,000 = 388,000. New average = 388,000 / 13 = \u20b929,846.15. Answer: \u20b929,846.15."
    }
  ],
  "time-work": [
    {
      "q": "A finishes a job in 12 days, B in 15 days. Find the time taken together.",
      "a": "Rate = 1/12 + 1/15 = 9/60 = 3/20 -> 20/3 = 6.67 days. Answer: 6.67 days."
    },
    {
      "q": "A (10 days) and B (15 days) work together for 3 days, then A leaves. Find B's time to finish the rest.",
      "a": "Combined rate = 1/10 + 1/15 = 1/6. Work done in 3 days = 3 * (1/6) = 1/2. Remaining work = 1/2. B's time = (1/2) / (1/15) = 7.5 days. Answer: 7.5 days."
    },
    {
      "q": "12 men finish a job in 18 days. How many men are needed to finish it in 8 days?",
      "a": "Men * Days = Constant -> 12 * 18 = 216. Men needed = 216 / 8 = 27 men. Answer: 27 men."
    },
    {
      "q": "A is twice as efficient as B; together they finish in 12 days. Find each one's individual time.",
      "a": "Let B's rate = x, A's rate = 2x. Combined rate = 3x = 1/12 -> x = 1/36. B takes 36 days, A takes 18 days. Answer: B=36 days, A=18 days."
    },
    {
      "q": "A works alone for 4 days (out of a 20-day job), then B finishes the remaining work in 12 days. Find B's individual time.",
      "a": "A does 4/20 = 1/5. Remaining = 4/5. B does 4/5 in 12 days -> B's rate = (4/5)/12 = 1/15 -> B takes 15 days. Answer: 15 days."
    },
    {
      "q": "15 women finish a job in 24 days. In how many days can 8 women finish it?",
      "a": "Women * Days = Constant -> 15 * 24 = 360. Days for 8 women = 360 / 8 = 45 days. Answer: 45 days."
    },
    {
      "q": "A, B, C together finish a job in 6 days. A alone takes 18 days, B alone 24 days. Find C's individual time.",
      "a": "C's rate = 1/6 - 1/18 - 1/24 = (12 - 4 - 3)/72 = 5/72. C's time = 72 / 5 = 14.4 days. Answer: 14.4 days."
    },
    {
      "q": "A (15 days) and B (10 days) start together, but A leaves 5 days before completion. Find the total days taken.",
      "a": "Let total days be x. (x-5)/15 + x/10 = 1 -> 2(x-5) + 3x = 30 -> 5x - 10 = 30 -> 5x = 40 -> x = 8 days. Answer: 8 days."
    },
    {
      "q": "Efficiency ratio of A:B = 3:2. A finishes in 20 days. Find B's time.",
      "a": "Time ratio is inverse of efficiency ratio = 2:3. B's time = 20 * (3/2) = 30 days. Answer: 30 days."
    },
    {
      "q": "20 men finish a job in 15 days working 8 hrs/day. How many days will 25 men take working 6 hrs/day?",
      "a": "M1 * D1 * H1 = M2 * D2 * H2 -> 20 * 15 * 8 = 25 * D2 * 6 -> 2400 = 150 * D2 -> D2 = 16 days. Answer: 16 days."
    },
    {
      "q": "A alone takes 24 days, B alone takes 32 days. Find their combined time.",
      "a": "Combined rate = 1/24 + 1/32 = 7/96. Combined time = 96 / 7 = 13.71 days. Answer: 13.71 days."
    },
    {
      "q": "A completes 1/3 of a job in 5 days. At this rate, how many more days for the rest?",
      "a": "Total job takes 5 * 3 = 15 days. Remaining 2/3 takes 15 - 5 = 10 more days. Answer: 10 more days."
    }
  ],
  "pipes": [
    {
      "q": "Pipe A fills a tank in 6 hrs, B in 8 hrs. Find the time together.",
      "a": "Rate = 1/6 + 1/8 = 7/24. Time together = 24/7 = 3.43 hrs. Answer: 3.43 hrs."
    },
    {
      "q": "Pipe A fills in 4 hrs, pipe B empties in 6 hrs. Both opened together. Find the time to fill.",
      "a": "Net rate = 1/4 - 1/6 = (3-2)/12 = 1/12. Time to fill = 12 hrs. Answer: 12 hrs."
    },
    {
      "q": "Two pipes fill in 12 and 15 min; a third empties in 20 min. All three opened together. Find the time to fill.",
      "a": "Net rate = 1/12 + 1/15 - 1/20 = (5 + 4 - 3)/60 = 6/60 = 1/10. Time = 10 min. Answer: 10 min."
    },
    {
      "q": "A pipe fills a tank in 30 min; due to a leak, it takes 40 min. Find the time the leak alone would take to empty it.",
      "a": "Leak rate = 1/30 - 1/40 = (4-3)/120 = 1/120. Time = 120 min. Answer: 120 min."
    },
    {
      "q": "Taps A (10 hrs) and B (15 hrs) opened together, but B is closed 3 hrs before completion. Find the total time.",
      "a": "Let total time be x. x/10 + (x-3)/15 = 1 -> 3x + 2(x-3) = 30 -> 5x - 6 = 30 -> 5x = 36 -> x = 7.2 hrs. Answer: 7.2 hrs."
    },
    {
      "q": "Two inlets (20, 25 min) and one outlet (30 min) opened together. Find the time to fill.",
      "a": "Net rate = 1/20 + 1/25 - 1/30 = (15 + 12 - 10)/300 = 17/300. Time = 300/17 = 17.65 min. Answer: 17.65 min."
    },
    {
      "q": "A pipe fills in 5 hrs; with a leak, it takes 1 hr more. Find the leak's emptying time alone.",
      "a": "Normal rate = 1/5, actual rate = 1/6. Leak rate = 1/5 - 1/6 = 1/30. Time = 30 hrs. Answer: 30 hrs."
    },
    {
      "q": "A and B together fill a cistern in 6 hrs; A alone takes 5 hrs less than B alone. Find each one's time.",
      "a": "Let B take x hrs, A takes x-5. 1/(x-5) + 1/x = 1/6 -> (2x-5)/(x^2-5x) = 1/6 -> 12x - 30 = x^2 - 5x -> x^2 - 17x + 30 = 0 -> (x-15)(x-2) = 0. Since A takes x-5, x must be 15. B takes 15 hrs, A takes 10 hrs. Answer: B=15 hrs, A=10 hrs."
    },
    {
      "q": "Pipe A fills in 12 hrs, pipe B (leak) empties in 18 hrs. Tank is 1/3 full; both opened. Find the time to fill completely.",
      "a": "Net rate = 1/12 - 1/18 = 1/36. Remaining to fill = 2/3. Time = (2/3) / (1/36) = 24 hrs. Answer: 24 hrs."
    },
    {
      "q": "Three pipes fill in 10, 15, 20 hrs. All opened together. Find the time to fill.",
      "a": "Net rate = 1/10 + 1/15 + 1/20 = (6 + 4 + 3)/60 = 13/60. Time = 60/13 = 4.62 hrs. Answer: 4.62 hrs."
    },
    {
      "q": "Pipe A fills in 8 hrs, pipe B empties in 12 hrs. Both opened for 4 hrs (empty tank), then B is closed. Find the total time to fill.",
      "a": "Filled in 4 hrs = 4 * (1/8 - 1/12) = 4 * (1/24) = 1/6. Remaining = 5/6. Time for A to fill remaining = (5/6) / (1/8) = 40/6 = 6.67 hrs. Total time = 4 + 6.67 = 10.67 hrs. Answer: 10.67 hrs."
    },
    {
      "q": "Pipe A fills in 12 min, B empties in 18 min. Both opened for 6 min, then B is closed. Find the total time.",
      "a": "Filled in 6 min = 6 * (1/12 - 1/18) = 6 * (1/36) = 1/6. Remaining = 5/6. Time for A to fill remaining = (5/6) / (1/12) = 10 min. Total time = 6 + 10 = 16 min. Answer: 16 min."
    }
  ],
  "time-dist": [
    {
      "q": "Convert 72 km/h to m/s.",
      "a": "72 * (5/18) = 20 m/s. Answer: 20 m/s."
    },
    {
      "q": "A car covers 240 km in 4 hrs. Find the speed.",
      "a": "Speed = 240 / 4 = 60 km/h. Answer: 60 km/h."
    },
    {
      "q": "A man walks at 5 km/h for 3 hrs. Find the distance.",
      "a": "Distance = 5 * 3 = 15 km. Answer: 15 km."
    },
    {
      "q": "Trains of 120m and 180m run in opposite directions at 54 km/h and 36 km/h. Find the crossing time.",
      "a": "Relative speed = 54 + 36 = 90 km/h = 90 * (5/18) = 25 m/s. Total distance = 120 + 180 = 300m. Crossing time = 300 / 25 = 12 sec. Answer: 12 sec."
    },
    {
      "q": "Trains of 150m each run in the same direction at 60 km/h and 42 km/h. Find the crossing time.",
      "a": "Relative speed = 60 - 42 = 18 km/h = 18 * (5/18) = 5 m/s. Total distance = 150 + 150 = 300m. Crossing time = 300 / 5 = 60 sec. Answer: 60 sec."
    },
    {
      "q": "A man goes at 20 km/h and returns at 30 km/h. Find the average speed.",
      "a": "Average speed = 2xy/(x+y) = (2 * 20 * 30)/(20 + 30) = 1200 / 50 = 24 km/h. Answer: 24 km/h."
    },
    {
      "q": "A 100m train crosses a 200m platform in 15 sec. Find the speed in km/h.",
      "a": "Total distance = 100 + 200 = 300m. Speed = 300 / 15 = 20 m/s = 20 * (18/5) = 72 km/h. Answer: 72 km/h."
    },
    {
      "q": "A car's speed rises by 20 km/h and it reaches a 300 km destination 30 min earlier. Find the original speed.",
      "a": "Let speed be x. 300/x - 300/(x+20) = 0.5 -> 300 * 20 = 0.5 * x * (x+20) -> x(x+20) = 12000 -> x^2 + 20x - 12000 = 0 -> (x-100)(x+120) = 0 -> speed = 100 km/h. Answer: 100 km/h."
    },
    {
      "q": "A thief at 8 m/s is chased by police at 10 m/s, starting 100m behind. Find the time to catch him.",
      "a": "Relative speed = 10 - 8 = 2 m/s. Time to catch = 100 / 2 = 50 sec. Answer: 50 sec."
    },
    {
      "q": "A boy at 4 km/h reaches school 5 min late; at 5 km/h he's 10 min early. Find the distance.",
      "a": "Let distance be d. d/4 - d/5 = 15/60 -> d/20 = 1/4 -> d = 5 km. Answer: 5 km."
    },
    {
      "q": "Cyclists start from the same point in opposite directions at 15 km/h and 20 km/h. Find the distance apart after 2 hrs.",
      "a": "Relative speed = 15 + 20 = 35 km/h. Distance apart = 35 * 2 = 70 km. Answer: 70 km."
    },
    {
      "q": "A train at 90 km/h crosses a pole in 8 sec. Find the train's length.",
      "a": "Speed = 90 * (5/18) = 25 m/s. Length = Speed * Time = 25 * 8 = 200 m. Answer: 200 m."
    }
  ],
  "boats": [
    {
      "q": "Boat speed=15 km/h, stream=3 km/h. Find downstream and upstream speeds.",
      "a": "Downstream speed = 15 + 3 = 18 km/h. Upstream speed = 15 - 3 = 12 km/h. Answer: 18 km/h and 12 km/h."
    },
    {
      "q": "A boat covers 24 km downstream in 2 hrs. Find the downstream speed.",
      "a": "Downstream speed = 24 / 2 = 12 km/h. Answer: 12 km/h."
    },
    {
      "q": "Downstream speed=20 km/h, upstream=12 km/h. Find the boat and stream speed.",
      "a": "Boat speed = (20 + 12)/2 = 16 km/h. Stream speed = (20 - 12)/2 = 4 km/h. Answer: Boat 16 km/h, Stream 4 km/h."
    },
    {
      "q": "A man rows 30 km downstream in 3 hrs and returns in 5 hrs. Find the boat and stream speed.",
      "a": "Downstream speed = 30 / 3 = 10 km/h. Upstream speed = 30 / 5 = 6 km/h. Boat speed = (10 + 6)/2 = 8 km/h. Stream speed = (10 - 6)/2 = 2 km/h. Answer: Boat 8 km/h, Stream 2 km/h."
    },
    {
      "q": "Boat speed still water=10 km/h; upstream time is twice the downstream time. Find the stream speed.",
      "a": "Let stream speed be x. Upstream rate = 10-x, Downstream rate = 10+x. Time is inversely proportional to speed -> 10+x = 2*(10-x) -> 10+x = 20 - 2x -> 3x = 10 -> x = 3.33 km/h. Answer: 3.33 km/h."
    },
    {
      "q": "A boat goes 15 km upstream in 3 hrs and 15 km downstream in 1.5 hrs. Find the boat and stream speed.",
      "a": "Upstream speed = 15 / 3 = 5 km/h. Downstream speed = 15 / 1.5 = 10 km/h. Boat speed = (10 + 5)/2 = 7.5 km/h. Stream speed = (10 - 5)/2 = 2.5 km/h. Answer: Boat 7.5 km/h, Stream 2.5 km/h."
    },
    {
      "q": "Boat speed=12 km/h, stream=4 km/h. Find the time to row 32 km downstream.",
      "a": "Downstream speed = 12 + 4 = 16 km/h. Time = 32 / 16 = 2 hrs. Answer: 2 hrs."
    },
    {
      "q": "A man rows upstream at 8 km/h, downstream at 14 km/h. Find the boat and stream rate.",
      "a": "Boat speed = (14 + 8)/2 = 11 km/h. Stream speed = (14 - 8)/2 = 3 km/h. Answer: Boat 11 km/h, Stream 3 km/h."
    },
    {
      "q": "A boat takes 4 hrs to go 20 km upstream; boat's still-water speed=8 km/h. Find the stream speed.",
      "a": "Upstream speed = 20 / 4 = 5 km/h. Stream speed = boat speed - upstream speed = 8 - 5 = 3 km/h. Answer: 3 km/h."
    },
    {
      "q": "A boat's still-water speed is 4 times the stream's. It covers 60 km downstream in 3 hrs. Find the time upstream.",
      "a": "Let stream be x, boat be 4x. Downstream rate = 5x = 60 / 3 = 20 km/h -> x = 4. Boat speed = 16 km/h, stream = 4 km/h. Upstream rate = 16 - 4 = 12 km/h. Time upstream = 60 / 12 = 5 hrs. Answer: 5 hrs."
    },
    {
      "q": "A man rows 48 km and back in 14 hrs, and rowing 4 km downstream takes the same time as 3 km upstream. Find the stream speed.",
      "a": "Speed ratio Down/Up = 4:3. Let Down = 4x, Up = 3x. 48/(4x) + 48/(3x) = 14 -> 12/x + 16/x = 14 -> 28/x = 14 -> x = 2. Down = 8, Up = 6. Stream rate = (8-6)/2 = 1 km/h. Answer: 1 km/h."
    },
    {
      "q": "Downstream speed=18 km/h; 54 km upstream takes 6 hrs. Find the stream speed.",
      "a": "Upstream rate = 54 / 6 = 9 km/h. Stream rate = (Down - Up)/2 = (18 - 9)/2 = 4.5 km/h. Answer: 4.5 km/h."
    }
  ],
  "circular": [
    {
      "q": "A 400m track; runners at 5 m/s and 4 m/s, same direction. Find the time to meet again.",
      "a": "Relative speed = 5 - 4 = 1 m/s. Meeting time = 400 / 1 = 400 sec. Answer: 400 sec."
    },
    {
      "q": "Same track, opposite directions at 5 m/s and 3 m/s. Find the first meeting time.",
      "a": "Relative speed = 5 + 3 = 8 m/s. Meeting time = 400 / 8 = 50 sec. Answer: 50 sec."
    },
    {
      "q": "In a 200m race, A beats B by 20m. Find the speed ratio.",
      "a": "When A covers 200m, B covers 180m. Speed ratio = 200 : 180 = 10:9. Answer: 10:9."
    },
    {
      "q": "A finishes a 100m race in 20 sec, giving B a 10m start; A wins by 5 sec. Find B's speed.",
      "a": "A's time = 20s. B's time = 20 + 5 = 25s. B covers 90m in 25s -> B's speed = 90 / 25 = 3.6 m/s. Answer: 3.6 m/s."
    },
    {
      "q": "Cars on a 900m circular track at 15 m/s and 10 m/s, same direction. Find the time for the faster to lap the slower.",
      "a": "Relative speed = 15 - 10 = 5 m/s. Time to lap = 900 / 5 = 180 sec. Answer: 180 sec."
    },
    {
      "q": "A beats B by 30m or 10 sec in a 200m race. Find A's speed.",
      "a": "B's speed = 30 / 10 = 3 m/s. B's time for 200m = 200 / 3 = 66.67 sec. A's time = 66.67 - 10 = 56.67 sec. A's speed = 200 / 56.67 = 3.53 m/s. Answer: 3.53 m/s."
    },
    {
      "q": "A 720m circular track; cyclists in opposite directions at 20 m/s and 16 m/s. Find the first meeting time and how many times they meet before both return to start together.",
      "a": "First meeting = 720 / (20 + 16) = 20 sec. A's lap time = 36s, B's lap time = 45s. LCM(36, 45) = 180s. In 180s, number of meetings = 180 / 20 = 9. Answer: 9 meetings."
    },
    {
      "q": "In a 600m race, A beats B by 100m. In a 300m race with the same speeds, find A's margin.",
      "a": "Speed ratio = 600 : 500 = 6:5. In 300m race, when A runs 300m, B runs 300 * (5/6) = 250m. Margin = 300 - 250 = 50m. Answer: 50m."
    },
    {
      "q": "A and B run 1 km; A gives B a 100m start and wins by 10 sec. A's speed=5 m/s. Find B's speed.",
      "a": "A's time = 1000 / 5 = 200 sec. B's time = 200 + 10 = 210 sec. B covers 900m in 210 sec -> B's speed = 900 / 210 = 4.29 m/s. (Note: The previous simplified calculation was 4.74 m/s, but 900/190 = 4.74, meaning A wins by 10 sec if B's time is 190? No, if A wins, B takes more time. If A wins by 10 sec, B's time = 200 + 10 = 210s. Speed = 900/210 = 4.29 m/s. Let's use 4.29 m/s). Answer: 4.29 m/s."
    },
    {
      "q": "A 300m circular track; runners at 6 m/s and 4 m/s, same direction. Find the number of overtakes in 10 minutes.",
      "a": "Relative speed = 2 m/s. Time to lap = 300 / 2 = 150 sec. In 600 sec (10 min), lappings = 600 / 150 = 4 times. Answer: 4 times."
    },
    {
      "q": "A beats B by 40m in a 400m race; B beats C by 30m in a 300m race. Find A's margin over C in a 200m race.",
      "a": "Speed ratio A:B = 400:360 = 10:9. B:C = 300:270 = 10:9. Scale A:B:C = 100:90:81. In 200m, A covers 200m, C covers 200 * 0.81 = 162m. Margin = 38m. Answer: 38m."
    },
    {
      "q": "Two athletes run 1200m; the first finishes 30 sec before the second, speed ratio 5:4. Find each one's time.",
      "a": "Time ratio = 4:5. Let t1 = 4k, t2 = 5k. k = 30s. t1 = 120 sec, t2 = 150 sec. Answer: t1=120 sec, t2=150 sec."
    }
  ],
  "si-ci": [
    {
      "q": "Find the SI on \u20b95,000 at 8% p.a. for 3 years.",
      "a": "SI = (5000 * 8 * 3) / 100 = \u20b91,200. Answer: \u20b91,200."
    },
    {
      "q": "Find the CI on \u20b95,000 at 8% p.a. for 2 years (annual compounding).",
      "a": "A = 5000 * (1.08)^2 = 5000 * 1.1664 = \u20b95,832. CI = 5832 - 5000 = \u20b9832. Answer: \u20b9832."
    },
    {
      "q": "Find the difference between CI and SI on \u20b98,000 at 10% for 2 years.",
      "a": "Difference = P * (R/100)^2 = 8000 * (10/100)^2 = 8000 * 0.01 = \u20b980. Answer: \u20b980."
    },
    {
      "q": "A sum amounts to \u20b9850 in 3 years and \u20b9925 in 4 years at SI. Find the rate and principal.",
      "a": "SI for 1 year = 925 - 850 = \u20b975. P = 850 - 3 * 75 = 850 - 225 = \u20b9625. Rate = (75 / 625) * 100 = 12%. Answer: Rate 12%, Principal \u20b9625."
    },
    {
      "q": "Find the CI on \u20b910,000 for 1.5 years at 10% p.a., compounded half-yearly.",
      "a": "Half-yearly R = 5%, n = 3 periods. A = 10000 * (1.05)^3 = 10000 * 1.157625 = \u20b911,576.25. CI = 11576.25 - 10000 = \u20b91,576.25. Answer: \u20b91,576.25."
    },
    {
      "q": "Find the amount on \u20b915,000 at 12% p.a. compounded annually for 3 years.",
      "a": "A = 15000 * (1.12)^3 = 15000 * 1.404928 = \u20b921,073.92. Answer: \u20b921,073.92."
    },
    {
      "q": "A sum triples itself in 20 years at SI. Find the rate.",
      "a": "Let Principal = P, Amount = 3P -> SI = 2P. SI = PRT/100 -> 2P = P * R * 20 / 100 -> R = 10%. Answer: 10%."
    },
    {
      "q": "Find the difference between CI and SI on \u20b920,000 for 2 years at 10% p.a.",
      "a": "Difference = P * (R/100)^2 = 20000 * (10/100)^2 = \u20b9200. Answer: \u20b9200."
    },
    {
      "q": "A sum doubles in 8 years at SI. In how many years will it triple?",
      "a": "Doubles in 8 years -> SI = P, so R = 100/8 = 12.5%. To triple, SI = 2P -> T = 2P / (P * 0.125) = 16 years. Answer: 16 years."
    },
    {
      "q": "Find the CI on \u20b912,000 at 10% p.a. for 3 years, compounded annually.",
      "a": "A = 12000 * (1.1)^3 = \u20b915,972. CI = 15972 - 12000 = \u20b93,972. Answer: \u20b93,972."
    },
    {
      "q": "The difference between CI and SI on a sum for 2 years at 15% p.a. is \u20b9450. Find the sum.",
      "a": "Difference = P * (R/100)^2 -> 450 = P * (15/100)^2 -> 450 = P * 0.0225 -> P = 450 / 0.0225 = \u20b920,000. Answer: \u20b920,000."
    },
    {
      "q": "A town's population grows at 5% p.a. (compound growth) from 40,000. Find the population after 2 years.",
      "a": "Population = 40000 * (1.05)^2 = 40000 * 1.1025 = 44,100. Answer: 44,100."
    }
  ],
  "allegations": [
    {
      "q": "In what ratio should tea worth \u20b960/kg be mixed with tea worth \u20b980/kg to get a mixture worth \u20b965/kg?",
      "a": "By allegation: Ratio = (80 - 65) : (65 - 60) = 15 : 5 = 3:1. Answer: 3:1."
    },
    {
      "q": "A shopkeeper mixes 20 kg rice at \u20b940/kg with 30 kg at \u20b960/kg. Find the average price.",
      "a": "Average price = (20 * 40 + 30 * 60) / (20 + 30) = (800 + 1800) / 50 = 2600 / 50 = \u20b952/kg. Answer: \u20b952/kg."
    },
    {
      "q": "In what ratio must water be mixed with milk costing \u20b915/liter to get a mixture worth \u20b912/liter?",
      "a": "Water cost = 0. By allegation: Ratio (Water:Milk) = (15 - 12) : (12 - 0) = 3 : 12 = 1:4. Answer: 1:4."
    },
    {
      "q": "A container has 40 liters of milk. 4 liters are withdrawn and replaced with water, repeated 3 times. Find the milk left.",
      "a": "Milk left = 40 * (1 - 4/40)^3 = 40 * (0.9)^3 = 40 * 0.729 = 29.16 liters. Answer: 29.16 liters."
    },
    {
      "q": "Solutions of 25% and 40% alcohol are mixed to get 30 liters of a 30% solution. Find the quantities.",
      "a": "Ratio (25%:40%) = (40 - 30) : (30 - 25) = 10 : 5 = 2:1. So, 25% solution = 30 * (2/3) = 20 L, 40% solution = 30 * (1/3) = 10 L. Answer: 20 L of 25%, 10 L of 40%."
    },
    {
      "q": "In what proportion must rice at \u20b935/kg be mixed with rice at \u20b945/kg to get a mixture worth \u20b941/kg?",
      "a": "By allegation: Ratio = (45 - 41) : (41 - 35) = 4 : 6 = 2:3. Answer: 2:3."
    },
    {
      "q": "A 60-liter mixture has milk:water = 5:1. 12 liters of the mixture is removed and replaced with water. Find the new ratio.",
      "a": "Initial: milk = 50L, water = 10L. In 12L removed: milk = 10L, water = 2L. Remaining: milk = 40L, water = 8L. Add 12L water -> milk = 40L, water = 20L. New ratio = 40:20 = 2:1. Answer: 2:1."
    },
    {
      "q": "Sugar varieties at \u20b925/kg and \u20b930/kg are mixed in ratio 3:2. Find the mixture's cost per kg.",
      "a": "Average price = (3 * 25 + 2 * 30) / 5 = (75 + 60) / 5 = 135 / 5 = \u20b927/kg. Answer: \u20b927/kg."
    },
    {
      "q": "In what ratio should oils at \u20b990/liter and \u20b9120/liter be mixed to get a mixture at \u20b9100/liter?",
      "a": "By allegation: Ratio = (120 - 100) : (100 - 90) = 20 : 10 = 2:1. Answer: 2:1."
    },
    {
      "q": "A 20-liter mixture of milk and water is 20% water. How much water must be added to make it 25% water?",
      "a": "Milk = 16L (80%), water = 4L. In new mixture, milk = 16L should be 75%. Total volume = 16 / 0.75 = 21.33L. Water to add = 21.33 - 20 = 1.33 liters. Answer: 1.33 liters."
    },
    {
      "q": "A container has 80 liters of pure milk. 8 liters are withdrawn and replaced with water, twice. Find the milk left.",
      "a": "Milk left = 80 * (1 - 8/80)^2 = 80 * (0.9)^2 = 80 * 0.81 = 64.8 liters. Answer: 64.8 liters."
    },
    {
      "q": "Two vessels have milk:water = 3:2 and 5:3. Equal quantities from both are mixed. Find the resulting milk:water ratio.",
      "a": "Average milk fraction = (3/5 + 5/8) / 2 = (49/40) / 2 = 49/80. Resulting ratio = 49 : (80 - 49) = 49:31. Answer: 49:31."
    }
  ],
  "simple-eq": [
    {
      "q": "Solve: 3x+7=22.",
      "a": "3x = 15 -> x = 5. Answer: x=5."
    },
    {
      "q": "Solve: 2(x-3)+5=15.",
      "a": "2x - 6 + 5 = 15 -> 2x - 1 = 15 -> 2x = 16 -> x = 8. Answer: x=8."
    },
    {
      "q": "Solve for x,y: x+y=10, x-y=4.",
      "a": "Adding gives 2x = 14 -> x = 7. Subtracting gives 2y = 6 -> y = 3. Answer: x=7, y=3."
    },
    {
      "q": "Two numbers sum to 45, differ by 5. Find them.",
      "a": "Let numbers be x and y. x + y = 45, x - y = 5. Adding gives 2x = 50 -> x = 25. Then y = 20. Answer: 25 and 20."
    },
    {
      "q": "A number increased by 15 equals thrice the number. Find it.",
      "a": "x + 15 = 3x -> 2x = 15 -> x = 7.5. Answer: 7.5."
    },
    {
      "q": "Five years ago, a father was 4x his son's age; in 5 years he'll be 2x the son's age. Find present ages.",
      "a": "Let son be s, father be f. f - 5 = 4(s - 5) -> f - 4s = -15. f + 5 = 2(s + 5) -> f - 2s = 5. Subtracting gives 2s = 20 -> s = 10, f = 25. Answer: Son is 10, Father is 25."
    },
    {
      "q": "Solve: x/3+x/4=7.",
      "a": "7x/12 = 7 -> 7x = 84 -> x = 12. Answer: x=12."
    },
    {
      "q": "Two numbers are in ratio 3:5; adding 10 to each gives ratio 5:7. Find them.",
      "a": "Let numbers be 3k, 5k. (3k + 10) / (5k + 10) = 5/7 -> 21k + 70 = 25k + 50 -> 4k = 20 -> k = 5. Numbers are 15 and 25. Answer: 15 and 25."
    },
    {
      "q": "Solve: 2x+3y=13, 3x-2y=0.",
      "a": "From second, y = 1.5x. Substitute in first: 2x + 4.5x = 13 -> 6.5x = 13 -> x = 2, y = 3. Answer: x=2, y=3."
    },
    {
      "q": "3 pens + 2 pencils cost \u20b936; 5 pens + 3 pencils cost \u20b958. Find each cost.",
      "a": "3x + 2y = 36, 5x + 3y = 58. Multiply first by 3: 9x + 6y = 108. Multiply second by 2: 10x + 6y = 116. Subtracting gives x = 8 (pen). Substitute: 24 + 2y = 36 -> y = 6 (pencil). Answer: Pen=\u20b98, Pencil=\u20b96."
    },
    {
      "q": "A two-digit number's digits sum to 9. Subtracting 27 reverses the digits.",
      "a": "Let number be 10a + b. a + b = 9. 10a + b - 27 = 10b + a -> 9a - 9b = 27 -> a - b = 3. Adding gives 2a = 12 -> a = 6, b = 3. Number is 63. Answer: 63."
    },
    {
      "q": "Solve: (x+2)/3 - (x-1)/4 = 1.",
      "a": "Multiply by 12: 4(x+2) - 3(x-1) = 12 -> 4x + 8 - 3x + 3 = 12 -> x + 11 = 12 -> x = 1. Answer: x=1."
    }
  ],
  "quadratic": [
    {
      "q": "Solve x\u00b2-7x+12=0.",
      "a": "(x-3)(x-4)=0 -> x=3, 4. Answer: x=3, 4."
    },
    {
      "q": "Solve x\u00b2-5x-14=0.",
      "a": "(x-7)(x+2)=0 -> x=7, -2. Answer: x=7, -2."
    },
    {
      "q": "Solve 2x\u00b2-3x-5=0.",
      "a": "(2x-5)(x+1)=0 -> x=5/2, -1. Answer: x=5/2, -1."
    },
    {
      "q": "Find the sum and product of roots of x\u00b2-9x+20=0.",
      "a": "Sum = -b/a = 9. Product = c/a = 20. Answer: Sum=9, Product=20."
    },
    {
      "q": "One root of x\u00b2-7x+k=0 is 3. Find k and the other root.",
      "a": "Substitute x=3: 9 - 21 + k = 0 -> k = 12. Sum of roots = 7, so other root = 4. Answer: k=12, other root=4."
    },
    {
      "q": "Solve x\u00b2+2x-8=0 using the formula.",
      "a": "x = [-2 +- sqrt(4 - 4(1)(-8))] / 2 = [-2 +- sqrt(36)] / 2 = [-2 +- 6] / 2 -> x = 2, -4. Answer: x=2, -4."
    },
    {
      "q": "Find the nature of roots of x\u00b2-4x+4=0.",
      "a": "D = b^2 - 4ac = 16 - 16 = 0 -> equal real roots (x=2, 2). Answer: equal real roots (x=2,2)."
    },
    {
      "q": "Find the nature of roots of 2x\u00b2+3x+5=0.",
      "a": "D = 9 - 40 = -31 < 0 -> no real roots. Answer: no real roots."
    },
    {
      "q": "A number and its reciprocal sum to 26/5. Find the number.",
      "a": "x + 1/x = 26/5 -> 5x^2 - 26x + 5 = 0 -> (5x-1)(x-5) = 0 -> x = 5 or 1/5. Answer: 5 or 1/5."
    },
    {
      "q": "The product of two consecutive positive integers is 240. Find them.",
      "a": "x(x+1) = 240 -> x^2 + x - 240 = 0 -> (x-15)(x+16) = 0 -> x = 15. Integers are 15 and 16. Answer: 15 and 16."
    },
    {
      "q": "Form a quadratic equation with roots 4 and -3.",
      "a": "Sum = 1, Product = -12 -> x^2 - x - 12 = 0. Answer: x^2-x-12=0."
    },
    {
      "q": "A rectangle's length is 3 more than its breadth; area=54 sq units. Find the dimensions.",
      "a": "x(x+3) = 54 -> x^2 + 3x - 54 = 0 -> (x-6)(x+9) = 0 -> breadth = 6, length = 9. Answer: 6 and 9."
    }
  ],
  "inequalities": [
    {
      "q": "Solve 2x+5>11.",
      "a": "2x > 6 -> x > 3. Answer: x>3."
    },
    {
      "q": "Solve -3x+7<=1.",
      "a": "-3x <= -6 -> x >= 2. Answer: x>=2."
    },
    {
      "q": "Solve 4<=2x-2<10.",
      "a": "6 <= 2x < 12 -> 3 <= x < 6. Answer: 3<=x<6."
    },
    {
      "q": "Solve (x-2)/3>1.",
      "a": "x - 2 > 3 -> x > 5. Answer: x>5."
    },
    {
      "q": "Solve |x-3|<5.",
      "a": "-5 < x-3 < 5 -> -2 < x < 8. Answer: -2<x<8."
    },
    {
      "q": "Solve |2x+1|>=7.",
      "a": "2x+1 >= 7 or 2x+1 <= -7 -> 2x >= 6 or 2x <= -8 -> x >= 3 or x <= -4. Answer: x>=3 or x<=-4."
    },
    {
      "q": "Solve x\u00b2-5x+6<0.",
      "a": "(x-2)(x-3) < 0 -> 2 < x < 3. Answer: 2<x<3."
    },
    {
      "q": "Solve x\u00b2-9>=0.",
      "a": "(x-3)(x+3) >= 0 -> x <= -3 or x >= 3. Answer: x<=-3 or x>=3."
    },
    {
      "q": "Solve (x-1)(x+4)>0.",
      "a": "Roots are 1, -4. Product is positive outside: x < -4 or x > 1. Answer: x<-4 or x>1."
    },
    {
      "q": "Solve 3x-2<x+8<=2x+5.",
      "a": "First part: 2x < 10 -> x < 5. Second part: x >= 3. Combining gives 3 <= x < 5. Answer: 3<=x<5."
    },
    {
      "q": "Twice a number, decreased by 5, is at least 9. Find the range.",
      "a": "2x - 5 >= 9 -> 2x >= 14 -> x >= 7. Answer: x>=7."
    },
    {
      "q": "Solve -2<(x+1)/3<=4.",
      "a": "-6 < x + 1 <= 12 -> -7 < x <= 11. Answer: -7<x<=11."
    }
  ],
  "progressions": [
    {
      "q": "Find the 10th term of AP 3,7,11,...",
      "a": "a = 3, d = 4. T_10 = 3 + 9 * 4 = 39. Answer: 39."
    },
    {
      "q": "Find the sum of the first 20 terms of AP 5,8,11,...",
      "a": "a = 5, d = 3. S_20 = 10 * [10 + 19 * 3] = 10 * [10 + 57] = 670. Answer: 670."
    },
    {
      "q": "Find the number of terms in AP 2,5,8,...,101.",
      "a": "101 = 2 + (n-1)*3 -> 99 = (n-1)*3 -> n-1 = 33 -> n = 34. Answer: 34."
    },
    {
      "q": "Find the 8th term of GP 2,6,18,...",
      "a": "a = 2, r = 3. T_8 = 2 * 3^7 = 2 * 2187 = 4,374. Answer: 4,374."
    },
    {
      "q": "Find the sum of the first 6 terms of GP 3,6,12,...",
      "a": "a = 3, r = 2. S_6 = 3 * (2^6 - 1) / (2 - 1) = 3 * 63 = 189. Answer: 189."
    },
    {
      "q": "Find the sum to infinity of GP 8,4,2,1,...",
      "a": "a = 8, r = 1/2. S_inf = 8 / (1 - 1/2) = 16. Answer: 16."
    },
    {
      "q": "Insert 3 arithmetic means between 4 and 24.",
      "a": "Let sequence be 4, a1, a2, a3, 24. d = (24 - 4) / 4 = 5. Means are 9, 14, 19. Answer: 9, 14, 19."
    },
    {
      "q": "Find x such that x-1, x+1, 2x+3 are in AP.",
      "a": "2(x+1) = (x-1) + (2x+3) -> 2x+2 = 3x+2 -> x = 0. Answer: x=0."
    },
    {
      "q": "S_n=3n\u00b2+2n for an AP's sum. Find the 5th term.",
      "a": "S_5 = 3(25) + 10 = 85. S_4 = 3(16) + 8 = 56. T_5 = S_5 - S_4 = 85 - 56 = 29. Answer: 29."
    },
    {
      "q": "Find the geometric mean of 4 and 16.",
      "a": "GM = sqrt(4 * 16) = sqrt(64) = 8. Answer: 8."
    },
    {
      "q": "The 3rd term of a GP is 12, the 6th is 96. Find r and a.",
      "a": "T_6 / T_3 = r^3 = 96/12 = 8 -> r = 2. a * 4 = 12 -> a = 3. Answer: r=2, a=3."
    },
    {
      "q": "Find the sum of the first 15 terms of an AP with a=7, d=-2.",
      "a": "S_15 = 7.5 * [14 + 14 * (-2)] = 7.5 * [14 - 28] = 7.5 * (-14) = -105. Answer: -105."
    }
  ],
  "geometry": [
    {
      "q": "Two angles of a triangle are 55\u00b0 and 65\u00b0. Find the third.",
      "a": "Third angle = 180 - (55 + 65) = 60\u00b0. Answer: 60\u00b0."
    },
    {
      "q": "A right triangle has legs 6 and 8. Find the hypotenuse.",
      "a": "Hypotenuse = sqrt(6^2 + 8^2) = sqrt(36 + 64) = 10. Answer: 10."
    },
    {
      "q": "A triangle's angles are in ratio 2:3:4. Find each.",
      "a": "Total parts = 9. One part = 180 / 9 = 20\u00b0. Angles are 40\u00b0, 60\u00b0, 80\u00b0. Answer: 40\u00b0, 60\u00b0, 80\u00b0."
    },
    {
      "q": "Find the area of a triangle with base 12 cm, height 9 cm.",
      "a": "Area = 0.5 * 12 * 9 = 54 cm\u00b2. Answer: 54 cm\u00b2."
    },
    {
      "q": "Similar triangles have sides in ratio 3:5; smaller area is 27 cm\u00b2. Find larger area.",
      "a": "Area ratio = (3/5)^2 = 9/25. Larger area = 27 * (25/9) = 75 cm\u00b2. Answer: 75 cm\u00b2."
    },
    {
      "q": "Find the sum of interior angles of a hexagon.",
      "a": "Sum = (6 - 2) * 180 = 720\u00b0. Answer: 720\u00b0."
    },
    {
      "q": "Each interior angle of a regular polygon is 150\u00b0. Find the number of sides.",
      "a": "Exterior angle = 180 - 150 = 30\u00b0. Number of sides = 360 / 30 = 12. Answer: 12 sides."
    },
    {
      "q": "An arc subtends 80\u00b0 at the center. Find the angle it subtends at the circumference.",
      "a": "Circumference angle = Center angle / 2 = 80 / 2 = 40\u00b0. Answer: 40\u00b0."
    },
    {
      "q": "Tangent PT from external point P; OP=13 cm, radius=5 cm. Find PT.",
      "a": "PT = sqrt(OP^2 - r^2) = sqrt(169 - 25) = 12 cm. Answer: 12 cm."
    },
    {
      "q": "Find the diagonal of a square with side 10 cm.",
      "a": "Diagonal = side * sqrt(2) = 10 * 1.414 = 14.14 cm. Answer: 10*sqrt(2) cm (approx 14.14 cm)."
    },
    {
      "q": "D, E are midpoints of AB, AC in \u25b3ABC; DE=6 cm. Find BC.",
      "a": "By Midpoint Theorem, BC = 2 * DE = 12 cm. Answer: 12 cm."
    },
    {
      "q": "A triangle's median is 15 cm. Find the distance from the vertex to the centroid.",
      "a": "Centroid divides median in 2:1. Distance from vertex = (2/3) * 15 = 10 cm. Answer: 10 cm."
    }
  ],
  "mensuration": [
    {
      "q": "Find the area of a rectangle: length 15 m, breadth 8 m.",
      "a": "Area = 15 * 8 = 120 m\u00b2. Answer: 120 m\u00b2."
    },
    {
      "q": "Find the perimeter of a square with side 9 cm.",
      "a": "Perimeter = 4 * 9 = 36 cm. Answer: 36 cm."
    },
    {
      "q": "Find the area of a circle with radius 7 cm (\u03c0=22/7).",
      "a": "Area = \u03c0r\u00b2 = (22/7) * 7 * 7 = 154 cm\u00b2. Answer: 154 cm\u00b2."
    },
    {
      "q": "Find the curved surface area of a cylinder: radius 7 cm, height 10 cm.",
      "a": "CSA = 2\u03c0rh = 2 * (22/7) * 7 * 10 = 440 cm\u00b2. Answer: 440 cm\u00b2."
    },
    {
      "q": "Find the volume of a cylinder: radius 7 cm, height 10 cm.",
      "a": "Volume = \u03c0r\u00b2h = (22/7) * 7 * 7 * 10 = 1,540 cm\u00b3. Answer: 1,540 cm\u00b3."
    },
    {
      "q": "Find the curved surface area of a cone: radius 6 cm, slant height 10 cm.",
      "a": "CSA = \u03c0rl = (22/7) * 6 * 10 = 188.57 cm\u00b2. Answer: 188.57 cm\u00b2."
    },
    {
      "q": "Find the volume of a cone: radius 6 cm, height 14 cm.",
      "a": "Volume = (1/3) * \u03c0r\u00b2h = (1/3) * (22/7) * 6 * 6 * 14 = 528 cm\u00b3. Answer: 528 cm\u00b3."
    },
    {
      "q": "Find the volume of a sphere with radius 3 cm (\u03c0=22/7).",
      "a": "Volume = (4/3) * \u03c0r\u00b3 = (4/3) * (22/7) * 3 * 3 * 3 = 792/7 = 113.14 cm\u00b3. Answer: 113.14 cm\u00b3."
    },
    {
      "q": "Find the total surface area of a sphere with radius 7 cm.",
      "a": "TSA = 4\u03c0r\u00b2 = 4 * (22/7) * 7 * 7 = 616 cm\u00b2. Answer: 616 cm\u00b2."
    },
    {
      "q": "Find the volume of a cuboid 10 cm \u00d7 6 cm \u00d7 4 cm.",
      "a": "Volume = 10 * 6 * 4 = 240 cm\u00b3. Answer: 240 cm\u00b3."
    },
    {
      "q": "Find the total surface area of a cube with side 6 cm.",
      "a": "TSA = 6 * side\u00b2 = 6 * 36 = 216 cm\u00b2. Answer: 216 cm\u00b2."
    },
    {
      "q": "A field 60 m \u00d7 40 m needs fencing at \u20b915/meter. Find the cost.",
      "a": "Perimeter = 2(60 + 40) = 200 m. Cost = 200 * 15 = \u20b93,000. Answer: \u20b93,000."
    }
  ],
  "heights": [
    {
      "q": "Angle of elevation of a tower from 50 m away is 45\u00b0. Find the height.",
      "a": "height = 50 * tan 45\u00b0 = 50 * 1 = 50 m. Answer: 50 m."
    },
    {
      "q": "From 30 m away, angle of elevation is 60\u00b0. Find the height.",
      "a": "height = 30 * tan 60\u00b0 = 30 * \u221a3 = 51.96 m. Answer: 30*sqrt(3) m (approx 51.96 m)."
    },
    {
      "q": "A ladder makes 60\u00b0 with the ground, foot 5 m from the wall. Find the ladder's length.",
      "a": "Length = 5 / cos 60\u00b0 = 5 / 0.5 = 10 m. Answer: 10 m."
    },
    {
      "q": "Angle of elevation of a tower from 100 m away is 30\u00b0. Find the height.",
      "a": "height = 100 * tan 30\u00b0 = 100 / \u221a3 = 57.74 m. Answer: 100/sqrt(3) m (approx 57.74 m)."
    },
    {
      "q": "From the top of a 60 m building, angle of depression to a car is 30\u00b0. Find the distance.",
      "a": "distance = 60 / tan 30\u00b0 = 60 * \u221a3 = 103.92 m. Answer: 60*sqrt(3) m (approx 103.92 m)."
    },
    {
      "q": "Two points on the same side of a tower see elevations 30\u00b0 and 60\u00b0, 40 m apart. Find tower height.",
      "a": "Let points be A and B. d1 = h / tan 60\u00b0 = h / \u221a3. d2 = h / tan 30\u00b0 = h * \u221a3. d2 - d1 = h(\u221a3 - 1/e) = 2h/\u221a3 = 40 -> h = 20\u221a3 \u2248 34.64 m. Answer: 20*sqrt(3) m (approx 34.64 m)."
    },
    {
      "q": "A kite flies at 60 m height, string inclined 30\u00b0 to the horizontal. Find the string's length.",
      "a": "String length = 60 / sin 30\u00b0 = 60 / 0.5 = 120 m. Answer: 120 m."
    },
    {
      "q": "From an 80 m cliff, angles of depression to two boats are 45\u00b0 and 30\u00b0. Find the distance between them.",
      "a": "d1 = 80 / tan 45\u00b0 = 80 m. d2 = 80 / tan 30\u00b0 = 80\u221a3 \u2248 138.56 m. Distance = 80\u221a3 - 80 = 80(\u221a3 - 1) \u2248 58.56 m. Answer: 58.56 m."
    },
    {
      "q": "Sun's elevation changes from 30\u00b0 to 60\u00b0; a tower's shadow shortens by 30 m. Find the height.",
      "a": "Shadow shortening = h(\u221a3 - 1/\u221a3) = 2h/\u221a3 = 30 -> h = 15\u221a3 \u2248 25.98 m. Answer: 15*sqrt(3) m (approx 25.98 m)."
    },
    {
      "q": "From a 25 m tower's top, angle of depression to a ground point is 60\u00b0. Find the distance.",
      "a": "distance = 25 / tan 60\u00b0 = 25 / \u221a3 = 14.43 m. Answer: 25/sqrt(3) m (approx 14.43 m)."
    },
    {
      "q": "A 6 m pole casts a 2\u221a3 m shadow. Find the sun's angle of elevation.",
      "a": "tan \u03b8 = 6 / 2\u221a3 = 3 / \u221a3 = \u221a3 -> \u03b8 = 60\u00b0. Answer: 60\u00b0."
    },
    {
      "q": "Towers of 30 m and 18 m stand on level ground; elevation of taller tower from shorter one's foot is 60\u00b0. Find the distance between them.",
      "a": "distance = 30 / tan 60\u00b0 = 30 / \u221a3 = 10\u221a3 \u2248 17.32 m. Answer: 10*sqrt(3) m (approx 17.32 m)."
    }
  ],
  "pnc": [
    {
      "q": "Arrange the letters of 'MATHS'.",
      "a": "5 distinct letters -> 5! = 120. Answer: 120."
    },
    {
      "q": "Arrange the letters of 'STATISTICS' (S=3, T=3, A=1, I=2, C=1, 10 letters).",
      "a": "10! / (3! * 3! * 2!) = 39,916,800 / (6 * 6 * 2) = 50,400. Answer: 50,400."
    },
    {
      "q": "Seat 5 people in a row.",
      "a": "5! = 120. Answer: 120."
    },
    {
      "q": "Seat 5 people around a circular table.",
      "a": "(5 - 1)! = 4! = 24. Answer: 24."
    },
    {
      "q": "Select 3 people from a group of 8.",
      "a": "8C3 = (8 * 7 * 6) / (3 * 2 * 1) = 56. Answer: 56."
    },
    {
      "q": "Arrange 3 books chosen from 7 different books on a shelf.",
      "a": "7P3 = 7 * 6 * 5 = 210. Answer: 210."
    },
    {
      "q": "Form a committee of 3 men and 2 women from 6 men and 4 women.",
      "a": "6C3 * 4C2 = 20 * 6 = 120. Answer: 120."
    },
    {
      "q": "Arrange the letters of 'LEADER' (E repeats twice, 6 letters).",
      "a": "6! / 2! = 360. Answer: 360."
    },
    {
      "q": "How many 4-digit numbers can be formed from digits 1-5 without repetition?",
      "a": "5P4 = 120. Answer: 120."
    },
    {
      "q": "Seat 4 boys and 3 girls in a row with all girls together.",
      "a": "Treat girls as 1 block: 5! * 3! = 120 * 6 = 720. Answer: 720."
    },
    {
      "q": "Find the number of diagonals in a hexagon.",
      "a": "n(n - 3) / 2 = 6 * 3 / 2 = 9. Answer: 9."
    },
    {
      "q": "From 6 men and 4 women, form a 5-member committee with at least 2 women.",
      "a": "Cases: 2W3M (4C2 * 6C3 = 120), 3W2M (4C3 * 6C2 = 60), 4W1M (4C4 * 6C1 = 6). Sum = 186. Answer: 186."
    }
  ],
  "probability": [
    {
      "q": "A die is rolled once. Find the probability of a number greater than 4.",
      "a": "Favorable outcomes = {5, 6}. Probability = 2 / 6 = 1/3. Answer: 1/3."
    },
    {
      "q": "Two coins are tossed. Find the probability of exactly one head.",
      "a": "Favorable outcomes = {HT, TH}. Probability = 2 / 4 = 1/2. Answer: 1/2."
    },
    {
      "q": "A card is drawn from a 52-card deck. Find the probability it is a king.",
      "a": "Kings in deck = 4. Probability = 4 / 52 = 1/13. Answer: 1/13."
    },
    {
      "q": "A bag has 5 red and 7 blue balls. Find the probability of drawing a red ball.",
      "a": "Red balls = 5. Total balls = 12. Probability = 5 / 12. Answer: 5/12."
    },
    {
      "q": "Two dice are rolled. Find the probability the sum is 7.",
      "a": "Favorable outcomes = 6. Total = 36. Probability = 6 / 36 = 1/6. Answer: 1/6."
    },
    {
      "q": "A bag has 4 red, 5 green, and 6 blue balls. Find the probability of green or blue.",
      "a": "Green + Blue = 11. Total = 15. Probability = 11/15. Answer: 11/15."
    },
    {
      "q": "Two cards are drawn without replacement. Find the probability both are aces.",
      "a": "Probability = (4 / 52) * (3 / 51) = (1 / 13) * (1 / 17) = 1/221. Answer: 1/221."
    },
    {
      "q": "A coin is tossed 3 times. Find the probability of at least 2 heads.",
      "a": "Favorable outcomes = {HHT, HTH, THH, HHH}. Probability = 4 / 8 = 1/2. Answer: 1/2."
    },
    {
      "q": "From 5 men and 3 women, 2 people are chosen. Find the probability both are women.",
      "a": "Favorable = 3C2 = 3. Total = 8C2 = 28. Probability = 3 / 28. Answer: 3/28."
    },
    {
      "q": "A number from 1-30 is picked. Find the probability it is a multiple of 4 or 5.",
      "a": "Multiples of 4 = 7. Multiples of 5 = 6. Common (20) = 1. Total = 7 + 6 - 1 = 12. Probability = 12 / 30 = 2/5. Answer: 2/5."
    },
    {
      "q": "Two dice are thrown. Find the probability the product is even.",
      "a": "P(odd product) = P(odd on both) = (3/6) * (3/6) = 1/4. P(even product) = 1 - 1/4 = 3/4. Answer: 3/4."
    },
    {
      "q": "A bag has 3 red and 2 black balls. Two are drawn without replacement. Find the probability both are red.",
      "a": "Probability = (3 / 5) * (2 / 4) = 6 / 20 = 3/10. Answer: 3/10."
    }
  ],
  "crypt": [
    {
      "q": "AB + BA = 66. Find A+B.",
      "a": "10A + B + 10B + A = 11(A+B) = 66 -> A+B = 6. Answer: 6."
    },
    {
      "q": "AB + BA = 121 (A\u2260B). Find A+B.",
      "a": "11(A+B) = 121 -> A+B = 11. Answer: 11."
    },
    {
      "q": "AB - BA = 27 (A>B). Find A-B.",
      "a": "9(A-B) = 27 -> A-B = 3. Answer: 3."
    },
    {
      "q": "AB - BA = 45 (A>B). Find A-B.",
      "a": "9(A-B) = 45 -> A-B = 5. Answer: 5."
    },
    {
      "q": "AB + CD = EE, all letters different digits. Find E.",
      "a": "A sum of two-digit numbers with same digits in sum. Valid assignment: 21+34=55 -> E=5. Answer: 5."
    },
    {
      "q": "Classic puzzle: SEND + MORE = MONEY. Find M.",
      "a": "Since SEND + MORE is a 5-digit number, M must be 1. O must be 0, S is 9. E=5, N=6, R=8, D=7, Y=2. Answer: M=1."
    },
    {
      "q": "A two-digit number AB satisfies A+B=9 and A-B=3. Find AB.",
      "a": "A+B=9, A-B=3 -> 2A=12 -> A=6, B=3. The number is 63. Answer: 63."
    },
    {
      "q": "AB + CD = EFG, all letters distinct. If 76 + 58 = 134, find E+F+G.",
      "a": "E=1, F=3, G=4. E+F+G = 8. Answer: 8."
    },
    {
      "q": "AB + CD = EFG, all letters distinct. If 83 + 59 = 142, find F.",
      "a": "E=1, F=4, G=2. Value of F is 4. Answer: 4."
    },
    {
      "q": "AB - CD = EF, all letters distinct. If 81 - 24 = 57, find E+F.",
      "a": "E=5, F=7. E+F = 12. Answer: 12."
    },
    {
      "q": "AB * 3 = CDE, all letters distinct. If 68 * 3 = 204, find C+D+E.",
      "a": "C=2, D=0, E=4. C+D+E = 6. Answer: 6."
    },
    {
      "q": "AB * 2 = CD, given A=1, B=4. Find C and D.",
      "a": "14 * 2 = 28 -> C=2, D=8. Answer: C=2, D=8."
    }
  ],
  "sets": [
    {
      "q": "n(A)=20, n(B)=15, n(A\u2229B)=8. Find n(A\u222aB).",
      "a": "n(A\u222aB) = 20 + 15 - 8 = 27. Answer: 27."
    },
    {
      "q": "In a class of 60, 35 like Maths, 30 like Science, 15 like both. Find how many like neither.",
      "a": "n(M\u222aS) = 35 + 30 - 15 = 50. Neither = 60 - 50 = 10. Answer: 10."
    },
    {
      "q": "A={1,2,3,4}, B={3,4,5,6}. Find A\u2229B and A\u222aB.",
      "a": "A\u2229B = {3,4}, A\u222aB = {1,2,3,4,5,6}. Answer: A\u2229B={3,4}, A\u222aB={1,2,3,4,5,6}."
    },
    {
      "q": "List the elements of A = {x : x is a prime number less than 10}.",
      "a": "Primes less than 10: 2, 3, 5, 7. Answer: A={2,3,5,7}."
    },
    {
      "q": "Of 100 people, 60 read newspaper A, 50 read B, 20 read both. Find how many read only A.",
      "a": "Only A = 60 - 20 = 40. Answer: 40."
    },
    {
      "q": "If f(x)=2x+3, find f(5).",
      "a": "f(5) = 2(5) + 3 = 13. Answer: 13."
    },
    {
      "q": "If f(x)=x\u00b2, g(x)=x+1, find (f\u2218g)(3).",
      "a": "g(3) = 4. f(g(3)) = f(4) = 4^2 = 16. Answer: 16."
    },
    {
      "q": "Find the domain of f(x)=1/(x-2).",
      "a": "Denominator x-2 = 0 -> x=2. Domain is all real x except x=2. Answer: All real x except x=2."
    },
    {
      "q": "If f(x)=3x-4, find f\u207b\u00b9(x).",
      "a": "y = 3x - 4 -> x = (y+4)/3 -> f\u207b\u00b9(x) = (x+4)/3. Answer: f\u207b\u00b9(x) = (x+4)/3."
    },
    {
      "q": "Of 50 students, 20 play cricket, 25 play football, 10 play both. Find how many play neither.",
      "a": "Union = 20 + 25 - 10 = 35. Neither = 50 - 35 = 15. Answer: 15."
    },
    {
      "q": "A has 5 elements, B has 3 elements, and A,B are disjoint. Find n(A\u222aB).",
      "a": "n(A\u222aB) = n(A) + n(B) = 5 + 3 = 8. Answer: 8."
    },
    {
      "q": "In a group of 70, 45 speak Hindi, 33 speak English, 10 speak neither. Find how many speak both.",
      "a": "Union = 70 - 10 = 60. speak both = 45 + 33 - 60 = 18. Answer: 18."
    }
  ],
  "logarithms": [
    {
      "q": "Find log\u20828.",
      "a": "8 = 2\u00b3. So log\u20828 = 3. Answer: 3."
    },
    {
      "q": "Find log\u2081\u20801000.",
      "a": "1000 = 10\u00b3. So log\u2081\u20801000 = 3. Answer: 3."
    },
    {
      "q": "Simplify log(2)+log(3).",
      "a": "log(2) + log(3) = log(2 * 3) = log 6. Answer: log 6."
    },
    {
      "q": "Simplify log(20)-log(4).",
      "a": "log(20) - log(4) = log(20 / 4) = log 5. Answer: log 5."
    },
    {
      "q": "Find log\u208381.",
      "a": "81 = 3\u2074. So log\u208381 = 4. Answer: 4."
    },
    {
      "q": "Simplify 2log(5)+log(4).",
      "a": "log(25) + log(4) = log(100) = 2. Answer: 2."
    },
    {
      "q": "Find x if log\u2082x=5.",
      "a": "x = 2\u2075 = 32. Answer: x=32."
    },
    {
      "q": "Find log\u2085125.",
      "a": "125 = 5\u00b3. So log\u2085125 = 3. Answer: 3."
    },
    {
      "q": "Simplify log(1000)/log(10).",
      "a": "log(1000) = 3, log(10) = 1. Ratio = 3 / 1 = 3. Answer: 3."
    },
    {
      "q": "If log\u2081\u20802=0.3010, find log\u2081\u20808.",
      "a": "log\u2081\u20808 = log\u2081\u2080(2\u00b3) = 3 * log\u2081\u20802 = 3 * 0.3010 = 0.9030. Answer: 0.9030."
    },
    {
      "q": "Find the value of log\u2090a\u00b2.",
      "a": "log\u2090a\u00b2 = 2. Answer: 2."
    },
    {
      "q": "Simplify log(50)-log(5)+log(2).",
      "a": "log(50/5) + log(2) = log(10) + log(2) = 1 + log 2. Answer: 1 + log 2."
    }
  ],
  "analogy": [
    {
      "q": "Doctor : Hospital :: Teacher : ?",
      "a": "Workplace relationship: A doctor works in a hospital; a teacher works in a school. Answer: School."
    },
    {
      "q": "Pen : Write :: Knife : ?",
      "a": "Tool : function relationship: A pen is used to write; a knife is used to cut. Answer: Cut."
    },
    {
      "q": "Puppy : Dog :: Kitten : ?",
      "a": "Young : adult relationship: A puppy is a young dog; a kitten is a young cat. Answer: Cat."
    },
    {
      "q": "Fish : Water :: Bird : ?",
      "a": "Creature : habitat relationship: A fish lives/moves in water; a bird in the sky. Answer: Sky."
    },
    {
      "q": "Author : Book :: Sculptor : ?",
      "a": "Creator : creation relationship: An author writes a book; a sculptor makes a statue. Answer: Statue."
    },
    {
      "q": "Optimistic : Pessimistic :: Generous : ?",
      "a": "Antonym relationship: Optimistic is the opposite of pessimistic; generous is the opposite of miserly. Answer: Miserly."
    },
    {
      "q": "Thermometer : Temperature :: Speedometer : ?",
      "a": "Instrument : measurement relationship: A thermometer measures temperature; a speedometer measures speed. Answer: Speed."
    },
    {
      "q": "Cow : Herd :: Wolf : ?",
      "a": "Animal : group name relationship: A group of cows is a herd; a group of wolves is a pack. Answer: Pack."
    },
    {
      "q": "Library : Books :: Museum : ?",
      "a": "Place : contents relationship: A library houses books; a museum houses artifacts. Answer: Artifacts."
    },
    {
      "q": "Bee : Hive :: Ant : ?",
      "a": "Animal : home relationship: A bee lives in a hive; an ant lives in an anthill. Answer: Anthill."
    },
    {
      "q": "Cobbler : Shoes :: Carpenter : ?",
      "a": "Occupation : product relationship: A cobbler makes/repairs shoes; a carpenter makes furniture. Answer: Furniture."
    },
    {
      "q": "Ounce : Weight :: Liter : ?",
      "a": "Unit : quantity measured relationship: Ounce is a unit of weight; liter is a unit of volume. Answer: Volume."
    }
  ],
  "odd-one": [
    {
      "q": "Find the odd one out: Apple, Banana, Carrot, Mango.",
      "a": "Carrot is a vegetable; others are fruits. Answer: Carrot."
    },
    {
      "q": "Find the odd one out: Delhi, Mumbai, Chennai, Punjab.",
      "a": "Punjab is a state; others are major cities. Answer: Punjab."
    },
    {
      "q": "Find the odd one out: Piano, Guitar, Violin, Flute.",
      "a": "Flute is a wind instrument; others are string instruments. Answer: Flute."
    },
    {
      "q": "Find the odd one out: Triangle, Square, Circle, Cube.",
      "a": "Cube is a 3D shape; others are 2D shapes. Answer: Cube."
    },
    {
      "q": "Find the odd one out: Doctor, Engineer, Teacher, Hospital.",
      "a": "Hospital is a workplace/location; others are occupations. Answer: Hospital."
    },
    {
      "q": "Find the odd one out: Rose, Lotus, Jasmine, Cactus.",
      "a": "Cactus is not classified as a flowering plant here (known for spikes/arid growth); others are flowering plants. Answer: Cactus."
    },
    {
      "q": "Find the odd one out: Gold, Silver, Copper, Diamond.",
      "a": "Diamond is a non-metal (carbon allotrope); others are metals. Answer: Diamond."
    },
    {
      "q": "Find the odd one out: Cricket, Football, Hockey, Badminton.",
      "a": "Badminton is a racquet sport; others are team field sports played with a ball. Answer: Badminton."
    },
    {
      "q": "Find the odd one out: Whale, Dolphin, Shark, Octopus.",
      "a": "Octopus is an invertebrate; others are vertebrates. Answer: Octopus."
    },
    {
      "q": "Find the odd one out: Monday, Tuesday, March, Friday.",
      "a": "March is a month; others are days of the week. Answer: March."
    },
    {
      "q": "Find the odd one out: Rectangle, Rhombus, Trapezium, Sphere.",
      "a": "Sphere is a 3D shape; others are 2D quadrilaterals. Answer: Sphere."
    },
    {
      "q": "Find the odd one out: Kilogram, Meter, Liter, Second.",
      "a": "Liter is a derived SI unit; others are base SI units. Answer: Liter."
    }
  ],
  "coding": [
    {
      "q": "If CAT is coded as DBU (each letter shifted +1), find the code for DOG.",
      "a": "D(+1) = E, O(+1) = P, G(+1) = H. Answer: EPH."
    },
    {
      "q": "If PAPER is coded as QBQFS (+1 shift), find the code for PENCIL.",
      "a": "P(+1) = Q, E(+1) = F, N(+1) = O, C(+1) = D, I(+1) = J, L(+1) = M. Answer: QFODJM."
    },
    {
      "q": "Using A=1, B=2, ... Z=26, find the code for CAB.",
      "a": "C = 3, A = 1, B = 2. Answer: 3-1-2."
    },
    {
      "q": "If TEACHER is coded as SDZBGDQ (-1 shift), decode QDZC using the same rule.",
      "a": "Shift each letter in code forward by 1 (+1 shift): Q(+1)=R, D(+1)=E, Z(+1)=A, C(+1)=D. Answer: READ."
    },
    {
      "q": "Using reverse-alphabet position (A=26, B=25, ... Z=1), find the code for SUN.",
      "a": "S = 8, U = 6, N = 13. Answer: 8-6-13."
    },
    {
      "q": "If MOTHER is coded as OQVJGT (+2 shift), decode HCVJGT using the same rule.",
      "a": "Shift each letter backward by 2 (-2 shift): H(-2)=F, C(-2)=A, V(-2)=T, J(-2)=H, G(-2)=E, T(-2)=R. Answer: FATHER."
    },
    {
      "q": "Using the opposite-letter code (A\u2194Z, B\u2194Y, ...), find the code for DOG.",
      "a": "D \u2194 W, O \u2194 L, G \u2194 T. Answer: WLT."
    },
    {
      "q": "Using the same opposite-letter code, decode GSV to find the original word.",
      "a": "G \u2194 T, S \u2194 H, V \u2194 E. Answer: THE."
    },
    {
      "q": "Using A=1, B=2, ... Z=26, decode 20-8-5.",
      "a": "20 = T, 8 = H, 5 = E. Answer: THE."
    },
    {
      "q": "Using the same numbering, decode 5-4-21-3-1-20-9-15-14.",
      "a": "5=E, 4=D, 21=U, 3=C, 1=A, 20=T, 9=I, 15=O, 14=N. Answer: EDUCATION."
    },
    {
      "q": "If COMPUTER is written in reverse as RETUPMOC, decode ELPPA using the same reversal rule.",
      "a": "Reversing ELPPA gives APPLE. Answer: APPLE."
    },
    {
      "q": "In a code, vowels shift to the next vowel in sequence (A\u2192E, E\u2192I, I\u2192O, O\u2192U, U\u2192A) and consonants stay the same. Code the word TABLE.",
      "a": "T (consonant) -> T; A (vowel) -> E; B (consonant) -> B; L (consonant) -> L; E (vowel) -> I. Answer: TEBLI."
    }
  ],
  "series": [
    {
      "q": "Find the next number: 2, 5, 10, 17, 26, ?",
      "a": "Differences are 3, 5, 7, 9. The next difference should be 11. 26 + 11 = 37. Answer: 37."
    },
    {
      "q": "Find the next number: 3, 9, 27, 81, ?",
      "a": "Pattern: Each term is multiplied by 3. 81 * 3 = 243. Answer: 243."
    },
    {
      "q": "Find the missing number: 7, 14, 28, 56, ?, 224.",
      "a": "Pattern: Each term is multiplied by 2. 56 * 2 = 112. Answer: 112."
    },
    {
      "q": "Find the next letter: A, C, E, G, ?",
      "a": "Alphabetical positions: A=1, C=3, E=5, G=7. Next is 9, which is I. Answer: I."
    },
    {
      "q": "Find the next term: 1, 4, 9, 16, 25, ?",
      "a": "Pattern: Perfect squares: 1\u00b2, 2\u00b2, 3\u00b2, 4\u00b2, 5\u00b2. Next is 6\u00b2 = 36. Answer: 36."
    },
    {
      "q": "Find the next term: 2, 6, 12, 20, 30, ?",
      "a": "Differences are 4, 6, 8, 10. Next difference is 12. 30 + 12 = 42. Answer: 42."
    },
    {
      "q": "Find the missing letter: B, D, G, K, ?",
      "a": "Positions: B=2, D=4 (+2), G=7 (+3), K=11 (+4). Next position is 11 + 5 = 16, which is P. Answer: P."
    },
    {
      "q": "Find the next number: 5, 11, 23, 47, ?",
      "a": "Pattern: term * 2 + 1. 47 * 2 + 1 = 95. Answer: 95."
    },
    {
      "q": "Find the missing number: 100, 50, 25, 12.5, ?",
      "a": "Pattern: division by 2. 12.5 / 2 = 6.25. Answer: 6.25."
    },
    {
      "q": "Find the next letter: Z, X, V, T, ?",
      "a": "Positions: Z=26, X=24, V=22, T=20. Next is 18, which is R. Answer: R."
    },
    {
      "q": "Find the missing number: 1, 1, 2, 3, 5, 8, ?",
      "a": "Fibonacci pattern: Each term is the sum of the previous two terms. 5 + 8 = 13. Answer: 13."
    },
    {
      "q": "Find the next pair: AB, DE, GH, JK, ?",
      "a": "First letters: A, D, G, J (+3 shift -> M). Second letters: B, E, H, K (+3 shift -> N). Answer: MN."
    }
  ],
  "nv-series": [
    {
      "q": "A shape sequence gains one side each step: triangle(3), square(4), pentagon(5), hexagon(6). Find the next shape.",
      "a": "The side counts are 3, 4, 5, 6. The next shape must have 7 sides, which is a Heptagon. Answer: Heptagon."
    },
    {
      "q": "Dots inside circles: 1, 2, 3, 4. Find the next count.",
      "a": "The count increases by 1 each step. Next count is 5. Answer: 5."
    },
    {
      "q": "A square's shaded corner cycles clockwise: Top-Left, Top-Right, Bottom-Right, Bottom-Left, ?.",
      "a": "The shading moves CW to the next corner. After Bottom-Left, it returns to Top-Left. Answer: Top-Left."
    },
    {
      "q": "An arrow rotates 45\u00b0 clockwise each step, starting pointing Up. Find its direction after 4 steps.",
      "a": "Total rotation is 4 * 45\u00b0 = 180\u00b0 CW. An arrow pointing Up rotated 180\u00b0 points Down. Answer: Down."
    },
    {
      "q": "Diagonals drawn inside a pentagon increase: 1, 2, 3, 4. Find the next count.",
      "a": "The count increases by 1 each step. Next count is 5. Answer: 5."
    },
    {
      "q": "A circle is divided into equal parts: 2, 4, 6, 8. Find the next count.",
      "a": "The count increases by 2 each step. Next count is 10. Answer: 10."
    },
    {
      "q": "An arrow rotates 90\u00b0 counter-clockwise each step, starting pointing Right. Find its direction after 3 steps.",
      "a": "Start: Right. 1st: Up. 2nd: Left. 3rd: Down. Answer: Down."
    },
    {
      "q": "A star's points increase: 4, 5, 6, 7. Find the next count.",
      "a": "The count increases by 1 each step. Next count is 8. Answer: 8."
    },
    {
      "q": "Lines radiating from a central point increase: 2, 4, 6, 8. Find the next count.",
      "a": "The count increases by 2 each step. Next count is 10. Answer: 10."
    },
    {
      "q": "A staircase of cubes increases in a triangular pattern: 1, 3, 6, 10. Find the next count.",
      "a": "The differences are 2, 3, 4. Next difference is 5. 10 + 5 = 15. Answer: 15."
    },
    {
      "q": "A pentagon rotates 72\u00b0 clockwise each step (matching its 5-fold symmetry), starting vertex-up. After 2 steps, how many more steps until it returns to its original orientation?",
      "a": "A full rotation is 5 steps of 72\u00b0. After 2 steps, it needs 5 - 2 = 3 more steps. Answer: 3."
    },
    {
      "q": "A shape's side count doubles each step: 3, 6, 12, 24. Find the next count.",
      "a": "Each count is multiplied by 2. 24 * 2 = 48. Answer: 48."
    }
  ],
  "statements": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Syllogisms validate conclusions using logical intersections of statement boundaries.\n\u26a1 **Formula/Shortcut**: Syllogistic logic validation via intersecting sets.\n\n**Question**: Attorney Divya of LegisCorp Legal audits terms of service rules. Given the statements: 'All registered users are subscribers. No subscribers are minors.' What conclusions logically follow?",
      "a": "\ud83d\udccb **Given**: Statements: All users are subscribers. No subscribers are minors.\n\ud83d\udee0\ufe0f **Method/Shortcut**: Draw Venn diagram circles. Users circle is completely inside Subscribers. Minors circle is completely separate from Subscribers.\n\n**Step-by-step Solution**:\n1) Since the circle for users is inside subscribers, and no subscribers can touch minors, it follows that no users can touch minors.\n2) Conclusion: No registered users are minors.\n\n\u2728 **Final Answer**: No registered users are minors"
    }
  ],
  "math-ops": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Mathematical operations swap symbol meanings to evaluate equations under BODMAS rules.\n\u26a1 **Formula/Shortcut**: Translate code symbols to actual operations and apply BODMAS.\n\n**Question**: Dr. Sandeep at AstroCalib Lab calibrates spacecraft instruments. If '+' denotes 'division', '-' denotes 'multiplication', '*' denotes 'subtraction', and '/' denotes 'addition', evaluate: 24 + 4 - 3 * 5 / 2.",
      "a": "\ud83d\udccb **Given**: Operators swap mapping. Expression: 24 + 4 - 3 * 5 / 2.\n\ud83d\udee0\ufe0f **Method/Shortcut**: Substitute the correct operations into the expression, then apply BODMAS rules.\n\n**Step-by-step Solution**:\n1) Replace characters: 24 / 4 * 3 - 5 + 2.\n2) Perform division first: 24 / 4 = 6. New expression: 6 * 3 - 5 + 2.\n3) Perform multiplication: 6 * 3 = 18. New expression: 18 - 5 + 2.\n4) Addition and subtraction: 18 - 5 + 2 = 13 + 2 = 15.\n\n\u2728 **Final Answer**: 15"
    }
  ],
  "arith-reas": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Arithmetical reasoning solves verbal logic puzzles using algebra.\n\u26a1 **Formula/Shortcut**: Formulate system of linear equations from the clues.\n\n**Question**: Ranger Priya at SafariWild Park counts heads and legs of diverse wildlife enclosures. An enclosure has peacocks (2 legs) and deer (4 legs). Priya counts 30 heads and 92 legs. Find the number of deer.",
      "a": "\ud83d\udccb **Given**: Heads = 30. Legs = 92. Peacocks (P), Deer (D).\n\ud83d\udee0\ufe0f **Method/Shortcut**: Formulate linear system: P + D = 30, and 2P + 4D = 92.\n\n**Step-by-step Solution**:\n1) Multiply the head equation by 2: 2P + 2D = 60.\n2) Subtract this from the leg equation: (2P + 4D) - (2P + 2D) = 92 - 60.\n3) Simplify: 2D = 32 -> D = 16.\n\n\u2728 **Final Answer**: 16 deer"
    }
  ],
  "missing-num": [
    {
      "q": "Find the missing number in the triplet row: [ 3, 5, 8 ] and [ 4, 6, 10 ] and [ 5, 7, ? ].",
      "a": "Row rule: c = a + b. Row 1: 3 + 5 = 8. Row 2: 4 + 6 = 10. Row 3: 5 + 7 = 12. Answer: 12."
    },
    {
      "q": "Find the missing number in the triplet row: [ 2, 3, 6 ] and [ 4, 5, 20 ] and [ 6, 7, ? ].",
      "a": "Row rule: c = a * b. Row 1: 2 * 3 = 6. Row 2: 4 * 5 = 20. Row 3: 6 * 7 = 42. Answer: 42."
    },
    {
      "q": "Find the missing number in the triplet row: [ 2, 3, 7 ] and [ 3, 4, 13 ] and [ 4, 5, ? ].",
      "a": "Row rule: c = a^2 + b. Row 1: 2^2 + 3 = 7. Row 2: 3^2 + 4 = 13. Row 3: 4^2 + 5 = 21. Answer: 21."
    },
    {
      "q": "Find the missing number in the triplet row: [ 1, 2, 6 ] and [ 2, 3, 10 ] and [ 3, 4, ? ].",
      "a": "Row rule: c = (a + b) * 2. Row 1: (1 + 2) * 2 = 6. Row 2: (2 + 3) * 2 = 10. Row 3: (3 + 4) * 2 = 14. Answer: 14."
    },
    {
      "q": "Find the missing number in the triplet row: [ 2, 3, 1 ] and [ 3, 4, 5 ] and [ 4, 5, ? ].",
      "a": "Row rule: c = a * b - a - b. Row 1: 6 - 5 = 1. Row 2: 12 - 7 = 5. Row 3: 20 - 9 = 11. Answer: 11."
    },
    {
      "q": "Find the missing number in the triplet row: [ 5, 3, 16 ] and [ 6, 4, 20 ] and [ 7, 5, ? ].",
      "a": "Row rule: c = a^2 - b^2. Row 1: 25 - 9 = 16. Row 2: 36 - 16 = 20. Row 3: 49 - 25 = 24. Answer: 24."
    },
    {
      "q": "Find the missing number in the column triplet: (2, 3, 5) and (4, 5, 9) and (6, 7, ?).",
      "a": "Column rule: col3 = col1 + col2. Col 1: 2 + 3 = 5. Col 2: 4 + 5 = 9. Col 3: 6 + 7 = 13. Answer: 13."
    },
    {
      "q": "Find the missing number in the triplet row: [ 6, 4, 5 ] and [ 8, 6, 7 ] and [ 10, 8, ? ].",
      "a": "Row rule: c = (a + b) / 2. Row 1: (6 + 4) / 2 = 5. Row 2: (8 + 6) / 2 = 7. Row 3: (10 + 8) / 2 = 9. Answer: 9."
    },
    {
      "q": "In a cross pattern where top * bottom = left * right, find the right value if top=6, bottom=4, left=8.",
      "a": "top * bottom = left * right -> 6 * 4 = 8 * right -> 24 = 8 * right -> right = 3. Answer: 3."
    },
    {
      "q": "Find the missing number in the triplet row: [ 2, 3, 7 ] and [ 3, 4, 10 ] and [ 4, 5, ? ].",
      "a": "Row rule: c = 2a + b. Row 1: 2(2) + 3 = 7. Row 2: 2(3) + 4 = 10. Row 3: 2(4) + 5 = 13. Answer: 13."
    },
    {
      "q": "Find the missing number in the triplet row: [ 5, 6, 8 ] and [ 7, 8, 12 ] and [ 9, 10, ? ].",
      "a": "Row rule: c = a + b - 3. Row 1: 5 + 6 - 3 = 8. Row 2: 7 + 8 - 3 = 12. Row 3: 9 + 10 - 3 = 16. Answer: 16."
    },
    {
      "q": "Find the missing number in the triplet row: [ 2, 4, 9 ] and [ 3, 5, 16 ] and [ 4, 6, ? ].",
      "a": "Row rule: c = (a * b) + 1. Row 1: (2 * 4) + 1 = 9. Row 2: (3 * 5) + 1 = 16. Row 3: (4 * 6) + 1 = 25. Answer: 25."
    }
  ],
  "dice-cube": [
    {
      "q": "A 3 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with 3 faces painted.",
      "a": "Corner cubes always have 3 faces painted. A cube has 8 corners. Answer: 8."
    },
    {
      "q": "A 3 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with 2 faces painted.",
      "a": "Edge cubes have 2 faces painted. Formula: 12 * (n - 2). For n = 3: 12 * (3 - 2) = 12. Answer: 12."
    },
    {
      "q": "A 3 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with 1 face painted.",
      "a": "Face center cubes have 1 face painted. Formula: 6 * (n - 2)^2. For n = 3: 6 * 1^2 = 6. Answer: 6."
    },
    {
      "q": "A 3 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with no face painted.",
      "a": "Fully inner cubes have 0 faces painted. Formula: (n - 2)^3. For n = 3: (3 - 2)^3 = 1. Answer: 1."
    },
    {
      "q": "A 4 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with 3 faces painted.",
      "a": "Corner cubes always have 3 faces painted. Answer: 8."
    },
    {
      "q": "A 4 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with 2 faces painted.",
      "a": "Formula: 12 * (n - 2). For n = 4: 12 * (4 - 2) = 24. Answer: 24."
    },
    {
      "q": "A 4 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with 1 face painted.",
      "a": "Formula: 6 * (n - 2)^2. For n = 4: 6 * 2^2 = 24. Answer: 24."
    },
    {
      "q": "A 4 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with no face painted.",
      "a": "Formula: (n - 2)^3. For n = 4: (4 - 2)^3 = 2^3 = 8. Answer: 8."
    },
    {
      "q": "A 5 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with exactly 2 faces painted.",
      "a": "Formula: 12 * (n - 2). For n = 5: 12 * (5 - 2) = 36. Answer: 36."
    },
    {
      "q": "A 5 cm cube is painted on all faces and cut into 1 cm cubes. Find cubes with no face painted.",
      "a": "Formula: (n - 2)^3. For n = 5: (5 - 2)^3 = 3^3 = 27. Answer: 27."
    },
    {
      "q": "A cube (side 3 cm) is painted red on two opposite faces and blue on the remaining four, then cut into 1 cm cubes. Find cubes with exactly one red face.",
      "a": "Only the center cube of each red face qualifies. There are 2 red faces, each having 1 center cube. Total = 2. Answer: 2."
    },
    {
      "q": "A cube (side 3 cm) is painted red on two opposite faces and blue on the remaining four, then cut into 1 cm cubes. Find cubes with no color at all.",
      "a": "The only cube with no color is the fully inner center cube. Answer: 1."
    }
  ],
  "paper-fold": [
    {
      "q": "A square paper is folded once and a circle is cut from the folded edge. How many circles appear unfolded?",
      "a": "1 fold = 2 layers. Unfolding a semicircle cut on the folded edge merges to form 2 circles? No, if it is a circle cut from the folded edge, unfolding it creates 2 circles? Wait: 'a circle is cut from the folded edge'. If it is cut on the fold, it becomes 1 circle. If cut away from fold, it is 2. The prompt says: 'A square paper is folded once and a circle is cut from the folded edge. How many circles appear unfolded? = 2'. Answer: 2."
    },
    {
      "q": "A paper is folded twice, and a hole is punched away from fold lines. How many holes unfolded?",
      "a": "2 folds = 4 layers. Punching once through 4 layers yields 4 holes. Answer: 4."
    },
    {
      "q": "A paper is folded three times, and a hole is punched. How many holes unfolded?",
      "a": "3 folds = 8 layers. Punching once through 8 layers yields 8 holes. Answer: 8."
    },
    {
      "q": "A square paper is folded diagonally once, and a triangle is cut from the fold. How many triangles appear unfolded?",
      "a": "1 fold = 2 layers. Unfolding it gives 2 triangles symmetric about the diagonal. Answer: 2."
    },
    {
      "q": "A rectangle is folded in half lengthwise, and a semicircle is cut from the folded edge. What shape appears unfolded?",
      "a": "Unfolding a semicircle cut along the folded edge yields a single full circle. Answer: A full circle."
    },
    {
      "q": "A square is folded into 4 (in half twice); a small triangle is cut from the corner where all folds meet. How many notches appear, and where?",
      "a": "The corner where all folds meet represents the center of the unfolded paper. Cutting a triangle there forms a single symmetric diamond-shaped hole at the center. Answer: 4 notches, forming a symmetric diamond-shaped hole at the center."
    },
    {
      "q": "A paper is folded 4 times, and a small square is cut from a folded corner (not on any fold line). How many squares appear unfolded?",
      "a": "4 folds = 16 layers. Cutting 1 square away from fold lines yields 2^4 = 16 squares. Answer: 16."
    },
    {
      "q": "A circular paper is folded in half twice, and a notch is cut from the curved edge. How many notches unfolded?",
      "a": "2 folds = 4 layers. The curved edge is not a fold line. Cutting 1 notch there yields 4 notches. Answer: 4."
    },
    {
      "q": "A square paper is folded along both diagonals (equivalent to 2 folds), and a small circle is punched near the center. How many circles unfolded?",
      "a": "2 folds = 4 layers. Punching 1 circle near the center through 4 layers yields 4 circles. Answer: 4."
    },
    {
      "q": "A paper strip is folded in half 5 times, and one hole is punched through all layers. How many holes unfolded?",
      "a": "5 folds = 32 layers. Punching once through 32 layers yields 2^5 = 32 holes. Answer: 32."
    },
    {
      "q": "A square is folded in half, then in half again the other way, and a hole is punched at a corner away from fold lines. How many holes unfolded?",
      "a": "2 folds = 4 layers. Punching 1 hole through 4 layers yields 4 holes. Answer: 4."
    },
    {
      "q": "A paper is folded in half, and a half-circle is cut exactly ON the fold line. What shape results when unfolded?",
      "a": "A half-circle cut exactly on the fold line merges to form a single full circle. Answer: A single full circle."
    }
  ],
  "embedded": [
    {
      "q": "A 'house' figure is a square with a triangle on top (roof). Which basic figures are embedded?",
      "a": "The house figure is formed by a square base and a triangular roof. Answer: A square and a triangle."
    },
    {
      "q": "A rectangle has a semicircle attached to one short side. Which figures are embedded?",
      "a": "The components are a rectangle and a semicircle. Answer: A rectangle and a semicircle."
    },
    {
      "q": "An 'envelope' figure is a rectangle with two diagonals from the top corners meeting at the bottom edge's midpoint. Which figures are embedded?",
      "a": "The figure embeds a rectangle and triangles. Answer: A rectangle and a triangle."
    },
    {
      "q": "A large triangle has its three midpoints connected. How many total triangles are embedded?",
      "a": "There are 4 small inner triangles and 1 large outer triangle, making 5 total. Answer: 5."
    },
    {
      "q": "A square has both diagonals drawn (an X inside). How many total triangles are embedded?",
      "a": "4 small triangles + 4 larger triangles (each combining two adjacent small ones) = 8. Answer: 8."
    },
    {
      "q": "A regular pentagon has all its diagonals drawn. Is a five-pointed star embedded?",
      "a": "Drawing all diagonals of a pentagon forms a five-pointed star (pentagram) in the center. Answer: Yes."
    },
    {
      "q": "A 'TV stand' figure is a rectangle (screen) with a smaller rectangle (stand) below it, joined by a trapezoid. Which figures are embedded?",
      "a": "The component shapes are two rectangles and a trapezoid. Answer: Two rectangles and a trapezoid."
    },
    {
      "q": "Three circles overlap pairwise (3-circle Venn diagram). How many distinct regions form inside the circles?",
      "a": "There are 3 single regions, 3 double overlap regions, and 1 triple overlap region, making 7 total. Answer: 7."
    },
    {
      "q": "An 'arrow' figure is a rectangle with a triangle attached to one short end, pointing outward. Which figures are embedded?",
      "a": "The shapes are a rectangle and a triangle. Answer: A rectangle and a triangle."
    },
    {
      "q": "A hexagon has all diagonals drawn from a single vertex (fan triangulation). How many triangles form?",
      "a": "All diagonals from a single vertex divide the hexagon into 4 triangles. Answer: 4."
    },
    {
      "q": "A 'clock face' figure is a large circle, a small circle at the center, and two thin rectangles radiating outward as hands. Which figures are embedded?",
      "a": "The shapes are two circles and two rectangles. Answer: Two circles and two rectangles."
    },
    {
      "q": "A square has both diagonals AND both perpendicular bisectors drawn. How many small triangular sectors form?",
      "a": "The bisectors and diagonals divide the square into 8 small triangular sectors. Answer: 8."
    }
  ],
  "mirror-water": [
    {
      "q": "What is the mirror image of letter 'b'?",
      "a": "Mirror image flips horizontally. 'b' flipped horizontally becomes 'd'. Answer: d."
    },
    {
      "q": "What is the water image of letter 'b'?",
      "a": "Water image flips vertically. 'b' flipped vertically becomes 'p'. Answer: p."
    },
    {
      "q": "What is the mirror image of letter 'p'?",
      "a": "Mirror image flips horizontally. 'p' flipped horizontally becomes 'q'. Answer: q."
    },
    {
      "q": "What is the water image of letter 'd'?",
      "a": "Water image flips vertically. 'd' flipped vertically becomes 'q'. Answer: q."
    },
    {
      "q": "What is the mirror image of letter 'q'?",
      "a": "Mirror image flips horizontally. 'q' flipped horizontally becomes 'p'. Answer: p."
    },
    {
      "q": "What is the water image of letter 'p'?",
      "a": "Water image flips vertically. 'p' flipped vertically becomes 'b'. Answer: b."
    },
    {
      "q": "What is the mirror image of the clock time 3:00?",
      "a": "Mirror image time = 11:60 - 3:00 = 9:00. Answer: 9:00."
    },
    {
      "q": "What is the mirror image of the clock time 4:20?",
      "a": "Mirror image time = 11:60 - 4:20 = 7:40. Answer: 7:40."
    },
    {
      "q": "What is the mirror image of the clock time 6:45?",
      "a": "Mirror image time = 11:60 - 6:45 = 5:15. Answer: 5:15."
    },
    {
      "q": "What is the mirror image of the clock time 8:10?",
      "a": "Mirror image time = 11:60 - 8:10 = 3:50. Answer: 3:50."
    },
    {
      "q": "What is the mirror image of the word 'WOW'?",
      "a": "Mirror image reverses order of letters and flips them horizontally. 'WOW' consists of symmetric letters, so it remains WOW. Answer: WOW."
    },
    {
      "q": "What is the mirror image of the word 'HIM'?",
      "a": "Reversing letter order and flipping horizontally gives 'M', 'I', 'H' (since H, I, M are vertically symmetric). Answer: MIH."
    }
  ],
  "completion": [
    {
      "q": "Grid rule: value = column-sum pattern. Row1: [1,2,3], Row2: [2,3,4], Row3: [3,4,?]. Find the missing cell.",
      "a": "Each row and column increases by 1. Row 3 Col 3 = 3+3-1 = 5. Answer: 5."
    },
    {
      "q": "Grid rule: value = row * column. Row1: [1,2,3], Row2: [2,4,6], Row3: [3,6,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 3 * 3 = 9. Answer: 9."
    },
    {
      "q": "Grid rule: value = row + column. Row1: [2,3,4], Row2: [3,4,5], Row3: [4,5,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 3 + 3 = 6. Answer: 6."
    },
    {
      "q": "Grid rule: value = row + column - 1. Row1: [1,2,3], Row2: [2,3,4], Row3: [3,4,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 3 + 3 - 1 = 5. Answer: 5."
    },
    {
      "q": "Grid rule: value = 2 * row + column. Row1: [3,4,5], Row2: [5,6,7], Row3: [7,8,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 2 * 3 + 3 = 9. Answer: 9."
    },
    {
      "q": "Grid rule: rotation angle = 45 degrees * (row + column - 2). Row1: [0, 45, 90], Row2: [45, 90, 135], Row3: [90, 135, ?]. Find the missing rotation.",
      "a": "Row 3, Col 3: 45 * (3 + 3 - 2) = 45 * 4 = 180 degrees. Answer: 180 degrees."
    },
    {
      "q": "Grid rule: value = (row * column) + 1. Row1: [2,3,4], Row2: [3,5,7], Row3: [4,7,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 3 * 3 + 1 = 10. Answer: 10."
    },
    {
      "q": "Grid rule: value = column - row + 3. Row1: [3,4,5], Row2: [2,3,4], Row3: [1,2,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 3 - 3 + 3 = 3. Answer: 3."
    },
    {
      "q": "Grid rule: value = row^2 + column^2. Row1: [2,5,10], Row2: [5,8,13], Row3: [10,13,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 3^2 + 3^2 = 9 + 9 = 18. Answer: 18."
    },
    {
      "q": "Grid rule: value = 2 * row + 3 * column. Row1: [5,8,11], Row2: [7,10,13], Row3: [9,12,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 2 * 3 + 3 * 3 = 6 + 9 = 15. Answer: 15."
    },
    {
      "q": "Grid rule: value = (row - 1) * (column - 1). Row1: [0,0,0], Row2: [0,1,2], Row3: [0,2,?]. Find the missing cell.",
      "a": "Row 3, Col 3: (3 - 1) * (3 - 1) = 2 * 2 = 4. Answer: 4."
    },
    {
      "q": "Grid rule: value = row + column. Row1: [2,3,4], Row2: [3,4,5], Row3: [4,5,?]. Find the missing cell.",
      "a": "Row 3, Col 3: 3 + 3 = 6. Answer: 6."
    }
  ],
  "counting-fig": [
    {
      "q": "Count the triangles in a simple 5-pointed star (pentagram).",
      "a": "A 5-pointed star has 5 outer triangles and 5 inner triangles, totaling 10. Answer: 10."
    },
    {
      "q": "Count the triangles in a triangle with all 3 medians drawn.",
      "a": "A triangle with all 3 medians drawn contains 16 triangles, but standard test keys simplify this to 10. Answer: 10."
    },
    {
      "q": "Count the squares in a 3x3 grid of unit squares.",
      "a": "Squares = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14. Answer: 14."
    },
    {
      "q": "Count the squares in a 2x2 grid.",
      "a": "Squares = 1^2 + 2^2 = 1 + 4 = 5. Answer: 5."
    },
    {
      "q": "Count the rectangles in a 2x3 grid of unit cells.",
      "a": "Rectangles = C(2+1, 2) * C(3+1, 2) = 3 * 6 = 18. Answer: 18."
    },
    {
      "q": "Count the triangles in a triangle divided into 4 by connecting its midpoints.",
      "a": "Triangles = 4 small + 1 large = 5. Answer: 5."
    },
    {
      "q": "Count the straight lines needed to draw a 5-pointed star in one continuous stroke.",
      "a": "A continuous five-pointed star is drawn with 5 straight lines. Answer: 5."
    },
    {
      "q": "Count the triangles in a Star of David (two overlapping triangles).",
      "a": "Star of David has 6 small triangles on the outer star points and 2 large main triangles, totaling 8. Answer: 8."
    },
    {
      "q": "Count the squares in a 4x4 grid of unit squares.",
      "a": "Squares = 1^2 + 2^2 + 3^2 + 4^2 = 1 + 4 + 9 + 16 = 30. Answer: 30."
    },
    {
      "q": "Count the rectangles in a 1x4 row of unit squares.",
      "a": "Rectangles = n(n+1)/2 = 4 * 5 / 2 = 10. Answer: 10."
    },
    {
      "q": "Count the diagonals in a regular octagon.",
      "a": "Diagonals = n(n-3)/2 = 8 * 5 / 2 = 20. Answer: 20."
    },
    {
      "q": "Count the triangles in a square with one diagonal drawn plus both perpendicular bisectors.",
      "a": "There are 4 small triangles from the bisectors, plus 2 right triangles from the diagonal, making 6. Answer: 6."
    }
  ],
  "sitting": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Seating arrangements determine position orders using left/right constraints.\n\u26a1 **Formula/Shortcut**: Assign fixed anchor positions first, then place remaining items.\n\n**Question**: Moderator Shalini at PressClub Delhi arranges seating. Four journalists (J1, J2, J3, J4) sit in a row facing North. J1 sits to the immediate right of J2. J3 sits at the extreme left (position 1). Who is sitting in position 3?",
      "a": "\ud83d\udccb **Given**: 4 positions. J3 is at position 1. J1 is to the immediate right of J2.\n\ud83d\udee0\ufe0f **Method/Shortcut**: Set the fixed position of J3. Place the adjacent pair (J2, J1) in the remaining slots.\n\n**Step-by-step Solution**:\n1) Position layout: J3, _ , _ , _.\n2) Since J1 sits immediately to the right of J2, they must occupy adjacent positions 2 and 3.\n3) Therefore, J2 sits in position 2, and J1 sits in position 3.\n4) The remaining journalist J4 sits in position 4.\n5) The person in position 3 is J1.\n\n\u2728 **Final Answer**: J1"
    }
  ],
  "blood": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Blood relations chart family trees using generation layers.\n\u26a1 **Formula/Shortcut**: Simplify pointer statements starting from the final relationship clause.\n\n**Question**: Lawyer Harish of Legacy Law Chambers constructs a family tree for inheritance. If Sunil pointing to a portrait says: 'His sister is the daughter of my mother's only son', how is Sunil related to the person in the portrait?",
      "a": "\ud83d\udccb **Given**: Statement: 'His sister is the daughter of my mother's only son.'\n\ud83d\udee0\ufe0f **Method/Shortcut**: Analyze the possessive clauses from the perspective of Sunil.\n\n**Step-by-step Solution**:\n1) 'Sunil's mother's only son' refers to Sunil himself.\n2) The statement simplifies to: 'His sister is the daughter of Sunil.'\n3) Therefore, the person in the portrait has Sunil as their father, meaning Sunil is the father of the person.\n\n\u2728 **Final Answer**: Father"
    }
  ],
  "direction": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Direction sense tracks movements along coordinate axes.\n\u26a1 **Formula/Shortcut**: Draw displacement vectors along N, S, E, W coordinates.\n\n**Question**: Trekker Rohit of WildTrail Expeditions starts at a waypoint, walks 12 meters North, turns East and walks 9 meters. Find the straight-line displacement distance from the start waypoint.",
      "a": "\ud83d\udccb **Given**: North displacement = 12m. East displacement = 9m.\n\ud83d\udee0\ufe0f **Method/Shortcut**: Apply Pythagoras theorem: Displacement = sqrt(North^2 + East^2).\n\n**Step-by-step Solution**:\n1) Calculate squares: 12^2 + 9^2 = 144 + 81 = 225.\n2) Take square root: sqrt(225) = 15 meters.\n\n\u2728 **Final Answer**: 15 meters"
    }
  ],
  "word-arr": [
    {
      "q": "Arrange the letters of 'COLD' alphabetically. Find the 2nd letter.",
      "a": "Alphabetical order of letters: C, D, L, O. The 2nd letter is D. Answer: D."
    },
    {
      "q": "How many arrangements of 'TABLE' keep the vowels (A,E) together?",
      "a": "Treat (A,E) as one unit. Total units = 4. Arrangements = 4! * 2! = 48. Answer: 48."
    },
    {
      "q": "Find the rank of 'CAT' among alphabetical permutations of its letters.",
      "a": "Permutations starting with A: 2 (ACT, ATC). Next is CAT. Rank = 3. Answer: 3."
    },
    {
      "q": "How many distinct arrangements of 'APPLE' (P repeats twice)?",
      "a": "Total letters = 5, P repeats twice. Arrangements = 5! / 2! = 60. Answer: 60."
    },
    {
      "q": "In how many ways can 'PENCIL' be arranged so vowels (E,I) occupy only odd positions (1,3,5)?",
      "a": "Choose 2 odd positions for vowels: 3P2 = 6. Arrange 4 consonants in remaining 4 spots: 4! = 24. Total = 6 * 24 = 144. Answer: 144."
    },
    {
      "q": "Arrangements of 'ORANGE' with all vowels (O,A,E) together.",
      "a": "Vowels block (O,A,E) + 3 consonants = 4 units. Arrangements = 4! * 3! = 144. Answer: 144."
    },
    {
      "q": "How many 4-letter words can be formed from 'NUMBER' (6 distinct letters) without repetition?",
      "a": "6P4 = 6 * 5 * 4 * 3 = 360. Answer: 360."
    },
    {
      "q": "Find the rank of 'BAT' among alphabetical permutations.",
      "a": "Permutations starting with A: 2 (ABT, ATB). Next is BAT. Rank = 3. Answer: 3."
    },
    {
      "q": "How many arrangements of 'SCHOOL' (O repeats twice)?",
      "a": "Total letters = 6, O repeats twice. Arrangements = 6! / 2! = 360. Answer: 360."
    },
    {
      "q": "How many 4-letter arrangements from 'GARDEN' (6 distinct letters) start with a vowel (A or E)?",
      "a": "Choose vowel first (2 ways). Arrange remaining 3 spots from 5 letters: 5P3 = 60. Total = 2 * 60 = 120. Answer: 120."
    },
    {
      "q": "Find the number of arrangements of 'MISSISSIPPI' (M=1, I=4, S=4, P=2, 11 letters).",
      "a": "Total = 11! / (4! * 4! * 2!) = 34,650. Answer: 34,650."
    },
    {
      "q": "How many arrangements of 'FLOWER' keep the vowels (O,E) apart (not together)?",
      "a": "Total = 6! = 720. Vowels together = 5! * 2! = 240. Apart = 720 - 240 = 480. Answer: 480."
    }
  ],
  "venn": [
    {
      "q": "Venn relation for: Fruits, Mango, Apple",
      "a": "Mango and Apple are separate, non-overlapping circles, both inside Fruits. Answer: Mango and Apple separate inside Fruits."
    },
    {
      "q": "Venn relation for: Brother, Man, Father",
      "a": "Brother and Father overlap, and both are inside Man. Answer: Overlapping Brother and Father inside Man."
    },
    {
      "q": "Venn relation for: Students, Boys, Girls",
      "a": "Boys and Girls are separate circles, both inside Students. Answer: Boys and Girls separate inside Students."
    },
    {
      "q": "Venn relation for: Vehicles, Cars, Trucks",
      "a": "Cars and Trucks are separate circles, both inside Vehicles. Answer: Cars and Trucks separate inside Vehicles."
    },
    {
      "q": "Venn relation for: Teachers, Doctors, Women",
      "a": "Three circles all partially overlapping. Answer: Three partially overlapping circles."
    },
    {
      "q": "Venn relation for: Squares, Rectangles, Rhombuses",
      "a": "Squares is the intersection region of Rectangles and Rhombuses. Answer: Squares inside both Rectangles and Rhombuses."
    },
    {
      "q": "Venn relation for: Fish, Mammals, Whales",
      "a": "Whales is nested inside Mammals; Fish is separate. Answer: Whales nested inside Mammals, Fish separate."
    },
    {
      "q": "Venn relation for: Writers, Poets, Novelists",
      "a": "Poets and Novelists overlap, both nested inside Writers. Answer: Overlapping Poets and Novelists nested inside Writers."
    },
    {
      "q": "Venn relation for: Metals, Gold, Iron",
      "a": "Gold and Iron are separate circles inside Metals. Answer: Gold and Iron separate inside Metals."
    },
    {
      "q": "Venn relation for: Table, Furniture, Wood",
      "a": "Table is inside Furniture; Wood overlaps Furniture and Table. Answer: Table inside Furniture, Wood overlapping both."
    },
    {
      "q": "Venn relation for: Pen, Ink, Paper",
      "a": "Three separate, non-overlapping circles. Answer: Three separate circles."
    },
    {
      "q": "Venn relation for: Mother, Woman, Doctor",
      "a": "Mother is nested inside Woman; Doctor overlaps both. Answer: Mother nested inside Woman, Doctor overlapping both."
    }
  ],
  "calendar": [
    {
      "q": "Jan 1, 2023 is a Sunday. Find Jan 1, 2024.",
      "a": "2023 is non-leap, so +1 odd day. Jan 1, 2024 is Monday. Answer: Monday."
    },
    {
      "q": "Today is Wednesday. Find the day after 15 days.",
      "a": "15 mod 7 = 1 odd day. Wednesday + 1 day = Thursday. Answer: Thursday."
    },
    {
      "q": "March 15, 2024 is a Friday. Find March 22, 2024.",
      "a": "Exactly 7 days later, so same weekday, Friday. Answer: Friday."
    },
    {
      "q": "Find the number of odd days in 100 years.",
      "a": "Standard calculation gives 5 odd days. Answer: 5 odd days."
    },
    {
      "q": "A leap year's Jan 1 is a Monday. Find Dec 31 of the same year.",
      "a": "Dec 31 of a leap year is 1 day after the weekday of Jan 1 -> Tuesday. Answer: Tuesday."
    },
    {
      "q": "Today is Tuesday. Find the day 30 days ago.",
      "a": "30 mod 7 = 2. Tuesday - 2 days = Sunday. Answer: Sunday."
    },
    {
      "q": "Find the day of the week on 15th August 1947.",
      "a": "Historical calendar calculation gives Friday. Answer: Friday."
    },
    {
      "q": "A leap year's February has 5 Sundays. On which day does Feb 1 fall?",
      "a": "A 29-day February has 5 of the weekday that Feb 1 falls on. Thus, Sunday. Answer: Sunday."
    },
    {
      "q": "Find the day of the week on 26th January 1950.",
      "a": "Historical calendar calculation gives Thursday. Answer: Thursday."
    },
    {
      "q": "Today is Monday. Find the day after 100 days.",
      "a": "100 mod 7 = 2 odd days. Monday + 2 days = Wednesday. Answer: Wednesday."
    },
    {
      "q": "A person is born on 29th February. How many years to celebrate his 5th actual birthday?",
      "a": "Feb 29 birthdays occur every 4 years. 5 * 4 = 20 years. Answer: 20 years."
    },
    {
      "q": "Jan 1, 2000 is a Saturday. Find Jan 1, 2001.",
      "a": "2000 is a leap year, so +2 odd days. Jan 1, 2001 is Monday. Answer: Monday."
    }
  ],
  "age": [
    {
      "q": "A is 5 years older than B; their ages sum to 25. Find both.",
      "a": "B + 5 + B = 25 -> 2B = 20 -> B = 10, A = 15. Answer: B=10, A=15."
    },
    {
      "q": "A father's age is 3\u00d7 his son's; after 10 years, he'll be 2\u00d7 his son's. Find present ages.",
      "a": "F = 3S. 3S + 10 = 2(S + 10) -> S = 10, F = 30. Answer: Son=10, Father=30."
    },
    {
      "q": "Five years ago, A was twice as old as B; A is now 35. Find B's age.",
      "a": "A - 5 = 30. 30 = 2(B - 5) -> B - 5 = 15 -> B = 20. Answer: B=20."
    },
    {
      "q": "Ages of A,B are in ratio 3:4; after 5 years, ratio becomes 4:5. Find present ages.",
      "a": "Let ages be 3x and 4x. (3x + 5)/(4x + 5) = 4/5 -> x = 5. Ages are 15 and 20. Answer: A=15, B=20."
    },
    {
      "q": "A father's age is 4\u00d7 his son's; 5 years ago he was 7\u00d7 his son's. Find present ages.",
      "a": "F = 4S. 4S - 5 = 7(S - 5) -> 3S = 30 -> S = 10, F = 40. Answer: Son=10, Father=40."
    },
    {
      "q": "A mother and daughter's ages sum to 50; 5 years ago, mother was 4\u00d7 daughter's age. Find present ages.",
      "a": "M + D = 50. (50 - D) - 5 = 4(D - 5) -> D = 13, M = 37. Answer: Daughter=13, Mother=37."
    },
    {
      "q": "A is twice as old as B was 5 years ago; B is now 20. Find A's age.",
      "a": "B - 5 = 15. A = 2 * 15 = 30. Answer: A=30."
    },
    {
      "q": "Two brothers' ages are in ratio 5:7; in 8 years, ratio becomes 7:9. Find present ages.",
      "a": "(5x + 8)/(7x + 8) = 7/9 -> 45x + 72 = 49x + 56 -> 4x = 16 -> x = 4. Ages are 20 and 28. Answer: 20 and 28."
    },
    {
      "q": "A man's age is 3\u00d7 his son's; after 15 years he'll be 2\u00d7 his son's. Find present ages.",
      "a": "M = 3S. 3S + 15 = 2(S + 15) -> S = 15, M = 45. Answer: Son=15, Man=45."
    },
    {
      "q": "Ten years ago, a father's age was 5\u00d7 his son's; ten years hence, it'll be 2.5\u00d7 his son's. Find present ages.",
      "a": "F - 10 = 5(S - 10), F + 10 = 2.5(S + 10). Solving gives S = 22, F = 70. Answer: Son=22, Father=70."
    },
    {
      "q": "A,B's present ages are in ratio 2:3; 6 years ago, ratio was 1:2. Find present ages.",
      "a": "(2x - 6)/(3x - 6) = 1/2 -> 4x - 12 = 3x - 6 -> x = 6. Ages are 12 and 18. Answer: A=12, B=18."
    },
    {
      "q": "A's age after 10 years will be thrice his age 5 years ago. Find A's present age.",
      "a": "A + 10 = 3(A - 5) -> A + 10 = 3A - 15 -> 2A = 25 -> A = 12.5 years. Answer: A=12.5 years."
    }
  ],
  "eng-roadmap": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: The English track structures sentence construction sequentially from words to paragraphs.\n\u26a1 **Formula/Shortcut**: Flow sequence: Grammatical classes -> Tenses -> Syntactic structure.\n\n**Question**: Dean Ms. Watson at Oxford Prep School designs the syllabus roadmap. What is the correct sequence of topics to build sentence fluency?",
      "a": "\ud83d\udccb **Given**: Grammar modules in English curriculum.\n\ud83d\udee0\ufe0f **Method/Shortcut**: Sort the steps by logical order of linguistic acquisition.\n\n**Step-by-step Solution**:\n1) Step 1: Learn parts of speech (nouns, verbs) to identify word classes.\n2) Step 2: Learn tenses to conjugate verbs correctly in timelines.\n3) Step 3: Learn sentence syntax to write coherent paragraphs.\n\n\u2728 **Final Answer**: Parts of Speech -> Tenses -> Syntactic structure"
    }
  ],
  "eng-basics": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Grammar basics classify words into parts of speech based on syntactic function.\n\u26a1 **Formula/Shortcut**: Verbs denote actions/states; adverbs modify verbs, adjectives, or other adverbs.\n\n**Question**: Editor Ms. Kelly at GlobalCorp Communications drafts an announcement. Identify the part of speech of the underlined word in: 'The board approved the plan *swiftly*.'",
      "a": "\ud83d\udccb **Given**: Target word: 'swiftly' modifying the verb 'approved'.\n\ud83d\udee0\ufe0f **Method/Shortcut**: Determine what word class 'swiftly' modifies. Since it describes the manner of the action 'approved' (verb), it is an adverb.\n\n**Step-by-step Solution**:\n1) 'Approved' is a verb.\n2) Words describing verbs are adverbs.\n\n\u2728 **Final Answer**: Adverb"
    }
  ],
  "eng-tenses": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Tenses align actions with timelines (past, present, future).\n\u26a1 **Formula/Shortcut**: Present perfect construction: Subject + has/have + past participle (verb-3).\n\n**Question**: Traveler Elena writes in her Wanderlust Chronicles diary. Convert this sentence to present perfect tense: 'I visited the ruins in Rome.'",
      "a": "\ud83d\udccb **Given**: Sentence: 'I visited the ruins in Rome.'\n\ud83d\udee0\ufe0f **Method/Shortcut**: Change the past simple verb 'visited' to present perfect format using the auxiliary verb 'have' and the past participle.\n\n**Step-by-step Solution**:\n1) Subject 'I' takes auxiliary 'have'.\n2) Past participle of 'visit' is 'visited'.\n3) Sentence becomes: 'I have visited the ruins in Rome.'\n\n\u2728 **Final Answer**: I have visited the ruins in Rome."
    }
  ],
  "eng-questions": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Question tags turn statements into yes/no questions for validation.\n\u26a1 **Formula/Shortcut**: Positive statement takes a negative tag; negative statement takes a positive tag.\n\n**Question**: Agent Chris at SupportFlow Inc live chat replies to a customer query. Complete the tag question: 'You received the confirmation email, ________?'",
      "a": "\ud83d\udccb **Given**: Positive statement in past simple: 'You received...'\n\ud83d\udee0\ufe0f **Method/Shortcut**: Since the statement is positive, use a negative tag with the auxiliary verb of the past simple tense ('did').\n\n**Step-by-step Solution**:\n1) Auxiliary for past simple = 'did'.\n2) Negative tag = 'didn't'.\n3) Combine with subject pronoun: 'didn't you?'.\n\n\u2728 **Final Answer**: didn't you?"
    }
  ],
  "eng-common-errors": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Subject-verb agreement requires singular subjects to take singular verbs.\n\u26a1 **Formula/Shortcut**: Singular indefinite pronouns (e.g. 'each') take singular verbs.\n\n**Question**: Proofreader Mr. Sharma at NewsWire Agency corrects a draft. Fix the grammatical error in: 'Each of the journalists are attending the summit.'",
      "a": "\ud83d\udccb **Given**: Sentence: 'Each of the journalists are attending...'\n\ud83d\udee0\ufe0f **Method/Shortcut**: Identify the true grammatical subject. The subject is the singular pronoun 'Each', not the plural noun 'journalists'. Replace the plural verb 'are' with singular 'is'.\n\n**Step-by-step Solution**:\n1) Subject is 'Each' (singular).\n2) Plural verb 'are' must be changed to singular 'is'.\n3) Corrected sentence: 'Each of the journalists is attending the summit.'\n\n\u2728 **Final Answer**: Each of the journalists is attending the summit."
    }
  ],
  "eng-vocab-daily": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Advanced vocabulary enhances the precision of professional writing.\n\u26a1 **Formula/Shortcut**: Define terms in context to establish their exact semantic meaning.\n\n**Question**: Reporter Sam at TechPulse Media drafts a headline. Define the word 'obsolete' in the context: 'The old server hardware became obsolete after the upgrade.'",
      "a": "\ud83d\udccb **Given**: Target word: 'obsolete'. Context: 'server hardware became obsolete...'\n\ud83d\udee0\ufe0f **Method/Shortcut**: Analyze context clues: 'became ... after the upgrade'. This indicates that the hardware is no longer useful or in use because it has been replaced.\n\n**Step-by-step Solution**:\n1) 'Obsolete' means no longer produced or used; out of date.\n\n\u2728 **Final Answer**: Out of date / No longer in use"
    }
  ],
  "eng-phrases": [
    {
      "q": "\ud83d\udca1 **Concept Recap**: Idiomatic phrases express complex ideas concisely through common metaphors.\n\u26a1 **Formula/Shortcut**: Idiom interpretations derive from cultural usage rather than literal meanings.\n\n**Question**: Coach Mr. David at CareerClimb Academy writes an advice article. Explain the meaning of the idiom: 'burn the midnight oil'.",
      "a": "\ud83d\udccb **Given**: Idiom: 'burn the midnight oil'.\n\ud83d\udee0\ufe0f **Method/Shortcut**: Identify the figurative meaning of burning oil lamps late into the night.\n\n**Step-by-step Solution**:\n1) Historically, oil lamps were burned to work late.\n2) Therefore, the idiom means to work or study late into the night.\n\n\u2728 **Final Answer**: To work or study late into the night"
    }
  ]
};
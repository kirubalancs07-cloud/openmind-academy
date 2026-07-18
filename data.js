/* ===== OPENMIND ACADEMY SYLLABUS DATABASE ===== */

var APT = {
  id: 'aptitude',
  title: 'Quantitative Aptitude',
  subtitle: '27 Topics — SSC TCS Pattern with Concepts, Tricks & Previous Year Questions',
  icon: 'fa-calculator',
  color: 'var(--accent)',
  dim: 'var(--accent-dim)',
  tracks: [
    {
      id: 'foundation',
      name: 'The Number Foundation',
      num: 1,
      desc: 'Master divisibility, remainders, HCF-LCM, and simplification — the bedrock of quantitative aptitude.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'numbers', name: 'Numbers — Divisibility, Units Digit & Remainders', sub: 'Divisibility Rules, Finding Units Digit, Finding Remainders, Prime Factorization', has: true },
        { id: 'hcf-lcm', name: 'HCF & LCM', sub: 'Problems on HCF & LCM with exam-tested shortcuts', has: true },
        { id: 'simplification', name: 'Simplification', sub: 'BODMAS-based calculations, surds, indices, and fractions', has: true }
      ]
    },
    {
      id: 'arith-core',
      name: 'Arithmetic Core',
      num: 2,
      desc: 'Percentages, Profit & Loss, Ratio & Proportion — the trinity that appears in every competitive exam.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'percentages', name: 'Percentages', sub: 'Basics, Population models, Successive changes, and election problems', has: true },
        { id: 'profit-loss', name: 'Profit & Loss', sub: 'Cost Price, Selling Price, Marked Price, Discount, and dishonest dealer tricks', has: true },
        { id: 'ratio-prop', name: 'Ratio, Proportion & Variation', sub: 'Ratios, compound proportions, mean proportionals, and salary ratios', has: true },
        { id: 'partnership', name: 'Partnership', sub: 'Equal and unequal time periods, active vs sleeping partners', has: true },
        { id: 'averages', name: 'Averages', sub: 'Consecutive numbers, replacement models, and weighted averages', has: true }
      ]
    },
    {
      id: 'time-mastery',
      name: 'Time Mastery',
      num: 3,
      desc: 'Time & Work, Time & Distance, Pipes, Boats, Circular Tracks — the most formula-rich area.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'time-work', name: 'Time & Work', sub: 'Unitary methods, efficiency, alternate days, wages, and chain-rule', has: true },
        { id: 'pipes', name: 'Pipes & Cisterns', sub: 'Inlet-outlet dynamics, leakages, and opening/closing intervals', has: true },
        { id: 'time-dist', name: 'Time & Distance', sub: 'Speed-distance-time, average & relative speed, and train encounters', has: true },
        { id: 'boats', name: 'Boats & Streams', sub: 'Upstream-downstream calculations and river velocity rules', has: true },
        { id: 'circular', name: 'Circular Tracks, Races & Games', sub: 'Circular tracks, relative speed, meeting points, and track racing', has: true }
      ]
    },
    {
      id: 'interest-mix',
      name: 'Interest & Mixtures',
      num: 4,
      desc: 'Simple Interest, Compound Interest, Allegations & Mixtures — simple topics with tricky patterns.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'si-ci', name: 'Simple & Compound Interest', sub: 'SI, CI, difference formulas, half-yearly compounding, and installments', has: true },
        { id: 'allegations', name: 'Allegations & Mixtures', sub: 'Two-element mixtures, replacement of liquid, and average pricing', has: true }
      ]
    },
    {
      id: 'algebra-trk',
      name: 'Algebra & Equations',
      num: 5,
      desc: 'From linear equations to quadratic extremes — the language connecting all of mathematics.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'simple-eq', name: 'Simple Equations', sub: 'Linear systems, word problems on numbers, and age relations', has: true },
        { id: 'quadratic', name: 'Quadratic Equations', sub: 'Nature of roots, forming equations, and maxima/minima analysis', has: true },
        { id: 'inequalities', name: 'Inequalities', sub: 'Interval solutions, linear/quadratic inequalities, and range checks', has: true },
        { id: 'progressions', name: 'Progressions', sub: 'Arithmetic (AP), Geometric (GP), and Harmonic (HP) series', has: true }
      ]
    },
    {
      id: 'geo-trk',
      name: 'Geometry & Measurement',
      num: 6,
      desc: 'Lines, angles, triangles, circles, mensuration, heights & distances — visual and highly scoring.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'geometry', name: 'Geometry', sub: 'Triangles, circles, chords, tangents, quadrilaterals, and polygon angles', has: true },
        { id: 'mensuration', name: 'Mensuration (2D & 3D)', sub: 'Areas, perimeters, surface areas, volumes of prisms, cones, and spheres', has: true },
        { id: 'heights', name: 'Heights & Distances', sub: 'Trigonometric ratios, angle of elevation/depression, and standard triangles', has: true }
      ]
    },
    {
      id: 'counting-trk',
      name: 'Counting & Probability',
      num: 7,
      desc: 'Permutations, Combinations, Probability — the mathematics of choice and chance.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'pnc', name: 'Permutations & Combinations', sub: 'Factorials, arrangements, selection formulas, and circular layouts', has: true },
        { id: 'probability', name: 'Probability', sub: 'Coins, dice, playing cards, conditional probability, and independent events', has: true }
      ]
    },
    {
      id: 'special-trk',
      name: 'Special Concepts',
      num: 8,
      desc: 'Crypt-arithmetic, Logarithms, Set Theory — topics that differentiate toppers.',
      accent: 'var(--accent)',
      shadow: 'rgba(245,158,11,0.12)',
      topics: [
        { id: 'crypt', name: 'Crypt-Arithmetic', sub: 'Alphabet addition, multiplication puzzle solvings, and logic analysis', has: true },
        { id: 'sets', name: 'Set Theory & Functions', sub: 'Venn diagrams for sets, union, intersection, domain, and ranges', has: true },
        { id: 'logarithms', name: 'Logarithms', sub: 'Basic properties, base change formula, and logarithmic equations', has: true }
      ]
    }
  ]
};

var REA = {
  id: 'reasoning',
  title: 'Reasoning',
  subtitle: '22 Chapters — TCS MCQs with Chapter-wise Pattern Analysis',
  icon: 'fa-puzzle-piece',
  color: 'var(--accent2)',
  dim: 'var(--accent2-dim)',
  tracks: [
    {
      id: 'verbal-reas',
      name: 'Verbal Reasoning Engine',
      num: 1,
      desc: 'Analogy, Odd One Out, Coding-Decoding — the cornerstone of reasoning tests.',
      accent: 'var(--accent2)',
      shadow: 'rgba(16,185,129,0.12)',
      topics: [
        { id: 'analogy', name: 'Analogy (Verbal)', sub: 'Word relationships, capital/currency, tool/worker, synonym/antonym mapping', has: true },
        { id: 'odd-one', name: 'Odd One Out', sub: 'Finding the odd word, number, or letter cluster', has: true },
        { id: 'coding', name: 'Coding-Decoding', sub: 'Letter shifting, cross coding, coded language patterns', has: true }
      ]
    },
    {
      id: 'series-mstr',
      name: 'Series Mastery',
      num: 2,
      desc: 'Number series, alphabet series, non-verbal series — finding the hidden pattern.',
      accent: 'var(--accent2)',
      shadow: 'rgba(16,185,129,0.12)',
      topics: [
        { id: 'series', name: 'Series (Number & Alphabet)', sub: 'Arithmetic progressions, prime gaps, letter shifts, and dual series', has: true },
        { id: 'nv-series', name: 'Non-Verbal Series', sub: 'Figure patterns, rotatory steps, and mirror shifts in images', has: true }
      ]
    },
    {
      id: 'logic-fort',
      name: 'Logic Fortress',
      num: 3,
      desc: 'Statements & Conclusions, Mathematical Operations, Arithmetic Reasoning.',
      accent: 'var(--accent2)',
      shadow: 'rgba(16,185,129,0.12)',
      topics: [
        { id: 'statements', name: 'Statements & Conclusions / Syllogisms', sub: 'Venn-diagram based deductions, all/some cases, and logical validation', has: true },
        { id: 'math-ops', name: 'Mathematical Operations', sub: 'Interchanging signs, BODMAS in equation balancing, and placeholder values', has: true },
        { id: 'arith-reas', name: 'Arithmetic Reasoning', sub: 'Logical word puzzles, handshakes, heads-and-legs models', has: true }
      ]
    },
    {
      id: 'visual-int',
      name: 'Visual Intelligence',
      num: 4,
      desc: 'Dice, Paper Folding, Embedded Figures, Mirror Images — the non-verbal powerhouse.',
      accent: 'var(--accent2)',
      shadow: 'rgba(16,185,129,0.12)',
      topics: [
        { id: 'missing-num', name: 'Missing Number Puzzles', sub: 'Matrix cells, star shapes, grids, and arithmetic grid logic', has: true },
        { id: 'dice-cube', name: 'Dice & Cube', sub: 'Opposite faces on a standard/ordinary dice, unfolded cubes', has: true },
        { id: 'paper-fold', name: 'Paper Cut / Fold', sub: 'Symmetry analysis and predicting results of unfolding punched paper', has: true },
        { id: 'embedded', name: 'Embedded Figure', sub: 'Identifying hidden shapes within complex configurations', has: true },
        { id: 'mirror-water', name: 'Mirror & Water Image', sub: 'Lateral inversions, vertical flips, and reflection symmetries', has: true },
        { id: 'completion', name: 'Completion of Figure', sub: 'Choosing the correct quadrant to complete a pattern', has: true },
        { id: 'counting-fig', name: 'Counting of Figures', sub: 'Counting triangles, squares, rectangles, and straight lines', has: true }
      ]
    },
    {
      id: 'arrange-nex',
      name: 'Arrangement Nexus',
      num: 5,
      desc: 'Sitting Arrangement, Blood Relations, Directions — spatial and relational logic.',
      accent: 'var(--accent2)',
      shadow: 'rgba(16,185,129,0.12)',
      topics: [
        { id: 'sitting', name: 'Sitting Arrangement', sub: 'Linear rows, circular tables (facing in/out), and floor layouts', has: true },
        { id: 'blood', name: 'Blood Relation', sub: 'Family trees, coded relations, and pointer statements', has: true },
        { id: 'direction', name: 'Direction Sense Test', sub: 'Degrees of rotation, shadow problems, and coordinate paths', has: true }
      ]
    },
    {
      id: 'word-pat',
      name: 'Word & Pattern Logic',
      num: 6,
      desc: 'Word Arrangement, Venn Diagrams, Calendar, Age — miscellaneous but high-yield.',
      accent: 'var(--accent2)',
      shadow: 'rgba(16,185,129,0.12)',
      topics: [
        { id: 'word-arr', name: 'Word Arrangement & Dictionary', sub: 'Dictionary sorting order and logical process sequences', has: true },
        { id: 'venn', name: 'Venn Diagram Representation', sub: 'Translating relationship words into set diagrams', has: true },
        { id: 'calendar', name: 'Calendar', sub: 'Leap years, odd days, repeating years, and weekday lookup', has: true },
        { id: 'age', name: 'Age Problems', sub: 'Algebraic age systems, ratio differences, and generations', has: true }
      ]
    }
  ]
};

var ENG = {
  id: 'english',
  title: 'Communication English',
  subtitle: 'Structured pathway, essential grammar, daily vocabulary, and practice sets',
  icon: 'fa-language',
  color: '#a855f7',
  dim: 'rgba(168, 85, 247, 0.08)',
  tracks: [
    {
      id: 'eng-pathway',
      name: 'Learning Pathway & Basics',
      num: 1,
      desc: 'A structured roadmap to build confidence, speaking fluency, and daily conversation habits.',
      accent: '#a855f7',
      shadow: 'rgba(168, 85, 247, 0.12)',
      topics: [
        { id: 'eng-roadmap', name: 'Communication Pathway & Roadmap', sub: 'Speaking, Listening, Reading, and Writing Habits', has: true },
        { id: 'eng-basics', name: 'Parts of Speech & Sentence Building', sub: 'Nouns, Verbs, Adjectives, Pronouns, and Basic Word Order', has: true }
      ]
    },
    {
      id: 'eng-grammar-trk',
      name: 'Essential Daily Grammar',
      num: 2,
      desc: 'Master active tenses, framing questions, voices, and correcting common verbal mistakes.',
      accent: '#a855f7',
      shadow: 'rgba(168, 85, 247, 0.12)',
      topics: [
        { id: 'eng-tenses', name: 'Tenses & Active Speaking', sub: 'Past, Present, and Future Tenses with conversational examples', has: true },
        { id: 'eng-questions', name: 'Asking Questions & Negative Sentences', sub: 'Framing Wh-questions, helper verbs, and polite declines', has: true },
        { id: 'eng-common-errors', name: 'Common Mistakes & Corrections', sub: 'Fixing subject-verb agreement, prepositions, and double negatives', has: true }
      ]
    },
    {
      id: 'eng-vocab-trk',
      name: 'Day-to-Day Vocabulary',
      num: 3,
      desc: 'Daily vocabulary bank containing 150+ high-frequency words, phrases, and expressions.',
      accent: '#a855f7',
      shadow: 'rgba(168, 85, 247, 0.12)',
      topics: [
        { id: 'eng-vocab-daily', name: 'Top 800+ Daily Conversation Words', sub: '800+ essential words with definitions and usage examples', has: true },
        { id: 'eng-phrases', name: 'Useful Everyday Phrases & Expressions', sub: 'Greetings, requesting help, showing gratitude, and job interview expressions', has: true }
      ]
    }
  ]
};

/* ===== TOPIC STUDY CONTENTS DATABASE ===== */
var CONTENT = {
  // --- FOUNDATION TRACK ---
  numbers: {
    title: 'Numbers — Divisibility, Units Digit & Remainders',
    sections: [
      {
        type: 'concept',
        title: 'Place Value vs Face Value',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Face value is the digit itself, while place value is the value of the digit depending on its position in the number (e.g., units, tens, hundreds). In the number <b>4,852</b>, the face value of 8 is 8, but its place value is 800 (8 × 100).</p>'
      },
      {
        type: 'formula',
        title: 'Divisibility Rules Summary',
        html: '<div style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>2:</b> Last digit is even.</li>' +
              '<li><b>3:</b> Sum of digits is divisible by 3.</li>' +
              '<li><b>4:</b> Last two digits are divisible by 4.</li>' +
              '<li><b>5:</b> Last digit is 0 or 5.</li>' +
              '<li><b>8:</b> Last three digits are divisible by 8.</li>' +
              '<li><b>9:</b> Sum of digits is divisible by 9.</li>' +
              '<li><b>11:</b> Difference between sum of digits at odd places and even places is 0 or a multiple of 11.</li>' +
              '</ul></div>'
      },
      {
        type: 'concept',
        title: 'Finding the Units Digit',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Unit digits cycle in patterns of 4 for bases ending in 2, 3, 7, 8. For bases ending in 0, 1, 5, 6, the unit digit remains the same. For 4 and 9, the cycle is 2. <b>Rule:</b> Divide the power by 4, find the remainder, and raise the base\'s unit digit to that remainder (use 4 if remainder is 0).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Find the units digit of 23^47 + 17^54.',
            opts: ['4', '6', '8', '0'],
            ans: 1,
            exam: 'SSC CGL 2022',
            sol: 'For 23^47: unit digit of 3 has cyclicity 4. 47 % 4 = 3, so unit digit is 3^3 = 27 (ends in 7).\nFor 17^54: unit digit of 7 has cyclicity 4. 54 % 4 = 2, so unit digit is 7^2 = 49 (ends in 9).\nSum = 7 + 9 = 16, which ends in 6.'
          },
          {
            q: 'If the number 5432x7 is divisible by 9, find the digit x.',
            opts: ['3', '6', '8', '7'],
            ans: 1,
            exam: 'SSC CHSL 2021',
            sol: 'Sum of digits must be divisible by 9. Sum = 5 + 4 + 3 + 2 + x + 7 = 21 + x.\nThe nearest multiple of 9 greater than 21 is 27. Thus, x = 27 - 21 = 6.'
          },
          {
            q: 'Find the remainder when 67^67 + 67 is divided by 68.',
            opts: ['66', '67', '1', '0'],
            ans: 0,
            exam: 'SSC CPO 2020',
            sol: 'Using modular arithmetic: 67 ≡ -1 (mod 68).\nTherefore, 67^67 + 67 ≡ (-1)^67 + (-1) = -1 - 1 = -2 (mod 68).\nA negative remainder of -2 is equivalent to 68 - 2 = 66.'
          }
        ]
      }
    ]
  },
  'hcf-lcm': {
    title: 'HCF & LCM',
    sections: [
      {
        type: 'concept',
        title: 'Core Definitions & Relationship',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><b>HCF</b> (Highest Common Factor) is the largest divisor that divides two or more numbers. <b>LCM</b> (Lowest Common Multiple) is the smallest positive integer divisible by all given numbers.</p>' +
              '<div class="formula-box"><b>Formula:</b> Product of Two Numbers = HCF × LCM</div>'
      },
      {
        type: 'formula',
        title: 'HCF and LCM of Fractions',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>HCF of Fractions:</b> HCF of Numerators / LCM of Denominators</li>' +
              '<li><b>LCM of Fractions:</b> LCM of Numerators / HCF of Denominators</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'The HCF of two numbers is 12 and their LCM is 72. If one of the numbers is 24, find the other.',
            opts: ['36', '48', '60', '18'],
            ans: 0,
            exam: 'SSC CGL 2021',
            sol: 'Using Product of Numbers = HCF × LCM:\n24 × Number = 12 × 72\nNumber = (12 × 72) / 24 = 36.'
          },
          {
            q: 'Find the greatest 4-digit number divisible by 15, 25, and 30.',
            opts: ['9900', '9850', '9750', '9950'],
            ans: 0,
            exam: 'SSC MTS 2022',
            sol: 'LCM of 15, 25, and 30 is 150.\nThe largest 4-digit number is 9999.\n9999 / 150 gives a quotient of 66 and remainder of 99.\nGreatest number = 9999 - 99 = 9900.'
          }
        ]
      }
    ]
  },
  simplification: {
    title: 'Simplification',
    sections: [
      {
        type: 'formula',
        title: 'BODMAS Rule',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Order of operations: <b>B</b>rackets ((), [], {}), <b>O</b>f, <b>D</b>ivision, <b>M</b>ultiplication, <b>A</b>ddition, <b>S</b>ubtraction.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Simplify: 45 - [38 - {60 / 3 - (6 - 9 / 3)}]',
            opts: ['24', '21', '27', '30'],
            ans: 0,
            exam: 'SSC CHSL 2022',
            sol: '1) Inner bracket: (6 - 9 / 3) = 6 - 3 = 3.\n2) Middle brace: {60 / 3 - 3} = 20 - 3 = 17.\n3) Outer bracket: [38 - 17] = 21.\n4) Final expression: 45 - 21 = 24.'
          }
        ]
      }
    ]
  },

  // --- ARITHMETIC CORE TRACK ---
  percentages: {
    title: 'Percentages',
    sections: [
      {
        type: 'concept',
        title: 'Basics & Fraction Equivalence',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">A percentage is a fraction with denominator 100. Learning fraction equivalences saves immense time: 1/2 = 50%, 1/3 = 33.33%, 1/4 = 25%, 1/5 = 20%, 1/6 = 16.67%, 1/8 = 12.5%, 1/9 = 11.11%, 1/11 = 9.09%.</p>'
      },
      {
        type: 'formula',
        title: 'Successive Percentage Changes',
        html: '<div class="formula-box">Net Change = x + y + (xy / 100) %</div>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If A\'s salary is 25% more than B\'s, by what percentage is B\'s salary less than A\'s?',
            opts: ['20%', '25%', '15%', '33.33%'],
            ans: 0,
            exam: 'SSC CGL 2023',
            sol: 'If B = 100, then A = 125. B is less than A by 25.\nPercentage = (25 / 125) × 100 = 20%.'
          },
          {
            q: 'A town\'s population increases by 10% in the first year and decreases by 10% in the second. What is the net change?',
            opts: ['1% decrease', '1% increase', 'No change', '2% decrease'],
            ans: 0,
            exam: 'SSC CHSL 2021',
            sol: 'Using successive formula: x = 10, y = -10.\nNet Change = 10 - 10 + (10 * -10)/100 = -1% (1% decrease).'
          }
        ]
      }
    ]
  },
  'profit-loss': {
    title: 'Profit & Loss',
    sections: [
      {
        type: 'formula',
        title: 'Basic Formulations',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>Profit:</b> SP - CP. <b>Loss:</b> CP - SP.</li>' +
              '<li><b>Profit %:</b> (Profit / CP) × 100. <b>Loss %:</b> (Loss / CP) × 100.</li>' +
              '<li><b>Discount:</b> Marked Price (MP) - Selling Price (SP).</li>' +
              '<li><b>Discount %:</b> (Discount / MP) × 100.</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'An article is sold at a discount of 10% and still makes a profit of 20%. Find the ratio of CP to MP.',
            opts: ['3:4', '4:3', '5:6', '3:5'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Use formula: CP / MP = (100 - D%) / (100 + P%)\nCP / MP = (100 - 10) / (100 + 20) = 90 / 120 = 3 / 4.'
          }
        ]
      }
    ]
  },
  'ratio-prop': {
    title: 'Ratio, Proportion & Variation',
    sections: [
      {
        type: 'concept',
        title: 'Concepts of Proportions',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">If a:b = c:d, then they are in proportion. Product of extremes = Product of means (a*d = b*c).<br>' +
              'Mean proportional of a and b is √(ab). Third proportional of a and b is b²/a.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Find the mean proportional between 9 and 64.',
            opts: ['24', '18', '27', '36'],
            ans: 0,
            exam: 'SSC CPO 2022',
            sol: 'Mean proportional = √(a * b) = √(9 * 64) = 3 * 8 = 24.'
          }
        ]
      }
    ]
  },
  partnership: {
    title: 'Partnership',
    sections: [
      {
        type: 'formula',
        title: 'Profit Sharing Rule',
        html: '<div class="formula-box">Ratio of Profit = Ratio of (Investment × Time)</div>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A and B invest in a business in the ratio 3:5. If A invests for 8 months and B for 6 months, find their profit sharing ratio.',
            opts: ['4:5', '5:4', '1:1', '3:5'],
            ans: 0,
            exam: 'SSC MTS 2021',
            sol: 'Profit ratio = (Inv_A × Time_A) : (Inv_B × Time_B) = (3 × 8) : (5 × 6) = 24 : 30 = 4:5.'
          }
        ]
      }
    ]
  },
  averages: {
    title: 'Averages',
    sections: [
      {
        type: 'formula',
        title: 'Basic Formula & Deviation Trick',
        html: '<div class="formula-box">Average = Sum of Observations / Number of Observations</div>' +
              '<p style="line-height:1.8;color:var(--fg-secondary)"><b>Deviation Concept:</b> Assume a temporary average and compute deviations. The sum of deviations divided by n yields the adjustment to the assumed average.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'The average of 5 consecutive odd numbers is 25. What is the largest number?',
            opts: ['29', '27', '31', '25'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'For odd/even consecutive numbers, the average is the middle number.\nNumbers: _ , _ , 25 , _ , _\nSince they are odd: 21, 23, 25, 27, 29. The largest is 29.'
          }
        ]
      }
    ]
  },

  // --- TIME MASTERY TRACK ---
  'time-work': {
    title: 'Time & Work',
    sections: [
      {
        type: 'concept',
        title: 'Work and Efficiency Relation',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Efficiency is inversely proportional to the time taken to complete a task. If A takes T days, A\'s one day work is 1/T. Working together, A and B take: 1 / (1/T_A + 1/T_B) = (T_A * T_B) / (T_A + T_B) days.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A can do a piece of work in 10 days and B in 15 days. Working together, how many days will they take?',
            opts: ['6', '5', '8', '7.5'],
            ans: 0,
            exam: 'SSC CGL 2021',
            sol: 'Working together = (10 × 15) / (10 + 15) = 150 / 25 = 6 days.'
          }
        ]
      }
    ]
  },
  pipes: {
    title: 'Pipes & Cisterns',
    sections: [
      {
        type: 'concept',
        title: 'Inlet and Outlet Pipes',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Inlet pipes add water (positive work) while outlet pipes empty water (negative work). If inlet A fills in x hours and outlet B empties in y hours, net work per hour when both are open is (1/x - 1/y).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A pipe can fill a tank in 8 hours, but a leak at the bottom empties it in 12 hours. How long to fill when both open?',
            opts: ['24 hours', '16 hours', '20 hours', '12 hours'],
            ans: 0,
            exam: 'SSC CHSL 2022',
            sol: 'Net rate = 1/8 - 1/12 = (3 - 2) / 24 = 1/24. Thus, it takes 24 hours.'
          }
        ]
      }
    ]
  },
  'time-dist': {
    title: 'Time & Distance',
    sections: [
      {
        type: 'formula',
        title: 'Core Formulas',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>Distance:</b> Speed × Time.</li>' +
              '<li><b>Conversion:</b> x km/hr = x × (5/18) m/s.</li>' +
              '<li><b>Average Speed:</b> 2xy / (x + y) (when equal distances are travelled at speed x and y).</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A train travels at 72 km/h. How many meters does it travel in 15 seconds?',
            opts: ['300 m', '250 m', '350 m', '400 m'],
            ans: 0,
            exam: 'SSC MTS 2021',
            sol: 'Convert speed to m/s: 72 × (5/18) = 20 m/s.\nDistance = Speed × Time = 20 × 15 = 300 meters.'
          }
        ]
      }
    ]
  },
  boats: {
    title: 'Boats & Streams',
    sections: [
      {
        type: 'formula',
        title: 'Upstream and Downstream Speed',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Let boat speed in still water be <i>u</i> and stream speed be <i>v</i>.<ul>' +
              '<li><b>Downstream Speed (d):</b> u + v</li>' +
              '<li><b>Upstream Speed (u_s):</b> u - v</li>' +
              '<li><b>Boat Speed:</b> (d + u_s) / 2</li>' +
              '<li><b>Stream Speed:</b> (d - u_s) / 2</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A boat goes 24 km downstream in 2 hours and upstream in 4 hours. Find the speed of boat in still water.',
            opts: ['9 km/h', '8 km/h', '10 km/h', '6 km/h'],
            ans: 0,
            exam: 'SSC CPO 2021',
            sol: 'Downstream speed = 24 / 2 = 12 km/h.\nUpstream speed = 24 / 4 = 6 km/h.\nBoat speed = (12 + 6) / 2 = 9 km/h.'
          }
        ]
      }
    ]
  },
  circular: {
    title: 'Circular Tracks, Races & Games',
    sections: [
      {
        type: 'concept',
        title: 'Meeting Points on Circular Tracks',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Two runners start from the same point at speeds <i>a</i> and <i>b</i> on a track of length <i>L</i>.<ul>' +
              '<li><b>Same Direction meeting time:</b> L / |a - b|</li>' +
              '<li><b>Opposite Direction meeting time:</b> L / (a + b)</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A and B run in opposite directions on a 400m circular track at 8 m/s and 12 m/s. When will they meet?',
            opts: ['20s', '40s', '50s', '25s'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Opposite direction: Relative speed = 8 + 12 = 20 m/s.\nTime to meet = 400 / 20 = 20 seconds.'
          }
        ]
      }
    ]
  },

  // --- INTEREST & MIXTURES ---
  'si-ci': {
    title: 'Simple & Compound Interest',
    sections: [
      {
        type: 'formula',
        title: 'SI & CI Formulas',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>Simple Interest (SI):</b> P * R * T / 100</li>' +
              '<li><b>Compound Interest Amount (A):</b> P * (1 + R/100)^T</li>' +
              '<li><b>Difference between CI and SI for 2 years:</b> P(R/100)²</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'The difference between SI and CI on a sum for 2 years at 10% per annum is $50. Find the principal.',
            opts: ['$5000', '$4000', '$6000', '$3000'],
            ans: 0,
            exam: 'SSC CGL 2021',
            sol: 'Difference (Diff) = P × (R / 100)²\n50 = P × (10 / 100)² = P × (1 / 100)\nPrincipal (P) = 50 × 100 = 5000.'
          }
        ]
      }
    ]
  },
  allegations: {
    title: 'Allegations & Mixtures',
    sections: [
      {
        type: 'concept',
        title: 'Rule of Allegation',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Useful to mix two ingredients of different prices to get a mixture of intermediate price. Ratio of cheaper to dearer quantities is (Dearer Price - Mean Price) : (Mean Price - Cheaper Price).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'In what ratio must rice at $60/kg be mixed with rice at $90/kg to get a mixture worth $72/kg?',
            opts: ['3:2', '2:3', '4:3', '1:2'],
            ans: 0,
            exam: 'SSC CHSL 2022',
            sol: 'Cheaper = 60, Dearer = 90, Mean = 72.\nRatio = (90 - 72) : (72 - 60) = 18 : 12 = 3:2.'
          }
        ]
      }
    ]
  },

  // --- ALGEBRA & EQUATIONS ---
  'simple-eq': {
    title: 'Simple Equations',
    sections: [
      {
        type: 'concept',
        title: 'Linear Systems',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Equations of the form ax + b = 0. Systems of equations have unique solutions if a1/a2 ≠ b1/b2, infinite solutions if a1/a2 = b1/b2 = c1/c2, and no solutions if a1/a2 = b1/b2 ≠ c1/c2.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Solve for x: 3x - 5 = 2x + 8.',
            opts: ['13', '3', '5', '8'],
            ans: 0,
            exam: 'SSC MTS 2020',
            sol: 'Subtracting 2x: x - 5 = 8. Adding 5: x = 13.'
          }
        ]
      }
    ]
  },
  quadratic: {
    title: 'Quadratic Equations',
    sections: [
      {
        type: 'formula',
        title: 'Roots of Quadratic Equations',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">For ax² + bx + c = 0, roots are: x = [-b ± √(b² - 4ac)] / 2a.<br>' +
              'Sum of roots = -b/a, Product of roots = c/a. Discriminant (D) = b² - 4ac. Real and equal roots if D = 0, imaginary if D < 0.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If sum of roots of x² - kx + 12 = 0 is 7, find the value of k.',
            opts: ['7', '-7', '12', '-12'],
            ans: 0,
            exam: 'SSC CGL 2021',
            sol: 'Sum of roots = -(-k)/1 = k.\nGiven sum = 7, so k = 7.'
          }
        ]
      }
    ]
  },
  inequalities: {
    title: 'Inequalities',
    sections: [
      {
        type: 'concept',
        title: 'Solving Inequalities',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">When multiplying or dividing an inequality by a negative number, reverse the inequality sign. For example, -2x < 4 becomes x > -2.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Solve the inequality: 5 - 3x < 11.',
            opts: ['x > -2', 'x < -2', 'x > 2', 'x < 2'],
            ans: 0,
            exam: 'SSC CHSL 2021',
            sol: 'Subtract 5: -3x < 6.\nDivide by -3 and reverse sign: x > -2.'
          }
        ]
      }
    ]
  },
  progressions: {
    title: 'Progressions',
    sections: [
      {
        type: 'formula',
        title: 'AP & GP Formulas',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>AP n-th term:</b> a + (n - 1)d. <b>AP Sum:</b> (n/2)[2a + (n - 1)d].</li>' +
              '<li><b>GP n-th term:</b> a * r^(n-1). <b>GP Infinite Sum:</b> a / (1 - r) (for |r| < 1).</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Find the sum of the infinite GP: 1, 1/2, 1/4, 1/8...',
            opts: ['2', '1.5', '3', '4'],
            ans: 0,
            exam: 'SSC CGL 2020',
            sol: 'Here a = 1, r = 1/2.\nSum = a / (1 - r) = 1 / (1 - 1/2) = 1 / (1/2) = 2.'
          }
        ]
      }
    ]
  },

  // --- GEOMETRY & MEASUREMENT ---
  geometry: {
    title: 'Geometry',
    sections: [
      {
        type: 'concept',
        title: 'Key Triangles & Circles Rules',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Sum of angles in triangle = 180°. Chord properties: Perpendicular from center to a chord bisects the chord. Angles subtended by same arc at circumference are equal.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'In a circle, a chord of length 16cm is at a distance of 6cm from the center. Find the radius.',
            opts: ['10 cm', '8 cm', '12 cm', '14 cm'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'The perpendicular from center bisects the chord into segments of 8cm.\nForms a right triangle with base = 8cm and perpendicular = 6cm.\nHypotenuse (radius) = √(6² + 8²) = 10 cm.'
          }
        ]
      }
    ]
  },
  mensuration: {
    title: 'Mensuration (2D & 3D)',
    sections: [
      {
        type: 'formula',
        title: 'Volume and Surface Area',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>Cylinder Volume:</b> πr²h. <b>CSA:</b> 2πrh.</li>' +
              '<li><b>Cone Volume:</b> (1/3)πr²h. <b>CSA:</b> πrl.</li>' +
              '<li><b>Sphere Volume:</b> (4/3)πr³. <b>Surface Area:</b> 4πr².</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If the radius of a sphere is doubled, how many times will its volume become?',
            opts: ['8 times', '4 times', '2 times', '16 times'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Volume is proportional to r³. If r is doubled, volume increases by 2³ = 8 times.'
          }
        ]
      }
    ]
  },
  heights: {
    title: 'Heights & Distances',
    sections: [
      {
        type: 'concept',
        title: 'Elevation and Angles',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Use standard trigonometric ratios: tan 30° = 1/√3, tan 45° = 1, tan 60° = √3. Height/Distance ratios correspond directly to these angles in right-angled triangles.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A shadow of a tower is √3 times its height. Find the angle of elevation of the sun.',
            opts: ['30°', '45°', '60°', '90°'],
            ans: 0,
            exam: 'SSC CHSL 2021',
            sol: 'Let height be h. Shadow = h√3.\ntan θ = Height / Shadow = h / (h√3) = 1/√3.\nθ = 30°.'
          }
        ]
      }
    ]
  },

  // --- COUNTING & PROBABILITY ---
  pnc: {
    title: 'Permutations & Combinations',
    sections: [
      {
        type: 'formula',
        title: 'Permutation & Selection Formulas',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Permutation (Arrangement): nPr = n! / (n-r)!<br>' +
              'Combination (Selection): nCr = n! / [r!(n-r)!]</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'In how many ways can the letters of the word "CAT" be arranged?',
            opts: ['6', '3', '24', '12'],
            ans: 0,
            exam: 'SSC CPO 2021',
            sol: 'CAT has 3 unique letters. Number of arrangements = 3! = 6.'
          }
        ]
      }
    ]
  },
  probability: {
    title: 'Probability',
    sections: [
      {
        type: 'formula',
        title: 'Probability of an Event',
        html: '<div class="formula-box">P(E) = Number of Favorable Outcomes / Total Number of Outcomes</div>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'What is the probability of getting a sum of 7 when two dice are rolled?',
            opts: ['1/6', '1/12', '5/36', '1/9'],
            ans: 0,
            exam: 'SSC CGL 2020',
            sol: 'Total outcomes = 6 × 6 = 36.\nFavorable outcomes for sum of 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes.\nProbability = 6 / 36 = 1/6.'
          }
        ]
      }
    ]
  },

  // --- SPECIAL CONCEPTS ---
  crypt: {
    title: 'Crypt-Arithmetic Puzzles',
    sections: [
      {
        type: 'concept',
        title: 'Solving Puzzles',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Crypt-arithmetic puzzles are mathematical puzzles where digits are replaced by letters. Each letter represents a unique digit (0-9). The most common rule is that the leading letter of a word cannot be 0.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'In SEND + MORE = MONEY, what is the value of M?',
            opts: ['1', '0', '9', '2'],
            ans: 0,
            exam: 'Placement Exam Pattern',
            sol: 'Since we add two 4-digit numbers and get a 5-digit number, the carry-over digit M at the very left must be 1.'
          }
        ]
      }
    ]
  },
  sets: {
    title: 'Set Theory & Functions',
    sections: [
      {
        type: 'formula',
        title: 'Venn Formula for Sets',
        html: '<div class="formula-box">n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</div>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'In a group, 70% speak English and 60% speak French. If 30% speak both, what % speaks neither?',
            opts: ['0%', '10%', '20%', '5%'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'n(E ∪ F) = 70 + 60 - 30 = 100%.\nTherefore, 100% - 100% = 0% speak neither.'
          }
        ]
      }
    ]
  },
  logarithms: {
    title: 'Logarithms',
    sections: [
      {
        type: 'formula',
        title: 'Rules of Logs',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li>log(ab) = log a + log b</li>' +
              '<li>log(a/b) = log a - log b</li>' +
              '<li>log(a^b) = b log a</li>' +
              '<li>log_b (a) = log_c (a) / log_c (b)</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Find the value of log_2 (64).',
            opts: ['6', '5', '4', '8'],
            ans: 0,
            exam: 'SSC CGL 2019',
            sol: '64 = 2^6. Therefore, log_2 (2^6) = 6 log_2 (2) = 6 × 1 = 6.'
          }
        ]
      }
    ]
  },

  // ==========================================
  // ================= REASONING ==============
  // ==========================================

  // --- VERBAL REASONING ENGINE ---
  analogy: {
    title: 'Analogy (Verbal) — Relationship Mapping',
    sections: [
      {
        type: 'concept',
        title: 'Analogy Mappings',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Analogy tests your ability to identify relationships between word pairs and apply it to a new pair. Common relationships include: Worker/Tool (Chef:Knife), Animal/Dwelling (Spider:Web), or Cause/Effect.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: '"Tuesday" is related to "Mars" as "Thursday" is related to:',
            opts: ['Venus', 'Mercury', 'Saturn', 'Jupiter'],
            ans: 3,
            exam: 'SSC CPO 2019',
            sol: 'Days are named after astrological planets. Tuesday corresponds to Mars (Mardi/Martis), and Thursday corresponds to Jupiter (Jeudi/Jovis).'
          },
          {
            q: '"Meat" is to "Vegetarian" as "Alcohol" is to:',
            opts: ['Teetotaller', 'Smoker', 'Water', 'Dietician'],
            ans: 0,
            exam: 'SSC CPO 2019',
            sol: 'A vegetarian avoids eating meat, and a teetotaller avoids drinking alcohol.'
          }
        ]
      }
    ]
  },
  'odd-one': {
    title: 'Odd One Out',
    sections: [
      {
        type: 'concept',
        title: 'Odd One Out logic',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Find the option that does not share the common property of the other three. This could be based on alphabetical position differences, arithmetic properties, or semantic classification.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Choose the odd one out:',
            opts: ['Wheat', 'Rice', 'Barley', 'Mustard'],
            ans: 3,
            exam: 'SSC CHSL 2021',
            sol: 'Wheat, Rice, and Barley are food grains/cereals, whereas Mustard is an oilseed.'
          }
        ]
      }
    ]
  },
  coding: {
    title: 'Coding-Decoding',
    sections: [
      {
        type: 'concept',
        title: 'Letter Shifting Rules',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Write down the alphabetical positions (A=1, B=2 ... Z=26) and check patterns like offsets, opposite letters (A-Z, B-Y, C-X ... EJOTY cycle), or reverse ordering coding.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If COMPUTER is coded as OCPMTURE, how is OHMS coded?',
            opts: ['HOMSetc', 'HOMS', 'MHOS', 'OSMH'],
            ans: 1,
            exam: 'SSC CGL 2020',
            sol: 'COMPUTER is coded by swapping adjacent letter pairs: CO->OC, MP->PM, UT->TU, ER->RE. Swapping OHMS in pairs: OH->HO, MS->SM, yielding HOMS.'
          }
        ]
      }
    ]
  },

  // --- SERIES MASTERY ---
  series: {
    title: 'Series (Number & Alphabet)',
    sections: [
      {
        type: 'concept',
        title: 'Series Identification',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Look for common differences (additions), ratios (multiplication), prime gaps, square/cube sequences, or alternating dual series trends.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Find the next term in the series: 2, 5, 11, 23, 47, ...',
            opts: ['95', '96', '94', '98'],
            ans: 0,
            exam: 'SSC CGL 2021',
            sol: 'Pattern: Each term is multiplied by 2 and then adds 1.\n2 × 2 + 1 = 5\n5 × 2 + 1 = 11\n... 47 × 2 + 1 = 95.'
          }
        ]
      }
    ]
  },
  'nv-series': {
    title: 'Non-Verbal Series',
    sections: [
      {
        type: 'concept',
        title: 'Visual Series',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Observe the rotation direction of components (clockwise or counter-clockwise), shifts in position (corners, center), and increases/decreases in number of elements.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If a triangle rotates 45° clockwise, then 90° CCW, then 135° CW, what is the net rotation?',
            opts: ['90° CW', '90° CCW', '45° CW', '180°'],
            ans: 0,
            exam: 'TCS Visual Exam',
            sol: 'Net rotation = +45° (CW) - 90° (CCW) + 135° (CW) = 90° CW.'
          }
        ]
      }
    ]
  },

  // --- LOGIC FORTRESS ---
  statements: {
    title: 'Statements & Conclusions / Syllogisms',
    sections: [
      {
        type: 'concept',
        title: 'Venn Deductions',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Use circle diagrams to represent "All A are B" (A circle inside B circle), "Some A are B" (intersecting circles), and "No A is B" (separate circles) to verify conclusions.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Statements: All pens are books. All books are pencils. Conclusions: I. All pens are pencils. II. Some pencils are books.',
            opts: ['Both I and II follow', 'Only I follows', 'Only II follows', 'Neither follows'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Pen circle is inside Book circle, which is inside Pencil circle.\nConclusion I: All pens are pencils (True, since Pen is inside Pencil).\nConclusion II: Some pencils are books (True, as pencil overlaps book circle).'
          }
        ]
      }
    ]
  },
  'math-ops': {
    title: 'Mathematical Operations',
    sections: [
      {
        type: 'concept',
        title: 'Operations Swaps',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Replace symbols (+, -, ×, ÷) with their defined operations and solve using the BODMAS rule order.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If "+" means "÷", "-" means "×", "÷" means "+" and "×" means "-", solve: 12 + 6 - 3 ÷ 2',
            opts: ['8', '6', '12', '4'],
            ans: 0,
            exam: 'SSC CHSL 2021',
            sol: 'Substitute symbols: 12 ÷ 6 × 3 + 2.\nApplying BODMAS:\n12 ÷ 6 = 2\n2 × 3 = 6\n6 + 2 = 8.'
          }
        ]
      }
    ]
  },
  'arith-reas': {
    title: 'Arithmetic Reasoning',
    sections: [
      {
        type: 'concept',
        title: 'Heads and Legs / Handshake Problems',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Handshake formula: n(n-1)/2. For head/leg questions, solve by simultaneous linear equations where 2-legged animals (x) and 4-legged animals (y) have heads x+y and legs 2x+4y.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'In a party, everyone handshakes with everyone else. If there are 10 people, how many handshakes occur?',
            opts: ['45', '90', '50', '55'],
            ans: 0,
            exam: 'SSC CPO 2020',
            sol: 'Handshakes = n(n-1)/2 = 10 × 9 / 2 = 45.'
          }
        ]
      }
    ]
  },

  // --- VISUAL INTELLIGENCE ---
  'missing-num': {
    title: 'Missing Number Puzzles',
    sections: [
      {
        type: 'concept',
        title: 'Grid Arithmetic',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Analyze grid columns and rows for relationships (e.g. Row1 + Row2 = Row3, or Row1 × Row2 = Row3) to find the blank cell.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Find the missing number: Row 1: [3, 5, 16], Row 2: [5, 9, 28], Row 3: [7, 11, ?]',
            opts: ['36', '32', '40', '38'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Pattern: (Col1 + Col2) × 2 = Col3.\nRow 1: (3+5)×2 = 16\nRow 2: (5+9)×2 = 28\nRow 3: (7+11)×2 = 36.'
          }
        ]
      }
    ]
  },
  'dice-cube': {
    title: 'Dice & Cube',
    sections: [
      {
        type: 'concept',
        title: 'Standard vs Ordinary Dice',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">In standard dice, opposite faces always sum to 7. When rolling two positions of a dice, keep one common face fixed and rotate to identify opposites.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If faces 1, 2, 3 and 1, 5, 6 are shown in two rolls, which face is opposite to 2?',
            opts: ['5', '6', '1', '3'],
            ans: 0,
            exam: 'SSC MTS 2021',
            sol: 'Hold 1 fixed. Write clockwise: Dice 1: 1-2-3, Dice 2: 1-5-6. The corresponding positions are opposite: 2 is opposite 5, 3 is opposite 6.'
          }
        ]
      }
    ]
  },
  'paper-fold': {
    title: 'Paper Cut / Fold',
    sections: [
      {
        type: 'concept',
        title: 'Symmetry Analysis',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Use mirror lines along the folding creases to unfold cuts step-by-step to predict the final layout.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A square paper is folded diagonally and a hole is punched in the corner. When unfolded, how many holes appear?',
            opts: ['2', '4', '1', '8'],
            ans: 0,
            exam: 'SSC CHSL 2021',
            sol: 'One diagonal fold divides the sheet in 2 layers. A single punch makes 2 holes in the unfolded sheet.'
          }
        ]
      }
    ]
  },
  embedded: {
    title: 'Embedded Figure',
    sections: [
      {
        type: 'concept',
        title: 'Find Hidden Shapes',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Identify a smaller query shape buried within a larger, more complex line grid (without rotation, unless specified).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Choose the option that contains an embedded "V" shape.',
            opts: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
            ans: 0,
            exam: 'TCS Pattern',
            sol: 'Observe the cross-lines in the primary diagram; Option 1 clearly reveals a non-rotated "V" angle.'
          }
        ]
      }
    ]
  },
  'mirror-water': {
    title: 'Mirror & Water Image',
    sections: [
      {
        type: 'concept',
        title: 'Reflections rules',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Mirror image: Left swaps with Right (lateral inversion). Water image: Top swaps with Bottom (vertical inversion).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'What is the water image of "BAT"?',
            opts: ['Same', 'Inverted B-A-T', 'B and T normal, A upside down', 'B normal, A upside down, T upside down'],
            ans: 3,
            exam: 'SSC CGL 2019',
            sol: 'B reflected vertically remains B. A upside down becomes ∀. T upside down becomes ⊥. Thus: B, inverted A, inverted T.'
          }
        ]
      }
    ]
  },
  completion: {
    title: 'Completion of Figure',
    sections: [
      {
        type: 'concept',
        title: 'Pattern quadrants',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Analyze the pattern symmetry (along diagonals, horizontal, and vertical lines) of existing quadrants to select the final piece.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'In a symetrical circular quadrant pattern, if quad 1 mirrors quad 2, quad 3 must mirror:',
            opts: ['Quad 4', 'Quad 1', 'Quad 2', 'None'],
            ans: 0,
            exam: 'TCS Visual Exam',
            sol: 'Symmetric principles show that bottom quadrant 3 is a direct reflection of bottom quadrant 4.'
          }
        ]
      }
    ]
  },
  'counting-fig': {
    title: 'Counting of Figures',
    sections: [
      {
        type: 'concept',
        title: 'Triangles Counting shortcut',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">For a triangle divided by vertical lines from a vertex, number the divisions 1, 2 ... n. Total triangles = Sum of divisions (n(n+1)/2).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'How many triangles in a triangle divided into 3 vertical parts?',
            opts: ['6', '3', '4', '8'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Number the sections: 1, 2, 3. Sum = 1 + 2 + 3 = 6 triangles.'
          }
        ]
      }
    ]
  },

  // --- ARRANGEMENT NEXUS ---
  sitting: {
    title: 'Sitting Arrangement',
    sections: [
      {
        type: 'concept',
        title: 'Linear & Circular Sitting',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Circular tables: Facing Center means Clockwise is Left, CCW is Right. Facing Outside means Clockwise is Right, CCW is Left. Draw circle diagrams and place elements step-by-step.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Five friends are sitting around a circular table facing the center. A is next to B, C is next to D. If E is between B and D, who is next to A?',
            opts: ['B and C', 'B and E', 'C and D', 'E and D'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Arranging: E sits between B and D. So we get cluster B-E-D. Since A is next to B, and C is next to D, the complete order around the circle is A-B-E-D-C. Therefore, A is next to B and C.'
          }
        ]
      }
    ]
  },
  blood: {
    title: 'Blood Relation',
    sections: [
      {
        type: 'concept',
        title: 'Family Trees symbols',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Use square/plus (+) for males, circle/minus (-) for females, horizontal double bond (=) for married couples, and vertical lines for generational shifts.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Pointing to a man, a woman says: "His mother is the only daughter of my father." How is the woman related to the man?',
            opts: ['Mother', 'Sister', 'Aunt', 'Grandmother'],
            ans: 0,
            exam: 'SSC CHSL 2021',
            sol: '"Only daughter of my father" = the woman herself.\n"His mother is..." = the man\'s mother is the woman herself. Thus, she is his mother.'
          }
        ]
      }
    ]
  },
  direction: {
    title: 'Direction Sense Test',
    sections: [
      {
        type: 'concept',
        title: 'Directions Coordinates',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Draw the standard compass (North up, South down, East right, West left). Use the Pythagorean theorem (h² = b² + p²) to calculate shortest distances.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'A man walks 3km North, then 4km East. How far is he from the starting point?',
            opts: ['5 km', '7 km', '1 km', '12 km'],
            ans: 0,
            exam: 'SSC CPO 2021',
            sol: 'Forms a right-angled triangle. Hypotenuse = √(3² + 4²) = √(9 + 16) = √25 = 5 km.'
          }
        ]
      }
    ]
  },

  // --- WORD & PATTERN LOGIC ---
  'word-arr': {
    title: 'Word Arrangement & Dictionary',
    sections: [
      {
        type: 'concept',
        title: 'Sorting Words',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Compare letter-by-letter (A to Z) to arrange words in alphabetical order (dictionary sequence).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Arrange in dictionary order: 1. Apple, 2. Apricot, 3. Ape, 4. Apply',
            opts: ['3, 1, 4, 2', '1, 3, 2, 4', '3, 2, 1, 4', '1, 2, 3, 4'],
            ans: 0,
            exam: 'SSC MTS 2022',
            sol: 'Compare letters:\n1st letter of all: A\n2nd letter: p (Apple, Apricot, Apply), p (Ape)\nWait, Ape (A-p-e), Apple (A-p-p-l-e), Apricot (A-p-r-i-c-o-t), Apply (A-p-p-l-y).\nOrder: Ape (3) -> Apple (1) -> Apply (4) -> Apricot (2). Thus, 3, 1, 4, 2.'
          }
        ]
      }
    ]
  },
  venn: {
    title: 'Venn Diagram Representation',
    sections: [
      {
        type: 'concept',
        title: 'Categorical Sets',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Select the diagram that best displays the relationship between categories (e.g. Dogs, Pets, Animals).</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Choose the relation: "India, Delhi, Asia"',
            opts: ['Three concentric circles', 'Two separate circles inside a larger', 'Three intersecting circles', 'Separate circles'],
            ans: 0,
            exam: 'SSC CGL 2022',
            sol: 'Delhi is inside India, which is inside Asia. Concentric circles.'
          }
        ]
      }
    ]
  },
  calendar: {
    title: 'Calendar Logic',
    sections: [
      {
        type: 'formula',
        title: 'Odd Days Calculation',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Ordinary year = 365 days = 52 weeks + 1 odd day.<br>' +
              'Leap year = 366 days = 52 weeks + 2 odd days.<br>' +
              'Leap years occur in years divisible by 4, except century years which must be divisible by 400.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If Jan 1, 2011 was a Saturday, what day of the week was Jan 1, 2012?',
            opts: ['Sunday', 'Monday', 'Saturday', 'Friday'],
            ans: 0,
            exam: 'SSC CHSL 2020',
            sol: '2011 is an ordinary year (1 odd day). So Jan 1, 2012 will be Saturday + 1 day = Sunday.'
          }
        ]
      }
    ]
  },
  age: {
    title: 'Age Problems',
    sections: [
      {
        type: 'concept',
        title: 'Equations for Ages',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Define variables for present ages. Shift timelines back or forward (e.g. "5 years ago" means subtract 5 from both ages) and solve the ratios.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Ratio of ages of A and B is 3:4. In 5 years, it becomes 4:5. Find A\'s present age.',
            opts: ['15', '20', '12', '25'],
            ans: 0,
            exam: 'SSC CGL 2021',
            sol: 'Let ages be 3x and 4x.\n(3x + 5) / (4x + 5) = 4/5\n15x + 25 = 16x + 20\nx = 5. A\'s age = 3x = 15 years.'
          }
        ]
      }
    ]
  },
  'eng-roadmap': {
    title: 'Communication Pathway & Roadmap',
    sections: [
      {
        type: 'concept',
        title: 'The L-S-R-W Method for Fluency',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">The secret to learning any language is the <b>L-S-R-W Method</b>: <b>L</b>istening, <b>S</b>peaking, <b>R</b>eading, and <b>W</b>riting. For beginners and learners from underprivileged backgrounds, you do not need expensive coaching. You just need 30 minutes of daily dedicated practice.</p>' +
              '<div class="formula-box"><b>Your Daily Roadmap (30 Mins):</b><br>' +
              '1. <b>Listening (10 Mins):</b> Listen to simple English podcasts, cartoon stories, or news summaries.<br>' +
              '2. <b>Speaking (10 Mins):</b> Practice <i>Mirror-Talk</i> (look in the mirror and talk about your day) or <i>Self-Talk</i> (narrate your actions aloud).<br>' +
              '3. <b>Reading (5 Mins):</b> Read a simple storybook, a news article, or billboards.<br>' +
              '4. <b>Writing (5 Mins):</b> Write 3 simple sentences in a diary about what you did today.</div>'
      },
      {
        type: 'concept',
        title: 'Building Fluency and Overcoming Fear',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)"><ul>' +
              '<li><b>Don\'t fear mistakes:</b> Everyone makes mistakes when learning. Focus on being understood first, and correctness later.</li>' +
              '<li><b>Think in English:</b> Stop translating from your mother tongue. When you see a chair, think "chair", not the local language word for it.</li>' +
              '<li><b>Speak slowly:</b> Speaking slowly gives your brain time to select the right words and reduces stammering.</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'You meet someone for the first time. What is the most appropriate way to greet them in a professional setting?',
            opts: ['"Hey! What\'s up?"', '"Nice to meet you. How do you do?"', '"Tell me about yourself immediately."', '"Yo! Who are you?"'],
            ans: 1,
            exam: 'Daily Conversation',
            sol: 'In a professional setting, "Nice to meet you. How do you do?" is polite and appropriate. "Hey! What\'s up?" is informal and should only be used with friends.'
          },
          {
            q: 'Which study habit is best for improving pronunciation and speaking confidence without a partner?',
            opts: ['Reading grammar rules silently', 'Practicing mirror-talk and recording your voice', 'Writing long essays', 'Translating every word in a dictionary'],
            ans: 1,
            exam: 'Speaking Trick',
            sol: 'Mirror-talk (speaking while looking at yourself) builds confidence, and recording your voice allows you to hear your own pronunciation and correct it.'
          }
        ]
      }
    ]
  },
  'eng-basics': {
    title: 'Parts of Speech & Sentence Building',
    sections: [
      {
        type: 'concept',
        title: 'The 8 Parts of Speech',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Every word in a sentence plays a specific role. These are called the Parts of Speech:<ul>' +
              '<li><b>Noun:</b> Name of a person, place, or thing (e.g., <i>Rahul</i>, <i>Delhi</i>, <i>Book</i>).</li>' +
              '<li><b>Pronoun:</b> Used in place of a noun (e.g., <i>He</i>, <i>She</i>, <i>They</i>, <i>It</i>).</li>' +
              '<li><b>Verb:</b> Action word (e.g., <i>run</i>, <i>speak</i>, <i>is</i>, <i>have</i>).</li>' +
              '<li><b>Adjective:</b> Describes a noun (e.g., <i>tall</i>, <i>smart</i>, <i>beautiful</i>).</li>' +
              '<li><b>Adverb:</b> Describes a verb or adjective (e.g., speaks <i>slowly</i>, <i>very</i> happy).</li>' +
              '<li><b>Preposition:</b> Shows direction/place (e.g., <i>on</i> the table, <i>to</i> the school).</li>' +
              '<li><b>Conjunction:</b> Joins words or sentences (e.g., <i>and</i>, <i>but</i>, <i>because</i>).</li>' +
              '</ul></p>'
      },
      {
        type: 'formula',
        title: 'The Basic Sentence Pattern',
        html: '<div class="formula-box"><b>Basic English Word Order:</b> Subject (S) + Verb (V) + Object (O)</div>' +
              '<p style="line-height:1.8;color:var(--fg-secondary)">Example:<br>' +
              '• <b>S:</b> I | <b>V:</b> study | <b>O:</b> English.<br>' +
              '• <b>S:</b> He | <b>V:</b> plays | <b>O:</b> cricket.</p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Identify the verb in the sentence: "The smart student speaks English fluently."',
            opts: ['student', 'smart', 'speaks', 'fluently'],
            ans: 2,
            exam: 'Grammar Basics',
            sol: '"speaks" is the action word (verb). "student" is a noun, "smart" is an adjective, and "fluently" is an adverb describing how the student speaks.'
          },
          {
            q: 'Arrange these words in the correct S-V-O order: "likes / Rahul / mangoes"',
            opts: ['Rahul likes mangoes', 'Mangoes Rahul likes', 'Likes Rahul mangoes', 'Rahul mangoes likes'],
            ans: 0,
            exam: 'Sentence Building',
            sol: 'Subject (Rahul) + Verb (likes) + Object (mangoes) is the correct grammatical structure.'
          }
        ]
      }
    ]
  },
  'eng-tenses': {
    title: 'Tenses & Active Speaking',
    sections: [
      {
        type: 'concept',
        title: 'Tenses in Everyday Speech',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Tenses tell us <i>when</i> an action happened. For daily conversations, you only need to master 4 tenses:<ul>' +
              '<li><b>Present Simple:</b> For habits or daily routines. (e.g., "I work every day.")</li>' +
              '<li><b>Present Continuous:</b> For actions happening right now. (e.g., "I am speaking English now.")</li>' +
              '<li><b>Past Simple:</b> For finished past actions. (e.g., "I walked to the market yesterday.")</li>' +
              '<li><b>Future Simple:</b> For future actions/plans. (e.g., "I will study tomorrow.")</li>' +
              '</ul></p>'
      },
      {
        type: 'formula',
        title: 'Tense Formulas (Daily Use)',
        html: '<div class="formula-box"><ul>' +
              '<li><b>Present Simple:</b> Subject + Verb (s/es for he/she/it)</li>' +
              '<li><b>Present Continuous:</b> Subject + am/is/are + Verb-ing</li>' +
              '<li><b>Past Simple:</b> Subject + Verb (2nd form)</li>' +
              '<li><b>Future Simple:</b> Subject + will + Verb (1st form)</li>' +
              '</ul></div>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Choose the correct form of verb: "Every morning, he _______ a newspaper."',
            opts: ['read', 'reads', 'is reading', 'will read'],
            ans: 1,
            exam: 'Verb Tenses',
            sol: '"Every morning" indicates a daily habit, which requires Present Simple. Since the subject is "he" (singular third person), we add "s/es" to the verb: "reads".'
          },
          {
            q: 'Complete the sentence in the past tense: "Yesterday, I _______ to the new market."',
            opts: ['go', 'went', 'am going', 'goes'],
            ans: 1,
            exam: 'Past Tense Check',
            sol: '"Yesterday" denotes a finished past action. The 2nd form of the verb "go" is "went".'
          }
        ]
      }
    ]
  },
  'eng-questions': {
    title: 'Asking Questions & Negative Sentences',
    sections: [
      {
        type: 'concept',
        title: 'Framing Questions',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Asking questions is the key to conversation. There are two main types:<ul>' +
              '<li><b>Yes/No Questions:</b> Start with helper verbs (Do, Does, Did, Is, Are).<br>' +
              '• "Do you like tea?" | "Did he arrive yesterday?"</li>' +
              '<li><b>Information Questions:</b> Start with Wh-words (What, Where, Why, When, Who, How).<br>' +
              '• "Where do you live?" | "How did you learn English?"</li>' +
              '</ul></p>'
      },
      {
        type: 'formula',
        title: 'Negative Sentences',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">To say "no", we use helper verbs with "not":<ul>' +
              '<li><b>Present:</b> do not (don\'t) / does not (doesn\'t). (e.g., "I don\'t know." / "She doesn\'t speak French.")</li>' +
              '<li><b>Past:</b> did not (didn\'t). (e.g., "I didn\'t go to the movie.")</li>' +
              '<li><b>Future:</b> will not (won\'t). (e.g., "We won\'t play tomorrow.")</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Choose the correct question format to ask about someone\'s workplace.',
            opts: ['"Where do you work?"', '"Where works you?"', '"You work where?"', '"Do you working where?"'],
            ans: 0,
            exam: 'Question Framing',
            sol: 'The standard question order is Wh-word + Helper Verb (do/does) + Subject + main Verb. "Where do you work?" is correct.'
          },
          {
            q: 'Choose the correct negative sentence.',
            opts: ['"He don\'t likes study."', '"He doesn\'t like to study."', '"He not likes to study."', '"He did not liked to study."'],
            ans: 1,
            exam: 'Negatives Check',
            sol: 'For "He" (singular), we use "doesn\'t" followed by the base form of the verb "like" (no "s" is added when "does" is present). "He doesn\'t like to study" is correct.'
          }
        ]
      }
    ]
  },
  'eng-common-errors': {
    title: 'Common Mistakes & Corrections',
    sections: [
      {
        type: 'concept',
        title: 'Top 5 Daily Speech Errors',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Avoid these common verbal errors in interviews and daily conversations:<ul>' +
              '<li><b>1. "Myself [Name]"</b><br>' +
              '• <i>Wrong:</i> Myself Rahul.<br>' +
              '• <i>Right:</i> I am Rahul. / My name is Rahul.</li>' +
              '<li><b>2. "Having" for possession</b><br>' +
              '• <i>Wrong:</i> I am having a car.<br>' +
              '• <i>Right:</i> I have a car.</li>' +
              '<li><b>3. "He don\'t"</b><br>' +
              '• <i>Wrong:</i> He don\'t know.<br>' +
              '• <i>Right:</i> He doesn\'t know.</li>' +
              '<li><b>4. "Did + Past Verb"</b><br>' +
              '• <i>Wrong:</i> I didn\'t went there.<br>' +
              '• <i>Right:</i> I didn\'t go there. (Did already shows past, use 1st form verb).</li>' +
              '<li><b>5. "According to me"</b><br>' +
              '• <i>Wrong:</i> According to me, this is correct.<br>' +
              '• <i>Right:</i> In my opinion, this is correct.</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'Find the correct sentence.',
            opts: ['"I didn\'t received the letter."', '"I didn\'t receive the letter."', '"I didn\'t receives the letter."', '"I have not received the letter yesterday."'],
            ans: 1,
            exam: 'Common Errors',
            sol: 'After "didn\'t", we always use the base form (1st form) of the verb. "receive" is correct. "received" is wrong.'
          },
          {
            q: 'Correct this response: "I am having two brothers."',
            opts: ['"I have two brothers."', '"I am having two brother."', '"I have been two brothers."', '"Myself has two brothers."'],
            ans: 0,
            exam: 'Possessive Errors',
            sol: '"Having" is not used for relationships or possessions unless it is about eating/drinking. Use "have": "I have two brothers."'
          }
        ]
      }
    ]
  },
  'eng-vocab-daily': {
    title: 'Top 800+ Daily Conversation Words',
    sections: [
      {
        type: 'vocab',
        title: 'High-Frequency Words for Daily Survival & Careers',
        html: ''
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'What is the meaning of the word "Apologize"?',
            opts: ['To feel proud', 'To express regret / say sorry', 'To ask for money', 'To make a choice'],
            ans: 1,
            exam: 'Vocabulary Meanings',
            sol: '"Apologize" means to say sorry or express regret for a mistake.'
          },
          {
            q: 'Identify the word which means "Absolutely necessary".',
            opts: ['Cheap', 'Humble', 'Essential', 'Expensive'],
            ans: 2,
            exam: 'Synonyms Check',
            sol: '"Essential" means absolutely necessary or crucial.'
          }
        ]
      }
    ]
  },
  'eng-phrases': {
    title: 'Useful Everyday Phrases & Expressions',
    sections: [
      {
        type: 'concept',
        title: 'Polite Expressions for Daily Life',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Using polite expressions opens doors to career opportunities. Practice these standard phrases:<ul>' +
              '<li><b>Greeting & Introductions:</b><br>' +
              '• "Hello, good morning. My name is Rahul."<br>' +
              '• "It is a pleasure to meet you."</li>' +
              '<li><b>Asking for Help:</b><br>' +
              '• "Could you please help me with this?"<br>' +
              '• "Would you mind repeating that, please?" (Use this when you didn\'t hear someone clearly).</li>' +
              '<li><b>Thanking and Responding:</b><br>' +
              '• "Thank you so much for your support." -> Response: "You are welcome." or "It\'s my pleasure."</li>' +
              '<li><b>Apologizing:</b><br>' +
              '• "I am sorry for the delay." / "Excuse me, I have a query."</li>' +
              '</ul></p>'
      },
      {
        type: 'concept',
        title: 'Interview & Work Readiness Phrases',
        html: '<p style="line-height:1.8;color:var(--fg-secondary)">Useful sentences for landing a job:<ul>' +
              '<li><b>Talking about your background:</b> "I have completed my schooling from my hometown, and I am looking to build a career in this field."</li>' +
              '<li><b>Expressing capability:</b> "I am a quick learner and I am ready to work hard for this organization."</li>' +
              '<li><b>Expressing gratitude at the end:</b> "Thank you for giving me this opportunity."</li>' +
              '</ul></p>'
      },
      {
        type: 'mcq',
        title: 'Practice Questions',
        questions: [
          {
            q: 'If you did not hear what someone said, how should you politely ask them to repeat?',
            opts: ['"Say it again!"', '"Would you mind repeating that, please?"', '"What? Repeat now."', '"I didn\'t hear you, speak louder."'],
            ans: 1,
            exam: 'Polite Conversational Speech',
            sol: '"Would you mind repeating that, please?" is a standard, highly polite way to ask someone to repeat a statement. It is perfect for professional settings.'
          },
          {
            q: 'How should you respond when someone says "Thank you so much"?',
            opts: ['"Okay."', '"You are welcome."', '"No problem, whatever."', '"Thank you also."'],
            ans: 1,
            exam: 'Standard Greetings',
            sol: 'The most polite and standard response to "Thank you" is "You are welcome" or "It is my pleasure."'
          }
        ]
      }
    ]
  }
};

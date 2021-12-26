/**
 * @param {string} s
 * @return {number}
 *   I             1
 *   V             5
 *   X             10
 *   L             50
 *   C             100
 *   D             500
 *   M             1000
 *  I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.
 */
var romanToInt = function(s) {
    
  const letters = {
    'I': {
      'V': 4,
      'X': 9,
      'default': 1
    },
    'V': 5,
    'X': {
      'L': 40,
      'C': 90,
      'default': 10
    },
    'L': 50,
    'C': {
      'D': 400,
      'M': 900,
      'default': 100
    },
    'D': 500,
    'M': 1000
  }

  let sum = 0

  for (let i = 0; i < s.length; i++) {
    const [current, next] = [s[i], s[i + 1]]
    if (letters[current]?.[next]) {
      sum += letters[current][next]
      i++
    } else {
      if (!letters[current][current]) {
        sum += letters[current]['default'] ?? letters[current]
      }
    }
  }

  return sum
};

console.log(romanToInt("III")) // 3
console.log(romanToInt("LVIII")) // 58
console.log(romanToInt("MCMXCIV")) // 1994
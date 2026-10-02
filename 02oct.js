//Find Most Frequent Vowel and Consonant

const vowels = new Set(["a", "e", "i", "o", "u"]);

function maxFreqSum(str) {
  const frequencies = {};

  for (const char of str) {
    frequencies[char] = (frequencies[char] || 0) + 1;
  }

  console.log(frequencies);

  let maxFreqVowels = 0;
  let maxFreqConsonants = 0;

  for (const [char, frequency] of Object.entries(frequencies)) {
    console.log(char);
    console.log(frequency);
    if (vowels.has(char)) {
      maxFreqVowels = Math.max(maxFreqVowels, frequency);
    } else {
      maxFreqConsonants = Math.max(maxFreqConsonants, frequency);
    }
  }

  return maxFreqVowels + maxFreqConsonants;
}

// console.log(maxFreqSum("aeiaeia"));

//A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.


function isPalindrome(str) {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(normalized);
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

console.log(isPalindrome("race a car"));
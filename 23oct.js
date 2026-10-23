/*
Given a string s, rearrange its characters so that no two adjacent characters
are equal. Return "" if no such rearrangement exists.

The most frequent character can occupy at most every other position, so a
rearrangement is possible exactly when maxFrequency <= ceil(s.length / 2).
After sorting characters by frequency, put them into even indices first
(0, 2, 4, ...), then continue at odd indices (1, 3, 5, ...). This spaces out
the most frequent characters.
*/
function reorganizeString(s) {
  const characters = Array.from(s);
  console.log("Character:",characters);
  const frequencies = new Map();

  for (const character of characters) {
    frequencies.set(character, (frequencies.get(character) ?? 0) + 1);
  }

  console.log("Frequencies:",frequencies);

  const entries = [...frequencies.entries()].sort((a, b) => b[1] - a[1]);
  if (entries.length > 0 && entries[0][1] > Math.ceil(characters.length / 2)) {
    return "";
  }

  console.log("Entries:",entries);

  const result = Array(characters.length);
  let index = 0;

  for (const [character, count] of entries) {
    for (let remaining = count; remaining > 0; remaining -= 1) {
      result[index] = character;
      index += 2;
      if (index >= result.length) {
        index = 1;
      }
    }
  }

  return result.join("");
}

// Examples:
reorganizeString("aab");
// reorganizeString("aaab") -> ""

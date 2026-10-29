function countDistinctSubsequences(text) {
  const counts = Array(text.length + 1).fill(0n);
  console.log(counts);
  const lastPosition = new Map();
  console.log(lastPosition);
  counts[0] = 1n;

  for (let i = 1; i <= text.length; i++) {
    const character = text[i - 1];
    counts[i] = 2n * counts[i - 1];
    console.log(counts);

    if (lastPosition.has(character)) {
      counts[i] -= counts[lastPosition.get(character) - 1];
    }

    lastPosition.set(character, i);
  }

  return counts[text.length];
}

const text = process.argv[2] ?? "aba";
console.log(countDistinctSubsequences(text).toString());
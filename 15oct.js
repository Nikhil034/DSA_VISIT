/*

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"
countAndSay(n) is the run-length encoding of countAndSay(n - 1).
Run-length encoding (RLE) is a string compression method that works by replacing each maximal group of consecutive identical characters with the concatenation of the length of the group followed by the character itself. For example, to compress the string "3322251" we replace "33" with "23", replace "222" with "32", replace "5" with "15", and replace "1" with "11". Thus the compressed string becomes "23321511"

*/

function CountAndSayV1(n) {
  let obj = {},
    ans = "";

  for (let i = 0; i < n.length; i++) {
    if (obj.hasOwnProperty(n[i])) {
      obj[n[i]] += 1;
    } else {
      obj[n[i]] = 1;
    }
  }
  console.log(obj);

  for (let k = 0; k < n.length; k++) {
    for (key in obj) {
        if(key===n[k]){
            for(let j=0;j<obj[key];j++){
                ans+=obj[key];
            }
        }
    }
  }

  console.log("Answer is:",ans);
}

function runLengthEncode(text) {
  let encoded = "";

  for (let i = 0; i < text.length;) {
    let j = i;
    while (j < text.length && text[j] === text[i]) {
      j++;
    }
    encoded += String(j - i) + text[i];
    i = j;
  }

  return encoded;
}

function countAndSay(n) {
  if (!Number.isInteger(n) || n < 1) {
    throw new TypeError("n must be a positive integer");
  }

  let current = "1";
  for (let term = 2; term <= n; term++) {
    current = runLengthEncode(current);
  }
  return current;
}

// console.log(runLengthEncode("3322251")); // "23321511"
// console.log(countAndSay(5)); // "111221"


function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))



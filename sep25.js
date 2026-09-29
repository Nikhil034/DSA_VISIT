//Return count of negative number from array

//1.Given an array arr of numbers, return the count of elements strictly less than 0.

let arr = [8,7829,18,781,81,68,765,1];
console.log("-----OUTPUT----");
console.log(countNegative(arr));

function countNegative(arr) {
  let count = 0;
  console.time();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  console.timeEnd();
  return count;
}

//Done within 5 minutes interval

//2. Find smallest & largest number from array

console.log("---2 Program-----");
console.log(findSmallestorLargest(arr,"SMALLEST"));

function findSmallestorLargest(arr, flag) {
  let resultNumber=arr[0];
  console.log(flag.toLocaleLowerCase());
  for (let i = 0; i < arr.length; i++) {
    if (flag.toLocaleLowerCase() == "smallest") {
      if (resultNumber > arr[i]) {
        resultNumber = arr[i];
      }
    } else if (flag.toLocaleLowerCase() == "largest") {
      if (resultNumber < arr[i]) {
        resultNumber = arr[i];
      }
    } else {
      return "Invalid flag passed!";
    }
  }
  return resultNumber;
}


//Done hardly take 7 minutes

//3. Power of two 
function PowerOfTwo(num) {
    if (num <= 0) {
        return false;
    }

    while (num > 1) {
        if (num % 2 !== 0) {
            return false;
        }

        num = num / 2;
    }

    return true;
}

console.log("------- Power Of Two --------------");

console.log(PowerOfTwo(16)); // true
console.log(PowerOfTwo(8));  // true
console.log(PowerOfTwo(4));  // true
console.log(PowerOfTwo(2));  // true
console.log(PowerOfTwo(1));  // true

console.log(PowerOfTwo(18)); // false
console.log(PowerOfTwo(10)); // false
console.log(PowerOfTwo(0));  // false
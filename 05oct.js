//Find the Index of the First Occurrence in a String

// function FirstOccurrenceIndex(haystack,needle){
//     let ptrindex=-1,ptrIterate=-1;

//     for(let i=0;i<haystack.length;i++){
//        if(haystack[i]==needle[i]){
//         ptrindex=i;
//          for(let k=i+1;k<needle.length;k++){
//              if(haystack[k]!=needle[k]){
//                 return -1;
//              }
//          }
//        }
//        return ptrindex;
//     }
//     // console.log("Ptr index:",ptrindex);
// }

function firstOccurrenceIndex(haystack, needle) {
    if (needle.length === 0) return 0;
    console.log("Haystack length:",haystack.length);
    console.log("Needle stack",needle.length);

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;

        for (let j = 0; j < needle.length; j++) {
            console.log("Value=>",haystack[i+j]);
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }

        if (match) return i;
    }

    return -1;
}

// console.log(firstOccurrenceIndex("leetcode", "code")); // 4

// console.log(FirstOccurrenceIndex("leetcode","code"));

// Node structure
class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

// Initialize and allocate memory for tree nodes
let firstNode = new Node(2);
let secondNode = new Node(3);
let thirdNode = new Node(4);
let fourthNode = new Node(5);

// Connect binary tree nodes
firstNode.left = secondNode;
firstNode.right = thirdNode;
secondNode.left = fourthNode;

//You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// function TwoSum(nums,target){
//     let ansArray=[],tmp=target;

//     for(let i=0;i<nums.length;i++){
//         for(let k=0;k<nums.length;k++){
//             tmp=tmp-nums[k];
//             if(tmp===0){
//                 ansArray.push(i);
//                 ansArray.push(k);
//                 return ansArray;
//             }
//         }
//         tmp=target;
//     }
//     return ansArray;
// }


function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        console.log("Complement:",complement);

        if (map.has(complement)) {
            console.log(map);
            return [map.get(complement), i];
        }

        map.set(nums[i], i);
        console.log("MAP",map); 
    }

    return [];
}

console.log(twoSum([3, 2, 4], 6)); // [1, 2]

// console.log(TwoSum([3,2,4],6));
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

function SingleNumber(nums){

    let obj={};
    for(let i=0;i<nums.length;i++){
      if(obj.hasOwnProperty(nums[i])){
        obj[nums[i]]=obj[nums[i]]+1;
      }
      else{
        obj[nums[i]]=1;
      }
      
    }
    for(key in obj){
        if(obj[key]==1){
            return key;
        }
    }

}

// console.log(SingleNumber[4,1,2,1,2]);
// console.log(SingleNumber([9,8,1,5,1,5,15,15,8,9,7,6,6,4,5,5]));

//Write a function that reverses a string. The input string is given as an array of characters s.

function ReverseStringV1(str){
    let reverse="";
    console.log(str);
    for(let i=str.length-1;i>=0;i--){
         reverse+=str[i];
    }
    console.log(reverse);
}

function ReverseStringV2(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

const chars = ["H", "a", "n", "n", "a", "h"];
ReverseString(chars);
console.log(chars); 


ReverseString(["H","a","n","n","a","h"])
//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

function singleNumber(nums){
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]]=obj[nums[i]]+1;
        }
        else
        {
          obj[nums[i]]=1;
        }
    }
    console.log(obj);
    for(key in obj){
        if(obj[key]===1){
            return key;
        }
    }
}

console.log(singleNumber([2,2,1,2]));

//Given an integer array nums, find the subarray with the largest sum, and return its sum.

function maxSubArray(nums){
    let currentSum=nums[0]; // -2 
    let maxSum=nums[0]; //-2

    for(let i=1;i<nums.length;i++){
        currentSum=Math.max(nums[i],currentSum+nums[i]); // 1,-2+1= 1 
        maxSum=Math.max(maxSum,currentSum); 
    }
    return maxSum;
}

console.log(maxSubArray([-3,1,-2,4]))
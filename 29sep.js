//1 Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.


function MoveZeros(nums){

    let index=0;
    let tmp;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            tmp=nums[i-1]; //0
            nums[index]=nums[i];
            nums[i]=tmp;
            index++;
        }
    }
    console.log(nums);
    
}

// MoveZeros([9,0,7,7,13,0,15,18,19,2,0]);

//2. Given a binary array nums, return the maximum number of consecutive 1's in the array

function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        } else {
            count = 0;
        }

        maxCount = Math.max(maxCount, count);
    }

    console.log(maxCount);
}

findMaxConsecutiveOnes([1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0]);
//1 Remove duplicate number from the array 

let arr=[0,0,1,1,1,2,2,3,3,4];

// function RemoveDuplicate(arr){
//     //1 find duplicate number 
//     //2 sort order should be manage
//     //3 length should be same only keep _
//     //4 count unique number 

//     let temp;
//     for(let i=0;i<arr.length;i++){
//         temp=arr[i];
//         for(let j=i+1;j<arr.length;j++){
//             if(temp==arr[j]){
//                 arr.splice(j,1);
//                 arr.push("_");
//                 j--;
//             }
//         }
//     }
//     return arr;
// }

// function RemoveDuplicate(arr) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0 || arr[i] !== arr[i - 1]) {
//             result.push(arr[i]);
//         }
//     }

//     return result;
// }

function removeDuplicates(nums) {
    let k = 1;

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] !== nums[i - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
}

let nums = [0,0,1,1,1,2,2,3,3,4];

let k = removeDuplicates(nums);

console.log(k);
console.log(nums);


console.log("----- Remove Element------");

let arr2=[0,1,2,2,3,0,4,2];

// function RemoveElement(arr,val){
//     //find value to delete match
//     //remove that element 
//     //count unique number length 
//     //return on sort order manner


//     for(let i=0;i<arr.length;i++){
//         if(val==arr[i]){
//             arr.splice(i,1);
//             arr.push("_");
//         }
//     }
    

// }


function RemoveElement(nums,val){
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[index] = nums[i];  //0 1 3  
            index++; //1 2 3
        }
    }
    console.log(nums);
    return index;
}

console.log(RemoveElement(arr2,2));


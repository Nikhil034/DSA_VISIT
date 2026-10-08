//Given an integer array nums of unique elements, return all possible subsets (the power set).

function subsets(nums) {
    const result = [];
    const current = [];

    function backtrack(index) {
        if (index === nums.length) {
            result.push([...current]); // Save a copy of this subset
            return;
        }

        // Exclude nums[index]
        backtrack(index + 1);

        // Include nums[index]
        current.push(nums[index]);
        backtrack(index + 1);
        current.pop(); // Undo the choice before exploring another path
    }

    backtrack(0);
    return result;
}


// console.log(subsets([1,2]));

function permutations(nums) {
    const result = [];
    const current = [];
    const used = Array(nums.length).fill(false);

    function backtrack() {
        if (current.length === nums.length) {
            result.push([...current]); // Save a copy
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            // Choose
            current.push(nums[i]);
            used[i] = true;

            // Explore
            backtrack();

            // Undo
            current.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
}

console.log(permutations([1, 2, 3]));
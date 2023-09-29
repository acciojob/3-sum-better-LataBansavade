function threeSum(nums, target) {
// write your code herenums.sort((a, b) => a - b);

    let closestSum = Infinity; // Initialize the closest sum to a large value

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // If the current sum is closer to the target, update closestSum
            if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
                closestSum = sum;
            }

            // Adjust the pointers based on the comparison with the target
            if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return closestSum;
  
}



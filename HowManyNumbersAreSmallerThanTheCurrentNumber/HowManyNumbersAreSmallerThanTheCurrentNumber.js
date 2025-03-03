/*
Problem Description

    LeetCode - 1365. How Many Numbers Are Smaller Than the Current Number
    
    Q. Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

    Return the answer in an array.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let numsMap = new Map();
    let resMap = new Map();
    let count;
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(nums[i])) {
            numsMap.set(nums[i], numsMap.get(nums[i]) + 1);
        }
        else {
            numsMap.set(nums[i], 1);
        }
    }

    for (let [key, value] of numsMap) {
        count = 0;

        for (let [key1, value1] of numsMap) {
            if (key1 !== key) {
                if (key1 < key) {
                    count = count + value1;
                }
            }
        }

        resMap.set(key, count);
    }

    let res = nums.map((num) => resMap.get(num));
    return res;
};
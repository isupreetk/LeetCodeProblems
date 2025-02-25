/*
Problem Description

    LeetCode - 136. Single Number
    
    Q. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
*/

//  ----------------- Solution 1 ------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(nums[i])) {
            numsMap.set(nums[i], numsMap.get(nums[i])+1);
        }
        else {
            numsMap.set(nums[i], 1);
        }
    }
    for (let [key, value] of numsMap) {
        if (value === 1) {
            return key;
        }
    }
};


// ------------------ Solution 2 ------------------

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xorRes = 0;

    for (let i = 0; i < nums.length; i++) {
        xorRes = xorRes ^ nums[i];
    }
    return xorRes;
};
/*
Problem Description

    LeetCode - 1748. Sum of Unique Elements
    
    Q. You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

    Return the sum of all the unique elements of nums.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let numsMap = new Map();
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (numsMap.get(nums[i])) {
            numsMap.set(nums[i], numsMap.get(nums[i])+1);
        }
        else {
            numsMap.set(nums[i], 1);
        }
    }

    for (let [key,value] of numsMap) {
        if (value === 1) {
            count = count + key;
        }        
    }
    return count;
};
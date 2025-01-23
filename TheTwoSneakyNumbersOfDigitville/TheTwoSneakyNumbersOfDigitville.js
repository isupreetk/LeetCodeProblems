/*
Problem Description

    LeetCode - 3289. The Two Sneaky Numbers of Digitville

    Q. In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.

    As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.
*/

// Solution 1
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let resultMap = new Map();
    let resultArr = [];
    let count;
    for (let i = 0; i < nums.length; i++) {
        if (resultMap.get(nums[i]) === undefined) {
            count = 0;
        }
        else {
            count = resultMap.get(nums[i]);
        }
        resultMap.set(nums[i], count + 1);
    }

    resultMap.forEach((value, key) => {
        if (value === 2) {
            resultArr.push(key);
        }
    })
    return resultArr;
};

// Solution 2 - optimises Solution 1 to get rid of second for loop
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function (nums) {
    let resultMap = new Map();
    let resultArr = [];
    let count;
    for (let i = 0; i < nums.length; i++) {
        if (resultMap.get(nums[i]) === undefined) {
            count = 0;
        }
        else {
            count = resultMap.get(nums[i]);
        }
        resultMap.set(nums[i], count + 1);

        if (resultMap.get(nums[i]) === 2) {
            resultArr.push(nums[i]);
        }
    }
    return resultArr;
};
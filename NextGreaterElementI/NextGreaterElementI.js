/*
Problem Description

    LeetCode - 496. Next Greater Element I
    
    Q. The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

    You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

    For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

    Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let baseIndex;
    let res;
    let ans = [];

    for (let i = 0; i < nums1.length; i++) {
        baseIndex = nums2.indexOf(nums1[i]);
        if (baseIndex === -1 || baseIndex === nums2.length - 1) {
            res = -1;
        }
        else {
            for (let j = baseIndex + 1; j < nums2.length; j++) {
                if (baseIndex !== nums2.length && nums2[baseIndex] < nums2[j]) {
                    res = nums2[j];
                    break;
                }
                else {
                    res = -1;
                }
            }
        }
        ans.push(res);
    }
    return ans;
};
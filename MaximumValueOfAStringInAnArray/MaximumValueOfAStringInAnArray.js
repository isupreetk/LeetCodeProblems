/*
Problem Description

    LeetCode - 2496. Maximum Value of a String in an Array
    
    Q. The value of an alphanumeric string can be defined as:

    The numeric representation of the string in base 10, if it comprises of digits only.

    The length of the string, otherwise.

    Given an array strs of alphanumeric strings, return the maximum value of any string in strs.
*/

/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let cnt = 0;
    let maxCnt = 0;
    for (let i = 0; i < strs.length; i++) {
        if (isNaN(strs[i])) {
           cnt = strs[i].length;
        }
        else {
            cnt = Number(strs[i]);
        }
        if (cnt > maxCnt) {
            maxCnt = cnt;
        }
    }
    return maxCnt;
};
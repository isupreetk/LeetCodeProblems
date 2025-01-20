/*
Problem Description

    LeetCode - 944. Delete Columns to Make Sorted
    Q. You are given an array of n strings strs, all of the same length.

    The strings can be arranged such that there is one on each line, making a grid.

    For example, strs = ["abc", "bce", "cae"] can be arranged as follows:
    abc
    bce
    cae
    You want to delete the columns that are not sorted lexicographically. In the above example (0-indexed), columns 0 ('a', 'b', 'c') and 2 ('c', 'e', 'e') are sorted, while column 1 ('b', 'c', 'a') is not, so you would delete column 1.

    Return the number of columns that you will delete.

*/

/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let strLength = strs[0].length;
    let count = 0;
    for (let i = 0; i < strLength; i++){
        for (let j = 0; j < strs.length - 1; j++){
            if (strs[j][i].charCodeAt(0) > strs[j+1][i].charCodeAt(0)) {
                count++;
                break;
            }
        }
    }
    return count;
};
/*
Problem Description

    LeetCode - 1684. Count the Number of Consistent Strings
    Q. You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

    Return the number of consistent strings in the array words.
*/

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let flag = false;
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
          if (allowed.includes(words[i][j])) {
            flag = true;
          }  
          else {
            flag = false;
            break;
          }
        }
        if (flag) {
            count++;
        }
    }
    return count;
};
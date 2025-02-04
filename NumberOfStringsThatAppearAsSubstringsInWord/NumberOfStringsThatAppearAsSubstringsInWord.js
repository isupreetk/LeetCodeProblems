/*
Problem Description

    LeetCode - 1967. Number of Strings That Appear as Substrings in Word
    
    Q. Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

    A substring is a contiguous sequence of characters within a string.
*/

/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let cnt = 0;

    for (let i = 0; i < patterns.length; i++) {
        if (word.includes(patterns[i])) {
            cnt++;
        }
    }

    return cnt;
};
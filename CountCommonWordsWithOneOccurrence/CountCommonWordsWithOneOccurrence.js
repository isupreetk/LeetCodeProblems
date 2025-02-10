/*
Problem Description

    LeetCode - 2085. Count Common Words With One Occurrence
    
    Q. Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
*/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {number}
 */
var countWords = function (words1, words2) {
    let word1Map = new Map();
    let word2Map = new Map();
    let cnt1 = 0;
    let cnt2 = 0;
    let result = [];

    words1.forEach((word) => {
        word1Map.get(word) === undefined ? word1Map.set(word, cnt1 + 1) : word1Map.set(word, word1Map.get(word) + 1);
    })

    words2.forEach((word) => {
        word2Map.get(word) === undefined ? word2Map.set(word, cnt2 + 1) : word2Map.set(word, word2Map.get(word) + 1);
    })

    word1Map.forEach((key, value) => {
        if (key === 1) {
            if (word2Map.get(value) === 1) {
                result.push(value);
            }
        }
    })
    return result.length;
};
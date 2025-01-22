/*
Problem Description

    LeetCode - 1408. String Matching in an Array

    Q. Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

    A substring is a contiguous sequence of characters within a string
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    let result = [];
    words.sort((a, b) => { return a.length - b.length })
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[j].includes(words[i])) {
                if (!result.includes(words[i])) {
                    result.push(words[i]);
                }
            }
        }
    }
    return result;
};
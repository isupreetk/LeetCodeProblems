/*
Problem Description

    LeetCode - 2114. Maximum Number of Words Found in Sentences
    Q. A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

    You are given an array of strings sentences, where each sentences[i] represents a single sentence.

    Return the maximum number of words that appear in a single sentence.
*/

/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let words = 0;
    let maxWords = 0;
    for (let i = 0; i < sentences.length; i++) {
        words = sentences[i].split(" ").length;
        if (words > maxWords) {
            maxWords = words;
        }
    }
    return maxWords;
};
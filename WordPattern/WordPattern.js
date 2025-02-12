/*
Problem Description

    LeetCode - 290. Word Pattern
    
    Q. Given a pattern and a string s, find if s follows the same pattern.

    Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

    Each letter in pattern maps to exactly one unique word in s.
    Each unique word in s maps to exactly one letter in pattern.
    No two letters map to the same word, and no two words map to the same letter.
*/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    pattern = pattern.split("");
    s = s.split(" ");
    let resMap = new Map();
    let res = true;
    let values = [];

    if (pattern.length === s.length) {
        for (let i = 0; i < pattern.length; i++) {
            if (!resMap.get(pattern[i])) {
                resMap.set(pattern[i], s[i]);
            }
            else {
                if (resMap.get(pattern[i]) !== s[i]) {
                    res = false;
                }
                else {
                    continue;
                }
            }
        }
    }
    else {
        res = false;
    }

    for (let [key, value] of resMap) {
        if (values.includes(value)) {
            res = false;
        }
        else {
            values.push(value);
        }
    }
    return res;
};
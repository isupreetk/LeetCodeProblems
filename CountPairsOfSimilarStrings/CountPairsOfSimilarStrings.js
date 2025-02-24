/*
Problem Description

    LeetCode - 2506. Count Pairs Of Similar Strings
    
    Q. You are given a 0-indexed string array words.

    Two strings are similar if they consist of the same characters.

    - For example, "abca" and "cba" are similar since both consist of characters 'a', 'b', and 'c'.
    - However, "abacba" and "bcfd" are not similar since they do not consist of the same characters.
    
    Return the number of pairs (i, j) such that 0 <= i < j <= word.length - 1 and the two strings words[i] and words[j] are similar.
*/

/**
 * @param {string[]} words
 * @return {number}
 */

var similarPairs = function(words) {
    let count = 0;
    let resObj = {};

    const eqSet = (xs, ys) =>
    xs.size === ys.size &&
    [...xs].every((x) => ys.has(x));

    for (let i = 0; i < words.length; i++) {
        let resSet = new Set();
        for (let j = 0 ; j < words[i].length; j++) {
            if (!resSet.has(words[i][j])) {
                resSet.add(words[i][j]);
            }
        }
        resObj[i] = resSet;
    }
    let objectLength = Object.keys(resObj).length;

    for (let k = 0; k < objectLength; k++) {

        for (const [key, value] of Object.entries(resObj)) {
            if (parseInt(key) !== k) {
                if (eqSet(resObj[k], value)) {
                    count++;
                }
            }
        }
    }
    return count/2;
};
/*
Problem Description

    LeetCode - 953. Verifying an Alien Dictionary
    Q. In an alien language, surprisingly, they also use English lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

    Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographically in this alien language.
*/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let result = true;

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (order.indexOf(words[i][j]) === order.indexOf(words[i + 1][j])) {
                continue;
            }
            else if (order.indexOf(words[i][j]) < order.indexOf(words[i + 1][j])) {
                break;
            }
            else {
                result = false;
                return result;
            }
        }
    }
    if (result) {
        return result;
    }

}
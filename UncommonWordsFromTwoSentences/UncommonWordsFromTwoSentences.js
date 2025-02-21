/*
Problem Description

    LeetCode - 884. Uncommon Words from Two Sentences
    
    Q. A sentence is a string of single-space separated words where each word consists only of lowercase letters.

    A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

    Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    let s1Arr = s1.split(" ");
    let s2Arr = s2.split(" ");
    let s1Map = new Map();
    let s2Map = new Map();
    let largerMap = s1Map;
    let otherMap = s2Map;
    let res = [];

    for (let i = 0; i < s1Arr.length; i++) {
        if (s1Map.get(s1Arr[i])) {
            s1Map.set(s1Arr[i], s1Map.get(s1Arr[i])+1);
        }
        else {
            s1Map.set(s1Arr[i], 1);
        }
    }

    for (let j = 0; j < s2Arr.length; j++) {
        if (s2Map.get(s2Arr[j])) {
            s2Map.set(s2Arr[j], s2Map.get(s2Arr[j])+1);
        }
        else {
            s2Map.set(s2Arr[j], 1);
        }
    }

    if (s1Map.size < s2Map.size) {
        largerMap = s2Map;
        otherMap = s1Map;
    }

    for (let [key1, value1] of largerMap) {
        if (!otherMap.get(key1) && value1===1) {
            res.push(key1);
        }
    }

    for (let [key2, value2] of otherMap) {
        if (!largerMap.get(key2) && value2===1) {
            res.push(key2);
        }
    }

    return res;
};
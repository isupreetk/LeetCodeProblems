/*
Problem Description

    LeetCode - 242. Valid Anagram
    
    Q. Given two strings s and t, return true if t is an anagram of s, and false otherwise. 

    Note: An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sMap = new Map();
    let tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sMap.get(s[i])) {
            sMap.set(s[i], sMap.get(s[i])+1);
        }
        else {
            sMap.set(s[i], 1);
        }
    }

    for (let j = 0; j < t.length; j++) {
        if (tMap.get(t[j])) {
            tMap.set(t[j], tMap.get(t[j])+1);
        }
        else {
            tMap.set(t[j], 1);
        }
    }

    if (sMap.size !== tMap.size) {
        return false;
    }
    else if (sMap.size === tMap.size) {
        for (let [key, value] of sMap) {

            if (tMap.get(key) === value) {
                continue;
            }
            else {
                return false;
            }
        }
    }

    return true;
};
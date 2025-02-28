/*
Problem Description

    LeetCode - 387. First Unique Character in a String
    
    Q. Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let sMap = new Map();
    let res;
    for (let i = 0; i < s.length; i++) {
        if (sMap.get(s[i])) {
            sMap.set(s[i], sMap.get(s[i])+1);
        }
        else {
            sMap.set(s[i], 1);
        }
    }

    for (let [key, value] of sMap) {
        if (value === 1) {
            res = s.indexOf(key);
            break;
        }
        else {
            res = -1;
        } 
    }
    return res;
};
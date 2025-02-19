/*
Problem Description

    LeetCode - 409. Longest Palindrome
    
    Q. Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

    Letters are case sensitive, for example, "Aa" is not considered a palindrome.
*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let sMap = new Map();
    let cnt = 0;
    let res = 0;

    for (let i = 0 ; i < s.length; i++) {
        if (sMap.get(s[i])) {
            sMap.set(s[i], sMap.get(s[i])+1);
        }
        else {
            sMap.set(s[i], 1);
        }
    }

    for (let [key, value] of sMap) {
        if (value % 2 === 0) {
                cnt = value;
                res += cnt;
        }
        else {
            if (value >= 2) {
                cnt = value - 1;
                res += cnt;
            }
        }
    }
    
    if (res < s.length) {
        res++;
    }
    return res;
};
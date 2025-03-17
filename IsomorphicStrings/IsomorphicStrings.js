/*
Problem Description

    LeetCode - 205. Isomorphic Strings
    
    Q. Given two strings s and t, determine if they are isomorphic.

    Two strings s and t are isomorphic if the characters in s can be replaced to get t.

    All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let sMap = new Map();
    let tMap = new Map();

    let resSSet = new Set();
    let resTSet = new Set();

    if (s.length !== t.length) {
        return false;
    }
    else {
        for (let i = 0; i < s.length; i++) {
            if (sMap.get(s[i])) {
                sMap.set(s[i], sMap.get(s[i]) + 1);
            }
            else {
                sMap.set(s[i], 1);
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (tMap.get(t[j])) {
                tMap.set(t[j], tMap.get(t[j]) + 1);
            }
            else {
                tMap.set(t[j], 1)
            }
        }

        console.log("sMap", sMap);
        console.log("tMap", tMap);

        for (let [key, value] of sMap) {
            resSSet.add(value);
        }

        console.log("resSSet", resSSet);

        for (let [key, value] of tMap) {
            resTSet.add(value);
        }

        console.log("resTSet", resTSet);

        if (resSSet.size === resTSet.size) {
            for (let value of resSSet) {
                if (resTSet.has(value)) {
                    continue;
                }
                else {
                    return false;
                }
            }
            return true;
        }
        else {
            return false;
        }
    }
};
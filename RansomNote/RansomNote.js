/*
Problem Description

    LeetCode - 383. Ransom Note
    
    Q. Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

    Each letter in magazine can only be used once in ransomNote.
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let res = true;
    let hashRansome = new Map();
    let hashMagazine = new Map();
    let cnt1 = 0;
    let cnt2 = 0;

    for (let i = 0; i < ransomNote.length; i++) {
        if (!hashRansome.get(ransomNote[i])) {
            hashRansome.set(ransomNote[i], cnt1+1);
        }
        else {
            hashRansome.set(ransomNote[i], hashRansome.get(ransomNote[i])+1);
        }
    }

    for (let j = 0; j < magazine.length; j++) {
        if (!hashMagazine.get(magazine[j])) {
            hashMagazine.set(magazine[j], cnt2+1);
        }
        else {
            hashMagazine.set(magazine[j], hashMagazine.get(magazine[j])+1);
        }
    }
    
    hashRansome.forEach((key, value) => {
        if (!(hashMagazine.get(value) === key || hashMagazine.get(value) >= key)) {
            res = false;
        }
    }) 
    return res;
};
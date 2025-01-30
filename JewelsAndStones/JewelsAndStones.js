/*
Problem Description

    LeetCode - 771. Jewels and Stones

    Q. You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

    Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    jewels = jewels.split("");
    stones = stones.split("");
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count++;
        }
    }
    return count;
};
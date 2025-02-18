/*
Problem Description

    LeetCode - 575. Distribute Candies
    
    Q. Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.

    The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.

    Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
*/

/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let candyMap = new Map();
    let candiesAllowed = candyType.length / 2;

    for (let i = 0; i < candyType.length; i++) {
        if (candyMap.get(candyType[i])) {
            candyMap.set(candyType[i], candyMap.get(candyType[i]) + 1);
        }
        else {
            candyMap.set(candyType[i], 1);
        }
    }

    if (candyMap.size < candiesAllowed) {
        return candyMap.size
    }
    else {
        return candiesAllowed;
    }
};
/*
Problem Description

    LeetCode - 1773. Count Items Matching a Rule
    Q. You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

    The ith item is said to match the rule if one of the following is true:

    - ruleKey == "type" and ruleValue == typei.
    - ruleKey == "color" and ruleValue == colori.
    - ruleKey == "name" and ruleValue == namei.
    Return the number of items that match the given rule.

*/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let ind;
    let cnt = 0;
    if (ruleKey === "type") {
        ind = 0;
    }
    else if (ruleKey === "color") {
        ind = 1;
    }
    else if (ruleKey === "name") {
        ind = 2;
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i][ind] === ruleValue) {
            cnt++;
        }
    }
    return cnt;
};
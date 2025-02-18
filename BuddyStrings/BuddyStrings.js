/*
Problem Description

    LeetCode - 859. Buddy Strings
    
    Q. Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

    Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

    For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
*/

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    let arr = s.split("");
    let temp;
    let res = false;
    let sMap = new Map();
    let goalMap = new Map();
    let swapCnt = 0;

    for (let m = 0; m < s.length; m++) {
        if (sMap.get(s[m])) {
            sMap.set(s[m], sMap.get(s[m]) + 1);
        }
        else {
            sMap.set(s[m], 1);
        }

    }
    console.log("sMap", sMap);

    for (let n = 0; n < goal.length; n++) {
        if (goalMap.get(goal[n])) {
            goalMap.set(goal[n], goalMap.get(goal[n]) + 1);
        }
        else {
            goalMap.set(goal[n], 1);
        }

    }
    console.log("goalMap", goalMap);

    for (let i = 0; i < arr.length; i++) {
        swapCnt = 0;
            if (sMap.size === 1) {
                    if (sMap.get(arr[i]) >= 2) {
                        res = true;
                        swapCnt++;
                    }
                    break;
            }
        for (let j = 0; j < arr.length; j++) {
            if (sMap.size === 2) {
                if (sMap.get(arr[i]) === 1) {
                    temp = arr[i];
                    console.log("temp", temp);
                    arr[i] = s[i+1];
                    console.log("arr[i]", arr[i]);
                    arr[i+1] = temp;
                    console.log("arr[i+1]", arr[i+1]);

                    if (goal === arr.join("")) {
                        res = true;
                        swapCnt++;
                    }
                break;
                }
                if (sMap.get(arr[i]) === 2) {
                    if (i !== j) {
                        if (arr[i] !== arr[j]) {
                            temp = arr[i];
                            arr[i] = s[j];
                            arr[j] = temp;
                            if (goal === arr.join("")) {
                                res = true;
                                swapCnt++;
                            }
                            arr = s.split("");
                        }
                        else {
                            res = true;
                            swapCnt++;
                        }
                    }
                }
            }
                if (goalMap.get(arr[j]) !== sMap.get(arr[j])) {
                    return false;
                }
                else {
                    if (i !== j) {
                        if (arr[i] !== arr[j]) {
                            temp = arr[i];
                            arr[i] = s[j];
                            arr[j] = temp;

                            if (goal === arr.join("")) {
                                res = true;
                                swapCnt++;
                            }
                            arr = s.split("");
                        }
                        else {
                            res = true;
                            swapCnt++;
                        }
                    }
                }
        }
    }
    console.log("swapCnt", swapCnt);
    if (swapCnt === 1 && res) {
        return true;
    }
    else {
        return false;
    }

};
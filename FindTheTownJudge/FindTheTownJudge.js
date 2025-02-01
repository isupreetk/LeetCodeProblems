/*
Problem Description

    LeetCode - 997. Find the Town Judge
    
    Q. In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

    If the town judge exists, then:

    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.
    You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

    Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
*/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    let trustMap = new Map();

    for (let i = 0; i < trust.length; i++) {
        if (!trustMap.get(trust[i][0])) {
            trustMap.set(trust[i][0], []);
        }
        trustMap.get(trust[i][0]).push(trust[i][1]);
    }

    if (trustMap.size !== n - 1) {
        return -1;
    }

    for (let j = 1; j <= n; j++) {
        if (trustMap.get(j) === undefined) { // key not present
            if (trustMap.size === 0 && n > 1) {
                continue;
            }
            let flag = true;

            for (let [key, value] of trustMap) {
                if (!value.includes(j)) {
                    flag = false;
                }
            }
            if (flag) {
                return j;
            }
            else {
                return -1;
            }
        }
        else {
            continue;
        }
    }
    return -1;
};
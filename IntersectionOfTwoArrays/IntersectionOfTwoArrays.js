/*
Problem Description

    LeetCode - 349. Intersection of Two Arrays
    
    Q. Given two integer arrays nums1 and nums2, return an array of their intersection. 
    
    Each element in the result must be unique and you may return the result in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    let resMap = {};
    let cnt;
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (i !== j) {
                if (nums1[i] === nums1[j]) {
                    nums1.splice(j, 1);
                }
            }
        }
    }

    for (let k = 0; k < nums2.length; k++) {
        for (let l = 0; l < nums2.length; l++) {
            if (k !== l) {
                if (nums2[k] === nums2[l]) {
                    nums2.splice(l, 1);
                }
            }
        }
    }
    
    for (let m = 0; m < nums1.length; m++) {
        if (!resMap[nums1[m]]) {
            cnt = 0;
        }
        else {
            cnt = resMap[nums1[m]];
        }

        resMap[nums1[m]] = cnt + 1;
    }

    for (let n = 0; n < nums2.length; n++) {
        if (!resMap[nums2[n]]) {
            cnt = 0;
        }
        else {
            cnt = resMap[nums2[n]];
        }

        resMap[nums2[n]] = cnt + 1;
    }

    for (const [key, value] of Object.entries(resMap)) {
        if (value === 2) {
            result.push(parseInt(key));
        }
    }

    return result;
};                                                               
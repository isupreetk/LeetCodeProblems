/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let hm = new Map();
    let outputArr = [];

    for (let i = 0 ; i < nums.length; i++) {
        if (hm.has(nums[i])) {
            hm.set(nums[i], hm.get(nums[i]) + 1);
        }
        else {
            hm.set(nums[i], 1);
        }
    }

    for (let [key, value] of hm) {
         if (value > parseInt(nums.length/3)) {
            outputArr.push(key);
        }
    }

    return outputArr;
};
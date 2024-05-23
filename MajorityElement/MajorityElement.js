/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hm = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (hm.has(nums[i])) {
      hm.set(nums[i], hm.get(nums[i]) + 1);
    } else {
      hm.set(nums[i], 1);
    }

    if (hm.get(nums[i]) > parseInt(nums.length / 2)) {
      return nums[i];
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var findKthLargest = function (nums, k) {
  let max;
  let temp;
  let index;
  let newMax;
  let res;
  for (let i = 0; i < k; i++) {
    max = nums[i];
    newMax = false;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > max) {
        max = nums[j];
        index = j;
        newMax = true;
      }
    }
    if (newMax) {
      temp = nums[i];
      nums[i] = max;
      nums[index] = temp;
    }
    res = nums[i];
  }

  return res;
};

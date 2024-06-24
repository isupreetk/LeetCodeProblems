/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var compareColors = function (k, l) {
  let temp = 0;
  if (k > l) {
    temp = k;
    k = l;
    l = temp;
  }
  return [k, l];
};

var sortColors = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      res = compareColors(nums[i], nums[j]);
      nums[i] = res[0];
      nums[j] = res[1];
    }
  }
  return nums;
};

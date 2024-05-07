/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hs = new Set();
  let error = false;

  for (let i = 0; i < nums.length; i++) {
    if (hs.has(nums[i])) {
      error = true;
      break;
    } else {
      hs.add(nums[i]);
    }
  }
  if (error) {
    return true;
  } else {
    return false;
  }
};

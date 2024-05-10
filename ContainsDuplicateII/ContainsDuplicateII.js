/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hm = new Map();
  let diff;

  for (let i = 0; i < nums.length; i++) {
    if (hm.has(nums[i])) {
      diff = i - hm.get(nums[i]);
      hm.set(nums[i], i);
    } else {
      hm.set(nums[i], i);
    }
    if (diff < k || diff == k) {
      break;
    }
  }

  if (diff < k || diff == k) {
    return true;
  } else {
    return false;
  }
};

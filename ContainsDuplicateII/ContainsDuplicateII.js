/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  let hm = new Map();
  let diff = 0;

  for (let i = 0; i < nums.length; i++) {
    if (hm.has(nums[i])) {
      console.log("nums[i]", nums[i]);
      console.log("hm.get(nums[i])", hm.get(nums[i]));
      diff = i - hm.get(nums[i]);
      console.log("diff", diff);
      hm.set(nums[i], i);
    } else {
      hm.set(nums[i], i);
      console.log("hm", hm);
      console.log("i", i);
    }
  }
  if (diff < k || diff == k) {
    return true;
  } else {
    return false;
  }
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/* ---------- PseudoCode ----------- */
/*
 * Loop Through the Array
 * Whenever we encounter the value remove it from Array
 * Return the final array length
 */

var removeElement = function (nums, val) {
  let numsLength = nums.length;

  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      numsLength--;
      i--;
    }
  }
  return nums.length;
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
  let p1 = 0;
  let p2 = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    while (p1 < p2) {
      if (nums[p1] === 0) {
        nums.splice(p1, 1);
        nums.push(0);
        i--;
        p1--;
        p2--;
      }
      p1++;
    }
  }
};

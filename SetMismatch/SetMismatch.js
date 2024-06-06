/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let result = [];
  let missingNumFound = false;
  let maxNum = 0;
  let nextNum = 1;

  for (let i = 0; i < nums.length; i++) {
    if (nums.includes(nextNum)) {
      nextNum++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > maxNum) {
        maxNum = nums[j];
      }
      if (nums[i] === nums[j]) {
        result.push(nums[i]);
        if (!nums.includes(1)) {
          result.push(1);
          missingNumFound = true;
        } else if (nums[j] > 1 && !nums.includes(nums[j] - 1)) {
          result.push(nums[j] - 1);
          missingNumFound = true;
          break;
        } else if (!nums.includes(nums[j] + 1)) {
          result.push(nums[j] + 1);
          missingNumFound = true;
          break;
        }
      }
    }
  }
  if (!missingNumFound) {
    result.push(nextNum);
  }
  return result;
};

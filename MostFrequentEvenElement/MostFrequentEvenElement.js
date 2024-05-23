/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function (nums) {
  let hm = new Map();
  let evenNumArr = [];
  let maxCount = 0;
  let minNum = 100000;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      if (hm.has(nums[i])) {
        hm.set(nums[i], hm.get(nums[i]) + 1);
      } else {
        hm.set(nums[i], 1);
      }
    } else {
      continue;
    }
  }

  for (let [key, value] of hm) {
    if (value > maxCount) {
      maxCount = value;
    }
  }

  for (let [key, value] of hm) {
    if (value === maxCount) {
      evenNumArr.push(key);
    }
  }

  if (evenNumArr.length === 0) {
    return -1;
  } else {
    for (let k = 0; k < evenNumArr.length; k++) {
      if (evenNumArr[k] < minNum) {
        minNum = evenNumArr[k];
      }
    }
  }

  return minNum;
};

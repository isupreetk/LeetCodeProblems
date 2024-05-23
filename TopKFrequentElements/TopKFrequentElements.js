/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let hm = new Map();
  let outputArr = [];

  for (let i = 0; i < nums.length; i++) {
    if (hm.has(nums[i])) {
      hm.set(nums[i], hm.get(nums[i]) + 1);
    } else {
      hm.set(nums[i], 1);
    }
  }

  const sortedByValue = new Map([...hm.entries()].sort((a, b) => b[1] - a[1]));

  for (let [key, value] of sortedByValue) {
    outputArr.push(key);
  }

  outputArr = outputArr.splice(0, k);
  return outputArr;
};

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
  let oldFilteredArr = [];
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    oldFilteredArr.push(fn(arr[i], i));
  }
  for (let j = 0; j < oldFilteredArr.length; j++) {
    if (oldFilteredArr[j]) {
      filteredArr.push(arr[j]);
    }
  }
  return filteredArr;
};

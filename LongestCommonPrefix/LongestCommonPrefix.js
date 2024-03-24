/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let minStrLength = 201;
  let commonLength = 0;
  let commonPrefix = "";
  // Find the smallest string in the array
  for (let i = 0; i < strs.length; i++) {
    if (minStrLength > strs[i].length) {
      minStrLength = strs[i].length;
    }
  }
  // Find the length of common prefix in all the strings
  if (strs.length === 1) {
    commonLength = strs[0].length;
  } else {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][0] !== strs[0][0]) {
        commonLength = 0;
        break;
      }

      for (let k = 0; k < minStrLength; k++) {
        if (strs[j][k] !== strs[0][k]) {
          commonLength = k;
          minStrLength = k;
          break;
        } else {
          commonLength = k + 1;
        }
      }
    }
  }
  commonPrefix = strs[0].substring(0, commonLength);
  return commonPrefix;
};

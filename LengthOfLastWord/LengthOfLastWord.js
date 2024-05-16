/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    console.log("s[i]", s[i]);
    if (s[i] !== " ") {
      count++;
      console.log("count", count);
    } else {
      break;
    }
  }
  return count;
};

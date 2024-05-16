/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let arr = s.split(" ");
  let string = arr.join("");
  let alphaNumericString = string.replace(/[^A-Za-z0-9]/g, "");
  let lowercaseString = alphaNumericString.toLowerCase();
  let p1 = 0;
  let p2 = lowercaseString.length - 1;
  let error = false;

  while (p1 < p2 || p1 == p2) {
    if (lowercaseString[p1] === lowercaseString[p2]) {
      p1++;
      p2--;
    } else {
      error = true;
      break;
    }
  }

  if (error) {
    return false;
  } else {
    return true;
  }
};

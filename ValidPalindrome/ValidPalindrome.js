// ----------- Attempt 1 ------------

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

// ----------- Attempt 2 ------------

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let p1 = 0;
  let p2 = s.length - 1;
  let error = false;

  while (p1 < p2 || p1 == p2) {
    let p1AlphaNumericCheck =
      (s[p1].charCodeAt(0) >= 97 && s[p1].charCodeAt(0) <= 122) ||
      (s[p1].charCodeAt(0) >= 48 && s[p1].charCodeAt(0) <= 57);
    let p2AlphaNumericCheck =
      (s[p2].charCodeAt(0) >= 97 && s[p2].charCodeAt(0) <= 122) ||
      (s[p2].charCodeAt(0) >= 48 && s[p2].charCodeAt(0) <= 57);

    if (p1AlphaNumericCheck && p2AlphaNumericCheck) {
      if (s[p1] === s[p2]) {
        p1++;
        p2--;
      } else {
        error = true;
        break;
      }
    } else if (!p1AlphaNumericCheck) {
      p1++;
    } else if (!p2AlphaNumericCheck) {
      p2--;
    }
  }

  if (error) {
    return false;
  } else {
    return true;
  }
};

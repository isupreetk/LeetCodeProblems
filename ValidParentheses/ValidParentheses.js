/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let error = false;
  let openingArray = ["(", "{", "["];
  let closingArray = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      closingArray.push(")");

      if (s[i + 1] === closingArray[closingArray.length - 1]) {
        i++;
        closingArray.splice(closingArray.length - 1, 1);
      } else if (openingArray.includes(s[i + 1])) {
        if (s[i + 1] === "[") {
          closingArray.push("]");
        } else if (s[i + 1] === "{") {
          closingArray.push("}");
        } else if (s[i + 1] === "(") {
          closingArray.push(")");
        }
        i++;
      } else if (i === s.length - 1) {
        error = true;
      }
    } else if (s[i] === "[") {
      closingArray.push("]");

      if (s[i + 1] === closingArray[closingArray.length - 1]) {
        i++;
        closingArray.splice(closingArray.length - 1, 1);
      } else if (openingArray.includes(s[i + 1])) {
        if (s[i + 1] === "(") {
          closingArray.push(")");
        } else if (s[i + 1] === "{") {
          closingArray.push("}");
        } else if (s[i + 1] === "[") {
          closingArray.push("]");
        }
        i++;
      } else if (i === s.length - 1) {
        error = true;
      }
    } else if (s[i] === "{") {
      closingArray.push("}");

      if (s[i + 1] === closingArray[closingArray.length - 1]) {
        i++;
        closingArray.splice(closingArray.length - 1, 1);
      } else if (openingArray.includes(s[i + 1])) {
        if (s[i + 1] === "(") {
          closingArray.push(")");
        } else if (s[i + 1] === "[") {
          closingArray.push("]");
        } else if (s[i + 1] === "{") {
          closingArray.push("}");
        }
        i++;
      } else if (i === s.length - 1) {
        error = true;
      }
    } else if (s[i] !== closingArray[closingArray.length - 1]) {
      error = true;
      break;
    } else {
      closingArray.pop();
    }
  }

  if (closingArray.length >= s.length) {
    error = true;
  }

  if (error || closingArray.length !== 0) {
    return false;
  } else if (closingArray.length === 0) {
    return true;
  }
};

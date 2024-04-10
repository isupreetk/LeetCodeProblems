/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let error = false;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "(" && s[i + 1] === ")") {
      console.log("() completed");
      i++;
    } else if (s[i] === "[" && s[i + 1] === "]") {
      console.log("[] completed");
      i++;
    } else if (s[i] === "{" && s[i + 1] === "}") {
      console.log("{} completed");
      i++;
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

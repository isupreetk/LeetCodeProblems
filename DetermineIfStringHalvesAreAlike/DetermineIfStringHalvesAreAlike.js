/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let leftCount = 0;
  let rightCount = 0;
  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) {
      leftCount++;
    }
  }

  for (let j = s.length / 2; j < s.length; j++) {
    if (vowels.includes(s[j])) {
      rightCount++;
    }
  }

  if (leftCount === rightCount) {
    return true;
  } else {
    return false;
  }
};

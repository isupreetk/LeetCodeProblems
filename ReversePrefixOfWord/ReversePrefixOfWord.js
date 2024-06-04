/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let chIndex;
  let indexFound = false;
  let temp = "";
  let result;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      chIndex = i;
      indexFound = true;
    }
    if (indexFound) {
      break;
    }
  }

  // logic for string reversal / char swapping

  let arr = word.split("");

  for (let j = 0; j <= chIndex + 1; j++) {
    while (j < chIndex - j) {
      temp = arr[chIndex - j];
      arr[chIndex - j] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  result = arr.join("");
  return result;
};

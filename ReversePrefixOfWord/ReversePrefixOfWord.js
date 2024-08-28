/* Problem Statement -
    Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

    For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
    Return the resulting string.
*/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let wordArr = word.split("");
  let countInd;
  let temp;
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i] === ch) {
      countInd = i;
      break;
    }
  }

  for (let j = 0; j <= countInd; j++) {
    temp = wordArr[j];
    wordArr[j] = wordArr[countInd];
    wordArr[countInd] = temp;
    countInd--;
  }

  wordStr = wordArr.join("");
  return wordStr;
};

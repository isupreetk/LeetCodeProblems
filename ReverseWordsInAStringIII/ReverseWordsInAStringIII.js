/* Problem Statement - 
        Leetcode Problem - 557. Reverse Words in a String III
        
        Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  sArr = s.split(" ");
  let temp;
  let word;
  let reversedWords = [];
  for (let i = 0; i < sArr.length; i++) {
    word = sArr[i];
    wordArr = word.split("");
    for (let j = 0; j < wordArr.length; j++) {
      for (let k = wordArr.length - 1 - j; k >= j; k--) {
        temp = wordArr[j];
        wordArr[j] = wordArr[k];
        wordArr[k] = temp;
        j++;
      }
    }
    word = wordArr.join("");
    reversedWords.push(word);
  }
  return reversedWords.join(" ");
};

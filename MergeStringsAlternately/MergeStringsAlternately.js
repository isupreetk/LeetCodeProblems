/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let newWord = "";
  let shorterWord = word1;
  let longerWord = word2;

  if (word2.length < shorterWord.length) {
    shorterWord = word2;
  }

  if (word1.length > longerWord.length) {
    longerWord = word1;
  }

  for (let i = 0; i < shorterWord.length; i++) {
    newWord = newWord + word1[i];
    newWord = newWord + word2[i];
  }

  for (let j = shorterWord.length; j < longerWord.length; j++) {
    newWord = newWord + longerWord[j];
  }

  return newWord;
};

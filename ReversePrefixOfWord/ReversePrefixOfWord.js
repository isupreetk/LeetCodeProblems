/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let chIndex;
  let temp = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      console.log("ch found");
      chIndex = i;
      // logic for string reversal / char swapping
      // for (let j = chIndex; j >=0; j-- ) {
      //     console.log("word[j]", word[j]);
      //     temp = word[j];
      //     word[0] = word[j];
      //     word[j] = temp;
      //     console.log("word", word);
      // }
    }
  }
};

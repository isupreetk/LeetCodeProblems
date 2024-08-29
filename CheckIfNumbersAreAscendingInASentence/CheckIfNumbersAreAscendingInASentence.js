/*  Problem Statement - 
     Leetcode Problem - 2042. Check if Numbers Are Ascending in a Sentence

        A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.

        For example, "a puppy has 2 eyes 4 legs" is a sentence with seven tokens: "2" and "4" are numbers and the other tokens such as "puppy" are words.
        Given a string s representing a sentence, you need to check if all the numbers in s are strictly increasing from left to right (i.e., other than the last number, each number is strictly smaller than the number on its right in s).

        Return true if so, or false otherwise.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let num1 = 0;
  let num2 = 0;
  s = s.split(" ");
  for (let i = 0; i < s.length; i++) {
    if (Number.isInteger(Number(s[i]))) {
      num1 = num2;
      num2 = Number(s[i]);

      if (num2 <= num1) {
        return false;
      }
    }
  }
  return true;
};

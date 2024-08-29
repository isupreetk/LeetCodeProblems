/*
Problem Statement - 

    Leetcode Problem - 3110. Score of a String
        You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

        Return the score of s.
*/

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (s) {
  let prevNum, currentNum;
  let finalMod = 0;
  let mod = 0;
  for (let i = 0; i < s.length - 1; i++) {
    prevNum = s.charCodeAt(i);
    currentNum = s.charCodeAt(i + 1);
    mod = Math.abs(prevNum - currentNum);
    finalMod += mod;
  }
  return finalMod;
};

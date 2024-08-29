/*
Problem Statement - 
    Leetcode Problem - 1816. Truncate Sentence

    A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).
    For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
    You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  let count = 0;
  let lastIndex = s.length;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      count++;
    }
    if (count === k - 1) {
      lastIndex = i;
    }
  }

  for (let j = 0; j <= lastIndex; j++) {
    str += s[j];
  }
  return str;
};

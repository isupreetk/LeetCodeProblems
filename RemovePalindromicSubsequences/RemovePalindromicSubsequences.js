/* Problem Statement - 

    Leetcode Problem - 1332. Remove Palindromic Subsequences
    
    You are given a string s consisting only of letters 'a' and 'b'. In a single step you can remove one palindromic subsequence from s.

    Return the minimum number of steps to make the given string empty.

    A string is a subsequence of a given string if it is generated by deleting some characters of a given string without changing its order. Note that a subsequence does not necessarily need to be contiguous.

    A string is called palindrome if is one that reads the same backward as well as forward.
*/

var removePalindromeSub = function (s) {
  let p1 = 0;
  let p2 = s.length - 1;
  let count = 0;

  while (p1 < p2) {
    for (let i = p1; i < p2; i++) {
      if (s[p1] === s[p2]) {
        p1++;
        p2--;
        count = 1;
      } else {
        count = 2;
      }
    }
    return count;
  }
};

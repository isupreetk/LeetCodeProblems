/**
 * @param {string} s
 * @return {string}
 */

// 1st solution

var reverseVowels = function (s) {
  let vowelsList = ["a", "e", "i", "o", "u"];
  let ourVowels = [];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (vowelsList.includes(arr[i])) {
      ourVowels.push(arr[i]);
    }
  }
  for (let k = 0; k < arr.length; k++) {
    if (ourVowels.includes(arr[k])) {
      for (let m = 0; m < ourVowels.length; m++) {
        if (ourVowels[m] === arr[k]) {
          arr.splice(k, 1, ourVowels[ourVowels.length - m - 1]);
          k++;
          m++;
        }
      }
    }
    s = arr.join("");
  }
  return s;
};

// 2nd Solution
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let ourVowels = [];
  let arr = s.split("");
  let count_of_replaced_vowels = 0;
  for (let i = 0; i < arr.length; i++) {
    if (vowelsList.includes(arr[i])) {
      ourVowels.push(arr[i]);
    }
  }
  for (let k = 0; k < arr.length; k++) {
    if (ourVowels.includes(arr[k])) {
      arr[k] = ourVowels[ourVowels.length - count_of_replaced_vowels - 1];
      // arr.splice(k, 1, ourVowels[(ourVowels.length-count_of_replaced_vowels-1)])
      count_of_replaced_vowels++;
    }
  }
  s = arr.join("");
  return s;
};

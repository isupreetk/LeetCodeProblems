// Approach 1

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
      arr.splice(
        k,
        1,
        ourVowels[ourVowels.length - count_of_replaced_vowels - 1]
      );
      count_of_replaced_vowels++;
    }
  }
  s = arr.join("");
  return s;
};

// Approach 2

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = s.split("");
  let p1 = -1;
  let p2 = arr.length;
  let temp;
  for (let i = 0; i < p2; i++) {
    console.log("outermost for loop");
    console.log("i", i);
    console.log("arr[i]", arr[i]);
    if (vowelsList.includes(arr[i])) {
      p1 = i;
      console.log("p1", p1);
      for (let j = p2 - 1; j > i; j--) {
        console.log("j", j);
        console.log("arr[j]", arr[j]);
        if (vowelsList.includes(arr[j])) {
          p2 = j;
          console.log("p2", p2);
          temp = arr[p1];
          arr[p1] = arr[p2];
          arr[p2] = temp;
          break;
        }
      }
    }
  }
  s = arr.join("");
  return s;
};

// Approach 3

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelsList = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let arr = s.split("");
  let p1 = 0;
  let p2 = arr.length - 1;
  let temp;
  while (p1 < p2) {
    if (!vowelsList.includes(arr[p1])) {
      p1++;
      continue;
    }
    if (!vowelsList.includes(arr[p2])) {
      p2--;
      continue;
    }
    if (p1 > -1 && p2 < arr.length) {
      temp = arr[p1];
      arr[p1] = arr[p2];
      arr[p2] = temp;
      p1++;
      p2--;
    }
  }
  s = arr.join("");
  return s;
};

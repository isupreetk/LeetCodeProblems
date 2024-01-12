/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let vowelsList = ["a", "e", "i", "o", "u"];
  let ourVowels = [];
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    // console.log(s[i]);
    if (vowelsList.includes(arr[i])) {
      ourVowels.push(arr[i]);
    }
    // console.log("ourVowels",ourVowels);
  }
  // for (let j = ourVowels.length - 1; j >= 0; j-- ) {
  // console.log("ourVowels[j]", ourVowels[j]);
  // }
  for (let k = 0; k < arr.length; k++) {
    // console.log("arr[k]", arr[k]);
    // console.log("ourVowels.includes(arr[k])", ourVowels.includes(arr[k]))
    if (ourVowels.includes(arr[k])) {
      for (let m = 0; m < ourVowels.length; m++) {
        // console.log("ourVowels[m]", ourVowels[m])
        if (ourVowels[m] === arr[k]) {
          // console.log("old arr[k]", arr[k])
          // console.log("length", ourVowels.length)
          // console.log("m", m)
          // console.log("length - m", ourVowels.length - m)
          arr.splice(k, 1, ourVowels[ourVowels.length - m - 1]);
          // s[k] = ourVowels[(ourVowels.length - m)];
          // console.log("new arr[k]", arr[k])
          // console.log("arr", arr);
          k++;
          m++;
        }
      }
    }
    s = arr.join("");
    // console.log("final string", s);
  }
  return s;
};

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  let occurrences = new Map();
  // console.log("occurrences", occurrences.size);

  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (occurrences.get(arr[i]) === undefined) {
      occurrences.set(arr[i], count + 1);
      // console.log("occurrences", occurrences);
    } else {
      // console.log("arr[i]", arr[i]);
      // console.log("occurrences.get(arr[i])", occurrences.get(arr[i]));
      occurrences.set(arr[i], occurrences.get(arr[i]) + 1);
    }
  }
  console.log("occurrences", occurrences);

  for (let [key, value] of occurrences) {
    console.log(key + " is " + value);
  }
};

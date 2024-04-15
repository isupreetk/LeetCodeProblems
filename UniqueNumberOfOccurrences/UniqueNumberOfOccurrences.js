/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  let occurrences = new Map();
  let noOfOccurrences = [];
  let uniqueOccurrences = new Map();
  let answer = true;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
      
      if (occurrences.get(arr[i]) === undefined) {
          occurrences.set(arr[i], count+1);
      }
      else {
          occurrences.set(arr[i], occurrences.get(arr[i])+1);
      }
  }

  for (let [key, value] of occurrences) {
      noOfOccurrences.push(value);
  }

  for (let j = 0; j < noOfOccurrences.length; j++) {
      if (uniqueOccurrences.get(noOfOccurrences[j]) === undefined) {
          uniqueOccurrences.set(noOfOccurrences[j], true);
      }
      else {
          uniqueOccurrences.set(noOfOccurrences[j], false);
      }
  }

  for (let [key, value] of uniqueOccurrences) {
      answer = (answer && value);
  }
  return answer;
};
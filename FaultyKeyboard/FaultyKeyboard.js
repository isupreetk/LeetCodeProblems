/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
  let temp;
  let p1 = 0;
  let p2 = s.length - 1;
  let finalArray = s.split("");

  for (let k = 0; k < finalArray.length; k++) {
    if (finalArray[k] === "i") {
      finalArray.splice(k, 1);
      p1 = 0;
      p2 = k - 1;
      while (p1 < p2) {
        v;
        temp = finalArray[p1];
        finalArray[p1] = finalArray[p2];
        finalArray[p2] = temp;
        p1++;
        p2--;
      }
      p2 = s.length - 1;
      k--;
    }
  }
  return finalArray.join("");
};

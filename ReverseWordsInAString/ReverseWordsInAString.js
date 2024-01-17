/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let splitArray = s.split("");
  let p1 = 0;
  let p2 = splitArray.length - 1;

  let elements;
  let final2;
  let arrelement = [];

  while (p2 < splitArray.length && p1 < p2) {
    let temp = splitArray[p1];
    splitArray[p1] = splitArray[p2];
    splitArray[p2] = temp;
    p1++;
    p2--;
  }

  let final1 = splitArray.join("");

  let a2 = final1.split(" ");

  a2.forEach((element) => {
    let elementa = element.split("");
    let z1 = 0;
    let z2 = elementa.length - 1;

    while (z2 <= elementa.length && z1 <= z2) {
      let temp1 = elementa[z1];
      elementa[z1] = elementa[z2];
      elementa[z2] = temp1;
      z1++;
      z2--;
    }
    elements = elementa.join("");
    arrelement.push(elements);
  });
  final2 = arrelement
    .filter((element) => {
      return element !== "";
    })
    .join(" ");
  return final2;
};

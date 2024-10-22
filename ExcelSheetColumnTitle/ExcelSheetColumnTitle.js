/*
Problem Description
    Leetcode Problem - 168. Excel Sheet Column Title
    Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

    For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
*/

/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let x = parseInt(columnNumber / 26);
  console.log("times of loop", x);
  let res1 = 0;
  for (let i = 0; i <= x; i++) {
    res1 = res1 + 26 * x + columnNumber + 65 - 1;
    console.log("res1", res1);
    let res2 = String.fromCharCode(res1);
    console.log("res2", res2);
    return res2;
  }
};

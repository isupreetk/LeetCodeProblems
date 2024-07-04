/*
Problem Description
    Given an array of positive integers A, check and return whether the array elements are consecutive or not.
    NOTE: Try this with O(1) extra space.
*/

//param A : array of integers
//return an integer
function solve(A) {
  let diff = 0;
  let sum = 0;
  A.sort((a, b) => a - b);
  for (let i = 1; i < A.length - 1; i++) {
    diff = A[i] - 1;
    sum = A[i] + 1;

    if (A[i - 1] === diff && A[i + 1] === sum) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

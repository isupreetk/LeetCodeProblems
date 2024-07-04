/*
Problem Description
    Given two sorted integer arrays A and B, merge B and A as one sorted array and return it as an output.
    Note: A linear time complexity is expected and you should avoid use of any library function.
*/

//param A : array of integers
//param B : array of integers
//return a array of integers
function mergeTwoSortedArrays(A, B) {
  let arr = [];
  let countA = 0;
  let countB = 0;
  for (let i = 0; i < A.length + B.length - 1; i++) {
    if (A[countA] <= B[countB]) {
      arr[i] = A[countA];
      countA++;
    } else if (A[countA] > B[countB]) {
      arr[i] = B[countB];
      countB++;
    }

    if (countA >= A.length) {
      if (countB < B.length) {
        arr.push(B[countB]);
        countB++;
      }
    } else if (countB >= B.length) {
      if (countA < A.length) {
        arr.push(A[countA]);
        countA++;
      }
    }
  }
  return arr;
}

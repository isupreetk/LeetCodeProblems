/*
Problem Description
    Find the Bth smallest element in given array A .
    NOTE: Users should try to solve it in less than equal to B swaps.
*/

//param A : array of integers
//param B : integer
//return an integer

// ------------------- Approach 1 ------------------
function kthsmallest(A, B) {
  let temp;
  let small;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] > A[j]) {
        temp = A[i];
        A[i] = A[j];
        A[j] = temp;
      }
    }
  }
  small = A[B - 1];
  return small;
}

// --------------- Approach 2 - Selection Sort ---------------

function kthsmallest(A, B) {
  let min;
  let temp;
  let index;
  for (let i = 0; i < B; i++) {
    min = A[i];
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] < min) {
        min = A[j];
        index = j;
      }
    }
    temp = A[i];
    A[i] = min;
    A[index] = temp;
  }
  return min;
}

/*
Problem Description -
    Given an array A of size N, Groot wants you to pick 2 indices i and j such that
    1 <= i, j <= N
    A[i] % A[j] is maximum among all possible pairs of (i, j).
    Help Groot in finding the maximum value of A[i] % A[j] for some i, j.
*/

//param A : array of integers
//return an integer
function findMaxMod(A) {
  let mod = 0;
  let maxMod = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      mod = A[i] % A[j];
      if (mod > maxMod) {
        maxMod = mod;
      }
    }
  }
  return maxMod;
}

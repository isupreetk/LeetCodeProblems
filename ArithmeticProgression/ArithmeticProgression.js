//param A : array of integers
//return an integer

function solve(A) {
  A = A.sort((a, b) => a - b);
  let diff = Math.abs(A[1] - A[0]);

  for (let i = 2; i < A.length; i++) {
    if (Math.abs(A[i] - A[i - 1]) === diff) {
      continue;
    } else {
      return 0;
    }
  }
  return 1;
}

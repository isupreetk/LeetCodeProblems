//param A : Aay of integers
//return an integer
function solve(A) {
  A = A.sort((a, b) => a - b);

  for (let j = 0; j < A.length; j++) {
    let p = A[j];
    let count = 0;

    for (let i = j + 1; i < A.length; i++) {
      if (p < A[i]) {
        count++;
      }
    }
    if (count === p) {
      return 1;
    } else {
      continue;
    }
  }
  return -1;
}

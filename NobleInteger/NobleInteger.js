// param A : Array of integers
// return an integer

// --------- Approach 1 ----------

// function solve(A) {
//   A = A.sort((a, b) => a - b);

//   for (let j = 0; j < A.length; j++) {
//     let p = A[j];
//     let count = 0;

//     for (let i = j + 1; i < A.length; i++) {
//       if (p < A[i]) {
//         count++;
//       }
//     }
//     if (count === p) {
//       return 1;
//     } else {
//       continue;
//     }
//   }
//   return -1;
// }

// --------- Approach 2 ----------

function solve(A) {
  A = A.sort((a, b) => a - b);

  for (let j = 0; j < A.length; j++) {
    let count = 0;
    let p = A[j];
    if (p === A[j + 1]) {
      continue;
    } else {
      count = A.length - 1 - j;
    }
    if (count === p) {
      return 1;
    } else {
      continue;
    }
  }
  return -1;
}

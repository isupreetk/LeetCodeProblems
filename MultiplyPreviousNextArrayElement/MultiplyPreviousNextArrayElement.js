/* Q. Given an array of integers A, update every element with multiplication of previous and next elements with following exceptions. 
 a) First element is replaced by multiplication of first and second. 
 b) Last element is replaced by multiplication of last and second last.
 */

//param A : array of integers
//return a array of integers

let multiplyArray = (A) => {
  let n1;
  let n2;
  let newArray = [];
  let mult = 0;
  for (let i = 0; i < A.length; i++) {
    if (i === 0 && A.length > 1) {
      n1 = A[i];
      n2 = A[i + 1];
    } else if (i === 0 && A.length === 1) {
      n1 = A[i];
      n2 = 1;
    } else if (i === A.length - 1) {
      n1 = A[i - 1];
      n2 = A[i];
    } else {
      n1 = A[i - 1];
      n2 = A[i + 1];
    }
    mult = n1 * n2;
    newArray.push(mult);
  }
  return newArray;
};

// Time Complexity : O(N);
// Space Complexity: O(N);

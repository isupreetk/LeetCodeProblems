/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  for (let x = 0; x < nums1.length; x++) {
    for (let y = x + 1; y < nums1.length; y++) {
      if (nums1[x] === nums1[y]) {
        nums1.splice(y, 1);
        y--;
      }
    }
  }

  for (let a = 0; a < nums2.length; a++) {
    for (let b = a + 1; b < nums2.length; b++) {
      if (nums2[a] === nums2[b]) {
        nums2.splice(b, 1);
        b--;
      }
    }
  }

  let finalNum1 = [...nums1];
  let finalNum2 = [...nums2];
  let finalNum = [finalNum1, finalNum2];

  for (let i = 0; i < finalNum1.length; i++) {
    for (let j = 0; j < finalNum2.length; j++) {
      if (finalNum1[i] === finalNum2[j]) {
        finalNum1.splice(i, 1);
        i--;
      }
    }
  }

  for (let m = 0; m < nums2.length; m++) {
    for (let n = 0; n < nums1.length; n++) {
      if (finalNum2[m] === nums1[n]) {
        finalNum2.splice(m, 1);
        m--;
      }
    }
  }
  return finalNum;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let countA = 0;
  let countB = 0;
  let temp = 0;
  let index = m;

  for (let i = 0; i < m; i++) {
    if (nums1[countA] <= nums2[countB]) {
      countA++;
    } else if (nums1[countA] > nums2[countB]) {
      temp = nums1[countA];
      nums1[countA] = nums2[countB];

      for (let j = n - 1; j >= countB; j--) {
        if (temp > nums2[j]) {
          nums2.splice(countB, 1);
          nums2.splice(j, 0, temp);
          countA++;
          break;
        }
      }
    }
  }

  for (let k = 0; k < n; k++) {
    nums1[index] = nums2[k];
    index++;
  }
};

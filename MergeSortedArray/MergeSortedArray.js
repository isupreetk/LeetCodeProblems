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
    console.log("countA", countA);
    console.log("countB", countB);
    console.log("nums1[countA]", nums1[countA]);
    console.log("nums2[countB]", nums2[countB]);
    console.log(
      "nums1[countA] <= nums2[countB]",
      nums1[countA] <= nums2[countB]
    );
    if (nums1[countA] <= nums2[countB]) {
      countA++;
      console.log("countA1", countA);
    } else if (nums1[countA] > nums2[countB]) {
      temp = nums1[countA];
      console.log("temp", temp);
      nums1[countA] = nums2[countB];
      console.log("nums1[countA]", nums1[countA]);
      // nums2[countB] = temp;

      for (let j = countB; j < n; j++) {
        if (nums2[countB] <= nums2[j]) {
          nums2[countB] = temp;
          console.log("nums2[countB]", nums2[countB]);
          countA++;
          console.log("countA2", countA);
          // countB++;
          // console.log("countB1", countB);
          // break;
        } else if (nums2[countB] > nums2[j]) {
          console.log("j", j);
          nums2[j] = temp;
          console.log("nums2[j]", nums2[j]);
          // break;
        }
        console.log("nums2", nums2);
      }
      console.log("nums1", nums1);
    }

    //     if (countA >= m) {
    //     if (countB < n) {
    //         nums1.splice(m, 0, nums2[countB]);
    //         countB++;
    //     }
    //     }
    //   else if (countB >= n) {
    //     if (countA < m) {
    //             nums1.splice(n, 0, nums1[countA]);
    //             countA++;
    //         }
    //   }
  }

  for (let k = 0; k < n; k++) {
    console.log("k", k);
    nums1[index] = nums2[k];
    console.log("nums12", nums1);
    index++;
    console.log("index", index);
  }
  console.log("final nums1", nums1);
};

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let zeroCount = 0;
  let left = 0;
  let right = flowerbed.length - 1;

  if (n === 0) {
    return true;
  } else {
    for (let i = 0; i < flowerbed.length; i++) {
      console.log("current index", i);
      if (flowerbed[i] === 0) {
        zeroCount++;
        console.log("zeroCount", zeroCount);
      }
    }

    if (zeroCount === 2 * n + 1) {
      for (let i = 0; i < flowerbed.length; i++) {
        if (
          flowerbed[i] === flowerbed[i + 1] &&
          flowerbed[i] === 0 &&
          flowerbed[i + 1] === 0
        ) {
          left = i;

          if (flowerbed[i + 2] === 0) {
            right = i + 2;
            count++;
            i++;
            console.log("count of can place flowers", count);
            console.log("index updated", i);
          } else {
            count++;
            i++;
            console.log("count of can place flowers", count);
            console.log("index updated", i);
          }
        } else if (
          flowerbed[i + 1] === flowerbed[i + 2] &&
          flowerbed[i] === 1 &&
          flowerbed[i + 1] === 0 &&
          flowerbed[i + 2] === 0
        ) {
          left = i + 1;

          if (flowerbed[i + 3] === 0) {
            right = i + 3;
            count++;
            i = +2;
            console.log("count of can place flowers in else", count);
            console.log("index updated in else", i);
          } else {
            console.log("breaking due to else");
            break;
          }
        }
      }
    } else {
      return false;
    }

    if (count === n) {
      return true;
    } else {
      return false;
    }
  }
};

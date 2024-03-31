/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  let error = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    // if (flowerbed[i] !== flowerbed[i+1] && (flowerbed[i] === 1 || flowerbed[i+1] === 1 )) {
    //     count++;
    //     console.log("count in if",count);
    // }
    // else if (!(flowerbed[i] === flowerbed[i+1] && (flowerbed[i] === 0 || flowerbed[i+1] === 0 ))) {
    //     error++;
    //     console.log("error in else", error);
    // }

    if (
      flowerbed[i] === flowerbed[i + 1] &&
      flowerbed[i + 1] === flowerbed[i + 2] &&
      flowerbed[i] === 0 &&
      flowerbed[i + 1] === 0 &&
      flowerbed[i + 2] === 0
    ) {
      count++;
      console.log("count in if", count);
    }
    // else if (flowerbed[i] !== flowerbed[i+1] && (flowerbed[i] === 1 || flowerbed[i+1] === 1 ))
    //     error++;
    //     console.log("error in else", error);
    // }
  }

  if (count === n) {
    // && error === 0
    return true;
  } else {
    return false;
  }
};

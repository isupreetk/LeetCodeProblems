/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {

      if (flowerbed[i+1] === flowerbed[i+2]  && flowerbed[i]=== 1 
      && flowerbed[i+1] === 0 && flowerbed[i+2] === 0
      ) {
          count++;
          flowerbed[i+1] = 1;
          console.log("flowerbed", flowerbed);
      }

      else if (flowerbed[i] === flowerbed[i+1] && flowerbed[i+2]=== 1 
      && flowerbed[i+1] === 0 && flowerbed[i] === 0
      ) {
          count++;
          flowerbed[i] = 1;
          console.log("flowerbed", flowerbed);
      }

  if (count === n) {
      return true;
  }
  else {
      return false;
  }
  }
};
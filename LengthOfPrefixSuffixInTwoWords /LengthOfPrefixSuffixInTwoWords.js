// ------- Attempt 1 -----

// const findCommonLength = (word1, word2) => {
//   console.log("word1", word1);
//   console.log("word2", word2);
//   let potentialStart;
//   let word1Char;
//   let word2Char;
//   let count = 0;
//   let allIndices = [];
//   let error = false;

//   if (word1.includes(word2[0])) {
//     console.log("word2[0]", word2[0]);
//     potentialStart = word1.indexOf(word2[0]);
//     console.log("potentialStart", potentialStart);
//   }

//   for (let i = potentialStart; i < word1.length; i++) {
//     console.log("word1 index", i);
//     word1Char = word1[i];
//     word2Char = word2[count];
//     console.log("word2 index", j);
//     if (word1Char === word2Char) {
//       count++;
//     } else {
//       error = true;
//     }

//     if (error) {
//       return false;
//     }
//   }

//   if (!error) {
//     return count;
//   }
// };

// ------Attempt 2----

const findCommonLength = (word1, word2) => {
  console.log("word1", word1);
  console.log("word2", word2);
  let potentialStart;
  let word1Char;
  let word2Char;
  let count;
  let allIndices = [];
  let error = false;

  for (let k = 0; k < word1.length; k++) {
    console.log("word2[0]", word2[0]);
    console.log("word1[k]", word1[k]);
    if (word1[k] === word2[0]) {
      allIndices.push(k);
    }
  }

  console.log("allIndices", allIndices);

  allIndices.forEach((index) => {
    console.log("allIndices triggered");
    count = 0;
    console.log("allIndices index", index);
    potentialStart = index;
    console.log("potentialStart", potentialStart);

    for (let i = potentialStart; i < word1.length; i++) {
      console.log("word1 index", i);
      word1Char = word1[i];
      console.log("word1Char", word1Char);
      word2Char = word2[count];
      console.log("count", count);
      console.log("word2Char", word2Char);

      if (word1Char === word2Char) {
        count++;
        console.log("count", count);
        error = false;
      } else {
        error = true;
        break;
      }
    }
  });
  if (error) {
    return false;
  }
  if (!error) {
    return count;
  }
};
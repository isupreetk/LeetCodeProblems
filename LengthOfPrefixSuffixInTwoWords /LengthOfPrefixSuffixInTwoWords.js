// ------- Attempt 1 -----

const findCommonLength = (word1, word2) => {
  let potentialStart;
  let word1Char;
  let word2Char;
  let count = 0;
  let allIndices = [];
  let error = false;

  if (word1.includes(word2[0])) {
    potentialStart = word1.indexOf(word2[0]);
  }

  for (let i = potentialStart; i < word1.length; i++) {
    word1Char = word1[i];
    word2Char = word2[count];
    if (word1Char === word2Char) {
      count++;
    } else {
      error = true;
    }

    if (error) {
      return false;
    }
  }

  if (!error) {
    return count;
  }
};

// ------Attempt 2----

const findCommonLength = (word1, word2) => {
  let potentialStart;
  let word1Char;
  let word2Char;
  let count;
  let allIndices = [];
  let error = false;

  for (let k = 0; k < word1.length; k++) {
    if (word1[k] === word2[0]) {
      allIndices.push(k);
    }
  }

  allIndices.forEach((index) => {
    count = 0;
    potentialStart = index;

    for (let i = potentialStart; i < word1.length; i++) {
      word1Char = word1[i];
      word2Char = word2[count];

      if (word1Char === word2Char) {
        count++;
        error = false;
      } else {
        error = true;
        break;
      }
    }
  });
  if (error) {
    return false;
  } else {
    return count;
  }
};

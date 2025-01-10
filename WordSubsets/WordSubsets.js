/*
Problem Description

    LeetCode - 916. Word Subsets
    Q. You are given two string arrays words1 and words2.

    A string b is a subset of string a if every letter in b occurs in a including multiplicity.

    For example, "wrr" is a subset of "warrior" but is not a subset of "world".
    A string a from words1 is universal if for every string b in words2, b is a subset of a.

    Return an array of all the universal strings in words1. You may return the answer in any order.
*/

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function(words1, words2) {
    let result = [];
    let words3 = [];
    let flag = false;
    let words3Map = new Map();

    for (let i = 0; i < words2.length; i++) {
        console.log("words2[i]", words2[i]);
        if (words2[i].length > 1) {
            words3.push(words2[i].split(""));
            console.log("words3 after each step", words3);
        }
        else {
            words3.push(words2[i]);
        }
    }
    console.log("final words3", words3);

// words3.map((word) => {console.log(
//     "word", word);
//     // words3Map.set(word: false)
// });
//     console.log("words3Map", words3Map);

    for (let j = 0; j < words1.length; j++) {
            console.log("words1[j]", words1[j]);
            for (let k = 0; k < words3.length; k++) {
                console.log("words3[k]", words3[k]); 
                for (let l = 0; l < words3[k].length; l++) {
                    console.log("words3[k][l]", words3[k][l]);
                        if (words1[j].includes(words3[k][l])) {
                            flag = true;
                            console.log("flag", flag);
                            
                            if (!result.includes(words1[j])) {
                                result.push(words1[j]);
                                console.log("push result", result);
                            }
                            continue;
                        }
                        else {
                            flag = false;
                            console.log("flag", flag);
                            if (result.includes(words1[j])) {
                                result.pop();
                                console.log("pop result", result);
                            }
                            break;
                        }
            // if (!flag) {
            //     break;
            // }
        }
        if (!flag) {
                break;
            }
            
        }
    }
    console.log("result", result);
    return result;
};
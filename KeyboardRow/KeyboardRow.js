/*
Problem Description

    LeetCode - 500. Keyboard Row
    Q. Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.

    Note that the strings are case-insensitive, both lowercased and uppercased of the same letter are treated as if they are at the same row.

    In the American keyboard:

    - the first row consists of the characters "qwertyuiop",
    - the second row consists of the characters "asdfghjkl", and
    - the third row consists of the characters "zxcvbnm".
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {

    let row1 = "qwertyuiop".split("");
    let row2 = "asdfghjkl".split("");
    let row3 = "zxcvbnm".split("");
    let checkRow;
    let checkLetters;
    let result = [];
    words.forEach((word) => {
        let letters = word.toLowerCase().split("");
     
        if (letters.length === 1) {
            checkLetters = true;
        }
        else {
            //  check row in which 1st letter of word is present
            let fLetter = letters[0];
            if (row1.includes(fLetter)) {
                checkRow = row1
            }
            if (row2.includes(fLetter)) {
                checkRow = row2
            }
            if (row3.includes(fLetter)) {
                checkRow = row3
            }

            for (let i = 1; i < letters.length; i++) {
                checkLetters = false;
                if (!checkRow.includes(letters[i])) {
                    break;
                }
                else {
                    checkLetters = true;
                }
            }
        }
        if (checkLetters) {
            result.push(word);
        }
    })
    return result;
};
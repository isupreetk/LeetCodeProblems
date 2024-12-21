/*
Problem Description

    LeetCode - 819. Most Common Word
    Q. Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

    The words in paragraph are case-insensitive and the answer should be returned in lowercase.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.replaceAll(",", " ");
    paragraph = paragraph.replaceAll(".", " ");
    paragraph = paragraph.replaceAll("!", " ");
    paragraph = paragraph.replaceAll("?", " ");
    paragraph = paragraph.replaceAll("'", " ");
    paragraph = paragraph.replaceAll(";", " ");

    let words = paragraph.split(" ");

    let uniqueWords = {};
    let count;
    let maxCount = 0;
    
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.trim() === "") {
            continue;
        }

        word = word.toLowerCase();
        if (banned.includes(word)) {
            continue;
        }
        else {
            if (!uniqueWords[word]) {
                count = 0;
            }
            else {
                count = uniqueWords[word];
            }
            uniqueWords[word] = ++count;

            if (count > maxCount) {
                maxCount = count;
            }
        }
    }
    
    for (const [key, value] of Object.entries(uniqueWords)) {
        if (value === maxCount) {
            return key;
        }
    }
};
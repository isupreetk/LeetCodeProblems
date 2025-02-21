/*
Problem Description

    LeetCode - 748. Shortest Completing Word
    
    Q. Given a string licensePlate and an array of strings words, find the shortest completing word in words.

    A completing word is a word that contains all the letters in licensePlate. Ignore numbers and spaces in licensePlate, and treat letters as case insensitive. If a letter appears more than once in licensePlate, then it must appear in the word the same number of times or more.

    For example, if licensePlate = "aBc 12c", then it contains letters 'a', 'b' (ignoring case), and 'c' twice. Possible completing words are "abccdef", "caaacab", and "cbca".

    Return the shortest completing word in words. It is guaranteed an answer exists. If there are multiple shortest completing words, return the first one that occurs in words.
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    words = words.sort((a,b) => a.length - b.length);
    console.log("sorted words", words);
    let resMap = new Map();
    let wordMap = new Map();
    let isValid = false;
    let res = "";

    for (let i = 0; i < licensePlate.length; i++) {

        if ((licensePlate.charCodeAt(i) >= 65 && licensePlate.charCodeAt(i) <= 90) || (licensePlate.charCodeAt(i) >= 97 && licensePlate.charCodeAt(i) <= 122)) {
            if (resMap.get(licensePlate[i].toLowerCase())) {
                resMap.set(licensePlate[i].toLowerCase(), resMap.get(licensePlate[i].toLowerCase()) + 1);
            }
            else {
                resMap.set(licensePlate[i].toLowerCase(), 1);
            }
        }
    }
    console.log("resMap", resMap);

    for (let j = 0; j < words.length; j++) {
        console.log("words[j]", words[j]);
        for (let k = 0; k < words[j].length; k++) {
            if (wordMap.get(words[j][k])) {
                wordMap.set(words[j][k], wordMap.get(words[j][k])+1);
            }
            else {
                wordMap.set(words[j][k],1);
            }
        }
        console.log("WordMap",j, wordMap);

        for (let [key,value] of wordMap) {
            console.log("key", key);
            console.log("value", value);
            console.log("resMap.get(key)", resMap.get(key));
            if (resMap.get(key) !== undefined) {
                if (value >= resMap.get(key)) {
                isValid = true;
            }
            else {
                break;
            }
            }
            console.log("isValid", isValid);
        }

        if (isValid) {
                res = words[j];
                console.log("Res", res);
            return res;
        }
    }
};
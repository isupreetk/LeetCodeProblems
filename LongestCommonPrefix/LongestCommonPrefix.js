/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let minStrLength = 201;
    let commonLength = 0;
    let commonPrefix = "";
    // Find the smallest string in the array
    for (let i = 0 ; i < strs.length ; i++) {
        if (minStrLength > strs[i].length) {
            minStrLength = strs[i].length;
            console.log("minStrLength", minStrLength);
        }
    }
    // Find the length of common prefix in all the strings
    if (strs.length === 1) {
        commonLength = strs[0].length;
    }
    else {
        for (let k = 0 ; k < minStrLength ; k++) {
            console.log("k", k);

            for (let j = 1 ; j < strs.length ; j++) {
                    console.log("j", j);
                    
                    if (strs[j][k] !== strs[0][k]) {
                        break;
                    }
            
            }
        
        }
    }
commonPrefix = strs[0].substring(0,commonLength);
console.log("commonPrefix", commonPrefix);
return commonPrefix;
};
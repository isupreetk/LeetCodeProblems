/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString();
    let valid = true;
    for (let i =0;i < y.length; i++) {
        let ldigit = y[i];
        let rdigit = y[y.length-1-i];
        if (ldigit === rdigit) {
            continue;
        }
        else {
            valid = false;
            break;
        }
    }
        return valid;
};
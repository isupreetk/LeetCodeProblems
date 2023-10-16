/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let currentValue = n;
    let callAttempt = 0
    return function() {
            currentValue = n + callAttempt;
            callAttempt = callAttempt + 1;
        return currentValue;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
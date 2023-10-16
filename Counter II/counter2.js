/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

const createCounter = function(init) {
    let array = [];
    let currentValue = init;
    
    let counter = {
        increment : function() {
        currentValue = currentValue + 1;
        array.push(currentValue);
        return currentValue;
    },
    decrement : function() {
        currentValue = currentValue - 1;
        array.push(currentValue);
        return currentValue;
    }, 
    reset : function() {
        currentValue = init;
        array.push(currentValue);
        return currentValue;
    }
};
return counter;
}
/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

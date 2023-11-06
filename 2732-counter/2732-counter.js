/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = function(n) {
    let newNumber = n;
    return function(){
        newNumber++
        return newNumber -1;
    }
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
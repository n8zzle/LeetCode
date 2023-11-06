/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let newNumber = init;

    function increment() {
        return ++newNumber
    }

    function decrement() {
        return --newNumber
    }

    function reset() {
        newNumber = init
        return newNumber
    }

    return {
        increment, reset, decrement
    }

};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
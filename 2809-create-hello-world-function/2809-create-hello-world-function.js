/**
 * @return {Function}
 */
/**
var createHelloWorld = function() {
    
    return function(...args) {
     return "Hello World"   
    }
};
 */

var createHelloWorld = () => {
    return function(){
        return "Hello World"
    }
}

createHelloWorld()

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const arr2 = []
    for(a=0;a<arr.length;a++){
      if(fn(arr[a],a)){
        arr2.push(arr[a]);
      }
    }
    return arr2
};
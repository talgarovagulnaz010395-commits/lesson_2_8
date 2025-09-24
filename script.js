function findMax (array) {
    if (array.length === 0) {
        return null
    }
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[1] > max ){
        }
    }
    return max;
}
console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-100, -7, -65, -1]));
console.log(findMax([100]));
console.log(findMax([]));

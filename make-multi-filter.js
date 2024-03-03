function makeMultiFilter(originalArray) {
    var currentArray = originalArray.slice();
    return function arrayFilterer(filterCriteria, callback) {
    
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }
        currentArray = currentArray.filter(filterCriteria);
        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }
        return arrayFilterer;
    };
}
var arrayFilterer3 = makeMultiFilter([1, 2, 3]);
var arrayFilterer4 = makeMultiFilter([4, 5, 6]);
console.log(arrayFilterer3(filterTwos)()); // prints [1, 3]
console.log(arrayFilterer4(filterThrees)()); // prints [4, 5, 6]
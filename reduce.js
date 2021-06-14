var arr = [32, 33, 16, 40]

function callbackFn(accumulator, currentValue) {
    return accumulator + currentValue
}

/*
    Array.prototype.reduce()

    Syntax:
    reduce(callbackFn)

    Parameters:
    callbackFn - A function to execute on each element in the array (except for the first, if no initialValue is supplied).
                It takes four arguments:
        1. accumulator : The accumulator accumulates callbackFn's return values. It is the accumulated value previously returned in the 
            last invocation of the callback—or initialValue, if it was supplied (see below).
        2. currentValue : The current element being processed in the array.
        3. index |OPTIONAL| : The index of the current element being processed in the array. 
            Starts from index 0 if an initialValue is provided. Otherwise, it starts from index 1.
        4. array |OPTIONAL| : The array reduce was called upon.
*/

console.log("Using reduce() : ")
console.log(arr.reduce(callbackFn, 0))

/*
    My reduce() function : myReduce()

    Syntax:
    myReduce(array, callbackFn)

    Parameters:
    array - The array myReduce() was called upon.
    callbackFn - Function to execute on each element.
        1. accumulator : The accumulator accumulates callbackFn's return values.
        2. currentValue : The current element being processed in the array.

    Return : Returns the accumulated result from the last call of the callback function
*/

function myReduce(arr, callbackFn) {
    var value = 0
    for(var i=0; i<arr.length; i++) {
        value = callbackFn(value, arr[i])
    }
    return value
}

console.log("\nUsing myReduce() : ")
console.log(myReduce(arr, callbackFn))
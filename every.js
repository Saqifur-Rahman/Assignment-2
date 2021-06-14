var ages = [32, 33, 16, 40]

function callbackFn(age) {
    return age >= 18
}

/*
    Array.prototype.every()

    Syntax:
    every(callbackFn)

    Parameters:
    callbackFn - Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
                It accepts three arguments:
        1. element : The current element being processed in the array.
        2. index |OPTIONAL| : The index of the current element being processed in the array.
        3. array |OPTIONAL| : The array every was called upon.
*/

console.log("Using every() : ")
console.log(ages.every(callbackFn))

/*
    My every() function : myEvery()

    Syntax:
    myEvery(array, callbackFn)

    Parameters:
    array - The array myEvery() was called upon.
    callbackFn - Function to execute on each element.
        1. element : The current element being processed in the array.

    Return : A Boolean. Returns true if all the elements in the array pass the test, otherwise it returns false
*/

function myEvery(arr, callbackFn) {
    var result = false
    for(var i=0; i<arr.length; i++) {
        if(callbackFn(arr[i])) {
            result = true
        }
        result = false
    }
    return result
}

console.log("\nUsing myEvery() : ")
console.log(myEvery(ages, callbackFn))
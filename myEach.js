// array
var arr = ["Apple", "Ball", "Cat", "Dog", "Egg"]

// callback function
function callbackFn(element) {
    console.log(element)
}

/*
    Array.prototype.forEach()

    Syntax:
    forEach(callbackFn)

    Parameters:
    callbackFn - Function to execute on each element. It accepts between one and three arguments:
        1. element : The current element being processed in the array.
        2. index |OPTIONAL| : The index of element in the array.
        3. array |OPTIONAL| : The array forEach() was called upon.
*/

console.log("Using forEach() : ")
arr.forEach(callbackFn)

/*
    My forEach() function : myEach()

    Syntax:
    myEach(array, callbackFn)

    Parameters:
    array - The array myEach() was called upon.
    callbackFn - Function to execute on each element.
        1. element : The current element being processed in the array.
*/

function myEach(arr, callbackFn) {
    for(var i=0; i<arr.length; i++) {
        callbackFn(arr[i])
    }
}

console.log("\nUsing myEach() : ")
myEach(arr, callbackFn)

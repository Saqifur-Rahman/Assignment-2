var arr = [1, 4, 9, 16]

function callbackFn(element) {
    return Math.sqrt(element)
}

/*
    Array.prototype.map()

    Syntax:
    map(callbackFn)

    Parameters:
    callbackFn - Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.
                The callbackFn function accepts the following arguments:
        1. element : The current element being processed in the array.
        2. index |OPTIONAL| : The index of the current element being processed in the array.
        3. array |OPTIONAL| : The array map was called upon.
*/

console.log("Using map() : ")
const new_arr = arr.map(callbackFn)
console.log(new_arr)

/*
    My map() function : myMap()

    Syntax:
    myMap(array, callbackFn)

    Parameters:
    array - The array myMap() was called upon.
    callbackFn - Function to execute on each element.
        1. element : The current element being processed in the array.

    Return : New array with each element being processed through callbackFn.
*/

function myMap(arr, callbackFn) {
    var new_arr = []
    for(var i=0; i<arr.length; i++) {
        new_arr[i] = callbackFn(arr[i])
    }
    return new_arr
}

console.log("\nUsing myMap() : ")
const new_arr2 = myMap(arr, callbackFn)
console.log(new_arr2)
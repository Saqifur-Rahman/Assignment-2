var ages = [32, 33, 16, 40]

function callbackFn(age) {
    return age >= 18
}

/*
    Array.prototype.filter()

    Syntax:
    filter(callbackFn)

    Parameters:
    callbackFn - Function is a predicate, to test each element of the array. Return a value that coerces to true to keep the element, or to false otherwise.
                It accepts three arguments:
        1. element : The current element being processed in the array.
        2. index |OPTIONAL| : The index of the current element being processed in the array.
        3. array |OPTIONAL| : The array filter was called upon.
*/

console.log("Using filter() : ")
const new_arr = ages.filter(callbackFn)
console.log(new_arr)

/*
    My map() function : myFilter()

    Syntax:
    myFilter(array, callbackFn)

    Parameters:
    array - The array myFilter() was called upon.
    callbackFn - Function to execute on each element.
        1. element : The current element being processed in the array.

    Return : An Array containing all the array elements that pass the test. If no elements pass the test it returns an empty array.
*/

function myFilter(arr, callbackFn) {
    var new_arr = []
    var j = 0
    for(var i=0; i<arr.length; i++) {
        if(callbackFn(arr[i])) {
            new_arr[j] = arr[i]
            j = j + 1
        }
    }
    return new_arr
}

console.log("\nUsing myFilter() : ")
const new_arr2 = myFilter(ages, callbackFn)
console.log(new_arr2)
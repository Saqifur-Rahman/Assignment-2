var arr = [32, 33, 16, 40]

/*  
    Array.prototype.includes()

    Syntax:
    includes(searchElement)

    Parameters:
    searchElement - The value to search for.
    fromIndex |OPTIONAL| - The position in this array at which to begin searching for searchElement.
*/

console.log("Using includes() : ")
console.log(arr.includes(16))

/*
    My includes() function : myIncludes()

    Syntax:
    myIncludes(array, searchElement)

    Parameters:
    array - The array myIncludes() was called upon.
    searchElement - The value to search for.

    Return : A Boolean which is true if the value searchElement is found within the array.
*/

function myIncludes(arr, searchElement) {
    var result = false
    for(var i=0; i<arr.length; i++) {
        if(searchElement == arr[i]) {
            result = true
            return result
        }
    }
    return result
}

console.log("\nUsing myIncludes() : ")
console.log(myIncludes(arr, 16))
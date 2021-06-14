var arr = [32, 33, 16, 40, 16]

/*  
    Array.prototype.lastIndexOf()

    Syntax:
    lastIndexOf(searchElement)

    Parameters:
    searchElement - Element to locate in the array.
    fromIndex |OPTIONAL| - The index at which to start searching backwards. 
*/

console.log("Using lastIndexOf() : ")
console.log(arr.lastIndexOf(16))

/*
    My lastIndexOf() function : myLastIndexOf()

    Syntax:
    myLastIndexOf(array, searchElement)

    Parameters:
    array - The array myLastIndexOf() was called upon.
    searchElement - Element to locate in the array.

    Return : A Number, representing the position of the specified item, otherwise -1.
*/

function myLastIndexOf(arr, searchElement) {
    for(var i=arr.length-1; i>=0; i--) {
        if(searchElement == arr[i]) {
            return i
        }
    }
    return -1
}

console.log("\nUsing myLastIndexOf() : ")
console.log(myLastIndexOf(arr, 16))
var arr = [32, 33, 16, 40]

/*  
    Array.prototype.indexOf()

    Syntax:
    indexOf(searchElement)

    Parameters:
    searchElement - Element to locate in the array.
    fromIndex |OPTIONAL| - The index to start the search at.
*/

console.log("Using indexOf() : ")
console.log(arr.indexOf(32))

/*
    My indexOf() function : myIndexOf()

    Syntax:
    myIndexOf(array, searchElement)

    Parameters:
    array - The array myIndexOf() was called upon.
    searchElement - Element to locate in the array.

    Return : A Number, representing the position of the specified item, otherwise -1.
*/

function myIndexOf(arr, searchElement) {
    for(var i=0; i<arr.length; i++) {
        if(searchElement == arr[i]) {
            return i
        }
    }
    return -1
}

console.log("\nUsing myIndexOf() : ")
console.log(myIndexOf(arr, 32))
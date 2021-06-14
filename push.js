var arr = [32, 33, 16, 40]

/*  
    Array.prototype.push()

    Syntax:
    push(element)

    Parameters:
    element - The element to add to the end of the array.
*/

console.log("Using push() : ")
console.log(arr.push(45))
console.log(arr)

/*
    My push() function : myPush()

    Syntax:
    myPush(array, element)

    Parameters:
    element - The element to add to the end of the array.

    Return : 	A Number, representing the new length of the array.
*/

function myPush(arr, element) {
    arr[arr.length] = element
    return arr.length
}

console.log("\nUsing myPush() : ")
console.log(myPush(arr, 59))
console.log(arr)
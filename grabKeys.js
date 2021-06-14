const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

/*
    Object.keys()

    Syntax:
    Object.keys(obj)

    Parameters:
    1. obj : The object of which the enumerable's own properties are to be returned.

    Return: An array of strings that represent all the enumerable properties of the given object.
*/

console.log("Using Object.keys() : ")
console.log(Object.keys(object1));

/*
     My Object.keys() function : grabKeys()

    Syntax:
    grabKeys(obj)

    Parameters:
    1. obj : The object of which the enumerable's own properties are to be returned.

    Return: An array of strings that represent all the enumerable properties of the given object.
*/

function grabKeys(obj) {
    var arr = []; 
    for (var key in obj) { 
        if (obj.hasOwnProperty(key)){ 
            arr.push(key); 
        }
    }
    return arr;
}

console.log("\nUsing grabKeys() : ")
console.log(grabKeys(object1));
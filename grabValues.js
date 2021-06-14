const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};

/*
    Object.values()

    Syntax:
    Object.values(obj)

    Parameters:
    1. obj : The object whose enumerable own property values are to be returned.

    Return: An array containing the given object's own enumerable property values.
*/

console.log("Using Object.values() : ")
console.log(Object.values(object1));

/*
     My Object.values() function : grabValues()

    Syntax:
    grabValues(obj)

    Parameters:
    1. obj : The object whose enumerable own property values are to be returned.

    Return: An array containing the given object's own enumerable property values.
*/

function grabValues(obj) {
    var arr = []; 
    for (var key in obj) { 
        if (obj.hasOwnProperty(key)){ 
            arr.push(obj[key]); 
        }
    }
    return arr;
}

console.log("\nUsing grabValues() : ")
console.log(grabValues(object1));
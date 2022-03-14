var myArray = ['a', 'b', 'c',];

console.log('---------------------------------------');

console.log(myArray);

console.log('----------PUSH AND UNSHIFT-------------');

myArray.unshift("start");
myArray.push("end");
console.log(myArray);

console.log('----------------ES6--------------------');

// myArray = [1,...myArray];
// myArray = [...myArray,2];
myArray = [1,...myArray,2];
console.log(myArray);

console.log('---------------------------------------');
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]
//   js arrays are resizable.

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// add 9 to the beginning
// myArr.shift()
// remove the element at the beginning

console.log(myArr.includes(9));
// false
console.log(myArr.indexOf(3));
//3
console.log(myArr.indexOf(34));
// -1

// const newArr = myArr.join()
// converts the array to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);
// A [0, 1, 2, 3, 4, 5]

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);
// B [0, 1, 2, 3, 4, 5]

const myn2 = myArr.splice(1, 3)
// splice operation manipulates the original array
console.log("C ", myArr);
// C [0, 4, 5]

console.log(myn2);
//[1, 2, 3]
const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
//      "h"
// console.log(gameName.__proto__);
//     {}  --->> object


// console.log(gameName.length);
//   13
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
// positionb of character .... "t"
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// 4 position will be excluded
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))
//    %20 will be replaced with -

console.log(url.includes('sundar'))
//    true

console.log(gameName.split('-'));
//   hitesh   hc   com
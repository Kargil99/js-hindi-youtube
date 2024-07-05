// singleton( 1st method of object creation)
//  Singletons are used to create an instance of a class 
// if it does not exist or
//  else return the reference of the existing one.
// Object.create

// object literals( 2nd method of obj creation)

const mySym = Symbol("key1")


const JsUser = {
    name: "Biswojit",
    "full name": "Biswojit Biswal",
    [mySym]: "mykey1", // right way to use symbol inside an object
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])
// Mostly the elements of javascript objects are accessed by using " . "
// but using " [] " also these can be accessed.


JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);   gives output as: "hitesh@chatgpt.com"

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpolation
}


console.log(JsUser.greeting());
//    Hello JS user
console.log(JsUser.greetingTwo());
// "Hello JS user, Biswojit
const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"

accountCity = "Jaipur"
// but this is not a good idea to declare a variable

let accountState;
// this will be considered as undefined 

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
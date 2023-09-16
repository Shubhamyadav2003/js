const accountId = 774369
// we not change value of const variable like accountId != 2232 show error 

let accountEmail = "Shubham@gmial.com"
var accountPassword = "12345"
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/
accountCity = "Mumbai"

console.table([accountId ,accountEmail,accountPassword,accountCity]);


accountEmail = "sy@gmail.com"
accountPassword = "12458"
accountCity = "GTB nagar"
 let accountstate;
console.table([accountId ,accountEmail,accountPassword,accountCity,accountstate]);

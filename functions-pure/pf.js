//pure functions
let getSquare = function (n) {
  let sq = n * n;
  return sq;
};
console.log(getSquare(5));
console.log(getSquare(5));

//Example 2
//username:system,password:123
/* 
  if you call a global variable into a function it is no longer considered a pure function
  eg 
  let username = system
  let isValidLogin = function(username, password) {
    if (username == "system" && password == 123) return true;
  
    this function is not pure because the global variable username was called into the function
    it should only depend on the values of the arguments and not depend on any other global variable 
  */

let isValidLogin = function (username, password) {
  if (username == "A" && password == "B") {
    return true;
  } 
  else {
    return false;
  }
};
console.log(isValidLogin("A", "B"));
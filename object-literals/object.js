/*
 object is a memory unit which represents a physical item
 object details are called properties(value)
 object operations are called methods(functions)
 variable.property
 variable.method
*/
//object literal is the way to create an object
//x is the object reference variable
//two keys a and b
// a is a property
// b is a method
//var x = { a: 10, b: function () {} };
//console.log();

var person = {
  personName: "Scott",
  birthDay: function () {
    console.log("Happy Birthday");
  },
};
console.log(person);
console.log(person.personName);
console.log(person.birthDay());
//person.birthDay() prints undefined after printing happy birthday because there is no return value

//This way it does not print undefined
var person = {
  personName: "Scott",//property
  birthDay: function () { // method
    return "Happy Birthday";
  },
};
console.log(person);
console.log(person.personName);
console.log(person.birthDay());

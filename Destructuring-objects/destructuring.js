//destructing objects
// copying values of properties into variables
var person = {
  firstName: "Smith", //fn
  lastName: "john",   //ln
  age: 25,            //age
  email: "test@example.com", // email 
  city: "Newyork",           //other
  coumtry: "USA",            //other
};
//traditional syntax to access the properties and asssign into a variable
//var fn = person.firstName;
//var ln = person.lastName;
//var g = person.age;

//shortcut way the variable name should not have existed earlier
var {
  firstName: fn,
  lastName: ln,
  age,
  email = "someone@example.com",
  ...other
} = person; // this email only works if there is no email property in the object
//source:destination i.e propertyName:variableName = nameOfObject
console.log(fn); //Smith
console.log(ln); //John
console.log(age); //25 // if you want the variable and property name to be the same
console.log(email); //test@example.com"
console.log(other); // it automatically creates a new object and includes the remaining properties of person object 
//rest operator[...](rest of the properties / all the remaining properties)
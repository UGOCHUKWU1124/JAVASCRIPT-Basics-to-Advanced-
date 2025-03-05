// this = { }
//object literals with "this" keyword
//this = current object
//it is used to access the current object of the method
var person = {
  personName: "Scott",//property
  birthDay: function () { // method
    console.log(this);//it refers to the current object in which the method is present
    return `Happy Birthday to ${this.personName}`;
  },
};
//console.log(person);
//console.log(person.personName);
console.log(person.birthDay());
//to access the property of  the code outside the object you use person.personName i.e person.property or method name....refvariable property
//to access the property of the code inside the object you use this.personName this.property or method name
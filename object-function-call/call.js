//call
var person = {
  age: 20,
  birthDay: function () {
    this.age++;
  },
};
console.log(person);
console.log(person.age); //20
person.birthDay(); //does not return any value but just increase the value of the age property
console.log(person.age); //21

var person = {//object
  age: 20,
};

const birthDay = function (p) {//independent variable
  p.age++;
};
console.log(person.age); //20
birthDay(person);
console.log(person.age); //21












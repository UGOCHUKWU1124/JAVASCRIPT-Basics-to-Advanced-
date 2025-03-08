// this is the second way to create functions
//Normal function
//const fun1 = function () {
//console.log(this); //refers to a global object which contains different properties
//};
//console.log(this);
//fun1();

//Arrow function
const fun2 = () => {
  console.log("inside the function", this); // does not change it always stick to the global empty object
};
console.log("outside the function", this);
fun2();
//it is an empty global object both inside and outside
//if you want the object of this keyword change automatically use regular functions
//if you dont want the object of this keyword change automatically use Arrow functions

//console.log(this);//{} refrencing global empty object
const student = {
  studentName: "Scott",
  getStudentName: function () {
    console.log(this); // automatially points to the current object instead of refrencing global empty object
  },
};
student.getStudentName();

// while arrow function
const student2 = {
  studentName: "John",
  getStudentName: () => {
    console.log(this); //points to a global empty object {}
  },
};
student2.getStudentName();

//using arrow functions for the methods is not a good idea because it wont access the vurrebt object

// cases to use arrow function
console.log("calling method directly:");
student.getStudentName();

console.log("calling method indirectly using setTimeout:");
setTimeout(student.getStudentName, 3000); // refers to timeout object

// use bind to overcome this

setTimeout(student.getStudentName.bind(student), 3000);

//but if
const student3 = {
  studentName: "dan",
  getStudentName: function () {
    console.log(this); //student object
    setTimeout(function () {
      console.log(this); // timeout object
    }, 3000);

    setTimeout(() =>
      // use arrow function to show student object instead of timeout object
      {
        console.log(this); // student object
      }, 3000);
  },
};
student3.getStudentName(); // the this keyword refers to timeout object

// youre mostly required to use arrow functions for aschronous and event based operations like setTimeout,setInterval, promise etc to avoid switching the thiskeyword context
// and also avoid using arrow functions for regular object methods and constructions
// in real world applications you can use the arrow function everywhere execpt from object methods and constructions

//ARROW FUNCTIONS 2 (AUTOMATIC RETURN)
const add = function (a, b) {
  return a + b;
};
console.log(add(10, 56)); // 66

const add2 = (a, b) => {
  return a + b;
};
console.log(add2(10, 46)); //56

// both are equivalent in this case
// but different if you want to access thiskeyword in object methods then their difference comes in

const add3 = (a, b) => //Arrow function 
(       // change to bracket 
  a + b // you can write it without using return (shortcut)
)       // you can only use this for single statement and not regular statements i.e const add3 = (a, b) => (a + b)
console.log(add3(15, 36)); //

let isEven = (n) => (n % 2 == 0);
console.log(isEven(7));


// if your code does not depend on this keyword then use either arrow or regular

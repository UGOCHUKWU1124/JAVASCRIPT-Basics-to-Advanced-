//Adding properties and methods to an object
const student = {};
console.log(student);
student.marks = 12; //variable.property added property=value
student.getResult = function () { // property=function
  if (this.marks >= 35) { //this.marks represent marks property
    return "Pass";
  } else {
    return "Fail";
  }
}; //variable.method added
console.log(student);
console.log(student.marks);//call property
console.log(student.getResult());//call method
 

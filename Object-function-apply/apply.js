var student1 = {
  studentName: "Scott",
  section: "A",
};
var student2 = {
  studentName: "john",
  section: "B",
};

//FUNCTION OUTSIDE THE OBJECT
function calculateTotalMarks(subject1, subject2, subject3) {
  let totalMarks = subject1 + subject2 + subject3;
  let message = `Hey ${this.studentName},your total marks is:${totalMarks}`;
  console.log(message);
}

calculateTotalMarks.call(student1, 60, 70, 80);
// when using apply you supply the arguements/parameters as arrays
calculateTotalMarks.apply(student1, [60, 70, 80]);
calculateTotalMarks.apply(student2, [50, 60, 70]);

//supply "student" object as "this" keyword of calculateTotalMarks function and also supply the values of array into respective parameters sequentially.

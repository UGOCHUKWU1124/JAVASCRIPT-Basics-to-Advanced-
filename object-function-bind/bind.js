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
  var student1Calculate = calculateTotalMarks.bind(student1);
  //it creates a new function and stores reference of student1 as "this" keyword. the function will not be executed
  student1Calculate(60, 70, 80);//executes this = student1
  
  var student2Calculate = calculateTotalMarks.bind(student2);
  //it creates a new function and stores reference of student1 as "this" keyword. the function will not be executed
  student2Calculate(40, 70, 20);//executes this = student2
  
  
  //use call or apply if you want to execute the function immediately
  // use bind if you dont want to execute the function immediately but you want to bind an object as this keyword
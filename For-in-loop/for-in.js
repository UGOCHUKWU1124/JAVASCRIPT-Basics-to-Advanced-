const student = {
  studentName: "Scott", //property
  email: "scott@gmail.com",
  branch: "CS",
  physics: 60,
  chemistry: 70,
  maths: 80,
};

// accesing property using dot(.) accessor this is manually
//console.log(student.studentName);
//console.log(student.email);
//console.log(student.branch);

// accesing property using bracket ([""]) accessor this is manually
console.log(student["studentName"]);
console.log(student["email"]);
console.log(student["branch"]);

// accesing property using bracket ([""]) accessor: for-in loop
for (let prop in student) { // loop to read property in the object automatically
  console.log(prop, student[prop]); // access studentNme and value

  if (prop == "physics" || prop == "chemistry" || prop == "maths") {
    student[prop] = student[prop] + 5; // increasing the marks by 5
  }
}

console.log(student);
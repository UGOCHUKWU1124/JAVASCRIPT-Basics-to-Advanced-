//prototypechain
    const person = {personName: "John",age:20};
    const student = {rollNo: 10, marks:70};
    const medicalStudent = {mainSubject: "Biology"};

    student.__proto__ = person;
    medicalStudent.__proto__ = student;

    console.log(person,person.__proto__);
    console.log(student,student.__proto__);
    console.log(medicalStudent,medicalStudent.__proto__);


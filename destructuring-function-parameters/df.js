function fun1({studentName:sn, email:em,dateOfBirth,...others}) {
  console.log("fun1", sn, em,);
  console.log(others);//others.phone, others.city
  console.log(dateOfBirth);
}

var student = {
  studentName: "scott",
  email: "scott@gmail.com",
  phone: "123456",
  city:"london"
};

fun1(student);

//call back functions
function Callback1(name, age) {
  //or let callback1 = function(name,age)
  console.log(`callback1:Name is ${name},age is ${age}`);
}

function callback2(name, age) {
  //or let callback2 = function(name,age)
  console.log(`callback2:Age is ${age},Name is ${name}`);
}
//example of high order function
function DoWork(name, age, MyFunctionRef) {
  name = "Mr" + name;
  age++;
  MyFunctionRef(name, age); //calls callback1
}

//DoWork("Scott", "20", Callback1);
DoWork("Scott", "20", callback2);
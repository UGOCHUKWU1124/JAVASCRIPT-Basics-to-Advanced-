//lexical environment
// x stored in the global environment of objects
const x = 10;
console.log(x);
//outer = null
//block a / scope a

function fun1() {
  //env obj 2
    var y = 20;
  console.log(x, y); // outer = ref to global environment of objects 1(parent)

  //block b / scope b
    function fun2() {
    //env obj 3
    var z = 30;
    if (1==1)
    {
        let p = 1000; // here let would be stored as an environment property of if and record them as block level variables
        let q = 2000; // for var instead of storing in the environment object of if it would be stored in the environment object of fun2
    }
    console.log(x, y, z); // outer = ref to env obj 2 (parent)
    }
    fun2();
} //this is a scope and not an object
fun1();
//note dont create variable with the same name it wont print the former env but rather the current one
//let can recognize smaller blocks like if,for,while,etc apart from functions
//var can recognize only the function scopes but cannot recognize if,for,while,etc blocks
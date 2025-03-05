/* 
setTimeout

function callbackfunction()
{
   function body here
}
   setTimeout (callBackFunction,milliseconds)
   1000 milliseconds=1sec
*/

//Display hello message at the beginning and after 5seconds display goodbye message

function sayHello() {
  console.log("Hello");0
}

function sayGoodBye() {
  console.log("Good bye");
}

sayHello();
setTimeout(sayGoodBye, 5000);// invokes sayGoodbye function after 5 seconds
  
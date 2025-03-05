/*
  setInterval

function callbackfunction()
{
   function body here
}
   setInterval (callBackFunction,milliseconds)
   1000 milliseconds=1sec

   it calls the callback function on every completion of specified numbers of milliseconds
   it is useful to perform a task repeatedly and periodically
   you can stop the execution using clearInterval() function
*/
function callback() {
  console.log("Hello");
}

let myInterval = setInterval(callback, 2000); //calls the callback every 2secs
function stopInterval() {
  clearInterval(myInterval);
} //it stops the execution

setTimeout(stopInterval, 20 * 1000);// stops interval after 20secs


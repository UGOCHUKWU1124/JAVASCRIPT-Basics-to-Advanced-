
/* 
  immediately invoked functions execute immediately as soon as they are created

  ( starts with bracket
     function(parameter1,parameter2,.....)
    {
     function body
    }
  )
  (arg1,arg2,....) invoked here invokes the function immediately
  
  They are one time executabels they cannot be called later manually
*/
let printMe = function (value) {
  console.log(`your value is ${value}`);
};
/*instead of storing the function in a variable
  eg let x = function(){return 10*10;};
  we will write the function inside the function that is called instead of the variable name
*/
printMe((function () {return 10 * 10;})());
// the () at the end of the function makes it executable
// and if you write it in multiple lines
printMe(
  //immediately invoked function
  (
    function (n) {
    return n * n;
    }
  )
  
(10));//this bracket invokes or calls the function

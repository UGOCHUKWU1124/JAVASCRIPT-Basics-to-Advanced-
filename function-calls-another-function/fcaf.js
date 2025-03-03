//functions with no arguments and no return value 
//calling showCountry function into showCity function
function showCity() 
  // OR let showCity = function() 
{
  console.log("New York");
  showCountry();
}
function showCountry()
{
    console.log("USA");
}
showCity();//output:new york and usa 
showCity();//output:new york and usa
showCity();//output:new york and usa



//EXAMPLE 2
//CALL FUNCTION INSIDE ANOTHER FUNCTION.....SQUARE FUNCTION IS CALLED INTO CUBE
// everything here basically is equal to square(n)
let square = function(n) 
{
return n*n;
}
// everything here basically is equal to cube(n)
let cube = function(n)
{
    return square(n)*n; //calling square function {square(n)} into the cube function
} 
let result = cube(5);
console.log(result);
//OR without assigning a variable
console.log (cube(4));

/*SQUARE IS THE SMALLER TASK AND CUBE IS THE LARGER TASK 
THEREFORE SMALLER TASK IS CALLED INTO LARGER TASK */
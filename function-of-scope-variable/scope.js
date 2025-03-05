//global variable (till end of program) declared outside the function 
//local variable (till end of function) declared inside the function 
//function(parameter)>>> parameter(till end of function)
/*
    if (condition) or any other block eg for,while block etc 
    {
        var variableName;local variable (till end of function) block level does not support var only let 
        let variableName;block variable (till end of block) correct one to use 
    }
*/
//global variables are available everywhere both inside and outside the functions they can be printed anywhere
//let does not hoist only var i.e
console.log("before global variables")
console.log(b);//accessible
//console.log(a);not accessible cos let does not hoist
let a = 10; // global variable
var b = 20; // global variable
console.log("after global variables")
console.log(a);//accessible
console.log(b);//accessible

function MyFunction() // same as let MyFunction = function()
{
    console.log("before local variables")
    console.log(a);//accessible
    console.log(b);//accessible
    //console.log(c);not accessible
    console.log(d);//accessible

    let c = 30; // local variable
    var d = 40; // local variable
    console.log("after local variables")
    console.log(a);//accessible
    console.log(b);//accessible
    console.log(c);//accessible
    console.log(d);//accessible
    if(c==c) //c==d did not work because the condition was false
    {
        console.log("before block variables")
        console.log(a);//accessible
        console.log(b);//accessible
        console.log(c);//accessible
        console.log(d);//accessible
       //console.log(e);not accessible
        console.log(f);//accessible
        let e = 50;//block level
        var f = 60;//local variable
        console.log("after block variables")
        console.log(a);//accessible
        console.log(b);//accessible
        console.log(c);//accessible
        console.log(d);//accessible
        console.log(e);//accessible
        console.log(f);//accessible
    }//end of block 
    // only a,b,c and d are available here 
}//end of function
// only a and b are accessible here 
console.log(MyFunction());
/*OR....let result= MyFunction();
console.log(result);*/

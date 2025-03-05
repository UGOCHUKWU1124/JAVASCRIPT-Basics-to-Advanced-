//functions to calculate simple interest
let getSimpleInterest = function (principal, rateOfInterest, noOfYears)
 {
  let si = (principal * rateOfInterest * noOfYears) / 100;
  return si;
};
//calling same functions multiple times
console.log (getSimpleInterest(1000,6.7,3));
console.log (getSimpleInterest(7000,4.5,10));

//printing functions in a variable
let si1=(getSimpleInterest(3000,5.7,4));
console.log(si1);        
let si2=(getSimpleInterest(9000,7.5,20));
console.log(si2);


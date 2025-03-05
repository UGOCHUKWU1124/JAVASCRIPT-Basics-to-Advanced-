//arguments keyword-demo

//this function calculates a bill amount of a card in shopping 
//you can supply unlimited no.of product prices
let getCartBill = function () {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    //console.log(arguments[i]);
    sum = sum + arguments[i];
  }
  return sum;
}
console.log(getCartBill(13)); //price of product
console.log(getCartBill(13, 19, 120, 4)); //price of product

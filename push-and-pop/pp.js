//adds a new element at the end of the array
var prices = [700,40,8,25];
prices.push(500);
console.log("after push", prices);//[700,40,8,25,500];

//pop returns the latest value and automatically removes the value from the array
//returns 500 here first  
console.log(prices.pop());//back to [700,40,8,25];
console.log("after pop", prices);

//array of of objects
const products = [
    {productName:"TV", price:87000},
    {productName:"Monitor", price:6000},
    {productName:"ipad", price:3400},
    {productName:"phone", price:2000}
]; 
console.log("before push", products);
products.push({productName:"Glasses", price:6000});
console.log("after push", products);
console.log(products.pop()); //returns {productName:"Glasses", price:6000} and automatically removes it from the array
console.log("after pop", products);

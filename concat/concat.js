//to combine two arrays together
const expensiveProducts = [
    {productName:"TV", price:87000},
    {productName:"Monitor", price:6000},
]; 

const inexpensiveProducts = [
    {productName:"ipad", price:3400},
    {productName:"phone", price:2000},
    {productName:"shoe", price:6000}
];

const allProducts = expensiveProducts.concat(inexpensiveProducts);
console.log(expensiveProducts);
console.log(inexpensiveProducts);
console.log(allProducts);
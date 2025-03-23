// [].includes(value);
//it returns true if the given value is found atleast once in the array
var iphone =   { productName: "iphone", price: 2200, brand: "apple" };
const products = [
  { productName: "TV", price: 700, brand: "hisense" },
  { productName: "Monitor", price: 900, brand: "apple" },
  { productName: "ipad", price: 3000, brand: "apple" },
  iphone
];
var result = products.includes(iphone);
console.log(result);

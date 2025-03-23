//[].findIndex (function (element) {return condition})
//returns the index of the first matching elements among the elements that are matching the given condition
const products = [
  { productName: "TV", price: 700, brand: "hisense" }, //true
  { productName: "Monitor", price: 900, brand: "apple" }, //true but it would only return the first matching element
  { productName: "ipad", price: 3000, brand: "apple" }, //false
  { productName: "phone", price: 2200, brand: "apple" }, //false
];
var FirstexpensiveProductIndex = products.findIndex((p) => {
  return p.price >= 2000;
});
console.log(FirstexpensiveProductIndex); //2
products.splice(FirstexpensiveProductIndex, 0, {
  productName: "watch",
  price: 24500,
  brand: "AP",
});//add new object at that index 2
console.log(products);

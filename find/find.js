//[].find (function (element) {return condition})
//returns the first matching elements among the elements that are matching the given condition 
const products = [
    {productName:"TV", price:7000,brand: "hisense"}, //true
    {productName:"Monitor", price:9000,brand: "apple"},//true but it would only return the first matching element 
    {productName:"ipad", price:300,brand: "apple"},//false
    {productName:"phone", price:200,brand: "apple"}//false
];
var expensiveProduct = products.find(
    (p) => {
        return p.price >= 2000; 
    }
);
console.log(expensiveProduct);
// //or using for loop 
// for (let i = 0;i<appleProducts.length;i++){
//     console.log(`${appleProducts[i].productName},${appleProducts[i].price},${appleProducts[i].brand}`);
// }


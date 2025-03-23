//[].filter (function (element) {return condition})
//returns all the element that are matching with the given condition in a new array 
//if no elements are matching it returns an empty array 
const products = [
    {productName:"TV", price:87000,brand: "hisense"}, //true
    {productName:"Monitor", price:6900,brand: "apple"},//true
    {productName:"ipad", price:300,brand: "apple"},//false
    {productName:"phone", price:200,brand: "apple"}//false
];
var appleProducts = products.filter(
    (p) => {
        return p.brand =="apple"; // return those objects into a new array if true
    }
);
console.log(appleProducts);
//or using for loop 
for (let i = 0;i<appleProducts.length;i++){
    console.log(`${appleProducts[i].productName},${appleProducts[i].price},${appleProducts[i].brand}`);
}
//use filter to check if an element matches with a particular method 
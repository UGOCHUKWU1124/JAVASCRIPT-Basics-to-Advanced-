//[].forEach (function (element) {any code})
//executes the function once for each element of the array
function increaseQuantity (){
    this.quantity++;
}
const products = [
    { productName: "TV", price: 700, brand: "hisense",quantity:0,increaseQuantity:increaseQuantity}, //true
    { productName: "Monitor", price: 900, brand: "apple",quantity:0,increaseQuantity:increaseQuantity}, //true but it would only return the first matching element
    { productName: "ipad", price: 3000, brand: "apple",quantity:0,increaseQuantity:increaseQuantity}, 
    { productName: "phone", price: 2200, brand: "apple",quantity:0,increaseQuantity:increaseQuantity} 
];

//console.log(products);
//or instead of  using for loop 
// for (let i = 0;i<products.length;i++){
//     products[i].increaseQuantity();
// }
// console.log(products);


//using forEach
products.forEach((p)=>{
    p.increaseQuantity();
});
console.log(products);
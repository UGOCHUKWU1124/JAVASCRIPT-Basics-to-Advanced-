//[].some (function (element) {return condition})
//returns true if atleast one element matches with the given condition
const products = [
    {productName:"TV", price:87000}, //true
    {productName:"Monitor", price:600},//false
    {productName:"ipad", price:300},//false
    {productName:"phone", price:200}//false
];
console.log(products.some(
    (p) => {
        return p.price >= 1000; // output true
    }
));
//if the condition is false with all the elements the result is false

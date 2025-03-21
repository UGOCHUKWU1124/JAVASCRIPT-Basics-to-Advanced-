const products = [
    {productName:"TV", price:87000},
    {productName:"Monitor", price:6700},
    {productName:"ipad", price:3400},
    {productName:"phone", price:2000}
]; 
//create a callback function
//checks if the every price of product in the array is true given the condition if not it returns false
console.log(products.every(
    (p) => {
        return p.price >= 1000;
    }
));

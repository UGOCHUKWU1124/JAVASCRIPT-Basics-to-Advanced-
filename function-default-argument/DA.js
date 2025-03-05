//default arguments
//function that calculates net price based on the given price and tax rates 
let getNetPrice=function(price,taxRate = 18) 
//price and tax rate are the normal arguments 
//the value 18 is the default argument i.e if the tax rate is not supplied the system automatically makes it 18
{
    let netPrice = price + (price * taxRate / 100);
    return netPrice;
}


console.log(getNetPrice(20000,5));
//or 
let netPriceOfProduct = getNetPrice(15000,30);
console.log(netPriceOfProduct);   
let netPriceOfProduct2 = getNetPrice(45000);// here tax is automatically taken as 18 
console.log(netPriceOfProduct2);

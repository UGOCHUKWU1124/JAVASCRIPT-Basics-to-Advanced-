//removes the specified number of elements starting from the start index
//[].splice(startIndex, count);
//splice-for removing elements 
const products = [
    {productName:"TV", price:87000},
    {productName:"Monitor", price:6000},
    {productName:"ipad", price:3400},
    {productName:"phone", price:2000}
]; 

products.splice(1,1);//(startIndex, noOfElementsToRemove); i.e starting from index 1 only one element would be removed 
console.log(products);

//splice-for inserting elements 
products.splice(2,0,{productName:"shoe", price:209900});//this would be at the index number 2
//(startIndex, noOfElementsToRemove,elementToInsert);
console.log(products);

//splice-for replacing elements
products.splice(3,1,{productName:"bags", price:9900});
console.log(products);

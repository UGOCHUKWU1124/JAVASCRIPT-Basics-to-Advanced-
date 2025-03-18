const prices = ([50,40,5,66]);
prices[0] = 590;// 50 is replaced to 590 because it is index 0
console.log(prices);//index is 3 
console.log(prices.length);//length gives you the number of elements of that particular array

console.log("Elements using loop:")
for (let i=0;i<prices.length;i++)
{
    console.log(prices[i]);
}

//array of objects
var students = [
    {studentName:"Jones",age:17},
    {studentName:"Scott",age:17},
    {studentName:"John",age:17},
    {studentName:"Smith",age:17}
];

console.log(students);
console.log(students.length);
//to print the students objects individually using loop
for (let i=0;i<students.length;i++)
    {
        console.log(`Student Name:${students[i].studentName},Age:${students[i].age}`);
    }
    
var str="";
for (var i=1;i<7;i++)//outer loop
{
    for (var j=1;j<=5;j++)
    {
    str=`${str}${j}`;
    }
    str =`${str}\n`;
}
console.log(str);


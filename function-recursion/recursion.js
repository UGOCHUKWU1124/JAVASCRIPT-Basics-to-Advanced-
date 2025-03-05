let factorial=function(n)
{
    if(n==1)
    {
        return 1;
    }
    else 
    {
        return factorial(n-1)*n;
    }
}

console.log(factorial(5));


/* 
employee number 1:101,employee name:ab,managing number:10,
employee number 2:10,employee name:john,managing number:null,

function getEmployeeNameByEmpID(EmpId)
{
getEmployeeNameByEmpID(10)
}


getEmployeeNameByEmpID(101);
*/


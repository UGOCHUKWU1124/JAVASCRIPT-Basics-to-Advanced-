//constructor means initialize properties and methods into a newley created object
const createEmployee = function (employeeName,employeeId,salary){
    const employee = {};//create new object

  //initialize properties and methods into that object
    employee.employeeName = employeeName;
    employee.employeeId = employeeId ;
    employee.salary = salary;
    employee.getEmployeeName = function(){
        return employee.getEmployeeName;
    };

    //return the new object
    return employee;
};

var employee1 = createEmployee("Scott",1,1000);
var employee2 = createEmployee("Allen",2,2000);
console.log(employee1);
console.log(employee2);



//instead of doing all of this 
// const employee1 = {
//     employeeName: "Scott",
//     employeeId:1,
//     salary:1000,
//     getEmployeeName:function(){
//         return this.getEmployeeName;
//     }
// };
// const employee2 = {
//     employeeName: "Allen",
//     employeeId:1,
//     salary:2000,
//     getEmployeeName:function(){
//         return this.getEmployeeName;
//     }
// };
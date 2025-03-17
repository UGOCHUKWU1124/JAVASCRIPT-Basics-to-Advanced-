const Employee = function (employeeName,employeeId,salary){
    //new keyword automatically creates the object 
    //const employee = {};//create new object

  //initialize properties and methods into that object
    this.employeeName = employeeName;
    this.employeeId = employeeId ;
    this.salary = salary;
    this.getEmployeeName = function(){
        return this.EmployeeName;
    };

    //return the new object it would be automatically returned because of new keyword
    //return this;//instead of employee because this keyword is the refrence to the current object
};

var employee1 = new Employee("Scott",1,1000); //new keyword comes in
var employee2 = new Employee("Allen",2,2000);//new keyword comes in
console.log(employee1);
console.log(employee2);

//the two steps reduced are 
//creating a new object 
//returning the this object
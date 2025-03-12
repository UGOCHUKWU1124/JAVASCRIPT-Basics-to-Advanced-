//inheritance is a concept wjere the child object is created based on existing parent object
const person = {
    personName:"john",
    age: "20",
};                   //parent object
const student = {
    rollNo:12,
    marks:70
};                   //child object1

const customer = {shippingAddress: "some city,some country"}; //child object2

// every student is a person but not every person is a student
// every customer is a person but not every person is customer

student.__proto__ = person;
customer.__proto__ = person; 

console.log(student);
console.log(student.__proto__);


//console.log(student.__proto__.personName);
//console.log(student.__proto__.age);
// instead of writing the proto property you can write the normal dot notation


console.log(student.rollNo,student.marks,student.age,student.personName);

console.log(customer);
console.log(customer.__proto__);
console.log(customer.shippingAddress,customer.age,customer.personName);






//complex example
//parent object 
const user = {
    userName:"",
    password:"",
    isLoggedIn: false,
    login:function(){
        if (this.userName == "system" && this.password == "manager")
        {
            this.isLoggedIn = true;
            return true;
        }
        else{
            this.isLoggedIn = false;
            return false;
        }
    }
};
// child object (every manager is the user)
var manager = {
    departmentName:"R&D",
    approvedLeaves: function(){
        return "approve leaves";
    },
    dashboard: function(){
        return `${this.userName} dashboard`;
    }
};
manager.__proto__ = user;

//manager.__proto__.userName = "xxxxx"
manager.userName = "system"
manager.password = "manager"

console.log(manager.login());
console.log(manager.departmentName);
console.log(manager.approvedLeaves());
console.log(manager.dashboard());
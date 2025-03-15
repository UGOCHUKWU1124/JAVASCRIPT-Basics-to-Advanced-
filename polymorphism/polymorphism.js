//polymorphism using objects
const person = {
    personName: "John",
    age:20,
    getDetails:function(){
        return`Person Name:${this.personName} His age is:${this.age}`;
    }
};
const teacher = {
    mainSubject:"Maths",
    getDetails: function(){
        return `${this.__proto__.getDetails()}.Teachers main subject: ${this.mainSubject}`;
    }           //this refers to person name and age 
};              //polymorphism involke parent method using this.__proto__.method();
teacher.__proto__ = person;//inheritance
console.log(teacher.getDetails());//prints only teacher object but it still has the inheritance of person object 
                                    //you have to call the parent function into the child

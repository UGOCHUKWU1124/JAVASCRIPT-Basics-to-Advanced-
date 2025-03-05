//properties store the data
//method manipulates the data
// employee scenario

var employee = {
  firstName: "smith",
  lastName: "john",
  designation: "Asst.manager",
  salary: 3000,
  workExperienceYears: 5,

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  promote: function () {
    var isEligibleForPromotion; //local variable
    if (this.designation == "clerk") {
      if (this.workExperienceYears >= 3) {
        isEligibleForPromotion = true;
        this.designation = " Asst.Manager";
        this.salary += (this.salary * 10) / 100;
      } else {
        isEligibleForPromotion = false;
      }
    }
    //Asst.manager to manager
    else if (this.designation == "Asst.manager") {
      if (this.workExperienceYears >= 5) {
        isEligibleForPromotion = true;
        this.designation = " Manager";
        this.salary += (this.salary * 20) / 100;
      } else {
        isEligibleForPromotion = false;
      }
    }
    return isEligibleForPromotion; //true or false
  }, //end of function
};
console.log(employee);
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.designation);
console.log(employee.salary);
console.log(employee.workExperienceYears);

console.log(employee.getFullName());
if (employee.promote() == true) {
  console.log("Congratulations!The Employee Has Been Promoted.");
  console.log("Updated Salary:" + employee.salary);
  console.log("Updated Designation:" + employee.designation);
} else {
  console.log("Employee is not Eligible");
}

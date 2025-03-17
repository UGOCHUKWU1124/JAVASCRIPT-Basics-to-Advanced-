//parent = teacher , child = physicsTeacher
function Teacher(teacherName) {
    this.teacherName = teacherName;
};

function PhysicsTeacher(teacherName,mainSubject) {
    Teacher.call(this,teacherName); //teachername is the argument value of the teacher object. this.teachername = this
    this.mainSubject = mainSubject;
};
//call involkes the parent construction function
//call method is to invoke a function and also supply an object explictly as this keyword too that function
//the this keyword of the parent construction function and the this keyword of the child constructor function would access the same object
//we are supplying the this keyword of child to the parent by using call method

const physicsTeacher = new PhysicsTeacher("Scott","Physics");
console.log (physicsTeacher);
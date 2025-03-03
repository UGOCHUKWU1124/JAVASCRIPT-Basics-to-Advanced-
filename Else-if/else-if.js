var securedMarks = 57,
  grade;
if (securedMarks >= 80) {
  grade = "A";
} 
else if (securedMarks >= 60 && securedMarks < 80) {
  grade = "B";
}
else if (securedMarks >=50 && securedMarks <60){
    grade = "C"
}
else {
    grade="F"
}
console.log(grade);
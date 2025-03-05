//Goal:to get grade of students based on secured marks
/* secured marks>= 80 = A,60-79 = B,50-59 = C,40-49= D,
35-39=E,ELSE ANYTHING LESS THAN 35 IS F*/

var securedMarks = 75,
  grade;
if (securedMarks >= 35) 
{
  if (securedMarks >= 80) {
    grade = "A";
  } 
  else if (securedMarks >= 60 && securedMarks < 80) {
    grade = "B";
  } 
  else if (securedMarks >= 50 && securedMarks < 60) {
    grade = "C";
  }  
  else if (securedMarks >= 40 && securedMarks < 50) {
    grade = "D";
  }
  else if (securedMarks >=35 && securedMarks < 40) {
    grade = "E";
  }
  
}
else {
  grade = "F";
}

console.log(grade);

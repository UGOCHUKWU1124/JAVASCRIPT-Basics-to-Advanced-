//it converts nested arrays into plain and simple arrays plain array
var a = [10,[20,30,],40,50,[60,70]];
var b = a.flat();
console.log(a);//[10,[20,30,],40,50,[60,70]];
console.log(b);//[10, 20, 30, 40,50, 60, 70]
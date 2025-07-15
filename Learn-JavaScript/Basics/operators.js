let students = 30;
console.log(students);

//Arithmetic Operators 
students = students+1
students = students-1;
students = students*2;
students = students/2;
students = students**2;
students = students%5;
console.log(students);

//Augmented Assignment operator
let mango = 31;
mango += 2;
mango -= 2;
mango *= 2;
mango /= 2;
mango **= 2;
mango %= 2;

console.log(mango);

//Increment and decrement
let a = 10;
console.log(a++); // use first then increment 
console.log(a); // incremented val
console.log(++a); // first incr then use 

/*
Operator precedence 
1.parenthesis
2.exponents
3.multiplication and division and modulo
4.addition and subtraction
*/

let res = 1+2*3/4**2;
console.log(res);
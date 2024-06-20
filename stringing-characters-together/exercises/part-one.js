let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
// This didn't work: console.log(String(num.length));
num = String(num);
console.log(num.length);
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let deciNum = 123.45;
deciNum = String(deciNum);
console.log(deciNum.replace(".", "").length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let number = 2001.1;

if (String(number).includes(".")) {
    console.log(String(number).length-1);
} else {
    console.log(String(number).length);
}



/* This also didn't work properly: let number = 1000.00;
number = String(number);
if (number.includes(".")) {
    console.log(number.replace(".", "").length);
} else {
    console.log(number.length);
} */
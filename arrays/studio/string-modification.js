const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//let newStr = str.slice(3, 10) + str.slice(0, 3);
//console.log(newStr);
//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`With this super secret code ${str} becomes ${newStr}!`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//let strNum = input.question("How many letters do you want to move with the transposition code?: ");
//let codeString = str.slice(Number(strNum), 10) + str.slice(0, Number(strNum));
//console.log(`With this super secret code ${str} becomes ${codeString}!`);
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let strNum = input.question("How many letters do you want to move with the transposition code?: ");
let codeString = str.slice(Number(strNum), str.length) + str.slice(0, Number(strNum));
let defaultStr = 3;

if (Number(strNum) > str.length) {
    let codeString = str.slice(defaultStr, str.length) + str.slice(0, defaultStr);
    console.log(`ALERT: Longer number than ${str} entered. Defaulting shift to ${defaultStr}, so your code is ${codeString}!`)
} else if (Number(strNum) === str.length) {
    console.log(`ALERT: A perfect reverse? ${codeString} is not much of a code then, is it?`)
} else {
    console.log(`With this super secret code ${str} becomes ${codeString}!`);
}


let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = strings[0];
	let output = "";
	//TODO: 2. write the code required for this step
	if (check.includes(",") === true) {
		output = check.split(",").reverse().join(",");
	} else {
		console.log("Not a comma separated value.")
	}
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check = strings[1];
	let output = "";
//TODO: write the code required for this step
	if (check.includes(";") === true) {
		output = check.split(";").sort().join("-");
	} else {
		console.log("Not a semi-colon separated value.")
	}
  
	return output;
}

//4)
function reverseSpaces() {
	let check = strings[2];
	let output = "";
  //TODO: write the code required for this step
  if (check.includes(" ") === true) {
	output = check.split(" ").sort().reverse().join(" ");
} else {
	console.log("Not a space separated value.")
}
	return output;
}

//5)
function commaSpace() {
	let check = strings[3];
	let output = "";
	//TODO: write the code required for this step
	if (check.includes(", ") === true) {
		output = check.split(", ").reverse().join(",");
	} else {
		console.log("Not a comma space separated value.")
	}
	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};

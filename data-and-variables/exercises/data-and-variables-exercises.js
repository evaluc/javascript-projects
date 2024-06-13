// Declare and assign the variables below
let shuttleName = "Determination";
let shuttleSpeedMPH = 17500;
let distanceToMars = 225_000_000;
let distanceToMoon = 384_400;
let milesPerKM = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName)
console.log(typeof shuttleSpeedMPH)
console.log(typeof distanceToMars)
console.log(typeof distanceToMoon)
console.log(typeof milesPerKM)
// Calculate a space mission below
let milesToMars = (distanceToMars * milesPerKM);
let hoursToMars = (milesToMars / shuttleSpeedMPH);
let daysToMars = (hoursToMars / 24);
// Print the results of the space mission calculations below
console.log(shuttleName + " will take " + daysToMars + " days to reach Mars.")
// Calculate a trip to the moon below
let milesToMoon = distanceToMoon * milesPerKM;
let hoursToMoon = milesToMoon / shuttleSpeedMPH;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.")
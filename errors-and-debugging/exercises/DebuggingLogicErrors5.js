// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let crewReady = false;
let fuelLevel = 21000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   crewReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   crewReady = false;
}

console.log("crewReady = ", crewReady);

if (crewReady && launchReady) {
   console.log("Countdown initated...\n10\n9\n8\n7\n6\n5\n4\n3\n2\n1\n...Liftoff!")
} else {
   console.log("Launch scrubbed.")
}
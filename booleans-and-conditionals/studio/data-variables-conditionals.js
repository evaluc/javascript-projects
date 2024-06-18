// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760_000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850_000;
let fuelTempCelsius = -255;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;
//console.log(preparedForLiftOff)
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    preparedForLiftOff = false;
} //else {
    //preparedForLiftOff = true;
//}
//console.log(preparedForLiftOff)
// add logic below to verify all astronauts are ready
if (astronautStatus !== "ready") {
    preparedForLiftOff = false;
} //else {
    //preparedForLiftOff = true;
//}
//console.log(preparedForLiftOff)
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg > maximumMassLimit) {
    preparedForLiftOff = false;
} //else {
    //preparedForLiftOff = true;
//}
//console.log(totalMassKg)
//console.log(maximumMassLimit)
//console.log(preparedForLiftOff)
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < -300 || fuelTempCelsius > -150) {
    preparedForLiftOff = false;
} //else {
    //preparedForLiftOff = true;
//}
//console.log(preparedForLiftOff)
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%") {
    preparedForLiftOff = false;
} //else {
    //preparedForLiftOff = true;
//}
//console.log(preparedForLiftOff)
// add logic below to verify the weather status is clear
if (weatherStatus !== "clear") {
    preparedForLiftOff = false
} //else {
   // preparedForLiftOff = true;
//}
// Verify shuttle launch can proceed based on above conditions
//console.log(preparedForLiftOff)

if (preparedForLiftOff === true) {
    console.log("All systems are a go! Intiating space shuttle launch sequence.");
    console.log("--------------------------------------------------------------");
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:", crewMassKg, "kg");
    console.log("Fuel Mass:", fuelMassKg, "kg");
    console.log("Shuttle Mass", shuttleMassKg, "kg");
    console.log("Total Mass:", totalMassKg, "kg");
    console.log("Fuel Temperature:", fuelTempCelsius, "°C");
    console.log("Weather Status:", weatherStatus);
    console.log("--------------------------------------------------------------");
    console.log("Have a safe trip astronauts!");
} else {
    console.log("ALERT: Check sysytems!!!");
    console.log("--------------------------------------------------------------");
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Astronaut Count:", astronautCount);
    console.log("Crew Mass:", crewMassKg, "kg");
    console.log("Fuel Mass:", fuelMassKg, "kg");
    console.log("Shuttle Mass", shuttleMassKg, "kg");
    console.log("Total Mass:", totalMassKg, "kg");
    console.log("Fuel Temperature:", fuelTempCelsius, "°C");
    console.log("Weather Status:", weatherStatus);
    console.log("--------------------------------------------------------------");
    console.log("Maybe launch another day?");
}
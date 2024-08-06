// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {

    const buttonTakeOff = this.document.getElementbyID("takeoff");
    const buttonLanding = this.document.getElementbyID("landing");
    const buttonMissionAbort = this.document.getElementbyID("missionAbort");

    const buttonUp = this.document.getElementbyID("up");
    const buttonDown = this.document.getElementbyID("down");
    const buttonRight = this.document.getElementbyID("right");
    const buttonLeft = this.document.getElementbyID("left");

    let flightStatus = this.document.getElementbyID("flightStatus");
    let shuttleBackgroundColor = this.document.getElementbyID("shuttleBackground");
    let shuttleHeightMiles = this.document.getElementbyID("spaceShuttleHeight");


    buttonTakeOff.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    
        if(response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackgroundColor.style.backgroundColor = "blue";
            shuttleHeightMiles.innerHTML = "10,000";
        }
    });

    buttonLanding.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");

        flightStatus.innerHTML = "The Shuttle has landed.";
        shuttleBackgroundColor.style.backgroundColor = "green";
        shuttleHeightMiles.innerHTML = "0";
    });

    buttonMissionAbort.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that you want to abort the mission.");

        if (response) {
            flightStatus.innerHTML
            shuttleBackgroundColor.style.backgroundColor = "green";
            shuttleHeightMiles.innerHTML = "0";
        }
    })

}

window.addEventListener("load", init);
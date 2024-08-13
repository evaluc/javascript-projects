//TODO: Add Your Code Below
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let header = document.querySelector("h1");
            header.innerHTML += `: ${json.length}`;
            
            json.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

            let container = document.getElementById('container');
            
            for (let i = 0; i < json.length; i++) {
                container.innerHTML+= `
                <div class="astronaut">
                    <div class="bio">
                    <h3>${json[i].firstName} ${json[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[i].hoursInSpace}</li>
                            <li class="active">Active: ${json[i].active}</li>
                            <li>Skills: ${json[i].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}">
                </div>
                `;
            };
            
            for (let i = 0; i < json.length; i++) {
                let activePart = document.getElementsByClassName("active")
                if (json[i].active === true) {
                    activePart.style.color = "green";
                    //This doesn't work right now
            };
        };
        });
    });
});
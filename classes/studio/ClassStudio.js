//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    
    addScore(score) {
        this.scores.push(score);
    }

    average() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }

        return Math.round(sum / this.scores.length * 10) / 10;
    }

    status() {
        let rating = "Rejected";
        if (this.average() >= 90) {
            rating = "Accepted";
        } else if (this.average() < 90 && this.average() >= 80) {
            rating = "Reserve";
        } else if (this.average() < 80 && this.average() >= 70) {
            rating = "Probationary";
        }

        return rating;
    }
}

let bubbaBear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);

let merryMaltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);

let gladGator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);

console.log(`${bubbaBear.name} earned an average test score of ${bubbaBear.average()} and has a status of ${bubbaBear.status()}`);
console.log(`${merryMaltese.name} earned an average test score of ${merryMaltese.average()} and has a status of ${merryMaltese.status()}`);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()} and has a status of ${gladGator.status()}`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

while (gladGator.status() == "Probationary") {
    gladGator.addScore(100);
}

console.log(gladGator.scores);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()} and has a status of ${gladGator.status()}`);

while (gladGator.status() != "Accepted") {
    gladGator.addScore(100);
}



console.log(gladGator.scores);
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()} and has a status of ${gladGator.status()}`);
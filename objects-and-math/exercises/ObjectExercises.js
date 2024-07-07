let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function() {
      return Math.round(Math.random()*10)
   }
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function() {
      return Math.round(Math.random()*10)
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function() {
      return Math.round(Math.random()*10)
   }
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function() {
      return Math.round(Math.random()*10)
   }
};

let bug = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function() {
      return Math.round(Math.random()*10)
   }
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, bug];

function crewReports(animal) {
   return `${animal["name"]} is a ${animal["species"]}. They are ${animal["age"]} years old and ${animal["mass"]} kilograms. Their ID is ${animal["astronautID"]}.`;
};

function fitnessTest(animals) {
   let results = [];
   let steps;
   let turns;

   for (i = 0; i < animals.length; i++) {
      steps = 0;
      turns = 0;

   while(steps < 20) {
      steps += animals[i].move();
      turns++;
   }
   
   results.push(`${animals[i].name} took ${turns} turns to take 20 steps.`);
}

   return results
};


console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

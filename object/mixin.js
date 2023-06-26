function Human(name) {
  this.name = name;
  this.talk = () => console.log(`My name is ${this.name}`);
}

function Worker(job) {
  this.job = job;
  this.work = () => console.log(`My job is ${this.job}`);
}

function Bob(job) {
  Human.call(this, "Bob"); // this se fait assigner les propriétés de Human
  Worker.call(this, job); // this se fait assigner les propriétés de Worker
}

Bob.prototype = Object.create(Human.prototype); // il faut choisir un prototype
let bob = new Bob("engineer");
console.log(bob); // Human {name:'Bob', talk : function, job : 'engineer', work : function}
bob.work(); // My job is engineer;

Human.prototype.age = 25; // Bob est Human
Worker.prototype.salary = 50000; // Bob n'est pas un Worker

console.log(`Bob is ${bob.age} years old`); // Bob is 25 years old
console.log(`Bob salary is ${bob.salary} $`); // Bob salary is undefined $

bob.age = 35;
console.log(`Bob is now ${bob.age} years old`); // Bob is 35 years old

function Tim(job) {
  // On construit un objet Human et Worker et on les copie dans un objet vide
  return Object.assign({}, new Human("Tim"), new Worker(job));
}

let tim = Tim("engineer");
console.log(tim);
tim.work();
Tim.prototype.age = 25;
console.log(`Tim is ${tim.age} years old`); // tim n'est pas de type Tim

tim.age = 25; // nouvelle propriété
console.log(`Tim is ${tim.age} years old`); // Tim is 25 years old

// Using separate factories to build incremental objects

function HumanFactory(name, obj = {}) {
  return Object.assign(obj, {
    name: name,
    age: 25,
    talk: function () {
      console.log(`My name is ${this.name}`);
    },
  });
}
function WorkerFactory(job, obj = {}) {
  return Object.assign(obj, {
    job: job,
    work: function () {
      console.log(`My job is ${this.job}`);
    },
  });
}

const mary = WorkerFactory("CEO", HumanFactory("Mary"));
console.log(mary); // {name:'Mary', age: 25, talk: function, job: 'CEO', work: function}
mary.work(); // My job is CEO
mary.talk(); // My name is Mary
console.log(`Mary is ${mary.age} years old`); // Mary is 25 years old

const supervisor = WorkerFactory("Supervisor");
console.log(supervisor); // { job:'Supervisor', work: function}
supervisor.work(); // My job is Supervisor
supervisor.talk(); // Erreur : supervisor.talk is not a function

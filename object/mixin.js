/*
    Un objet peut avoir un seul prototype, donc il n'y a pas d'héritage multiple.
    Il est possible d'assigner des attributs d'un objet à un autre : mixin.
    Mixin est un objet qui possède des attributs qui sont utilisés par d'autres objets.
*/

/// Mixin avec des constructeurs

function Human(name) {
  this.name = name;
  this.talk = () => console.log(`My name is ${this.name}`);
}

function Worker(job) {
  this.job = job;
  this.work = () => console.log(`My job is ${this.job}`);
}

function Bob(job, name) {
  Human.call(this, name); // this se fait assigner les propriétés de Human
  Worker.call(this, job); // this se fait assigner les propriétés de Worker
}

Bob.prototype = Object.create(Human.prototype); // on peut choisir un prototype
const bob = new Bob("engineer", "Bob");
console.log(bob); // Human {name:'Bob', talk : function, job : 'engineer', work : function}
bob.work(); // My job is engineer;

Human.prototype.age = 25; // Bob est affecté par le changement de son prototype
Worker.prototype.salary = 50000; // Bob n'est pas un Worker

console.log(`Bob is ${bob.age} years old`); // Bob is 25 years old
console.log(`Bob salary is ${bob.salary} $`); // Bob salary is undefined $

bob.age = 35;
console.log(`Bob is now ${bob.age} years old`); // Bob is 35 years old

/// Mixin avec une usine

function EmployeeFactory(job, name) {
  // On construit un objet Human et Worker et on les copie dans un objet vide
  return Object.assign({}, new Human(name), new Worker(job));
}

const tim = EmployeeFactory("engineer", "Tim");
console.log(tim); // {name: 'Tim', talk : function, job: 'engineer', work: function}
tim.work();
EmployeeFactory.prototype.age = 25; // tim n'est pas de type EmployeeFactory
console.log(`Tim is ${tim.age} years old`); // tim is undefined years old

tim.age = 25; // nouvelle propriété sur l'objet directement
console.log(`Tim is ${tim.age} years old`); // Tim is 25 years old
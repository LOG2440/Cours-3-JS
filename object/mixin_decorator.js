/*
  La notion de mixin peut être utilisée avec les patrons Factory et Décorateur
  pour créer des fonctions qui permettent la création d'objets modulaires.
*/

function HumanFactory({ name, age }, obj = {}) {
  return Object.assign(obj, {
    name, // raccourci pour name: name
    age,
    talk: function () {
      console.log(`My name is ${name}`);
    },
  });
}
function WorkerFactory(title, obj = {}) {
  return Object.assign(obj, {
    title,
    work: function () {
      console.log(`My job is ${title}`);
    },
  });
}

// Modification d'un objet déjà existant
const promoted = new WorkerFactory("Engineer", { name: "Steve", job: "Intern" });
promoted.work(); // My job is Engineer

const mary = WorkerFactory("CEO", HumanFactory({ name: "Mary", age: 25 }));
console.log(mary); // {name:'Mary', age: 25, talk: function, title: 'CEO', work: function}
mary.work(); // My job is CEO
mary.talk(); // My name is Mary
console.log(`Mary is ${mary.age} years old`); // Mary is 25 years old

const supervisor = WorkerFactory("Supervisor");
console.log(supervisor); // { title:'Supervisor', work: function}
supervisor.work(); // My job is Supervisor
supervisor.talk(); // Erreur : supervisor.talk is not a function

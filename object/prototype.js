/*
    L'héritage en JS se fait à travers la notion de Prototype qui est une autre instance d'objet JS
    Chaque objet a une chaîne de prototypes (1 à la fois) jusqu'à "null"
    Si on cherche un attribut d'un objet et on ne le trouve pas sur l'bojet, on remonte dans la chaîne jusqu'à la fin
    Modifier le prototype d’un objet affecte toutes les instances avec le même prototype
*/

// Partage de méthodes à travers le Prototype
const arr = [1, 2, 3, 4];
Object.getPrototypeOf(arr).getLast = function () { return this[this.length - 1]; }
arr.getFirst = function () { return this[0]; } // modification de l'instance "arr"
const newArr = ['a', 'b', 'c', 'd']; // tous les tableaux partagent le même prototype
const lastElement = newArr.getLast(); // 'd’
// const firstElement = newArr.getFirst(); // Erreur : newArr.getFirst is not a function


// Exemple d'utilisation de prototypes avec des constructeurs

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isOld = function () {
    return this.age >= 30;
  };
}

const paul = new Person("Paul", 25);
console.log(paul.isOld()); // false
console.log(paul.constructor); // Person()
console.log(Object.getPrototypeOf(paul)); // Person {}
console.log(paul.constructor.prototype === Object.getPrototypeOf(paul)); // true
console.log(paul.__proto__); // Person {}
console.log(paul.__proto__.__proto__); // {}
console.log(paul.__proto__.__proto__.__proto__); // null

const marie = Object.create(paul);
console.log(marie); // Person {} <- notez l'objet vide
console.log(marie.age); // 25
marie.age = 31;
console.log(marie); // Person { age: 31}
console.log(marie.isOld()); // true
console.log(marie.constructor); // Person()
console.log(marie.__proto__); // Person {name: 'Paul', age : 25, isOld : function}
console.log(marie.__proto__.__proto__); // Person {}
console.log(marie.__proto__.__proto__.__proto__); // {}
console.log(marie.__proto__.__proto__.__proto__.__proto__); // null

Object.getPrototypeOf(marie).incrementAge = function (step = 1) {
  this.age += step;
};

console.log(Object.hasOwn(marie, "incrementAge")); //false
console.log(Object.hasOwn(paul, "incrementAge")); // true

marie.incrementAge(2);
console.log(marie.age); // 33
paul.incrementAge();
console.log(paul.age); //26

const michel = new Person("Michel", 45);
console.log(michel.__proto__); // Person {}  michel--> Person --> Object --> null
Object.setPrototypeOf(michel, paul); // michel --> paul --> Person --> Object --> null
console.log(michel.__proto__); // Person {name: 'Paul', age : 25, isOld : function}

Object.getPrototypeOf(michel).email = "michel@polymtl.ca";
console.log(paul.email); // michel@polymtl.ca
marie.email = "marie@polymtl.ca";
console.log(marie); // Person { age :33, email: 'marie@polymtl.ca'}
const eve = new Person("Eve", 25);
console.log(eve.email); // undefined
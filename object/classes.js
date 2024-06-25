/*
  La syntaxe class rend le JS similaire à d'autres langages orientées objet (C++,Java,etc)
  Les classes utilisent la notion des prototypes quand même : attention à this
  Il est possible d'hériter d'une classe avec le mot clé extends
  Depuis ES2022 : propriétés privées
    Nom débute par # (caractère obligatoire)
    Lance une erreur si on essaie de les utiliser
    Non-accessibles par les classes enfant
*/

class Person {
  #name = "";
  constructor(name, age) {
    this.#name = name; // privé
    this.age = age; // publique
    this.#sayHello(); // privé
  }

  get name() {
    return this.#name;
  }

  isOld() {
    return this.age >= 30;
  }

  #sayHello() {
    console.log(`My name is ${this.#name}`);
  }
}

const paul = new Person("Paul", 25);
console.log(paul); // Person { age: 25 }
console.log(paul.hasOwnProperty("isOld")); // false
console.log(Object.getPrototypeOf(paul).hasOwnProperty("isOld")); // true

paul.isOld(); // false

// Note : Chrome DevTools donne accès aux attributs privés des objets
//console.log(paul.#name); // N'est pas accessible

// Les classes sont équivalentes à des fonctions constructeur
function PersonFunction(personName, age) {
  let name = personName; //privée grâce aux fermetures
  this.age = age;
  const sayHello = function () {
    console.log(`My name is ${name}`);
  };
  sayHello();
}
PersonFunction.prototype.isOld = function () {
  return this.age >= 30;
};

const marie = new PersonFunction("Marie", 31);
console.log(marie); // PersonFunction { age: 31}
console.log(Object.getPrototypeOf(marie).hasOwnProperty("isOld")); // true
console.log(marie.hasOwnProperty("isOld")); // false

marie.isOld(); // true
console.log(marie.name); // undefined


// Héritage 
// La méthode super() doit être appelée avant d'utiliser this
// super() est le constructeur de la classe parent
class Student extends Person {
  constructor(name, age, id) {
    super(name, age); // nécessaire avant l'utilisation de this
    this.id = id;
  }
}
const michel = new Student("Michel", 35, 1234);
console.log(michel.name); // Michel

// Attention à l'utilisation de fonctions qui font référence à this
const isOld = michel.isOld;
console.log(isOld()); // Cannot read properties of undefined (reading 'age')
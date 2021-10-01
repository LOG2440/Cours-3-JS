class Person {
  #name = "";
  constructor(name, age) {
    this.#name = name; // privée
    this.age = age; // public
    this.#sayHello();
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
console.log(paul.__proto__.hasOwnProperty("isOld")); // true
paul.isOld(); // false

// Héritage
class Student extends Person {
  constructor(name, age, id) {
    super(name, age); // nécessaire avant this
    this.id = id;
  }
}
const michel = new Student("Michel",45, 1234);
console.log(michel.name); // Michel



function PersonFunction(personName, age) {
  let name = personName; //privé
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
console.log(marie.__proto__.hasOwnProperty("isOld")); // true
marie.isOld(); // true
console.log(marie.name); // undefined
marie.sayHello(); // Erreur : marie.sayHello is not a function

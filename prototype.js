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
marie.incrementAge(2);
console.log(marie.age); // 33
paul.incrementAge(1);
console.log(paul.age); //26

const michel = new Person("Michel", 45);
console.log(michel.__proto__); // Person {}  michel--> Person --> Object --> null
Object.setPrototypeOf(michel, paul); // michel --> paul --> Person --> Object --> null
console.log(michel.__proto__); // Person {name: 'Paul', age : 25, isOld : function}

Object.getPrototypeOf(michel).email = "michel@polymtl.ca";
console.log(paul.email); // michel@polymtl.ca
marie.email = "marie@polymtl.ca";
console.log(marie); // Person { age :33, email: 'marie@polymtl.ca'}
const eve = new Person("Eve",25);
console.log(eve.email); // undefined
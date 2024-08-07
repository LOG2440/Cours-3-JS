/*
  this est dynamique en JS,et représente son contexte d'exécution
  SAUF pour les fonctions fléchées (()=>{}) où this représente son contexte de création.
  Par défaut : l'objet global.
  Dans un objet : l'objet lui-même.
  Dans un constructeur : l'objet retourné
  Il est possible de spécifier la valeur de this avec les méthodes bind(),call() et apply() d'une fonction
*/

// Contexte global
console.log(this); // objet Window
function printThis() {
  console.log(this);
} // objet Window
printThis();

// Contexte d'un objet
function MyObj() {
  return {
    a: 123,
    f: function () {
      console.log(this);
    },
  };
}
let obj = MyObj();
obj.f(); // donne {a:123, f:ƒ}

// Contexte d'un constructeur
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.isOld = function () {
    return this.age >= 30;
  };
  this.printInfo = () => {
    console.log(`${this.name} is ${this.age}!`);
  };
}
const paul = new Person("Paul", 25);
const isOld = paul.isOld(); // false
paul.printInfo(); // Paul is 25!

// Quelle est la différence si on ajoute printInfo de telle manière? ()
paul.printInfo = () => {
  console.log(`${this.name} is ${this.age}!`);
};
paul.printInfo();

// Fonction fléchée
const obj2 = {
  i: 10,
  b: () => console.log(this.i),
  c: function () {
    console.log(this.i);
  },
};
obj2.b(); // retourne undefined : Window.i n'existe pas
obj2.c(); // retourne 10
const obj3 = { i: 20 };

// Utilisation de call() : la fonction est appelée avec obj3 référé par "this" 
obj2.c.call(obj3); // retourne 20
obj2.b.call(obj3); // retourne toujours undefined


// Changement de contexte lorsqu'on utilise une fonction hors de son objet
const myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

myButton.click(); // OK clicked
const looseClick = myButton.click; // hors de l'objet
looseClick(); // undefined clicked

// Utilisation de bind() : lorsque la fonction sera appelée, "this" fera référence à myButton 
const boundClick = myButton.click.bind(myButton);
boundClick(); //OK clicked
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

// Utilisation de call()
obj2.c.call(obj3); // retourne 20
obj2.b.call(obj3); // retourne toujours undefined

const myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

myButton.click(); // OK clicked
let looseClick = myButton.click; // hors de l'objet
looseClick(); // undefined clicked
let boundClick = myButton.click.bind(myButton);
boundClick(); //OK clicked

/*
  Exemple de this dynamique ou prédéfini avec un bouton
  HTML : <button id ='btn'>Cliquez ici!</button>
*/
function printThis() {
  console.log(`Source : ${this}`);
}
//"Source : [object HTMLButtonElement]"
document.getElementById("btn").addEventListener("click", printThis);

// "Source : [object Window]"
document.getElementById("btn").addEventListener("click", printThis.bind(this)); 
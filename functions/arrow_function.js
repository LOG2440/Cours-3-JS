/*
  Les fonctions fléchées (arrow function) en JS permettent une notation abrégée :
    (args1, arg2N) => {statement1; statementN}
    Les ( ) et { } peuvent être omis s'il y a 1 seul élément
    Sans { }, return est implicite
  Note : pas d'objet this et ne peut pas être utilisé comme constructeur
*/

function calc(a, b, op) {
  return op(a + b);
}

const square = function (x) {
  return x * x;
};
calc(1, 2, square); // 9

// Arrow function
const squareA = (x) => {
  return x * x;
};
calc(1, 2, squareA); // 9

// return et {} implicites
const squareB = (x) => x * x;
calc(1, 2, squareB); // 9

// () implicites
const squareC = x => x * x;
calc(1, 2, squareC); // 9

// Logique directement dans l'appel
calc(1, 1, x => x * x); 4

// () nécessaires pour un retour d'objet
const returnObj = (x) => ({ value: x });

// this avec une arrow function
const obj = {
  a: "allo",
  getProp: function () {
    return this.a;
  },
  getPropArr: () => this.a,
};

console.log(obj.getProp()); // allo
console.log(obj.getPropArr()); // undefined

obj.getThis = () => this; // retourne l'objet global
console.log(obj.getThis() === globalThis); // true

/* 
  Pour plus exemples d'utilisation des fonctions fléchées comme des fonctions de rappel,
  consultez les exemples des méthodes de tableaux dans le répertoire "array"
*/
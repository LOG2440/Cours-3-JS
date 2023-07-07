/*
    Déclaration des variables en JS.
    Généralement, l'utilisation du mot clé var est à éviter et le mot clé const est à prioriser.
*/

// Hoisting
console.log(hoist);  //undefined
var hoist = 'ma variable';

//Ce qui arrive vraiment
var hoist = undefined;
console.log(hoist); // undefined
hoist = 'ma variable';

function globalVariable() {
  a = 20;
  var b = 100;
  console.log(b); // 100 variable locale
}
globalVariable();
console.log(a); // 20
console.log(globalThis.a); // 20 
console.log(b); // Uncaught ReferenceError: b is not defined

// Portée de fonction pour var
function functionScope() {
  var getI;
  for (var i = 0; i < 2; i++) {
    if (i === 0)
      getI = function () {
        return i;
      };
  }
  console.log(`Valeur de i : ${i}`);
  console.log(`Valeur de getI() : ${getI()}`);
}
functionScope();

// Portée de bloc pour let et const
function blockScope() {
  let a = 30;
  if (a > 20) {
    const b = 20 + a;
    a = b - 10;
  }
  console.log(a); // 40
  console.log(b); // b is not defined
}
blockScope();


// Valeur par défaut
let letVariable; // undefined
letVariable = 20; // 20
const constVariable = 10; // assignation obligatoire

// const ne rend pas une variable immutable
const arr = [1, 2, 3, 4];
// arr = [2, 3, 4]; // N'est pas permis
arr[0] = 5;
console.log(arr); // [5, 2, 3, 4]

const obj = { str: "allo" }
obj.str = 42;
console.log(obj); // {str: 42};
// Pour avoir de l'immutabilité
Object.freeze(obj); // "gèle" les attributs de l'objet
obj.str = false; // n'a aucun effet
console.log(obj); // {str: 42};
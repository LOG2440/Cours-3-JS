// // Hoisting
// console.log(hoist);  //undefined
// var hoist = 'ma variable';

// // Ce qui arrive vraiment
// var hoist;
// console.log(hoist); // undefined
// hoist = 'ma variable';

function hoist() {
  a = 20;
  var b = 100;
  console.log(b); // 100
}
hoist();
console.log(a); // 20
// console.log(b); // Uncaught ReferenceError: b is not defined

function functionScope() {
  var getI;
  for (var i = 0; i < 2; i++) {
    if (i === 0)
      getI = function () {
        return i;
      };
  }
  console.log(getI());
}

functionScope();

// Portée de bloc
function blockScope() {
  let a = 10;
  if (a > 20) {
    let b = 20;
  }
  console.log(a); // 10
  // console.log(b); // b is not defined
}

// console.log(letVar);
let letVariable; // undefined
letVariable = 20; // 20
const constVariable = 10; // assignation obligatoire

// Const n'est pas immutable
const arr = [1, 2, 3, 4];
// arr = [2, 3, 4]; // N'est pas permis
arr[0] = 5;
console.log(arr); // [5, 2, 3, 4]


const obj = { str: "allo"}
obj.str = 42
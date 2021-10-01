function findLongestArr() {
  let longest = "";
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i].length > longest.length) {
      longest = arguments[i];
    }
  }
  return longest;
}

function findLongest(...myArguments) {
  // on filtre le tableau myArguments
  return myArguments.sort(function (a, b) {
    return b.length - a.length;
  })[0];
}
const longest = findLongest("a", "b", "abc", "abcdef");
console.log(longest); // abcdef

// Expression anonyme
const increment = function (x) {
  return x + 1;
};
const res = increment(3); // res = 4

// Expression nommée
const math = {
  factorial: function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1);
  },
};
const fact4 = math.factorial(4); // 24

// IIFE
const uniqueId = (function () {
  let count = 0; // n'est pas accessible hors d'ici
  return function () {
    ++count;
    return `id_${count}`;
  };
})(); // count existe après l'exécution grâce aux fermetures

console.log(uniqueId()); // "id_1"
console.log(uniqueId()); // "id_2"
console.log(uniqueId()); // "id_3"

const obj1 = { contenu: "obj1 initial" };
const obj2 = { contenu: "mon obj2" };
function objectModifier(obj1, obj2) {
  obj1.contenu = "obj1 modifié";
  obj2 = { contenu: "nouveau obj2" };
}
const returnVal = objectModifier(obj1, obj2);

console.log(obj1); // {contenu : 'obj1 modifié'}
console.log(obj2); // {contenu : 'mon obj2'}
console.log(returnVal); // undefined

function printer(value) {
  console.log(value);
}
function sum(a, b) { return a + b; }
function mult(a,b) { return a * b; }
function calculator(
  a, 
  b, 
  operationCallback, 
  resultCallback
) {
  resultCallback(operationCallback(a, b));
}

calculator(1, 2, sum, printer);  // 3 
calculator(1, 2, mult, printer); // 2 

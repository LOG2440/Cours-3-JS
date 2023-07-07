/*
    JS a 2 manières de comparer des valeurs:
    Comparaison faible (==, >,<) avec conversion de type implicite
    Comparaison stricte (===, !==) sans conversion de type
    La comparaison stricte est à prioriser la majorité du temps
*/

/// Comparaison faible
console.log(123 == '123'); // true
console.log("hello" < 5); // false puisque 'hello' -> NaN

/// Comparaison stricte
console.log(0 === '0'); // false
console.log(123 === '123'); // false
console.log(123 === parseInt('123')); // true puisque le type des 2 valeurs est number

/// Comparaison d'objets
const obj1 = { val: 2 };
const obj2 = { val: 2 };
const obj3 = { title: "someValue"};
console.log(obj1 == obj3); // false
console.log(obj1 === obj2); // false
const obj4 = Object.create(obj1); // obj1 devient le prototype de obj4
console.log(Object.getPrototypeOf(obj4) === obj1); // true

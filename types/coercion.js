/*
    La coercition de type est faite implicitement par JS.
    3 types : string, boolean et number
    Un objet doit être converti en primitive pour être comparés
*/

/// Coercition en String
const val1 = '5';
const val2 = 4;
const sum = val1 + val2;
console.log(sum); // 54
console.log('true' + false); // truefalse
console.log(1 + 2 + 'allo'); // 3allo
console.log('allo' + 1 + 2); // allo12

/// Coercition en Boolean
const val3 = 123;
const val4 = 'allo';
const isTrue = val3 && val4; // allo
if (isTrue) console.log('Les 2 valeurs sont vraies');

console.log(!!(10 + 5)); // !!a permet de convertir a en boolean
console.log(!!"false"); // true : "false" est truthy alors !(!(true)) === true

/// Coercition en Number
console.log(100 + 20); // 120
console.log("12" / 6); // 2
console.log(true + false); // 1
console.log(123 == '123') // true

/// Coercition explicite avec des String
const arr = ['1', '-5', '12.0', '23.45'];
console.log(arr); // ['1', '-5', '12.0', '23.45']
const arrNumbers = arr.map(parseFloat);
console.log(arrNumbers); // [1, -5, 12, 23.45]

/// Coercition avec Object
const obj = { val: 5 };
console.log(obj + 1); // [object Object]1
const obj2 = { val: 3 };
console.log(obj + obj2); // [object Object][object Object]

obj.add = function (obj2) { this.val += obj2.val };
obj.add(obj2); // à noter que add() existes sur obj seulement
console.log(obj.val); // 8 

/// Coercition avec des tableaux
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1 + arr2); // [1,2,34,5,6]
console.log(arr1.concat(arr2)); // [1,2,3,4,5,6]
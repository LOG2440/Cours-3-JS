/*
    Number : chiffre à virgule flottante
    Les opérations mathématiques sont sécuritaires et vont toujours retourner une valeur de type number
    Valeur spéciale NaN (Not a Number) est quand même de type Number
*/
const a = 10;
const b = 4;
const c = a / b;
console.log(c, typeof c); // 2.5 number
console.log('allo' / c); // NaN
console.log(1 / 0) // Infinity
console.log( a + b * c + 'allo'/b); // 10 + 4 * (10/4) + NaN = NaN

// Attention aux arrondis avec des chiffres à virgule flottante
const val1 = 0.1;
const val2 = 0.2;
console.log(val1+val2); // 0.30000000000000004

// Autres formats :  binaire, octal, hex
const bin = 0b11; /// 3
const hex = 0x1f; // 31
const dec = 10; // 10
const sum = dec + bin + hex; // 44
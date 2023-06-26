/*
    String : chaîne de caractères (1 ou plus)
    Les notation 'abc' et "abc" sont interchangeables
    La notation `abc ${variable}` permet de créer des chaînes avec des variables externes (interpolation)
    La chaîne est immutable : on ne peut pas la modifier une fois créée
*/
const str2 = 'Une chaîne de caractères';
const str = "Une chaîne de caractères aussi";

const a = 20;
const b = 10;
const strTemplate = `La somme de ${a} et ${b} est : ${a + b}`;
console.log(strTemplate);

const strWithSpaces = `Les sauts de ligne
    et les tabulations sont
conservés ici!`;
console.log(strWithSpaces);

/// Immutabilité : string ne peut pas être modifiée après sa création
let firstName = 'michel';
firstName[0] = 'M';
console.log(firstName); // michel
firstName[0].toUpperCase();
console.log(firstName); // michel

/// Solution : créer une nouvelle chaîne avec la 1re lettre + le reste
firstName = firstName[0].toUpperCase() + firstName.slice(1);
console.log(firstName); // Michel
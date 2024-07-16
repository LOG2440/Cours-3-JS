/*
    La boucle for est la base de l'itération sur un tableau en JS
    La syntaxe est similaire à celle d'une boucle for en C++/Java :
        for (initialisation; condition; incrémentation) { ... }
    JS supporte également les boucles while et do...while
*/

function iterate(array, predicate) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}

const newArr = iterate([1, 42, 12, 5, -8, 37], x => x % 2 === 0);
console.log(newArr);

// JS supporte do...while et while aussi

let counter = 0;
const MAX_VALUE = 10;
while (counter < MAX_VALUE) {
    counter++;
}
console.log(counter); // 10

counter = 0;
do {
    counter++;
} while (counter < MAX_VALUE);
console.log(counter); // 10

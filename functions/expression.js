/*
    JS permet de déclarer des fonctions à travers des expressions qui sont assignées à une variable.
    L'expression peut être anonyme (sans nom).
    IIFE (Immediately Invoked Function Expression) : fonction créée et exécutée en même temps sans une référence permenante.
*/

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

// IIFE. La fonction qui contient la variable count ne peut pas être accédée après son exécution.
const uniqueId = (function () {
    let count = 0; // accessible seulement ici
    return function () {
        ++count;
        return `id_${count}`;
    };
})(); // count existe après l'exécution grâce aux fermetures

console.log(uniqueId()); // "id_1"
console.log(uniqueId()); // "id_2"
console.log(uniqueId()); // "id_3"
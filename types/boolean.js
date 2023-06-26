/*
    Boolean : peut être true ou false
    Par défaut, toutes les valeurs sont truthy (true) sauf certaines qui sont falsy (false)
    JS essaie de convertir une variable d'un autre type en boolean en fonction du contexte
*/

function isGreater(a, b) {
    // a ? b : c est un raccourci pour if(a){b} else {c}
    const result = `${a} est plus ${a > b ? 'grand' : 'petit'} que ${b}`;
    console.log(result);
}

console.log(isGreater(10, 4)); // 10 est plus grand que 4
console.log(isGreater(2, 5)); // 2 est plus petit que 5

function isTruthy(value) {
    if (value) {
        console.log(`${value} est traitée comme TRUE`);
    }
    else {
        console.log(`${value} est traitée comme FALSE`);
    }
}
/// Les valeurs suivantes vont toujours être fausses
const falsyVals = [false, null, undefined, 0, NaN, '', ""];

falsyVals.forEach(isTruthy);

/// Attention : les valeurs suivantes vont être vraies, mêmes si on peut penser l'inverse
const truthyVals = ['false', "0", Infinity, -1, "empty"];
truthyVals.forEach(isTruthy);
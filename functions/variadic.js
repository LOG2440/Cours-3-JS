/*
    Les fonctions en JS sont variadiques : on peut avoir un nombre arbitraire d'arguments
    L'objet arguments permet d'accéder à tous les arguments.
    Note : les attributs d'arguments peuvent être accédés à travers [index], mais ce n'est pas
    un objet de type Array. 
    La syntaxe spread (...abc) permet de récupérer les arguments dans un tableau (Array) abc
*/

function findLongestArr() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i].length > longest.length) {
            longest = arguments[i];
        }
    }
    return longest;
}

const longest = findLongest("a", "b", "abc", "abcdef");
console.log(longest); // abcdef

function findLongest(...myArguments) {
    // on filtre le tableau myArguments
    return myArguments.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
const longestString = findLongest("a", "b", "abc", "abcdef");
console.log(longestString); // abcdef

/// Autres utilisation de l'opérateur spread : Math.min(...values)
const arr = [1,2,42,1523,-2,33];
const min = Math.min(...arr);
console.log(min);
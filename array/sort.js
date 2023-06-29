/*
    La fonction sort permet de faire un tri dans les éléments d'un tableau 
    La fonction a la signature suivante : sort(compareFn)
        Par défaut, sort() convertit les éléments du tableau en string si aucune fonction de comparaison n'est utilisée
    La logique de tri est contrôlé par une fonction qui prend 2 éléments consécutifs dans le tableau (a,b)
        Si a < b, la fonction retourne -1
        Si a > 1, la fonction retourne 1
        Sinon, la fonction retourne 0
        Si aucun élément n'est trouvé, la réponse est un tableau vide
    Attention : sort modifie le tableau sur lequel elle est appelée
    La méthode toSorted() introduite par ES2023 fait une copie avant le tri
*/

const myArray = ["a", "b", "abc", "unTableau", "45"];
const sortByLength = (a, b) => a.length - b.length > 0 ? 1 : a.length - b.length < 0 ? -1 : 0;

// sort() modifie le tableau initial
const longestSort = myArray.sort(sortByLength);
console.log(longestSort); // ['unTableau','abc','45','a','b']
console.log(myArray); // ['unTableau','abc','45','a','b']

// Comparaison par défaut avec la représentation string des éléments
const numbers = [1, 43, 11, 2, 135];
console.log(numbers.sort()); // [1, 11, 135, 2, 43]

// Utilisation de toSorted() d'ES2023
const users = [{ id: 15 }, { id: 2 }, { id: 34 }, { id: 3 }];
const sortedUsers = users.toSorted((a, b) => a.id - b.id); //
console.log(sortedUsers); // [ {id: 2 }, {id: 3 }, {id: 15 }, {id: 34 } ]
console.log(users); // [ {id: 15 }, {id: 2 }, {id: 34 }, {id: 3 } ]

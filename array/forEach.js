/*
    La fonction forEach permet d'appliquer une fonction sur chacun des éléments du tableau 
        La fonction a la signature suivante : callbackFn(element,index,array)
    Attention : forEach peut modifier les éléments du tableau.
        Si vous voulez appliquer une transformation dans un nouveau tableau, utilisez map()
*/

// Application d'une fonction sur chaque éléments du tableau
const numbers = [0, 1, 2, 3, 4, 5];
numbers.forEach((val, index, arr) => (arr[index] = val * val));
console.log(numbers); // [0, 1, 4, 9, 16, 25]

// forEach est équivalent à une boucle for classique
function myForEach(array, callback) {
    const startingLength = array.length;
    for (let i = 0; i < startingLength; i++) {
        callback(array[i], i, array);
    }
}  
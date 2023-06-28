// sort : retourne un tableau filtré selon le résultat d'un callback(a,b)
// Si a < b, on retourne -1, a > b, on retourne 1, sinon 0
// par défaut, le filtre est fait en ordre Lexique : ['3','11'].sort() donne ['11','3']
const longestSort = myArray.sort((a, b) => b.length - a.length);
console.log(longestSort); // ['unTableau','abc','45','a','b']

// forEach : applique un callback sur chaque valeur du tableau
// callback prend la valeur, index et une référence vers le tableau
// Attention : ceci peut modifier le tableau
const squarred = [0, 1, 2, 3, 4, 5];
squarred.forEach((val, index, arr) => (arr[index] = val * val));
console.log(squarred); // [0, 1, 4, 9, 16, 25]

// map : applique un callback sur chaque valeur et retourne un nouveau tableau
// callback prend la valeur, index et une référence vers le tableau
// Si vous n'avez pas besoin de la réponse, utilisez forEach
const numArray = [2, -3, 10, -20, 5];
const absoluteArray = numArray.map((val, index, arr) => Math.abs(val));
console.log(absoluteArray); // [2, 3, 10, 20, 5]
console.log(numArray); // [2, -3, 10, -20, 5]

// reduce : applique une fonction de reduction sur chaque élément et retourne une seule valeur
// la fonction de réduction prend un accumulateur qui est passé à chaque prochain appel
// on peut optionellement avoir une valeur initiale
const values = [1, 2, 3, 4, 5];
let sum = values.reduce((acc, value) => acc + value);
console.log(sum); // 15
sum = values.reduce((acc, value) => acc + value, 100);
console.log(sum); // 115

const phrase = "aaAabb dddDD hhcc";
const letterArr = phrase.toLowerCase().split("");
const frequencies = letterArr.reduce((frequency, letter) => {
  frequency[letter] = frequency[letter] + 1 || 1;
  return frequency;
}, {});
console.log(frequencies); // {a : 4, b : 2, ' ' : 2, d : 5, h : 2, c : 2}

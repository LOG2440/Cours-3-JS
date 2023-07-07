/*
	La fonction reduce applique une fonction de reduction sur chaque élément et retourne une seule valeur
		La fonction de réduction prend un accumulateur qui est passé à chaque prochain appel
		On peut avoir une valeur initiale pour l'accumulateur
	Reduce peut être utilisé pour toutes les autres fonctions d'itération, mais n'est pas toujours le meilleur choix
	consultez cette section pour plus d'information :
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#when_to_not_use_reduce
*/

const values = [1, 2, 3, 4, 5];
let sum = values.reduce((acc, value) => acc + value);
console.log(sum); // 15
sum = values.reduce((acc, value) => acc + value, 100);
console.log(sum); // 115

// Calculer la fréquence des caractères dans une chaîne
const phrase = "aaAabb dddDD hhcc";
const letterArr = phrase.toLowerCase().split("");
const frequencies = letterArr.reduce((frequency, letter) => {
	frequency[letter] = frequency[letter] + 1 || 1;
	return frequency;
}, {});

console.log(frequencies); // {a : 4, b : 2, ' ' : 2, d : 5, h : 2, c : 2}

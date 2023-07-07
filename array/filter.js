/*
    La fonction filter permet de trouver toutes les occurence qui répondent à un prédicat 
        Un prédicat est une fonction qui retourne vrai ou faux
        Si aucun élément n'est trouvé, la réponse est un tableau vide
    La fonction a la signature suivante : filter(element,index,array)
        La majorité du temps, on utilise filter(element) seulement
*/

const myArray = ["a", "b", "abc", "unTableau", "45"];

const containsA = myArray.filter((x) => x.includes("a"));
console.log(containsA); // ['a','abc','unTableau']

const noValue = myArray.filter((x) => x.includes("f"));
console.log(noValue); // []

const users = [{ id: 15 }, { id: -2 }, { id: 0 }, { id: 3 }, {}, { id: null }, { id: "123" }];

filterById = (user) => user.id && typeof (user.id) === 'number' && user.id > 0;
const validUsers = users.filter(filterById);
console.log(validUsers); // [ { id: 15 }, { id: 3 }]

// Attention! : le résultat est un shallow copy du tableau original
validUsers[1].id = 200; // 4e objet du tableau original
console.log(users[3]); // {id: 200}

// structuredClone permet une copie profonde
users[3].id = 3;
const deepCopy = structuredClone(users).filter(filterById);
deepCopy[1].id = 200;
console.log(users[3]); // {id: 3}
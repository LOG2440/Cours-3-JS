/*
    La fonction map permet d'appliquer une fonction sur chaque élément et retourner un nouveau tableau 
      La fonction a la signature suivante : callbackFn(element,index,array)
    Si vous voulez appliquer une transformation sans avoir beson d'un nouveau tableau, utilisez forEach()
*/

// Application d'une fonction sur chaque éléments du tableau
const numbers = [0, 1, 2, 3, 4, 5];
const squared = numbers.map(val => Math.pow(val, 2));
console.log(squared); // [0, 1, 4, 9, 16, 25]
console.log(numbers); // [0, 1, 2, 3, 4, 5]

// Attention! : le résultat est un shallow copy du tableau original
const users = [{ name: 'Jean' }, { name: 'Marie' }, { name: 'Michel' }];
const usersWithId = users.map(
    user => {
        user.id = Math.round((Math.random() * 100));
        return user;
    });
usersWithId[0].name = 'Laurent';
console.log(users[0]); // {name: 'Laurent', id: 12} (id va varier)
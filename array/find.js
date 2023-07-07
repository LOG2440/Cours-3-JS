/*
    La fonction find permet de trouver la 1re occurence d'un élément ou undefined
    La logique de recherche s'effectue en fonction d'un prédicat
        Un prédicat est une fonction qui retourne vrai ou faux
    La fonction a la signature suivante : find(element,index,array)
        La majorité du temps, on utilise find(element) seulement
*/

const myArray = ["a", "b", "abc", "unTableau", "45"];

// trouve la 1re chaîne qui représente un chiffre
const number = myArray.find((x) => parseInt(x));
console.log(number); // 45

// trouve la 1re chaîne qui a une longueur de plus que 12
const nothing = myArray.find(x => x.length > 12);
console.log(nothing); // undefined


// Find arrête dès qu'il trouve 1 élément qui répond au prédicat
const cars = [{ make: "Ford" }, { make: "Honda" }, { make: "BMW" }, { make: "Toyota" }];
const bmw = cars.find(
    (car, index) => {
        console.log(`${car.make} at index ${index}`);
        return car.make === 'BMW';
    }
);
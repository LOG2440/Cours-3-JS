/*
    Tableau : objet qui contient un nombre arbitraire des valeurs (primitives ou non)
    Les valeurs peuvent être accédées à travers un index représenté par un entier positif
    L'index initial est de 0 : arr[0] et l'index final est arr.length-1
    Mettre l'attribut length à 0 vide le tableau
    Le tableau est un dequeue et peut être manipulé des 2 exterémités
    Les méthodes de copie d'un tableau donnent toujours un shallow-copy
        structuredClone() permet un deep-copy d'un tableau
*/

let arr = [1, 2, 3];
arr[4] = 5;
arr.prop = "allo";
console.log(arr); // [1,2,3, ,5, prop:'allo']
console.log(arr[3]); // undefined

// itérer sur les noms de propriétés -> for IN
for (const x in arr) {
    console.log(x);
} // 0,1,2,4,prop

// itérer sur les valeurs de propriétés -> for OF
for (const x of arr) {
    console.log(x);
} // 1,2,3,undefined,5

delete arr.prop; // supprimer la propriété additionnelle
delete arr[3]; // remplacer la valeur par undefined sans retirer l'élément
const removedElements = arr.splice(3, 1); // retire 1 élément à la position 3
console.log(arr, removedElements); // [1, 2, 3, 5] [ ]

arr.push(6); // ajouter un élément à la fin
console.log(arr); // [1, 2, 3, 5, 6]

const last = arr.pop(); // retirer et retourner la dernière valeur
const first = arr.shift(); // retirer et retourner la 1re valeur
console.log(arr, first, last); // [2, 3, 5] 1 6

arr.unshift(0); // ajouter un élément au début
console.log(arr); // [0, 2, 3, 5]

arr.length = 0; // vider le tableau
console.log(arr); // []
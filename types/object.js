/*
    Object : tableau associatif avec des pairs clé-valeur
        La clé est un string, symbol ou number(tableaux) et représente le nom de la propriété
    Contient des références vers son contenu (primitives ou autres objets)
        Lorsque passé dans une fonction, un nouvel objet est créé avec des références vers les attributs de l'objet original
    Dynamiquement modifiable durant l'exécution
    Utilise des prototypes pour étendre son comportement
        Les propriétés des prototypes sont partagées par toutes les instances
*/

/// Définition de l'objet d'un seul coup
const car = {
    make: "Ford",
    model: "Mustang",
    year: 1970,
    engine: {
        cylinders: 8,
    },
    name: function () {
        return `${this.make} ${this.model} : ${this.year}`;
    },
};

car.name(); // Ford Mustang : 1970
car.engine.cylinders // 8
car.color //undefined

/// Modification d'un objet vide existant. Équivalent au code précédant. Utilisation plutôt rare
const carObj = new Object();
carObj.make = "Ford";
carObj.model = "Mustang";
carObj.year = 1970;
carObj.engine = new Object({
    cylinders: 8,
});
carObj.name = function () {
    return `${this.make} ${this.model} : ${this.year}`;
};

carObj.name(); // Ford Mustang : 1970
carObj.engine.cylinders; // 8
carObj.color; //undefined

/// Création d'un objet à travers une fonction constructeur. "this" fait référence à l'objet créé
function Car(make, model, year, engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.name = function () {
        return `${this.make} ${this.model} : ${this.year}`;
    }
}

const carF = new Car("Ford", "Mustang", 1970, { cylinders: 8 });
console.log(carF.name()); // Ford Mustang : 1970
console.log(carF.engine.cylinders); // 8
console.log(carF.color); // undefined

/// Modification dynamique de l'objet

delete carF.name;
console.log(carF.name); /// undefined

carF.isSameModel = function (otherCar) {
  return this.model === otherCar.model;
};
const isSame = carF.isSameModel({ make: "Ford", model: "F-150" });
console.log(isSame); // false
carObj.isSameModel(carF); // Error : carObj.isSameModel is not a function

/// Prototypes et attributs partagés
Car.prototype.color = 'red'; /// modification du prototype de l'objet à travers la fonction constructeur
console.log(carF.color); // red

const car2 = new Car("Nissan", "GT-R", 2007, { cylinders: 6 });

console.log(car2.hasOwnProperty("color")); // false : la propriété "color" est sur le Prototype
console.log(car2.color); // red
console.log(car2['color']); // red : Notation tableau rarement utilisée

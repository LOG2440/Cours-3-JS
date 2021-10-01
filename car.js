function Car(make, model, year, engine) {
  // Destructuration
  [this.make, this.model, this.year, this.engine] = [make,model, year,engine];
  this.name = function () {
    return `${this.make} ${this.model} : ${this.year}`;
  };
}

const car = new Car("Ford", "Mustang", 1970, { cylinders: 8 });
car.name(); // Ford Mustang : 1970
car.engine.cylinders; // 8
delete car.name;
console.log(car.name);

car.isSameModel = function (otherCar) {
  return this.make === otherCar.make;
};
const isSame = car.isSameModel({ make: "Ford", model: "F-150" });
console.log(isSame);

// Prototypes et constructeurs
Car.prototype.color = "red";
car.color; // red

const car2 = new Car("Nissan", "GT-R", 2007, { cylinders: 6 });
console.log(car2.constructor); // f Car (le corps de la fonction)
console.log(car2.hasOwnProperty("color")); // false
car2.color; // red
car2["color"]; // red
car2.isSameModel(car); // car2.isSameModel is not a function
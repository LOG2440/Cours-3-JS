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

function Car(make, model, year, engine) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.engine = engine;
  this.name = function() {
    return `${this.make} ${this.model} : ${this.year}`;
  }
}

const car2 = new Car("Ford","Mustang",1970,{cylinders:8});
car2.name(); // Fond Mustang : 1970
car2.engine.cylinders; // 8
car2.color; // undefined

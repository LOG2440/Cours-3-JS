const square = function (x) {
  return x * x;
};

// Arrow function
const squareA = (x) => {
  return x * x;
};

// return et {} implicites
const squareB = (x) => x * x;

// () implicites
const squareC = (x) => x * x;

// () au lieu de { return {value:x} }
const returnObj = (x) => ({ value: x });

// this avec une arrow function
const obj = {
  a: "allo",
  getProp: function () {
    return this.a;
  },
  getPropArr: () => this.a,
};

console.log(obj.getProp()); // allo
console.log(obj.getPropArr()); // undefined

document.getElementById("btn").addEventListener("click", function () {
  console.log(`This from function expression : ${this}`);
}); // This from function expression : [object HTMLButtonElement]

function printThis() {
  console.log(`This from function declaration : ${this}`);
}
document.getElementById("btn").addEventListener("click", printThis);
//"This from function declaration : [object HTMLButtonElement]"

document.getElementById("btn").addEventListener("click", (e) => {
  console.log(`This from arrow function : ${this}`);
  console.log(`We should use e.target : ${e.target}`);
});
//"This from arrow function : [object Window]"
//"We should use e.target : [object HTMLButtonElement]"

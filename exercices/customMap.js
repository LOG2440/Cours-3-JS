const arr = [1, 2, 3];
let res = arr.map((val, index, arr) => {
  return { value: val, index: index, array: arr };
});
console.log(res);
/*
[ { value: 1, index: 0, array: [ 1, 2, 3 ] }, 
  { value: 2, index: 1, array: [ 1, 2, 3 ] }, 
  { value: 3, index: 2, array: [ 1, 2, 3 ] } ] 
*/

// Exercice : implémenter sa propre fonction "myMap" qui se comporte comme la méthode "map" d'un Array JS
Array.prototype.myMap = function (callback) {
  /* TODO */
};

res = arr.myMap((val, index, arr) => {
  return { value: val, index: index, array: arr };
});
console.log(res); // undefined

// Solution
// Array.prototype.myMap = function (callback) {
//   const res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push(callback(this[i], i, this));
//   }
//   return res;
// };

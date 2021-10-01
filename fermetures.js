function sum(a) {
  return function (b) {
    return a + b;
  };
}

const add3 = sum(3);
const res = add3(4); // 7

// Curification : notion plus avancée
const addition = sum(2)(5); //7

const idGenerator = function (base) {
  // existe après l'appel de la fonction
  let count = base;
  return function () {
    return `id_${++count}`;
  };
};

const idGen1 = idGenerator(0);
idGen1(); // id_1
idGen1(); // id_2
// On créé un nouveau contexte
const idGen2 = idGenerator(10);
idGen2(); // id_11
/*
  La notion de fermeture (closure) en JS est le concept de création de liens entre une fonction
  et son contexte d'appel (fonction englobante).
  Une fonction appelée a accès aux variables de la fonction appelante.
*/


function sum(a) {
  return function (b) {
    return a + b;
  };
}
/* 
  Curryfication : transformation d'une function à plusieurs argument en une fonction à 
  un argument qui retourne une fonction sur le reste des arguments
*/

const add3 = sum(3);
const res = add3(4); // 7

const addition = sum(2)(5); // 7


// Exemple de générateur incrémental

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
idGen2(); // id_12
/*
    Undefined : représente une variable sans valeur
    Null : représente une variable avec une valeur spécifique NULL
    L'accès à un attribut d'objet non inexistant retourne undefined
    Une variable undefined est ignorée dans le format JSON, mais pas null
*/

let a;
console.log(`Valeur de a : ${a}`); // undefined

const b = null;
console.log(`Valeur de b : ${b}`); // null

console.log(`${a} et ${b} sont interprétés comme false (a == b) : ${a == b}`);

console.log(`${a} et ${b} sont quand même des types différents (a === b) : ${a === b}`);

const car = { make: "Ford", model: "Mustang" };
console.log(`L'année de la voiture est : ${car.year}`); // L'année de la voiture est :undefined

const findRes = [1, 2, 3].find(x => x > 4); // on cherche les éléments plus grand que 4
console.log(`La methode find retourne ${findRes} si rien n'est trouvé`);

// Note : ceci fonctionne seulement si exécuté dans un navigateur
const findById = document.getElementById('idInexistant');
console.log(`La methode getElementById retourne ${findById} si rien n'est trouvé`);

const obj = { a: undefined, b: null };
console.log("obj selon JS : ", obj); // {a: undefined, b: null}
const objToJSON = JSON.stringify(obj);
console.log("obj selon JSON : ", objToJSON); // {"b": null}
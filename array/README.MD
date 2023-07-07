# Tableaux

Les tableaux en JS sont des objets de type `Array` avec quelques propriétés particulières 

- Les propriétés ont des noms de type `number` et l'accès se fait avec la notation [_index_]
  - Ex : array[0] <- Premier élément du tableau
- La propriété `length` indique la taille du tableau. La mettre à 0  vide le tableau
- delete array[_index_] remplace la valeur à index par `undefined` au lieu de la retirer de l’objet

Le fichier [array.js](./array.js) contient des exemples de la syntaxe de base des tableaux JS.

## Itération

La manipulation de tableaux est une action fréquente dans le développement Web. On utilise souvent l'itération pour manipuler des tableaux et/ou leurs éléments.

Le fichier [basic_for.js](./basic_for.js) contient des exemples de la syntaxe d'une boucle `for` de base en JS. Le fichier contient des exemples de `while` et `do ... while` également supportées par JS.

### Méthodes d'itération ES5 :

La version `ES5` du langage a introduit plusieurs méthodes génériques de l'objet `Array` qui sont des boucles `for` avec une sémantique plus précise.

Les fichiers suivants présentent les méthodes les plus utilisées :

- [find](./find.js) : Recherche dans un tableau
- [filter](./filter.js) : Filtrage d'un tableau 
- [sort](./sort.js) : Tri d'un tableau
- [forEach](./forEach.js) : Application d'une fonction sur chaque élément
- [map](./map.js) : Application d'un transformateur sur chaque élément
  - [map.html](./map.html) : Exemple de génération dynamique d'éléments HTML avec `map`
- [reduce](./reduce.js) : Réduction d'un tableau à une seule variable


## Les méthodes de copies

### Copie de surface vs copie profonde

Par défaut, la copie d'un tableau est une copie de surface (_shallow copy_) et la modification des éléments d'une copie detableau, surtout si ce sont des objets, modifie le tableau original. Par exemple, le code suivant change un élément du tableau original à travers sa copie:

```js
const users = [{ id: 15 }, { id: -2 },{ id: 0 }, 
    { id: 3 }, {}, { id: null }, { id: "123" }];

filterById = (user) => 
    user.id && typeof (user.id) === 'number' && user.id > 0;
const validUsers = users.filter(filterById);
validUsers[1].id = 200; // 4e objet du tableau original
users[3].id; // 200 maintenant

```

Il est possible de faire une copie profonde (_deep copy_) à l'aide de la fonction générique d'un tableau : [structuredClone](https://developer.mozilla.org/en-US/docs/Web/API/structuredClone). Dans le code suivant, le tableau initial n'est pas modifié si on manipule sa copie.

```js
const users = [{ id: 15 }, { id: -2 }, { id: 0 }, 
    { id: 3 }, {}, { id: null }, { id: "123" }];
const deepCopy = structuredClone(users);
deepCopy[0].id = 200;
users[0].id; // toujours 15
```

### ES2023 et toSorted()
Plusieurs méthodes telles que [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) manipulent le tableau original sur lequel elles sont appelés. Pour éviter de modifier le tableau, il faut créer une copie, par exemple :

```js
const sortedArray = [...arr].sort(sortingFn);
```

`ES2023` a introduit la fonction [toSorted](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted) qui permet de faire un tri sans avoir à créer une copie temporaire. Le code suivant est équivalent à celui plus haut :

```js
const sortedArray = arr.toSorted(sortingFn);
```

À noter que ce changement est récent et n'est pas disponible dans tous les navigateurs/versions de Node.js. Consultez la section de [compatibilité](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted#browser_compatibility) avant d'utiliser des fonctions récentes.
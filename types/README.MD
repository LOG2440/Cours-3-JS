# Types

Le langage JavaScript possède 8 types dont 7 primitives et [`Object`](./object.js).

Ce répertoire contient des exemples de code pour les différents types et leur utilisation.

## Primitives :
- [number](./number.js)
- [string](./string.js)
- [boolean](./boolean.js)
- [undefined](./undefined_null.js)
- [null](./undefined_null.js)
- symbol (pas de code spécifique pour ce type)
- bigint (pas de code spécifique pour ce type)

## Object

Le fichier [object.js](./object.js) contient des exemples de bases pour les objets JS. Pour des exemples plus avancés sur les objets, classes, tableaux et fonctions, consultez le reste de cet entrepôt.

## Coercition

Le langage JS essaie toujours de retourner une valeur quelconque lorsqu'on utilise des opérations sur plusieurs variables et de lancer des erreurs le moins souvent possible. Pour obtenir ce résultat, le langage fait des conversions implicites des variables en fonction d'un ensemble de règles : la coercition.


Le fichier [coercion.js](./coercion.js) contient des exemples de coercition implicites de types en JS. 

## Comparaison

Le langage JS a 2 manières de comparer des valeurs: faible et stricte. 

La comparaison faible utilise la coercition implicte entre les 2 variables comparées. La comparaison forte compare également les types des 2 variables.

Le fichier [comparaison.js](./comparaison.js) contient des exemples qui montrent la différence entre la comparaison faible et stricte en JS.

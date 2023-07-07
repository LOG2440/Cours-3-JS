# Fonctions

Les fonctions en JavaScript sont en réalité des objets (`Object`) et peuvent être utilisées comme tels. Une fonction peut être :
- Assignée à une variable
- Passée en paramètre à une autre fonction (aussi appelé _callback function_)
- Retournée par une autre fonction


# Déclaration et expression

Une fonction déclarée utilise le mot clé `function` et n'est pas assignée à une variable. Les fonctions déclarées sont affectées par le `hoisting` et peuvent être utilisées avant leur déclaration. Exemple :

```js
foo('a','b',{x: 10});

function foo(arg1, arg2, arg3) { }
```

Voir le fichier [introduction.js](./introduction.js) pour des exemples.

Une expression de fonction est une fonction assignée à une variable. Une expression peut être anonyme (pas de nom) ou nommée. Les expressions de fonctions ne sont pas affectées par le `hoisiting` et doivent obligatoirement être créées avant d'être utilisées. Exemple :

```js
const expr = function(arg1, arg2, arg3) { }

expr('a','b',{x: 10});
```

Voir le fichier [expression.js](./expression.js) pour des exemples.

# Fonctions variadiques

Les fonctions en JS sont variadiques : elles peuvent prendre un nombre arbitraire de paramètres différent de leur signature initiale. Si une fonction est appelée avec moins de paramètres que sa signature, les paramètres non passés auront la valeur `undefined`. 

Tous les arguments peuvent être accédés à travers la variable spéciale `arguments` qui est itérable. _Note_ : `arguments` n'est pas de type `Array` et n'a donc pas accès à toutes les méthodes de manipulation d'un tableau.

La syntaxe `spread` ( `...` ) pour des paramètres de quantité variable est à préférer puisque le tableau contenant les arguments est un vrai objet de type `Array` et plus facile à manipuler.

Voir le fichier [variadic.js](./variadic.js) pour des exemples.

# IIFE (Immediately Invoked Function Expression)

Une IIFE (_Immediately Invoked Function Expression_) est une fonction qui est exécutée immédiatement après sa définition. Par exemple :

```js
const uniqueId = (function () {
    let count = 0; // accessible seulement ici
    return function () {
        ++count;
        return `id_${count}`;
    };
})();

console.log(uniqueId()); // "id_1"
```

Les IIFE sont pratiques pour éviter de polluer l'espace global avec des fonctions à utilisation unique ainsi que de pouvoir créer de l'encapsulation. Dans l'exemple plus haut, la variable `count` n'est pas accessible hors du contexte lexical de l'IIFE et donc n'est pas modifiable par une fonction externe.

Voir le fichier [expression.js](./expression.js) pour l'exemple plus haut.

# Fonctions fléchées (arrow function)

Les fonctions fléchées (_arrow function_) sont une manière plus concise à écrire des expressions de fonctions, surtout dans le cas de fonctions à usage unique.

Leur nom vient de leur syntaxe : `(arg1,argN) => { statement1; statementN}`.

Dans le cas d'un seul argument (mais pas 0), les `( )` peuvent être omises.

Dans le cas d'un seul statement, les `{ }` ainsi que le `return` peuvent être omis. À noter que si on retourne un objet, il faut garder ces éléments ou entourer l'objet de `( )` pour éviter la confusion des paranthèses. Exemple :

```js 
addToObj = (val) => { return {value: val}};
addToObjMin = val => ({value : val});
```

Il est donc possible de simplifier la signature de certains fonctions. Exemple :
```js
function square(x){ 
    return x*x; 
}

const squareArr = x => x*x;
```

Voir le fichier [arrow_function.js](./arrow_function.js) pour plus d'exemples.

## Limites des fonctions fléchées

Les fonctions fléchées ont quelques contraintes :
- Ne peuvent pas être utilisés comme des fonctions constructeurs avec le mot clé `new`.
- La valeur de l'objet `this` dans une fonction fléchée dépend de son contexte de **création** et non **exécution** comme une fonction normale.


Voir le fichier [arrow_function.html](./arrow_function.html) pour un exemple de la différence de l'objet `this` dans différents contextes.

# Fermetures

JS utilise la notion de fermetures (_closures_) pour déterminer la portée des différentes variables.

Une fonction a accès à l'environnement lexical de son contexte d'appel et à toutes les variables dans cet environnement. Dans le cas d'une fonction `A` retournée par une fonction `B`, la fonction `A` a accès aux variables de `B` même si son exécution est terminée.

Cette notion de fermetures permet de créer de l'encapsulation et rendre des variables accessibles seulement par des fonctions (références) du même environnement lexical. Par exemple :

```js
function sum(a) {
  return function (b) {
    return a + b;
  };
}

const add3 = sum(3);
const res = add3(4); // 7
```

Voir le fichier [closure.js](./closure.js) pour plus d'exemples.
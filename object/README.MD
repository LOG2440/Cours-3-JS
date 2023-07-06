# Objets

Les objets en JavaScript (type `Object`) sont des tableaux associatifs : des conteneur pour d'autres valeurs. Chaque attribut a un nom de type `string`, `Symbol` ou `number` (pour les tableaux) et sa valeur peut être une primitive ou un autre objet.

Un objet réfère à son contenu. C'est pour cette raison que si un objet est passé en paramètre à une fonction, toute manipulation des attributs de la copie de l'objet dans la fonction affecte l'objet à l'extérieur.

## Prototypes

Les objets en JS peuvent avoir au plus 1 prototype qui est une instance d'un autre objet JS. Cet objet peut, à son tour, avoir un prototype formant une chaîne de taille arbitraire qui se termine par un pointeur vers la valeur `null`.

Les prototypes sont utilisés pour étendre le comportement des objets. Lorsqu'on accède à une propriété d'un objet et elle n'est pas trouvée sur l'objet, la chaîne de prototypes est parcourue pour essayer de trouver la propriété et la retourner. Si rien n'est trouvé (rendu à `null`), on retourne simplement `undefined`. Dans le cas d'un appel d'une fonction non-trouvée, une erreur est lancée.

La relation entre un objet, son prototype et son constructeur peut être vue comme un triangle où l'objet et son constructeur ont une référence vers l'instance du prototype. Par exemple :

```js
function Foo() { };
const foo = new Foo();
foo.constructor === Foo; // ceci est TRUE
Object.getPrototypeOf(foo) === Foo.prototype; // également TRUE
```

Si on ajoute un attribut au prototype d'un objet (ou son constructeur), cet attribut sera accessible à toutes les instances créés par la fonction constructeur, même celles ayant été créées avant la modification du prototype. Exemple :

```js
function Foo() {};
const foo = new Foo();
Foo.prototype.x = "123";
const foo2 = new Foo();
console.log(foo.x, foo2.x); // 123 123
```

**Attention** : ce comportement est vrai pour toute modification ou suppression aussi. La modification d'un prototype impacte toutes les instances qui l'utilisent. 

Il est possible d'ajouter des éléments dans la chaîne de prototypes avec la fonction ` Object.create(X)` ou `Object.setPrototypeOf(Y,X)`. Dans le 1er cas, on retourne un objet vide dont le prototype est `X` et dans le deuxième, on assigne `X` comme prototype à `Y` qui est un objet déjà existant. 

Voir le fichier [prototype.js](./prototype.js) pour des exemples.


## Constructeurs et patron Usine

Lorsqu'un objet est créé à travers une fonction constructeur avec le mot clé `new`, cet objet a un prototype lié à ce constructeur. Parfois, on voudrait avoir des simples objets qui sont de type `Object`. Dans un tel cas, on peut utiliser une usine (_factory_) qui est une fonction qui retourne un objet sans avoir à utiliser le mot clé `new`.

**Attention** : attention à la manipulation du prototype des objets retournés par une usine. Comme leur prototype est `Object`, une modification de leur prototype affectera tous les autres objets JS dans votre code.

Voir le fichier [factory.js](./factory.js) pour un exemple.

## Mixin

JS limite à un seul prototype par objet et il n'est donc pas possible d'avoir de l'héritage multiple pour un objet.

Il est cependant possible de mélanger (_mix_) plusieurs objets ensemble afin qu'un objet ait accès aux attributs d'un autre objet. Cette approche s'appelle des _mixin_. Un _mixin_ est un objet destiné à  être copié dans un autre.

Il y a plusieurs approches possibles : transférer les propriétés d'un objet à travers l'objet `this` dans une fonction constructeur ou en faisant avec une copie avec `Object.assign(destination,source)`. Dans les deux cas, la chaînes des prototypes n'est pas modifiée, mais peut l'être par la suite.

Voir le fichier [mixin.js](./mixin.js) pour un exemple.

### Factory et patron décorateur

Les _mixin_ sont souvent couplés avec les fonctions usine et le patron Décorateur où un objet se fait assigner des propriétés supplémentaires en fonction de l'usine utilisée. Comme on utilise des _factory_, cette approche ne modifie pas le prototype des objets originaux.

Voir le fichier [mixin_decorator.js](./mixin_decorator.js) pour un exemple.

## Objet _this_

L'objet `this` est un objet spécial en JS qui indique le contexte d'exécution. La valeur de `this` est donc variable et peut changer en fonction de comment l'objet est utilisé.

Voici les règles pour la valeur de `this` :
- Dans le contexte global, `this` représente l'objet global (`window` ou `global`)
- Dans une méthode d'un objet, `this` représente l'objet appelant
- Dans une fonction constructeur, `this` représente l'objet retourné
- Dans une fonction fléchée, `this` représente le contexte de création de la fonction et ne change pas si le contexte d'exécution change

### Contexte d'exécution variable

Comme `this` change en fonction de son contexe d'exécution, il peut être intéressant de fixer sa valeur d'un contexte à l'autre.
Il est possible de faire ceci avec la fonction `foo.bind(someContext)` qui retourne une copie de la fonction `foo` où `this` a la valeur `someContext`. Par exemple :

```js
const myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

myButton.click(); // OK clicked
const looseClick = myButton.click; // hors de l'objet
looseClick(); // undefined clicked

// Utilisation de bind() : lorsque la fonction sera appelée, "this" fera référence à myButton 
const boundClick = myButton.click.bind(myButton);
boundClick(); //OK clicked
```

Il est possible d'appeler une fonction en lui spécifiant la valeur de `this` avec `foo.call(someContext)`. Par exemple :

```js
const myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

myButton.click.call({content : "New"}); // New clicked
```

Voir le fichier [this.js](./this.js) pour plus d'exemples.

## Notation class

La version ES2015 a ajouté la syntaxe `class` en JS pour rapprocher le langage à d'autres langages orientés objet (C++, Java, C#, etc.). Une classe JS utilise les prototypes en arrière et se comporte de manière très similaire à une fonction constructeur. Exemple : 

```js
class Person {
    constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() { return this.name; }

  isOld() { return this.age >= 30; }
}
```

### Héritage

Il est possible d'hériter d'une classe avec le mot clé `extends` et comme les prototypes, il est possible d'hériter d'une seule classe à la fois. 

Il faut faire appel au mot clé `super` dans le constructeur de la class enfant avant de pouvoir utiliser l'objet `this`. `super` est une référence vers la classe parent à l'extérieur du constructeur. Exemple :

```js
class Student extends Person {
    constructor(name, age, id) {
        super(name, age); // nécessaire avant l'utilisation de this
        this.id = id;
    }
}
```

### Attributs privés

La version ES2022 a ajouté la notion d'attributs privés dans une classe. Par défaut, tout attribut d'une classe est public à moins que son nom commence par `#`, ex : `#name`.

Un attribut privé est accessible seulement à l'intérieur d'une classe et génère une erreur si on essaie d'y accéder à l'extérieur. Ceci est également vrai pour les classes enfant : JS n'a pas encore la notion d'attribut protégé accessible par l'héritage. Exemple :

**Note** : le code suivant ne lancera pas d'erreur pour `michel.#name` dans la console de certains navigateurs (ex: Chrome/Chromium) puisqu'ils permettent l'accès à des attributs privés à des fins de débogage.
```js
class Person {
    #name;
    constructor(name){
        this.#name = name;
    }
    get name() { return this.#name;}
}

const michel = new Person("Michel");
console.log(michel.name); // Michel
console.log(michel.#name); // erreur

class Student extends Person {
    constructor(name, id){
        super(name);
        console.log(this.#name); //erreur
    }
}
```

Voir le fichier [classes.js](./classes.js) pour plus d'exemples.
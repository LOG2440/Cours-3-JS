console.log(this); // objet Window
function printThis() {
  console.log(this);
} // objet Window
printThis();

// this dans un objet
function MyObj() {
  return {
    a: 123,
    f: function () {
      console.log(this);
    },
  };
}
let obj = MyObj();
obj.f(); // donne {a:123, f:ƒ}

const obj2 = {
  i: 10,
  b: () => console.log(this.i),
  c: function () {
    console.log(this.i);
  },
};
obj2.b(); // retourne undefined : Window.i n'existe pas
obj2.c(); // retourne 10
const obj3 = { i: 20 };
obj2.c.call(obj3); // retourne 20
obj2.b.call(obj3); // retourne toujours undefined

let myButton = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

myButton.click(); // OK clicked
let looseClick = myButton.click; // hors de l'objet
looseClick(); // undefined clicked
let boundClick = myButton.click.bind(myButton);
boundClick(); //OK clicked

function printThis() {
  console.log(`This from function declaration : ${this}`);
} //"This from function declaration : [object HTMLButtonElement]"
document.getElementById("btn").addEventListener("click", printThis);
printThis(); // "This from function declaration : [object Window]"

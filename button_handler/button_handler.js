const ButtonHandler = {
  getRandom: function () {
    return Math.floor(Math.random() * 10);
  },
  getValue: function () {
    console.log(this.getRandom());
  },
  addHandler: function () {
    const button = document.getElementById("btn");
    button.addEventListener("click",this.getValue);
  },
};

ButtonHandler.addHandler();


/* Solution
// button.addEventListener("click", this.getValue.bind(this));
// button.addEventListener("click", ()=> this.getValue());
*/

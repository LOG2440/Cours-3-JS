const teams = ["Habs", 
"Lightning", 
"Maple Leafs", 
"Golden Knights", 
"Penguins"];




/* Solution #1
Remplacer var par let
*/

// Solution #2
function loadTeams() {
  const listItems = document.getElementsByClassName("team");
  for (var i = 0; i < listItems.length; i++) {
    (function (newI) {
      listItems[newI].addEventListener("click", (e) => {
        e.target.textContent = teams[newI];
      });
    })(i);
  }
}

// Solution #3
// Variant de #2 avec le mot clé const
function loadTeams() {
  const listItems = document.getElementsByClassName("team");
  for (var i = 0; i < listItems.length; i++) {
    const newI = i;
    listItems[newI].addEventListener("click", (e) => {
      e.target.textContent = teams[newI];
    });
  }
}
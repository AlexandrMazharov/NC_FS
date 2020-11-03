let arrFB = [];
let SIZEFB = 100;
generatearrFB();
console.log(arrFB);
addElements();
function generatearrFB() {
  let SIZEFB = SIZEFB;
  for (let i = 0; i < SIZEFB; i++) {
    arrFB[i] = i;

    if (!(i % 3)) {
      arrFB[i] = "Fizz";
    }
    if (!(i % 5)) {
      arrFB[i] = "Bluzz";
    }
    if (!(i % 3) && !(i % 5)) {
      arrFB[i] = "FizzBluzz";
    }
    arrFB[0] = 0;
  }
}

function addElements() {
  let SIZEFB = SIZEFB;
  for (let i = 0; i < SIZEFB; i++) {
    // Создаем новый элемент div
    // и добавляем в него немного контента

    var newDiv = document.createElement("span");
    newDiv.innerHTML = arrFB[i];
    newDiv.classList.add("item");
    // Добавляем только что созданый элемент в дерево DOM
    let game = document.getElementById("game");
    startgame = document.getElementById("startgame");

    game.insertBefore(newDiv, startgame);
  }
}

let arr = [];
let SIZE = 100;
generateArr();
console.log(arr);
addElements();
function generateArr() {
  let size = SIZE;
  for (let i = 0; i < size; i++) {
    arr[i] = i;

    if (!(i % 3)) {
      arr[i] = "Fizz";
    }
    if (!(i % 5)) {
      arr[i] = "Bluzz";
    }
    if (!(i % 3) && !(i % 5)) {
      arr[i] = "FizzBluzz";
    }
    arr[0] = 0;
  }
}

function addElements() {
  let size = SIZE;
  for (let i = 0; i < size; i++) {
    // Создаем новый элемент div
    // и добавляем в него немного контента

    var newDiv = document.createElement("span");
    newDiv.innerHTML = arr[i];
    newDiv.classList.add("item");
    // Добавляем только что созданый элемент в дерево DOM
    let game = document.getElementById("game");
    startgame = document.getElementById("startgame");

    game.insertBefore(newDiv, startgame);
  }
}

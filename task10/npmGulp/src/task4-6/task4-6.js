const MIN = 0;
const MAX = 1000;
function startgame() {
  let target = randomInteger();
  console.log("Искомое число" + target);
  let inputs = "";
  let counst = 0;
  do {
    inputs = prompt("Введите число", [100]);
    inputs = Number(inputs);
    // если число не корректное, то требуем коррекктное
    if (!Number.isInteger(inputs)) {
      do {
        inputs = prompt("Введите  коректное число", [100]);

        console.log(inputs);
      } while (!Number.isInteger(inputs));
    }
    // console.log(inputs);
    //сравнение в искомым
    if (inputs > target) alert("Искомое число меньше");
    else if (inputs < target) alert("Искомое число больше");
    counst++;
  } while (inputs !== target);
  result = confirm(`Вы угадали. Количество попыток ${counst} Начать заново?`);
  if (result == true) {
    startgame();
  }
}

// получить случайное число от (min-0.5) до (max+0.5)
function randomInteger() {
  let rand = MIN - 0.5 + Math.random() * (MAX - MIN + 1);
  return Math.round(rand);
}

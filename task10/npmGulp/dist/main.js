alert("Привет, JavaScript");

let a = 4;
let b = 5;
console.group("task0");
console.log(a, b);

console.log("classic");
let c = a;
a = b;
b = c;
console.log(a, b);

console.log("magic JS");
console.log(a, b);
b = [a, (a = b)][0]; 
console.log(a, b);
console.groupEnd();


let name = "";
do {
  name = prompt("Ваше имя", ["alexandr"]);
} while (name == "");
name = name.toLowerCase().charAt(0).toUpperCase() + name.substr(1);
let age = "";

age = prompt("Ваш возраст", ["-3"]);
console.log(typeof age);

if (!(age >= 0 && typeof age == "string ")) {
  do{
    age = prompt("Введите коректный возраст", ["-3"]);
  }
  while(
    (!(age >= 0 && typeof age == "string "))
  )
}
alert(`Привет, ${name}, тебе уже ${age} лет!`);

let arr = [];
let MinValue = 1; // MinValue size on arr
let MaxValue = 100; //MaxValue size on arr
const LENGTH = 20; // array length
completionArr(arr, LENGTH); // заполяем массив

console.log(arr);
sort(arr, "desc");
// sort(arr, "ask");
console.log(arr);

function sort(arr, direction) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }

  if (direction === "desc") {
    arr.reverse();
  }
  return arr;
}

function completionArr(arr, length) {
  for (let i = 0; i < length; i++) arr[i] = randoMinValueteger(MinValue, MaxValue);
}

function randoMinValueteger(MinValue, MaxValue) {
  // получить случайное число от (MinValue-0.5) до (MaxValue+0.5)
  let rand = MinValue - 0.5 + Math.random() * (MaxValue - MinValue + 1);
  return Math.round(rand);
}

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

let word = prompt("Word", ["abba"]);

function checkPalindrom(str) {
  return str == str.split("").reverse().join("");
}
function customCheckPalindrom(str) {
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[str.length - i]) {
      return false;
    }
  }
}

console.log(customCheckPalindrom(word));
checkPalindrom(word)
  ? alert(`${word} is polindrome`)
  : alert(`${word} is not polindrome`);

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
    if (!Number.isInteger((inputs))) {
      do {
        inputs = prompt("Введите  коректное число", [100]);

        console.log((inputs));
      } while (!Number.isInteger((inputs)));
    }
    // console.log(inputs);
    //сравнение в искомым
    if ((inputs) > (target)) alert("Искомое число меньше");
    else if ((inputs) < (target)) alert("Искомое число больше");
    counst++;
  } while ((inputs) !== target);
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

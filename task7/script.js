let input_label = document.getElementById("input_text");
let input_label_old = document.getElementById("input_old");
let current = "";
let old = "";
let result = "";
let operand = "";
let keyboard = document.getElementById("keyboard");

function main(newItem) {
  if (isOperand(newItem)) {
    //ОПЕРАНД
    //если вводят операнд
    if (current != "") {
      old = current;
      operand = newItem;
      current = "";
      input_label_old.value = old + operand;
      input_label.value = "";

      if (operand == "√") {
        result = sqr(old);
        clear();
      }
    } else if (newItem == "-") {
      current = "-";
      input_label.value = current;
    }
  } else if (newItem == "=") {
    // РАВНО
    if (input_label_old.value != "=") {
      if (old != "" && current != "" && operand != "") {
        switch (operand) {
          case "+": {
            result = sum(old, current); // Number(old) + Number(current);
            break;
          }
          case "-": {
            result = sub(old, current);
            break;
          }
          case "*": {
            result = mul(old, current);
            break;
          }
          case "/": {
            result = div(old, current);
            break;
          }
          case "^": {
            result = degree(old, current);
          }
        }
        clear();
      }
    }
  } else if (isFigure(newItem)) {
    addFigure(newItem);
  } else if (newItem == "C") {
    operand = current = old = result = "";
    input_label.value = input_label_old.value = "";
  }
}
let sum = new Function("a", "b", "return Number(a) + Number(b)");
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => (a / b).toFixed(3);
let degree = (a, b) => Math.pow(a, b);
let sqr = (a) => Math.sqrt(a).toFixed(3);

let clear = function clearCalc() {
  let calc = old + operand + current + "=" + result;
  addHistory(calc);

  input_label_old.value = input_label_old.value + current + "=" + result;
  current = result;
  old = "";
  operand = "";
  input_label.value = result;
};
function addFigure(newfigure) {
  //добавляем цифру
  if (current != result) {
    current += newfigure;
  } else {
    current = newfigure;
  }
  input_label.value = current;
}

function moveRect(event) {
  let symbol = event.key;
  if (event.key == "Enter") symbol = "=";
  if (event.key == "Escape") symbol = "C";

  main(symbol);
}

addEventListener("keydown", moveRect);
keyboard.onclick = function (event) {
  let target = event.target;
  if (target.tagName != "span") {
    main(target.innerHTML);
  }
};

let addHistory = function addHistory(inserted) {
  let history = document.getElementById("history__list");
  let item = document.createElement("div");
  item.classList.add("itemHistory");
  item.innerHTML = inserted;
  history.prepend(item);
};

function isFigure(symbol) {
  if ((symbol >= "0" && symbol <= "9") || symbol == ".") return true;
  else return false;
}
function clearHistory() {
  let history = document.getElementById("history__list");
  let newHistory = history.cloneNode(false);
  history.replaceWith(newHistory);
}

function isOperand(symbol) {
  if (
    symbol == "+" ||
    symbol == "-" ||
    symbol == "*" ||
    symbol == "/" ||
    symbol == "^" ||
    symbol == "√"
  )
    return true;
  else return false;
}

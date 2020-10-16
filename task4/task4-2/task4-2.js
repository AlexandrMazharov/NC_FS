let name = "";
do {
  name = prompt("Ваше имя", ["alexandr"]);
} while (name == "");
name = name.toLowerCase().charAt(0).toUpperCase() + name.substr(1);
let age = "";
age = prompt("Ваш возраст", ["-3"]);
if (age < 0 || age == "") {
  do {
    age = prompt("Введите коректный возраст", ["-3"]);
  } while (age < 0 || age == "");
}
console.log(age);

alert(`Привет, ${name}, тебе уже ${age} лет!`);

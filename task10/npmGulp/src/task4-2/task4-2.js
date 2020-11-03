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

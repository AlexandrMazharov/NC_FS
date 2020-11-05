let arr = [];
let MIN = 1; // min size on arr
let MAX = 100; //max size on arr
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
  for (let i = 0; i < length; i++) arr[i] = randomInteger(MIN, MAX);
}

function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

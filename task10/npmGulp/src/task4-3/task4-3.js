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

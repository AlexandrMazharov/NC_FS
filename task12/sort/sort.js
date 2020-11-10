let arr = [];
let MIN = 1; // min size on arr
let MAX = 1000; //max size on arr
const LENGTH = 20; // array length


completionArr(arr, LENGTH); // заполяем массив

console.log(arr);
let newArr = quickSort(arr);
console.log(newArr);

let newArr2 = radixSort(arr)
console.log(newArr2);

function radixSort(arr) {
    let seniorRadix = calculateSeniorRadix(arr);
    let counter = 1;

    return sort(arr);

    // recursive
    function sort(arr) {
        if (counter > seniorRadix) {
            return arr;
        }

        let workList = createWorkList();

        let outArr = [];

        arr.forEach(num => {
            workList[
                String(zfill(num, seniorRadix).slice(-counter)[0])
                ].unshift(num);
        });

        for (let i = 0; i < 10; i++) {
            let cell = workList[String(i)];
            if (cell.length !== 0 && (cell instanceof Array)) {
                cell.reverse().forEach(num => outArr.push(num));
            }
        }
        counter++;
        return sort(outArr);
    }

    function calculateSeniorRadix(arr) {
        let seniorRadix = 0;
        arr.forEach(num => {
            let l = String(num).length;
            seniorRadix = (l > seniorRadix) ? l : seniorRadix;
        });
        return seniorRadix;
    }

    function zfill(num, size) {
        let s = String(num);
        while (s.length < size) { s = "0" + s; }
        return s;
    }

    function createWorkList() {
        let workList = {};
        for (let i = 0; i < 10; i++) {
            workList[String(i)] = [];
        }

        return workList;
    }
}

function quickSort(A) {
    if (A.length == 0) return [];
    let a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++) {
        if (A[i] < p) a[a.length] = A[i];
        else b[b.length] = A[i];
    }
    return quickSort(a).concat(p, quickSort(b));
}

function completionArr(arr, length) {
    for (let i = 0; i < length; i++) arr[i] = randomInteger(MIN, MAX);
}

function randomInteger(min, max) {
    // получить случайное число от (min-0.5) до (max+0.5)
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}



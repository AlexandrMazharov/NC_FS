import {from, fromEvent, observable, Observable} from "rxjs";
import {filter, scan, map, mapTo, mergeAll, combineAll} from "rxjs/operators";
import {take} from 'rxjs/operators';

import {merge, interval} from 'rxjs'


// task1();
// task2();
// task3();



// Создать поток, который передает числа от 1 до 100.
// Из этого потока вывести все простые числа.
function task1() {
    console.group("task1");
    let arr = [];
    completionArr(arr);
    const stream$ = from(arr);
    stream$.pipe(
        filter(val => primality(val) == true),
        scan((acc, val) => console.log(val)))
        .subscribe(val => {
        });

    function primality(n) {
        let isPrimality = true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) isPrimality = false;
        }
        return isPrimality;
    }

    function completionArr(arr) {
        let length = 100;
        for (let i = 0; i < length; i++) arr[i] = i;
    }

    console.groupEnd();
}

// Создать Observable, который ведет отсчет от 5 до 1, после этого выбрасывает ошибку и завершается.
// Создать Observer, который слушает Observable и выводит информацию в alert.
function task2() {
    const stream2$ = new Observable(observer => {

        observer.next("first");
        setTimeout(() => observer.next("5"), 1000);
        setTimeout(() => observer.next("4"), 2000);
        setTimeout(() => observer.next("3 "), 3000);
        setTimeout(() => observer.next("2"), 4000);
        setTimeout(() => observer.next("1"), 5000);
        setTimeout(() => {
            observer.error("Error")
            observer.complete();
        }, 6000);
    })
    stream2$.subscribe(i => {
        alert(i);
        console.log(i)
    });

}

// task3
// Создать три кнопки
// Создать три потока из события click, которые соответствуют каждой своей кнопке.
// Объединить потоки в один, и по каждому событию из потока рандомно менять фон страницы.
function task3() {
    let el1 = window.document.getElementById("btn1");
    let el2 = window.document.getElementById("btn2");
    let el3 = window.document.getElementById("btn3");

    const clicks1 = fromEvent(el1, 'click')
    const clicks2 = fromEvent(el2, 'click')
    const clicks3 = fromEvent(el3, 'click');

    const higherOrder = merge(clicks1, clicks2, clicks3).pipe(
        map((ev) => interval(1000).pipe(take(10))),
    );
    const firstOrder = higherOrder.pipe(mergeAll(3));
    firstOrder.subscribe(x => {
        console.log(x);
        setNewBackground();
    });


    function setNewBackground() {
        const doc = document.querySelector("body");
        doc.style.backgroundColor = getRandomColor();
    }

    function getRandomColor() {
        let color = Math.floor(Math.random() * 16777216).toString(16);
        return '#000000'.slice(0, -color.length) + color;

    }
}

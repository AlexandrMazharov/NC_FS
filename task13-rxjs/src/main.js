import {from, fromEvent, mapTo, observable, Observable} from "rxjs";
import {filter, scan} from "rxjs/operators";

import {merge, interval} from 'rxjs'

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

function task2() {
    const stream2$ = new Observable(observer => {

        observer.next("first");
        setTimeout(() => observer.next("last"), 1000);
        setTimeout(() => observer.next("second"), 2000);
        setTimeout(() => observer.next("three "), 3000);
        setTimeout(() => observer.next("four"), 4000);
        setTimeout(() => observer.next("five"), 5000);
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

const observable1 = new Observable(observer => {
    setTimeout(() => observer.next("last"), 1000);
    setTimeout(() => observer.next("second"), 2000);
    setTimeout(() => observer.next("three "), 3000);
    setTimeout(() => observer.next("four"), 4000);
    setTimeout(() => observer.next("five"), 5000);
    observer.complete();
})
const observable2 = new Observable(observer => {
    setTimeout(() => observer.next("last"), 1000);
    setTimeout(() => observer.next("second"), 2000);
    setTimeout(() => observer.next("three "), 3000);
    setTimeout(() => observer.next("four"), 4000);
    setTimeout(() => observer.next("five"), 5000);
    observer.complete();
})
const observable3 = new Observable(observer => {
    setTimeout(() => observer.next("last"), 1000);
    setTimeout(() => observer.next("second"), 2000);
    setTimeout(() => observer.next("three "), 3000);
    setTimeout(() => observer.next("four"), 4000);
    setTimeout(() => observer.next("five"), 5000);
    observer.complete();
})
const a= merge(observable1, observable2, observable3);

window.startObservable1 = function () {
    console.log("start1")

    observable1.subscribe(res=>{
        console.log(res)});
    a.subscribe(res => {
        console.log("tatat")
    });
}

window.startObservable2 = function () {
    console.log("start2")
    a.subscribe(res => {
        console.log("tatat")
    });
}

window.startObservable3 = function () {
    console.log("start3")
    a.subscribe(res => {
        console.log("tatat")
    });
}









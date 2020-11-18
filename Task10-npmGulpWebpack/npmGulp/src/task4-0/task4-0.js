function task0() {
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
}

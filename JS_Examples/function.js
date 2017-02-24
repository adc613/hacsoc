function multiply1(x, y) {
  return x * y;
}

let multiply2 = function(x, y) {
  return x * y;
};

// ES6/ES2015 syntax
let multiply3 = (x, y) => {
  return x * y;
};

console.log("multiply1");
console.log(multiply1(2, 3));

console.log("multiply2");
console.log(multiply2(2, 3));

console.log("multiply3");
console.log(multiply3(2, 3));


// Like any variable you can then assing multiply2 to be anything
multiply2 = 20;

console.log("multiply2 now equals:");
console.log(multiply2);

function example(func, x, y) {
  return func(x, y);
}

console.log("functions can be passed in as arguments");
console.log(example( multiply3, 2, 3 ));

let ary = [
  {a: 1},
  {a: 2},
  {a: 1},
  {a: -5},
  {a: 3},
];

console.log(ary);
ary.sort();
console.log(ary[0] - ary[1]);
console.log(ary);

let func = (obj1, obj2) => {
  return obj1.a - obj2.a;
};

ary.sort(func);



console.log(ary);

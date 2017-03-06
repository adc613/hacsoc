/**
 * FUNCTIONS
 *
 * There are several way to decalr functions
 */


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


console.log( "multiply1: " + multiply1(2, 3) );
console.log( "multiply2: " + multiply2(2, 3) );
console.log( "multiply3: " + multiply3(2, 3) );


multiply2 = 20; // Like any variable you can then assing multiply2 to be anything


console.log("multiply2 now equals: " + multiply2);


/**
 * One cool part of JavaScript is that functions can be passed in as arguments
 */
function example(func, x, y) {
  return func(x, y);
}

console.log("Passing in Multply3 gives you: " + example( multiply3, 2, 3 ));

/**
 * Why is passing in an function useful?
 */
let ary = [
  {a: 1},
  {a: 2},
  {a: 1},
  {a: -5},
  {a: 3},
];

/**
 * Order won't change if we call sort
 */
console.log(ary);
ary.sort();
console.log(ary);


/**
 * Lets write a comparator function (think compareTo in Java)
 */
let compareTo = (obj1, obj2) => {
  return obj1.a - obj2.a;
};

ary.sort(compareTo);

/**
 * Now the array is sorted how we want it to be
 */
console.log(ary);

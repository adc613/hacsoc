/**
 * LET vs. VAR
 *
 * As of ES2015 there are two ways to declare variables, using let and using
 * var. Var can behave weirdly when dealing with blcok level statments such
 * as lopps and if statements.
 */

let sum = 0;
let ary = [1, 1, 1];

for(let i = 0; i < ary.length; i++) {
  let x = 0;
  sum += ary[i];
}

console.log('--- let example ---');
console.log("i = " + i); // i == undefined
console.log("x = " + x); // x == undefined

/**
 * x and i will continue to exist outside of the loop
 */
for(var i = 0; i < ary.length; i++) {
  var x = 1;
  sum += ary[i];
}

console.log('--- var example ---');
console.log("i = " + i); // i == 3
console.log("x = " + x); // x == 1

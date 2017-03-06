/**
 * SYNTAX BASICS
 *
 * JavaScript is a scripting language so there's no need for a main funciton
 * like there is in Java. It'll just run through this script in order and run
 * each line of code as it appears
 */

var anotherVariable; // declaring a variable, var and let behave differently. Let is less weird so it's best practice to use let if possible
let variable; // declaring a variable

let number = 1;

let string1 = "hello world"; // Strings can be declared with double quotes "
let string2 = 'hello world'; // Strings can be declased wtih single quotes '
let string3 = 'h'; // Characters don't exist like they do in Java, this is still a string

let bool1 = true; // booleans exist like in any lanuage
let bool2 = false;

let nullType = null; // null type
let undefinedType = undefined; // Undefined, a declared variable with that hasn't been defiend yet has an undefined value
let NotANumber = NaN; // Not a Number, returned when you try to do bad math

let obj = {}; // Object type, it's a data structure that holds key value pairs
let ary = [1, 2, 3]; // An Array behaves similar to javascript

let x = 10;
let y = 3;
// z === 3.333333333333333333 and z !== 3 ints and doubles don't exists just numbers
let z = x / y;

console.log(typeof x);
console.log("x = " + x); // string concation with a +
console.log("y = " + y);
console.log("x / y = " + z);


console.log("------- for loop ------");
/*
 * General for loop, same as Java
 */
for(let i = 0; i < ary.length; i++) {
  console.log(ary[i]);
}
console.log("======= for loop ======");

console.log("----- while loop -----");
/*
 * General while loop, same as Java
 */
let i = 0;
while( i < ary.length ) {
  console.log(ary[i]);
  i++;
}
console.log("===== while loop =====");

/**
 * JavaScript has all the same comparators as Java
 * ==, !=, >, <, <=, >=
 */
if(1 == 1) {
  console.log("1 equals 1");
}

if(1 != 2) {
  console.log("1 does not equal 1");
}


// Will print JavaScript is weird
if(1 == '1') {
  console.log("JavaScript is weird");
} else {
  console.log("JavaScript is not weird");
}

/**
 * It's typically considered best practice to use === or !== opposed to == or !=
 */
if(1 === '1') {
  console.log("This will never print");
} else {
  console.log("Sanity check"); // will return sanity check
}

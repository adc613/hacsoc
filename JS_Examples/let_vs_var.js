let sum = 0;
let ary = [1, 1, 1];

for(let i = 0; i < ary.length; i++) {
  let x = 0;
  sum += ary[i];
}

console.log(i); // i == undefined
console.log(x); // x == undefined

for(var i = 0; i < ary.length; i++) {
  var x = 1;
  sum += ary[i];
}

console.log(i); // i == 3
console.log(x); // x == 1

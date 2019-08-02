
var result = [];

var i;
for (i = 0; i <= 5; i++) {
  result[i] = function() {
    console.log(i);
  };
}
// console.log(i);
// result[0]();
// result[1]();
// result[2]();
// result[3]();
// result[4]();

var name = "Michael Jackson";
function showOrdinaryPersonName() {
  name = "Johnny Evers";
  console.log(name);
}
function showCelebrityName() {
  console.log(name);
}
// showCelebrityName();
// showOrdinaryPersonName();
// showCelebrityName ();

function foo() {
  console.log(a);
}
function bar() {
  var a = 3;
  foo();
}
var a = "Ahihi";
// bar();

function run() {
  if (1) {
    var m = 100;
    console.log(m);
  }
  console.log(m);
}
// run();



var findMin = (...agruments) => console.log(Math.min(...agruments));

// findMin();
var objA = {x: 0, y: 0, z: 2}
var objB = {b: 3, c: 4}
// console.log(Object.keys(Object.assign(objA,objB)));

// console.log(objA);
// console.log(objB);
const score = {visitors: 0, home: 0};
// This is okay
score.visitorss = 1;
// console.log(score);
var a = [1,123,12,423,5,234]


//Unshift and shift array
// console.log(b);
// console.log(a.push(123));
// console.log(a.unshift(123));
// console.log(a.shift());
// console.log(a.splice());
// console.log(a);

let objc {name: "Faraji", age: 23}
const { name } = objc;

console.log(name);

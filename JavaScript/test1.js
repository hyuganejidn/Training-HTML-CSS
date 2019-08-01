// 'use strict'
var result = [];

var i;
for (i = 0; i <= 5; i++) {
  result[i] = function() {
    console.log(i);
  };
}
console.log(i);
result[0]();
result[1]();
result[2]();
result[3]();
result[4]();

var name = "Michael Jackson";
function showOrdinaryPersonName() {
  name = "Johnny Evers";
  console.log(name);
}
function showCelebrityName() {
  console.log(name);
}
showCelebrityName();
showOrdinaryPersonName();
// showCelebrityName ();

function foo() {
  console.log(a);
}
function bar() {
  var a = 3;
  foo();
  console.log(a);
}
var a = "Ahihi";
bar();

function run() {
  if (1) {
    var m = 100;
    console.log(m);
  }
  console.log(m);
}
run();

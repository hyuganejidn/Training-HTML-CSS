
// Looping a triangle
var loopingTriangle = n => {
  for (let triangle = "#"; triangle.length <= n; triangle += "#")
    console.log(triangle);
};
// loopingTriangle(10);
// FizzBuzz
fizzBuzz = function() {
  for (let i = 1; i <= 100; i++) {
    console.log(
      (i % 15 ? "" : "FizzBuzz") ||
        (i % 3 ? "" : "Fizz") ||
        (i % 5 ? "" : "Buzz") ||
        i
    );
  }
};
// fizzBuzz();
//ChessBroard
// chessBroard(8);
function chessBroard(n) {
  for (var i = 0; i < 8; i++) {
    for (var a = 0; a < 8; a++) {
      board += a % 2 == i % 2 ? " " : "#";
    }
    board += "\n";
  }
}
var x = 10;
function foo() {
  var y = x + 5;
  return y;
}

function bar() {
  var x = 2;
  return foo() + x;
}

function main() {
  // Static scope: 15; Dynamic scope: 15
  // Static scope: 15; Dynamic scope: 7
  return bar();
}
// console.log(bar());
// console.log(main());

var result = [];
var i
for ( i = 0; i < 5; i++) {
  result[i] = function() {
    console.log(i);
  };
}
result[0]();
result[1]();
result[2]();
result[3]();
result[4]();

var name = "Michael Jackson";
function showOrdinaryPersonName () {
    name = "Johnny Evers";
    console.log (name);
}
function showCelebrityName () {
  console.log (name);
}
showCelebrityName ();


var user = {
  tournament: "The Masters",
  data: [{ name: "T. Woods", age: 37 }, { name: "P. Mickelson", age: 43 }],
  clickHandler: function() {
    //Sử dụng con trỏ this ở đây thì OK, this đang mang giá trị tham chiếu tới đối tượng “user”
    this.data.forEach(function(person) {
      //Tuy nhiên, trong closure này thì this không còn tham chiếu tới đối tượng “user” nữa
      // Hàm inner function này không thể truy cập tới this của outer function
      console.log(person.name + " is playing at ");
    });
  }
};

// user.clickHandler();
var name = "Peter";
var Hocsinh = {
  name: "John",
  printName: function() {
    console.log(this.name);
  }
};

// var printHocsinhName = Hocsinh.printName.bind(Hocsinh);

// printHocsinhName();
var gameController = {
  scores: [10, 15, 20],
  avgScore: null,
  players: [
    { name: "Tommy", playerID: 987, age: 23 },
    { name: "Pau", playerID: 87, age: 33 }
  ]
};
var appController = {
  scores: [30, 40, 50],
  avgScore: null,
  computeAvg: function() {
    var sumOfScores = this.scores.reduce(function(prev, cur, index, array) {
      return prev + cur;
    });
    this.avgScore = sumOfScores / this.scores.length;
  }
};

var firstName = "Hoang",
  lastName = "Pham";

function showName() {
  console.log(this.firstName + " " + this.lastName);
}

// this.showName();
// window.showName();

//prototype
function Wife(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.cook = () => {
    console.log("cooking mycay");
    return this
  };
  this.eat = function() {
    console.log("eat");
  };
}


Wife.prototype.karaoke = function() {
  console.log("abc");
};
Wife.prototype.ay = "abcxyz";

Function.prototype.vantruong = function(){
  console.log("lovehung");
}
Object.prototype.makeSandwich = function() {
  console.log("sudo make me a sandwich");
};

var ngocTrinh = new Wife("Ngoc", "Trinh");
// Wife.prototype = {ay: 1}
var wife = new Wife();
for (let skill in ngocTrinh.__proto__) {
  // console.log(skill);
}
// console.log("+++++++++++");
// console.log(wife.__proto__);
// wife.zxc = "asd";

// ngocTrinh.aya = "abcxyz";

// console.log(ngocTrinh.__proto__)
// console.log(ngocTrinh.__proto__.ay === ngocTrinh.ay);
console.log(ngocTrinh.__proto__);
console.log(Wife.__proto__.__proto__);
// console.log(Wife.prototype.karaoke());
// console.log(wife);
// console.log(new Wife);

for (let skill in new Wife) {
  // console.log(skill);
}
function Husband() {}
Husband.prototype = new Wife();
var hb = new Husband();
// console.log("===========");
// console.log(Husband.prototype);
// console.log(new Wife());
// console.log("===========");
// console.log(new Husband());
// console.log(hb.ay);
// console.log("+++++++++++");
// console.log(hb);
var skill__pro, skill
for (skill__pro in hb.__proto__) {
  // console.log(skill__pro);
}
// for (skill__pro in hb) {
//   console.log(skill);
// }
// console.log(skill__pro);
// console.log(hb.cook().eat());

// //
// function Cooking() {
//   this.cook = function() {
//     console.log("nau aan");
//   };
// }

// Cooking.prototype.hocNauAn = function() {
//   this.cook = function() {
//     console.log("hocnau an");
//   };
// };

// var vl = new Cooking();
// var vb = new Cooking();
// vl.hocNauAn();
// vl.cook();
// console.log("_____");
// vb.cook();


var obj = {
  name: "Hung",
  method: function(run) {
      console.log(this.name);
      run();
  }
};
// function dihoc(run) {
//   console.log("di hoc");
//   run();
// }



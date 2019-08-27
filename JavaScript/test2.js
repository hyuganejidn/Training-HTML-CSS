//Destrustering
let objc = { name: "Faraji", age: 23 };
const { name } = objc;
let obj2 = { name };

console.log(name);

//Exercises
function range(a, b, c = 0) {
  let arr = [];
  let i, j;
  a <= b ? ((i = a), (j = b)) : ((j = a), (i = b));
  let d = c < 0 ? -c : c;
  for (i; i <= j; i = i + d) {
    c >= 0 ? arr.push(i) : arr.unshift(i);
  }
  return arr;
}
console.log(range(7, 1, -2));
// console.log(range(1, 10).reduce((a, b) => a + b, 0));
let total = 0, count = 1;
while (count <= 10) {
total += count;
count += 1;
}
console.log(total);

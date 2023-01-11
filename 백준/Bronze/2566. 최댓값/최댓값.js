const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [];
for (i = 0; i < 9; i++) {
  arr.push(input[i].split(" "));
}
arr = arr.flat(1).map(Number);
let maxIndex = arr.indexOf(Math.max(...arr));
console.log(Math.max(...arr));
console.log(Math.floor(maxIndex / 9) + 1, (maxIndex % 9) + 1);

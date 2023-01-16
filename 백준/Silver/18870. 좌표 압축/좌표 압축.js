const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();

const arr = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const set = new Set(arr);
const map = new Map();

[...set].forEach((item, index) => {
  map.set(item, index);
});

let result = "";
input[0].split(" ").forEach((item, index) => {
  result += map.get(+item) + " ";
});
console.log(result);

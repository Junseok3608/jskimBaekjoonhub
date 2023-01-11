const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const arr = input.map((e) => e % 42);
const set = new Set(arr);
const newArr = [...set];
console.log(newArr.length);
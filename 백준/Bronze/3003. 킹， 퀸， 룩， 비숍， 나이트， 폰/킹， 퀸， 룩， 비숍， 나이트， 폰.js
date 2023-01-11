const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

const origin = [1, 1, 2, 2, 2, 8];

let result = input.map((x, i) => origin[i] - x);
console.log(...result);

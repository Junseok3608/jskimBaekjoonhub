const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
const cnt = input.shift();
const result = input.sort((a, b) => a- b);
console.log(result.join('\n'));

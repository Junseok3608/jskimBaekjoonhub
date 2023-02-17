const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
const n = input.shift();
input.sort((a, b) => b - a);
let result = [];

for (i = 0; i < n; i++) {
  result.push(input[i] * (i + 1));
}
console.log(result.sort((a, b) => b - a)[0]);

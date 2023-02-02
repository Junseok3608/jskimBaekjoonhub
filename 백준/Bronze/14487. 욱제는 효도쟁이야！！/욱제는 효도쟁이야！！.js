const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = input[1]
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
arr.pop();
console.log(arr.reduce((a, b) => a + b));

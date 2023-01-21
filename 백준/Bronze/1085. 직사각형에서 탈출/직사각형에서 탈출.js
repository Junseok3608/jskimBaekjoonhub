const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((a) => +a);
input[2] -= input[0];
input[3] -= input[1];
console.log(Math.min.apply(null, input));
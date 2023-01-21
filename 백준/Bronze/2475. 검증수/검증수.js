const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = 0;
for (i = 0; i < input.length; i++) {
  result += input[i] ** 2;
}
console.log(result % 10);
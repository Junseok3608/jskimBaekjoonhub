const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let num = String(input[0] * input[1] * input[2]);
for (i = 0; i < 10; i++) {
  console.log(num.split(i + "").length - 1);
}
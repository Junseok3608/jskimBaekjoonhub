const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

for (i = 0; i < input.length; i++) {
  let n = input[i].trim().split(" ").map(Number);
  n[2] - n[1] > n[1] - n[0] ? console.log(n[2] - n[1] - 1) : console.log(n[1] - n[0] - 1);
}

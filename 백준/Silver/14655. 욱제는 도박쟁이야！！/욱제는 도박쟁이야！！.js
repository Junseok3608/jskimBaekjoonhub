const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
const [n, max, min] = fs.readFileSync(filePath).toString().trim().split("\n");
const maxNum = max.split(" ").map((v) => Math.abs(v));
const minNum = min.split(" ").map((v) => Math.abs(v));
let result = 0;
for (i = 0; i < n; i++) {
  result += maxNum[i] + minNum[i];
}
console.log(result);

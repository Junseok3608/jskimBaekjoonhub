const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let [n, A, B] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = 0;
A = A.split(" ")
  .map(Number)
  .sort((a, b) => a - b);
B = B.split(" ")
  .map(Number)
  .sort((a, b) => b - a);
for (i = 0; i < n; i++) {
  result += A[i] * B[i];
}
console.log(result);

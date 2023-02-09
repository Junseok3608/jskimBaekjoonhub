const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
const [n, input] = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = 0;
let add = 0;
for (i = 0; i < n; i++) {
  result += add + arr[i];
  add += arr[i];
}
console.log(result);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("-")
  .map((a) => a.split("+").map(Number));

let result = 0;

for (i = 0; i < input[0].length; i++) {
  result += input[0][i];
}
for (i = 1; i < input.length; i++) {
  for (j = 0; j < input[i].length; j++) {
    result -= input[i][j];
  }
}
console.log(result);

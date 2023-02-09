const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
const n = fs.readFileSync(filePath).toString().trim();
let result = 1;
for (i = 1; i <= n; i++) {
  result *= i;
}
console.log(result);

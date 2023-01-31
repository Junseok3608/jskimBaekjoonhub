const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);
let change = [25, 10, 5, 1];
let result = [];

for (i = 0; i < n; i++) {
  let money = input[i];
  for (j = 0; j < change.length; j++) {
    result += `${Math.floor(money / change[j])} `;
    money %= change[j];
  }
  result += `\n`;
}
console.log(result);

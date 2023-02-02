const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
input = input[0].trim().split(" ").map(Number);
let cnt = 0;
for (i in input) {
  if (input[i] === cnt % 3) {
    cnt++;
  }
}
console.log(cnt);

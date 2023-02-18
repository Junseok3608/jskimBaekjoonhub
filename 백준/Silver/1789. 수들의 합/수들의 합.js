const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = Number(fs.readFileSync(filePath).toString().trim());
let cnt = 0;
let num = 0;

for (i = 1; num < input; i++) {
  num += i;
  cnt++;
  if (num > input) {
    cnt--;
    break;
  }
}
console.log(cnt);

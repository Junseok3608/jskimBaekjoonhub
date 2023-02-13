const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let [nk, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let [n, k] = nk.split(" ").map(Number);
input = input.map(Number);

let cnt = 0;
for (i = n - 1; i >= 0; i--) {
  if (k / input[i] >= 0) {
    cnt += Math.floor(k / input[i]);
    k = k % input[i];
  }
}
console.log(cnt);

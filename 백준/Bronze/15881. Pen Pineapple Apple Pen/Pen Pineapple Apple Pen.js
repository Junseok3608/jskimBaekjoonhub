const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[0].split("");
let cnt = 0;
for (i = 0; i < n; i++) {
  if (arr[i] === "p" && i + 3 < n) {
    if (arr.slice(i, i + 4).join("") === "pPAp") {
      cnt++;
      i += 3;
    }
  }
}
console.log(cnt);

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
const [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let ans = 0;
let fin = 0;

const arr = input
  .map((a) => a.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .forEach((t) => {
    if (t[0] >= fin) {
      ans++;
      fin = t[1];
    }
  });
console.log(ans);

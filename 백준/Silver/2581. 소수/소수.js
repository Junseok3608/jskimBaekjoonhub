const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [L, H] = input.map(Number);
let arr = [];
function sosoo(n) {
  if (n < 2) return;
  for (let j = 2; j < n; j++) {
    if (n % j == 0) return;
  }
  arr.push(n);
}
for (let i = L; i <= H; i++) {
  sosoo(i);
}
if (arr == 0) {
  console.log(-1);
} else {
  console.log(arr.reduce((a, b) => a + b));
  console.log(Math.min(...arr));
}

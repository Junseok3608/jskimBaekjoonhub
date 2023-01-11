const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const [L, H] = input.map(Number);
let arr = [];
let result = "";
for (let i = 0; i <= H; i++) {
  arr.push(true);
}
arr[0] = false;
arr[1] = false;
for (let j = 2; j <= H; j++) {
  if (arr[j]) {
    for (let k = 2; k <= H / j; k++) {
      arr[j * k] = false;
    }
  }
}
for (let l = L; l <= H; l++) {
  if (arr[l]) result += l + "\n";
}
console.log(result.trim());
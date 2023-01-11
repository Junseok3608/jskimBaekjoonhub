const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);
let nums = input[1].split(" ").map(Number);
let result = 0;
function sosoo(n) {
  if (n < 2) return;
  for (let j = 2; j < n; j++) {
    if (n % j == 0) return;
  }
  result++;
}
for (let i = 0; i < T; i++) {
  sosoo(nums[i]);
}

console.log(result);
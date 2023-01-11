const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const counter = Number(input[0]);

for (i = 1; i <= counter; i++) {
  const nums = input[i].split(" ").map(Number);
  const [A, B] = nums;
  console.log(A + B);
}

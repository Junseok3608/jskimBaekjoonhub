const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const counter = Number(input[0]);
let result = "";

for (let i = 1; i <= counter; i++) {
  const nums = input[i].split(" ").map(Number);
  result += nums[0] + nums[1] + "\n";
}

console.log(result);

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const nums = input[1].split("").map(Number);
let result = 0;
for (i = 0; i < Number(input[0]); i++) {
  result = result + nums[i];
}
console.log(result);

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const mNums = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const [N, X] = mNums;
let result = [];
for (let i = 0; i < N; i++) {
  if (A[i] < X) {
    result.push(A[i]);
  }
}
console.log(result.join(" "));

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(BigInt);
const [A, B] = input;
console.log(String(A + B));

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [num, ind] = input[0].split(" ").map(Number);
const result = input[1].split(" ").map(Number);
console.log(result.sort((a, b) => b - a)[ind - 1]);

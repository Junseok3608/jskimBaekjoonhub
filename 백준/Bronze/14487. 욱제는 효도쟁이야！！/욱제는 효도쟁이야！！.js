const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let arr = input[1].trim().split(" ").map(Number);
const sum = arr.reduce((a, b) => a + b);
const max = Math.max.apply(null, arr);
console.log(sum - max);

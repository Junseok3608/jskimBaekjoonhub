const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let [n, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
let couple = input[0].match(/LL/gi);
console.log(couple <= 1 ? n : n - couple.length + 1);

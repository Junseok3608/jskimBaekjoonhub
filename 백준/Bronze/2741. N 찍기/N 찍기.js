const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());

const result = [];
for (i = 1; i < input + 1; i++) result.push(i);
console.log(result.join("\n"));
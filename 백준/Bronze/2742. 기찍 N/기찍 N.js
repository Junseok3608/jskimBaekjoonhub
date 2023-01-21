const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
const result = [];
for (i = input; i > 0; i--) result.push(i);
console.log(result.join("\n"));
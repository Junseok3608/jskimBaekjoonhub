const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let cnt = input.shift();
let result = input.sort((a,b)=>a-b);
for (i = 0; i < cnt; i++) {
  console.log(result[i]);
}
